import React from "react";
import BookingWidget from "@/components/BookingWidget";
import { ShieldCheck, Calendar, CreditCard, Sparkles, Clock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Reserve Residence & Live Rates · MagMercy Apartment Ikoyi",
  description:
    "Check real-time availability, multi-currency rates (NGN, USD, GBP, EUR), and secure instant reservations for MagMercy Apartment in Ikoyi, Lagos.",
};

export default function BookingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <Calendar className="w-3.5 h-3.5" />
          <span>RESERVATION REGISTRY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900">
          Secure Your Enclave
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          Direct reservations guarantee preferential rates, complimentary airport tarmac
          concierge, and flexible diplomatic cancellation options.
        </p>
      </div>

      {/* Main Booking Engine */}
      <div className="max-w-4xl mx-auto">
        <BookingWidget />
      </div>

      {/* Reservation Terms & Guarantees */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
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
          <h4 className="text-sm font-bold text-charcoal-900">Multi-Rail Payments</h4>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            Direct settlement via Paystack or Flutterwave for Nigerian Naira (NGN), or Stripe for USD,
            GBP, and EUR cards. Zero card data stored on-site.
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
