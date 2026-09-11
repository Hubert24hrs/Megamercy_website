import React from "react";
import BookingWidget from "@/components/BookingWidget";
import { ShieldCheck, Calendar, CreditCard, Sparkles, Clock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Reserve Residence & Live Rates · MegaMercy Apartment Ikoyi",
  description:
    "Check real-time availability, multi-currency rates (NGN, USD, GBP, EUR), and secure instant reservations for MegaMercy Apartment in Ikoyi, Lagos.",
};

export default function BookingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-subtle text-xs font-mono tracking-widest text-gold-400 uppercase">
          <Calendar className="w-3.5 h-3.5" />
          <span>RESERVATION REGISTRY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-pearl-100">
          Secure Your Enclave
        </h1>
        <p className="text-sm sm:text-base text-pearl-300 leading-relaxed">
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
        <div className="p-6 rounded-2xl glass-panel border border-white/5 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-bold text-pearl-100">Diplomatic Cancellation</h4>
          <p className="text-xs text-pearl-400 leading-relaxed">
            Full 100% refund up to 7 days before scheduled check-in. Seamless date adjustments for
            unforeseen ministerial schedules.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-white/5 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center mb-3">
            <CreditCard className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-bold text-pearl-100">Multi-Rail Payments</h4>
          <p className="text-xs text-pearl-400 leading-relaxed">
            Pay seamlessly with Paystack or Flutterwave for Nigerian Naira (NGN), or Stripe for USD,
            GBP, and EUR credit cards.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-white/5 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
            <Clock className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-bold text-pearl-100">Touchless Check-In</h4>
          <p className="text-xs text-pearl-400 leading-relaxed">
            Encrypted arrival code dispatched directly to your private mobile phone 3 hours before
            touchdown. Zero queueing.
          </p>
        </div>
      </div>
    </div>
  );
}
