"use client";

import React, { useState } from "react";
import { ROOMS } from "@/lib/data";
import { Eye, Maximize2, ShieldCheck, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

export default function VirtualTourCanvas() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const activeRoom = ROOMS[selectedRoomIndex];

  return (
    <div className="w-full rounded-3xl glass-panel p-6 lg:p-8 border border-bronze-400/30 shadow-xl bg-white/95">
      {/* Header controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-charcoal-900/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-bronze-600 mb-1 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE 3D SPATIAL WALKTHROUGH</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-charcoal-900">
            {activeRoom.name}
          </h3>
          <p className="text-sm text-charcoal-600 mt-1">{activeRoom.subtitle}</p>
        </div>

        {/* Room Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {ROOMS.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoomIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedRoomIndex === idx
                  ? "bg-bronze-500 text-white font-semibold shadow-md shadow-bronze-500/20"
                  : "bg-sand-100 text-charcoal-700 hover:bg-sand-200 hover:text-charcoal-900 border border-charcoal-900/5"
              }`}
            >
              {room.name.replace("The ", "")}
            </button>
          ))}
        </div>
      </div>

      {/* Main Viewport */}
      <div className="relative mt-6 rounded-2xl overflow-hidden aspect-[16/9] border border-charcoal-900/10 group shadow-md">
        <img
          src={activeRoom.imageUrl}
          alt={activeRoom.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle bottom gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Hotspot Indicators */}
        <div className="absolute top-1/3 left-1/4 group/hotspot cursor-pointer">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-bronze-400 opacity-75" />
            <div className="relative w-7 h-7 rounded-full bg-bronze-500 text-white flex items-center justify-center font-bold text-xs shadow-lg">
              +
            </div>
            <div className="absolute left-9 bottom-0 hidden group-hover/hotspot:flex flex-col bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-bronze-400/40 text-xs w-52 shadow-xl">
              <span className="text-bronze-700 font-bold">Acoustic Glazing</span>
              <span className="text-charcoal-600 text-[11px] mt-0.5">
                Sound-dampening double insulated glass for tranquil rest.
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-1/3 group/hotspot2 cursor-pointer">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-emerald-500 opacity-75" />
            <div className="relative w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-lg">
              +
            </div>
            <div className="absolute left-9 bottom-0 hidden group-hover/hotspot2:flex flex-col bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-emerald-500/40 text-xs w-56 shadow-xl">
              <span className="text-emerald-800 font-bold">Climate Rhythms</span>
              <span className="text-charcoal-600 text-[11px] mt-0.5">
                Ultra-quiet VRV intelligent temperature control.
              </span>
            </div>
          </div>
        </div>

        {/* Floating Room Stats Card */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-bronze-400/30 shadow-xl">
          <div className="flex flex-wrap items-center gap-6 text-xs text-charcoal-600">
            <div>
              <span className="text-bronze-600 font-mono block font-semibold">FLOOR AREA</span>
              <span className="font-bold text-charcoal-900">{activeRoom.dimensions}</span>
            </div>
            <div className="border-l border-charcoal-900/10 pl-6">
              <span className="text-bronze-600 font-mono block font-semibold">CAPACITY</span>
              <span className="font-bold text-charcoal-900">{activeRoom.capacity}</span>
            </div>
            <div className="border-l border-charcoal-900/10 pl-6">
              <span className="text-bronze-600 font-mono block font-semibold">BED CONFIGURATION</span>
              <span className="font-bold text-charcoal-900">{activeRoom.bedType}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/booking"
              className="px-5 py-2.5 rounded-xl bg-bronze-500 text-white font-semibold text-xs hover:bg-bronze-600 transition-colors flex items-center gap-1.5 shadow-md shadow-bronze-500/20"
            >
              <span>Reserve Suite</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Architectural Features List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeRoom.keyFeatures.map((feat, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-sand-50 border border-charcoal-900/10 text-xs text-charcoal-800 shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-bronze-600 shrink-0 mt-0.5" />
            <span>{feat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
