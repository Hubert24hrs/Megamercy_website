"use client";

import React, { useState } from "react";
import {
  Wifi,
  KeyRound,
  Zap,
  Volume2,
  Wind,
  Utensils,
  Phone,
  ShieldCheck,
  Check,
  Copy,
  Printer,
  Compass,
  Clock,
  Sparkles,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function GuestGuidePage() {
  const [copiedWifi, setCopiedWifi] = useState(false);

  const copyWifiPassword = () => {
    navigator.clipboard.writeText("DolphinSovereign2026");
    setCopiedWifi(true);
    setTimeout(() => setCopiedWifi(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24 pt-4">
      {/* Header Banner */}
      <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-900 text-white border border-bronze-400/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-bronze-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-900/60 border border-bronze-400/40 text-xs font-mono tracking-widest text-bronze-300 uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-bronze-400" />
              <span>OFFICIAL RESIDENCE MANUAL &amp; WELCOME DOSSIER</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white">
              Welcome to MagMercy
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed">
              89 Lafiaji Street, Dolphin Estate, Ikoyi, Lagos · Sovereign Penthouse Residence.
              Everything you need for an effortless, five-star sovereign stay.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
            <button
              onClick={() => typeof window !== "undefined" && window.print()}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4 text-bronze-400" />
              <span>Print House Guide</span>
            </button>
            <a
              href="https://wa.me/2348025666687?text=Hello%20Head%20Butler%2C%20I%20am%20at%20the%20residence%20and%20require%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message Butler Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Grid of Core House Operations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1. HIGH-SPEED WI-FI */}
        <section className="p-6 sm:p-8 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 shadow-lg space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-charcoal-900/10">
            <div className="w-10 h-10 rounded-xl bg-coastal-blue/10 text-coastal-blue flex items-center justify-center font-bold">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-coastal-blue uppercase tracking-wider font-bold block">
                CONNECTIVITY
              </span>
              <h2 className="text-lg font-serif font-bold text-charcoal-900">
                1Gbps Redundant Optical Fiber
              </h2>
            </div>
          </div>

          <p className="text-xs text-charcoal-600 leading-relaxed">
            Dual-redundant optical ISP connections engineered for ultra-low-latency 4K streaming, Zoom board meetings, and high-speed data transfer.
          </p>

          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-2.5 text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="text-charcoal-500">Primary Network:</span>
              <span className="font-bold text-charcoal-900">MagMercy_VIP_Fiber_5G</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-charcoal-500">Backup Satellite:</span>
              <span className="font-bold text-charcoal-900">MagMercy_Executive_Failover</span>
            </div>
            <div className="pt-2 border-t border-charcoal-900/10 flex justify-between items-center">
              <span className="text-charcoal-500">Passcode:</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-bronze-700 bg-white px-2.5 py-1 rounded-lg border border-charcoal-900/10">
                  DolphinSovereign2026
                </span>
                <button
                  type="button"
                  onClick={copyWifiPassword}
                  className="p-1.5 rounded-lg bg-sand-200 hover:bg-sand-300 text-charcoal-800 transition-colors"
                  title="Copy Password"
                >
                  {copiedWifi ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BIOMETRIC & KEYLESS ENTRY */}
        <section className="p-6 sm:p-8 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 shadow-lg space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-charcoal-900/10">
            <div className="w-10 h-10 rounded-xl bg-bronze-500/10 text-bronze-600 flex items-center justify-center font-bold">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-bronze-600 uppercase tracking-wider font-bold block">
                SECURITY &amp; ACCESS
              </span>
              <h2 className="text-lg font-serif font-bold text-charcoal-900">
                Biometric Smart Entry
              </h2>
            </div>
          </div>

          <p className="text-xs text-charcoal-600 leading-relaxed">
            The residence features commercial biometric locks. Your unique 6-digit access PIN was dispatched via WhatsApp/SMS prior to arrival.
          </p>

          <ol className="list-decimal list-inside space-y-2 text-xs text-charcoal-700 bg-alabaster-50 p-4 rounded-2xl border border-charcoal-900/10">
            <li>Wake the digital keypad by gently touching the panel with your palm.</li>
            <li>Enter your personalized 6-digit code followed by the <span className="font-mono font-bold">#</span> key.</li>
            <li>The electronic motor will disengage and chime softly. Turn handle to enter.</li>
            <li>The door automatically re-engages deadbolts 15 seconds after closure.</li>
          </ol>
        </section>

        {/* 3. UNINTERRUPTED POWER */}
        <section className="p-6 sm:p-8 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 shadow-lg space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-charcoal-900/10">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-600 uppercase tracking-wider font-bold block">
                INFRASTRUCTURE
              </span>
              <h2 className="text-lg font-serif font-bold text-charcoal-900">
                100% Guaranteed Unbroken Power
              </h2>
            </div>
          </div>

          <p className="text-xs text-charcoal-600 leading-relaxed">
            MagMercy operates a triple-redundant electrical power grid: primary municipal feed backed by twin Stamford heavy-duty diesel generators and an automated Tesla-style lithium solar inverter.
          </p>

          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300/40 text-xs text-emerald-900 space-y-1">
            <span className="font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              Sub-Millisecond Automated Transfer (ATS)
            </span>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              If public power drops, the lithium battery system maintains current with zero flicker. There is no need for manual switches or breaker adjustments.
            </p>
          </div>
        </section>

        {/* 4. CLIMATE & ACOUSTIC COCOON */}
        <section className="p-6 sm:p-8 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 shadow-lg space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-charcoal-900/10">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-wider font-bold block">
                ENVIRONMENT
              </span>
              <h2 className="text-lg font-serif font-bold text-charcoal-900">
                Whisper-Quiet Daikin Climate &amp; Sound
              </h2>
            </div>
          </div>

          <p className="text-xs text-charcoal-600 leading-relaxed">
            Every suite has independent inverter climate control with hospital-grade PM2.5 air filtration.
          </p>

          <div className="space-y-2 text-xs text-charcoal-700 bg-sand-50 p-4 rounded-2xl border border-charcoal-900/10">
            <div className="flex justify-between">
              <span className="text-charcoal-500">Recommended Temperature:</span>
              <span className="font-mono font-bold text-charcoal-900">21°C – 23°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-500">Double-Glazed Soundproofing:</span>
              <span className="font-mono font-bold text-charcoal-900">Ensure window latches are locked</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-500">Multi-Zone Audio:</span>
              <span className="font-mono font-bold text-charcoal-900">Connect via AirPlay / Bluetooth</span>
            </div>
          </div>
        </section>
      </div>

      {/* CURATED IKOYI DINING & GASTRONOMY */}
      <section className="p-8 lg:p-10 rounded-3xl glass-panel bg-white/95 border border-bronze-400/30 shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-charcoal-900/10">
          <div>
            <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-bold">
              CONCIERGE GASTRONOMY RECOMMENDATIONS
            </span>
            <h3 className="text-2xl font-serif font-bold text-charcoal-900 mt-1">
              Fine Dining &amp; Delivery to Dolphin Estate
            </h3>
          </div>
          <span className="text-xs font-mono text-charcoal-500 bg-sand-100 px-3 py-1 rounded-full">
            5 – 10 Minutes from Penthouse
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-2">
            <h4 className="text-sm font-bold font-serif text-charcoal-900">RSVP Restaurant &amp; Bar</h4>
            <span className="text-[10px] font-mono text-bronze-600 block">7 mins away · Contemporary Fine Dining</span>
            <p className="text-charcoal-600 leading-relaxed text-[11px]">
              Signature modern European cuisine, wood-fired cuts, and secluded lounge. Priority booking available via MagMercy butler.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-2">
            <h4 className="text-sm font-bold font-serif text-charcoal-900">Slow Lagos</h4>
            <span className="text-[10px] font-mono text-bronze-600 block">8 mins away · Latin American Fine Dining</span>
            <p className="text-charcoal-600 leading-relaxed text-[11px]">
              Michelin-level ambiance, botanical courtyard, and exquisite culinary craft. Ideal for executive dinners and dates.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-2">
            <h4 className="text-sm font-bold font-serif text-charcoal-900">Cactus Waterfront Bistro</h4>
            <span className="text-[10px] font-mono text-bronze-600 block">10 mins away · Artisanal Bakery &amp; Brunch</span>
            <p className="text-charcoal-600 leading-relaxed text-[11px]">
              Lagoon-side patio dining with French pastries, fresh juices, and international comfort classics.
            </p>
          </div>
        </div>

        {/* Delivery Note */}
        <div className="p-4 rounded-2xl bg-alabaster-50 border border-charcoal-900/10 flex items-start gap-3 text-xs text-charcoal-700">
          <Utensils className="w-4 h-4 text-bronze-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Ordering via Glovo or Chowdeck:</strong> Set delivery address to{" "}
            <span className="font-mono font-bold text-charcoal-900">89 Lafiaji Street, Dolphin Estate, Ikoyi</span>.
            Instruct the delivery rider to announce: <em>"Delivery for MagMercy Apartment at 89 Lafiaji"</em> at the estate boom gate for immediate clearance.
          </p>
        </div>
      </section>

      {/* EMERGENCY & PROTOCOL DIRECTORY */}
      <section className="p-6 sm:p-8 rounded-3xl bg-sand-50 border border-charcoal-900/15 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-bronze-600" />
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-charcoal-900">
            Official Concierge &amp; Emergency Directory
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3 bg-white rounded-xl border border-charcoal-900/10">
            <span className="text-charcoal-500 block text-[10px]">HEAD BUTLER (24/7 WHATSAPP)</span>
            <span className="font-bold text-charcoal-900">+234 802 566 6687</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-charcoal-900/10">
            <span className="text-charcoal-500 block text-[10px]">DOLPHIN ESTATE BOOM GATE SECURITY</span>
            <span className="font-bold text-charcoal-900">Extension 101</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-charcoal-900/10">
            <span className="text-charcoal-500 block text-[10px]">LAGOS EMERGENCY SERVICES</span>
            <span className="font-bold text-charcoal-900">112 / 767</span>
          </div>
        </div>
      </section>
    </div>
  );
}
