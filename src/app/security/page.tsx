import React from "react";
import SecurityDashboard from "@/components/SecurityDashboard";
import { SECURITY_FEATURES } from "@/lib/data";
import {
  ShieldCheck,
  Lock,
  Eye,
  Key,
  Fingerprint,
  Radio,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Diplomatic Security & Privacy · MagMercy Apartment Ikoyi",
  description:
    "Comprehensive physical and digital security architecture at MagMercy Apartment. Biometric locks, 24/7 armed perimeter patrol, and NDPR/GDPR guest confidentiality.",
};

export default function SecurityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/30 text-xs font-mono tracking-widest text-emerald-800 uppercase font-semibold shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>DIPLOMATIC DEFENSE &amp; DATA PRIVACY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900">
          Fortress of Serenity
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          In an interconnected world, your physical safety and digital discretion are inseparable.
          MagMercy operates with military-grade rigor, allowing you to conduct diplomacy and
          business with total peace of mind.
        </p>
      </div>

      {/* Interactive HUD Dashboard */}
      <section>
        <SecurityDashboard />
      </section>

      {/* Layered Security Architecture Breakdown */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-semibold">
            DEFENSE IN DEPTH
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            Four Layers of Invisible Protection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECURITY_FEATURES.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl glass-panel bg-white/95 border border-charcoal-900/10 hover:border-emerald-500/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-emerald-800 uppercase tracking-widest font-semibold">
                    {item.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-500/30 text-[10px] font-mono text-emerald-800 font-semibold shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-charcoal-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal-900/10 flex items-center justify-between text-xs font-mono text-charcoal-600">
                <span>SYSTEM INTEGRITY</span>
                <span className="text-emerald-700 font-bold">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diplomatic Privacy & NDPR Policy Statement */}
      <section className="p-8 lg:p-12 rounded-3xl bg-sand-50 border border-charcoal-900/10 space-y-6 shadow-md">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-bronze-600" />
          <h3 className="text-2xl font-serif font-bold text-charcoal-900">
            Diplomatic Discretion &amp; NDPR / GDPR Protocols
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-charcoal-600 leading-relaxed">
          <div className="p-5 rounded-2xl bg-white border border-charcoal-900/10 space-y-2 shadow-sm">
            <h4 className="font-bold text-charcoal-900 font-mono text-[11px] uppercase">
              1. Non-Disclosure Commitment
            </h4>
            <p className="text-charcoal-600">
              All on-duty hospitality staff, butlers, and drivers are bound by strict non-disclosure
              agreements. We never share guest lists or itinerary details with third parties.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-charcoal-900/10 space-y-2 shadow-sm">
            <h4 className="font-bold text-charcoal-900 font-mono text-[11px] uppercase">
              2. Ephemeral Access Credentials
            </h4>
            <p className="text-charcoal-600">
              Biometric templates and digital PIN numbers are active strictly for the duration of
              your stay. Cryptographic keys are purged automatically within 15 minutes of checkout.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-charcoal-900/10 space-y-2 shadow-sm">
            <h4 className="font-bold text-charcoal-900 font-mono text-[11px] uppercase">
              3. Zero Internal Surveillance
            </h4>
            <p className="text-charcoal-600">
              No cameras, microphones, or recording devices are installed anywhere within the
              private quarters of the apartment. Exterior surveillance is confined to perimeters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
