import React from "react";
import InteractiveFloorPlan from "@/components/InteractiveFloorPlan";
import VideoTourSection from "@/components/VideoTourSection";
import RoomVideoCard from "@/components/RoomVideoCard";
import BookingWidget from "@/components/BookingWidget";
import { ROOMS } from "@/lib/data";
import { Sparkles, Video, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "The Apartment · Spatial Specifications & 4K Video Walkthrough · MagMercy Ikoyi",
  description:
    "Explore the 3,400 sq.ft penthouse layout, verified room-by-room video tours, and architectural CAD specifications of MagMercy Apartment at 89 Lafiaji Street, Dolphin Estate, Ikoyi.",
};

export default function ApartmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-gold-500/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>VERIFIED RESIDENCE FOOTAGE &amp; SPECIFICATIONS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900 tracking-tight">
          The Residence Unfolded
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          3,400 square feet of curated modernist luxury. Three master retreats, an
          acoustic living pavilion, private chef's culinary suite, and an expansive cantilevered
          terrace in Dolphin Estate, Ikoyi. Experience 100% authentic, real on-site video footage.
        </p>
      </div>

      {/* Real On-Site Cinematic Video Walkthrough Player */}
      <VideoTourSection />

      {/* Deep Room Breakdown Cards with Real Suite Video Players */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>REAL RESIDENCE VIDEO PREVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal-900">
            Suite-by-Suite Architectural Review
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Click any suite video below to play real footage recorded on-site at 89 Lafiaji Street.
          </p>
        </div>

        <div className="space-y-10">
          {ROOMS.map((room, idx) => (
            <RoomVideoCard key={room.id} room={room} isReversed={idx % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Interactive Floor Plan CAD */}
      <section>
        <InteractiveFloorPlan />
      </section>

      {/* Booking Widget Container */}
      <section className="pt-10">
        <BookingWidget />
      </section>
    </div>
  );
}
