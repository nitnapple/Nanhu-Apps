"use client";

import React from "react";
import Link from "next/link";
import { Lock, ShieldCheck, Cpu, Music, Heart, Calendar, ArrowRight, Eye, Play, Sparkles, CheckCircle, Disc, BarChart3, Database } from "lucide-react";
import { motion } from "framer-motion";

const screenshotFiles = [
  "screen1.png",
  "screen2.png",
  "screen3.png",
  "screen4.png",
  "screen5.png",
  "screen6.png",
  "screen7.png",
  "screen8.png",
  "screen9.png"
];

const screenExplanations = [
  {
    title: "Split Routine Selector",
    desc: "Choose between volume-based splits like Push/Pull/Legs (PPL), Arnold, Upper/Lower, or Full Body routines customizable to your lifting level.",
  },
  {
    title: "Challenge Active Dashboard",
    desc: "Central circular tracking progress panel showing current day of challenge, weight lost, muscle gained, and interactive daily integrity habit checklists.",
  },
  {
    title: "Workout Player & Music",
    desc: "Core active workout panel showing upcoming lifts, a 5-minute quick mental reset meditation, and integrated Apple Music soundtrack controls.",
  },
  {
    title: "Onboarding Hero",
    desc: "Welcomes the user with a bold call to action and establishes the 60-day challenge core pillars: Focus, Discipline, and Transformation.",
  },
  {
    title: "Data & Privacy Console",
    desc: "Local-first settings tab to monitor database size, export/import full progress backup .zip logs, or safely wipe all challenge stats locally.",
  },
  {
    title: "Settings & Target Limits",
    desc: "Customize challenge durations, toggle active workout splits, re-play onboarding, and configure custom notification reminders for daily protein and water goals.",
  },
  {
    title: "Biometrics Profile Ledger",
    desc: "Tracks personal profile details, active streak records, total volume lifted, average intensity charts, and baseline weight targets.",
  },
  {
    title: "iCloud & Health Sync",
    desc: "Set up secure iCloud progress backups, establish Apple Health connection for biometrics write routines, and sync up Apple Music catalog access.",
  },
  {
    title: "Motivation Card Creator",
    desc: "Camera canvas allowing you to snap progress photos, log daily mindset updates, and export branded Motivation cards to social channels.",
  },
];

