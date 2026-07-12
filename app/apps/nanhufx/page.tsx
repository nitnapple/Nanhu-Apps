"use client";

import React from "react";
import Link from "next/link";
import { Lock, ShieldCheck, Cpu, Play, BarChart2, Video, Key, ArrowRight, CheckCircle, FileText, Activity } from "lucide-react";
import { motion } from "framer-motion";

const screenshotFiles = [
  "screen1_v2.png",
  "screen2.png",
  "screen3.png",
  "screen4.png",
  "screen5.png",
  "screen6.png",
  "screen7.png",
  "screen8.png"
];

const screenExplanations = [
  {
    title: "Your Script. Your Best Take.",
    desc: "Welcomes the creator with script writer features: write and edit copy, verify microphone inputs with a voice level meter, and trim silences using AI.",
  },
  {
    title: "Script Writer & Library",
    desc: "A neat editor database listing words count, reading times (WPM), and unlimited text scripts synced locally via SwiftData.",
  },
  {
    title: "Session Analytics & Pacing",
    desc: "Outputs consistency charts, consistency percentages (e.g. 92%), longest streaks, and real-time average reading speed metrics.",
  },
  {
    title: "NanhuFX Pro Subscription",
    desc: "App Store paywall displaying monthly ($9.99) and annual ($49.99) pricing tiers, unlocking native 4K UHD exports and voice auto-scroll.",
  },
  {
    title: "Record Studio Console",
    desc: "Allows selection of active scripts from your library and initiates video recording sessions with one tap.",
  },
  {
    title: "Speaking Performance Chart",
    desc: "Renders speaking speed histograms tracking your pacing index across different recording takes.",
  },
  {
    title: "Hardware & Diagnostic Settings",
    desc: "Configures default resolution, frame rate targets, local video disk storage limits, and device thermal states.",
  },
  {
    title: "iCloud Sync & Defaults Settings",
    desc: "Manages user profiles, iCloud container status, subscription tiers, default speeds, and font size scaling.",
  },
];

