"use client";

import React from "react";
import Link from "next/link";
import {
  Waves,
  Sparkles,
  ShieldCheck,
  Zap,
  Coffee,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Wifi,
} from "lucide-react";

export default function AlternatingFeatureSections() {
  return (
    <div className="w-full space-y-20 lg:space-y-28">
      {/* 1. RELAX & ENJOY (Image Left, Text Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Coastal Waterfront Pool Visual */}
        <div className="relative group">
          <div className="rounded-3xl overflow-hidden border border-charcoal-900/15 shadow-2xl aspect-[4/3] bg-sand-100">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
              alt="MegaMercy Heated Pool and Waterfront Deck in Ikoyi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          {/* Floating Glass Badge */}
          <div className="hidden sm:block absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-charcoal-900/15 shadow-xl max-w-xs">
            <span className="text-[10px] font-mono text-coastal-blue uppercase font-bold tracking-widest block">
              FIVE COWRIES WATERFRONT
            </span>
            <p className="text-xs font-serif font-bold text-charcoal-900 mt-1">
              Heated Infinity Pool, Jacuzzi &amp; Private Boat Jetty
            </p>
          </div>
        </div>

        {/* Right Column: Editorial Copy */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 border border-charcoal-900/15 text-[11px] font-mono tracking-widest text-coastal-blue uppercase font-bold">
            <Waves className="w-3.5 h-3.5" />
            <span>WATERFRONT RESORT LIVING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-900 leading-[1.15]">
            Relax &amp; Unwind!
          </h2>

          <p className="text-base sm:text-lg font-serif italic text-charcoal-700">
            Step directly onto the water's edge in prime Ikoyi, Lagos.
          </p>

          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Unwind in total tranquility at our spacious heated infinity pool and jacuzzi, surrounded by
            lush tropical palm greenery. Step onto our private waterfront teak deck, where you can watch
            the gentle flow of Five Cowries Creek or embark directly from our private jetty for a sunset
            lagoon cruise.
          </p>

          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Our on-site acoustic Conference Room and Executive Event Suite provide the ideal setting for
            diplomatic briefings and board sessions. You are moments from Ikoyi's premier dining on
            Alexander Avenue and only 30 minutes from Murtala Muhammed International Airport.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-coastal-blue shrink-0" />
              <span>Heated Pool &amp; Jacuzzi</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-coastal-blue shrink-0" />
              <span>Private Waterway Jetty</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-coastal-blue shrink-0" />
              <span>Acoustic Conference Hall</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-coastal-blue shrink-0" />
              <span>100% Uninterrupted Power</span>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              href="/amenities"
              className="px-6 py-3.5 rounded-2xl bg-coastal-blue hover:bg-coastal-blue-hover text-white font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-coastal-blue/25 flex items-center gap-2"
            >
              <span>Explore Amenities &amp; Grounds</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Wave Decorative Divider */}
      <div className="coastal-wave-divider opacity-60" />

      {/* 2. STAY WITH US (Text Left, Image Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Editorial Copy */}
        <div className="space-y-5 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 border border-charcoal-900/15 text-[11px] font-mono tracking-widest text-bronze-600 uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURATED EXECUTIVE RESIDENCES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-charcoal-900 leading-[1.15]">
            Stay With Us!
          </h2>

          <p className="text-base sm:text-lg font-serif italic text-charcoal-700">
            Fully appointed luxury suites with private balconies and culinary kitchens.
          </p>

          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Stay in one of MegaMercy's fully furnished residences featuring custom Italian millwork,
            complete Miele chef kitchens, expansive dining and living areas, and expansive private
            teak balconies offering panoramic water vistas.
          </p>

          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Choose from our 2-Bedroom Executive Suites or our 4-Bedroom Sovereign Penthouse Double
            Suite (sleeps up to 8). Enjoy all the comforts of a five-star international residence
            including redundant 1Gbps fiber internet, multiroom Sonos sound, and 24/7 on-call butler
            detail.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Redundant 1Gbps WiFi</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full Chef Kitchens</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Private Teak Balconies</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Dedicated Butler Support</span>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              href="/booking"
              className="px-6 py-3.5 rounded-2xl bg-bronze-500 hover:bg-bronze-600 text-white font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-bronze-500/25 flex items-center gap-2"
            >
              <span>View Suites &amp; Live Rates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Interior Penthouse Living Visual */}
        <div className="relative group order-1 lg:order-2">
          <div className="rounded-3xl overflow-hidden border border-charcoal-900/15 shadow-2xl aspect-[4/3] bg-sand-100">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="MegaMercy Luxury Living Room and Private Balcony"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          {/* Floating Glass Badge */}
          <div className="hidden sm:block absolute -bottom-6 -left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-charcoal-900/15 shadow-xl max-w-xs">
            <span className="text-[10px] font-mono text-bronze-600 uppercase font-bold tracking-widest block">
              PENTHOUSE LIVING SUITE
            </span>
            <p className="text-xs font-serif font-bold text-charcoal-900 mt-1">
              Double Height Acoustic Glass &amp; Poliform Furnishings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
