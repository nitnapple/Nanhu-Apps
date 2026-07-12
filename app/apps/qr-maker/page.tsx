"use client";

import React from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Lock, ShieldCheck, Cpu, Play, BarChart2, QrCode, FileText, ChevronRight, Layout, Sliders } from "lucide-react";
import { motion } from "framer-motion";
import NdaGate from "../[slug]/nda-gate";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const screenshotFiles = [
  "screen1.png",
  "screen2.png",
  "screen3.png",
  "screen4.png",
  "screen5.png"
];

const screenExplanations = [
  {
    title: "Quick Start & Onboarding",
    desc: "Seamless entry flows showing creators how to build, compile, and distribute custom dynamic QR codes.",
  },
  {
    title: "Dynamic Content Composer",
    desc: "Instantly create new target references specifying website URLs, vCard formats, and activating StoreKit dynamic routes.",
  },
  {
    title: "Style & Preset Studio",
    desc: "Customize style presets using modular roundings, custom dots patterns, and custom branding logo layers.",
  },
  {
    title: "Saved Passes Portfolio",
    desc: "Display active card profiles, inspect scan telemetry details, and easily add passes to Apple Wallet.",
  },
  {
    title: "Scan Analytics Telemetry",
    desc: "Rich charts monitoring weekly scanning click logs, location profiles, and client device splits."
  }
];

