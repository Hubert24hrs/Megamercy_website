import React from "react";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { TESTIMONIALS } from "@/lib/data";
import { Star, ShieldCheck, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Diplomatic Reviews & Verified Stays · MegaMercy Lagos",
  description:
    "Read verified reviews and testimonials from visiting ambassadors, corporate leaders, and international guests who have stayed at MegaMercy Apartment.",
};

export default function ReviewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VERIFIED GUEST REPUTATION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900">
          The Diplomatic Record
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          Read transparent reflections from executives, envoys, and global tastemakers who call
          MegaMercy their sovereign home in West Africa.
        </p>
      </div>

      {/* Hero Reviews Carousel */}
      <section>
        <ReviewsCarousel />
      </section>

      {/* Aggregate Scoreboard */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 text-center shadow-sm">
          <span className="text-3xl lg:text-4xl font-serif font-bold text-bronze-600 block">
            4.98
          </span>
          <span className="text-xs font-mono text-charcoal-600 mt-1 block font-semibold">OVERALL RATING</span>
        </div>
        <div className="p-6 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 text-center shadow-sm">
          <span className="text-3xl lg:text-4xl font-serif font-bold text-emerald-700 block">
            100%
          </span>
          <span className="text-xs font-mono text-charcoal-600 mt-1 block font-semibold">SECURITY &amp; PRIVACY</span>
        </div>
        <div className="p-6 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 text-center shadow-sm">
          <span className="text-3xl lg:text-4xl font-serif font-bold text-bronze-600 block">
            100%
          </span>
          <span className="text-xs font-mono text-charcoal-600 mt-1 block font-semibold">POWER CONTINUITY</span>
        </div>
        <div className="p-6 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 text-center shadow-sm">
          <span className="text-3xl lg:text-4xl font-serif font-bold text-charcoal-900 block">
            98.5%
          </span>
          <span className="text-xs font-mono text-charcoal-600 mt-1 block font-semibold">REPEAT GUEST INDEX</span>
        </div>
      </section>

      {/* Detailed Reviews List */}
      <section className="space-y-6">
        <h3 className="text-2xl font-serif font-bold text-charcoal-900 text-center">
          Verified Guest Reflections
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-charcoal-500">{t.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal-900/10 flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.guestName}
                  className="w-10 h-10 rounded-full object-cover border border-bronze-400/40 shadow-sm"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-charcoal-900">{t.guestName}</span>
                    <span>{t.flag}</span>
                  </div>
                  <span className="text-[11px] text-charcoal-500 block">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
