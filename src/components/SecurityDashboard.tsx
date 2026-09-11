"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Lock,
  Eye,
  Fingerprint,
  Radio,
  Server,
  Key,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function SecurityDashboard() {
  const [biometricScanning, setBiometricScanning] = useState(false);
  const [biometricUnlocked, setBiometricUnlocked] = useState(false);

  const handleScan = () => {
    setBiometricScanning(true);
    setTimeout(() => {
      setBiometricScanning(false);
      setBiometricUnlocked(true);
      setTimeout(() => {
        setBiometricUnlocked(false);
      }, 4000);
    }, 1500);
  };

  return (
    <div className="w-full rounded-3xl glass-panel p-6 lg:p-8 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header HUD Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>DEFENSE SYSTEM: ACTIVE &amp; SECURE</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-pearl-100">
              Fortress Command &amp; Power Telemetry
            </h3>
          </div>
        </div>

        <div className="px-4 py-1.5 rounded-full bg-obsidian-900 border border-emerald-500/30 text-xs font-mono text-emerald-300">
          STATUS: THREAT LEVEL ZERO · ALL SYSTEMS NOMINAL
        </div>
      </div>

      {/* Grid of Security Sensors & Systems */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* Card 1: 100% Uninterrupted Power */}
        <div className="p-4 rounded-2xl bg-obsidian-900/80 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400">
              ONLINE
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-pearl-400">TRIPLE POWER GRID</span>
            <h4 className="text-sm font-bold text-pearl-100 mt-0.5">230V / 50Hz Stable</h4>
            <p className="text-[11px] text-pearl-400 mt-1">
              Industrial Stamford Generator + Lithium Solar Inverter. Zero flicker ATS.
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gold-400">
            <span>UPTIME: 100.0%</span>
            <span>BACKUP: 72H RESERVE</span>
          </div>
        </div>

        {/* Card 2: Biometric Access */}
        <div className="p-4 rounded-2xl bg-obsidian-900/80 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Fingerprint className="w-4 h-4" />
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400">
              AES-256
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-pearl-400">KEYLESS ENTRY</span>
            <h4 className="text-sm font-bold text-pearl-100 mt-0.5">Biometric &amp; Dynamic PIN</h4>
            <p className="text-[11px] text-pearl-400 mt-1">
              Unique encrypted access codes generated per stay. Purged upon checkout.
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-emerald-400">
            <span>NO SHARED KEYS</span>
            <span>TAMPER PROOF</span>
          </div>
        </div>

        {/* Card 3: 24/7 CCTV Perimeter */}
        <div className="p-4 rounded-2xl bg-obsidian-900/80 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Eye className="w-4 h-4" />
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400">
              16 CAMERAS
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-pearl-400">EXTERIOR SURVEILLANCE</span>
            <h4 className="text-sm font-bold text-pearl-100 mt-0.5">Perimeter Matrix Only</h4>
            <p className="text-[11px] text-pearl-400 mt-1">
              Zero internal cameras. Total privacy inside living quarters guaranteed.
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-emerald-400">
            <span>THERMAL SENSORS</span>
            <span>ZERO BLINDSPOTS</span>
          </div>
        </div>

        {/* Card 4: Gated Estate Protocol */}
        <div className="p-4 rounded-2xl bg-obsidian-900/80 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center">
              <Radio className="w-4 h-4" />
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400">
              STATIONED
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-pearl-400">PHYSICAL SECURITY</span>
            <h4 className="text-sm font-bold text-pearl-100 mt-0.5">Armed Guard Gatehouse</h4>
            <p className="text-[11px] text-pearl-400 mt-1">
              Private uniformed security team with visitor pre-registration and rapid escort.
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gold-400">
            <span>IKOYI PATROL</span>
            <span>RESPONSE: &lt; 2 MINS</span>
          </div>
        </div>
      </div>

      {/* Interactive Biometric Lock Simulator */}
      <div className="mt-6 p-6 rounded-2xl bg-obsidian-950/80 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div
            onClick={handleScan}
            className={`w-14 h-14 rounded-2xl border cursor-pointer transition-all flex items-center justify-center ${
              biometricUnlocked
                ? "bg-emerald-500 text-obsidian-950 border-emerald-400 shadow-lg shadow-emerald-500/40"
                : biometricScanning
                ? "bg-gold-500/20 text-gold-400 border-gold-400 animate-pulse"
                : "bg-obsidian-900 text-pearl-300 border-white/20 hover:border-emerald-400 hover:text-emerald-300"
            }`}
          >
            {biometricUnlocked ? (
              <CheckCircle2 className="w-7 h-7" />
            ) : (
              <Fingerprint className="w-7 h-7" />
            )}
          </div>
          <div>
            <h5 className="text-sm font-bold text-pearl-100">
              {biometricUnlocked
                ? "ACCESS GRANTED · SUITE UNLOCKED"
                : biometricScanning
                ? "SCANNING BIOMETRIC SIGNATURE..."
                : "Interactive Biometric Simulator"}
            </h5>
            <p className="text-xs text-pearl-400 mt-0.5">
              {biometricUnlocked
                ? "Welcome, Ambassador. Discretion protocol verified."
                : "Tap fingerprint icon to simulate touchless smart-entry authentication."}
            </p>
          </div>
        </div>

        <button
          onClick={handleScan}
          disabled={biometricScanning}
          className="px-5 py-2.5 rounded-xl bg-obsidian-900 border border-emerald-500/40 text-emerald-300 text-xs font-mono uppercase tracking-wider hover:bg-emerald-500/10 transition-colors shrink-0"
        >
          {biometricScanning ? "Authenticating..." : "Test Lock Simulation"}
        </button>
      </div>
    </div>
  );
}
