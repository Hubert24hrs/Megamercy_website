import fs from "fs";
import path from "path";
import {
  CalendarEvent,
  CalendarFeedConfig,
  AvailabilityResponse,
  BlockedDateRange,
  EventSource,
} from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "pms_calendar.json");

interface PMSDataStore {
  feeds: CalendarFeedConfig[];
  events: CalendarEvent[];
  lastGlobalSync?: string;
}

// Initial default feeds & sample confirmed stays
const DEFAULT_STORE: PMSDataStore = {
  feeds: [
    {
      id: "airbnb-primary",
      platform: "airbnb",
      name: "Airbnb MagMercy Penthouse Listing",
      url: "", // Host pastes their live export link here
      suiteId: "penthouse",
      active: true,
      lastSync: new Date().toISOString(),
      lastStatus: "success",
      eventsImported: 1,
    },
    {
      id: "booking-primary",
      platform: "booking_com",
      name: "Booking.com Ikoyi Residence",
      url: "", // Host pastes their live export link here
      suiteId: "penthouse",
      active: true,
      lastSync: new Date().toISOString(),
      lastStatus: "success",
      eventsImported: 1,
    },
  ],
  events: [
    {
      id: "airbnb-demo-1",
      uid: "airbnb-2026-demo-oct",
      summary: "Airbnb Reserved (Diplomatic Guest)",
      description: "Imported via Airbnb iCal Calendar Sync",
      startDate: getFutureDate(4),
      endDate: getFutureDate(7),
      source: "airbnb",
      status: "confirmed",
      suiteId: "penthouse",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "booking-demo-1",
      uid: "bcom-2026-demo-oct",
      summary: "Booking.com Reserved (Executive Board)",
      description: "Imported via Booking.com iCal Calendar Sync",
      startDate: getFutureDate(12),
      endDate: getFutureDate(16),
      source: "booking_com",
      status: "confirmed",
      suiteId: "penthouse",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "direct-demo-1",
      uid: "direct-vip-2026-1",
      summary: "Direct VIP Penthouse Stay",
      description: "Booked via direct MagMercy luxury reservation portal",
      startDate: getFutureDate(20),
      endDate: getFutureDate(24),
      source: "direct",
      status: "confirmed",
      suiteId: "penthouse",
      guestName: "Ambassadorial Delegation",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
};

function getFutureDate(daysAhead: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  return d.toISOString().split("T")[0];
}

/**
 * Ensures data directory and JSON file exist
 */
function ensureDataStore(): PMSDataStore {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(DEFAULT_STORE, null, 2), "utf-8");
      return DEFAULT_STORE;
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading PMS data store, using in-memory defaults:", err);
    return DEFAULT_STORE;
  }
}

function writeDataStore(data: PMSDataStore): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing PMS data store:", err);
  }
}

/**
 * Get all configured feeds
 */
export async function getFeeds(suiteId?: string): Promise<CalendarFeedConfig[]> {
  const store = ensureDataStore();
  if (suiteId) {
    return store.feeds.filter((f) => f.suiteId === suiteId || f.suiteId === "all");
  }
  return store.feeds;
}

/**
 * Upsert or update a feed configuration
 */
export async function saveFeed(feed: CalendarFeedConfig): Promise<CalendarFeedConfig> {
  const store = ensureDataStore();
  const existingIdx = store.feeds.findIndex((f) => f.id === feed.id);
  if (existingIdx >= 0) {
    store.feeds[existingIdx] = { ...store.feeds[existingIdx], ...feed };
  } else {
    store.feeds.push(feed);
  }
  writeDataStore(store);
  return feed;
}

/**
 * Delete a feed
 */
export async function deleteFeed(feedId: string): Promise<void> {
  const store = ensureDataStore();
  store.feeds = store.feeds.filter((f) => f.id !== feedId);
  writeDataStore(store);
}

/**
 * Get all calendar events
 */
export async function getEvents(suiteId?: string): Promise<CalendarEvent[]> {
  const store = ensureDataStore();
  if (suiteId) {
    return store.events.filter((e) => !e.suiteId || e.suiteId === suiteId);
  }
  return store.events;
}

/**
 * Record a new direct website reservation
 */
