"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Video, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  duration?: string;
  src: string;
  description: string;
  badge: string;
  available: boolean;
}

const VIDEOS: VideoItem[] = [
  {
    id: "tour-1",
    title: "Master Residence Walkthrough",
    duration: "Live Tour",
    src: "/videos/magmercy_tour_1.mp4",
    description: "First-hand cinematic video walkthrough of MagMercy Apartment at 89 Lafiaji Street, Dolphin Estate, Ikoyi.",
    badge: "Verified Tour 1",
    available: true,
  },
  {
    id: "tour-2",
    title: "Living Pavilion & Executive Lounge",
    duration: "Tour 2",
    src: "/videos/magmercy_tour_2.mp4",
    description: "Panoramic overview of the furnished lounge, acoustic double glazing, and ambient natural lighting.",
    badge: "Verified Tour 2",
    available: false,
  },
  {
    id: "tour-3",
    title: "Master Haven & En-Suite Bath",
    duration: "Tour 3",
    src: "/videos/magmercy_tour_3.mp4",
    description: "Private sanctuary tour showcasing king plush bed suite, marble bath, and custom dressing corridor.",
    badge: "Verified Tour 3",
    available: false,
  },
  {
    id: "tour-4",
    title: "Chef's Kitchen & Estate Surroundings",
    duration: "Tour 4",
    src: "/videos/magmercy_tour_4.mp4",
    description: "Close-up architectural review of the culinary island, appliances, and peaceful Dolphin Estate grounds.",
    badge: "Verified Tour 4",
    available: false,
  },
];

export default function VideoTourSection() {
  const [activeVideoId, setActiveVideoId] = useState<string>("tour-1");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentVideo = VIDEOS.find((v) => v.id === activeVideoId) || VIDEOS[0];

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

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-charcoal-900/15 text-xs font-mono tracking-widest text-coastal-blue uppercase font-semibold shadow-sm">
          <Video className="w-3.5 h-3.5 text-coastal-blue" />
          <span>REAL RESIDENCE CINEMATIC FOOTAGE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal-900">
          Experience MagMercy in Motion
        </h2>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
          Raw, authentic video tours recorded directly on-site at <span className="font-semibold text-charcoal-800">89 Lafiaji Street, Dolphin Estate, Ikoyi</span>. Inspect true dimensions, spatial flow, and ambient tranquility.
        </p>
      </div>

      {/* Video Player Showcase */}
      <div className="relative rounded-3xl overflow-hidden bg-charcoal-950 border border-charcoal-900/20 shadow-2xl">
        {/* Main Video Box */}
        <div className="relative aspect-video sm:aspect-[16/9] md:aspect-[21/9] max-h-[600px] w-full bg-black flex items-center justify-center">
          {currentVideo.available ? (
            <video
              ref={videoRef}
              key={currentVideo.src}
              src={currentVideo.src}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-contain bg-black cursor-pointer"
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-8 text-pearl-300 space-y-3">
              <Video className="w-12 h-12 text-coastal-blue/60 animate-pulse" />
              <h3 className="text-lg font-serif font-bold text-white">{currentVideo.title}</h3>
              <p className="text-xs text-pearl-400 max-w-md">
                Video clip slot ready. Save the corresponding MP4 video file to activate this chapter.
              </p>
            </div>
          )}

          {/* Top HUD: Real Badge & Location */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white font-medium shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{currentVideo.badge}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-pearl-300 shadow-lg">
              <MapPin className="w-3.5 h-3.5 text-coastal-teal" />
              <span>89 Lafiaji St, Dolphin Estate, Ikoyi</span>
            </div>
          </div>

          {/* Bottom HUD: Player Controls */}
          {currentVideo.available && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl bg-charcoal-900/85 backdrop-blur-md border border-white/10 text-white z-10">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-xl bg-coastal-blue hover:bg-coastal-blue-hover text-white flex items-center justify-center transition-all shadow-md"
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                <div className="hidden sm:block">
                  <h4 className="text-xs font-serif font-bold text-white leading-tight">{currentVideo.title}</h4>
                  <span className="text-[10px] font-mono text-pearl-400">{currentVideo.duration} · High Definition</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                  aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Video Chapter Selector Bar */}
        <div className="p-4 sm:p-6 bg-charcoal-900 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {VIDEOS.map((vid) => {
            const isCurrent = vid.id === activeVideoId;
            return (
              <button
                key={vid.id}
                type="button"
                onClick={() => setActiveVideoId(vid.id)}
                className={`text-left p-3.5 rounded-2xl transition-all border ${
                  isCurrent
                    ? "bg-white/10 border-coastal-teal shadow-md"
                    : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-bronze-300 font-bold">
                    {vid.duration}
                  </span>
                  {vid.available ? (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3" /> Ready
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-pearl-500">Upcoming</span>
                  )}
                </div>
                <h4 className="text-xs sm:text-sm font-serif font-bold text-white line-clamp-1">
                  {vid.title}
                </h4>
                <p className="text-[11px] text-pearl-400 line-clamp-2 mt-1 leading-snug">
                  {vid.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
