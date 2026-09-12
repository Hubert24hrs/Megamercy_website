"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Calendar,
  Sparkles,
  MapPin,
  ShieldCheck,
  Zap,
  Lock,
  Wifi,
  ChevronRight,
  Video,
} from "lucide-react";

interface HeroVideo {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  src: string;
}

const HERO_VIDEOS: HeroVideo[] = [
  {
    id: "tour-1",
    number: "01",
    title: "Master Residence Walkthrough",
    subtitle: "Complete On-Site Tour",
    src: "/videos/magmercy_tour_1.mp4",
  },
  {
    id: "tour-2",
    number: "02",
    title: "The Living Pavilion",
    subtitle: "Furnished Executive Lounge",
    src: "/videos/magmercy_tour_2.mp4",
  },
  {
    id: "tour-3",
    number: "03",
    title: "The Sovereign Haven",
    subtitle: "Plush Bed & Marble Bath",
    src: "/videos/magmercy_tour_3.mp4",
  },
  {
    id: "tour-4",
    number: "04",
    title: "Culinary Suite & Grounds",
    subtitle: "Kitchen & Estate Surroundings",
    src: "/videos/magmercy_tour_4.mp4",
  },
];

export default function CinematicHero() {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentVideo = HERO_VIDEOS[activeVideoIndex];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const switchVideo = (index: number) => {
    setActiveVideoIndex(index);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section className="relative w-full overflow-hidden rounded-3xl bg-charcoal-950 shadow-2xl border border-charcoal-900/40">
      {/* Video Canvas Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] min-h-[500px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Background Real Video */}
        <video
          ref={videoRef}
          key={currentVideo.src}
          src={currentVideo.src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Cinematic Dual Vignette & Dark Tint Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,13,18,0.6)_100%)]" />

        {/* Content Overlays */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-between h-full space-y-8">
          {/* Top Row: Badges & Audio/Fullscreen Buttons */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-mono text-pearl-100 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold tracking-wider uppercase">VERIFIED REAL RESIDENCE FOOTAGE</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-bronze-300">
                <MapPin className="w-3.5 h-3.5 text-coastal-teal" />
                <span>89 Lafiaji St, Dolphin Estate, Ikoyi</span>
              </div>
            </div>

            {/* Top Right Controls: Mute/Unmute & Play/Pause */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                className="px-3.5 py-2 rounded-full bg-charcoal-900/80 hover:bg-charcoal-900 backdrop-blur-xl border border-white/15 text-white text-xs font-mono flex items-center gap-2 transition-all shadow-md"
                aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                    <span className="hidden sm:inline">Unmute Sound</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span className="hidden sm:inline">Sound Active</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={togglePlay}
                className="w-9 h-9 rounded-full bg-charcoal-900/80 hover:bg-charcoal-900 backdrop-blur-xl border border-white/15 text-white flex items-center justify-center transition-all shadow-md"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={handleFullscreen}
                className="w-9 h-9 rounded-full bg-charcoal-900/80 hover:bg-charcoal-900 backdrop-blur-xl border border-white/15 text-white flex items-center justify-center transition-all shadow-md"
                aria-label="Fullscreen video"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center: Main High-Fashion Headline & Value Proposition */}
          <div className="max-w-3xl space-y-4 sm:space-y-6 pt-4 sm:pt-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-coastal-teal uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 text-coastal-teal" />
              <span>THE SOVEREIGN SANCTUARY OF IKOYI</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-black tracking-tight text-white leading-[1.08] drop-shadow-lg">
              A Private Penthouse in Dolphin Estate, Ikoyi.{" "}
              <span className="text-coastal-teal italic font-light block sm:inline">
                Live &amp; Unfiltered.
              </span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-pearl-300 leading-relaxed max-w-2xl drop-shadow-md">
              Step inside through authentic 4K video walkthroughs. Experience finished 3.2-meter ceilings,
              Italian velvet lounge, German acoustic glazing sealing out city hum, and synchronized 150kVA
              uninterrupted power in prime Ikoyi.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/booking"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-coastal-blue hover:bg-coastal-blue-hover text-white font-serif font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-coastal-blue/30 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Check Live Rates &amp; Availability</span>
              </Link>

              <a
                href="#video-reels"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white text-xs sm:text-sm font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Video className="w-4 h-4 text-coastal-teal" />
                <span>Explore 4 Room Videos</span>
              </a>
            </div>
          </div>

          {/* Bottom Bar: 4 Interactive Video Chapter Pills */}
          <div className="space-y-3 pt-6">
            <span className="text-[10px] font-mono tracking-widest text-pearl-400 uppercase font-bold block">
              SELECT VIDEO CHAPTER TO PREVIEW:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {HERO_VIDEOS.map((vid, idx) => {
                const isActive = activeVideoIndex === idx;
                return (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => switchVideo(idx)}
                    className={`text-left p-3 sm:p-3.5 rounded-2xl backdrop-blur-xl transition-all border ${
                      isActive
                        ? "bg-white/20 border-coastal-teal text-white shadow-xl scale-[1.02]"
                        : "bg-charcoal-900/60 border-white/10 hover:bg-white/10 text-pearl-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-bold text-coastal-teal">
                        {vid.number}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-serif font-bold leading-tight line-clamp-1">
                      {vid.title}
                    </h4>
                    <span className="text-[10px] font-mono text-pearl-400 block line-clamp-1 mt-0.5">
                      {vid.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Telemetry Ticker Bar */}
      <div className="bg-charcoal-900 border-t border-white/10 px-4 py-3 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] font-mono text-pearl-300">
        <span className="flex items-center gap-1.5 text-white font-semibold">
          <Zap className="w-3.5 h-3.5 text-amber-400" /> 100% UNINTERRUPTED POWER (150kVA)
        </span>
        <span className="hidden sm:inline text-white/20">|</span>
        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <Lock className="w-3.5 h-3.5 text-emerald-400" /> KEYLESS BIOMETRIC ACCESS
        </span>
        <span className="hidden sm:inline text-white/20">|</span>
        <span className="flex items-center gap-1.5 text-coastal-teal font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-coastal-teal" /> 24/7 ARMED POLICE ESCORT
        </span>
        <span className="hidden sm:inline text-white/20">|</span>
        <span className="flex items-center gap-1.5 text-white font-semibold">
          <Wifi className="w-3.5 h-3.5 text-coastal-blue" /> 1GBPS DEDICATED FIBER
        </span>
      </div>
    </section>
  );
}
