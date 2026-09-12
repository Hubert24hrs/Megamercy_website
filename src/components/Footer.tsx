"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BRAND_DETAILS } from "@/lib/data";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send,
  Lock,
  Sun,
  CloudSun,
  Compass,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const [subscribeName, setSubscribeName] = useState("");
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribeEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-coastal-navy text-pearl-300 pt-16 pb-12 overflow-hidden border-t border-bronze-400/20">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-coastal-blue/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Section: Dual Widgets (Location & Weather) + Newsletter Dispatch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Widget 1: Location & Coordinates */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-bronze-300 uppercase tracking-widest font-bold">
                LOCATION &amp; HARBOR
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <h4 className="text-xl font-serif font-bold text-white">
              Bourdillon Road, Ikoyi
            </h4>
            <p className="text-xs text-pearl-400 leading-relaxed">
              Prime waterfront enclave overlooking Five Cowries Creek. 8 minutes to Victoria Island
              financial corridor, 30 minutes to Murtala Muhammed Airport.
            </p>
            <div className="pt-2 text-xs font-mono text-coastal-teal flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>COORDINATES: 6.4549° N, 3.4246° E</span>
            </div>
          </div>

          {/* Widget 2: Live Ikoyi Weather */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-coastal-teal uppercase tracking-widest font-bold">
                LIVE IKOYI CLIMATE
              </span>
              <CloudSun className="w-4 h-4 text-amber-400" />
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-serif font-black text-white">28°C</span>
              <span className="text-sm font-mono text-pearl-400">/ 82°F Coastal</span>
            </div>
            <p className="text-xs text-pearl-400 leading-relaxed">
              Tropical marine breeze from Five Cowries Creek. Gentle humid breeze (14 km/h SW). Sunset
              over lagoon at 18:48 WAT.
            </p>
            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-pearl-400 border-t border-white/10">
              <span>WATERFRONT POOL: 29°C HEATED</span>
              <span className="text-emerald-400">OPTIMAL</span>
            </div>
          </div>

          {/* Widget 3: Newsletter / Concierge Registry */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-coastal-blue/20 via-white/5 to-white/10 border border-coastal-blue/30 backdrop-blur-md space-y-4">
            <span className="text-[10px] font-mono text-coastal-blue uppercase tracking-widest font-bold block">
              SUBSCRIBE TO DISPATCH
            </span>
            <h4 className="text-xl font-serif font-bold text-white">
              Executive Newsletter
            </h4>
            <p className="text-xs text-pearl-400 leading-relaxed">
              Join our private dispatch list to receive priority calendar availability, seasonal rate
              privileges, and yacht charters.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-900/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono text-center">
                ✓ You have successfully subscribed to the dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={subscribeName}
                  onChange={(e) => setSubscribeName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-pearl-400 focus:outline-none focus:border-coastal-blue"
                  required
                />
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Official Email"
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-pearl-400 focus:outline-none focus:border-coastal-blue"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-coastal-blue hover:bg-coastal-blue-hover text-white font-serif font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md shadow-coastal-blue/20"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bronze-300 via-bronze-500 to-bronze-700 p-[1px] shadow-md">
                <div className="w-full h-full bg-coastal-navy rounded-[11px] flex items-center justify-center">
                  <span className="font-serif text-lg font-black text-bronze-300">MM</span>
                </div>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-white uppercase block">
                  {BRAND_DETAILS.name}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-coastal-teal uppercase -mt-0.5 block">
                  IKOYI WATERFRONT RESIDENCE
                </span>
              </div>
            </div>
            <p className="text-xs text-pearl-400 leading-relaxed max-w-sm">
              An architectural sanctuary engineered for modern executives and diplomatic delegations.
              Ultra-secure, serene, and fortified short-let apartment in prime Ikoyi, Lagos.
            </p>
            <div className="pt-2 flex items-center gap-3 text-pearl-300">
              <a
                href={BRAND_DETAILS.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-coastal-blue hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_DETAILS.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-coastal-blue hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_DETAILS.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-coastal-blue hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={BRAND_DETAILS.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-coastal-blue hover:text-white transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links: Residences */}
          <div>
            <h4 className="text-xs font-mono text-bronze-300 uppercase tracking-widest mb-4 font-bold">
              VACATION RENTALS
            </h4>
            <ul className="space-y-2.5 text-xs text-pearl-400">
              <li>
                <Link href="/apartment" className="hover:text-white transition-colors">
                  Sovereign Penthouse 612
                </Link>
              </li>
              <li>
                <Link href="/apartment" className="hover:text-white transition-colors">
                  Diplomatic Double Suite
                </Link>
              </li>
              <li>
                <Link href="/apartment" className="hover:text-white transition-colors">
                  Lagoon Front Suites
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-white transition-colors">
                  Pool &amp; Waterfront Deck
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  4K Visual Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Assurance */}
          <div>
            <h4 className="text-xs font-mono text-bronze-300 uppercase tracking-widest mb-4 font-bold">
              ASSURANCE &amp; LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-pearl-400">
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Fortress Security Protocol
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Keyless Biometric Access
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-white transition-colors">
                  Ikoyi Diplomatic District
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Verified Guest Portal
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-white transition-colors">
                  House Etiquette &amp; NDA
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge Coordinates */}
          <div>
            <h4 className="text-xs font-mono text-bronze-300 uppercase tracking-widest mb-4 font-bold">
              CONCIERGE DESK
            </h4>
            <ul className="space-y-3 text-xs text-pearl-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-coastal-blue shrink-0 mt-0.5" />
                <span>{BRAND_DETAILS.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-coastal-blue shrink-0" />
                <a href={`tel:${BRAND_DETAILS.phone}`} className="hover:text-white">
                  {BRAND_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-coastal-blue shrink-0" />
                <a href={`mailto:${BRAND_DETAILS.email}`} className="hover:text-white">
                  {BRAND_DETAILS.email}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-coastal-teal hover:underline font-bold"
                >
                  <span>Homeowners &amp; VIP Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-pearl-500">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>NDPR &amp; GDPR VERIFIED</span>
            </div>
            <div className="flex items-center gap-1.5 text-bronze-300 font-medium">
              <Lock className="w-4 h-4" />
              <span>PCI-DSS ENCRYPTED PAYMENT</span>
            </div>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/legal" className="hover:text-white transition-colors">
              Privacy Notice
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors">
              Terms of Stay
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors">
              House Rules
            </Link>
            <span>© {new Date().getFullYear()} MagMercy Apartment. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
