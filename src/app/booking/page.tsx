import React from "react";
import BookingWidget from "@/components/BookingWidget";
import {
  ShieldCheck,
  Calendar,
  CreditCard,
  Sparkles,
  Clock,
  CheckCircle2,
  Tag,
  KeyRound,
  FileText,
  Building,
} from "lucide-react";

export const metadata = {
  title: "Reserve Residence & Live Rates · MagMercy Apartment Ikoyi",
  description:
    "Check real-time availability, multi-currency rates (NGN, USD, GBP, EUR), Paystack checkout, and secure instant reservations for MagMercy Apartment in Ikoyi, Lagos.",
};

export default function BookingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <Calendar className="w-3.5 h-3.5" />
          <span>RESERVATION REGISTRY &amp; LIVE AVAILABILITY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900">
          Secure Your Enclave
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          Direct reservations guarantee preferential rates, Paystack card/wire settlement,
          complimentary airport tarmac escort, and flexible diplomatic cancellation options.
        </p>
      </div>

      {/* Main Booking Engine */}
      <div className="max-w-4xl mx-auto">
        <BookingWidget />
      </div>

      {/* Official Rates & Sovereign Policies */}
      <div className="max-w-4xl mx-auto p-8 rounded-3xl glass-panel bg-white/95 border border-bronze-400/30 shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-charcoal-900/10">
          <div>
            <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-bold">
              OFFICIAL IKHOYI RATE CARD &amp; STAY POLICIES
            </span>
            <h3 className="text-2xl font-serif font-bold text-charcoal-900 mt-1">
              Transparent Luxury Standards
            </h3>
          </div>
          <span className="text-xs font-mono text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full font-bold">
            BEST DIRECT RATE GUARANTEE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-1">
            <span className="text-[10px] font-mono text-charcoal-500 uppercase block">Base Nightly Rate</span>
            <span className="text-lg font-serif font-black text-charcoal-900 block">₦350,000</span>
            <span className="text-[11px] text-charcoal-600 block">≈ $220 USD / £175 GBP</span>
          </div>

          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-1">
            <span className="text-[10px] font-mono text-charcoal-500 uppercase block">Minimum Stay</span>
            <span className="text-lg font-serif font-black text-charcoal-900 block">2 Nights</span>
            <span className="text-[11px] text-charcoal-600 block">Extended executive stays</span>
          </div>

          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-1">
            <span className="text-[10px] font-mono text-charcoal-500 uppercase block">Security Caution Bond</span>
            <span className="text-lg font-serif font-black text-charcoal-900 block">₦100,000</span>
            <span className="text-[11px] text-emerald-700 block">100% Refundable on checkout</span>
          </div>

          <div className="p-4 rounded-2xl bg-sand-50 border border-charcoal-900/10 space-y-1">
            <span className="text-[10px] font-mono text-charcoal-500 uppercase block">Long-Stay Privilege</span>
            <span className="text-lg font-serif font-black text-emerald-800 block">10% – 20% Off</span>
            <span className="text-[11px] text-charcoal-600 block">Weekly &amp; monthly stays</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-alabaster-50 border border-charcoal-900/10">
            <Clock className="w-4 h-4 text-bronze-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-charcoal-900 block">Check-in / Check-out Protocol</span>
              <p className="text-charcoal-600 mt-0.5 leading-relaxed">
                Check-in begins at <strong>2:00 PM (14:00 WAT)</strong>. Check-out is by <strong>11:00 AM (11:00 WAT)</strong>. Early check-in or late checkout is accommodated upon concierge notification.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-alabaster-50 border border-charcoal-900/10">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-charcoal-900 block">24/7 Security &amp; Power Assurance</span>
              <p className="text-charcoal-600 mt-0.5 leading-relaxed">
                Located in gated Dolphin Estate with dual industrial generators and solar lithium backups. 100% uninterrupted power and high-speed fiber guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Terms & Guarantees */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="p-6 rounded-2xl glass-panel bg-white/95 border border-charcoal-900/10 space-y-2 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-500/30 text-emerald-700 flex items-center justify-center mb-3 shadow-sm">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-bold text-charcoal-900">Diplomatic Cancellation</h4>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            Full 100% refund up to 7 days before scheduled check-in. Flexible date modifications for
            diplomatic delegations and corporate schedules.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel bg-white/95 border border-charcoal-900/10 space-y-2 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-sand-100 border border-bronze-400/30 text-bronze-700 flex items-center justify-center mb-3 shadow-sm">
            <CreditCard className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-bold text-charcoal-900">Paystack &amp; Multi-Rail</h4>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            Direct card settlement, instant bank wire, USSD, and Apple Pay via Paystack. Automated receipt issuance and instant calendar date locking.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel bg-white/95 border border-charcoal-900/10 space-y-2 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-400/30 text-blue-700 flex items-center justify-center mb-3 shadow-sm">
            <Clock className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-bold text-charcoal-900">Touchless Check-In</h4>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            Encrypted arrival code dispatched directly to your private mobile phone 3 hours before
            touchdown. Zero queueing.
          </p>
        </div>
      </div>
    </div>
  );
}
