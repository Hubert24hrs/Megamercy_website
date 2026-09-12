import React from "react";
import Link from "next/link";
import CinematicHero from "@/components/CinematicHero";
import QuickSearchBar from "@/components/QuickSearchBar";
import VideoReelsShowcase from "@/components/VideoReelsShowcase";
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
  Video,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. CINEMATIC REAL VIDEO HERO (Replaces Three.js 3D box) */}
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-2">
        <CinematicHero />
      </section>

      {/* 2. HORIZONTAL QUICK SEARCH BOOKING BAR */}
      <QuickSearchBar />

      {/* 3. UNFILTERED SUITE-BY-SUITE REAL VIDEO REELS SHOWCASE */}
      <VideoReelsShowcase />

      {/* 4. ALTERNATING REAL PROPERTY STORY SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AlternatingFeatureSections />
      </section>

      {/* 5. INTERACTIVE CONDO UNIT MAP & ELEVATION */}
      <section id="unit-map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <InteractiveUnitMap />
      </section>

      {/* Wave Decorative Divider */}
      <div className="coastal-wave-divider opacity-50" />

      {/* 6. 4-COLUMN QUICK ACTION BLURBS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FourColumnBlurbs />
      </section>

      {/* 7. BRAND NARRATIVE & REAL ON-SITE ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-bronze-600 uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE MAGMERCY STANDARD</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal-900 leading-tight">
              An Architectural Cocoon of Total Sovereignty
            </h2>

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Conceived as a safe harbor for international travelers, diplomats, and corporate
              principals visiting Lagos. Every detail at MagMercy is calibrated for absolute peace of mind:
              uncompromised acoustic silence, 100% redundant electrical power, and intuitive smart-home living.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-charcoal-900/10 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center text-bronze-600 mb-3">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-charcoal-900 text-base">Keyless Autonomy</h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Encrypted biometric entry and temporary digital keys dispatched to your phone before arrival.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-charcoal-900/10 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center text-coastal-blue mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-charcoal-900 text-base">Triple Power Grid</h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Synchronized twin 150kVA generators with automated ATS and lithium solar backup.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono text-coastal-blue hover:text-coastal-blue-hover uppercase tracking-wider font-bold transition-colors"
              >
                <span>Read Full Architectural Narrative</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Real On-Site Verified Imagery */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-charcoal-900/15 shadow-xl relative bg-charcoal-950">
              <img
                src="/images/rooms/magmercy_real_1.jpeg"
                alt="MagMercy Real Penthouse Suite in Dolphin Estate"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-emerald-800/90 text-white text-[10px] font-mono font-bold tracking-wider backdrop-blur-md shadow-md flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>VERIFIED ON-SITE RESIDENCE PHOTO</span>
              </div>
            </div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-72 rounded-2xl bg-white/95 p-4 border border-charcoal-900/15 shadow-xl backdrop-blur-xl">
              <span className="text-[10px] font-mono text-coastal-blue uppercase block font-bold">
                89 LAFIAJI STREET, DOLPHIN ESTATE
              </span>
              <p className="text-xs font-serif font-bold text-charcoal-900 mt-1">
                Acoustic Double-Glazing &amp; Poliform Furnishings in Old Ikoyi
              </p>
            </div>
          </div>
        </div>
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
                Positioned in the prestigious Dolphin Estate enclave in Ikoyi, MagMercy provides direct,
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
                  89 Lafiaji Street, Dolphin Estate, Ikoyi
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
            Reserve Your Enclave at MagMercy Apartment
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
