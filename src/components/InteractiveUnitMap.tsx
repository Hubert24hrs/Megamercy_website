"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  Info,
  Waves,
  Eye,
  Maximize2,
  Building,
} from "lucide-react";

interface UnitDetails {
  id: string;
  number: string;
  name: string;
  floor: number;
  viewType: "lagoon-front" | "lagoon-partial" | "garden-view" | "penthouse";
  viewLabel: string;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  ratePerNightUSD: number;
  description: string;
  features: string[];
}

const UNITS_DATA: Record<string, UnitDetails> = {
  "612": {
    id: "612",
    number: "612",
    name: "The Sovereign Penthouse",
    floor: 6,
    viewType: "penthouse",
    viewLabel: "Lagoon Front Panoramic Penthouse",
    sqft: 3400,
    bedrooms: 4,
    bathrooms: 4.5,
    ratePerNightUSD: 850,
    description: "Top-floor crown jewel with double-height 3.2m ceilings, private biometric elevator, expansive wrap-around teak terrace, and uninterrupted Five Cowries Creek views.",
    features: ["Private Keycard Elevator", "Heated Jacuzzi Spa", "Chef's Culinary Suite", "Acoustic Glazing"],
  },
  "614": {
    id: "614",
    number: "614",
    name: "Diplomatic Double Adjoining Suite",
    floor: 6,
    viewType: "penthouse",
    viewLabel: "Lagoon Front & City Skyline",
    sqft: 2800,
    bedrooms: 3,
    bathrooms: 3.5,
    ratePerNightUSD: 720,
    description: "Dual-wing interconnected residence tailored for diplomatic delegations requiring dual master quarters and dedicated private security staging.",
    features: ["Dual Master Wings", "Lagoon Balcony", "Secure Briefing Lounge", "24/7 Butler Station"],
  },
  "605": {
    id: "605",
    number: "605",
    name: "High-Floor Executive Sanctuary",
    floor: 6,
    viewType: "lagoon-front",
    viewLabel: "Direct Lagoon Front View",
    sqft: 1950,
    bedrooms: 2,
    bathrooms: 2,
    ratePerNightUSD: 520,
    description: "Direct waterfront positioning overlooking Five Cowries Creek with custom Poliform furnishings and sunset cocktail balcony.",
    features: ["Panoramic Teak Balcony", "Smart Climate IoT", "Sub-Zero Refrigerator"],
  },
  "509": {
    id: "509",
    number: "509",
    name: "Lagoon View Residence 509",
    floor: 5,
    viewType: "lagoon-front",
    viewLabel: "Direct Lagoon Front View",
    sqft: 1850,
    bedrooms: 2,
    bathrooms: 2,
    ratePerNightUSD: 480,
    description: "Elevated mid-tower sanctuary with seamless indoor-outdoor floorplan and floor-to-ceiling soundproof acoustic glass.",
    features: ["Private Balcony", "Miele Kitchen", "1Gbps Redundant Fiber"],
  },
  "504": {
    id: "504",
    number: "504",
    name: "Executive East Wing 504",
    floor: 5,
    viewType: "lagoon-partial",
    viewLabel: "Lagoon Partial & Ikoyi Canopy",
    sqft: 1650,
    bedrooms: 2,
    bathrooms: 2,
    ratePerNightUSD: 420,
    description: "Peaceful morning light over old Ikoyi greenery with side-aspect lagoon waters and private home study nook.",
    features: ["Executive Workstation", "Marble Rain Shower", "Walk-In Dressing Room"],
  },
  "408": {
    id: "408",
    number: "408",
    name: "Waterfront Residence 408",
    floor: 4,
    viewType: "lagoon-front",
    viewLabel: "Direct Lagoon Front View",
    sqft: 1850,
    bedrooms: 2,
    bathrooms: 2,
    ratePerNightUSD: 460,
    description: "Prime central elevation directly above the infinity pool with sweeping views across to Victoria Island.",
    features: ["Central Balcony", "Nespresso Bar", "King Hypnos Bedding"],
  },
  "312": {
    id: "312",
    number: "312",
    name: "Lagoon Garden Residence 312",
    floor: 3,
    viewType: "lagoon-front",
    viewLabel: "Direct Lagoon Front View",
    sqft: 1750,
    bedrooms: 2,
    bathrooms: 2,
    ratePerNightUSD: 430,
    description: "Balanced mid-tier residence with lush water views and gentle coastal breeze along the private covered terrace.",
    features: ["Covered Terrace", "Sonos Multiroom Audio", "Wine Preservation Cellar"],
  },
  "208": {
    id: "208",
    number: "208",
    name: "Lagoon Terrace 208",
    floor: 2,
    viewType: "lagoon-front",
    viewLabel: "Direct Lagoon Front View",
    sqft: 1800,
    bedrooms: 2,
    bathrooms: 2,
    ratePerNightUSD: 400,
    description: "Immediate proximity to the infinity pool and waterfront deck, ideal for swimming and outdoor living.",
    features: ["Direct Pool Deck Access", "Private Sun Loungers", "Dyson Purifiers"],
  },
  "108": {
    id: "108",
    number: "108",
    name: "Ground Floor Lagoon Haven 108",
    floor: 1,
    viewType: "lagoon-front",
    viewLabel: "Direct Lagoon Waterfront Patio",
    sqft: 1900,
    bedrooms: 2,
    bathrooms: 2,
    ratePerNightUSD: 410,
    description: "Walk-out ground floor residence with private garden patio stepping straight toward the private boat jetty.",
    features: ["Private Garden Walkout", "Direct Marina Gate Access", "Double Vanity Bath"],
  },
};

