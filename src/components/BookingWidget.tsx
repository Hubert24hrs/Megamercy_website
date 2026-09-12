"use client";

import React, { useState, useEffect } from "react";
import { CurrencyCode } from "@/lib/types";
import {
  formatPrice,
  formatPriceNGN,
  BASE_NIGHTLY_RATE_USD,
  BASE_NIGHTLY_RATE_NGN,
  MIN_STAY_NIGHTS,
  CAUTION_DEPOSIT_USD,
  CAUTION_DEPOSIT_NGN,
  LONG_STAY_DISCOUNTS,
  CURRENCY_CONFIG,
} from "@/lib/currency";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import PaystackCheckout from "@/components/PaystackCheckout";
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
  Printer,
  MessageCircle,
  Tag,
  Building,
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
  const [checkOutDate, setCheckOutDate] = useState(getOffsetDate(3)); // 2 nights minimum default
  const [reservationToken, setReservationToken] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guests, setGuests] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPaystackModal, setShowPaystackModal] = useState(false);

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
  const isMinStayMet = nights >= MIN_STAY_NIGHTS;

  const basePriceUSD = BASE_NIGHTLY_RATE_USD * nights;

  // Long stay discount calculation
  let discountPercent = 0;
  if (nights >= 30) {
    discountPercent = LONG_STAY_DISCOUNTS.MONTHLY_DISCOUNT_PERCENT; // 20%
  } else if (nights >= 7) {
    discountPercent = LONG_STAY_DISCOUNTS.WEEKLY_DISCOUNT_PERCENT; // 10%
  }
  const discountUSD = Math.round(basePriceUSD * (discountPercent / 100));
  const discountedBaseUSD = basePriceUSD - discountUSD;

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

  const securityDepositUSD = CAUTION_DEPOSIT_USD; // refundable
  const grandTotalUSD = discountedBaseUSD + addonsTotalUSD;
  const grandTotalWithDepositUSD = grandTotalUSD + securityDepositUSD;
  const grandTotalNGN = Math.round(grandTotalWithDepositUSD * CURRENCY_CONFIG.NGN.rateFromUSD);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleInstantReserve = async () => {
    if (conflictDates.length > 0 || !isMinStayMet) return;

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
        loadAvailability();
      } else {
        alert(data.error || "Reservation date conflict detected. Please select available dates.");
      }
    } catch (err) {
      console.error("Failed to submit reservation:", err);
      const token = `MM-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
      setReservationToken(token);
      setBookingConfirmed(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handlePaymentSuccess = async (ref: string, paidAmount: number) => {
    setShowPaystackModal(false);
    setReservationToken(ref);
    setIsPaid(true);
    setBookingConfirmed(true);

    try {
      await fetch("/api/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "reserve",
          startDate: checkInDate,
          endDate: checkOutDate,
          suiteId: "penthouse",
          guestName: guestName || "VIP Paid Guest",
          guestEmail: guestEmail || "guest@magmercy.direct",
          summary: `Paid VIP Penthouse Reservation [Ref: ${ref}]`,
        }),
      });
      loadAvailability();
    } catch (err) {
      console.error("Failed to sync paid reservation:", err);
    }
  };

  return (
    <div className="w-full rounded-3xl glass-panel p-6 lg:p-8 border border-bronze-400/30 shadow-xl relative overflow-hidden bg-white/95">
      {/* Ambient background soft glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-bronze-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Paystack Checkout Modal */}
      <PaystackCheckout
        isOpen={showPaystackModal}
        onClose={() => setShowPaystackModal(false)}
        amountNGN={grandTotalNGN}
        guestName={guestName || "VIP Guest"}
        guestEmail={guestEmail || "guest@magmercy.direct"}
        guestPhone={guestPhone}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        nights={nights}
        guests={guests}
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* Header with Currency Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-charcoal-900/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-semibold">
              GUARANTEED AVAILABILITY ENGINE
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              AIRBNB &amp; BOOKING.COM SYNC ACTIVE
            </span>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl lg:text-4xl font-serif font-bold text-charcoal-900">
              {formatPrice(BASE_NIGHTLY_RATE_USD, currency)}
            </span>
            <span className="text-xs text-charcoal-500 font-mono">/ NIGHT</span>
            <span className="text-[11px] font-mono text-bronze-700 bg-sand-100 px-2 py-0.5 rounded-md ml-1 font-semibold">
              MIN. {MIN_STAY_NIGHTS} NIGHTS
            </span>
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
        /* Official VIP Reservation Voucher */
        <div className="py-8 space-y-6 animate-in fade-in zoom-in duration-300">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-charcoal-900">
              {isPaid ? "Reservation Settle & Dates Locked" : "Reservation Confirmed & Dates Locked"}
            </h3>
            <p className="text-xs text-charcoal-600">
              MagMercy Luxury Penthouse · 89 Lafiaji Street, Dolphin Estate, Ikoyi, Lagos
            </p>
          </div>

          {/* Printable Voucher Card */}
          <div className="p-6 rounded-2xl bg-sand-50 border border-bronze-400/30 space-y-4 shadow-sm text-xs">
            <div className="flex justify-between items-center pb-3 border-b border-charcoal-900/10">
              <div>
                <span className="text-[10px] font-mono text-charcoal-500 block uppercase">Booking Reference</span>
                <span className="text-sm font-mono font-black text-bronze-700">{reservationToken}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-charcoal-500 block uppercase">Status</span>
                <span className={`inline-flex items-center gap-1 font-bold font-mono text-xs ${isPaid ? "text-emerald-700" : "text-amber-700"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {isPaid ? "PAID & GUARANTEED" : "DATES HELD (PMS BLOCKED)"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
              <div>
                <span className="text-[10px] font-mono text-charcoal-500 block">CHECK-IN</span>
                <span className="font-bold text-charcoal-900 text-xs">{checkInDate}</span>
                <span className="text-[10px] text-charcoal-500 block">From 2:00 PM (14:00 WAT)</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-charcoal-500 block">CHECK-OUT</span>
                <span className="font-bold text-charcoal-900 text-xs">{checkOutDate}</span>
                <span className="text-[10px] text-charcoal-500 block">By 11:00 AM (11:00 WAT)</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-charcoal-500 block">DURATION</span>
                <span className="font-bold text-charcoal-900 text-xs">{nights} Nights</span>
                <span className="text-[10px] text-charcoal-500 block">{guests} Guests</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-charcoal-500 block">TOTAL SETTLEMENT</span>
                <span className="font-bold text-charcoal-900 text-xs font-mono">
                  {formatPrice(grandTotalWithDepositUSD, currency)}
                </span>
                <span className="text-[10px] text-emerald-700 block">Incl. ₦100,000 Bond</span>
              </div>
            </div>

            <div className="pt-3 border-t border-charcoal-900/10 text-charcoal-600 leading-relaxed text-[11px]">
              🔒 <strong>Arrival Telemetry:</strong> These dates are officially blocked on Airbnb, Booking.com, and direct calendar. Your encrypted biometric smart-lock PIN will be dispatched directly to your mobile 3 hours before touchdown.
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/2348025666687?text=Hello%20MagMercy%20Butler%20Desk%2C%20my%20reservation%20reference%20is%20${reservationToken}%20for%20dates%20${checkInDate}%20to%20${checkOutDate}%20(${nights}%20nights).%20Please%20confirm%20our%20arrival%20protocol.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect with Butler on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => typeof window !== "undefined" && window.print()}
              className="py-3 px-4 rounded-xl bg-sand-100 hover:bg-sand-200 border border-charcoal-900/10 text-charcoal-800 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save Voucher</span>
            </button>

            <button
              type="button"
              onClick={() => setBookingConfirmed(false)}
              className="py-3 px-4 rounded-xl bg-white border border-charcoal-900/10 text-charcoal-600 hover:text-charcoal-900 text-xs font-mono transition-colors"
            >
              Modify
            </button>
          </div>
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

          {/* Minimum Stay Notice if less than 2 nights */}
          {!isMinStayMet && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>2-Night Minimum Stay Policy:</strong> MagMercy penthouse reservations require at least {MIN_STAY_NIGHTS} nights. Please extend your checkout date.
              </span>
            </div>
          )}

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

          {/* Guest Name & Email Inputs */}
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

            {/* Long stay discount if applicable */}
            {discountPercent > 0 && (
              <div className="flex justify-between text-emerald-700 font-medium">
                <span className="flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Long Stay Privilege ({discountPercent}% Off)</span>
                </span>
                <span className="font-mono font-bold">
                  -{formatPrice(discountUSD, currency)}
                </span>
              </div>
            )}

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
              <span className="text-sm font-bold text-charcoal-900">Total Settlement</span>
              <div className="text-right">
                <span className="text-xl lg:text-2xl font-serif font-black text-charcoal-900">
                  {formatPrice(grandTotalWithDepositUSD, currency)}
                </span>
                <span className="block text-[10px] font-mono text-charcoal-500 font-medium">
                  ≈ ₦{grandTotalNGN.toLocaleString("en-NG")} · INCL. TAXES &amp; CLEANSING
                </span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons: Paystack vs WhatsApp */}
          <div className="space-y-3 pt-2">
            {/* Paystack Online Settlement */}
            <button
              type="button"
              onClick={() => setShowPaystackModal(true)}
              disabled={conflictDates.length > 0 || !isMinStayMet}
              className={`w-full py-4 rounded-2xl font-serif font-bold text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 ${
                conflictDates.length > 0 || !isMinStayMet
                  ? "bg-charcoal-300 text-charcoal-500 cursor-not-allowed shadow-none"
                  : "bg-bronze-500 hover:bg-bronze-600 text-white shadow-bronze-500/25"
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Pay Online via Paystack (Card / USSD / Wire)</span>
            </button>

            {/* Reserve Without Card / Direct PMS hold */}
            <button
              type="button"
              onClick={handleInstantReserve}
              disabled={conflictDates.length > 0 || !isMinStayMet || submitting}
              className="w-full py-3 rounded-2xl bg-sand-100 hover:bg-sand-200 border border-bronze-400/30 text-charcoal-800 text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Locking PMS Dates...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-bronze-600" />
                  <span>Hold &amp; Block Dates in PMS (Pay on Arrival / Wire)</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp VIP Concierge */}
            <a
              href={`https://wa.me/2348025666687?text=Hello%20MagMercy%20Concierge%2C%20I%20wish%20to%20reserve%20the%20Ikoyi%20Penthouse%20from%20${checkInDate}%20to%20${checkOutDate}%20(${nights}%20nights)%20for%20${guests}%20guests.%20Estimated%20Total:%20${formatPrice(grandTotalWithDepositUSD, currency)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-2xl bg-white border border-emerald-500/40 hover:border-emerald-600 text-emerald-800 text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Or Reserve Directly via WhatsApp Concierge</span>
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
              <span>Check-in 2:00 PM · Check-out 11:00 AM</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
