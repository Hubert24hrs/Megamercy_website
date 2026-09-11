"use client";

import React, { useState } from "react";
import {
  Sun,
  Moon,
  Volume2,
  Wind,
  Sliders,
  Sparkles,
  Zap,
  Check,
} from "lucide-react";

export default function IoTSimulator() {
  const [activeLighting, setActiveLighting] = useState("sunset");
  const [temperature, setTemperature] = useState(20);
  const [shades, setShades] = useState<"open" | "sheer" | "blackout">("sheer");
  const [audioTrack, setAudioTrack] = useState("Lagos Horizon Jazz");

  const lightingPresets = [
    {
      id: "focus",
      name: "Diplomatic Focus",
      desc: "5000K crisp neutral white for board strategy & paperwork",
      activeStyle: "bg-blue-50 text-blue-900 border-blue-400 shadow-sm font-bold",
    },
    {
      id: "sunset",
      name: "Lagos Sunset",
      desc: "2700K warm champagne gold reflecting lagoon twilight",
      activeStyle: "bg-amber-50 text-amber-950 border-bronze-500 shadow-sm font-bold",
    },
    {
      id: "lounge",
      name: "Champagne Evening",
      desc: "2200K dimmed intimate ambient glow with concealed cove lighting",
      activeStyle: "bg-orange-50 text-orange-950 border-bronze-600 shadow-sm font-bold",
    },
    {
      id: "sleep",
      name: "Circadian Deep Rest",
      desc: "Zero blue-light restorative spectrum for jetlag recovery",
      activeStyle: "bg-emerald-50 text-emerald-950 border-emerald-500 shadow-sm font-bold",
    },
  ];

  return (
    <div className="w-full rounded-3xl glass-panel p-6 lg:p-8 border border-bronze-400/30 shadow-xl bg-white/95 relative overflow-hidden">
      {/* Background mood illumination based on active preset */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          activeLighting === "focus"
            ? "bg-blue-500/5"
            : activeLighting === "sunset"
            ? "bg-amber-500/10"
            : activeLighting === "lounge"
            ? "bg-orange-500/10"
            : "bg-emerald-500/5"
        }`}
      />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-charcoal-900/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-bronze-600 mb-1 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SMART-PENTHOUSE AUTOMATION CONSOLE</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-charcoal-900">
            Interactive IoT Living Simulator
          </h3>
          <p className="text-xs text-charcoal-600 mt-1">
            Test and customize the residence ambience before you step foot in Lagos.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/30 text-xs font-mono text-emerald-800 font-semibold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>LUTRON &amp; CRESTRON ECOSYSTEM</span>
        </div>
      </div>

      {/* Interactive Controls Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 relative z-10">
        {/* Module 1: Lighting Preset */}
        <div className="p-5 rounded-2xl bg-sand-50/80 border border-charcoal-900/10 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-charcoal-700 font-semibold flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-bronze-600" />
              <span>LIGHTING SCENARIOS</span>
            </span>
          </div>

          <div className="space-y-2">
            {lightingPresets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setActiveLighting(preset.id)}
                className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all ${
                  activeLighting === preset.id
                    ? preset.activeStyle
                    : "bg-white border-charcoal-900/10 text-charcoal-700 hover:border-bronze-400/50 hover:text-charcoal-900"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{preset.name}</span>
                  {activeLighting === preset.id && <Check className="w-3.5 h-3.5 text-bronze-600" />}
                </div>
                <p className="text-[10px] text-charcoal-600 font-normal mt-0.5">{preset.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Module 2: Climate VRV */}
        <div className="p-5 rounded-2xl bg-sand-50/80 border border-charcoal-900/10 flex flex-col justify-between shadow-sm">
          <div>
            <span className="text-xs font-mono text-charcoal-700 font-semibold flex items-center gap-1.5">
              <Wind className="w-3.5 h-3.5 text-blue-600" />
              <span>DAIKIN VRV CLIMATE</span>
            </span>
            <div className="my-6 text-center">
              <span className="text-4xl font-serif font-black text-charcoal-900">
                {temperature}°C
              </span>
              <span className="text-xs font-mono text-charcoal-600 block mt-1">
                HEPA AIR FILTER: 99.97% PURIFIED
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setTemperature(Math.max(18, temperature - 1))}
              className="w-10 h-10 rounded-xl bg-white border border-charcoal-900/15 hover:border-bronze-500 text-charcoal-900 font-bold text-lg transition-colors shadow-sm"
            >
              -
            </button>
            <span className="text-xs font-mono text-charcoal-600 font-medium">ADJUST TEMP</span>
            <button
              onClick={() => setTemperature(Math.min(24, temperature + 1))}
              className="w-10 h-10 rounded-xl bg-white border border-charcoal-900/15 hover:border-bronze-500 text-charcoal-900 font-bold text-lg transition-colors shadow-sm"
            >
              +
            </button>
          </div>
        </div>

        {/* Module 3: Motorized Shades */}
        <div className="p-5 rounded-2xl bg-sand-50/80 border border-charcoal-900/10 flex flex-col justify-between shadow-sm">
          <div>
            <span className="text-xs font-mono text-charcoal-700 font-semibold flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-bronze-600" />
              <span>LUTRON MOTORIZED SHADES</span>
            </span>
            <p className="text-xs text-charcoal-600 mt-2">
              Automated dual-roller architectural shades for solar protection and total privacy.
            </p>
          </div>

          <div className="space-y-2 mt-4">
            {(["open", "sheer", "blackout"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setShades(mode)}
                className={`w-full py-2.5 px-3 rounded-xl border text-xs font-mono uppercase tracking-wider transition-all ${
                  shades === mode
                    ? "bg-bronze-500 text-white font-bold border-bronze-500 shadow-sm"
                    : "bg-white border-charcoal-900/10 text-charcoal-700 hover:text-charcoal-900 hover:border-bronze-400/50"
                }`}
              >
                {mode === "open" && "100% Open (Full Lagoon Vista)"}
                {mode === "sheer" && "50% Filtered Daylight (Sheer)"}
                {mode === "blackout" && "100% Total Blackout Enclosure"}
              </button>
            ))}
          </div>
        </div>

        {/* Module 4: Bang & Olufsen Spatial Audio */}
        <div className="p-5 rounded-2xl bg-sand-50/80 border border-charcoal-900/10 flex flex-col justify-between shadow-sm">
          <div>
            <span className="text-xs font-mono text-charcoal-700 font-semibold flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>B&amp;O SPATIAL SOUNDSCAPE</span>
            </span>
            <p className="text-xs text-charcoal-600 mt-2">
              Multi-room acoustic ceiling matrix calibrated for pristine fidelity.
            </p>
          </div>

          <div className="space-y-2 mt-4">
            {[
              "Lagos Horizon Jazz",
              "Binaural Delta Sleep Waves",
              "Acoustic Afro-Fusion Chill",
              "Total Acoustic Silence",
            ].map((track) => (
              <button
                key={track}
                onClick={() => setAudioTrack(track)}
                className={`w-full py-2 px-3 rounded-xl text-left border text-xs transition-all ${
                  audioTrack === track
                    ? "bg-emerald-50 text-emerald-900 border-emerald-500 font-semibold shadow-sm"
                    : "bg-white border-charcoal-900/10 text-charcoal-700 hover:text-charcoal-900 hover:border-emerald-500/40"
                }`}
              >
                {track}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