export default function InteractiveUnitMap() {
  const [activeUnitId, setActiveUnitId] = useState<string>("612");

  const selectedUnit = UNITS_DATA[activeUnitId] || UNITS_DATA["612"];

  return (
    <div className="w-full space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 border border-charcoal-900/15 text-[11px] font-mono tracking-widest text-coastal-blue uppercase font-bold">
          <Building className="w-3.5 h-3.5" />
          <span>INTERACTIVE RESIDENCE MAP</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-900 tracking-tight">
          Select Your Residence by Floor &amp; Water View
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
          Explore the elevation of MagMercy Apartment overlooking Five Cowries Creek. Click any suite
          on the floor map to preview dimensions, orientation, and real-time reservation options.
        </p>
      </div>

      {/* Main Map & Inspector Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Columns: The Interactive Map Elevation */}
        <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 border border-charcoal-900/15 shadow-xl relative overflow-hidden">
          {/* Top Banner indicating Water Front Orientation */}
          <div className="text-center py-2 px-3 sm:py-2.5 sm:px-4 mb-4 sm:mb-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-coastal-navy via-coastal-blue to-coastal-navy text-white text-[10px] sm:text-xs font-serif font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-1.5 sm:gap-2">
            <Waves className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-coastal-teal shrink-0" />
            <span className="truncate">FIVE COWRIES CREEK &amp; LAGOON WATERFRONT (SOUTH FACING)</span>
            <Waves className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-coastal-teal shrink-0" />
          </div>

          {/* Swipe indicator for mobile phones */}
          <div className="block lg:hidden text-[10px] font-mono text-charcoal-500 mb-2 text-center">
            ← Swipe horizontally to view all unit numbers &amp; elevators →
          </div>

          {/* Elevation Floors Grid with horizontal scroll on small screens */}
          <div className="overflow-x-auto -mx-1 px-1 sm:mx-0 sm:px-0 pb-2">
            <div className="min-w-[480px] lg:min-w-0 space-y-2.5 text-xs font-mono">
              {/* Floor 6 (Penthouses) */}
              <div className="flex items-center gap-2">
                <span className="w-8 font-bold text-charcoal-500 shrink-0 text-right">L6</span>
                <div className="flex-1 grid grid-cols-6 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveUnitId("605")}
                  className={`py-3 px-1 rounded-xl text-center font-bold transition-all border ${
                    activeUnitId === "605"
                      ? "bg-coastal-blue text-white border-coastal-blue shadow-md scale-[1.03]"
                      : "bg-coastal-blue/10 hover:bg-coastal-blue/20 text-coastal-blue border-coastal-blue/30"
                  }`}
                >
                  605
                </button>
                <div className="rounded-xl bg-sand-100 border border-dashed border-charcoal-900/10 flex items-center justify-center text-[10px] text-charcoal-400">
                  Core
                </div>
                <button
                  type="button"
                  onClick={() => setActiveUnitId("609")}
                  className={`py-3 px-1 rounded-xl text-center font-bold transition-all border ${
                    activeUnitId === "609"
                      ? "bg-coastal-blue text-white border-coastal-blue shadow-md scale-[1.03]"
                      : "bg-coastal-blue/10 hover:bg-coastal-blue/20 text-coastal-blue border-coastal-blue/30"
                  }`}
                >
                  609
                </button>
                <button
                  type="button"
                  onClick={() => setActiveUnitId("612")}
                  className={`col-span-2 py-3 px-2 rounded-xl text-center font-bold transition-all border ${
                    activeUnitId === "612"
                      ? "bg-coastal-blue text-white border-coastal-blue shadow-lg ring-2 ring-bronze-400 scale-[1.03]"
                      : "bg-bronze-500/15 hover:bg-bronze-500/25 text-bronze-700 border-bronze-500/40"
                  }`}
                >
                  ★ 612 PENTHOUSE
                </button>
                <button
                  type="button"
                  onClick={() => setActiveUnitId("614")}
                  className={`py-3 px-1 rounded-xl text-center font-bold transition-all border ${
                    activeUnitId === "614"
                      ? "bg-coastal-blue text-white border-coastal-blue shadow-md scale-[1.03]"
                      : "bg-bronze-500/15 hover:bg-bronze-500/25 text-bronze-700 border-bronze-500/40"
                  }`}
                >
                  614
                </button>
              </div>
            </div>

            {/* Floor 5 */}
            <div className="flex items-center gap-2">
              <span className="w-8 font-bold text-charcoal-500 shrink-0 text-right">L5</span>
              <div className="flex-1 grid grid-cols-6 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveUnitId("504")}
                  className={`py-3 px-1 rounded-xl text-center font-bold transition-all border ${
                    activeUnitId === "504"
                      ? "bg-coastal-blue text-white border-coastal-blue shadow-md scale-[1.03]"
                      : "bg-sand-100 hover:bg-sand-200 text-charcoal-800 border-charcoal-900/15"
                  }`}
                >
                  504
                </button>
                <div className="rounded-xl bg-sand-100 border border-dashed border-charcoal-900/10 flex items-center justify-center text-[10px] text-charcoal-400">
                  Lobby
                </div>
                <button
                  type="button"
                  onClick={() => setActiveUnitId("509")}
                  className={`col-span-2 py-3 px-1 rounded-xl text-center font-bold transition-all border ${
                    activeUnitId === "509"
                      ? "bg-coastal-blue text-white border-coastal-blue shadow-md scale-[1.03]"
                      : "bg-coastal-blue/10 hover:bg-coastal-blue/20 text-coastal-blue border-coastal-blue/30"
                  }`}
                >
                  509 Lagoon Suite
                </button>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  514
                </div>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  516
                </div>
              </div>
            </div>

            {/* Floor 4 */}
            <div className="flex items-center gap-2">
              <span className="w-8 font-bold text-charcoal-500 shrink-0 text-right">L4</span>
              <div className="flex-1 grid grid-cols-6 gap-2">
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  402
                </div>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  406
                </div>
                <button
                  type="button"
                  onClick={() => setActiveUnitId("408")}
                  className={`col-span-2 py-3 px-1 rounded-xl text-center font-bold transition-all border ${
                    activeUnitId === "408"
                      ? "bg-coastal-blue text-white border-coastal-blue shadow-md scale-[1.03]"
                      : "bg-coastal-blue/10 hover:bg-coastal-blue/20 text-coastal-blue border-coastal-blue/30"
                  }`}
                >
                  408 Executive
                </button>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  414
                </div>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  418
                </div>
              </div>
            </div>

            {/* Floor 3 */}
            <div className="flex items-center gap-2">
              <span className="w-8 font-bold text-charcoal-500 shrink-0 text-right">L3</span>
              <div className="flex-1 grid grid-cols-6 gap-2">
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-sand-100 text-charcoal-700 border border-charcoal-900/10">
                  304
                </div>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  308
                </div>
                <button
                  type="button"
                  onClick={() => setActiveUnitId("312")}
                  className={`col-span-2 py-3 px-1 rounded-xl text-center font-bold transition-all border ${
                    activeUnitId === "312"
                      ? "bg-coastal-blue text-white border-coastal-blue shadow-md scale-[1.03]"
                      : "bg-coastal-blue/10 hover:bg-coastal-blue/20 text-coastal-blue border-coastal-blue/30"
                  }`}
                >
                  312 Water Suite
                </button>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  315
                </div>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  318
                </div>
              </div>
            </div>

            {/* Floor 2 */}
            <div className="flex items-center gap-2">
              <span className="w-8 font-bold text-charcoal-500 shrink-0 text-right">L2</span>
              <div className="flex-1 grid grid-cols-6 gap-2">
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-sand-100 text-charcoal-700 border border-charcoal-900/10">
                  203
                </div>
                <button
                  type="button"
                  onClick={() => setActiveUnitId("208")}
                  className={`col-span-2 py-3 px-1 rounded-xl text-center font-bold transition-all border ${
                    activeUnitId === "208"
                      ? "bg-coastal-blue text-white border-coastal-blue shadow-md scale-[1.03]"
                      : "bg-coastal-blue/10 hover:bg-coastal-blue/20 text-coastal-blue border-coastal-blue/30"
                  }`}
                >
                  208 Pool Deck Suite
                </button>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  212
                </div>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  215
                </div>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-sand-100 text-charcoal-700 border border-charcoal-900/10">
                  218
                </div>
              </div>
            </div>

            {/* Floor 1 (Ground & Amenities) */}
            <div className="flex items-center gap-2">
              <span className="w-8 font-bold text-charcoal-500 shrink-0 text-right">L1</span>
              <div className="flex-1 grid grid-cols-6 gap-2">
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-sand-100 text-charcoal-700 border border-charcoal-900/10">
                  102
                </div>
                <button
                  type="button"
                  onClick={() => setActiveUnitId("108")}
                  className={`col-span-2 py-3 px-1 rounded-xl text-center font-bold transition-all border ${
                    activeUnitId === "108"
                      ? "bg-coastal-blue text-white border-coastal-blue shadow-md scale-[1.03]"
                      : "bg-coastal-blue/10 hover:bg-coastal-blue/20 text-coastal-blue border-coastal-blue/30"
                  }`}
                >
                  108 Garden Walkout
                </button>
                <div className="py-3 px-1 rounded-xl text-center font-bold bg-coastal-blue/5 text-coastal-blue/60 border border-coastal-blue/20">
                  112
                </div>
                <div className="col-span-2 py-3 px-1 rounded-xl text-center font-bold bg-emerald-600/15 text-emerald-800 border border-emerald-600/30">
                  VIP Reception &amp; Security Desk
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Central Amenities Map Bar (Pool, Jacuzzi, Pickleball, Elevators) */}
          <div className="mt-6 pt-5 border-t border-charcoal-900/10">
            <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500 block mb-2 font-bold">
              ESTATE AMENITIES &amp; TRANSIT INFRASTRUCTURE
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs font-medium">
              <div className="p-3 rounded-2xl bg-coastal-teal/15 border border-coastal-teal/40 text-coastal-navy">
                <span className="block font-bold">Heated Pool &amp; Spa</span>
                <span className="text-[10px] text-charcoal-600 font-mono">Lagoon Waterfront Deck</span>
              </div>
              <div className="p-3 rounded-2xl bg-coastal-blue/10 border border-coastal-blue/30 text-coastal-navy">
                <span className="block font-bold">Pickleball / Court</span>
                <span className="text-[10px] text-charcoal-600 font-mono">Championship Surface</span>
              </div>
              <div className="p-3 rounded-2xl bg-sand-100 border border-charcoal-900/15 text-charcoal-800">
                <span className="block font-bold">North &amp; South Lifts</span>
                <span className="text-[10px] text-charcoal-600 font-mono">Biometric Keyless</span>
              </div>
              <div className="p-3 rounded-2xl bg-bronze-500/10 border border-bronze-500/30 text-bronze-700">
                <span className="block font-bold">Conference Hall</span>
                <span className="text-[10px] text-charcoal-600 font-mono">Acoustic Boardroom</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 pt-3 border-t border-charcoal-900/10 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-charcoal-600">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-coastal-blue" />
                <span>Lagoon Front</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-bronze-500" />
                <span>Penthouse &amp; Double Unit</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-sand-200 border border-charcoal-900/20" />
                <span>Partial / East Wing</span>
              </span>
            </div>
            <span className="text-bronze-600 font-bold">★ Click any unit above to view specs</span>
          </div>
        </div>

        {/* Right 5 Columns: Selected Unit Live Inspector */}
        <div className="lg:col-span-5 bg-gradient-to-br from-white via-sand-50 to-sand-100 rounded-3xl p-6 sm:p-8 border border-charcoal-900/15 shadow-xl space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-mono text-coastal-blue uppercase tracking-widest font-bold block">
                UNIT SPECIFICATIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-charcoal-900 mt-1">
                {selectedUnit.name}
              </h3>
              <p className="text-xs font-mono text-bronze-700 mt-0.5 font-semibold">
                {selectedUnit.viewLabel} · Level {selectedUnit.floor}
              </p>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-coastal-blue text-white font-mono font-bold text-sm shadow-md">
              #{selectedUnit.number}
            </div>
          </div>

          <p className="text-xs text-charcoal-600 leading-relaxed">
            {selectedUnit.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 py-3 border-y border-charcoal-900/10 text-center font-mono">
            <div>
              <span className="text-lg font-bold text-charcoal-900 block font-serif">
                {selectedUnit.sqft}
              </span>
              <span className="text-[10px] text-charcoal-500 uppercase">SQ.FT</span>
            </div>
            <div>
              <span className="text-lg font-bold text-charcoal-900 block font-serif">
                {selectedUnit.bedrooms} Beds
              </span>
              <span className="text-[10px] text-charcoal-500 uppercase">
                {selectedUnit.bathrooms} Baths
              </span>
            </div>
            <div>
              <span className="text-lg font-bold text-coastal-blue block font-serif">
                ${selectedUnit.ratePerNightUSD}
              </span>
              <span className="text-[10px] text-charcoal-500 uppercase">PER NIGHT</span>
            </div>
          </div>

          {/* Key Features list */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-charcoal-500 uppercase tracking-wider block font-bold">
              HIGHLIGHTED PROVISIONS
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-charcoal-700 font-medium">
              {selectedUnit.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coastal-blue shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 space-y-3">
            <Link
              href={`/booking?unit=${selectedUnit.number}`}
              className="w-full py-3.5 px-6 rounded-2xl bg-coastal-blue hover:bg-coastal-blue-hover text-white font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-coastal-blue/30 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Unit #{selectedUnit.number}</span>
            </Link>

            <Link
              href="/apartment"
              className="w-full py-3 px-6 rounded-2xl bg-white border border-charcoal-900/15 hover:border-coastal-blue text-charcoal-800 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 font-semibold shadow-sm"
            >
              <span>View 4K Video Walkthrough</span>
              <ChevronRight className="w-3.5 h-3.5 text-charcoal-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
