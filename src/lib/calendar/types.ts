export type EventSource = "direct" | "airbnb" | "booking_com" | "custom" | "owner_block";

export type EventStatus = "confirmed" | "tentative" | "cancelled";

export interface CalendarEvent {
  id: string;
  uid: string;
  summary: string;
  description?: string;
  startDate: string; // ISO format: YYYY-MM-DD
  endDate: string;   // ISO format: YYYY-MM-DD
  source: EventSource;
  status: EventStatus;
  suiteId?: string;
  guestName?: string;
  guestEmail?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CalendarFeedConfig {
  id: string;
  platform: "airbnb" | "booking_com" | "custom";
  name: string;
  url: string;
  suiteId: string;
  active: boolean;
  lastSync?: string;
  lastStatus?: "success" | "error";
  errorMessage?: string;
  eventsImported?: number;
}

export interface BlockedDateRange {
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  source: EventSource;
  summary: string;
}

export interface AvailabilityResponse {
  suiteId: string;
  from: string;
  to: string;
  blockedRanges: BlockedDateRange[];
  blockedDates: string[]; // List of specific dates (YYYY-MM-DD) that cannot be booked as night stays
  feedsStatus: {
    airbnbSynced: boolean;
    bookingComSynced: boolean;
    lastSyncTimestamp?: string;
  };
}

export interface SyncResult {
  success: boolean;
  timestamp: string;
  totalFeeds: number;
  successfulFeeds: number;
  failedFeeds: number;
  totalEventsImported: number;
  feedDetails: {
    platform: string;
    name: string;
    eventsCount: number;
    status: "success" | "error";
    error?: string;
  }[];
}
