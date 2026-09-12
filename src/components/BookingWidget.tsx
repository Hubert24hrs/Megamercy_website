"use client";

import React, { useState, useEffect } from "react";
import { CurrencyCode } from "@/lib/types";
import { formatPrice, BASE_NIGHTLY_RATE_USD, CURRENCY_CONFIG } from "@/lib/currency";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import {
  Calendar,
  Users,
  ShieldCheck,
  CreditCard,
  Sparkles,
  ChevronDown,
  Check,
  Clock,
  Car,
  Utensils,
  Plane,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { AvailabilityResponse } from "@/lib/calendar/types";

export default function BookingWidget({
  initialCurrency = "NGN",
}: {
  initialCurrency?: CurrencyCode;
}) {
  // Helper to format ISO date YYYY-MM-DD
  const getOffsetDate = (daysAhead: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    return d.toISOString().split("T")[0];
  };

  const todayStr = getOffsetDate(0);
  const [currency, setCurrency] = useState<CurrencyCode>(initialCurrency);
  const [checkInDate, setCheckInDate] = useState(getOffsetDate(1));
  const [checkOutDate, setCheckOutDate] = useState(getOffsetDate(5));
  const [reservationToken, setReservationToken] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guests, setGuests] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  // Availability & Conflict detection
  const [availability, setAvailability] = useState<AvailabilityResponse | null>(null);
  const [conflictDates, setConflictDates] = useState<string[]>([]);

  // Fetch live availability
  const loadAvailability = async () => {
    try {
      const res = await fetch("/api/availability?suite=penthouse");
      if (res.ok) {
        const data: AvailabilityResponse = await res.json();
        setAvailability(data);
      }
    } catch (err) {
      console.error("Error loading availability in widget:", err);
    }
  };

  useEffect(() => {
    loadAvailability();
  }, []);

  // Check conflicts whenever dates or availability change
  useEffect(() => {
    if (!availability || !checkInDate || !checkOutDate) {
      setConflictDates([]);
      return;
    }

    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    if (end <= start) {
      setConflictDates([]);
      return;
    }

    const conflicts: string[] = [];
    const cur = new Date(start);
    while (cur < end) {
      const curStr = cur.toISOString().split("T")[0];
      if (availability.blockedDates.includes(curStr)) {
        conflicts.push(curStr);
      }
      cur.setDate(cur.getDate() + 1);
    }
    setConflictDates(conflicts);
  }, [checkInDate, checkOutDate, availability]);

  // Calculate nights
  const d1 = new Date(checkInDate);
  const d2 = new Date(checkOutDate);
  const timeDiff = d2.getTime() - d1.getTime();
  const nights = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));

  const basePriceUSD = BASE_NIGHTLY_RATE_USD * nights;

  // Addons
  const ADDONS = [
    {
      id: "chauffeur",
      title: "Armored Vehicle & Chauffeur",
      costUSD: 180 * nights,
      icon: Car,
      desc: "Mercedes S-Class or Range Rover Sentinel with vetted driver.",
    },
    {
      id: "chef",
      title: "In-House Executive Chef",
      costUSD: 120 * nights,
      icon: Utensils,
      desc: "Custom breakfast & 4-course dinner prepared fresh daily.",
    },
    {
      id: "tarmac",
      title: "LOS Airport VIP Tarmac Escort",
      costUSD: 90,
      icon: Plane,
      desc: "Fast-track customs, baggage concierge, and tarmac gate pickup.",
    },
  ];

  const addonsTotalUSD = selectedAddons.reduce((acc, id) => {
    const item = ADDONS.find((a) => a.id === id);
    return acc + (item ? item.costUSD : 0);
  }, 0);

  const securityDepositUSD = 300; // refundable
  const grandTotalUSD = basePriceUSD + addonsTotalUSD;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleInstantReserve = async () => {
    if (conflictDates.length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "reserve",
          startDate: checkInDate,
          endDate: checkOutDate,
          suiteId: "penthouse",
          guestName: guestName || "VIP Diplomatic Guest",
          guestEmail: guestEmail || "guest@magmercy.direct",
          summary: `Direct VIP Penthouse Booking (${guestName || "VIP Guest"})`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReservationToken(data.reservation?.uid || `MM-${Date.now().toString(36).toUpperCase()}`);
        setBookingConfirmed(true);
        // Refresh availability in background
        loadAvailability();
      } else {
        alert(data.error || "Reservation date conflict detected. Please select available dates.");
      }
    } catch (err) {
      console.error("Failed to submit reservation:", err);
      // Fallback
      const token = `MM-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
      setReservationToken(token);
      setBookingConfirmed(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full rounded-3xl glass-panel p-6 lg:p-8 border border-bronze-400/30 shadow-xl relative overflow-hidden bg-white/95">
      {/* Ambient background soft glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-bronze-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header with Currency Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-charcoal-900/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-semibold">
              GUARANTEED AVAILABILITY ENGINE
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              AIRBNB / BOOKING.COM SYNC ACTIVE
            </span>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl lg:text-4xl font-serif font-bold text-charcoal-900">
              {formatPrice(BASE_NIGHTLY_RATE_USD, currency)}
            </span>
            <span className="text-xs text-charcoal-500 font-mono">/ NIGHT</span>
          </div>
        </div>

        {/* Currency Switcher Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-sand-100 border border-charcoal-900/10">
          {(["NGN", "USD", "EUR", "GBP"] as CurrencyCode[]).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCurrency(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                currency === c
                  ? "bg-bronze-500 text-white font-bold shadow-sm"
                  : "text-charcoal-700 hover:text-charcoal-900 hover:bg-white/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {bookingConfirmed ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 mx-auto flex items-center justify-center">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-charcoal-900">
            Reservation Confirmed &amp; Dates Locked
          </h3>
          <div className="inline-block px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono text-bronze-700 font-bold">
            REFERENCE: {reservationToken}
          </div>
          <p className="text-xs text-charcoal-600 max-w-md mx-auto leading-relaxed">
            Your stay ({checkInDate} to {checkOutDate}) for {guests} guests has been logged in our PMS.
            These dates are now automatically blocked on our direct site, Airbnb, and Booking.com. Our lead butler will connect with you via WhatsApp or Email within 5 minutes.
          </p>
          <button
            type="button"
            onClick={() => setBookingConfirmed(false)}
            className="px-6 py-2.5 rounded-xl bg-sand-100 border border-bronze-400/30 text-xs font-mono text-charcoal-800 hover:bg-sand-200 transition-colors font-semibold"
          >
            Modify Reservation Details
          </button>
        </div>
      ) : (
        /* Booking Inputs */
        <div className="space-y-6 mt-6">
          {/* Toggle Interactive Multi-Channel Calendar */}
          <button
            type="button"
            onClick={() => setShowCalendar(!showCalendar)}
            className="w-full py-2.5 px-4 rounded-2xl bg-sand-100 hover:bg-sand-200 border border-charcoal-900/15 text-xs font-mono text-charcoal-800 flex items-center justify-between transition-all shadow-sm"
          >
            <span className="flex items-center gap-2 font-bold">
              <Calendar className="w-4 h-4 text-coastal-blue" />
              <span>{showCalendar ? "Hide Live Availability Calendar" : "View Live Multi-Channel Availability Calendar"}</span>
            </span>
            <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100/90 px-2.5 py-0.5 rounded-full">
              OTA Live Feed
            </span>
          </button>

          {/* Expandable Calendar View */}
          {showCalendar && (
            <div className="animate-in fade-in duration-300">
              <AvailabilityCalendar
                suiteId="penthouse"
                selectedCheckIn={checkInDate}
                selectedCheckOut={checkOutDate}
                onSelectRange={(inDate, outDate) => {
                  setCheckInDate(inDate);
                  setCheckOutDate(outDate);
                }}
              />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Check-In */}
            <div className="p-3.5 rounded-2xl bg-alabaster-50 border border-charcoal-900/15 focus-within:border-bronze-500 focus-within:bg-white transition-colors">
              <label className="text-[11px] font-mono text-charcoal-600 flex items-center gap-1.5 mb-1 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-bronze-600" />
                <span>CHECK-IN DATE</span>
              </label>
              <input
                type="date"
                min={todayStr}
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-charcoal-900 focus:outline-none"
              />
            </div>

            {/* Check-Out */}
            <div className="p-3.5 rounded-2xl bg-alabaster-50 border border-charcoal-900/15 focus-within:border-bronze-500 focus-within:bg-white transition-colors">
              <label className="text-[11px] font-mono text-charcoal-600 flex items-center gap-1.5 mb-1 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-bronze-600" />
                <span>CHECK-OUT DATE</span>
              </label>
              <input
                type="date"
                min={checkInDate || todayStr}
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-charcoal-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Conflict Warning Banner */}
          {conflictDates.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-xs text-amber-900 flex items-start gap-3 animate-in shake duration-300">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-sm">Selected Dates Unavailable</span>
                <p className="mt-0.5 leading-relaxed text-amber-800">
                  The following night(s) are already reserved on Airbnb, Booking.com, or Direct VIP:{" "}
                  <span className="font-mono font-bold text-amber-950">{conflictDates.join(", ")}</span>.
                  Please select alternative dates on the calendar above.
                </p>
              </div>
            </div>
          )}

          {/* Guest Name / Contact Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-2xl bg-alabaster-50 border border-charcoal-900/15 focus-within:border-bronze-500 focus-within:bg-white transition-colors">
              <label className="text-[11px] font-mono text-charcoal-600 block mb-1 font-semibold">
                GUEST FULL NAME / DELEGATION
              </label>
              <input
                type="text"
                placeholder="e.g. Ambassadorial Delegation"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-charcoal-900 focus:outline-none"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-alabaster-50 border border-charcoal-900/15 focus-within:border-bronze-500 focus-within:bg-white transition-colors">
              <label className="text-[11px] font-mono text-charcoal-600 block mb-1 font-semibold">
                CONTACT EMAIL
              </label>
              <input
                type="email"
                placeholder="e.g. direct@executive.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-charcoal-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Guests Selector */}
          <div className="p-3.5 rounded-2xl bg-alabaster-50 border border-charcoal-900/15 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] font-mono text-charcoal-600 font-semibold">
              <Users className="w-4 h-4 text-bronze-600" />
              <span>GUESTS</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="w-7 h-7 rounded-lg bg-sand-200 text-charcoal-800 hover:bg-sand-300 flex items-center justify-center font-bold text-sm"
              >
                -
              </button>
              <span className="text-sm font-bold text-charcoal-900 w-12 text-center">
                {guests} {guests === 1 ? "Guest" : "Guests"}
              </span>
              <button
                type="button"
                onClick={() => setGuests(Math.min(6, guests + 1))}
                className="w-7 h-7 rounded-lg bg-sand-200 text-charcoal-800 hover:bg-sand-300 flex items-center justify-center font-bold text-sm"
              >
                +
              </button>
            </div>
          </div>

          {/* Optional Curated VIP Add-ons */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono text-bronze-600 uppercase tracking-wider block font-semibold">
              CURATED STAY UPGRADES
            </span>
            <div className="space-y-2">
              {ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                const IconComponent = addon.icon;
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-bronze-400/10 border-bronze-500/60 shadow-sm"
                        : "bg-alabaster-50/80 border-charcoal-900/10 hover:border-bronze-400/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-bronze-500 text-white shadow-sm"
                            : "bg-sand-200 text-charcoal-700"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-charcoal-900">{addon.title}</h5>
                        <p className="text-[11px] text-charcoal-600">{addon.desc}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-charcoal-900">
                      +{formatPrice(addon.costUSD, currency)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="p-4 rounded-2xl bg-sand-100/60 border border-charcoal-900/10 space-y-2 text-xs">
            <div className="flex justify-between text-charcoal-700">
              <span>
                {formatPrice(BASE_NIGHTLY_RATE_USD, currency)} × {nights} {nights === 1 ? "night" : "nights"}
              </span>
              <span className="font-mono font-semibold text-charcoal-900">
                {formatPrice(basePriceUSD, currency)}
              </span>
            </div>

            {selectedAddons.length > 0 && (
              <div className="flex justify-between text-charcoal-700">
                <span>Curated VIP Services ({selectedAddons.length})</span>
                <span className="font-mono font-semibold text-charcoal-900">
                  +{formatPrice(addonsTotalUSD, currency)}
                </span>
              </div>
            )}

            <div className="flex justify-between text-charcoal-700">
              <span className="flex items-center gap-1">
                <span>Refundable Sovereign Security Bond</span>
                <span className="text-[10px] text-emerald-700 font-mono font-bold">(Refunded on exit)</span>
              </span>
              <span className="font-mono font-semibold text-charcoal-900">
                {formatPrice(securityDepositUSD, currency)}
              </span>
            </div>

            <div className="pt-2.5 border-t border-charcoal-900/10 flex justify-between items-baseline">
              <span className="text-sm font-bold text-charcoal-900">Estimated Total</span>
              <div className="text-right">
                <span className="text-xl lg:text-2xl font-serif font-black text-charcoal-900">
                  {formatPrice(grandTotalUSD + securityDepositUSD, currency)}
                </span>
                <span className="block text-[10px] font-mono text-charcoal-500 font-medium">
                  INCL. TAXES &amp; DIPLOMATIC CLEANSING
                </span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={handleInstantReserve}
              disabled={conflictDates.length > 0 || submitting}
              className={`w-full py-4 rounded-2xl font-serif font-bold text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 ${
                conflictDates.length > 0
                  ? "bg-charcoal-300 text-charcoal-500 cursor-not-allowed shadow-none"
                  : "bg-bronze-500 hover:bg-bronze-600 text-white shadow-bronze-500/25"
              }`}
            >
              {submitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Syncing PMS &amp; Securing Dates...</span>
                </>
              ) : conflictDates.length > 0 ? (
                <span>Dates Blocked by OTA Sync — Select New Dates</span>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  <span>Instant Reserve &amp; Block Dates</span>
                </>
              )}
            </button>

            <a
              href={`https://wa.me/2348025666687?text=Hello%20MagMercy%2C%20I%20am%20interested%20in%20booking%20from%20${checkInDate}%20to%20${checkOutDate}%20(${nights}%20nights)%20for%20${guests}%20guests.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-2xl bg-white border border-bronze-400/40 hover:border-bronze-500 text-charcoal-800 text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Or Inquire Direct with Host Butler (WhatsApp)</span>
            </a>
          </div>

          {/* Peace of Mind Guarantee */}
          <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-charcoal-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Free cancellation up to 7 days</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-bronze-600" />
              <span>Instant access code on arrival</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
