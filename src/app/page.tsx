import React from "react";
import Link from "next/link";
import HeroScene from "@/components/3d/HeroScene";
import VirtualTourCanvas from "@/components/3d/VirtualTourCanvas";
import BookingWidget from "@/components/BookingWidget";
import SecurityDashboard from "@/components/SecurityDashboard";
import InteractiveFloorPlan from "@/components/InteractiveFloorPlan";
import IoTSimulator from "@/components/IoTSimulator";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { AMENITIES, IKOYI_LANDMARKS, BRAND_DETAILS } from "@/lib/data";
import {
  ShieldCheck,
  Zap,
  Wifi,
  Sparkles,
  ArrowUpRight,
  Compass,
  CheckCircle2,
  Calendar,
  Lock,
  ChevronRight,
  MapPin,
  Waves,
  Coffee,
  Car,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-24 lg:space-y-36 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Top Text & Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-subtle text-xs font-mono tracking-widest text-gold-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>EXCLUSIVE SHORT-LET RESIDENCE · IKOYI, LAGOS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-pearl-100 leading-[1.08]">
            A Private Penthouse on Bourdillon Road.{" "}
            <span className="gold-gradient-text italic font-normal block sm:inline">Built for Quiet Decisions.</span>
          </h1>

          <p className="text-base sm:text-lg text-pearl-300 max-w-2xl mx-auto leading-relaxed">
            Overlooking the calm water of Five Cowries Creek, MegaMercy is a single, privately held
            residence in old Ikoyi. Finished 3.2-meter ceilings and German acoustic glazing seal out
            the roar of Lagos, backed by synchronized 150kVA generators, pure reverse-osmosis water,
            and an on-site armed police detail.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/booking"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-obsidian-950 font-serif font-bold text-sm uppercase tracking-wider hover:brightness-110 shadow-2xl shadow-gold-500/30 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Penthouse</span>
            </Link>

            <a
              href="#tour"
              className="px-8 py-4 rounded-2xl glass-panel hover:bg-white/10 text-pearl-100 text-sm font-mono uppercase tracking-wider transition-all flex items-center gap-2 border border-gold-500/20"
            >
              <span>Explore 3D Walkthrough</span>
              <ChevronRight className="w-4 h-4 text-gold-400" />
            </a>
          </div>

          {/* Live Telemetry Ticker */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] font-mono text-pearl-400">
            <span className="flex items-center gap-1.5 text-gold-300">
              <Zap className="w-3.5 h-3.5 text-gold-400" /> 100% UNINTERRUPTED POWER
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> BIOMETRIC SMART LOCK
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-pearl-200">
              <Wifi className="w-3.5 h-3.5 text-gold-400" /> 1GBPS REDUNDANT FIBER
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-gold-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 24/7 PERIMETER PATROL
            </span>
          </div>
        </div>

        {/* 3D WebGL Hero Canvas Scene */}
        <HeroScene />
      </section>

      {/* 2. REAL-TIME BOOKING & AVAILABILITY ENGINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingWidget />
      </section>

      {/* 3. BRAND NARRATIVE & PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE MEGAMERCY STANDARD</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-pearl-100 leading-tight">
              A Private Sanctuary Built for Those Who Shape the World
            </h2>

            <p className="text-sm sm:text-base text-pearl-300 leading-relaxed">
              In a metropolis as dynamic and pulsating as Lagos, true luxury is the rare luxury of
              serene quiet, total confidentiality, and effortless continuity. MegaMercy was
              conceived from the ground up for dignitaries, multinational founders, and discerning
              families who refuse compromise.
            </p>

            <p className="text-sm sm:text-base text-pearl-400 leading-relaxed">
              Every detail has been curated with forensic precision: triple-glazed acoustic window
              assemblies that hush the Ikoyi city hum, custom Italian millwork, a private chef's
              culinary suite, and an uninterruptible dual-backup power system guaranteeing that your
              work and restorative rest never stutter.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-obsidian-900/60 border border-white/5">
                <span className="text-2xl font-serif font-bold gold-gradient-text block">
                  3,400 SQ.FT
                </span>
                <span className="text-xs text-pearl-400 font-mono mt-1 block">
                  EXPANSIVE PENTHOUSE LIVING
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-obsidian-900/60 border border-white/5">
                <span className="text-2xl font-serif font-bold emerald-gradient-text block">
                  ZERO FLICKER
                </span>
                <span className="text-xs text-pearl-400 font-mono mt-1 block">
                  STAMFORD + TESLA SOLAR BACKUP
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors"
              >
                <span>Read Full Architectural Narrative</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Luxury Imagery Collage */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-gold-500/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                alt="MegaMercy Living Pavilion"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-64 rounded-2xl glass-panel p-4 border border-gold-500/30 shadow-2xl backdrop-blur-xl">
              <span className="text-[10px] font-mono text-gold-400 uppercase block">
                IKOYI WATERFRONT
              </span>
              <p className="text-xs font-serif font-bold text-pearl-100 mt-1">
                Unobstructed Sunset Views Over Lagos Lagoon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3D VIRTUAL TOUR SECTION */}
      <section id="tour" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <VirtualTourCanvas />
      </section>

      {/* 5. AMENITIES & SIGNATURE PROVISIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">
            UNCOMPROMISING LUXURY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-pearl-100">
            Engineered for Sovereignty, Wellness &amp; Ease
          </h2>
          <p className="text-sm text-pearl-300 leading-relaxed">
            Every amenity has been specified to mirror the expectations of five-star hospitality in
            Geneva, London, and Tokyo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl glass-panel border border-white/5 hover:border-gold-500/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-obsidian-900 border border-gold-500/20 group-hover:border-gold-500/50 flex items-center justify-center text-gold-400 mb-6 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-pearl-100 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-pearl-400 mt-2 leading-relaxed">{item.description}</p>
              </div>

              {item.highlight && (
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. FORTRESS SECURITY COMMAND HUD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SecurityDashboard />
      </section>

      {/* 7. INTERACTIVE FLOOR PLAN & SPATIAL CAD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveFloorPlan />
      </section>

      {/* 8. PENTHOUSE SMART-HOME IOT SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IoTSimulator />
      </section>

      {/* 9. VERIFIED GUEST REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewsCarousel />
      </section>

      {/* 10. IKOYI LOCATION & NEIGHBORHOOD GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 lg:p-12 rounded-3xl glass-panel border border-gold-500/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">
                PRIME IKOYI ENCLAVE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-pearl-100">
                At the Center of Lagos's Diplomatic &amp; Financial Power
              </h2>
              <p className="text-xs sm:text-sm text-pearl-300 leading-relaxed">
                Positioned along the prestigious Bourdillon corridor, MegaMercy provides direct,
                controlled access to foreign embassies, private financial institutions, and established
                dining on Lugard and Alexander avenues.
              </p>

              <div className="space-y-3 pt-2">
                {IKOYI_LANDMARKS.map((lm, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-obsidian-900/60 border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-pearl-100 block">{lm.name}</span>
                      <span className="text-[11px] text-pearl-400">{lm.category}</span>
                    </div>
                    <span className="font-mono text-gold-400 text-xs px-2.5 py-1 rounded-lg bg-obsidian-950 border border-gold-500/20">
                      {lm.distance}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/location"
                  className="inline-flex items-center gap-2 text-xs font-mono text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-wider"
                >
                  <span>Explore Interactive Ikoyi Guide</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Ikoyi Map Teaser */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-obsidian-900 flex flex-col justify-between p-6">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-full glass-panel-subtle text-[11px] font-mono text-gold-400">
                  COORDINATES: 6.4549° N, 3.4246° E
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="relative z-10 text-center space-y-2 py-12">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 mx-auto flex items-center justify-center shadow-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-bold text-pearl-100">
                  Bourdillon Road, Ikoyi
                </h4>
                <p className="text-xs text-pearl-400 max-w-xs mx-auto">
                  Precise villa access gate and private security briefing coordinates transmitted
                  privately upon reservation confirmation.
                </p>
              </div>

              <div className="relative z-10 p-3 rounded-xl bg-obsidian-950/80 border border-white/10 text-center text-xs font-mono text-emerald-400">
                AIRPORT VIP TARMAC TRANSFER: ~28 MINS (VIA CORRIDOR)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL HIGH-CONVERTING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-obsidian-900 via-obsidian-900 to-obsidian-950 border border-gold-500/30 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-mono text-gold-400 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL RESERVATION REGISTRY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-pearl-100 max-w-2xl mx-auto leading-tight">
            Reserve Your Enclave at MegaMercy Apartment
          </h2>

          <p className="text-sm text-pearl-300 max-w-xl mx-auto leading-relaxed">
            Due to high demand from visiting diplomatic delegations and executive boards, we
            recommend securing your stay dates in advance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/booking"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-400 text-obsidian-950 font-serif font-bold text-sm uppercase tracking-wider hover:brightness-110 shadow-xl shadow-gold-500/25 transition-all"
            >
              Check Live Availability &amp; Book
            </Link>

            <a
              href={BRAND_DETAILS.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-obsidian-950 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>Connect with Lead Butler</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
