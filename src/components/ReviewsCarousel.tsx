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
    <div className="w-full rounded-3xl glass-panel p-6 lg:p-10 border border-gold-500/20 shadow-2xl relative overflow-hidden">
      {/* Background quote insignia */}
      <Quote className="absolute -top-6 -right-6 w-44 h-44 text-gold-500/5 rotate-12 pointer-events-none" />

      {/* Top Header Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gold-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold-400" />
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-pearl-100">
            4.98 / 5.0 · 42 VERIFIED EXECUTIVE STAYS
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-xl bg-obsidian-900 border border-white/10 hover:border-gold-400 text-pearl-200 flex items-center justify-center transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-xl bg-obsidian-900 border border-white/10 hover:border-gold-400 text-pearl-200 flex items-center justify-center transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Testimonial Body */}
      <div className="py-8 max-w-3xl">
        <p className="text-base lg:text-xl font-serif text-pearl-100 leading-relaxed italic">
          "{activeReview.quote}"
        </p>

        {/* Guest Metadata */}
        <div className="mt-6 flex items-center gap-4">
          <img
            src={activeReview.avatarUrl}
            alt={activeReview.guestName}
            className="w-12 h-12 rounded-full object-cover border border-gold-500/40"
          />
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-pearl-100">{activeReview.guestName}</h4>
              <span className="text-sm">{activeReview.flag}</span>
              {activeReview.verifiedStay && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  <span>VERIFIED DIPLOMATIC STAY</span>
                </span>
              )}
            </div>
            <p className="text-xs text-pearl-400">
              {activeReview.title} · {activeReview.country}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center gap-2 pt-4 border-t border-white/5">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all ${
              currentIndex === idx ? "w-8 bg-gold-400" : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