export async function saveDirectReservation(
  eventData: Omit<CalendarEvent, "id" | "uid" | "createdAt" | "updatedAt" | "source" | "status"> & {
    source?: EventSource;
    status?: CalendarEvent["status"];
  }
): Promise<CalendarEvent> {
  const store = ensureDataStore();
  const now = new Date().toISOString();
  const id = `direct-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const newEvent: CalendarEvent = {
    id,
    uid: `${id}@magmercylagos.com`,
    summary: eventData.summary || "Direct VIP Reservation",
    description: eventData.description || "Direct guest booking via MagMercy website",
    startDate: eventData.startDate,
    endDate: eventData.endDate,
    source: eventData.source || "direct",
    status: eventData.status || "confirmed",
    suiteId: eventData.suiteId || "penthouse",
    guestName: eventData.guestName,
    guestEmail: eventData.guestEmail,
    createdAt: now,
    updatedAt: now,
  };

  store.events.push(newEvent);
  writeDataStore(store);
  return newEvent;
}

/**
 * Add a manual owner block
 */
export async function saveManualBlock(
  startDate: string,
  endDate: string,
  summary: string = "Maintenance / Owner Hold",
  suiteId: string = "penthouse"
): Promise<CalendarEvent> {
  return saveDirectReservation({
    startDate,
    endDate,
    summary,
    description: "Manual block applied by MagMercy Concierge management",
    source: "owner_block",
    status: "confirmed",
    suiteId,
  });
}

/**
 * Remove an event
 */
export async function removeEvent(eventId: string): Promise<void> {
  const store = ensureDataStore();
  store.events = store.events.filter((e) => e.id !== eventId);
  writeDataStore(store);
}

/**
 * Replace imported events from an external feed (e.g. Airbnb or Booking.com)
 */
export async function replaceImportedEvents(
  source: EventSource,
  suiteId: string,
  incomingEvents: CalendarEvent[]
): Promise<number> {
  const store = ensureDataStore();

  // Keep direct bookings, manual blocks, and events from other sources
  const retainedEvents = store.events.filter(
    (e) => !(e.source === source && (!e.suiteId || e.suiteId === suiteId))
  );

  // Append new parsed events
  const updatedEvents = [...retainedEvents, ...incomingEvents];
  store.events = updatedEvents;
  store.lastGlobalSync = new Date().toISOString();

  writeDataStore(store);
  return incomingEvents.length;
}

/**
 * Check availability and calculate all blocked dates
 */
export async function getAvailability(
  suiteId: string = "penthouse",
  fromStr?: string,
  toStr?: string
): Promise<AvailabilityResponse> {
  const store = ensureDataStore();
  const allEvents = store.events.filter(
    (e) => e.status !== "cancelled" && (!e.suiteId || e.suiteId === suiteId)
  );

  const blockedRanges: BlockedDateRange[] = allEvents.map((e) => ({
    startDate: e.startDate,
    endDate: e.endDate,
    source: e.source,
    summary: e.summary,
  }));

  // Build a set of all individual blocked calendar night dates
  const blockedDatesSet = new Set<string>();

  for (const range of blockedRanges) {
    const cur = new Date(range.startDate);
    const end = new Date(range.endDate);

    // Block every night up to check-out day (check-out day can often be next guest's check-in day)
    while (cur < end) {
      blockedDatesSet.add(cur.toISOString().split("T")[0]);
      cur.setDate(cur.getDate() + 1);
    }
  }

  const airbnbFeed = store.feeds.find((f) => f.platform === "airbnb" && f.active);
  const bookingFeed = store.feeds.find((f) => f.platform === "booking_com" && f.active);

  const todayStr = new Date().toISOString().split("T")[0];
  const defaultTo = new Date();
  defaultTo.setMonth(defaultTo.getMonth() + 6);

  return {
    suiteId,
    from: fromStr || todayStr,
    to: toStr || defaultTo.toISOString().split("T")[0],
    blockedRanges,
    blockedDates: Array.from(blockedDatesSet).sort(),
    feedsStatus: {
      airbnbSynced: airbnbFeed?.lastStatus === "success",
      bookingComSynced: bookingFeed?.lastStatus === "success",
      lastSyncTimestamp: store.lastGlobalSync || airbnbFeed?.lastSync || bookingFeed?.lastSync,
    },
  };
}
