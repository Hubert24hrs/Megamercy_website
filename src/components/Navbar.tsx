"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CurrencyCode } from "@/lib/types";
import { CURRENCY_CONFIG } from "@/lib/currency";
import { BRAND_DETAILS } from "@/lib/data";
import {
  Shield,
  Menu,
  X,
  Phone,
  Calendar,
  Globe,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function Navbar({
  currentCurrency = "NGN",
  onCurrencyChange,
}: {
  currentCurrency?: CurrencyCode;
  onCurrencyChange?: (c: CurrencyCode) => void;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [lagosTime, setLagosTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Update Lagos Time (WAT: UTC+1)
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setLagosTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { label: "The Apartment", href: "/apartment" },
    { label: "Amenities", href: "/amenities" },
    { label: "Security", href: "/security" },
    { label: "Location", href: "/location" },
    { label: "Reviews", href: "/reviews" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-alabaster-50/92 backdrop-blur-xl border-b border-bronze-400/20 py-3.5 shadow-sm shadow-charcoal-900/5"
          : "bg-gradient-to-b from-alabaster-50/95 via-alabaster-50/70 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-bronze-300 via-bronze-500 to-bronze-700 p-[1px] shadow-sm group-hover:shadow-md transition-all">
            <div className="w-full h-full bg-alabaster-50 rounded-[11px] flex items-center justify-center">
              <span className="font-serif text-lg font-black text-bronze-600 tracking-tighter">
                MM
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-widest text-charcoal-900 group-hover:text-bronze-600 transition-colors uppercase">
              MAGMERCY
            </span>
            <span className="text-[10px] font-mono tracking-widest text-bronze-600 uppercase -mt-1 font-semibold">
              IKOYI · LAGOS
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-charcoal-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? "text-bronze-600 font-bold"
                    : "hover:text-bronze-500"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-bronze-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Live Lagos Time, Currency Selector, Book CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Live Lagos Clock */}
          {lagosTime && (
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand-100 border border-charcoal-900/10 text-[11px] font-mono text-charcoal-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>IKOYI {lagosTime} WAT</span>
            </div>
          )}

          {/* Currency Toggle Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sand-100 border border-bronze-400/30 text-xs font-mono text-charcoal-800 hover:border-bronze-500 transition-all font-semibold"
            >
              <Globe className="w-3.5 h-3.5 text-bronze-600" />
              <span>{currentCurrency}</span>
              <ChevronDown className="w-3 h-3 text-charcoal-500" />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-white/95 backdrop-blur-xl border border-bronze-400/30 shadow-xl p-1 z-50">
              {(["NGN", "USD", "EUR", "GBP"] as CurrencyCode[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      if (onCurrencyChange) onCurrencyChange(c);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between transition-colors ${
                      currentCurrency === c
                        ? "bg-bronze-500 text-white font-bold"
                        : "text-charcoal-700 hover:bg-sand-100 hover:text-charcoal-900"
                    }`}
                  >
                    <span>{CURRENCY_CONFIG[c].label}</span>
                    <span>{CURRENCY_CONFIG[c].symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <Link
            href="/booking"
            className="px-5 py-2.5 rounded-xl bg-coastal-blue hover:bg-coastal-blue-hover text-white text-xs font-serif font-bold uppercase tracking-wider shadow-md shadow-coastal-blue/25 transition-all flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Check Availability</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-sand-100 border border-bronze-400/30 text-charcoal-800"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-alabaster-50/98 backdrop-blur-2xl border-b border-bronze-400/25 p-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider text-charcoal-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-charcoal-900/5 hover:text-bronze-600 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-bronze-500 font-mono text-xs">→</span>
              </Link>
            ))}
          </nav>

          {/* Currency selection on mobile */}
          <div className="mt-6 pt-6 border-t border-charcoal-900/10 flex items-center justify-between">
            <span className="text-xs font-mono text-charcoal-500 font-semibold">CURRENCY</span>
            <div className="flex items-center gap-2">
              {(["NGN", "USD", "EUR", "GBP"] as CurrencyCode[]).map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    if (onCurrencyChange) onCurrencyChange(c);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium ${
                    currentCurrency === c
                      ? "bg-bronze-500 text-white font-bold"
                      : "bg-sand-100 text-charcoal-700"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-bronze-500 text-white font-bold text-center text-xs uppercase tracking-wider shadow-md shadow-bronze-500/20"
            >
              Reserve Residence
            </Link>
            <a
              href={BRAND_DETAILS.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-sand-100 border border-bronze-400/30 text-bronze-700 font-medium text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp VIP Butler</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
