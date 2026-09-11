"use client";

import React, { useState } from "react";
import { BRAND_DETAILS } from "@/lib/data";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Send,
  Sparkles,
  Check,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    purpose: "Executive Stay",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VIP CONCIERGE &amp; BUTLER DESK</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900">
          Connect with the Concierge
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          For confidential delegation inquiries, private viewings, or customized corporate stay
          arrangements in Ikoyi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 p-8 lg:p-10 rounded-3xl glass-panel bg-white/95 border border-bronze-400/30 shadow-xl">
          <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-2">
            Confidential Inquiry Form
          </h3>
          <p className="text-xs text-charcoal-600 mb-6">
            All messages are encrypted and routed directly to our on-duty Head Butler.
          </p>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-500/30 text-emerald-700 mx-auto flex items-center justify-center shadow-md">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-bold text-charcoal-900">
                Message Dispatched Securely
              </h4>
              <p className="text-xs text-charcoal-600 max-w-sm mx-auto leading-relaxed">
                Thank you. Our Head Butler has received your transmission and will connect with you via
                your preferred channel within 15 minutes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-xl bg-sand-100 border border-bronze-400/30 text-xs font-mono text-bronze-700 font-semibold shadow-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-charcoal-700 font-semibold">FULL NAME</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-bronze-500 shadow-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-charcoal-700 font-semibold">EMAIL ADDRESS</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-bronze-500 shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-charcoal-700 font-semibold">PHONE / WHATSAPP</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone or WhatsApp number"
                    className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-bronze-500 shadow-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-charcoal-700 font-semibold">PURPOSE OF STAY</label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs text-charcoal-900 focus:outline-none focus:border-bronze-500 shadow-sm"
                  >
                    <option value="Diplomatic Mission">Diplomatic Mission</option>
                    <option value="Executive Board Stay">Executive Board Stay</option>
                    <option value="Private Leisure & Wellness">Private Leisure &amp; Wellness</option>
                    <option value="Relocation / Extended Stay">Relocation / Extended Stay</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-charcoal-700 font-semibold">SPECIAL REQUIREMENTS</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify preferences: VIP airport tarmac protocol, private chef dietary requirements, security detail..."
                  className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-bronze-500 resize-none shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-bronze-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-bronze-600 shadow-md shadow-bronze-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Direct Concierge Channels */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="p-8 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 space-y-6 shadow-xl">
            <h3 className="text-xl font-serif font-bold text-charcoal-900">
              Direct Communication Channels
            </h3>

            <div className="space-y-4 text-xs">
              <a
                href={BRAND_DETAILS.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-emerald-50 border border-emerald-500/30 hover:border-emerald-500 flex items-center justify-between group transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    WA
                  </div>
                  <div>
                    <span className="font-bold text-charcoal-900 block">WhatsApp Butler Desk</span>
                    <span className="text-[10px] text-emerald-800 font-mono font-semibold">
                      RESPONSE: UNDER 3 MINUTES
                    </span>
                  </div>
                </div>
                <span className="text-emerald-700 text-sm group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-1 shadow-sm">
                <span className="text-[10px] font-mono text-bronze-700 block font-semibold">DIRECT PHONE</span>
                <a
                  href={`tel:${BRAND_DETAILS.phone}`}
                  className="text-sm font-bold text-charcoal-900 hover:text-bronze-700"
                >
                  {BRAND_DETAILS.phone}
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-1 shadow-sm">
                <span className="text-[10px] font-mono text-bronze-700 block font-semibold">
                  CONFIDENTIAL EMAIL
                </span>
                <a
                  href={`mailto:${BRAND_DETAILS.email}`}
                  className="text-sm font-bold text-charcoal-900 hover:text-bronze-700"
                >
                  {BRAND_DETAILS.email}
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-1 shadow-sm">
                <span className="text-[10px] font-mono text-bronze-700 block font-semibold">RESIDENCE LOCATION</span>
                <p className="text-xs text-charcoal-800 font-medium">{BRAND_DETAILS.location}</p>
                <p className="text-[10px] text-charcoal-500">
                  Exact entrance gate coordinates transmitted post-verification.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-sand-50 border border-emerald-500/20 flex items-center gap-3 text-xs text-emerald-800 font-mono font-semibold shadow-sm">
            <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-600" />
            <span>ENCRYPTED DISPATCH · NDPR &amp; GDPR DIPLOMATIC COMPLIANT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
