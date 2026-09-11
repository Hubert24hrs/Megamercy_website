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
      color: "bg-blue-200/20 text-blue-300 border-blue-400/40",
    },
    {
      id: "sunset",
      name: "Lagos Sunset",
      desc: "2700K warm champagne gold reflecting lagoon twilight",
      color: "bg-gold-500/20 text-gold-300 border-gold-400/50",
    },
    {
      id: "lounge",
      name: "Champagne Evening",
      desc: "2200K dimmed intimate ambient glow with concealed cove lighting",
      color: "bg-amber-500/20 text-amber-300 border-amber-400/40",
    },
    {
      id: "sleep",
      name: "Circadian Deep Rest",
      desc: "Zero blue-light restorative spectrum for jetlag recovery",
      color: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
    },
  ];

  return (
    <div className="w-full rounded-3xl glass-panel p-6 lg:p-8 border border-gold-500/20 shadow-2xl relative overflow-hidden">
      {/* Background mood illumination based on active preset */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          activeLighting === "focus"
            ? "bg-blue-500/5"
            : activeLighting === "sunset"
            ? "bg-gold-500/10"
            : activeLighting === "lounge"
            ? "bg-amber-500/10"
            : "bg-emerald-500/5"
        }`}
      />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-gold-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SMART-PENTHOUSE AUTOMATION CONSOLE</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-pearl-100">
            Interactive IoT Living Simulator
          </h3>
          <p className="text-xs text-pearl-400 mt-1">
            Test and customize the residence ambience before you step foot in Lagos.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-900 border border-white/10 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>LUTRON &amp; CRESTRON ECOSYSTEM</span>
        </div>
      </div>

      {/* Interactive Controls Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 relative z-10">
        {/* Module 1: Lighting Preset */}
        <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-pearl-400 flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-gold-400" />
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
                    ? `${preset.color} font-bold shadow-md`
                    : "bg-obsidian-950/60 border-white/5 text-pearl-400 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{preset.name}</span>
                  {activeLighting === preset.id && <Check className="w-3.5 h-3.5" />}
                </div>
                <p className="text-[10px] opacity-75 font-normal mt-0.5">{preset.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Module 2: Climate VRV */}
        <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-pearl-400 flex items-center gap-1.5">
              <Wind className="w-3.5 h-3.5 text-blue-400" />
              <span>DAIKIN VRV CLIMATE</span>
            </span>
            <div className="my-6 text-center">
              <span className="text-4xl font-serif font-black text-pearl-100">
                {temperature}°C
              </span>
              <span className="text-xs font-mono text-pearl-400 block mt-1">
                HEPA AIR FILTER: 99.97% PURIFIED
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setTemperature(Math.max(18, temperature - 1))}
              className="w-10 h-10 rounded-xl bg-obsidian-950 border border-white/10 hover:border-blue-400 text-pearl-100 font-bold text-lg transition-colors"
            >
              -
            </button>
            <span className="text-xs font-mono text-pearl-300">ADJUST TEMP</span>
            <button
              onClick={() => setTemperature(Math.min(24, temperature + 1))}
              className="w-10 h-10 rounded-xl bg-obsidian-950 border border-white/10 hover:border-blue-400 text-pearl-100 font-bold text-lg transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Module 3: Motorized Shades */}
        <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-pearl-400 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-gold-400" />
              <span>LUTRON MOTORIZED SHADES</span>
            </span>
            <p className="text-xs text-pearl-400 mt-2">
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
                    ? "bg-gold-500 text-obsidian-950 font-bold border-gold-400"
                    : "bg-obsidian-950/60 border-white/5 text-pearl-300 hover:text-white"
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
        <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-pearl-400 flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>B&amp;O SPATIAL SOUNDSCAPE</span>
            </span>
            <p className="text-xs text-pearl-400 mt-2">
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
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-400 font-semibold"
                    : "bg-obsidian-950/60 border-white/5 text-pearl-400 hover:text-white"
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
