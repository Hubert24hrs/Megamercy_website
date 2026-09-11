import React from "react";
import { ShieldCheck, FileText, Lock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Legal, House Rules & NDPR Privacy · MegaMercy Ikoyi",
  description:
    "Review our terms of stay, house rules, diplomatic confidentiality agreement, and Nigeria Data Protection Regulation (NDPR) policies.",
};

export default function LegalPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-subtle text-xs font-mono tracking-widest text-gold-400 uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>GOVERNANCE &amp; DISCRETION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-pearl-100">
          Terms &amp; House Protocols
        </h1>
        <p className="text-sm text-pearl-300 leading-relaxed">
          Clear standards engineered to preserve the serenity, physical fortress safety, and total
          privacy of all guests residing at MegaMercy Apartment.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-12 text-sm text-pearl-300 leading-relaxed">
        {/* Section 1: House Etiquette */}
        <div className="p-8 rounded-3xl glass-panel border border-white/5 space-y-4">
          <h2 className="text-2xl font-serif font-bold text-pearl-100 flex items-center gap-2">
            <span className="text-gold-400 font-mono text-base">01.</span> House Rules &amp;
            Etiquette
          </h2>
          <ul className="space-y-3 text-xs sm:text-sm text-pearl-400">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-pearl-100">No Unapproved Events or Parties:</strong> To
                preserve acoustic serenity and building security, loud parties and unauthorized
                gatherings are strictly prohibited.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-pearl-100">Visitor Clearance Protocol:</strong> All external
                visitors must be pre-registered with our concierge desk prior to estate gate entry.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-pearl-100">Designated Smoking Areas:</strong> Smoking is
                strictly restricted to outdoor cantilevered terrace zones. Indoor smoke sensors are
                calibrated to detect aerosol interference.
              </span>
            </li>
          </ul>
        </div>

        {/* Section 2: Cancellation & Deposit */}
        <div className="p-8 rounded-3xl glass-panel border border-white/5 space-y-4">
          <h2 className="text-2xl font-serif font-bold text-pearl-100 flex items-center gap-2">
            <span className="text-gold-400 font-mono text-base">02.</span> Reservation &amp;
            Cancellation Policy
          </h2>
          <p className="text-xs sm:text-sm text-pearl-400">
            Full refunds are granted for cancellations submitted at least 7 days prior to scheduled
            check-in time (14:00 WAT). For cancellations within 7 days, a 50% reservation credit is
            maintained for future rescheduling within 12 months.
          </p>
          <p className="text-xs sm:text-sm text-pearl-400">
            A refundable diplomatic security deposit of $300 (or equivalent in NGN/GBP/EUR) is held
            against incidental damages and released within 24 hours of successful post-stay inventory
            inspection.
          </p>
        </div>

        {/* Section 3: NDPR & GDPR Privacy */}
        <div className="p-8 rounded-3xl glass-panel border border-emerald-500/20 space-y-4">
          <h2 className="text-2xl font-serif font-bold text-pearl-100 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-base">03.</span> Nigeria Data
            Protection Regulation (NDPR) &amp; GDPR
          </h2>
          <p className="text-xs sm:text-sm text-pearl-400">
            MegaMercy adheres strictly to the Nigeria Data Protection Act (NDPA) and international
            GDPR benchmarks. We gather guest identity credentials solely for statutory compliance and
            temporary biometric key generation.
          </p>
          <p className="text-xs sm:text-sm text-pearl-400">
            Your personal information is encrypted at rest using AES-256 and is never shared,
            marketed, or made available to commercial third parties. All biometric records are wiped
            automatically upon completion of your stay.
          </p>
        </div>
      </div>
    </div>
  );
}
