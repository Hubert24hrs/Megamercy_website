import { NextRequest, NextResponse } from "next/server";
import { getFeeds, saveFeed, replaceImportedEvents } from "@/lib/calendar/storage";
import { parseICalFeed } from "@/lib/calendar/ical";
import { SyncResult } from "@/lib/calendar/types";

export const dynamic = "force-dynamic";

/**
 * Executes calendar synchronization across all configured feeds (Airbnb & Booking.com)
 */
async function performSync(suiteId?: string): Promise<SyncResult> {
  const feeds = await getFeeds(suiteId);
  const activeFeeds = feeds.filter((f) => f.active && f.url && f.url.trim().length > 0);

  const result: SyncResult = {
    success: true,
    timestamp: new Date().toISOString(),
    totalFeeds: feeds.length,
    successfulFeeds: 0,
    failedFeeds: 0,
    totalEventsImported: 0,
    feedDetails: [],
  };

  for (const feed of feeds) {
    if (!feed.active || !feed.url || feed.url.trim().length === 0) {
      result.feedDetails.push({
        platform: feed.platform,
        name: feed.name,
        eventsCount: 0,
        status: "success",
      });
      continue;
    }

    try {
      // Fetch external iCal .ics feed
      const res = await fetch(feed.url, {
        headers: {
          "User-Agent": "MagMercy-PMS-Sync/1.0",
          Accept: "text/calendar, text/plain, */*",
        },
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const icsText = await res.text();
      const parsedEvents = parseICalFeed(icsText, feed.platform, feed.suiteId);

      // Save imported events
      await replaceImportedEvents(feed.platform, feed.suiteId, parsedEvents);

      // Update feed config state
      await saveFeed({
        ...feed,
        lastSync: new Date().toISOString(),
        lastStatus: "success",
        errorMessage: undefined,
        eventsImported: parsedEvents.length,
      });

      result.successfulFeeds++;
      result.totalEventsImported += parsedEvents.length;
      result.feedDetails.push({
        platform: feed.platform,
        name: feed.name,
        eventsCount: parsedEvents.length,
        status: "success",
      });
    } catch (err: any) {
      console.error(`Failed to sync ${feed.platform} feed (${feed.name}):`, err);

      await saveFeed({
        ...feed,
        lastSync: new Date().toISOString(),
        lastStatus: "error",
        errorMessage: err?.message || "Network or parse error",
      });

      result.failedFeeds++;
      result.feedDetails.push({
        platform: feed.platform,
        name: feed.name,
        eventsCount: 0,
        status: "error",
        error: err?.message || "Sync failed",
      });
    }
  }

  return result;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const suiteId = body?.suiteId || undefined;

    const syncReport = await performSync(suiteId);
    return NextResponse.json(syncReport, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Sync operation failed", message: err?.message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const suiteId = searchParams.get("suite") || undefined;

    const syncReport = await performSync(suiteId);
    return NextResponse.json(syncReport, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Sync operation failed", message: err?.message },
      { status: 500 }
    );
  }
}
