import { NextRequest, NextResponse } from "next/server";
import {
  getAvailability,
  saveDirectReservation,
  saveManualBlock,
  removeEvent,
} from "@/lib/calendar/storage";

export const dynamic = "force-dynamic";

/**
 * GET: Retrieve real-time availability and blocked dates
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const suiteId = searchParams.get("suite") || "penthouse";
    const from = searchParams.get("from") || undefined;
    const to = searchParams.get("to") || undefined;

    const availability = await getAvailability(suiteId, from, to);
    return NextResponse.json(availability, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to fetch availability", message: err?.message },
      { status: 500 }
    );
  }
}

/**
 * POST: Reserve dates (Direct Guest) or Manual Block (Concierge / Owner)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, startDate, endDate, suiteId, summary, guestName, guestEmail, guestPhone } = body;

    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: "Both startDate and endDate are required in YYYY-MM-DD format" },
        { status: 400 }
      );
    }

    const currentAvailability = await getAvailability(suiteId || "penthouse");

    // Check for collisions with existing blocked ranges
    const checkStart = new Date(startDate);
    const checkEnd = new Date(endDate);

    if (checkEnd <= checkStart) {
      return NextResponse.json(
        { error: "Check-out date must be strictly after check-in date" },
        { status: 400 }
      );
    }

    // Check if any night within the requested stay is in blockedDates
    const collisionDates: string[] = [];
    const cur = new Date(checkStart);
    while (cur < checkEnd) {
      const curStr = cur.toISOString().split("T")[0];
      if (currentAvailability.blockedDates.includes(curStr)) {
        collisionDates.push(curStr);
      }
      cur.setDate(cur.getDate() + 1);
    }

    if (collisionDates.length > 0) {
      return NextResponse.json(
        {
          error: "Selected dates conflict with an existing reservation or channel block.",
          conflictingDates: collisionDates,
        },
        { status: 409 }
      );
    }

    if (action === "block") {
      const blockEvent = await saveManualBlock(
        startDate,
        endDate,
        summary || "Owner / Maintenance Hold",
        suiteId || "penthouse"
      );
      return NextResponse.json({ success: true, event: blockEvent }, { status: 201 });
    }

    // Default: Direct guest reservation
    const reservation = await saveDirectReservation({
      startDate,
      endDate,
      suiteId: suiteId || "penthouse",
      summary: summary || `Direct VIP Stay (${guestName || "Guest"})`,
      description: `Direct booking for ${guestName || "VIP Guest"} (${startDate} to ${endDate})`,
      guestName,
      guestEmail,
      source: "direct",
      status: "confirmed",
    });

    return NextResponse.json({ success: true, reservation }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Reservation submission failed", message: err?.message },
      { status: 500 }
    );
  }
}

/**
 * DELETE: Remove a manual block or cancel an event
 */
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const eventId = searchParams.get("id");

    if (!eventId) {
      return NextResponse.json({ error: "eventId is required" }, { status: 400 });
    }

    await removeEvent(eventId);
    return NextResponse.json({ success: true, deletedId: eventId }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to delete event", message: err?.message },
      { status: 500 }
    );
  }
}
