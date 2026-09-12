"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import {
  ShieldCheck,
  Lock,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  CheckCircle2,
  FileCheck,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    if (TESTIMONIALS.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    if (TESTIMONIALS.length === 0) return;
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // If there are real testimonials in the future, render the slider
  if (TESTIMONIALS.length > 0) {
    const activeReview = TESTIMONIALS[currentIndex];
    return (
      <div className="w-full rounded-3xl glass-panel p-6 lg:p-10 border border-bronze-400/30 shadow-xl bg-white/95 relative overflow-hidden">
        <Quote className="absolute -top-6 -right-6 w-44 h-44 text-bronze-500/10 rotate-12 pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-charcoal-900/10">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-bold text-charcoal-900">
              VERIFIED RESIDENCE TESTIMONIALS
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

        <div className="py-8 max-w-3xl">
          <p className="text-base lg:text-xl font-serif text-charcoal-900 leading-relaxed italic">
            "{activeReview.quote}"
          </p>

          <div className="mt-6 flex items-center gap-4">
            {activeReview.avatarUrl && (
              <img
                src={activeReview.avatarUrl}
                alt={activeReview.guestName}
                className="w-12 h-12 rounded-full object-cover border border-bronze-400/50 shadow-sm"
              />
            )}
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-charcoal-900">{activeReview.guestName}</h4>
                {activeReview.flag && <span className="text-sm">{activeReview.flag}</span>}
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

  // Authentic zero-mock state: Diplomatic Discretion & Verified References
  return (
    <div className="w-full rounded-3xl glass-panel p-8 lg:p-12 border border-bronze-400/30 shadow-xl bg-white/95 relative overflow-hidden">
      <ShieldCheck className="absolute -top-8 -right-8 w-56 h-56 text-bronze-500/5 pointer-events-none" />

      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <Lock className="w-3.5 h-3.5 text-bronze-600" />
          <span>DIPLOMATIC DISCRETION &amp; PRIVACY STANDARD</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-serif font-black text-charcoal-900 leading-tight">
          Confidential Guest Records &amp; Private Verification
        </h3>

        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          In accordance with our strict Non-Disclosure Agreements (NDAs) and statutory obligations
          under the Nigeria Data Protection Act (NDPA), MagMercy does not publish guest names,
          photographs, or stay itineraries on public web pages.
        </p>

        <p className="text-xs sm:text-sm text-charcoal-500 leading-relaxed">
          Accredited diplomatic missions, international corporate delegations, and family offices may
          request private institutional reference dossiers directly through our Head Butler desk.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-charcoal-900/10">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-charcoal-900">Institutional References</h4>
              <p className="text-[11px] text-charcoal-500 mt-0.5">
                Vetted references provided to verified embassies and multinational boards upon credential check.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 shadow-sm">
            <FileCheck className="w-4 h-4 text-bronze-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-charcoal-900">Guest Feedback Registry</h4>
              <p className="text-[11px] text-charcoal-500 mt-0.5">
                Verified guests receive an encrypted post-departure link to submit feedback securely.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="https://wa.me/2348140007890?text=Hello%20MagMercy%2C%20I%20would%20like%20to%20request%20verified%20diplomatic%20reference%20credentials%20for%20our%20delegation."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-bronze-500/20 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Request References via Butler Desk</span>
          </a>

          <Link
            href="/reviews"
            className="px-6 py-3.5 rounded-xl bg-sand-100 hover:bg-sand-200 border border-charcoal-900/10 text-charcoal-800 font-mono text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            Submit Stay Feedback (Past Guests)
          </Link>
        </div>
      </div>
    </div>
  );
}
