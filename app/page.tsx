"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Layers, Zap, HardDrive } from "lucide-react";
import { APPS_DATA } from "@/lib/apps-data";
import { motion } from "framer-motion";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const CoverFlowVideo = ({ src }: { src: string }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const tryPlay = () => {
      video.play().catch(() => {
        // iOS may block even muted autoplay on first load — wait for user tap
        const gesture = () => {
          video.play().catch(() => {});
          document.removeEventListener("click", gesture);
          document.removeEventListener("touchstart", gesture);
        };
        document.addEventListener("click", gesture, { once: true, passive: true });
        document.addEventListener("touchstart", gesture, { once: true, passive: true });
      });
    };

    // iOS Safari ignores preload="auto" — force it to start loading
    video.load();

    if (video.readyState >= 2) {
      // Already have data (e.g. cached)
      tryPlay();
    } else {
      // loadeddata fires earlier than canplay on iOS
      video.addEventListener("loadeddata", tryPlay, { once: true });
    }

    // Fallback: if no event fires within 2s, try playing anyway
    const fallbackTimer = setTimeout(tryPlay, 2000);

    return () => {
      clearTimeout(fallbackTimer);
      video.removeEventListener("loadeddata", tryPlay);
      video.pause();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      webkit-playsinline="true"
      preload="auto"
      className="w-full h-full object-cover select-none pointer-events-none"
    />
  );
};

