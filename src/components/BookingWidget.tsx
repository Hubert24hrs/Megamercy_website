"use client";

import React, { useState } from "react";
import { CurrencyCode } from "@/lib/types";
import { formatPrice, BASE_NIGHTLY_RATE_USD, CURRENCY_CONFIG } from "@/lib/currency";
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
} from "lucide-react";

export default function BookingWidget({
  initialCurrency = "USD",
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
  const [guests, setGuests] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

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

  const handleInstantReserve = () => {
    const token = `MM-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
    setReservationToken(token);
    setBookingConfirmed(true);
  };

  return (
    <div className="w-full rounded-3xl glass-panel p-6 lg:p-8 border border-bronze-400/30 shadow-xl relative overflow-hidden bg-white/95">
      {/* Ambient background soft glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-bronze-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header with Currency Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-charcoal-900/10">
        <div>
          <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-semibold">
            GUARANTEED AVAILABILITY ENGINE
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl lg:text-4xl font-serif font-bold text-charcoal-900">
              {formatPrice(BASE_NIGHTLY_RATE_USD, currency)}
            </span>
            <span className="text-xs text-charcoal-500 font-mono">/ NIGHT</span>
          </div>
        </div>

        {/* Currency Switcher Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-sand-100 border border-charcoal-900/10">
          {(["USD", "NGN", "GBP", "EUR"] as CurrencyCode[]).map((c) => (
            <button
              key={c}
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
            Reservation Request Transmitted
          </h3>
          <div className="inline-block px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono text-bronze-700 font-bold">
            REFERENCE: {reservationToken}
          </div>
          <p className="text-xs text-charcoal-600 max-w-md mx-auto leading-relaxed">
            Your dates ({checkInDate} to {checkOutDate}) for {guests} guests have been logged in our
            registry. Our lead butler will connect with you via WhatsApp or Email within 5 minutes to
            finalize identity verification and payment tokens.
          </p>
          <button
            onClick={() => setBookingConfirmed(false)}
            className="px-6 py-2.5 rounded-xl bg-sand-100 border border-bronze-400/30 text-xs font-mono text-charcoal-800 hover:bg-sand-200 transition-colors font-semibold"
          >
            Modify Reservation Details
          </button>
        </div>
      ) : (
        /* Booking Inputs */
        <div className="space-y-6 mt-6">
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


          {/* Guests Selector */}
          <div className="p-3.5 rounded-2xl bg-alabaster-50 border border-charcoal-900/15 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] font-mono text-charcoal-600 font-semibold">
              <Users className="w-4 h-4 text-bronze-600" />
              <span>GUESTS</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="w-7 h-7 rounded-lg bg-sand-200 text-charcoal-800 hover:bg-sand-300 flex items-center justify-center font-bold text-sm"
              >
                -
              </button>
              <span className="text-sm font-bold text-charcoal-900 w-12 text-center">
                {guests} {guests === 1 ? "Guest" : "Guests"}
              </span>
              <button
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
                    <div className="text-right shrink-0 ml-3">
                      <span className="text-xs font-mono font-bold text-bronze-700 block">
                        +{formatPrice(addon.costUSD, currency)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-2 text-xs">
            <div className="flex justify-between text-charcoal-600">
              <span>
                {formatPrice(BASE_NIGHTLY_RATE_USD, currency)} × {nights}{" "}
                {nights === 1 ? "night" : "nights"}
              </span>
              <span className="font-mono text-charcoal-900 font-semibold">
                {formatPrice(basePriceUSD, currency)}
              </span>
            </div>

            {addonsTotalUSD > 0 && (
              <div className="flex justify-between text-charcoal-600">
                <span>Selected VIP Add-ons</span>
                <span className="font-mono text-bronze-700 font-bold">
                  +{formatPrice(addonsTotalUSD, currency)}
                </span>
              </div>
            )}

            <div className="flex justify-between text-charcoal-600">
              <span>Refundable Diplomatic Security Deposit</span>
              <span className="font-mono text-charcoal-900 font-semibold">
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
              onClick={handleInstantReserve}
              className="w-full py-4 rounded-2xl bg-bronze-500 hover:bg-bronze-600 text-white font-serif font-bold text-sm uppercase tracking-wider shadow-lg shadow-bronze-500/25 transition-all flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>Instant Reserve &amp; Secure Dates</span>
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
