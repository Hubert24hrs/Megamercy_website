import { CalendarEvent, EventSource } from "./types";

/**
 * Formats a Date or ISO string into an iCal DATE string: YYYYMMDD
 */
export function formatICalDate(dateStr: string): string {
  // Accepts YYYY-MM-DD or full ISO
  const cleaned = dateStr.replace(/[-:]/g, "").slice(0, 8);
  return cleaned;
}

/**
 * Formats an iCal string into standard ISO YYYY-MM-DD
 */
export function parseICalDate(icalDateStr: string): string {
  // Handles:
  // "20261015" -> "2026-10-15"
  // "20261015T120000Z" -> "2026-10-15"
  // "2026-10-15" -> "2026-10-15"
  const digits = icalDateStr.replace(/[^0-9]/g, "");
  if (digits.length >= 8) {
    const year = digits.slice(0, 4);
    const month = digits.slice(4, 6);
    const day = digits.slice(6, 8);
    return `${year}-${month}-${day}`;
  }
  return icalDateStr;
}

/**
 * Generates an RFC 5545 compliant iCalendar (.ics) string for export
 * Compatible with Airbnb, Booking.com, VRBO, Google Calendar, and Apple Calendar.
 */
export function generateICalFeed(
  events: CalendarEvent[],
  suiteName: string = "MagMercy Penthouse Residence"
): string {
  const nowStr = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//MagMercy Apartment//Availability Sync 1.0//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:MagMercy Apartment - ${suiteName}`,
    "X-WR-TIMEZONE:Africa/Lagos",
  ];

  for (const event of events) {
    if (event.status === "cancelled") continue;

    const dtStart = formatICalDate(event.startDate);
    const dtEnd = formatICalDate(event.endDate);

    lines.push(
      "BEGIN:VEVENT",
      `UID:${event.uid || `magmercy-${event.id}@magmercylagos.com`}`,
      `DTSTAMP:${nowStr}`,
      `DTSTART;VALUE=DATE:${dtStart}`,
      `DTEND;VALUE=DATE:${dtEnd}`,
      `SUMMARY:${event.summary || "Reserved - MagMercy Direct VIP"}`,
      `DESCRIPTION:${event.description || "Direct VIP Reservation at 89 Lafiaji St, Dolphin Estate, Ikoyi"}`,
      `STATUS:${event.status === "tentative" ? "TENTATIVE" : "CONFIRMED"}`,
      "TRANSP:OPAQUE",
      "END:VEVENT"
    );
  }

  lines.push("END:VCALENDAR");

  // RFC 5545 requires CRLF line breaks
  return lines.join("\r\n") + "\r\n";
}

/**
 * Parses raw .ics file content imported from Airbnb or Booking.com
 */
export function parseICalFeed(
  icsContent: string,
  source: EventSource,
  suiteId: string = "penthouse"
): CalendarEvent[] {
  // Step 1: Unfold lines (lines starting with space or tab belong to the previous line)
  const unfolded = icsContent.replace(/\r?\n[ \t]/g, "");
  const lines = unfolded.split(/\r?\n/);

  const events: CalendarEvent[] = [];
  let inEvent = false;
  let currentEvent: Partial<CalendarEvent> = {};

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].trim();
    if (!rawLine) continue;

    if (rawLine === "BEGIN:VEVENT") {
      inEvent = true;
      currentEvent = {
        source,
        suiteId,
        status: "confirmed",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      continue;
    }

    if (rawLine === "END:VEVENT") {
      if (inEvent && currentEvent.startDate && currentEvent.endDate) {
        // Fallback for UID
        if (!currentEvent.uid) {
          currentEvent.uid = `${source}-${currentEvent.startDate}-${Math.random().toString(36).slice(2, 9)}`;
        }
        currentEvent.id = currentEvent.uid;
        if (!currentEvent.summary) {
          currentEvent.summary = source === "airbnb" ? "Airbnb Reservation" : "Booking.com Reservation";
        }
        events.push(currentEvent as CalendarEvent);
      }
      inEvent = false;
      currentEvent = {};
      continue;
    }

    if (!inEvent) continue;

    // Parse property and value
    const colonIndex = rawLine.indexOf(":");
    if (colonIndex === -1) continue;

    const propertyPart = rawLine.slice(0, colonIndex);
    const value = rawLine.slice(colonIndex + 1).trim();

    // Property name before any parameters (e.g. DTSTART;VALUE=DATE)
    const propName = propertyPart.split(";")[0].toUpperCase();

    switch (propName) {
      case "UID":
        currentEvent.uid = value;
        break;

      case "SUMMARY":
        currentEvent.summary = value;
        break;

      case "DESCRIPTION":
        currentEvent.description = value;
        break;

      case "DTSTART":
        currentEvent.startDate = parseICalDate(value);
        break;

      case "DTEND":
        currentEvent.endDate = parseICalDate(value);
        break;

      case "STATUS":
        const st = value.toUpperCase();
        if (st.includes("CANCEL")) currentEvent.status = "cancelled";
        else if (st.includes("TENTATIVE")) currentEvent.status = "tentative";
        else currentEvent.status = "confirmed";
        break;
    }
  }

  return events;
}
