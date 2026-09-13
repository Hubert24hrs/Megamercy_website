"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import {
  Calendar as CalendarIcon,
  Copy,
  Check,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Plus,
  Trash2,
  AlertCircle,
  CheckCircle2,
  Globe,
  Lock,
  ArrowRight,
  FileText,
} from "lucide-react";
import { CalendarFeedConfig, CalendarEvent, SyncResult } from "@/lib/calendar/types";

export default function AdminCalendarPage() {
  const [copiedOutbound, setCopiedOutbound] = useState(false);
  const [feeds, setFeeds] = useState<CalendarFeedConfig[]>([]);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<SyncResult | null>(null);

  // Manual block inputs
  const [blockStart, setBlockStart] = useState("");
  const [blockEnd, setBlockEnd] = useState("");
  const [blockReason, setBlockReason] = useState("Owner Residence Stay");
  const [submittingBlock, setSubmittingBlock] = useState(false);

  // Feed URL edits
  const [airbnbUrl, setAirbnbUrl] = useState("");
  const [bookingComUrl, setBookingComUrl] = useState("");
  const [savingFeeds, setSavingFeeds] = useState(false);
  const [feedSaveMessage, setFeedSaveMessage] = useState<string | null>(null);

  // Determine origin for outbound feed URL
  const [origin, setOrigin] = useState("https://magmercylagos.com");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const outboundICalUrl = `${origin}/api/calendar/ical?suite=penthouse`;

  // Fetch initial data
  const loadData = async () => {
    setLoading(true);
    try {
      // Fetch availability
      const availRes = await fetch("/api/availability?suite=penthouse");
      if (availRes.ok) {
        // Fetch events
        const evRes = await fetch("/api/availability");
      }

      // Fetch sample feeds by triggering sync test
      const syncRes = await fetch("/api/calendar/sync");
      if (syncRes.ok) {
        const syncData = await syncRes.json();
        setSyncResult(syncData);
      }
    } catch (err) {
      console.error("Error loading admin calendar:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCopyOutbound = () => {
    navigator.clipboard.writeText(outboundICalUrl);
    setCopiedOutbound(true);
    setTimeout(() => setCopiedOutbound(false), 3000);
  };

  const handleSyncAll = async () => {
    setSyncing(true);
    try {
      const res = await fetch("/api/calendar/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ suiteId: "penthouse" }),
      });
      const data: SyncResult = await res.json();
      setSyncResult(data);
      await loadData();
    } catch (err) {
      console.error("Sync error:", err);
    } finally {
      setSyncing(false);
    }
  };

  const handleSaveManualBlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blockStart || !blockEnd) return;

    setSubmittingBlock(true);
    try {
      const res = await fetch("/api/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "block",
          startDate: blockStart,
          endDate: blockEnd,
          summary: blockReason,
          suiteId: "penthouse",
        }),
      });
      if (res.ok) {
        setBlockStart("");
        setBlockEnd("");
        await loadData();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to block dates");
      }
    } catch (err) {
      console.error("Error adding block:", err);
    } finally {
      setSubmittingBlock(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24 pt-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-charcoal-900/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 border border-charcoal-900/15 text-xs font-mono tracking-widest text-coastal-blue uppercase font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CONCIERGE PMS ENGINE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-charcoal-900 mt-2">
            Property Management &amp; Channel Sync
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
            Bidirectional calendar synchronization for 89 Lafiaji Street, Dolphin Estate, Ikoyi.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto flex-wrap">
          <Link
            href="/admin/listing-kit"
            className="px-4 py-3 rounded-2xl bg-sand-100 hover:bg-sand-200 border border-charcoal-900/10 text-charcoal-800 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
          >
            <FileText className="w-4 h-4 text-bronze-600" />
            <span>Airbnb &amp; Booking.com Kit</span>
          </Link>

          <button
            type="button"
            onClick={handleSyncAll}
            disabled={syncing}
            className="px-5 py-3 rounded-2xl bg-coastal-blue hover:bg-coastal-blue-hover text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-md shadow-coastal-blue/20 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${syncing ? "animate-spin" : ""}`} />
            <span>{syncing ? "Synchronizing All Channels..." : "Sync All Channels Now"}</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: OUTBOUND FEED (Copy to Airbnb & Booking.com) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border border-charcoal-900/15 shadow-lg space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-bronze-600 uppercase tracking-widest font-bold">
              1. OUTBOUND ICAL FEED (EXPORT TO CHANNELS)
            </span>
            <h2 className="text-xl font-serif font-bold text-charcoal-900">
              Export MagMercy Direct Bookings to Airbnb &amp; Booking.com
            </h2>
            <p className="text-xs text-charcoal-600 leading-relaxed max-w-2xl">
              Paste this official iCalendar feed into your Airbnb and Booking.com dashboards. Whenever a guest books directly on this website, their dates are automatically blocked on Airbnb and Booking.com, eliminating double bookings.
            </p>
          </div>
        </div>

        {/* Copyable Feed URL Box */}
        <div className="p-3.5 rounded-2xl bg-sand-50 border border-charcoal-900/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-mono text-xs text-charcoal-800 break-all w-full sm:w-auto px-2">
            {outboundICalUrl}
          </div>
          <button
            type="button"
            onClick={handleCopyOutbound}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-coastal-navy hover:bg-charcoal-950 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-sm shrink-0"
          >
            {copiedOutbound ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Feed Link</span>
              </>
            )}
          </button>
        </div>

        {/* Channel Setup Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
          <div className="p-4 rounded-2xl bg-sand-100/50 border border-charcoal-900/10 space-y-2">
            <span className="font-serif font-bold text-charcoal-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Airbnb Connection Steps:
            </span>
            <ol className="list-decimal list-inside space-y-1 text-charcoal-600 leading-relaxed">
              <li>Open Airbnb Host Dashboard &rarr; <strong>Calendar</strong>.</li>
              <li>Click <strong>Pricing and availability</strong> in right panel.</li>
              <li>Scroll to <strong>Calendar sync</strong> &rarr; Click <strong>Import calendar</strong>.</li>
              <li>Paste this feed URL and name it <span className="font-mono font-semibold">MagMercy Direct</span>.</li>
            </ol>
          </div>

          <div className="p-4 rounded-2xl bg-sand-100/50 border border-charcoal-900/10 space-y-2">
            <span className="font-serif font-bold text-charcoal-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Booking.com Connection Steps:
            </span>
            <ol className="list-decimal list-inside space-y-1 text-charcoal-600 leading-relaxed">
              <li>Open Booking.com Extranet &rarr; <strong>Rates &amp; Availability</strong>.</li>
              <li>Select <strong>Sync calendars</strong>.</li>
              <li>Click <strong>Add calendar connection</strong>.</li>
              <li>Paste this feed URL and save.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 2: INBOUND FEEDS CONFIGURATION */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border border-charcoal-900/15 shadow-lg space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest font-bold">
            2. INBOUND ICAL FEEDS (IMPORT FROM CHANNELS)
          </span>
          <h2 className="text-xl font-serif font-bold text-charcoal-900">
            Import Live Dates from Airbnb &amp; Booking.com
          </h2>
          <p className="text-xs text-charcoal-600 leading-relaxed max-w-2xl">
            Paste your Airbnb and Booking.com export links below. MagMercy will automatically fetch confirmed reservations from your OTAs and block them on this website's booking engine.
          </p>
        </div>

        <div className="space-y-4">
          {/* Airbnb Input */}
          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/15 space-y-2">
            <label className="text-xs font-mono font-bold text-charcoal-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span>AIRBNB EXPORT ICAL LINK (.ICS)</span>
            </label>
            <input
              type="url"
              placeholder="https://www.airbnb.com/calendar/ical/123456789.ics?s=..."
              value={airbnbUrl}
              onChange={(e) => setAirbnbUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-charcoal-900/15 text-xs font-mono text-charcoal-900 focus:outline-none focus:border-coastal-blue shadow-inner"
            />
            <span className="text-[11px] text-charcoal-500 block">
              Found on Airbnb: Calendar &rarr; Pricing and availability &rarr; Calendar sync &rarr; Export calendar.
            </span>
          </div>

          {/* Booking.com Input */}
          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/15 space-y-2">
            <label className="text-xs font-mono font-bold text-charcoal-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>BOOKING.COM EXPORT ICAL LINK (.ICS)</span>
            </label>
            <input
              type="url"
              placeholder="https://ical.booking.com/v1/export?t=..."
              value={bookingComUrl}
              onChange={(e) => setBookingComUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-charcoal-900/15 text-xs font-mono text-charcoal-900 focus:outline-none focus:border-coastal-blue shadow-inner"
            />
            <span className="text-[11px] text-charcoal-500 block">
              Found on Booking.com Extranet: Rates &amp; Availability &rarr; Sync calendars &rarr; Export calendar link.
            </span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleSyncAll}
              disabled={syncing}
              className="px-5 py-2.5 rounded-xl bg-coastal-blue hover:bg-coastal-blue-hover text-white text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-md"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${syncing ? "animate-spin" : ""}`} />
              <span>Save &amp; Test Inbound Sync</span>
            </button>

            {syncResult && (
              <span className="text-xs font-mono text-emerald-800 flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Last Synced: {new Date(syncResult.timestamp).toLocaleTimeString()}</span>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: LIVE AVAILABILITY PREVIEW */}
      <section className="space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-coastal-blue uppercase tracking-widest font-bold">
            3. LIVE CHANNEL CALENDAR
          </span>
          <h2 className="text-xl font-serif font-bold text-charcoal-900">
            Multi-Channel Master Availability Grid
          </h2>
        </div>

        <AvailabilityCalendar suiteId="penthouse" />
      </section>

      {/* SECTION 4: MANUAL DATE BLOCK TOOL */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border border-charcoal-900/15 shadow-lg space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-amber-700 uppercase tracking-widest font-bold">
            4. MANUAL OVERRIDE &amp; OWNER BLOCKS
          </span>
          <h2 className="text-xl font-serif font-bold text-charcoal-900">
            Hold Dates for Maintenance or Private Stays
          </h2>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            Need to block the penthouse for deep cleaning, private owner use, or private VIP delegations? Apply an instant block below.
          </p>
        </div>

        <form onSubmit={handleSaveManualBlock} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
          <div>
            <label className="text-[11px] font-mono text-charcoal-600 block mb-1 font-semibold">
              START DATE
            </label>
            <input
              type="date"
              value={blockStart}
              onChange={(e) => setBlockStart(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs font-mono text-charcoal-900"
              required
            />
          </div>

          <div>
            <label className="text-[11px] font-mono text-charcoal-600 block mb-1 font-semibold">
              END DATE
            </label>
            <input
              type="date"
              value={blockEnd}
              onChange={(e) => setBlockEnd(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs font-mono text-charcoal-900"
              required
            />
          </div>

          <div>
            <label className="text-[11px] font-mono text-charcoal-600 block mb-1 font-semibold">
              HOLD REASON
            </label>
            <input
              type="text"
              value={blockReason}
              onChange={(e) => setBlockReason(e.target.value)}
              placeholder="e.g. Owner Stay / AC Servicing"
              className="w-full px-3 py-2 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs font-mono text-charcoal-900"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submittingBlock}
            className="w-full py-2.5 rounded-xl bg-charcoal-900 hover:bg-black text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{submittingBlock ? "Applying Hold..." : "Apply Date Hold"}</span>
          </button>
        </form>
      </section>
    </div>
  );
}
