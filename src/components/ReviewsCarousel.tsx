"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <div className="w-full rounded-3xl glass-panel p-6 lg:p-10 border border-bronze-400/30 shadow-xl bg-white/95 relative overflow-hidden">
      {/* Background quote insignia */}
      <Quote className="absolute -top-6 -right-6 w-44 h-44 text-bronze-500/10 rotate-12 pointer-events-none" />

      {/* Top Header Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-charcoal-900/10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-charcoal-900">
            4.98 / 5.0 · 42 VERIFIED EXECUTIVE STAYS
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-xl bg-sand-100 border border-charcoal-900/10 hover:border-bronze-500 text-charcoal-800 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-xl bg-sand-100 border border-charcoal-900/10 hover:border-bronze-500 text-charcoal-800 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Testimonial Body */}
      <div className="py-8 max-w-3xl">
        <p className="text-base lg:text-xl font-serif text-charcoal-900 leading-relaxed italic">
          "{activeReview.quote}"
        </p>

        {/* Guest Metadata */}
        <div className="mt-6 flex items-center gap-4">
          <img
            src={activeReview.avatarUrl}
            alt={activeReview.guestName}
            className="w-12 h-12 rounded-full object-cover border border-bronze-400/50 shadow-sm"
          />
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-charcoal-900">{activeReview.guestName}</h4>
              <span className="text-sm">{activeReview.flag}</span>
              {activeReview.verifiedStay && (
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-[10px] font-mono text-emerald-800 border border-emerald-500/30 font-semibold shadow-sm">
                  <ShieldCheck className="w-3 h-3" />
                  <span>VERIFIED DIPLOMATIC STAY</span>
                </span>
              )}
            </div>
            <p className="text-xs text-charcoal-600">
              {activeReview.title} · {activeReview.country}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center gap-2 pt-4 border-t border-charcoal-900/10">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all ${
              currentIndex === idx ? "w-8 bg-bronze-500" : "w-2 bg-charcoal-900/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
