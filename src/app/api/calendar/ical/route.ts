import { NextRequest, NextResponse } from "next/server";
import { getEvents } from "@/lib/calendar/storage";
import { generateICalFeed } from "@/lib/calendar/ical";

export const dynamic = "force-dynamic";

/**
 * Public Outbound iCal Feed
 * Copy this URL into Airbnb and Booking.com import settings:
 * e.g. https://www.magmercyapartments.com/api/calendar/ical?suite=penthouse
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const suiteId = searchParams.get("suite") || "penthouse";

    // Fetch confirmed reservations and blocks
    const events = await getEvents(suiteId);

    // Format RFC 5545 iCalendar string
    const icsContent = generateICalFeed(
      events,
      suiteId === "penthouse" ? "Sovereign Penthouse" : `Suite ${suiteId}`
    );

    return new NextResponse(icsContent, {
      status: 200,
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": 'inline; filename="magmercy_calendar.ics"',
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (err: any) {
    console.error("Error generating outbound iCal feed:", err);
    return NextResponse.json(
      { error: "Failed to generate iCal feed", message: err?.message },
      { status: 500 }
    );
  }
}
