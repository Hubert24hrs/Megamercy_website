import React from "react";
import VirtualTourCanvas from "@/components/3d/VirtualTourCanvas";
import InteractiveFloorPlan from "@/components/InteractiveFloorPlan";
import BookingWidget from "@/components/BookingWidget";
import { ROOMS } from "@/lib/data";
import { Sparkles, Maximize2, ShieldCheck, CheckCircle2, ChevronRight, Eye } from "lucide-react";

export const metadata = {
  title: "The Apartment & 3D Tour · MegaMercy Ikoyi, Lagos",
  description:
    "Explore the 3,400 sq.ft penthouse layout, room-by-room architectural specifications, and interactive 3D virtual walkthrough of MegaMercy Apartment.",
};

export default function ApartmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SPATIAL DESIGN &amp; SPECIFICATIONS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900">
          The Residence Unfolded
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          3,400 square feet of curated modernist luxury. Three master en-suite retreats, an
          acoustic living pavilion, private chef's culinary suite, and an expansive cantilevered
          terrace overlooking the Lagos Lagoon.
        </p>
      </div>

      {/* 3D Virtual Tour Canvas */}
      <section>
        <VirtualTourCanvas />
      </section>

      {/* Interactive Floor Plan CAD */}
      <section>
        <InteractiveFloorPlan />
      </section>

      {/* Deep Room Breakdown Cards */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-semibold">
            SUITE BY SUITE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            Engineered for Serenity &amp; Rest
          </h2>
        </div>

        <div className="space-y-16">
          {ROOMS.map((room, idx) => (
            <div
              key={room.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="rounded-3xl overflow-hidden aspect-[16/10] border border-bronze-400/30 shadow-xl relative group">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 border border-bronze-400/30 text-[11px] font-mono text-bronze-700 font-semibold shadow-md">
                  {room.dimensions}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-semibold">
                    {room.capacity}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1">
                    {room.name}
                  </h3>
                  <p className="text-xs font-mono text-charcoal-500 mt-1">{room.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {room.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-charcoal-900/10">
                  <span className="text-[11px] font-mono text-charcoal-500 uppercase block font-semibold">
                    DISTINCTIVE FEATURES
                  </span>
                  {room.keyFeatures.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2 text-xs text-charcoal-700">
                      <CheckCircle2 className="w-4 h-4 text-bronze-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="/booking"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bronze-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-bronze-600 transition-colors shadow-md shadow-bronze-500/20"
                  >
                    <span>Reserve Residence</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Widget Container */}
      <section className="pt-10">
        <BookingWidget />
      </section>
    </div>
  );
}