export default function Home() {
  const featuredApps = APPS_DATA;
  const [activeIndex, setActiveIndex] = useState(1);

  const mockupApps = [
    { name: "Fit60", video: "/Fit60.mp4", image: "/apps/fit60/screen2.png", slug: "fit60" },
    { name: "NanhuFX", video: "/NanhuFX.mp4", image: "/apps/nanhufx/screen2.png", slug: "nanhufx" },
    { name: "Runlit", video: "/RunLit.mp4", image: "/apps/runlit/screen2.png", slug: "runlit" },
    { name: "QR Maker", video: "/QR-maker.mp4", image: "/apps/qr-maker/screen2.png", slug: "qr-maker" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockupApps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background pb-20 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-12 md:pt-24 mb-12 md:mb-16 animate-fade-in-up">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 border-b border-border pb-8 gap-6">
          <div className="max-w-4xl text-left space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
              Acquisition-Ready iOS Codebases
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05] uppercase">
              Acquire Premium,<br />
              Native iOS Codebases.
            </h1>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1.5 text-right shrink-0">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Est. 2024</span>
            <span className="font-display text-2xl font-bold text-foreground">800+ Hours Saved</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          <div className="lg:col-span-8 space-y-6">
            <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              We build, validate, and transition high-fidelity mobile applications. 100% clean Swift/SwiftUI codebases, pre-configured StoreKit paywalls, and zero technical debt. Built for launch.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
              <Link 
                href="/apps" 
                className="px-8 py-4 bg-primary text-primary-foreground hover:bg-neutral-800 rounded-full font-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                Explore iOS Portfolio <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 border border-border text-foreground hover:bg-neutral-100 rounded-full font-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center"
              >
                Our Design Standards
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 w-full">
            <div className="p-6 bg-card border border-border rounded-2xl flex flex-col justify-between aspect-square">
              <span className="font-display text-3xl font-bold text-foreground">100%</span>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider leading-normal">SwiftUI & Swift Native</span>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl flex flex-col justify-between aspect-square">
              <span className="font-display text-3xl font-bold text-[#1d1d1f]">90%+</span>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider leading-normal">Test Suite Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Cover Flow Mockup Showroom */}
      <section className="w-full max-w-6xl mx-auto px-6 mt-16 md:mt-24 flex flex-col items-center select-none overflow-visible">
        <div className="relative h-[280px] sm:h-[360px] md:h-[460px] w-full flex items-center justify-center overflow-visible preserve-3d">
          {mockupApps.map((app, i) => {
            const offset = i - activeIndex;
            const isCenter = offset === 0;
            return (
              <motion.div
                key={i}
                style={{
                  // Safari cannot render <video> inside preserve-3d containers.
                  // The center card (offset=0) has no 3D rotation, so we disable
                  // preserve-3d on it to let the video compositor work.
                  ...(isCenter ? {} : { transformStyle: "preserve-3d" as const, perspective: 1200 }),
                }}
                animate={{
                  x: offset * 110,
                  scale: 1 - Math.abs(offset) * 0.18,
                  rotateY: isCenter ? 0 : offset * -32,
                  z: isCenter ? 0 : -Math.abs(offset) * 160,
                  zIndex: 10 - Math.abs(offset),
                  opacity: 1 - Math.abs(offset) * 0.35,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                onClick={() => setActiveIndex(i)}
                className="absolute w-[125px] sm:w-[160px] md:w-[210px] aspect-[9/19.5] flex flex-col items-center justify-start overflow-visible cursor-pointer"
              >
                {/* iPhone Frame */}
                <div className="relative w-full h-full border-[5px] border-[#1d1d1f] rounded-[28px] md:rounded-[36px] overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
                  <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-12 h-2.5 rounded-full bg-black z-20" />
                  <div className="relative aspect-[9/19.5] w-full h-full z-10 overflow-hidden bg-neutral-950">
                    {isCenter ? (
                      <CoverFlowVideo src={app.video} />
                    ) : (
                      <img
                        src={app.image}
                        alt={app.name}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    )}
                  </div>
                </div>

                {/* Soft Floor Drop Shadow — no 3D transform on center card for Safari video compat */}
                <div 
                  className="absolute -bottom-10 w-[85%] h-5 rounded-[50%] bg-black/60 blur-md pointer-events-none"
                  style={isCenter ? {} : { transform: "rotateX(75deg)" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Carousel indicators & details */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + mockupApps.length) % mockupApps.length)}
              className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>
            <div className="flex gap-2">
              {mockupApps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex ? "bg-foreground w-6" : "bg-neutral-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % mockupApps.length)}
              className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="text-center">
            <h3 className="font-bold text-xs text-foreground font-mono uppercase tracking-wider">
              {mockupApps[activeIndex].name}
            </h3>
            <Link
              href={`/apps/${mockupApps[activeIndex].slug}`}
              className="text-[10px] text-primary font-mono uppercase tracking-widest font-semibold hover:underline mt-1 block"
            >
              View Repository Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="w-full max-w-7xl mx-auto px-6 mt-20 md:mt-32 space-y-12">
        <div className="flex flex-row items-end justify-between gap-4">
          <div className="space-y-2 text-left">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display uppercase">Active Inventory</h2>
          </div>
          <Link href="/apps" className="text-xs font-semibold text-foreground hover:underline flex items-center gap-0.5 border-b border-foreground pb-0.5">
            View All Apps <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 text-left">
          {featuredApps.map((app) => (
            <div 
              key={app.slug} 
              className="flex flex-col justify-between h-full bg-card rounded-2xl p-6 border border-border hover:border-neutral-400/50 hover:scale-[1.01] transition-all duration-300 animate-fade-in-up" 
            >
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex gap-3 items-center">
                    <img
                      src={app.icon || `/apps/${app.slug}/icon.jpg`}
                      alt={`${app.name} Icon`}
                      className="w-14 h-14 rounded-xl object-cover border border-border shadow-sm shrink-0"
                    />
                    <div>
                      <h3 className="text-base font-bold text-foreground font-display">{app.name}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[9px] font-mono text-muted-foreground tracking-wider uppercase">{app.acquisitionStatus}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-xs leading-relaxed">{app.description}</p>

                {/* Sub-details & Specifications Table */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 bg-neutral-50 border border-border p-3.5 rounded-xl font-mono text-[10px]">
                  <div>
                    <span className="text-muted-foreground uppercase block text-[8px] tracking-wider">Suite Coverage</span>
                    <span className="font-bold text-foreground mt-0.5 block">{app.coverage}% Verified</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground uppercase block text-[8px] tracking-wider">Code State</span>
                    <span className="font-bold text-foreground mt-0.5 block truncate">{app.buildStatus}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground uppercase block text-[8px] tracking-wider">Monthly Cost</span>
                    <span className="font-bold text-foreground mt-0.5 block">${app.monthlyCost}/mo</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground uppercase block text-[8px] tracking-wider">Handoff Time</span>
                    <span className="font-bold text-foreground mt-0.5 block">24-48 Hours</span>
                  </div>
                </div>

                {/* Key Bullet List */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground block">Key Shipments</span>
                  <ul className="space-y-1.5 text-[11px] text-muted-foreground list-none pl-0">
                    {app.features.slice(0, 3).map((feat, index) => (
                      <li key={index} className="flex items-start gap-1.5 leading-normal">
                        <span className="text-foreground font-bold font-mono">→</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-border mt-6 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-[8px] text-muted-foreground uppercase tracking-wider font-mono">Hours Saved</div>
                    <div className="text-xs font-semibold text-foreground mt-0.5">{app.hoursSaved}+ Hours</div>
                  </div>
                </div>
                
                <Link
                  href={`/apps/${app.slug}`}
                  className="px-4 py-2 bg-primary text-primary-foreground hover:bg-neutral-800 rounded-full font-mono text-[10px] uppercase tracking-wider transition-transform hover:scale-[1.03] inline-flex items-center gap-1.5 shadow-sm font-semibold"
                >
                  Interested
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Handover Protocol */}
      <section className="w-full bg-[#1c1b1b] text-[#ffffff] py-20 mt-20 md:mt-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 text-left space-y-4">
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">Secure & Safe</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display uppercase leading-[1.1]">The iOS Handover Protocol</h2>
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-md">
              We operate a direct developer transfer process. Complete transition transparency, zero user migration friction. Secure assets via Escrow.com.
            </p>
          </div>
          
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-10 text-left">
            <div className="flex gap-6 group">
              <span className="font-display text-2xl font-bold text-neutral-600 group-hover:text-white transition-colors">01</span>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-display uppercase tracking-wide">NDA & TestFlight</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">Execute a simple digital NDA to instantly unlock our TestFlight beta channels, inspect deep source code structures, and read our StoreKit integration reports.</p>
              </div>
            </div>
            
            <div className="flex gap-6 group">
              <span className="font-display text-2xl font-bold text-neutral-600 group-hover:text-white transition-colors">02</span>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-display uppercase tracking-wide">Auditing & Escrow</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">We secure all contracts via Escrow.com. We grant a 7-day code audit window to verify the SwiftUI layouts and framework integrations.</p>
              </div>
            </div>
            
            <div className="flex gap-6 group">
              <span className="font-display text-2xl font-bold text-neutral-600 group-hover:text-white transition-colors">03</span>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-display uppercase tracking-wide">App Store Transfer</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">Direct transfer to your Apple Developer Account. All user reviews, active subscriptions, and analytics are preserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Philosophy Section */}
      <section className="w-full max-w-7xl mx-auto px-6 mt-20 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left">
          {/* Left Column: Photo & details */}
          <div className="md:col-span-5 space-y-6">
            <img
              src="/founder_v2.jpg"
              alt="Nitin Kumar, Founder of Nanhu Interactive"
              className="w-full h-auto rounded-2xl border border-border object-contain shadow-md hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-2 transition-all duration-300 select-none cursor-pointer"
            />
            <div className="space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">The architect</span>
              <h3 className="text-xl font-bold font-display uppercase text-foreground">Nitin Kumar</h3>
              <p className="text-xs font-mono uppercase tracking-wide text-foreground">Founder & Lead iOS Architect</p>
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wide mt-1">🏆 Apple Swift Student Challenge Winner (2026)</p>
              
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://www.linkedin.com/in/nitinkumar/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-[11px] font-semibold font-mono uppercase tracking-wider"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a
                  href="https://x.com/nitin_ghss"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-[11px] font-semibold font-mono uppercase tracking-wider"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Philosophy & Manifesto */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">Studio Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display uppercase leading-[1.1] sm:uppercase">
                Engineered for transition. <br />
                MVVM patterns. Zero shortcuts.
              </h2>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                We believe software assets should be a joy to inherit. Our applications are engineered with strict design system tokens, fully isolated target targets, and comprehensive test documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 bg-card border border-border p-5 rounded-2xl">
                <h4 className="text-xs font-mono uppercase font-bold text-foreground">100% Native SwiftUI</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  We don't use cross-platform wrappers. Every interface is built natively using Swift, SwiftUI layouts, and local-first SwiftData storage databases.
                </p>
              </div>

              <div className="space-y-2 bg-card border border-border p-5 rounded-2xl">
                <h4 className="text-xs font-mono uppercase font-bold text-foreground">Zero Technical Debt</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Decoupled architecture makes it easy for any engineer to step in, modify config pipelines, and scale the application smoothly.
                </p>
              </div>

              <div className="space-y-2 bg-card border border-border p-5 rounded-2xl">
                <h4 className="text-xs font-mono uppercase font-bold text-foreground">StoreKit 2 Billing</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Pre-configured, robust in-app purchases and paywalls ready to activate under your Apple Developer Account.
                </p>
              </div>

              <div className="space-y-2 bg-card border border-border p-5 rounded-2xl">
                <h4 className="text-xs font-mono uppercase font-bold text-foreground">Safe Transition Protocol</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  We support buyers with a 7-day technical verification window and a full 30-day handover period to guarantee zero friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-5xl mx-auto px-6 mt-20 md:mt-32 text-center space-y-6">
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight uppercase">
          Got a Vision? <br />Let’s Bring It to Life!
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Connect with our engineering team to audit Swift codebases, schedule calendar walkthroughs, or request TestFlight access.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <Link 
            href="/apps" 
            className="px-10 py-4 bg-primary text-primary-foreground hover:bg-neutral-800 rounded-full font-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
          >
            Browse iOS Portfolio <ChevronRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/contact" 
            className="px-10 py-4 border border-border text-foreground hover:bg-[#eeeeee] rounded-full font-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center"
          >
            Speak with an Engineer
          </Link>
        </div>
      </section>
    </div>
  );
}
