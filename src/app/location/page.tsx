import React from "react";
import { IKOYI_LANDMARKS } from "@/lib/data";
import { MapPin, Navigation, Car, Plane, Compass, Sparkles, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Ikoyi Neighborhood & Location · MagMercy Lagos",
  description:
    "Explore the prestigious Ikoyi enclave surrounding MagMercy Apartment. Discover nearby diplomatic consulates, fine dining, golf clubs, and transit times.",
};

export default function LocationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <MapPin className="w-3.5 h-3.5" />
          <span>PRIME IKOYI CORRIDOR</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900">
          The Diplomatic Capital of Lagos
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          Quiet tree-lined avenues, guarded private perimeters, and effortless proximity to the
          epicenter of Nigerian commerce and international relations.
        </p>
      </div>

      {/* Interactive Map & Coordinates HUD */}
      <div className="p-8 lg:p-10 rounded-3xl glass-panel bg-white/95 border border-bronze-400/30 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden border border-charcoal-900/10 bg-sand-50 flex flex-col justify-between p-6 shadow-inner">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#b38f5c_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white border border-bronze-400/30 text-xs font-mono text-bronze-700 font-semibold shadow-sm">
                RADIAL COVERAGE: 5KM CORRIDOR
              </span>
              <span className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>TRAFFIC PROTOCOL ACTIVE</span>
              </span>
            </div>

            <div className="relative z-10 text-center space-y-3 py-10">
              <div className="w-14 h-14 rounded-full bg-sand-100 border border-bronze-400/40 text-bronze-600 mx-auto flex items-center justify-center shadow-md">
                <Navigation className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-charcoal-900">
                Bourdillon Road, Ikoyi, Lagos
              </h3>
              <p className="text-xs text-charcoal-600 max-w-sm mx-auto">
                Confidential gated community entrance coordinates dispatched to reserved guests.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-charcoal-600 border-t border-charcoal-900/10 pt-3 font-medium">
              <span>LATITUDE: 6°27'18" N</span>
              <span>LONGITUDE: 3°25'29" E</span>
              <span>ALTITUDE: 18M ABOVE SEA LEVEL</span>
            </div>
          </div>

          {/* Transit & Transfer Metrics */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="p-5 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-bronze-700 font-semibold">
                <Plane className="w-4 h-4" />
                <span>AIRPORT CORRIDOR (LOS)</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-charcoal-900">
                Murtala Muhammed Airport
              </h4>
              <p className="text-xs text-charcoal-600">
                28 to 35 minutes via the Third Mainland Bridge corridor. Armored transfers available.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-semibold">
                <Car className="w-4 h-4" />
                <span>VICTORIA ISLAND BRIDGE</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-charcoal-900">
                Financial &amp; Tech Hub
              </h4>
              <p className="text-xs text-charcoal-600">
                8 to 10 minutes to major commercial headquarters and foreign embassies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 font-semibold">
                <Compass className="w-4 h-4" />
                <span>LAGOS WATERWAYS</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-charcoal-900">
                Marina &amp; Yacht Berths
              </h4>
              <p className="text-xs text-charcoal-600">
                5 minutes to private boat departures connecting to Eko Atlantic and Lekki.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Curated Landmarks List */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-semibold">
            THE NEIGHBORHOOD
          </span>
          <h2 className="text-3xl font-serif font-bold text-charcoal-900">
            Curated Destinations in Ikoyi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IKOYI_LANDMARKS.map((lm, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 hover:border-bronze-400/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-bronze-600 uppercase font-semibold">
                    {lm.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-sand-100 border border-bronze-400/30 text-xs font-mono text-bronze-700 font-semibold shadow-sm">
                    {lm.distance}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-charcoal-900">{lm.name}</h3>
                <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">{lm.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
