"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, Play, Cpu, ShieldCheck, FileText, ArrowRight, Sun } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmokeEffect from "@/components/smoke-effect";

// Apps metadata with Apple-style presentation specifications
const appsPresentationData = [
  {
    name: "QR Maker",
    tagline: "Custom vector widgets at your command.",
    description: "QR Maker is a high-performance vector generator that lets users customize background gradients, logo overlays, and colors natively using CoreImage. Fully integrated with iOS 17 widgets.",
    video: "/QR-maker.mp4",
    tech: ["CoreImage Filters", "WidgetKit Layouts", "SwiftData Caches", "StoreKit 2 paywalls"],
    bgColor: "from-blue-600 to-indigo-900",
    slug: "qr-maker",
    accentColor: "#0066cc",
    specs: {
      framework: "SwiftUI 5.0",
      coverage: "92% test coverage",
      storage: "SwiftData Containers",
      ios: "iOS 17.0+ targets"
    }
  },
  {
    name: "Fit60",
    tagline: "Your HealthKit-powered 60-day workout companion.",
    description: "Fit60 tracks active calories, step counts, and telemetry. Features bi-directional HealthKit sync, CoreMotion logs, and streak guardian templates to keep users active.",
    video: "/Fit60.mp4",
    tech: ["HealthKit Sync", "CoreMotion logs", "iCloud databases", "Streak notifications"],
    bgColor: "from-emerald-600 to-teal-950",
    slug: "fit60",
    accentColor: "#10b981",
    specs: {
      framework: "SwiftUI & CoreMotion",
      coverage: "94% test coverage",
      storage: "Local SQLite + HealthKit",
      ios: "iOS 16.0+ / watchOS companion"
    }
  },
  {
    name: "NanhuFX",
    tagline: "The video teleprompter that scrolls when you speak.",
    description: "NanhuFX captures 4K video using AVFoundation while scroll-speed adapts in real-time to the presenter's speech rate using Apple's local Speech framework.",
    video: "/NanhuFX.mp4",
    tech: ["AVFoundation Camera", "Local Speech Engine", "iCloud Container", "Video Exporting"],
    bgColor: "from-amber-600 to-amber-950",
    slug: "nanhufx",
    accentColor: "#f59e0b",
    specs: {
      framework: "SwiftUI / AVFoundation",
      coverage: "90% test coverage",
      storage: "iCloud Private Container",
      ios: "iOS 17.0+ compatible"
    }
  },
  {
    name: "Runlit",
    tagline: "GPS runner tracker & dynamic live activities.",
    description: "Runlit tracking feeds GPS telemetry to Lock Screen dynamic widgets via ActivityKit. Includes watchOS standalone run log capabilities.",
    video: "/RunLit.mp4",
    tech: ["ActivityKit HUD", "MapKit tracking", "watchOS sensors", "StoreKit 2 billing"],
    bgColor: "from-orange-600 to-red-950",
    slug: "runlit",
    accentColor: "#f97316",
    specs: {
      framework: "SwiftUI & watchOS 10",
      coverage: "91% test coverage",
      storage: "SwiftData schema",
      ios: "iOS 17.0+ / Standalone Watch App"
    }
  }
];

const PresentationVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playVideo = () => {
      video.play().catch(() => {
        // Fallback for autoplay blocks on mobile browsers
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener("touchstart", resume);
          document.removeEventListener("click", resume);
        };
        document.addEventListener("touchstart", resume, { once: true, passive: true });
        document.addEventListener("click", resume, { once: true, passive: true });
      });
    };

    video.load();
    playVideo();
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      className="w-full h-full object-cover select-none pointer-events-none"
    />
  );
};

