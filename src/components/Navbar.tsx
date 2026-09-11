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
  currentCurrency = "USD",
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
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian-950/85 backdrop-blur-xl border-b border-gold-500/15 py-3.5 shadow-2xl"
          : "bg-gradient-to-b from-obsidian-950/90 via-obsidian-950/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 p-[1px] shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-all">
            <div className="w-full h-full bg-obsidian-950 rounded-[11px] flex items-center justify-center">
              <span className="font-serif text-lg font-black gold-gradient-text tracking-tighter">
                MM
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-widest text-pearl-100 group-hover:text-gold-300 transition-colors uppercase">
              MEGAMERCY
            </span>
            <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase -mt-1">
              IKOYI · LAGOS
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wider uppercase text-pearl-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? "text-gold-400 font-semibold"
                    : "hover:text-gold-300"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Live Lagos Time, Currency Selector, Book CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Live Lagos Clock */}
          {lagosTime && (
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-obsidian-900 border border-white/10 text-[11px] font-mono text-pearl-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>IKOYI {lagosTime} WAT</span>
            </div>
          )}

          {/* Currency Toggle Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-900 border border-gold-500/20 text-xs font-mono text-gold-300 hover:border-gold-500/40 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentCurrency}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-obsidian-900/95 backdrop-blur-xl border border-gold-500/30 shadow-2xl p-1 z-50">
                {(["USD", "NGN", "GBP", "EUR"] as CurrencyCode[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      if (onCurrencyChange) onCurrencyChange(c);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between transition-colors ${
                      currentCurrency === c
                        ? "bg-gold-500 text-obsidian-950 font-bold"
                        : "text-pearl-300 hover:bg-obsidian-800 hover:text-white"
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
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-obsidian-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg shadow-gold-500/25 transition-all flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-obsidian-900 border border-gold-500/20 text-gold-400"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-obsidian-950/95 backdrop-blur-2xl border-b border-gold-500/20 p-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider text-pearl-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 hover:text-gold-400 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-gold-500 font-mono text-xs">→</span>
              </Link>
            ))}
          </nav>

          {/* Currency selection on mobile */}
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-pearl-400">CURRENCY</span>
            <div className="flex items-center gap-2">
              {(["USD", "NGN", "GBP", "EUR"] as CurrencyCode[]).map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    if (onCurrencyChange) onCurrencyChange(c);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono ${
                    currentCurrency === c
                      ? "bg-gold-500 text-obsidian-950 font-bold"
                      : "bg-obsidian-900 text-pearl-300"
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
              className="w-full py-3 rounded-xl bg-gold-500 text-obsidian-950 font-bold text-center text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20"
            >
              Reserve Residence
            </Link>
            <a
              href={BRAND_DETAILS.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-obsidian-900 border border-gold-500/30 text-gold-400 font-medium text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2"
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
