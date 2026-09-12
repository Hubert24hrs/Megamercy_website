"use client";

import React, { useState } from "react";
import { MessageCircle, X, Sparkles, Send, ShieldCheck, ChevronRight } from "lucide-react";
import { BRAND_DETAILS } from "@/lib/data";

export default function WhatsAppConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      title: "Inquire About Availability",
      text: "Hello MagMercy Butler, I would like to check availability for an upcoming stay in Ikoyi.",
    },
    {
      title: "VIP Airport Tarmac Protocol",
      text: "Hello, I am arriving via Murtala Muhammed International Airport (LOS) and would like to arrange VIP tarmac protocol and armored transfer.",
    },
    {
      title: "Corporate / Diplomatic Long-Stay",
      text: "Greetings, I represent an executive delegation inquiring about a multi-week residence booking at MagMercy.",
    },
    {
      title: "Private Chef & Dining Consultation",
      text: "Hello, I would like to inquire about having a private chef service during our stay at MagMercy.",
    },
  ];

  const handleOpenWhatsApp = (customText?: string) => {
    const message = encodeURIComponent(
      customText ||
        "Hello MagMercy Concierge, I would like to inquire about reserving the Ikoyi penthouse."
    );
    window.open(`https://wa.me/2348025666687?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-[calc(1rem+env(safe-area-inset-right,0px))] sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Expanded Concierge Drawer */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-96 max-w-sm rounded-3xl glass-panel bg-white/98 border border-bronze-400/30 p-4 sm:p-5 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-bottom-5 duration-300 max-h-[calc(100vh-120px)] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-charcoal-900/10">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-bronze-500/10 border border-bronze-400/40 flex items-center justify-center text-bronze-600">
                <Sparkles className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-charcoal-900">
                  MAGMERCY VIP BUTLER
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>ONLINE · TYPICAL REPLY &lt; 3 MINS</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-charcoal-500 hover:text-charcoal-900 hover:bg-sand-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="py-4 space-y-3">
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Welcome. How may our private concierge team assist your travel plans to Ikoyi today?
            </p>

            <div className="space-y-2">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(p.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-sand-50 hover:bg-sand-100 border border-charcoal-900/10 hover:border-bronze-400/40 text-xs text-charcoal-800 transition-all flex items-center justify-between group shadow-sm"
                >
                  <span>{p.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-bronze-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <button
            onClick={() => handleOpenWhatsApp()}
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open WhatsApp Chat</span>
          </button>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-white/95 border border-bronze-400/40 hover:border-bronze-500 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <div className="w-7 h-7 rounded-full bg-bronze-500/15 text-bronze-700 flex items-center justify-center group-hover:scale-110 transition-transform">
          <MessageCircle className="w-4 h-4" />
        </div>
        <span className="text-xs font-mono font-semibold text-charcoal-900 tracking-wider hidden sm:inline">
          VIP CONCIERGE
        </span>
      </button>
    </div>
  );
}
