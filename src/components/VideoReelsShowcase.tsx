"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Eye,
  Camera,
  MapPin,
  Calendar,
} from "lucide-react";

interface ReelItem {
  id: string;
  type: "video" | "photo";
  title: string;
  roomTag: string;
  src: string;
  description: string;
  specs: string[];
}

const REELS: ReelItem[] = [
  {
    id: "reel-1",
    type: "video",
    title: "The Grand Master Walkthrough",
    roomTag: "ENTIRE RESIDENCE",
    src: "/videos/magmercy_tour_1.mp4",
    description: "Full uninterrupted on-site walkthrough showing entrance foyer, spatial openness, and acoustic separation.",
    specs: ["3,400 sq.ft", "Dual Corridors", "Italian Travertine"],
  },
  {
    id: "reel-2",
    type: "video",
    title: "Living Pavilion & Executive Lounge",
    roomTag: "LIVING QUARTERS",
    src: "/videos/magmercy_tour_2.mp4",
    description: "Italian velvet seating, custom bronze millwork, Bang & Olufsen acoustics, and ambient natural light.",
    specs: ["85\" OLED Display", "Double Glazed", "Climate Zone 1"],
  },
  {
    id: "reel-3",
    type: "video",
    title: "Sovereign Haven & En-Suite Bath",
    roomTag: "MASTER SUITE",
    src: "/videos/magmercy_tour_3.mp4",
    description: "Deep-soaking marble tub, chromotherapy rainfall shower, super king bed, and acoustic blackout cocoon.",
    specs: ["Super King Hypnos", "Nero Marquina", "Biometric Safe"],
  },
  {
    id: "reel-4",
    type: "video",
    title: "Chef's Kitchen & Dolphin Grounds",
    roomTag: "CULINARY & GROUNDS",
    src: "/videos/magmercy_tour_4.mp4",
    description: "Miele induction appliances, Calacatta island, and peaceful surroundings in Dolphin Estate.",
    specs: ["Miele Appliances", "Water Filtration", "Gated Security"],
  },
  {
    id: "reel-photo",
    type: "photo",
    title: "Verified Master Executive Suite",
    roomTag: "VERIFIED RESIDENCE PHOTO",
    src: "/images/rooms/magmercy_real_1.jpeg",
    description: "High-resolution architectural photograph captured on-site at 89 Lafiaji Street, Dolphin Estate.",
    specs: ["Direct On-Site", "Unfiltered", "True Colors"],
  },
];

export default function VideoReelsShowcase() {
  const [activeMutedMap, setActiveMutedMap] = useState<Record<string, boolean>>({
    "reel-1": true,
    "reel-2": true,
    "reel-3": true,
    "reel-4": true,
  });

  const [playingMap, setPlayingMap] = useState<Record<string, boolean>>({
    "reel-1": true,
    "reel-2": true,
    "reel-3": true,
    "reel-4": true,
  });

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (!vid) return;

    const nextMuted = !vid.muted;
    vid.muted = nextMuted;
    setActiveMutedMap((prev) => ({ ...prev, [id]: nextMuted }));
  };

  const togglePlay = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (!vid) return;

    if (vid.paused) {
      vid.play();
      setPlayingMap((prev) => ({ ...prev, [id]: true }));
    } else {
      vid.pause();
      setPlayingMap((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleFullscreen = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (vid && vid.requestFullscreen) {
      vid.requestFullscreen();
    }
  };

  return (
    <section id="video-reels" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 border border-charcoal-900/15 text-xs font-mono tracking-widest text-coastal-blue uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNFILTERED RESIDENCE CINEMA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal-900 leading-tight">
            Explore MagMercy Suite by Suite
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Zero stock photos or rendering tricks. Inspect real video footage of every room recorded on-site at 89 Lafiaji Street, Dolphin Estate, Ikoyi.
          </p>
        </div>

        <Link
          href="/booking"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-coastal-blue hover:bg-coastal-blue-hover text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md shadow-coastal-blue/20 self-start md:self-auto"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Your Stay</span>
        </Link>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REELS.map((item, idx) => {
          const isPhoto = item.type === "photo";
          const isMuted = activeMutedMap[item.id] ?? true;
          const isPlaying = playingMap[item.id] ?? true;

          return (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden bg-charcoal-950 border border-charcoal-900/20 shadow-xl flex flex-col justify-between transition-all hover:border-coastal-teal hover:shadow-2xl ${
                idx === 0 ? "md:col-span-2 lg:col-span-2 aspect-video md:aspect-[16/10]" : "aspect-[4/5] sm:aspect-[3/4]"
              }`}
            >
              {/* Media Element */}
              <div className="relative w-full h-full min-h-[320px] overflow-hidden bg-black flex items-center justify-center">
                {isPhoto ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el;
                    }}
                    src={item.src}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onClick={(e) => togglePlay(item.id, e)}
                  />
                )}

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent pointer-events-none" />

                {/* Top Badge: Room Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white font-bold tracking-wider uppercase shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{item.roomTag}</span>
                  </div>

                  {!isPhoto && (
                    <div className="flex items-center gap-1.5 pointer-events-auto">
                      <button
                        type="button"
                        onClick={(e) => toggleMute(item.id, e)}
                        className="w-8 h-8 rounded-full bg-charcoal-900/80 hover:bg-black backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all shadow-md"
                        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleFullscreen(item.id, e)}
                        className="w-8 h-8 rounded-full bg-charcoal-900/80 hover:bg-black backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all shadow-md"
                        aria-label="Expand fullscreen"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Center Play indicator overlay for videos */}
                {!isPhoto && !isPlaying && (
                  <div
                    onClick={(e) => togglePlay(item.id, e)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-10"
                  >
                    <div className="w-14 h-14 rounded-full bg-coastal-blue/90 text-white flex items-center justify-center shadow-xl">
                      <Play className="w-6 h-6 ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Information */}
              <div className="relative z-10 p-5 sm:p-6 bg-charcoal-950/95 backdrop-blur-md border-t border-white/10 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-xl font-serif font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-pearl-400 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    href="/booking"
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-coastal-blue text-white transition-all shrink-0 shadow-md"
                    title="Reserve this suite"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Specs Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {item.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-bronze-300 font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
