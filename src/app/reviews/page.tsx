"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  FileCheck,
  Star,
  CheckCircle2,
  Sparkles,
  Send,
  MessageSquare,
  Building,
} from "lucide-react";

export default function ReviewsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    bookingRef: "",
    guestName: "",
    organization: "",
    comments: "",
    consentPublic: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>GUEST REGISTRY &amp; VERIFICATION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900">
          Executive Discretion &amp; Feedback
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          In accordance with our strict diplomatic confidentiality standards, we do not publish
          unvetted guest names or public stay rosters. Read our verification policies below or
          submit confidential post-stay reflections.
        </p>
      </div>

      {/* Discretion & Reference Policy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-sand-100 border border-bronze-400/30 text-bronze-700 flex items-center justify-center shadow-sm">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-serif font-bold text-charcoal-900">Zero Public Exposure</h3>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            Visiting ambassadors, envoys, and executives are guaranteed absolute anonymity. We never
            leverage client identities for promotional endorsement.
          </p>
        </div>

        <div className="p-6 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-500/30 text-emerald-700 flex items-center justify-center shadow-sm">
            <Building className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-serif font-bold text-charcoal-900">Institutional Vetting</h3>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            Embassies and multinational boards requiring past delegation references may request
            redacted compliance verification directly via our Head Butler desk.
          </p>
        </div>

        <div className="p-6 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-400/30 text-blue-700 flex items-center justify-center shadow-sm">
            <FileCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-serif font-bold text-charcoal-900">Encrypted Feedback</h3>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            Guest reviews are collected exclusively from verified reservations and transmitted
            directly to executive management for continuous quality control.
          </p>
        </div>
      </div>

      {/* Verified Guest Feedback Form */}
      <div className="p-8 lg:p-12 rounded-3xl glass-panel bg-white/95 border border-bronze-400/30 shadow-xl">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-semibold">
              VERIFIED GUEST FEEDBACK PORTAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900">
              Submit Your Stay Reflection
            </h2>
            <p className="text-xs text-charcoal-600">
              Please enter your Booking Reference ID to verify your recent stay at MegaMercy Apartment.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-500/30 text-emerald-700 mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal-900">
                Thank You for Your Feedback
              </h3>
              <p className="text-xs text-charcoal-600 max-w-sm mx-auto leading-relaxed">
                Your evaluation has been logged securely and delivered to executive management.
                We appreciate your partnership.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-xl bg-sand-100 border border-bronze-400/30 text-xs font-mono text-bronze-700 font-semibold shadow-sm"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-charcoal-700 font-semibold">
                    BOOKING REFERENCE ID
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.bookingRef}
                    onChange={(e) => setFormData({ ...formData, bookingRef: e.target.value })}
                    placeholder="e.g. MM-2026-XXXX"
                    className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs text-charcoal-900 focus:outline-none focus:border-bronze-500 shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-charcoal-700 font-semibold">
                    GUEST / DELEGATION NAME
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    placeholder="Your name or mission title"
                    className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs text-charcoal-900 focus:outline-none focus:border-bronze-500 shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-charcoal-700 font-semibold">
                  EXPERIENCE RATING
                </label>
                <div className="flex items-center gap-2 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-charcoal-300 fill-transparent"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono text-charcoal-600 ml-2 font-medium">
                    {rating} of 5 Stars
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-charcoal-700 font-semibold">
                  CONFIDENTIAL COMMENTS &amp; OBSERVATIONS
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Share details regarding your stay: acoustic quality, butler service, power stability, or dining..."
                  className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs text-charcoal-900 focus:outline-none focus:border-bronze-500 resize-none shadow-sm"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consentPublic}
                  onChange={(e) => setFormData({ ...formData, consentPublic: e.target.checked })}
                  className="rounded border-charcoal-900/20 text-bronze-600 focus:ring-bronze-500"
                />
                <label htmlFor="consent" className="text-xs text-charcoal-600 cursor-pointer">
                  Authorize anonymized summary to be shared with verified prospective delegations.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-bronze-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-bronze-600 transition-colors shadow-md shadow-bronze-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Confidential Stay Evaluation</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
