"use client";

import React from "react";
import Link from "next/link";
import { BRAND_DETAILS } from "@/lib/data";
import {
  CalendarCheck,
  Building2,
  ShieldCheck,
  Instagram,
  Phone,
  Mail,
  Share2,
  Sparkles,
} from "lucide-react";

export default function FourColumnBlurbs() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Column 1: Book Direct! */}
        <div className="p-7 rounded-3xl bg-white border border-charcoal-900/15 shadow-lg flex flex-col justify-between hover:border-coastal-blue transition-all group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-coastal-blue/10 border border-coastal-blue/30 text-coastal-blue flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-black text-charcoal-900 mb-2">
              Book Direct!
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Reserve directly with the property for the best guaranteed rate, priority suite allocation,
              and flexible check-in. Inquire directly:{" "}
              <a
                href={`tel:${BRAND_DETAILS.phone}`}
                className="font-mono font-bold text-coastal-blue hover:underline"
              >
                {BRAND_DETAILS.phone}
              </a>
            </p>
          </div>
          <div className="pt-6">
            <Link
              href="/booking"
              className="w-full py-3 px-4 rounded-xl bg-coastal-blue hover:bg-coastal-blue-hover text-white font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-coastal-blue/20 flex items-center justify-center text-center"
            >
              Book Direct!
            </Link>
          </div>
        </div>

        {/* Column 2: Corporate & Diplomatic Retainers */}
        <div className="p-7 rounded-3xl bg-white border border-charcoal-900/15 shadow-lg flex flex-col justify-between hover:border-bronze-500 transition-all group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-bronze-500/10 border border-bronze-500/30 text-bronze-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-black text-charcoal-900 mb-2">
              Diplomatic Retainers
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Tailored agreements for visiting foreign embassies, financial audit teams, and multinational
              executives with monthly billing and verified NDPR non-disclosure.
            </p>
          </div>
          <div className="pt-6">
            <Link
              href="/contact?type=corporate"
              className="w-full py-3 px-4 rounded-xl bg-sand-100 hover:bg-sand-200 border border-charcoal-900/15 text-charcoal-900 font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center text-center shadow-sm"
            >
              Corporate Inquiries
            </Link>
          </div>
        </div>

        {/* Column 3: Butler & Escort Services */}
        <div className="p-7 rounded-3xl bg-white border border-charcoal-900/15 shadow-lg flex flex-col justify-between hover:border-emerald-600 transition-all group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 border border-emerald-600/30 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-black text-charcoal-900 mb-2">
              Private Concierge
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Arrange private chef dinners on the waterfront deck, armored airport tarmac transit via the
              Bourdillon corridor, or a sunset boat cruise along Five Cowries Creek.
            </p>
          </div>
          <div className="pt-6">
            <a
              href={BRAND_DETAILS.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-coastal-navy hover:bg-charcoal-950 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center text-center shadow-md"
            >
              Butler WhatsApp
            </a>
          </div>
        </div>

        {/* Column 4: #MegaMercyIkoyi Living */}
        <div className="p-7 rounded-3xl bg-white border border-charcoal-900/15 shadow-lg flex flex-col justify-between hover:border-coastal-blue transition-all group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-coastal-teal/15 border border-coastal-teal/40 text-coastal-blue flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-black text-charcoal-900 mb-2">
              #MegaMercyIkoyi
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Capture your morning espresso overlooking the lagoon or an evening on the terrace. Follow
              our verified residency gallery and tag #MegaMercyIkoyi.
            </p>
          </div>
          <div className="pt-6">
            <Link
              href="/gallery"
              className="w-full py-3 px-4 rounded-xl bg-coastal-blue hover:bg-coastal-blue-hover text-white font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-coastal-blue/20 flex items-center justify-center text-center"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