// Animation Variants (Serif / Amber Teleprompter Theme)
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardHover = {
  hover: {
    y: -4,
    borderColor: "#FFB962",
    boxShadow: "0 10px 30px -15px rgba(255, 185, 98, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function NanhuFXLandingPage() {
  return (
    <div className="min-h-screen bg-[#131314] text-white font-sans flex flex-col justify-between overflow-x-hidden selection:bg-[#FFB962] selection:text-black">
      
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
        className="sticky top-0 z-50 bg-[#131314]/85 backdrop-blur-md border-b border-[#201F20] py-4"
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/apps/nanhufx/icon_v2.jpg"
              alt="NanhuFX Icon"
              className="w-8 h-8 rounded-full border border-[#2c2c2e] object-cover"
            />
            <span className="font-serif font-bold text-sm tracking-tight text-white uppercase">NanhuFX</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#features" className="text-xs text-neutral-400 hover:text-[#FFB962] transition-colors">Features</a>
            <a href="#showcase" className="text-xs text-neutral-400 hover:text-[#FFB962] transition-colors">Showcase</a>
            <a href="#specs" className="text-xs text-neutral-400 hover:text-[#FFB962] transition-colors">Specs</a>
            <Link 
              href="/apps/nanhufx/privacy" 
              className="text-xs text-neutral-400 hover:text-[#FFB962] transition-colors"
            >
              Privacy
            </Link>
            <a 
              href="#support" 
              className="bg-[#FFB962] text-black font-bold px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-transform hover:scale-105"
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
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FFB962] to-amber-600 opacity-20 blur group-hover:opacity-35 transition duration-500"></div>
          <img
            src="/apps/nanhufx/icon_v2.jpg"
            alt="NanhuFX Premium Logo"
            className="relative w-28 h-28 rounded-full object-cover border-2 border-[#2c2c2e] shadow-2xl shadow-[#FFB962]/5"
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
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white font-serif leading-[1.05]"
          >
            Stay focused. <br className="hidden sm:inline" />
            <span className="text-[#FFB962] italic font-normal font-serif">Read naturally.</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-sm md:text-base text-neutral-400 max-w-xl mx-auto font-medium leading-relaxed"
          >
            NanhuFX is a native iOS teleprompter and non-destructive CleanCut™ AI trimming utility. Engineered in Swift 6, SwiftUI, SwiftData, and AVFoundation.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4 flex flex-wrap justify-center gap-4"
        >
          <span 
            className="border border-[#2c2c2e] bg-[#1c1b1c] text-neutral-400 px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 cursor-default font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            App Store: Coming Soon
          </span>
          <a 
            href="#support" 
            className="bg-[#FFB962] hover:bg-[#e0a253] text-black px-8 py-3.5 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-lg shadow-[#FFB962]/10 flex items-center gap-2 font-mono uppercase tracking-wider"
          >
            Request Audits
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link 
            href="/acquire?app=nanhufx" 
            className="border border-[#2c2c2e] bg-[#1c1b1c] text-neutral-300 font-bold px-8 py-3.5 rounded-full text-sm hover:bg-[#FFB962]/10 hover:text-white transition-colors font-mono uppercase tracking-wider"
          >
            Interested
          </Link>
        </motion.div>
      </header>

      {/* Main Grid Content */}
      <main className="max-w-5xl mx-auto w-full px-6 flex-grow py-6 space-y-28">
        
        {/* Core Pillars / Grid */}
        <motion.section 
          id="features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="text-left space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-[#FFB962] font-bold font-mono">The Teleprompter</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-serif leading-tight">
              Elevate your talking-head presence.
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Designed for solo content creators, online educators, and developers. By syncing your script to your raw audio capture buffer in real time, NanhuFX ensures your eyes stay locked on the lens without pacing stress.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 font-mono">
              <div className="space-y-2">
                <span className="text-[#FFB962] font-bold text-2xl">4K UHD</span>
                <p className="text-neutral-400 text-xs">Full-hardware exports up to 60fps.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[#FFB962] font-bold text-2xl">100%</span>
                <p className="text-neutral-400 text-xs">Clean composition with zero watermarks.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4 text-left">
            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl space-y-2 cursor-pointer transition-colors"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-serif uppercase tracking-wide">
                <Play className="w-4 h-4 text-[#FFB962]" />
                Voice-Synced Autoscroll
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Local SFSpeechRecognizer loops tap camera capture inputs to scroll text at your native speaking speed.
              </p>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl space-y-2 cursor-pointer transition-colors"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-serif uppercase tracking-wide">
                <BarChart2 className="w-4 h-4 text-[#FFB962]" />
                Pacing Analytics Ledger
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Analyze reading speed streaks, script words count, consistency indexes, and target recording times.
              </p>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl space-y-2 cursor-pointer transition-colors"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-serif uppercase tracking-wide">
                <Video className="w-4 h-4 text-[#FFB962]" />
                CleanCut™ AI Trimming
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Leverage windowed audio RMS floating checks to automatically detect and trim awkward silences.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Detailed Product Features Section */}
        <section className="space-y-12 text-left pt-10 border-t border-[#201F20]">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#FFB962] font-bold font-mono">Product capabilities</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-serif">Key Product Features</h2>
            <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed">
              NanhuFX is packed with production-grade native APIs to solve the major paintpoints in video recording and script editing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-serif">1. Voice-Synced Autoscroll</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Taps raw PCM buffers directly from the active AVCaptureSession video stream. Feeds frames local-only to Apple SFSpeechRecognizer. A custom sliding-window alignment engine tracks natural pauses and speeds.
              </p>
            </div>

            <div className="bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-serif">2. CleanCut™ AI Trimming</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Analyzes audio signals using a windowed root-mean-square (RMS) algorithm. Automatically marks silences below -40dB lasting longer than 700ms and flags filler words (um, uh, like) for single-tap non-destructive cuts.
              </p>
            </div>

            <div className="bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-serif">3. Dual-Preset Transcoding</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Uses AVVideoCompositionCoreAnimationTool to render complex, high-performance watermarks dynamically. Compresses compositions using high-efficiency HEVC/H.265 pipelines with automatic H.264 fallbacks.
              </p>
            </div>

            <div className="bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-serif">4. iCloud Profile Syncing</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Private CloudKit databases sync configuration values across all device profiles. Implements local fallback states in UserDefaults/SwiftData for complete offline capability with automatic merge conflict resolution.
              </p>
            </div>

            <div className="bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-serif">5. Modern StoreKit 2 Gates</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Integrates StoreKit 2 APIs (Transaction.currentEntitlements) to dynamically gate 4K recording features. Gating alerts present elegant subscription paywalls featuring spring-loaded UI overlays and sandboxing mockups.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Architecture Section */}
        <section className="space-y-8 pt-10 border-t border-[#201F20] text-left">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#FFB962] font-bold font-mono">System Architecture</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-serif">MVVM-Service Architecture</h2>
            <p className="text-neutral-400 text-sm max-w-xl leading-relaxed">
              Fully decoupled layers satisfying Swift 6's strict @Sendable concurrency checks and thread safety bounds.
            </p>
          </div>

          <div className="w-full bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl flex justify-center items-center shadow-lg">
            <svg viewBox="0 0 800 420" width="100%" className="max-w-[700px] h-auto select-none">
              <defs>
                <marker id="arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#FFB962" />
                </marker>
                <marker id="arrow-gray" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#86868b" />
                </marker>
              </defs>

              {/* SwiftUI Views Box */}
              <rect x="200" y="10" width="400" height="75" rx="12" fill="#131314" stroke="#FFB962" strokeWidth="1.5" />
              <text x="400" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="13px" fontWeight="bold" fontFamily="monospace" letterSpacing="0.05em">SwiftUI Views</text>
              <text x="400" y="58" textAnchor="middle" fill="#86868b" fontSize="10px" fontFamily="monospace">(HomeView, SetupView, RecordingView, etc.)</text>

              {/* SwiftUI Views -> ViewModels Arrow */}
              <path d="M 400 85 L 400 134" stroke="#FFB962" strokeWidth="2" markerEnd="url(#arrow-amber)" />
              <text x="410" y="115" textAnchor="start" fill="#FFB962" fontSize="9px" fontFamily="monospace" letterSpacing="0.05em">BINDS &amp; OBSERVES</text>

              {/* ViewModels Box */}
              <rect x="120" y="140" width="560" height="115" rx="12" fill="#131314" stroke="#2c2c2e" strokeWidth="1.5" />
              <text x="400" y="168" textAnchor="middle" fill="#FFFFFF" fontSize="13px" fontWeight="bold" fontFamily="monospace" letterSpacing="0.05em">ViewModels</text>
              <text x="140" y="195" textAnchor="start" fill="#86868b" fontSize="10px" fontFamily="monospace">• CameraSessionManager (Captures &amp; Records)</text>
              <text x="140" y="215" textAnchor="start" fill="#86868b" fontSize="10px" fontFamily="monospace">• TeleprompterScrollController (Scrolls)</text>
              <text x="140" y="235" textAnchor="start" fill="#86868b" fontSize="10px" fontFamily="monospace">• StoreKitManager (Pro Unlock status)</text>

              {/* ViewModels -> Speech Manager Arrow */}
              <path d="M 240 255 L 240 314" stroke="#86868b" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow-gray)" />
              <text x="120" y="290" textAnchor="start" fill="#86868b" fontSize="9px" fontFamily="monospace" letterSpacing="0.05em">(FEEDS BUFFERS)</text>

              {/* ViewModels -> Export Service Arrow */}
              <path d="M 560 255 L 560 314" stroke="#86868b" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow-gray)" />
              <text x="570" y="290" textAnchor="start" fill="#86868b" fontSize="9px" fontFamily="monospace" letterSpacing="0.05em">(TRANSCODES &amp; DOWNSCALES)</text>

              {/* Speech Manager Box */}
              <rect x="50" y="320" width="320" height="85" rx="12" fill="#131314" stroke="#2c2c2e" strokeWidth="1.5" />
              <text x="210" y="348" textAnchor="middle" fill="#FFFFFF" fontSize="12px" fontWeight="bold" fontFamily="monospace" letterSpacing="0.05em">Speech Manager</text>
              <text x="210" y="372" textAnchor="middle" fill="#86868b" fontSize="10px" fontFamily="monospace">(SFSpeechRecognizer local streams)</text>

              {/* Export Service Box */}
              <rect x="430" y="320" width="320" height="85" rx="12" fill="#131314" stroke="#2c2c2e" strokeWidth="1.5" />
              <text x="590" y="348" textAnchor="middle" fill="#FFFFFF" fontSize="12px" fontWeight="bold" fontFamily="monospace" letterSpacing="0.05em">Export Service</text>
              <text x="590" y="372" textAnchor="middle" fill="#86868b" fontSize="10px" fontFamily="monospace">(AVAssetExportSession + composition)</text>
            </svg>
          </div>
        </section>

        {/* Engineering Challenges Section */}
        <section className="space-y-8 pt-10 border-t border-[#201F20] text-left">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#FFB962] font-bold font-mono">Solved Bottlenecks</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-serif">Key Engineering Challenges Solved</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl">
              <h4 className="font-bold text-white text-sm font-serif">A. Concurrent Audio Stream Handling</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Running a standard AVAudioEngine audio pipeline simultaneously with high-resolution video recording frequently causes audio dropout errors or session lockouts on Apple devices. 
              </p>
              <p className="text-[#FFB962] text-[11px] leading-relaxed">
                <strong>Solution:</strong> We tapped directly into the AVCaptureSession recording pipeline using AVCaptureAudioDataOutput. These raw audio PCM streams are fed concurrently to SFSpeechRecognizer with zero recording overhead.
              </p>
            </div>

            <div className="space-y-3 bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl">
              <h4 className="font-bold text-white text-sm font-serif">B. Swift 6 Concurrency Compliance</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Safely sharing camera frames, hardware buffers, and persistent database states between background capture threads and the MainActor UI thread under Swift 6's strict compiler requirements.
              </p>
              <p className="text-[#FFB962] text-[11px] leading-relaxed">
                <strong>Solution:</strong> Encapsulated hardware controls inside actor-isolated coordinators, utilizing main-actor bound view model bindings and strict Sendable wrapper objects for capture buffer elements.
              </p>
            </div>
          </div>
        </section>

        {/* Project Source Code Layout */}
        <section className="space-y-8 pt-10 border-t border-[#201F20] text-left">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#FFB962] font-bold font-mono">Source code tree</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-serif">Source Code Organization</h2>
            <p className="text-neutral-400 text-xs md:text-sm max-w-xl leading-relaxed">
              Standardized Xcode file layout optimized for structural inspection and framework audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-[11px] text-neutral-300">
            <div className="bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl space-y-3">
              <h5 className="font-bold text-white uppercase text-[10px] tracking-wider text-[#FFB962] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> Models/
              </h5>
              <p className="text-neutral-400 leading-relaxed text-[10px]">
                Persistent schemas managed via SwiftData: Script.swift, RecordingItem.swift.
              </p>
            </div>

            <div className="bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl space-y-3">
              <h5 className="font-bold text-white uppercase text-[10px] tracking-wider text-[#FFB962] flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> Services/
              </h5>
              <ul className="space-y-1 text-neutral-400 text-[10px] pl-0 list-none">
                <li>• AudioSessionManager.swift</li>
                <li>• CleanCutAnalyzer.swift</li>
                <li>• CloudKitManager.swift</li>
                <li>• ExportService.swift</li>
                <li>• SpeechRecognizerManager.swift</li>
                <li>• ThermalMonitor.swift</li>
              </ul>
            </div>

            <div className="bg-[#1c1b1c] border border-[#2c2c2e] p-6 rounded-2xl space-y-3">
              <h5 className="font-bold text-white uppercase text-[10px] tracking-wider text-[#FFB962] flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" /> Views/
              </h5>
              <ul className="space-y-1 text-neutral-400 text-[10px] pl-0 list-none">
                <li>• CleanCutView.swift</li>
                <li>• PreRecordSetupView.swift</li>
                <li>• RecordingView.swift</li>
                <li>• UserProfileView.swift</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interface Showcase Gallery (Apple Style) */}
        <motion.section 
          id="showcase" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12 text-left pt-10 border-t border-[#201F20]"
        >
          <motion.div variants={fadeInUp} className="space-y-3 px-2">
            <span className="text-[10px] uppercase tracking-widest text-[#FFB962] font-bold font-mono">UI Showroom</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-serif">
              Every detail, screen by screen.
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl leading-relaxed">
              Explore the premium, Amber-themed interfaces of NanhuFX, engineered in SwiftUI and SwiftData.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="relative w-full overflow-hidden"
          >
            {/* Scrollable snap carousel */}
            <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-none px-2 scroll-smooth">
              {screenshotFiles.map((screenFile, idx) => {
                const explanation = screenExplanations[idx] || { title: `Screen ${idx+1}`, desc: "Explore core interfaces." };
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: Math.min(idx * 0.08, 0.4), ease: "easeOut" }}
                    className="snap-center shrink-0 w-[240px] sm:w-[270px] flex flex-col items-center space-y-5"
                  >
                    {/* Device Frame */}
                    <motion.div 
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="relative w-full border-[8px] border-[#201F20] rounded-[40px] overflow-hidden bg-black shadow-2xl ring-1 ring-neutral-800/40"
                    >
                      {/* Dynamic Island Notch */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-[#201F20] z-20" />
                      
                      {/* Screen Content */}
                      <div className="relative aspect-[9/19.5] w-full z-10 overflow-hidden bg-[#131314]">
                        {idx === 0 ? (
                          <video
                            src="/NanhuFX.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover select-none pointer-events-none"
                          />
                        ) : (
                          <img
                            src={`/apps/nanhufx/${screenFile}`}
                            alt={`NanhuFX Interface Screen ${idx + 1}`}
                            className="w-full h-full object-cover select-none pointer-events-none"
                          />
                        )}
                      </div>
                    </motion.div>

                    {/* App Store style details */}
                    <div className="text-center px-2 space-y-1">
                      <span className="text-[9px] font-black tracking-widest text-[#FFB962] uppercase font-mono">
                        Screen 0{idx + 1}
                      </span>
                      <h4 className="font-bold text-white text-xs tracking-tight">
                        {explanation.title}
                      </h4>
                      <p className="text-neutral-400 text-[10px] leading-relaxed max-w-[210px] mx-auto">
                        {explanation.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex justify-center gap-1.5 mt-2">
              <span className="text-[10px] text-neutral-500 font-semibold tracking-wider uppercase animate-pulse font-mono">
                Scroll to swipe &rarr;
              </span>
            </div>
          </motion.div>
        </motion.section>

        {/* Technical Integration Specs */}
        <motion.section 
          id="specs" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8 pt-6 border-t border-[#201F20] text-left"
        >
          <motion.div variants={fadeInUp} className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#FFB962] font-bold font-mono">Specification Matrix</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-serif">
              Technical Overview
            </h2>
          </motion.div>

          <div className="bg-[#1c1b1c] border border-[#2c2c2e] rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-neutral-300 font-mono">
                <thead>
                  <tr className="border-b border-[#2c2c2e] bg-[#201F20] text-white">
                    <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">Parameter</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">Specification Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2c2c2e]">
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Programming Language</td>
                    <td className="px-6 py-3.5">Swift 6.0 (Strict Concurrency Enabled)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Layout System</td>
                    <td className="px-6 py-3.5">SwiftUI 3.0 / Apple Core Graphics</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Local Persistence</td>
                    <td className="px-6 py-3.5">SwiftData (Local Caching & Schema Migrations)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Audio Processing</td>
                    <td className="px-6 py-3.5">AVCaptureAudioDataOutput Raw PCM Tapping</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Cloud Syncing</td>
                    <td className="px-6 py-3.5">CloudKit (Private Database Containers)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Video Compositions</td>
                    <td className="px-6 py-3.5">AVVideoCompositionCoreAnimationTool Watermarking</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Monetization Engine</td>
                    <td className="px-6 py-3.5">StoreKit 2 Subscriptions (In-App paywalls)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Support Ticket Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="pt-6 border-t border-[#201F20]"
        >
          <motion.div 
            variants={fadeInUp}
            className="py-12 px-6 bg-gradient-to-b from-[#FFB962]/5 to-transparent border border-[#2c2c2e] rounded-3xl text-center space-y-6" 
            id="support"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-serif">
              NanhuFX App Support & Contact
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              Have questions about speech recognition permissions, 4K camera toggles, CloudKit backups, or subscription billing restores? Reach out:
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-sm md:text-base font-semibold text-white">
                Email Support:{" "}
                <a 
                  href="mailto:support@nanhuinteractive.dev" 
                  className="text-[#FFB962] hover:underline transition-colors"
                >
                  support@nanhuinteractive.dev
                </a>
              </p>
              <p className="text-xs md:text-sm text-neutral-400">
                Or contact us via Twitter/X:{" "}
                <a 
                  href="https://x.com/nitin_ghss" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[#FFB962] hover:underline"
                >
                  @nitin_ghss
                </a>
              </p>
            </div>
          </motion.div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="text-center py-12 px-6 border-t border-[#201F20] mt-16 text-xs text-neutral-500 space-y-2">
        <p>&copy; 2026 Nanhu Interactive. All rights reserved.</p>
        <p className="space-x-2">
          <Link href="/apps/nanhufx/privacy" className="text-[#FFB962] hover:underline font-mono uppercase tracking-wider">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/" className="text-[#FFB962] hover:underline font-mono uppercase tracking-wider">
            Main Website
          </Link>
        </p>
      </footer>
    </div>
  );
}
