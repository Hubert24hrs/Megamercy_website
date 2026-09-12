"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  ShieldCheck,
  Info,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";
import { AvailabilityResponse, BlockedDateRange } from "@/lib/calendar/types";

interface AvailabilityCalendarProps {
  suiteId?: string;
  selectedCheckIn?: string;
  selectedCheckOut?: string;
  onSelectRange?: (checkIn: string, checkOut: string) => void;
  compact?: boolean;
}

export default function AvailabilityCalendar({
  suiteId = "penthouse",
  selectedCheckIn,
  selectedCheckOut,
  onSelectRange,
  compact = false,
}: AvailabilityCalendarProps) {
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());
  const [availability, setAvailability] = useState<AvailabilityResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [syncing, setSyncing] = useState<boolean>(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  // Selection state if not fully driven by parent
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);
  const [localCheckIn, setLocalCheckIn] = useState<string | null>(selectedCheckIn || null);
  const [localCheckOut, setLocalCheckOut] = useState<string | null>(selectedCheckOut || null);

  useEffect(() => {
    if (selectedCheckIn) setLocalCheckIn(selectedCheckIn);
    if (selectedCheckOut) setLocalCheckOut(selectedCheckOut);
  }, [selectedCheckIn, selectedCheckOut]);

  // Fetch availability from API
  const fetchAvailability = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/availability?suite=${suiteId}`);
      if (res.ok) {
        const data: AvailabilityResponse = await res.json();
        setAvailability(data);
      }
    } catch (err) {
      console.error("Failed to load availability:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailability();
  }, [suiteId]);

  // Trigger manual OTA sync
  const handleSyncNow = async () => {
    setSyncing(true);
    setSyncMessage(null);
    try {
      const res = await fetch("/api/calendar/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ suiteId }),
      });
      const data = await res.json();
      if (res.ok) {
        setSyncMessage(`OTA Feeds Synced: ${data.totalEventsImported} events updated.`);
        await fetchAvailability();
      } else {
        setSyncMessage(`Sync failed: ${data.error || "Unknown error"}`);
      }
    } catch (err: any) {
      setSyncMessage("Sync connection failed.");
    } finally {
      setSyncing(false);
      setTimeout(() => setSyncMessage(null), 6000);
    }
  };

  const nextMonth = () => {
    setCurrentDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  };

  // Calendar math for current month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const todayStr = new Date().toISOString().split("T")[0];

  // Helper to test if a date string is blocked
  const isDateBlocked = (dateStr: string): boolean => {
    if (!availability) return false;
    return availability.blockedDates.includes(dateStr);
  };

  // Helper to find range source for a blocked date
  const getBlockedSource = (dateStr: string): BlockedDateRange | undefined => {
    if (!availability) return undefined;
    return availability.blockedRanges.find((r) => dateStr >= r.startDate && dateStr < r.endDate);
  };

  // Date selection click handler
  const handleDayClick = (dateStr: string) => {
    if (isDateBlocked(dateStr)) return;
    if (dateStr < todayStr) return;

    if (!localCheckIn || (localCheckIn && localCheckOut)) {
      // Start new selection
      setLocalCheckIn(dateStr);
      setLocalCheckOut(null);
    } else if (localCheckIn && !localCheckOut) {
      if (dateStr <= localCheckIn) {
        // Reset check-in to this earlier date
        setLocalCheckIn(dateStr);
      } else {
        // Validate no blocked dates in between
        let hasConflict = false;
        const testCur = new Date(localCheckIn);
        const testEnd = new Date(dateStr);
        while (testCur < testEnd) {
          const testStr = testCur.toISOString().split("T")[0];
          if (isDateBlocked(testStr)) {
            hasConflict = true;
            break;
          }
          testCur.setDate(testCur.getDate() + 1);
        }

        if (hasConflict) {
          // Blocked days in between, restart with dateStr
          setLocalCheckIn(dateStr);
        } else {
          setLocalCheckOut(dateStr);
          if (onSelectRange) {
            onSelectRange(localCheckIn, dateStr);
          }
        }
      }
    }
  };

  return (
    <div className="w-full rounded-3xl bg-white border border-charcoal-900/15 p-5 sm:p-7 shadow-xl">
      {/* Top Header: Title & OTA Sync Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-charcoal-900/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-coastal-blue uppercase font-bold px-2.5 py-1 rounded-full bg-sand-100 border border-charcoal-900/10">
              LIVE PMS AVAILABILITY
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AIRBNB &amp; BOOKING.COM SYNCED</span>
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-black text-charcoal-900 mt-2">
            Select Reservation Dates
          </h3>
          <p className="text-xs text-charcoal-500">
            Real-time multi-channel calendar. Blocked dates prevent double-bookings automatically.
          </p>
        </div>

        {/* Sync Button & Info */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSyncNow}
            disabled={syncing}
            className="px-3.5 py-2 rounded-xl bg-sand-100 hover:bg-sand-200 border border-charcoal-900/15 text-charcoal-800 text-xs font-mono font-bold flex items-center gap-2 transition-all disabled:opacity-50 shadow-sm"
            title="Fetch latest updates from Airbnb and Booking.com iCal feeds"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-coastal-blue ${syncing ? "animate-spin" : ""}`} />
            <span>{syncing ? "Syncing OTA..." : "Sync OTA"}</span>
          </button>
        </div>
      </div>

      {syncMessage && (
        <div className="mt-4 p-3 rounded-xl bg-coastal-blue/10 border border-coastal-blue/20 text-xs text-coastal-blue font-medium flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{syncMessage}</span>
        </div>
      )}

      {/* Month Navigation */}
      <div className="flex items-center justify-between py-4">
        <h4 className="text-lg font-serif font-bold text-charcoal-900">
          {monthName} {year}
        </h4>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={prevMonth}
            className="w-8 h-8 rounded-lg bg-sand-100 hover:bg-sand-200 border border-charcoal-900/10 flex items-center justify-center transition-colors"
            aria-label="Previous Month"
          >
            <ChevronLeft className="w-4 h-4 text-charcoal-800" />
          </button>
          <button
            type="button"
            onClick={nextMonth}
            className="w-8 h-8 rounded-lg bg-sand-100 hover:bg-sand-200 border border-charcoal-900/10 flex items-center justify-center transition-colors"
            aria-label="Next Month"
          >
            <ChevronRight className="w-4 h-4 text-charcoal-800" />
          </button>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-mono text-charcoal-500 font-bold mb-2">
        <span>SUN</span>
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
        {/* Padding for month start day */}
        {Array.from({ length: firstDayIndex }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}

        {/* Days of month */}
        {Array.from({ length: daysInMonth }).map((_, idx) => {
          const dayNum = idx + 1;
          const dayStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
          const isPast = dayStr < todayStr;
          const blocked = isDateBlocked(dayStr);
          const rangeInfo = getBlockedSource(dayStr);

          const isCheckIn = localCheckIn === dayStr;
          const isCheckOut = localCheckOut === dayStr;
          const isInSelectedRange =
            localCheckIn && localCheckOut && dayStr > localCheckIn && dayStr < localCheckOut;
          const isInHoverRange =
            localCheckIn &&
            !localCheckOut &&
            hoveredDate &&
            dayStr > localCheckIn &&
            dayStr <= hoveredDate &&
            !blocked;

          // Badging based on source
          let blockedLabel = "Booked";
          let blockedColor = "bg-rose-50 border-rose-200 text-rose-700";

          if (rangeInfo?.source === "airbnb") {
            blockedLabel = "Airbnb";
            blockedColor = "bg-amber-50 border-amber-200 text-amber-800";
          } else if (rangeInfo?.source === "booking_com") {
            blockedLabel = "Booking.com";
            blockedColor = "bg-blue-50 border-blue-200 text-blue-800";
          } else if (rangeInfo?.source === "direct") {
            blockedLabel = "VIP Direct";
            blockedColor = "bg-emerald-50 border-emerald-200 text-emerald-800";
          } else if (rangeInfo?.source === "owner_block") {
            blockedLabel = "Hold";
            blockedColor = "bg-charcoal-100 border-charcoal-300 text-charcoal-800";
          }

          return (
            <button
              key={dayStr}
              type="button"
              disabled={isPast || blocked}
              onClick={() => handleDayClick(dayStr)}
              onMouseEnter={() => setHoveredDate(dayStr)}
              onMouseLeave={() => setHoveredDate(null)}
              className={`relative aspect-square rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-1 border transition-all text-xs font-mono font-medium ${
                isPast
                  ? "bg-sand-50/50 border-transparent text-charcoal-300 cursor-not-allowed"
                  : blocked
                  ? `${blockedColor} cursor-not-allowed opacity-90`
                  : isCheckIn || isCheckOut
                  ? "bg-coastal-blue border-coastal-blue text-white font-bold shadow-md scale-105 z-10"
                  : isInSelectedRange || isInHoverRange
                  ? "bg-coastal-blue/15 border-coastal-blue/30 text-coastal-blue font-semibold"
                  : "bg-white hover:bg-sand-100 border-charcoal-900/10 text-charcoal-800 hover:border-coastal-blue"
              }`}
            >
              <span className="text-xs sm:text-sm font-bold">{dayNum}</span>

              {/* Status Indicator */}
              {blocked ? (
                <span className="text-[8px] sm:text-[9px] font-mono leading-none mt-0.5 font-bold uppercase truncate max-w-full px-0.5">
                  {blockedLabel}
                </span>
              ) : isCheckIn ? (
                <span className="text-[8px] font-mono uppercase tracking-tighter leading-none text-white/90">
                  In
                </span>
              ) : isCheckOut ? (
                <span className="text-[8px] font-mono uppercase tracking-tighter leading-none text-white/90">
                  Out
                </span>
              ) : !isPast ? (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-1" />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Legend & Channel Badges */}
      <div className="mt-6 pt-5 border-t border-charcoal-900/10 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-charcoal-600">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-white border border-charcoal-900/20" /> Available
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-amber-100 border border-amber-300" /> Airbnb
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-blue-100 border border-blue-300" /> Booking.com
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-300" /> Direct VIP
          </span>
        </div>

        {localCheckIn && (
          <div className="text-xs font-mono text-charcoal-800 bg-sand-100 px-3 py-1 rounded-lg border border-charcoal-900/10 font-bold">
            Stay: <span className="text-coastal-blue">{localCheckIn}</span> →{" "}
            <span className="text-coastal-blue">{localCheckOut || "Select Check-Out"}</span>
          </div>
        )}
      </div>
    </div>
  );
}
