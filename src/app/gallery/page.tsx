"use client";

import React, { useState, useRef } from "react";
import {
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ShieldCheck,
  Video,
  Film,
  Camera,
  CheckCircle2,
  MapPin,
  Clock,
  Layers,
  ChevronRight,
} from "lucide-react";
import BookingWidget from "@/components/BookingWidget";

interface MediaArchiveItem {
  id: string;
  type: "video" | "photo";
  title: string;
  subtitle: string;
  category: "all" | "living" | "master" | "kitchen" | "photo";
  src: string;
  duration?: string;
  resolution: string;
  location: string;
  description: string;
  tags: string[];
}

const ARCHIVE_ITEMS: MediaArchiveItem[] = [
  {
    id: "video-1",
    type: "video",
    title: "Master Residence Walkthrough",
    subtitle: "Complete Spatial Flow & Architectural Design",
    category: "master",
    src: "/videos/magmercy_tour_1.mp4",
    duration: "1:42",
    resolution: "1080p 60FPS",
    location: "89 Lafiaji Street, Dolphin Estate, Ikoyi",
    description: "Raw, unedited cinematic walkthrough showcasing the entrance vestibule, transition corridors, and spatial volume of the residence.",
    tags: ["Full Residence", "Acoustic Glazing", "High Ceilings"],
  },
  {
    id: "video-2",
    type: "video",
    title: "Living Pavilion & Executive Lounge",
    subtitle: "Acoustic Double-Glazing & Sunlit Volume",
    category: "living",
    src: "/videos/magmercy_tour_2.mp4",
    duration: "2:15",
    resolution: "1080p 60FPS",
    location: "Living Pavilion · MagMercy Penthouse",
    description: "Wide panoramic sweep of the main entertaining lounge, custom designer seating, natural lighting, and peaceful estate ambiance.",
    tags: ["Living Pavilion", "Lounge", "Natural Light"],
  },
  {
    id: "video-3",
    type: "video",
    title: "Sovereign Haven & En-Suite Bath",
    subtitle: "Italian Marble Bath & King Plush Bed Sanctuary",
    category: "master",
    src: "/videos/magmercy_tour_3.mp4",
    duration: "1:58",
    resolution: "1080p 60FPS",
    location: "Master Suite 1 · MagMercy Penthouse",
    description: "Close-up visual inspection of the master king bed suite, acoustic soundproofing, dressing corridor, and Nero Marquina marble rainfall bathroom.",
    tags: ["Master En-Suite", "Marble Tub", "Super King Bed"],
  },
  {
    id: "video-4",
    type: "video",
    title: "Chef's Culinary Suite & Grounds",
    subtitle: "Calacatta Marble Island & Dolphin Estate Surroundings",
    category: "kitchen",
    src: "/videos/magmercy_tour_4.mp4",
    duration: "1:30",
    resolution: "1080p 60FPS",
    location: "Culinary Suite & Exterior Close",
    description: "Detailed walkthrough of the custom culinary kitchen island, Miele induction suite, and the tranquil gated security close of Dolphin Estate.",
    tags: ["Chef Kitchen", "Miele Appliances", "Gated Security"],
  },
  {
    id: "photo-1",
    type: "photo",
    title: "Verified On-Site Residence Suite",
    subtitle: "High-Resolution Verified On-Site Photographic Proof",
    category: "photo",
    src: "/images/rooms/magmercy_real_1.jpeg",
    resolution: "4K High Dynamic Range",
    location: "89 Lafiaji Street, Dolphin Estate, Ikoyi",
    description: "Authentic on-site photograph of the finished MagMercy residence interior, proving verified quality, pristine cleanliness, and immaculate finishing.",
    tags: ["Verified Photo", "On-Site Proof", "Zero Stock Images"],
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [activeVideo, setActiveVideo] = useState<MediaArchiveItem>(ARCHIVE_ITEMS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const cinemaVideoRef = useRef<HTMLVideoElement | null>(null);

  const filteredItems =
    filter === "all"
      ? ARCHIVE_ITEMS
      : filter === "videos"
      ? ARCHIVE_ITEMS.filter((item) => item.type === "video")
      : filter === "photo"
      ? ARCHIVE_ITEMS.filter((item) => item.type === "photo")
      : ARCHIVE_ITEMS.filter((item) => item.category === filter);

  const handleSelectMedia = (item: MediaArchiveItem) => {
    if (item.type === "video") {
      setActiveVideo(item);
      setIsPlaying(true);
      if (cinemaVideoRef.current) {
        cinemaVideoRef.current.src = item.src;
        cinemaVideoRef.current.play().catch(() => {});
      }
      // Smooth scroll up to cinema theatre
      const cinemaEl = document.getElementById("cinema-theatre");
      if (cinemaEl) {
        cinemaEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const toggleCinemaPlay = () => {
    if (!cinemaVideoRef.current) return;
    if (isPlaying) {
      cinemaVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      cinemaVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleCinemaMute = () => {
    if (!cinemaVideoRef.current) return;
    cinemaVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleCinemaFullscreen = () => {
    if (!cinemaVideoRef.current) return;
    if (cinemaVideoRef.current.requestFullscreen) {
      cinemaVideoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-gold-500/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <Film className="w-3.5 h-3.5 text-gold-600" />
          <span>100% AUTHENTIC REAL FOOTAGE ARCHIVES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900 tracking-tight">
          The MagMercy Cinema Archive
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          Zero stock photography. Zero computer-generated renders. Browse the authentic video tours
          and high-definition photographic proof recorded directly on-site at{" "}
          <span className="font-bold text-charcoal-900">
            89 Lafiaji Street, Dolphin Estate, Ikoyi, Lagos
          </span>
          .
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[
            { id: "all", label: "All Real Media (5)" },
            { id: "videos", label: "Real Video Tours (4)" },
            { id: "living", label: "Living Pavilion" },
            { id: "master", label: "Master Sanctuaries" },
            { id: "kitchen", label: "Chef's Kitchen" },
            { id: "photo", label: "Verified Stills (1)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                filter === tab.id
                  ? "bg-gradient-to-r from-gold-500 to-amber-500 text-charcoal-950 font-black shadow-lg shadow-gold-500/20 scale-105"
                  : "bg-white text-charcoal-700 hover:bg-sand-100 hover:text-charcoal-900 border border-charcoal-900/10 shadow-sm"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main 4K Cinema Theatre Box */}
      <section
        id="cinema-theatre"
        className="relative rounded-3xl overflow-hidden bg-charcoal-950 border border-gold-500/40 shadow-2xl p-4 sm:p-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-gold-400 font-bold tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>NOW STREAMING IN 1080P 60FPS</span>
              <span>·</span>
              <span className="text-gray-400">IKOYI BROADCAST FEED</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
              {activeVideo.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-gold-200/80 mt-1">
              {activeVideo.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-mono">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>89 Lafiaji St, Dolphin Estate</span>
            </div>
            <a
              href="/booking"
              className="px-5 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-black text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Reserve
            </a>
          </div>
        </div>

        {/* Video Viewport */}
        <div className="relative mt-6 rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[16/9] bg-black border border-white/10 group shadow-2xl">
          <video
            ref={cinemaVideoRef}
            src={activeVideo.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover cursor-pointer"
            onClick={toggleCinemaPlay}
          />

          {/* Luxury Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Top Live Verification Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 border border-emerald-400/40 text-emerald-300 text-xs font-mono font-bold tracking-wider backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>VERIFIED ON-SITE ARCHIVE</span>
          </div>

          {/* Bottom Interactive HUD */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleCinemaPlay}
                className="w-10 h-10 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 flex items-center justify-center transition-transform hover:scale-105 shadow-xl font-bold"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 translate-x-0.5" />}
              </button>

              <button
                type="button"
                onClick={toggleCinemaMute}
                className="w-10 h-10 rounded-full bg-black/70 hover:bg-black text-gold-400 border border-gold-500/40 flex items-center justify-center transition-transform hover:scale-105 shadow-xl"
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <div className="px-3 py-1 rounded-md bg-black/70 border border-white/10 text-white text-xs font-mono">
                {activeVideo.duration}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[11px] font-mono text-gray-400">
                Click viewport to play/pause
              </span>
              <button
                type="button"
                onClick={handleCinemaFullscreen}
                className="w-10 h-10 rounded-full bg-black/70 hover:bg-black text-gold-400 border border-gold-500/40 flex items-center justify-center transition-transform hover:scale-105 shadow-xl"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Switcher Thumbnails */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">
              SWITCH CAMERA ANGLE / SUITE TOUR
            </span>
            <span className="text-xs font-mono text-gold-400 font-bold">
              4 Full Video Walkthroughs Available
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ARCHIVE_ITEMS.filter((i) => i.type === "video").map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectMedia(item)}
                className={`relative rounded-xl overflow-hidden aspect-[16/9] border text-left transition-all group ${
                  activeVideo.id === item.id
                    ? "border-gold-400 ring-2 ring-gold-400/50 scale-[1.02]"
                    : "border-white/10 hover:border-white/30 opacity-70 hover:opacity-100"
                }`}
              >
                <video
                  src={item.src}
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-[10px] font-mono text-gold-400 font-bold truncate">
                    {item.title}
                  </div>
                  <div className="text-[9px] font-mono text-gray-300 flex items-center justify-between">
                    <span>{item.duration}</span>
                    <span>1080p</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Archive Grid */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-bronze-600 uppercase tracking-widest block font-semibold">
              DOCUMENTED PROOF
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-charcoal-900">
              Verified Real Media Vault
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
              Select any card to launch playback or examine verified spatial finishing.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-500/30 px-3 py-1.5 rounded-full font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Real Physical Apartment Footage</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelectMedia(item)}
              className="group relative rounded-3xl overflow-hidden border border-charcoal-900/10 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-gold-500/50 cursor-pointer flex flex-col"
            >
              {/* Media Thumbnail Box */}
              <div className="relative aspect-[16/10] bg-charcoal-950 overflow-hidden">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-charcoal-950/80 text-gold-400 text-[10px] font-mono font-bold tracking-wider backdrop-blur-md border border-gold-500/30">
                    {item.type === "video" ? (
                      <Video className="w-3 h-3 text-gold-400" />
                    ) : (
                      <Camera className="w-3 h-3 text-emerald-400" />
                    )}
                    <span>{item.type === "video" ? "VIDEO TOUR" : "VERIFIED PHOTO"}</span>
                  </div>

                  <div className="px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-mono">
                    {item.duration || item.resolution}
                  </div>
                </div>

                {/* Play Indicator overlay */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-gold-500/90 text-charcoal-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 translate-x-0.5 fill-charcoal-950" />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-bronze-600 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-gold-600" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-charcoal-950 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-charcoal-900/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="px-2 py-0.5 rounded-md bg-sand-100 text-charcoal-700 text-[10px] font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-gold-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    {item.type === "video" ? "Play" : "View"} <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Widget CTA */}
      <section className="pt-10">
        <BookingWidget />
      </section>
    </div>
  );
}