// Animation Variants (Indigo / Minimalist Light Theme)
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardHover = {
  hover: {
    y: -5,
    borderColor: "#4f46e5",
    boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.12)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function QrMakerLandingPage() {
  return (
    <div className={`${plusJakartaSans.variable} min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans flex flex-col justify-between overflow-x-hidden selection:bg-[#4f46e5] selection:text-white`}>
      
      {/* CSS Overrides to hide main studio navigation */}
      <style dangerouslySetInnerHTML={{ __html: `
        nav, #global-footer, #global-nav-spacer { display: none !important; }
        body { padding-top: 0 !important; }
      `}} />

      {/* Sticky App Header */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="sticky top-0 z-50 bg-[#ffffff]/85 backdrop-blur-md border-b border-[#e2e8f0] py-4"
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/apps/qr-maker/icon.jpg"
              alt="QR Maker Icon"
              className="w-8 h-8 rounded-xl border border-[#e2e8f0] object-cover"
            />
            <span className="font-bold text-sm tracking-tight text-[#0f172a] uppercase font-mono">QR Maker</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#features" className="text-xs text-neutral-500 hover:text-[#4f46e5] transition-colors">Features</a>
            <a href="#showcase" className="text-xs text-neutral-500 hover:text-[#4f46e5] transition-colors">Showcase</a>
            <a href="#specs" className="text-xs text-neutral-500 hover:text-[#4f46e5] transition-colors">Specs</a>
            <Link 
              href="/apps/qr-maker/privacy" 
              className="text-xs text-neutral-500 hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <a 
              href="#support" 
              className="bg-[#4f46e5] text-white font-bold px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-transform hover:scale-105"
            >
              Support
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto w-full px-6 py-16 md:py-24 text-center flex flex-col items-center space-y-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative group"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#4f46e5] to-indigo-400 opacity-25 blur group-hover:opacity-35 transition duration-500"></div>
          <img
            src="/apps/qr-maker/icon.jpg"
            alt="QR Maker Squircle Logo"
            className="relative w-28 h-28 rounded-2xl object-cover border border-[#e2e8f0] shadow-2xl shadow-[#4f46e5]/5"
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-4"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black tracking-tight text-[#0f172a] uppercase font-mono"
          >
            Design vectors. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-indigo-600">
              Track dynamic codes.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-neutral-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            QR Maker is a high-fidelity utility iOS app to generate customizable vectors, manage libraries, and track dynamic analytics, built with SwiftUI and SwiftData.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4 pt-4"
        >
          <a 
            href="#support" 
            className="bg-[#0f172a] text-white font-bold px-6 py-2.5 rounded-full text-xs hover:bg-[#1e293b] transition-colors shadow-lg"
          >
            Connect Handoff Inquiry
          </a>
          <Link 
            href="/acquire?app=qr-maker" 
            className="border border-[#e2e8f0] bg-white text-[#475569] font-bold px-6 py-2.5 rounded-full text-xs hover:bg-neutral-50 hover:text-[#0f172a] transition-colors"
          >
            Interested &rarr;
          </Link>
        </motion.div>
      </header>

      {/* iPhone screenshots carousel */}
      <section id="showcase" className="w-full bg-[#ffffff] border-y border-[#e2e8f0] py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="text-left space-y-2">
            <span className="text-[10px] font-mono text-[#4f46e5] uppercase tracking-widest">Interface Spotlight</span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase font-mono text-[#0f172a]">App Store Showroom</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
            {screenshotFiles.map((screen, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="space-y-4 text-center md:text-left"
              >
                {/* Phone mockup container */}
                <div className="relative mx-auto w-[160px] sm:w-[180px] border-[5px] border-[#0f172a] rounded-[28px] overflow-hidden bg-black shadow-2xl">
                  {/* Dynamic Island */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-2.5 rounded-full bg-black z-20" />
                  <div className="relative aspect-[9/19.5] w-full z-10 bg-[#f8fafc]">
                    <img
                      src={`/apps/qr-maker/${screen}`}
                      alt={`QR Maker Screenshot ${idx + 1}`}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                  </div>
                </div>
                {/* Text explanation */}
                <div className="space-y-1 mt-2">
                  <h4 className="text-[11px] font-bold text-[#0f172a] font-mono">{screenExplanations[idx].title}</h4>
                  <p className="text-[10px] text-neutral-500 leading-normal">{screenExplanations[idx].desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-5xl mx-auto w-full px-6 py-16 md:py-24 space-y-12">
        <div className="text-left space-y-2">
          <span className="text-[10px] font-mono text-[#4f46e5] uppercase tracking-widest">Architectural Pillars</span>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase font-mono text-[#0f172a]">Core Specifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <motion.div 
            variants={cardHover}
            whileHover="hover"
            className="bg-white border border-[#e2e8f0] p-8 rounded-2xl space-y-4"
          >
            <div className="w-10 h-10 rounded-lg bg-[#4f46e5]/10 border border-[#4f46e5]/20 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-[#4f46e5]" />
            </div>
            <h3 className="text-sm font-bold tracking-tight text-[#0f172a] font-mono">Vector PDF Render Canvas</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Generates offline-first, mathematically precise vector PDFs (perfect for printing on posters/packaging) and high-resolution transparent PNG images using standard core iOS graphics libraries.
            </p>
          </motion.div>

          <motion.div 
            variants={cardHover}
            whileHover="hover"
            className="bg-white border border-[#e2e8f0] p-8 rounded-2xl space-y-4"
          >
            <div className="w-10 h-10 rounded-lg bg-[#4f46e5]/10 border border-[#4f46e5]/20 flex items-center justify-center">
              <BarChart2 className="w-5 h-5 text-[#4f46e5]" />
            </div>
            <h3 className="text-sm font-bold tracking-tight text-[#0f172a] font-mono">Dynamic Destination Routing</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Updates your code targets and URLs instantly on Vercel telemetry databases without changing the generated pattern. Track scans counts, pacing velocity, and device OS distributions safely.
            </p>
          </motion.div>

          <motion.div 
            variants={cardHover}
            whileHover="hover"
            className="bg-white border border-[#e2e8f0] p-8 rounded-2xl space-y-4"
          >
            <div className="w-10 h-10 rounded-lg bg-[#4f46e5]/10 border border-[#4f46e5]/20 flex items-center justify-center">
              <Layout className="w-5 h-5 text-[#4f46e5]" />
            </div>
            <h3 className="text-sm font-bold tracking-tight text-[#0f172a] font-mono">Home Screen WidgetKit</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Fully packaged WidgetKit extension displaying quick scan shortcuts, statistics widgets, or pinning selected QR codes directly to the iOS Lock and Home Screens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detail specs section */}
      <section className="bg-white border-y border-[#e2e8f0] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6">
            <span className="text-[10px] font-mono text-[#4f46e5] uppercase tracking-widest">Dynamic Utilities</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase font-mono text-[#0f172a]">CoreImage & StoreKit 2</h2>
            
            <p className="text-xs text-neutral-500 leading-relaxed">
              QR Maker leverages Apple's native CoreImage filters to render vector code patterns. The layout includes clean customizations, customizable corners, and integrated StoreKit 2 paywalls to unlock premium export parameters.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#f8fafc] flex items-center justify-center shrink-0 border border-[#e2e8f0]">
                  <Sliders className="w-4 h-4 text-[#4f46e5]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold font-mono text-[#0f172a]">Modular Design Customizer</h4>
                  <p className="text-[10px] text-neutral-500">Fine-tune dot size offsets, eye frames, logo placement overlays, and custom colors safely.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#f8fafc] flex items-center justify-center shrink-0 border border-[#e2e8f0]">
                  <Cpu className="w-4 h-4 text-[#4f46e5]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold font-mono text-[#0f172a]">Offline SwiftData Caches</h4>
                  <p className="text-[10px] text-neutral-500">Save drafts offline. Synchronize library assets with private user CloudKit databases dynamically.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 md:p-8 space-y-4">
            <h4 className="text-xs font-bold text-[#0f172a] font-mono flex items-center gap-1.5 uppercase">
              <ShieldCheck className="w-4 h-4 text-[#4f46e5]" />
              Acquisition Transition Ready
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Comes with verified compilations on Xcode targets, full App Store transfer clearance, active TestFlight user pools, and comprehensive local XCTest plans.
            </p>
            <div className="border-t border-[#e2e8f0] pt-4 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-mono">Compile State</span>
                <div className="text-xs font-semibold text-[#0f172a] mt-0.5">iOS 17.0+ / iPadOS 17.0+</div>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-mono">Verification</span>
                <div className="text-xs font-semibold text-[#4f46e5] mt-0.5">XCTest Coverage 92%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & NDA requests */}
      <section id="specs" className="max-w-5xl mx-auto w-full px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Specs list */}
        <div className="md:col-span-7 space-y-6 text-left">
          <h3 className="text-lg font-bold tracking-tight font-mono uppercase text-[#0f172a]">Developer Codebase Audit</h3>
          
          <div className="border border-[#e2e8f0] rounded-2xl bg-white overflow-hidden text-xs">
            <div className="flex justify-between p-4 border-b border-[#e2e8f0]">
              <span className="text-neutral-500">Vector Engines</span>
              <span className="font-mono text-[#0f172a]">CoreImage CIQRCodeGenerator APIs</span>
            </div>
            <div className="flex justify-between p-4 border-b border-[#e2e8f0]">
              <span className="text-neutral-500">Local Database</span>
              <span className="font-mono text-[#0f172a]">SwiftData Model Container Caching</span>
            </div>
            <div className="flex justify-between p-4 border-b border-[#e2e8f0]">
              <span className="text-neutral-500">Subscription Gates</span>
              <span className="font-mono text-[#0f172a]">StoreKit 2 Subscriptions & Paywalls</span>
            </div>
            <div className="flex justify-between p-4 border-b border-[#e2e8f0]">
              <span className="text-neutral-500">iCloud Integration</span>
              <span className="font-mono text-[#0f172a]">CloudKit Private Ubiquitous Sync</span>
            </div>
            <div className="flex justify-between p-4">
              <span className="text-neutral-500">Target Frameworks</span>
              <span className="font-mono text-[#0f172a]">SwiftUI 5.0 / WidgetKit extensions</span>
            </div>
          </div>
        </div>

        {/* NDA Gate */}
        <div id="support" className="md:col-span-5 bg-white border border-[#e2e8f0] p-6 rounded-2xl space-y-6 text-left">
          <div className="w-10 h-10 rounded-lg bg-[#4f46e5]/10 border border-[#4f46e5]/20 flex items-center justify-center">
            <Lock className="w-5 h-5 text-[#4f46e5]" />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold tracking-tight text-[#0f172a] font-mono uppercase">Request Inspection Handoff</h4>
            <p className="text-[11px] text-neutral-500 leading-normal">
              Execute our Mutual Non-Disclosure Agreement to receive immediate access to the private GitHub repository, TestFlight invitations, and verified Xcode compilations.
            </p>
          </div>

          <NdaGate appSlug="qr-maker" appName="QR Maker" />

          <div className="text-[10px] text-neutral-400 text-center leading-normal">
            Security deposit accounts verified through Escrow.com options.
          </div>
        </div>
      </section>

      {/* Sticky footer */}
      <footer className="border-t border-[#e2e8f0] bg-white py-8 text-center text-xs text-neutral-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono uppercase">&copy; {new Date().getFullYear()} Nanhu Apps Studio &mdash; QR Maker Acquisition profile</span>
          <div className="flex gap-4">
            <Link href="/apps/qr-maker/privacy" className="hover:text-[#0f172a] transition-colors">Privacy Policy</Link>
            <Link href="/apps/qr-maker/support" className="hover:text-[#0f172a] transition-colors">Help Center</Link>
            <Link href="/apps" className="hover:text-[#0f172a] transition-colors">Back to Portfolio</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
