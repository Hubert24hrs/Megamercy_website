import React from "react";
import { IKOYI_LANDMARKS } from "@/lib/data";
import { MapPin, Navigation, Car, Plane, Compass, Sparkles, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Ikoyi Neighborhood & Location · MegaMercy Lagos",
  description:
    "Explore the prestigious Ikoyi enclave surrounding MegaMercy Apartment. Discover nearby diplomatic consulates, fine dining, golf clubs, and transit times.",
};

export default function LocationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-subtle text-xs font-mono tracking-widest text-gold-400 uppercase">
          <MapPin className="w-3.5 h-3.5" />
          <span>PRIME IKOYI CORRIDOR</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-pearl-100">
          The Diplomatic Capital of Lagos
        </h1>
        <p className="text-sm sm:text-base text-pearl-300 leading-relaxed">
          Quiet tree-lined avenues, guarded private perimeters, and effortless proximity to the
          epicenter of Nigerian commerce and international relations.
        </p>
      </div>

      {/* Interactive Map & Coordinates HUD */}
      <div className="p-8 lg:p-10 rounded-3xl glass-panel border border-gold-500/20 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-obsidian-900 flex flex-col justify-between p-6">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#d4af37_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full glass-panel text-xs font-mono text-gold-300">
                RADIAL COVERAGE: 5KM CORRIDOR
              </span>
              <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>TRAFFIC PROTOCOL ACTIVE</span>
              </span>
            </div>

            <div className="relative z-10 text-center space-y-3 py-10">
              <div className="w-14 h-14 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 mx-auto flex items-center justify-center shadow-xl">
                <Navigation className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-pearl-100">
                Bourdillon Road, Ikoyi, Lagos
              </h3>
              <p className="text-xs text-pearl-400 max-w-sm mx-auto">
                Confidential gated community entrance coordinates dispatched to reserved guests.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-pearl-400 border-t border-white/10 pt-3">
              <span>LATITUDE: 6°27'18" N</span>
              <span>LONGITUDE: 3°25'29" E</span>
              <span>ALTITUDE: 18M ABOVE SEA LEVEL</span>
            </div>
          </div>

          {/* Transit & Transfer Metrics */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-400">
                <Plane className="w-4 h-4" />
                <span>AIRPORT CORRIDOR (LOS)</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-pearl-100">
                Murtala Muhammed Airport
              </h4>
              <p className="text-xs text-pearl-400">
                28 to 35 minutes via the Third Mainland Bridge corridor. Armored transfers available.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Car className="w-4 h-4" />
                <span>VICTORIA ISLAND BRIDGE</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-pearl-100">
                Financial &amp; Tech Hub
              </h4>
              <p className="text-xs text-pearl-400">
                8 to 10 minutes to major commercial headquarters and foreign embassies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                <Compass className="w-4 h-4" />
                <span>LAGOS WATERWAYS</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-pearl-100">
                Marina &amp; Yacht Berths
              </h4>
              <p className="text-xs text-pearl-400">
                5 minutes to private boat departures connecting to Eko Atlantic and Lekki.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Curated Landmarks List */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">
            THE NEIGHBORHOOD
          </span>
          <h2 className="text-3xl font-serif font-bold text-pearl-100">
            Curated Destinations in Ikoyi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IKOYI_LANDMARKS.map((lm, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel border border-white/5 hover:border-gold-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-gold-400 uppercase">
                    {lm.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-obsidian-900 border border-gold-500/20 text-xs font-mono text-gold-300">
                    {lm.distance}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-pearl-100">{lm.name}</h3>
                <p className="text-xs text-pearl-400 mt-2 leading-relaxed">{lm.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
