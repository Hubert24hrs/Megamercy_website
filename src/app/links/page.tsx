import React from "react";
import Link from "next/link";
import {
  Calendar,
  MessageCircle,
  Video,
  MapPin,
  Instagram,
  Phone,
  ShieldCheck,
  Zap,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Lock,
} from "lucide-react";
import { BRAND_DETAILS } from "@/lib/data";

export const metadata = {
  title: "Official Links & VIP Concierge · MagMercy Apartment Ikoyi",
  description:
    "Direct reservation portal, 4K video tours, WhatsApp butler desk, and navigation directions for MagMercy Apartment in Dolphin Estate, Ikoyi.",
};

export default function LinksPage() {
  const LINKS = [
    {
      id: "reserve",
      title: "Reserve Residence & Live Rates",
      subtitle: "From ₦350,000/night · Paystack card/wire & instant dates lock",
      icon: Calendar,
      href: "/booking",
      isPrimary: true,
      badge: "Best Rate Direct",
    },
    {
      id: "whatsapp",
      title: "WhatsApp Concierge (24/7 Butler Desk)",
      subtitle: "Instant booking inquiries, private chef, and arrival coordination",
      icon: MessageCircle,
      href: "https://wa.me/2348025666687?text=Hello%20MagMercy%20Concierge%2C%20I%20am%20inquiring%20via%20your%20link-in-bio%20about%20reserving%20the%20penthouse.",
      isPrimary: false,
      badge: "Instant Reply",
      external: true,
    },
    {
      id: "cinema",
      title: "Watch 4K On-Site Video Walkthrough",
      subtitle: "Living pavilion, master suite, en-suite bath & chef's kitchen",
      icon: Video,
      href: "/gallery",
      isPrimary: false,
      badge: "Authentic Footage",
    },
    {
      id: "apartment",
      title: "Explore The Penthouse & Suite Specs",
      subtitle: "3,400 sq.ft floor plan, acoustic cocoons, and amenities",
      icon: Sparkles,
      href: "/apartment",
      isPrimary: false,
    },
    {
      id: "directions",
      title: "Google Maps Navigation Directions",
      subtitle: "89 Lafiaji Street, Dolphin Estate, Ikoyi, Lagos",
      icon: MapPin,
      href: "https://maps.google.com/?q=89+Lafiaji+Street+Dolphin+Estate+Ikoyi+Lagos",
      isPrimary: false,
      external: true,
    },
    {
      id: "tiktok",
      title: "Follow Us on TikTok",
      subtitle: "Behind-the-scenes reels, sunset views, and guest walkthroughs",
      icon: ExternalLink,
      href: BRAND_DETAILS.socials.tiktok,
      isPrimary: false,
      external: true,
    },
    {
      id: "instagram",
      title: "Follow Us on Instagram",
      subtitle: "@magmercy_apartment · Ikoyi luxury lifestyle dispatch",
      icon: Instagram,
      href: BRAND_DETAILS.socials.instagram,
      isPrimary: false,
      external: true,
    },
    {
      id: "call",
      title: "Direct Voice Call to Head Butler",
      subtitle: "+234 802 566 6687 · VIP Tarmac & Executive Desk",
      icon: Phone,
      href: "tel:+2348025666687",
      isPrimary: false,
    },
  ];

  return (
    <div className="min-h-screen -mt-24 pt-28 pb-16 px-4 sm:px-6 bg-charcoal-950 text-white relative overflow-hidden flex flex-col items-center justify-start">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-bronze-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-coastal-blue/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md mx-auto space-y-6 relative z-10">
        {/* Profile Card Header */}
        <div className="text-center space-y-3">
          <div className="relative inline-block">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-bronze-300 via-bronze-500 to-bronze-700 p-[2px] shadow-xl shadow-bronze-500/20 mx-auto">
              <div className="w-full h-full bg-charcoal-900 rounded-[22px] flex items-center justify-center">
                <span className="font-serif text-2xl font-black text-bronze-400 tracking-tighter">
                  MM
                </span>
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-charcoal-950 flex items-center justify-center text-[10px]">
              ✓
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-serif font-black tracking-wider uppercase">
              MagMercy Apartment
            </h1>
            <p className="text-xs font-mono text-bronze-400 tracking-widest uppercase mt-0.5 font-semibold">
              Ikoyi · Lagos · Nigeria
            </p>
          </div>

          <p className="text-xs text-charcoal-300 leading-relaxed max-w-xs mx-auto">
            Ultra-premium short-let penthouse in gated Dolphin Estate. 100% uninterrupted generator + solar power, biometric access, and 24/7 private butler.
          </p>

          {/* Quick Highlight Badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1 text-[10px] font-mono">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold">
              <Zap className="w-3 h-3 text-emerald-400" />
              100% Guaranteed Power
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sand-900/60 border border-bronze-400/40 text-bronze-300 font-semibold">
              <ShieldCheck className="w-3 h-3 text-bronze-400" />
              24/7 Armed Security
            </span>
          </div>
        </div>

        {/* Links List */}
        <div className="space-y-3 pt-2">
          {LINKS.map((link) => {
            const Icon = link.icon;
            const content = (
              <div
                className={`group p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 relative overflow-hidden ${
                  link.isPrimary
                    ? "bg-gradient-to-r from-bronze-600 via-bronze-500 to-bronze-600 border-bronze-300/40 text-white shadow-lg shadow-bronze-500/25 hover:scale-[1.02]"
                    : "bg-charcoal-900/80 hover:bg-charcoal-850 border-white/10 hover:border-bronze-400/50 text-white hover:scale-[1.01] shadow-md"
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      link.isPrimary
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-bronze-400 group-hover:bg-bronze-500/20 group-hover:text-bronze-300 transition-colors"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-serif font-bold truncate">
                        {link.title}
                      </h3>
                      {link.badge && (
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shrink-0 ${
                            link.isPrimary
                              ? "bg-black/25 text-white"
                              : "bg-bronze-500/20 text-bronze-300 border border-bronze-400/30"
                          }`}
                        >
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-[11px] truncate mt-0.5 ${
                        link.isPrimary ? "text-white/85" : "text-charcoal-400"
                      }`}
                    >
                      {link.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                    link.isPrimary ? "text-white" : "text-charcoal-500 group-hover:text-bronze-400"
                  }`}
                />
              </div>
            );

            if (link.external) {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={link.id} href={link.href} className="block">
                {content}
              </Link>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="text-center pt-4 space-y-2 border-t border-white/10 text-charcoal-400 text-xs">
          <p className="font-mono text-[11px] text-bronze-400 font-semibold">
            89 Lafiaji Street, Dolphin Estate, Ikoyi, Lagos
          </p>
          <p className="text-[10px] text-charcoal-500">
            © 2026 MagMercy Apartment. Official Guest &amp; Media Dispatch.
          </p>
        </div>
      </div>
    </div>
  );
}
