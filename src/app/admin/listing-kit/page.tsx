"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  FileText,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Layers,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function ListingKitPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const TITLE_1 = "MagMercy · Ultra-Luxury Penthouse in Ikoyi · 24/7 Power & Security";
  const TITLE_2 = "MagMercy Sovereign Penthouse · 100% Power · Dolphin Estate Ikoyi";

  const FULL_DESCRIPTION = `Welcome to MagMercy Apartment — Ikoyi's premier sovereign short-let residence.

Engineered specifically for visiting international executives, diplomatic delegations, and discerning diaspora families, MagMercy pairs five-star hotel hospitality with the total privacy and discretion of a private penthouse.

Situated on quiet Lafiaji Street in prestigious gated Dolphin Estate, you are 8 minutes from the Victoria Island financial hub and diplomatic consulates, while insulated in an acoustic cocoon of tranquil luxury.

═════════════════════════════════════════════════════════════
💎 THE RESIDENCE (3,400 SQ. FT OF CURATED MODERN LUXURY)
═════════════════════════════════════════════════════════════

◆ THE GRAND LIVING PAVILION (1,200 sq.ft)
• Floor-to-ceiling panoramic views over Ikoyi tree canopies and Five Cowries Creek
• Custom Italian Poltrona Frau velvet lounge suite
• 85-inch 4K Bang & Olufsen Beovision OLED display
• Multi-zone acoustic ceiling speaker matrix
• Automated sheer and blackout drapery

◆ THE SOVEREIGN MASTER HAVEN (950 sq.ft)
• Acoustic isolation cocoon engineered for jetlag recovery
• Super King Hypnos Heritage mattress with organic Egyptian cotton linens
• Custom Nero Marquina Italian marble en-suite bathroom with deep soaking tub
• Raindance oversized chromotherapy rainfall shower
• Biometric dressing sanctuary and private balcony

◆ THE DIPLOMATIC EXECUTIVE SUITE (700 sq.ft)
• Herman Miller Aeron ergonomic executive desk setup
• Dedicated encrypted private Wi-Fi VLAN (1Gbps fiber)
• Travertine stone en-suite bathroom with rainfall shower

◆ THE PRIVATE CHEF'S CULINARY SUITE (550 sq.ft)
• German Miele precision induction cooktops, dual convection ovens, and wine cooler
• 12-foot Calacatta gold marble island with seating
• Reverse osmosis alkaline drinking water on tap
• Full formal dining table seating 8 guests

═════════════════════════════════════════════════════════════
⚡ UNINTERRUPTED POWER & FORTRESS SECURITY
═════════════════════════════════════════════════════════════
• 100% Power Guarantee: Twin industrial Stamford generators paired with an automated Tesla-style lithium solar inverter. Sub-millisecond transfer guarantee — zero flicker, zero router restarts.
• High-Speed Internet: Redundant dual-ISP 1Gbps fiber connection with Wi-Fi 6 coverage throughout.
• Biometric Security: Touchless smart locks with unique expiring PIN codes.
• Estate Security: 24/7 uniformed guards, gated estate clearance protocol, and rapid armed response standby.`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24 pt-4">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-charcoal-900/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 border border-charcoal-900/15 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>OTA ONBOARDING SUITE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-charcoal-900 mt-2">
            Airbnb &amp; Booking.com Listing Kit
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
            Copy-paste verified copy, headlines, dimensions, and amenities to publish your listings on Monday in 5 minutes.
          </p>
        </div>

        <Link
          href="/admin/calendar"
          className="px-5 py-3 rounded-2xl bg-coastal-navy hover:bg-charcoal-950 text-white text-xs font-mono font-bold flex items-center gap-2 shadow-md transition-all self-start md:self-auto"
        >
          <Calendar className="w-4 h-4 text-bronze-400" />
          <span>Go to Calendar Sync Portal</span>
        </Link>
      </div>

      {/* TITLES */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border border-charcoal-900/15 shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-serif font-bold text-charcoal-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-bronze-600" />
            <span>High-Converting Listing Titles</span>
          </h2>
          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full font-bold">
            ALGORITHM OPTIMIZED
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 flex items-center justify-between gap-3">
            <div className="font-mono text-xs text-charcoal-800 break-words">{TITLE_1}</div>
            <button
              onClick={() => handleCopy(TITLE_1, "title-1")}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-sand-100 border border-charcoal-900/10 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm shrink-0"
            >
              {copiedKey === "title-1" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === "title-1" ? "Copied" : "Copy"}</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 flex items-center justify-between gap-3">
            <div className="font-mono text-xs text-charcoal-800 break-words">{TITLE_2}</div>
            <button
              onClick={() => handleCopy(TITLE_2, "title-2")}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-sand-100 border border-charcoal-900/10 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm shrink-0"
            >
              {copiedKey === "title-2" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === "title-2" ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* FULL DESCRIPTION */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border border-charcoal-900/15 shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-serif font-bold text-charcoal-900">
              Master Property Description
            </h2>
            <p className="text-xs text-charcoal-500">
              Drop this directly into the "Description" box on Airbnb or Booking.com.
            </p>
          </div>
          <button
            onClick={() => handleCopy(FULL_DESCRIPTION, "desc")}
            className="px-4 py-2 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-mono font-bold flex items-center gap-2 shadow-md transition-all"
          >
            {copiedKey === "desc" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copiedKey === "desc" ? "Copied Description!" : "Copy Full Description"}</span>
          </button>
        </div>

        <pre className="p-5 rounded-2xl bg-sand-50 border border-charcoal-900/10 font-mono text-xs text-charcoal-800 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
          {FULL_DESCRIPTION}
        </pre>
      </section>

      {/* HOUSE RULES & POLICIES */}
      <section className="p-6 sm:p-8 rounded-3xl bg-sand-50 border border-charcoal-900/15 shadow-sm space-y-4">
        <h2 className="text-lg font-serif font-bold text-charcoal-900">
          Standard Stay Policies for OTA Setup
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 bg-white rounded-2xl border border-charcoal-900/10 space-y-1">
            <span className="text-charcoal-500 block text-[10px]">CHECK-IN</span>
            <span className="font-bold text-charcoal-900 text-sm">From 2:00 PM</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-charcoal-900/10 space-y-1">
            <span className="text-charcoal-500 block text-[10px]">CHECK-OUT</span>
            <span className="font-bold text-charcoal-900 text-sm">By 11:00 AM</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-charcoal-900/10 space-y-1">
            <span className="text-charcoal-500 block text-[10px]">MINIMUM STAY</span>
            <span className="font-bold text-charcoal-900 text-sm">2 Nights Minimum</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-charcoal-900/10 space-y-1">
            <span className="text-charcoal-500 block text-[10px]">SECURITY BOND</span>
            <span className="font-bold text-charcoal-900 text-sm">₦100,000 Deposit</span>
          </div>
        </div>
      </section>
    </div>
  );
}
