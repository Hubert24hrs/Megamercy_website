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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-subtle text-xs font-mono tracking-widest text-gold-400 uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VERIFIED GUEST REPUTATION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-pearl-100">
          The Diplomatic Record
        </h1>
        <p className="text-sm sm:text-base text-pearl-300 leading-relaxed">
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
        <div className="p-6 rounded-3xl glass-panel border border-white/5 text-center">
          <span className="text-3xl lg:text-4xl font-serif font-bold gold-gradient-text block">
            4.98
          </span>
          <span className="text-xs font-mono text-pearl-400 mt-1 block">OVERALL RATING</span>
        </div>
        <div className="p-6 rounded-3xl glass-panel border border-white/5 text-center">
          <span className="text-3xl lg:text-4xl font-serif font-bold emerald-gradient-text block">
            100%
          </span>
          <span className="text-xs font-mono text-pearl-400 mt-1 block">SECURITY &amp; PRIVACY</span>
        </div>
        <div className="p-6 rounded-3xl glass-panel border border-white/5 text-center">
          <span className="text-3xl lg:text-4xl font-serif font-bold gold-gradient-text block">
            100%
          </span>
          <span className="text-xs font-mono text-pearl-400 mt-1 block">POWER CONTINUITY</span>
        </div>
        <div className="p-6 rounded-3xl glass-panel border border-white/5 text-center">
          <span className="text-3xl lg:text-4xl font-serif font-bold text-pearl-100 block">
            98.5%
          </span>
          <span className="text-xs font-mono text-pearl-400 mt-1 block">REPEAT GUEST INDEX</span>
        </div>
      </section>

      {/* Detailed Reviews List */}
      <section className="space-y-6">
        <h3 className="text-2xl font-serif font-bold text-pearl-100 text-center">
          Verified Guest Reflections
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl glass-panel border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-pearl-400">{t.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-pearl-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.guestName}
                  className="w-10 h-10 rounded-full object-cover border border-gold-500/30"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-pearl-100">{t.guestName}</span>
                    <span>{t.flag}</span>
                  </div>
                  <span className="text-[11px] text-pearl-400 block">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
