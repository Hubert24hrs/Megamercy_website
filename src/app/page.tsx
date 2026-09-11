import React from "react";
import Link from "next/link";
import HeroScene from "@/components/3d/HeroScene";
import VirtualTourCanvas from "@/components/3d/VirtualTourCanvas";
import QuickSearchBar from "@/components/QuickSearchBar";
import AlternatingFeatureSections from "@/components/AlternatingFeatureSections";
import InteractiveUnitMap from "@/components/InteractiveUnitMap";
import FourColumnBlurbs from "@/components/FourColumnBlurbs";
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
  Building,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-20 lg:space-y-32 pb-20">
      {/* 1. HERO SECTION WITH PROMINENT COASTAL HEADLINE */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Top Text & Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sand-100 border border-charcoal-900/15 text-xs font-mono tracking-widest text-coastal-blue uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WATERFRONT SHORT-LET RESIDENCE · IKOYI, LAGOS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-charcoal-900 leading-[1.08]">
            A Private Penthouse on Bourdillon Road.{" "}
            <span className="text-coastal-blue italic font-normal block sm:inline">Overlooking Five Cowries Creek.</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Overlooking the tranquil waters of Five Cowries Creek, MegaMercy is an exclusive, privately held
            waterfront sanctuary in old Ikoyi. Finished 3.2-meter ceilings and German acoustic glazing seal out
            the city hum, backed by synchronized 150kVA power, heated infinity pool, private boat jetty,
            and an on-site armed police detail.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/booking"
              className="px-8 py-4 rounded-2xl bg-coastal-blue hover:bg-coastal-blue-hover text-white font-serif font-bold text-sm uppercase tracking-wider shadow-lg shadow-coastal-blue/30 transition-all flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Check Availability &amp; Rates</span>
            </Link>

            <a
              href="#unit-map"
              className="px-8 py-4 rounded-2xl bg-white hover:bg-sand-100 text-charcoal-800 text-sm font-mono uppercase tracking-wider transition-all flex items-center gap-2 border border-charcoal-900/15 shadow-md hover:-translate-y-0.5"
            >
              <Building className="w-4 h-4 text-coastal-blue" />
              <span>View Building &amp; Units Map</span>
            </a>
          </div>

          {/* Live Telemetry Ticker */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] font-mono text-charcoal-600">
            <span className="flex items-center gap-1.5 text-charcoal-800 font-semibold">
              <Zap className="w-3.5 h-3.5 text-amber-600" /> 100% UNINTERRUPTED POWER
            </span>
            <span className="text-charcoal-900/20">|</span>
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> KEYLESS BIOMETRICS
            </span>
            <span className="text-charcoal-900/20">|</span>
            <span className="flex items-center gap-1.5 text-coastal-blue font-semibold">
              <Waves className="w-3.5 h-3.5 text-coastal-blue" /> PRIVATE BOAT JETTY
            </span>
            <span className="text-charcoal-900/20">|</span>
            <span className="flex items-center gap-1.5 text-charcoal-800 font-semibold">
              <Wifi className="w-3.5 h-3.5 text-coastal-blue" /> 1GBPS FIBER
            </span>
          </div>
        </div>

        {/* 3D WebGL Hero Canvas Scene */}
        <HeroScene />
      </section>

      {/* 2. HORIZONTAL QUICK SEARCH BOOKING BAR (Directly below Hero, inspired by Gulfstream) */}
      <QuickSearchBar />

      {/* 3. ALTERNATING 2-COLUMN STORY SECTIONS ("Relax & Enjoy!" & "Stay with Us!") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AlternatingFeatureSections />
      </section>

      {/* 4. INTERACTIVE CONDO UNIT MAP & ELEVATION (Inspired by Gulfstream Interactive Unit Map) */}
      <section id="unit-map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <InteractiveUnitMap />
      </section>

      {/* Wave Decorative Divider */}
      <div className="coastal-wave-divider opacity-50" />

      {/* 5. 4-COLUMN QUICK ACTION BLURBS (Inspired by Gulfstream 4-column callouts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FourColumnBlurbs />
      </section>

      {/* 6. BRAND NARRATIVE & PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-bronze-600 uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE MEGAMERCY STANDARD</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal-900 leading-tight">
              A Private Sanctuary Built for Those Who Shape the World
            </h2>

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              In a metropolis as dynamic and pulsating as Lagos, true luxury is the rare luxury of
              serene quiet, total confidentiality, and effortless continuity. MegaMercy was
              conceived from the ground up for dignitaries, multinational founders, and discerning
              families who refuse compromise.
            </p>

            <p className="text-sm sm:text-base text-charcoal-500 leading-relaxed">
              Every detail has been curated with forensic precision: triple-glazed acoustic window
              assemblies that hush the Ikoyi city hum, custom Italian millwork, a private chef's
              culinary suite, and an uninterruptible dual-backup power system guaranteeing that your
              work and restorative rest never stutter.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 shadow-sm">
                <span className="text-2xl font-serif font-bold text-coastal-blue block">
                  3,400 SQ.FT
                </span>
                <span className="text-xs text-charcoal-600 font-mono mt-1 block">
                  EXPANSIVE PENTHOUSE LIVING
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 shadow-sm">
                <span className="text-2xl font-serif font-bold text-emerald-700 block">
                  ZERO FLICKER
                </span>
                <span className="text-xs text-charcoal-600 font-mono mt-1 block">
                  DUAL 150kVA SYNCHRONIZED POWER
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-coastal-blue hover:text-coastal-blue-hover transition-colors font-bold"
              >
                <span>Read Full Architectural Narrative</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Luxury Imagery Collage */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-charcoal-900/15 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                alt="MegaMercy Living Pavilion"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-64 rounded-2xl bg-white/95 p-4 border border-charcoal-900/15 shadow-xl backdrop-blur-xl">
              <span className="text-[10px] font-mono text-coastal-blue uppercase block font-bold">
                IKOYI WATERFRONT
              </span>
              <p className="text-xs font-serif font-bold text-charcoal-900 mt-1">
                Unobstructed Sunset Views Over Five Cowries Creek
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 3D VIRTUAL TOUR SECTION */}
      <section id="tour" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <VirtualTourCanvas />
      </section>

      {/* 8. AMENITIES & SIGNATURE PROVISIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono text-coastal-blue uppercase tracking-widest block font-bold">
            UNCOMPROMISING LUXURY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal-900">
            Engineered for Sovereignty, Wellness &amp; Ease
          </h2>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            Every amenity has been specified to mirror the expectations of five-star hospitality in
            Geneva, London, and Tokyo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white border border-charcoal-900/10 hover:border-coastal-blue shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sand-100 border border-charcoal-900/15 group-hover:border-coastal-blue flex items-center justify-center text-coastal-blue mb-6 transition-colors shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-bronze-600 uppercase tracking-wider block mb-1 font-semibold">
                  {item.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-charcoal-900 group-hover:text-coastal-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">{item.description}</p>
              </div>

              {item.highlight && (
                <div className="mt-6 pt-4 border-t border-charcoal-900/10 flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. FORTRESS SECURITY COMMAND HUD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SecurityDashboard />
      </section>

      {/* 10. CAD SPATIAL FLOOR PLAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveFloorPlan />
      </section>

      {/* 11. PENTHOUSE SMART-HOME IOT SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IoTSimulator />
      </section>

      {/* 12. VERIFIED GUEST FEEDBACK & DISCRETION PORTAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewsCarousel />
      </section>

      {/* 13. FULL-FEATURED LIVE RESERVATION ENGINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingWidget />
      </section>

      {/* 14. IKOYI LOCATION & NEIGHBORHOOD GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 lg:p-12 rounded-3xl bg-white border border-charcoal-900/15 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono text-coastal-blue uppercase tracking-widest block font-bold">
                PRIME IKOYI ENCLAVE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
                At the Center of Lagos's Diplomatic &amp; Financial Power
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Positioned along the prestigious Bourdillon corridor, MegaMercy provides direct,
                controlled access to foreign embassies, private financial institutions, and established
                dining on Lugard and Alexander avenues.
              </p>

              <div className="space-y-3 pt-2">
                {IKOYI_LANDMARKS.map((lm, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-sand-50 border border-charcoal-900/10 flex items-center justify-between text-xs shadow-sm"
                  >
                    <div>
                      <span className="font-bold text-charcoal-900 block">{lm.name}</span>
                      <span className="text-[11px] text-charcoal-500">{lm.category}</span>
                    </div>
                    <span className="font-mono text-coastal-blue text-xs px-2.5 py-1 rounded-lg bg-white border border-charcoal-900/15 font-bold shadow-sm">
                      {lm.distance}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/location"
                  className="inline-flex items-center gap-2 text-xs font-mono text-coastal-blue hover:text-coastal-blue-hover transition-colors uppercase tracking-wider font-bold"
                >
                  <span>Explore Interactive Ikoyi Guide</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Ikoyi Map Teaser */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-charcoal-900/10 shadow-lg bg-sand-50 flex flex-col justify-between p-6">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0088cc_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-full bg-white border border-charcoal-900/10 text-[11px] font-mono text-coastal-blue font-bold shadow-sm">
                  COORDINATES: 6.4549° N, 3.4246° E
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <div className="relative z-10 text-center space-y-2 py-12">
                <div className="w-12 h-12 rounded-full bg-coastal-blue/10 border border-coastal-blue/30 text-coastal-blue mx-auto flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-bold text-charcoal-900">
                  Bourdillon Road, Ikoyi
                </h4>
                <p className="text-xs text-charcoal-600 max-w-xs mx-auto">
                  Precise villa access gate and private security briefing coordinates transmitted
                  privately upon reservation confirmation.
                </p>
              </div>

              <div className="relative z-10 p-3 rounded-xl bg-white border border-emerald-500/30 text-center text-xs font-mono text-emerald-800 font-semibold shadow-sm">
                AIRPORT VIP TARMAC TRANSFER: ~28 MINS (VIA CORRIDOR)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FINAL HIGH-CONVERTING CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-white via-sand-50 to-sand-100 border border-charcoal-900/15 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-coastal-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-charcoal-900/15 text-xs font-mono text-coastal-blue uppercase font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL RESERVATION REGISTRY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-charcoal-900 max-w-2xl mx-auto leading-tight">
            Reserve Your Enclave at MegaMercy Apartment
          </h2>

          <p className="text-sm text-charcoal-600 max-w-xl mx-auto leading-relaxed">
            Due to high demand from visiting diplomatic delegations and executive boards, we
            recommend securing your stay dates in advance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/booking"
              className="px-8 py-4 rounded-2xl bg-coastal-blue hover:bg-coastal-blue-hover text-white font-serif font-bold text-sm uppercase tracking-wider shadow-lg shadow-coastal-blue/30 transition-all hover:-translate-y-0.5"
            >
              Check Live Availability &amp; Book
            </Link>

            <a
              href={BRAND_DETAILS.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-white border border-emerald-600/40 hover:bg-emerald-50 text-emerald-800 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 font-semibold shadow-sm hover:-translate-y-0.5"
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
