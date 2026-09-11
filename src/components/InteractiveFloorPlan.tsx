"use client";

import React, { useState } from "react";
import { Compass, Maximize2, Shield, Sparkles, Check } from "lucide-react";

interface FloorZone {
  id: string;
  name: string;
  sqft: string;
  color: string;
  description: string;
  amenities: string[];
  dimensions: string;
}

export default function InteractiveFloorPlan() {
  const [selectedZone, setSelectedZone] = useState<string>("living");

  const zones: Record<string, FloorZone> = {
    living: {
      id: "living",
      name: "Grand Living Pavilion & Terrace",
      sqft: "1,200 sq.ft (111 m²)",
      color: "border-bronze-500 bg-bronze-500/10",
      description: "Open-concept panoramic lounge with Schüco sliding acoustic glass doors opening directly onto the cantilevered Ikoyi sunset terrace.",
      amenities: ["B&O 85' OLED Matrix", "Sonos Arc Sound System", "Sub-zero Wine Chiller", "Terrace Loungers"],
      dimensions: "12.5m × 8.9m",
    },
    master: {
      id: "master",
      name: "Sovereign Master Haven",
      sqft: "950 sq.ft (88 m²)",
      color: "border-emerald-600 bg-emerald-500/10",
      description: "Private acoustic wing with super-king bed, walk-in dressing room, and Nero Marquina marble en-suite bathroom with deep soaking tub.",
      amenities: ["Deep Soaking Marble Tub", "Rainfall Chromotherapy Shower", "Biometric Safe", "Automated Blackout Shades"],
      dimensions: "10.2m × 8.6m",
    },
    diplomatic: {
      id: "diplomatic",
      name: "Diplomatic Suite & Workstation",
      sqft: "700 sq.ft (65 m²)",
      color: "border-blue-600 bg-blue-500/10",
      description: "Designed for high productivity and uninterrupted sleep. Equipped with Herman Miller ergonomic seating and an isolated encrypted VLAN network.",
      amenities: ["Herman Miller Aeron Chair", "Encrypted VLAN Access", "En-suite Travertine Shower", "Daikin VRV Silent AC"],
      dimensions: "8.4m × 7.7m",
    },
    kitchen: {
      id: "kitchen",
      name: "Chef's Culinary Suite & Dining",
      sqft: "550 sq.ft (51 m²)",
      color: "border-amber-600 bg-amber-500/10",
      description: "Calacatta gold marble island with full Miele appliance suite, induction cooktops, wine cellars, and breakfast bar.",
      amenities: ["Miele Double Ovens", "Calacatta Marble Island", "Alkaline Water Tap", "Butler Pantry Access"],
      dimensions: "7.5m × 6.8m",
    },
  };

  const active = zones[selectedZone] || zones.living;

  return (
    <div className="w-full rounded-3xl glass-panel p-6 lg:p-8 border border-bronze-400/30 shadow-xl bg-white/95">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-charcoal-900/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-bronze-600 mb-1 font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL SCHEMATICS · PENTHOUSE LEVEL 14</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-charcoal-900">
            Interactive Floor Plan &amp; Spatial Zoning
          </h3>
          <p className="text-xs text-charcoal-600 mt-1">
            3,400 Total Square Feet · Ceiling Clearance 3.4 Meters · Ikoyi Lagoon Horizon
          </p>
        </div>

        {/* Zone Selector Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {Object.values(zones).map((z) => (
            <button
              key={z.id}
              onClick={() => setSelectedZone(z.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedZone === z.id
                  ? "bg-bronze-500 text-white font-bold shadow-md shadow-bronze-500/20"
                  : "bg-sand-100 text-charcoal-700 hover:bg-sand-200 hover:text-charcoal-900 border border-charcoal-900/5"
              }`}
            >
              {z.name.split("&")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* SVG-Style Architectural Blueprint Visualizer */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2 relative aspect-[4/3] rounded-2xl bg-sand-50 border border-charcoal-900/10 p-6 flex flex-col justify-between overflow-hidden subtle-noise shadow-inner">
          {/* Compass Rose */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-charcoal-900/10 text-[10px] font-mono text-charcoal-700 shadow-sm">
            <Compass className="w-3 h-3 text-bronze-600 animate-spin" style={{ animationDuration: "20s" }} />
            <span>FACING: NW (LAGOS LAGOON)</span>
          </div>

          {/* Interactive Schematic Diagram Box */}
          <div className="w-full h-full grid grid-cols-6 grid-rows-4 gap-3 my-auto pt-6">
            {/* Zone: Living Pavilion (Large) */}
            <div
              onClick={() => setSelectedZone("living")}
              className={`col-span-4 row-span-2 rounded-xl p-4 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                selectedZone === "living"
                  ? "border-bronze-500 bg-bronze-500/15 shadow-md shadow-bronze-500/10"
                  : "border-charcoal-900/10 bg-white/80 hover:border-bronze-400/50 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-charcoal-900">
                  Grand Living Pavilion &amp; Terrace
                </span>
                <span className="text-[10px] font-mono text-bronze-600 font-semibold">1,200 SQ.FT</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-charcoal-600">
                <span className="w-2 h-2 rounded-full bg-bronze-500" />
                <span>Double Acoustic Glazing · Panoramic Horizon</span>
              </div>
            </div>

            {/* Zone: Master Haven */}
            <div
              onClick={() => setSelectedZone("master")}
              className={`col-span-2 row-span-4 rounded-xl p-4 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                selectedZone === "master"
                  ? "border-emerald-600 bg-emerald-500/15 shadow-md shadow-emerald-500/10"
                  : "border-charcoal-900/10 bg-white/80 hover:border-emerald-500/50 hover:bg-white"
              }`}
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs font-serif font-bold text-charcoal-900">
                  Sovereign Master Haven
                </span>
                <span className="text-[10px] font-mono text-emerald-700 font-semibold">950 SQ.FT</span>
              </div>
              <div className="space-y-1 text-[10px] text-charcoal-600">
                <p>• Super King Bed</p>
                <p>• Marble Soaking Tub</p>
                <p>• Dressing Lounge</p>
              </div>
              <div className="pt-2 border-t border-charcoal-900/5 text-[9px] font-mono text-emerald-700 font-semibold">
                ACOUSTIC COCOON
              </div>
            </div>

            {/* Zone: Chef's Kitchen */}
            <div
              onClick={() => setSelectedZone("kitchen")}
              className={`col-span-2 row-span-2 rounded-xl p-3 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                selectedZone === "kitchen"
                  ? "border-amber-600 bg-amber-500/15 shadow-md shadow-amber-500/10"
                  : "border-charcoal-900/10 bg-white/80 hover:border-amber-500/50 hover:bg-white"
              }`}
            >
              <div>
                <span className="text-xs font-serif font-bold text-charcoal-900 block">
                  Culinary Suite
                </span>
                <span className="text-[10px] font-mono text-amber-700 font-semibold">550 SQ.FT</span>
              </div>
              <span className="text-[10px] text-charcoal-600">Calacatta Island</span>
            </div>

            {/* Zone: Diplomatic Suite */}
            <div
              onClick={() => setSelectedZone("diplomatic")}
              className={`col-span-2 row-span-2 rounded-xl p-3 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                selectedZone === "diplomatic"
                  ? "border-blue-600 bg-blue-500/15 shadow-md shadow-blue-500/10"
                  : "border-charcoal-900/10 bg-white/80 hover:border-blue-500/50 hover:bg-white"
              }`}
            >
              <div>
                <span className="text-xs font-serif font-bold text-charcoal-900 block">
                  Diplomatic Suite
                </span>
                <span className="text-[10px] font-mono text-blue-700 font-semibold">700 SQ.FT</span>
              </div>
              <span className="text-[10px] text-charcoal-600">Ergonomic Workstation</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-charcoal-500 pt-2 border-t border-charcoal-900/10">
            <span>SCALE: 1:100 ARCHITECTURAL CAD</span>
            <span>CLICK ANY ZONE TO INSPECT SPECIFICATIONS</span>
          </div>
        </div>

        {/* Selected Zone Inspector Panel */}
        <div className="p-6 rounded-2xl bg-white border border-charcoal-900/10 shadow-lg space-y-4">
          <div>
            <span className="text-[10px] font-mono text-bronze-600 uppercase tracking-widest block font-semibold">
              SELECTED SPATIAL ENCLAVE
            </span>
            <h4 className="text-xl font-serif font-bold text-charcoal-900 mt-1">{active.name}</h4>
            <div className="flex items-center gap-3 mt-1 text-xs font-mono text-charcoal-600">
              <span>{active.sqft}</span>
              <span>·</span>
              <span>{active.dimensions}</span>
            </div>
          </div>

          <p className="text-xs text-charcoal-600 leading-relaxed">{active.description}</p>

          <div className="pt-2 border-t border-charcoal-900/10 space-y-2">
            <span className="text-[11px] font-mono text-charcoal-700 uppercase block font-semibold">
              KEY ARCHITECTURAL PROVISIONS
            </span>
            {active.amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-700">
                <Check className="w-3.5 h-3.5 text-bronze-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href="/booking"
            className="block w-full text-center py-3 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-bronze-500/20"
          >
            Check Dates for this Residence
          </a>
        </div>
      </div>
    </div>
  );
}