// Animation Variants (Electric Lime / Carbon Theme)
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
    borderColor: "#d4ff00",
    boxShadow: "0 10px 30px -15px rgba(212, 255, 0, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function Fit60LandingPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans flex flex-col justify-between overflow-x-hidden selection:bg-[#d4ff00] selection:text-black">
      
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
        className="sticky top-0 z-50 bg-[#0F0F0F]/85 backdrop-blur-md border-b border-[#131313] py-4"
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/apps/fit60/logo.png"
              alt="FIT60 Icon"
              className="w-8 h-8 rounded-full border border-[#131313]"
            />
            <span className="font-extrabold italic text-sm tracking-tight text-white uppercase font-mono">FIT60</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#features" className="text-xs text-neutral-400 hover:text-[#d4ff00] transition-colors">Features</a>
            <a href="#showcase" className="text-xs text-neutral-400 hover:text-[#d4ff00] transition-colors">Showcase</a>
            <a href="#specs" className="text-xs text-neutral-400 hover:text-[#d4ff00] transition-colors">Specs</a>
            <Link 
              href="/apps/fit60/privacy" 
              className="text-xs text-neutral-400 hover:text-[#d4ff00] transition-colors"
            >
              Privacy
            </Link>
            <a 
              href="#support" 
              className="bg-[#d4ff00] text-black font-bold px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-transform hover:scale-105"
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
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#d4ff00] to-emerald-500 opacity-25 blur group-hover:opacity-40 transition duration-500"></div>
          <img
            src="/apps/fit60/logo.png"
            alt="FIT60 Premium Logo"
            className="relative w-28 h-28 rounded-full object-cover border-2 border-[#262626] shadow-2xl"
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
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white font-mono uppercase italic leading-none"
          >
            FIT60 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4ff00] to-[#a3c200]">
              60-day discipline.
            </span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-sm md:text-base text-neutral-400 max-w-xl mx-auto font-medium leading-relaxed font-sans"
          >
            FIT60 is a premium 60-day challenge companion and mindset optimizer. Built on SwiftUI Observation, Apple HealthKit sync, Core Haptics, and automated PDF reporting.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4 flex flex-wrap justify-center gap-4 font-mono"
        >
          <span 
            className="border border-[#262626] bg-[#131313] text-neutral-400 px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
            App Store Ready
          </span>
          <a 
            href="#support" 
            className="bg-[#d4ff00] hover:bg-[#b0d400] text-black px-8 py-3.5 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-lg shadow-[#d4ff00]/10 flex items-center gap-2 uppercase tracking-wider"
          >
            Request Audits
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link 
            href="/acquire?app=fit60" 
            className="border border-[#262626] bg-[#131313] text-neutral-300 font-bold px-8 py-3.5 rounded-full text-sm hover:bg-[#d4ff00]/10 hover:text-white transition-colors uppercase tracking-wider"
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
            <span className="text-[10px] uppercase tracking-widest text-[#d4ff00] font-bold font-mono">Mind &amp; Muscle</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono uppercase leading-tight">
              An ecosystem built for absolute peak performance.
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed font-sans">
              Rejects system presets in favor of an immersive dark mode styled after high-end sports instrumentation. Tracks progress across training splits, guided meditations, and hydration metrics.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 font-mono">
              <div className="space-y-2">
                <span className="text-[#d4ff00] font-bold text-2xl">@Observable</span>
                <p className="text-neutral-400 text-xs">Smooth state observation with zero UI rendering latency.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[#d4ff00] font-bold text-2xl">HealthKit</span>
                <p className="text-neutral-400 text-xs">Bi-directional active energy &amp; water logs syncing.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4 text-left">
            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-[#131313] border border-[#262626] p-6 rounded-2xl space-y-2 cursor-pointer transition-colors"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono uppercase tracking-wider">
                <Heart className="w-4 h-4 text-[#d4ff00]" />
                Guided Breathing View
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                6-phase structured cycles scale breathing circles matching 4s inhale and 6s exhale curves.
              </p>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-[#131313] border border-[#262626] p-6 rounded-2xl space-y-2 cursor-pointer transition-colors"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono uppercase tracking-wider">
                <Music className="w-4 h-4 text-[#d4ff00]" />
                Ambient Music Coordinator
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                Local media imports and MPRemoteCommandCenter controls with Apple MusicKit subscriptions.
              </p>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-[#131313] border border-[#262626] p-6 rounded-2xl space-y-2 cursor-pointer transition-colors"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#d4ff00]" />
                Core Haptics Engine
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                Complex CHHapticEngine patterns generating heartbeat sequences and custom breath metrics curves.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Detailed Application Modules */}
        <section className="space-y-12 text-left pt-10 border-t border-[#131313]">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#d4ff00] font-bold font-mono">Modular Capabilities</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-mono uppercase">Core Application Modules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#131313] border border-[#262626] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">1. Bento Grid Dashboard</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                A dynamic streak engine with rest-day grace logic. Tracks protein input (g), hydration values (ml), sleep logs, and meditation stats via quick-adjustment panel drawers.
              </p>
            </div>

            <div className="bg-[#131313] border border-[#262626] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">2. Guided Mindfulness View</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                6-phase structured sequences (Settle In, Deep Breath, Body Scan, Focus, Reset, Finish). Visual guides scale automatically mapped to continuous haptic feedback curves.
              </p>
            </div>

            <div className="bg-[#131313] border border-[#262626] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">3. Performance Workout Logger</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                Configures custom splits (PPL, Arnold, Upper/Lower) with exercise set builders. Features active rest timers (background calculations) and hardware-accelerated looping tutorial players.
              </p>
            </div>

            <div className="bg-[#131313] border border-[#262626] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">4. Apple HealthKit Sync</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                Records workouts as native HKWorkout objects (functionalStrengthTraining) complete with energy burn variables. Synchronizes hydration inputs (ml to liters) to Apple Health.
              </p>
            </div>

            <div className="bg-[#131313] border border-[#262626] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">5. Vocal Guidance (AVSpeech)</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                Ducks active music (AVAudioSession.duckOthers) to read instructions via AVSpeechSynthesizer using lower-pitch relaxing English voices adjusted to guided breathing periods.
              </p>
            </div>

            <div className="bg-[#131313] border border-[#262626] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">6. Swift Charts Analytics</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                Leverages LineMark and PointMark for total training volume progression, body weight trends, and consistency bar charts detailing sets completed per day.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Architecture Flow Chart */}
        <section className="space-y-8 pt-10 border-t border-[#131313] text-left">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#d4ff00] font-bold font-mono">System Synthesis</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-mono uppercase">System Architecture Flow</h2>
            <p className="text-neutral-400 text-sm max-w-xl leading-relaxed">
              Reactive frontend states synchronizing with Apple Health, iCloud KVS containers, and the Python report engine.
            </p>
          </div>

          <div className="w-full bg-[#131313] border border-[#262626] p-6 rounded-2xl flex justify-center items-center shadow-lg">
            <svg viewBox="0 0 800 460" width="100%" className="max-w-[700px] h-auto select-none">
              <defs>
                <marker id="arrow-lime" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#d4ff00" />
                </marker>
                <marker id="arrow-gray" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#86868b" />
                </marker>
              </defs>

              {/* iOS Application Box Boundary */}
              <rect x="20" y="10" width="480" height="425" rx="16" fill="none" stroke="#262626" strokeWidth="1.5" strokeDasharray="6 6" />
              <text x="35" y="32" fill="#86868b" fontSize="10px" fontFamily="monospace" fontWeight="bold" letterSpacing="0.05em">iOS APPLICATION (SWIFT/SWIFTUI)</text>

              {/* UI Layouts */}
              <rect x="50" y="55" width="420" height="60" rx="10" fill="#0f0f0f" stroke="#d4ff00" strokeWidth="1.5" />
              <text x="260" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="11px" fontWeight="bold" fontFamily="monospace">SwiftUI Layouts &amp; Design System</text>
              <text x="260" y="96" textAnchor="middle" fill="#86868b" fontSize="9px" fontFamily="monospace">Glassmorphic Bento elements</text>

              {/* Challenge Manager */}
              <rect x="150" y="170" width="220" height="70" rx="10" fill="#0f0f0f" stroke="#262626" strokeWidth="1.5" />
              <text x="260" y="198" textAnchor="middle" fill="#FFFFFF" fontSize="12px" fontWeight="bold" fontFamily="monospace">ChallengeManager</text>
              <text x="260" y="214" textAnchor="middle" fill="#d4ff00" fontSize="9px" fontFamily="monospace">@Observable State Coordinator</text>

              {/* Arrows UI -> CM */}
              <path d="M 260 115 L 260 164" stroke="#d4ff00" strokeWidth="1.5" markerEnd="url(#arrow-lime)" />
              <text x="270" y="142" textAnchor="start" fill="#d4ff00" fontSize="8px" fontFamily="monospace">STATE MANAGEMENT</text>

              {/* HealthKit Manager */}
              <rect x="40" y="290" width="125" height="50" rx="8" fill="#0f0f0f" stroke="#262626" strokeWidth="1.5" />
              <text x="102" y="314" textAnchor="middle" fill="#FFFFFF" fontSize="10px" fontWeight="bold" fontFamily="monospace">HealthKit Manager</text>
              <text x="102" y="326" textAnchor="middle" fill="#86868b" fontSize="8px" fontFamily="monospace">Biometrics sync</text>

              {/* CloudKit Manager */}
              <rect x="180" y="290" width="150" height="50" rx="8" fill="#0f0f0f" stroke="#262626" strokeWidth="1.5" />
              <text x="255" y="314" textAnchor="middle" fill="#FFFFFF" fontSize="10px" fontWeight="bold" fontFamily="monospace">iCloud KVS Manager</text>
              <text x="255" y="326" textAnchor="middle" fill="#86868b" fontSize="8px" fontFamily="monospace">CloudKit replicates</text>

              {/* Haptic & Audio feedback */}
              <rect x="345" y="290" width="135" height="50" rx="8" fill="#0f0f0f" stroke="#262626" strokeWidth="1.5" />
              <text x="412" y="314" textAnchor="middle" fill="#FFFFFF" fontSize="10px" fontWeight="bold" fontFamily="monospace">Haptics &amp; Speech</text>
              <text x="412" y="326" textAnchor="middle" fill="#86868b" fontSize="8px" fontFamily="monospace">AVSpeechSynthesizer</text>

              {/* CM down arrows */}
              <path d="M 200 240 L 120 284" stroke="#86868b" strokeWidth="1.2" markerEnd="url(#arrow-gray)" />
              <path d="M 260 240 L 260 284" stroke="#86868b" strokeWidth="1.2" markerEnd="url(#arrow-gray)" />
              <path d="M 320 240 L 400 284" stroke="#86868b" strokeWidth="1.2" markerEnd="url(#arrow-gray)" />

              {/* External targets */}
              {/* Apple Health App */}
              <rect x="30" y="380" width="135" height="45" rx="8" fill="#131313" stroke="#262626" strokeWidth="1.5" />
              <text x="97" y="408" textAnchor="middle" fill="#86868b" fontSize="9px" fontFamily="monospace">Apple Health App</text>
              <path d="M 97 340 L 97 374" stroke="#86868b" strokeWidth="1.2" markerEnd="url(#arrow-gray)" />

              {/* iCloud storage */}
              <rect x="180" y="380" width="150" height="45" rx="8" fill="#131313" stroke="#262626" strokeWidth="1.5" />
              <text x="255" y="408" textAnchor="middle" fill="#86868b" fontSize="9px" fontFamily="monospace">iCloud Core Storage</text>
              <path d="M 255 340 L 255 374" stroke="#86868b" strokeWidth="1.2" markerEnd="url(#arrow-gray)" />

              {/* Automation Boundary */}
              <rect x="520" y="10" width="260" height="425" rx="16" fill="none" stroke="#262626" strokeWidth="1.5" strokeDasharray="6 6" />
              <text x="535" y="32" fill="#86868b" fontSize="10px" fontFamily="monospace" fontWeight="bold" letterSpacing="0.05em">AUTOMATION SERVICE</text>

              {/* Python Report Engine */}
              <rect x="540" y="170" width="220" height="70" rx="10" fill="#0f0f0f" stroke="#d4ff00" strokeWidth="1.5" />
              <text x="650" y="198" textAnchor="middle" fill="#FFFFFF" fontSize="12px" fontWeight="bold" fontFamily="monospace">Python Report Engine</text>
              <text x="650" y="214" textAnchor="middle" fill="#86868b" fontSize="9px" fontFamily="monospace">ReportLab layout engine</text>

              {/* PDF Output */}
              <rect x="540" y="320" width="220" height="50" rx="8" fill="#131313" stroke="#262626" strokeWidth="1.5" />
              <text x="650" y="348" textAnchor="middle" fill="#86868b" fontSize="9px" fontFamily="monospace">weekly_mocked_report.pdf</text>
              <path d="M 650 240 L 650 314" stroke="#d4ff00" strokeWidth="1.5" markerEnd="url(#arrow-lime)" />
              <text x="660" y="280" textAnchor="start" fill="#d4ff00" fontSize="8px" fontFamily="monospace">GENERATES</text>
            </svg>
          </div>
        </section>

        {/* Python Report Engine Section */}
        <section className="space-y-8 pt-10 border-t border-[#131313] text-left">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#d4ff00] font-bold font-mono">Report Automation</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-mono uppercase">Standalone Python Report Engine</h2>
            <p className="text-neutral-400 text-sm max-w-xl leading-relaxed">
              Custom PDF parser utilizing the ReportLab layout engine to construct beautifully spaced weekly progress reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-xs leading-relaxed text-neutral-400">
            <div className="bg-[#131313] border border-[#262626] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider text-[#d4ff00]">A. Geometry Coordinate Overrides</h4>
              <p>
                Calculates layouts using top-left page origin setups (matching iOS graphics coordinates systems) rather than standard bottom-up Cartesian formats. Draws UI status lines, tables, and circular gauges programmatically.
              </p>
            </div>

            <div className="bg-[#131313] border border-[#262626] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider text-[#d4ff00]">B. Weekly Report Structure</h4>
              <ul className="space-y-1.5 list-none pl-0 font-mono text-[10px] text-neutral-300">
                <li>• Front Profile Card: Placeholder arrays for body snapshots.</li>
                <li>• Biometric Snapshots: Starting vs. Current Body Mass and BMR.</li>
                <li>• Workout Log Cards: Total Lifted Tonnage (kg) per set.</li>
                <li>• Split Matrix: Targeted muscle groups grids logs.</li>
                <li>• AI Coaching: Contextual prompts based on hydration &amp; sleep counts.</li>
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
          className="space-y-12 text-left pt-10 border-t border-[#131313]"
        >
          <motion.div variants={fadeInUp} className="space-y-3 px-2">
            <span className="text-[10px] uppercase tracking-widest text-[#d4ff00] font-bold font-mono">UI Showroom</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono uppercase">
              Every detail, screen by screen.
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl leading-relaxed">
              Explore the premium, glassmorphic interfaces of FIT60, engineered in SwiftUI and SwiftData.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="relative w-full overflow-hidden"
          >
            {/* Scrollable track containing mockups + descriptions underneath */}
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
                      className="relative w-full border-[8px] border-[#131313] rounded-[40px] overflow-hidden bg-black shadow-2xl ring-1 ring-neutral-800/50"
                    >
                      {/* Dynamic Island Notch */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-[#131313] z-20" />
                      
                      {/* Screen Content */}
                      <div className="relative aspect-[9/19.5] w-full z-10 overflow-hidden bg-[#0c0c0c]">
                        {idx === 0 ? (
                          <video
                            src="/Fit60.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover select-none pointer-events-none"
                          />
                        ) : (
                          <img
                            src={`/apps/fit60/${screenFile}`}
                            alt={`FIT60 Interface Screen ${idx + 1}`}
                            className="w-full h-full object-cover select-none pointer-events-none"
                          />
                        )}
                      </div>
                    </motion.div>

                    {/* App Store Style Metadata directly underneath */}
                    <div className="text-center px-2 space-y-1">
                      <span className="text-[9px] font-black tracking-widest text-[#d4ff00] uppercase font-mono">
                        Screen 0{idx + 1}
                      </span>
                      <h4 className="font-extrabold text-white text-xs tracking-tight">
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

            {/* Subtle swipe indicator */}
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
          className="space-y-8 pt-6 border-t border-[#131313] text-left"
        >
          <motion.div variants={fadeInUp} className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#d4ff00] font-bold font-mono">Specification Matrix</span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white font-mono uppercase">
              Technical Overview
            </h2>
          </motion.div>

          <div className="bg-[#131313] border border-[#262626] rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-neutral-300 font-mono">
                <thead>
                  <tr className="border-b border-[#262626] bg-[#1a1a1a] text-white">
                    <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">Parameter</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">Specification Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]">
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">State Management</td>
                    <td className="px-6 py-3.5">SwiftUI Observation Framework (@Observable)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Local Caching</td>
                    <td className="px-6 py-3.5">Serialized JSON / UserDefaults Persistence</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Haptic Feedback</td>
                    <td className="px-6 py-3.5">Apple Core Haptics (CHHapticEngine heartbeats)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Biometrics Store</td>
                    <td className="px-6 py-3.5">Apple HealthKit Sync (Workouts &amp; dietaryWater)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Cloud Mirroring</td>
                    <td className="px-6 py-3.5">NSUbiquitousKeyValueStore &amp; Ubiquitous Documents</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Voice Guidance</td>
                    <td className="px-6 py-3.5">AVSpeechSynthesizer ducks audio (.duckOthers)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Audio Controller</td>
                    <td className="px-6 py-3.5">MPRemoteCommandCenter &amp; Apple MusicKit integration</td>
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
          className="pt-6 border-t border-[#131313]"
        >
          <motion.div 
            variants={fadeInUp}
            className="py-12 px-6 bg-gradient-to-b from-[#d4ff00]/5 to-transparent border border-[#262626] rounded-3xl text-center space-y-6" 
            id="support"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-mono uppercase">
              FIT60 App Support & Contact
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              Have questions about HealthKit permissions syncing, iCloud transfers, or how to restore your premium purchase subscription? Reach out directly:
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-sm md:text-base font-semibold text-white">
                Email Support:{" "}
                <a 
                  href="mailto:support@nanhuinteractive.dev" 
                  className="text-[#d4ff00] hover:underline transition-colors"
                >
                  support@nanhuinteractive.dev
                </a>
              </p>
              <p className="text-xs md:text-sm text-neutral-400 font-mono">
                Or contact us via Twitter/X:{" "}
                <a 
                  href="https://x.com/nitin_ghss" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[#d4ff00] hover:underline"
                >
                  @nitin_ghss
                </a>
              </p>
            </div>
          </motion.div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="text-center py-12 px-6 border-t border-[#131313] mt-16 text-xs text-neutral-500 space-y-2">
        <p>&copy; 2026 Nanhu Interactive. All rights reserved.</p>
        <p className="space-x-2 font-mono uppercase tracking-wider text-[10px]">
          <Link href="/apps/fit60/privacy" className="text-[#d4ff00] hover:underline">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/" className="text-[#d4ff00] hover:underline">
            Main Website
          </Link>
        </p>
      </footer>
    </div>
  );
}
