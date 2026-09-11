"use client";

import React, { useState } from "react";
import { MessageCircle, X, Sparkles, Send, ShieldCheck, ChevronRight } from "lucide-react";
import { BRAND_DETAILS } from "@/lib/data";

export default function WhatsAppConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      title: "Inquire About Availability",
      text: "Hello MegaMercy Butler, I would like to check availability for an upcoming stay in Ikoyi.",
    },
    {
      title: "VIP Airport Tarmac Protocol",
      text: "Hello, I am arriving via Murtala Muhammed International Airport (LOS) and would like to arrange VIP tarmac protocol and armored transfer.",
    },
    {
      title: "Corporate / Diplomatic Long-Stay",
      text: "Greetings, I represent an executive delegation inquiring about a multi-week residence booking at MegaMercy.",
    },
    {
      title: "Private Chef & Dining Consultation",
      text: "Hello, I would like to inquire about having a private chef service during our stay at MegaMercy.",
    },
  ];

  const handleOpenWhatsApp = (customText?: string) => {
    const message = encodeURIComponent(
      customText ||
        "Hello MegaMercy Concierge, I would like to inquire about reserving the Ikoyi penthouse."
    );
    window.open(`https://wa.me/2348140007890?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Concierge Drawer */}
      {isOpen && (
        <div className="mb-4 w-84 sm:w-96 rounded-3xl glass-panel border border-gold-500/30 p-5 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400">
                <Sparkles className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-obsidian-950 animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-pearl-100">
                  MEGAMERCY VIP BUTLER
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>ONLINE · TYPICAL REPLY &lt; 3 MINS</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-pearl-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="py-4 space-y-3">
            <p className="text-xs text-pearl-300 leading-relaxed">
              Welcome. How may our private concierge team assist your travel plans to Ikoyi today?
            </p>

            <div className="space-y-2">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(p.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-obsidian-900/80 hover:bg-obsidian-800 border border-white/5 hover:border-gold-500/30 text-xs text-pearl-200 transition-all flex items-center justify-between group"
                >
                  <span>{p.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <button
            onClick={() => handleOpenWhatsApp()}
            className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open WhatsApp Chat</span>
          </button>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-500/30 hover:border-gold-500 shadow-2xl hover:shadow-gold-500/20 transition-all duration-300"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <div className="w-7 h-7 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center group-hover:scale-110 transition-transform">
          <MessageCircle className="w-4 h-4" />
        </div>
        <span className="text-xs font-mono font-medium text-pearl-100 tracking-wider hidden sm:inline">
          VIP CONCIERGE
        </span>
      </button>
    </div>
  );
}
