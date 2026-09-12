import React from "react";
import Link from "next/link";
import { Sparkles, Shield, Award, Heart, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About MagMercy · The Story & Hospitality Philosophy",
  description:
    "Discover the origin story, architectural vision, and executive hospitality philosophy behind MagMercy Apartment in Ikoyi, Lagos.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ORIGIN &amp; PHILOSOPHY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900">
          The Genesis of Sovereign Living
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          Founded on the conviction that visiting leaders and global visionaries in Lagos deserve an
          uncompromising sanctuary of absolute discretion, architectural poise, and modern fortress
          security.
        </p>
      </div>

      {/* Main Story Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-sm text-charcoal-600 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900">
            A Vision Born from Global Experience
          </h2>
          <p>
            MagMercy Apartment was conceived not merely to participate in the luxury short-let market,
            but to redefine it in West Africa. The founders—frequent international travelers across
            Geneva, Dubai, London, and Singapore—recognized a recurring dilemma facing visiting
            executives and dignitaries in Lagos: traditional five-star hotels were crowded and lacked
            true privacy, while conventional short-let apartments frequently suffered from unreliable
            power, compromised security, or inconsistent service.
          </p>
          <p>
            Our answer was to construct a bespoke private fortress in prime Ikoyi. From the triple-redundant
            power infrastructure to the acoustic dampening of the double-glazed facade, every structural
            choice was made with a singular objective: utter continuity of peace.
          </p>
          <p>
            When you cross the threshold of MagMercy, the sensory overload of Lagos transforms into
            tranquil serenity. Here, your confidential deliberations remain secure, your sleep is
            undisturbed, and your comfort is orchestrated by a dedicated private butler.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-gold-500/30 shadow-2xl bg-charcoal-950 group">
          <video
            src="/videos/magmercy_tour_1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-950/80 border border-gold-500/40 text-gold-400 text-[10px] font-mono font-bold tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>REAL RESIDENCE FOOTAGE · 89 LAFIAJI ST</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-[11px] font-mono">
            <span className="bg-black/60 px-2.5 py-1 rounded-md border border-white/10">Dolphin Estate, Ikoyi</span>
            <span className="bg-emerald-700/80 px-2.5 py-1 rounded-md text-emerald-200 font-bold">100% Verified</span>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-semibold">
            OUR CORNERSTONES
          </span>
          <h3 className="text-3xl font-serif font-bold text-charcoal-900">
            The MagMercy Pillars
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sand-100 border border-bronze-400/30 text-bronze-700 flex items-center justify-center shadow-sm">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-bold text-charcoal-900">Diplomatic Discretion</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              We treat your presence as classified. No public rosters, strict NDA adherence for all
              household staff, and military-grade biometric access.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-500/30 text-emerald-700 flex items-center justify-center shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-bold text-charcoal-900">Architectural Precision</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              From Bang &amp; Olufsen acoustic systems to hand-selected Calacatta marble and Miele
              precision appliances, compromise does not exist.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-400/30 text-blue-700 flex items-center justify-center shadow-sm">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-bold text-charcoal-900">Intuitive Hospitality</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              True luxury is invisible: anticipating your espresso preference, preparing your evening
              turndown, and ensuring your itinerary flows without a ripple.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-10 rounded-3xl bg-sand-50 border border-bronze-400/30 text-center space-y-4 shadow-lg">
        <h3 className="text-2xl font-serif font-bold text-charcoal-900">
          Experience the MagMercy Standard
        </h3>
        <p className="text-xs text-charcoal-600 max-w-lg mx-auto">
          Contact our lead butler today for custom delegation packages or private viewings.
        </p>
        <div className="pt-2">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-bronze-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-bronze-600 transition-colors shadow-md shadow-bronze-500/20"
          >
            <span>Reserve Residence</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