export default function PresentationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      
      {/* Dynamic Theme Toggle Banner */}
      <div className="absolute top-24 right-6 z-40">
        <Link 
          href="/presentation2" 
          className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-wider font-mono text-white transition-all hover:scale-105"
        >
          <Sun className="w-3.5 h-3.5" />
          Light Keynote
        </Link>
      </div>

      {/* 1. Welcoming Hero Slide */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-center px-6 z-10 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black"
      >
        <SmokeEffect theme="dark" />
        <div className="space-y-6 max-w-4xl relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 bg-neutral-900/80 border border-neutral-800 px-3.5 py-1 rounded-full inline-block">
            Nanhu Interactive Keynote
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500 leading-none">
            Introducing the <br />
            2026 Lineup.
          </h1>
          <p className="text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Vetted proprietary iOS codebase assets engineered for transition. 100% native Swift/SwiftUI. Zero technical debt.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <a 
              href="#qr-maker" 
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-black hover:bg-neutral-200 px-6 py-3 text-xs font-semibold uppercase tracking-wider font-mono transition-colors"
            >
              Start Presentation
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Scroll to explore</span>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </motion.section>

      {/* 2. Apps Portfolio Catalog Grid Showcase */}
      <section className="relative w-full py-24 md:py-32 border-t border-neutral-900 bg-black z-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-left space-y-4 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">The Collection</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-display text-white">
              Engineered Asset Portfolio
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Explore the detailed technical architectures and verified build telemetry of our 2026 native iOS applications. Select any asset below to scroll directly to its Keynote slides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {appsPresentationData.map((app, i) => (
              <motion.div 
                key={app.slug}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-3xl flex flex-col justify-between aspect-square group"
              >
                <div className="space-y-4">
                  {/* Squirclized Gradient App Icon */}
                  <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center bg-gradient-to-tr ${app.bgColor} shadow-lg ring-1 ring-white/10`}>
                    <span className="text-white font-bold font-mono text-sm tracking-tight uppercase">
                      {app.name.substring(0, 2)}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold font-display uppercase tracking-tight text-white">{app.name}</h4>
                    <p className="text-neutral-500 text-[11px] leading-relaxed line-clamp-2">{app.tagline}</p>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-neutral-800/60 mt-4">
                  <a 
                    href={`#${app.slug}`}
                    className="text-[10px] font-mono uppercase tracking-wider text-white hover:text-neutral-350 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    View Keynote
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[9px] font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                    {app.specs.framework.split(" ")[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Individual App Presenter Slides */}
      {appsPresentationData.map((app, index) => (
        <section 
          id={app.slug} 
          key={app.slug}
          className="relative min-h-screen w-full py-20 md:py-32 flex items-center justify-center border-t border-neutral-900 bg-neutral-950/20"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: app.accentColor }}>
                  App Showroom {index + 1} of {appsPresentationData.length}
                </span>
                <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase font-display text-white">
                  {app.name}
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-300 leading-snug">
                  {app.tagline}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {app.description}
                </p>
              </div>

              {/* Technologies Bullets */}
              <div className="flex flex-wrap gap-2">
                {app.tech.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="text-[9px] font-semibold font-mono uppercase tracking-wider text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Squirclized Specs Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-2xl">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">Runtime Engine</span>
                  <span className="text-xs font-semibold text-white mt-1 block">{app.specs.framework}</span>
                </div>
                <div className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-2xl">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">Verified Quality</span>
                  <span className="text-xs font-semibold text-emerald-400 mt-1 block">{app.specs.coverage}</span>
                </div>
                <div className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-2xl">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">Data Storage</span>
                  <span className="text-xs font-semibold text-white mt-1 block">{app.specs.storage}</span>
                </div>
                <div className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-2xl">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">iOS Deployment Target</span>
                  <span className="text-xs font-semibold text-white mt-1 block">{app.specs.ios}</span>
                </div>
              </div>

              {/* Call to action buttons */}
              <div className="flex items-center gap-4 pt-2">
                <Link 
                  href={`/apps/${app.slug}`} 
                  className="rounded-full bg-white hover:bg-neutral-200 text-black px-6 py-2.5 text-xs font-semibold font-mono uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  View Repo Specs
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <Link 
                  href={`/acquire?app=${app.slug}`} 
                  className="rounded-full border border-neutral-800 hover:border-neutral-600 bg-neutral-900/80 hover:bg-neutral-900 text-white px-6 py-2.5 text-xs font-semibold font-mono uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  Acquire Asset
                </Link>
              </div>
            </div>

            {/* Right iPhone Showcase Column */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-[230px] sm:w-[280px] md:w-[320px] aspect-[9/19.5] border-[7px] border-neutral-800 rounded-[38px] md:rounded-[48px] overflow-hidden bg-black shadow-[0_30px_60px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-black z-35" />
                
                {/* Simulated Screen */}
                <div className="w-full h-full overflow-hidden bg-neutral-950 relative z-30">
                  <PresentationVideo src={app.video} />
                </div>

                {/* Ambient Glow behind Device */}
                <div className={`absolute -inset-10 bg-gradient-to-tr ${app.bgColor} opacity-25 blur-3xl z-10 pointer-events-none rounded-full`} />
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* 3. Apple-Style Bento Specs Grid */}
      <section className="relative py-20 md:py-32 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-left space-y-4 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Architectural Manifesto</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-display">
              Uncompromising Quality. <br />
              Standard Compliance.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/60 border border-neutral-800 p-8 rounded-3xl space-y-4 flex flex-col justify-between">
              <Cpu className="w-8 h-8 text-neutral-400" />
              <div className="space-y-2">
                <h4 className="text-base font-bold font-display uppercase tracking-tight">100% Native Swift & SwiftUI</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  We write native code compile targets. No React Native bridge delays, no Flutter drawing cycles. Full access to raw Apple hardware sensors.
                </p>
              </div>
            </div>

            <div className="bg-neutral-900/60 border border-neutral-800 p-8 rounded-3xl space-y-4 flex flex-col justify-between">
              <ShieldCheck className="w-8 h-8 text-neutral-400" />
              <div className="space-y-2">
                <h4 className="text-base font-bold font-display uppercase tracking-tight">Vetted Due Diligence</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  All transactions use Escrow.com secured holding. Standard transfer includes clean repositories, TestFlight access, and 30 days of direct developer support.
                </p>
              </div>
            </div>

            <div className="bg-neutral-900/60 border border-neutral-800 p-8 rounded-3xl space-y-4 flex flex-col justify-between">
              <FileText className="w-8 h-8 text-neutral-400" />
              <div className="space-y-2">
                <h4 className="text-base font-bold font-display uppercase tracking-tight">Comprehensive Test Coverage</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Every codebase features a minimum 90%+ target test coverage. Full unit testing arrays are included in every SPM modular target.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact/Briefing Section */}
      <section className="relative py-20 md:py-32 border-t border-neutral-900 bg-gradient-to-b from-neutral-950 to-black text-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl sm:text-6xl font-black uppercase font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 leading-none">
            Acquire the <br />
            Next Core Asset.
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Verify Xcode targets, audit codebases under NDA, and coordinate developer briefings directly.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="rounded-full bg-white hover:bg-neutral-200 text-black px-8 py-3 text-xs font-semibold font-mono uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              Inquire Briefing
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link 
              href="/apps" 
              className="rounded-full border border-neutral-800 hover:border-neutral-600 bg-neutral-900/80 hover:bg-neutral-900 text-white px-8 py-3 text-xs font-semibold font-mono uppercase tracking-wider transition-colors"
            >
              View Grid Catalog
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
