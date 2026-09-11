"use client";

import React from "react";
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
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-sand-100 border-t border-bronze-400/20 text-charcoal-700 pt-20 pb-12 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-bronze-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Concierge Broadcast Box */}
        <div className="mb-16 p-8 lg:p-10 rounded-3xl glass-panel bg-white/95 border border-bronze-400/30 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block mb-2 font-semibold">
              EXCLUSIVE CONCIERGE DISPATCH
            </span>
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-charcoal-900">
              Private Access for Global Executives &amp; Diplomats
            </h3>
            <p className="text-sm text-charcoal-600 mt-2 leading-relaxed">
              Receive confidential availability updates, priority seasonal reservation windows,
              and private yacht charter invitations in Ikoyi.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your confidential email"
              className="w-full sm:w-80 px-5 py-3.5 rounded-xl bg-sand-50 border border-charcoal-900/15 text-xs text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-bronze-500 shadow-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-bronze-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-bronze-600 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-md shadow-bronze-500/20"
            >
              <span>Join Registry</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* 5-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-charcoal-900/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-bronze-500 p-[1px] shadow-md shadow-bronze-500/20">
                <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                  <span className="font-serif text-base font-black text-bronze-600">MM</span>
                </div>
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-charcoal-900 uppercase">
                {BRAND_DETAILS.name}
              </span>
            </div>
            <p className="text-xs text-charcoal-600 leading-relaxed max-w-sm">
              An architectural masterpiece engineered for modern sovereignty. Ultra-premium,
              futuristic, and fortified short-let apartment in prime Ikoyi, Lagos.
            </p>
            <div className="pt-2 flex items-center gap-3 text-bronze-600">
              <a
                href={BRAND_DETAILS.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-charcoal-900/10 flex items-center justify-center hover:border-bronze-500 hover:text-bronze-700 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_DETAILS.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-charcoal-900/10 flex items-center justify-center hover:border-bronze-500 hover:text-bronze-700 transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_DETAILS.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-charcoal-900/10 flex items-center justify-center hover:border-bronze-500 hover:text-bronze-700 transition-all shadow-sm"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={BRAND_DETAILS.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-charcoal-900/10 flex items-center justify-center hover:border-bronze-500 hover:text-bronze-700 transition-all shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: The Residence */}
          <div>
            <h4 className="text-xs font-mono text-bronze-600 uppercase tracking-widest mb-4 font-semibold">
              THE RESIDENCE
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-600">
              <li>
                <Link href="/apartment" className="hover:text-bronze-600 transition-colors">
                  Grand Living Pavilion
                </Link>
              </li>
              <li>
                <Link href="/apartment" className="hover:text-bronze-600 transition-colors">
                  Sovereign Master Haven
                </Link>
              </li>
              <li>
                <Link href="/apartment" className="hover:text-bronze-600 transition-colors">
                  Diplomatic Suite
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-bronze-600 transition-colors">
                  Smart Penthouse IoT
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-bronze-600 transition-colors">
                  4K Visual Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Peace & Security */}
          <div>
            <h4 className="text-xs font-mono text-bronze-600 uppercase tracking-widest mb-4 font-semibold">
              ASSURANCE
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-600">
              <li>
                <Link href="/security" className="hover:text-bronze-600 transition-colors">
                  Fortress Security Protocol
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-bronze-600 transition-colors">
                  Biometric Access Control
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-bronze-600 transition-colors">
                  24/7 Redundant Power Grid
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-bronze-600 transition-colors">
                  Ikoyi Diplomatic Corridor
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-bronze-600 transition-colors">
                  House Etiquette &amp; Discretion
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: VIP Concierge Coordinates */}
          <div>
            <h4 className="text-xs font-mono text-bronze-600 uppercase tracking-widest mb-4 font-semibold">
              CONCIERGE DESK
            </h4>
            <ul className="space-y-3 text-xs text-charcoal-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bronze-600 shrink-0 mt-0.5" />
                <span>{BRAND_DETAILS.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-bronze-600 shrink-0" />
                <a href={`tel:${BRAND_DETAILS.phone}`} className="hover:text-bronze-600">
                  {BRAND_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-bronze-600 shrink-0" />
                <a href={`mailto:${BRAND_DETAILS.email}`} className="hover:text-bronze-600">
                  {BRAND_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Certifications Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>NDPR &amp; GDPR COMPLIANT</span>
            </div>
            <div className="flex items-center gap-1.5 text-bronze-700 font-medium">
              <Lock className="w-4 h-4" />
              <span>PCI-DSS ENCRYPTED CHECKOUT</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/legal" className="hover:text-charcoal-900 transition-colors">
              Privacy Notice
            </Link>
            <Link href="/legal" className="hover:text-charcoal-900 transition-colors">
              Terms of Stay
            </Link>
            <Link href="/legal" className="hover:text-charcoal-900 transition-colors">
              House Rules
            </Link>
            <span>© {new Date().getFullYear()} MegaMercy Apartment. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
