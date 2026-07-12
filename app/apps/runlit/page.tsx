"use client";

import React from "react";
import Link from "next/link";
import { Lock, ShieldCheck, Cpu, Play, BarChart2, MapPin, Watch, FileText, ChevronRight, Activity, Award, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const screenshotFiles = [
  "screen1_v2.png",
  "screen2.png",
  "screen3.png",
  "screen4.png"
];

const screenExplanations = [
  {
    title: "Runlit Premium Paywall",
    desc: "Clean StoreKit 2 paywall interface displaying subscription plans ($4.99/mo or $29.99/year) unlocking Streak Insurance, advanced analytics, watchOS tracking, and weekly progress PDF reports.",
  },
  {
    title: "Commit to Your Days",
    desc: "A custom onboarding workflow prompt letting runners schedule their weekly target days, tracking current streaks against committed metrics.",
  },
  {
    title: "On-Device Core Permissions",
    desc: "Apple-compliant security onboarding prompts requesting background location coordinates tracking, local push reminders, and Apple HealthKit integration.",
  },
  {
    title: "Workout Mapping & History",
    desc: "Clean database scroll view listing previous runs with individual MapKit snapshots, run distances, and recorded dates synced via SwiftData.",
  }
];

// Animation Variants (Solar Orange / Charcoal Running Theme)
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
    borderColor: "#ff6f3c",
    boxShadow: "0 10px 30px -15px rgba(255, 111, 60, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function RunlitLandingPage() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white font-sans flex flex-col justify-between overflow-x-hidden selection:bg-[#ff6f3c] selection:text-white">
      
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
        className="sticky top-0 z-50 bg-[#08080a]/85 backdrop-blur-md border-b border-[#18181c] py-4"
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/apps/runlit/icon_v3.jpg"
              alt="Runlit Icon"
              className="w-8 h-8 rounded-lg border border-[#2c2c2e] object-cover"
            />
            <span className="font-bold text-sm tracking-tight text-white uppercase font-mono">Runlit</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#features" className="text-xs text-neutral-400 hover:text-[#ff6f3c] transition-colors">Features</a>
            <a href="#showcase" className="text-xs text-neutral-400 hover:text-[#ff6f3c] transition-colors">Showcase</a>
            <a href="#specs" className="text-xs text-neutral-400 hover:text-[#ff6f3c] transition-colors">Specs</a>
            <Link 
              href="/apps/runlit/privacy" 
              className="text-xs text-neutral-400 hover:text-[#ff6f3c] transition-colors"
            >
              Privacy
            </Link>
            <a 
              href="#support" 
              className="bg-[#ff6f3c] text-white font-bold px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-transform hover:scale-105"
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
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#ff6f3c] to-amber-500 opacity-20 blur group-hover:opacity-35 transition duration-500"></div>
          <img
            src="/apps/runlit/icon_v3.jpg"
            alt="Runlit Squircle Logo"
            className="relative w-28 h-28 rounded-2xl object-cover border-2 border-[#2c2c2e] shadow-2xl shadow-[#ff6f3c]/5"
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
            className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase font-mono leading-none"
          >
            Build consistency. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6f3c] to-[#ffa94d]">
              Shield your streak.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Runlit is a high-fidelity native GPS tracking &amp; watchOS workout logging engine. Designed with gamified Streak Guards, lock screen Live Activities, and automated PDF progress report generators.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4 flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#support" 
            className="bg-[#ff6f3c] hover:bg-[#e65e2b] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-lg shadow-[#ff6f3c]/10 flex items-center gap-2 font-mono uppercase tracking-wider"
          >
            Request Audits
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link 
            href="/acquire?app=runlit" 
            className="border border-[#2c2c2e] bg-[#18181c]/50 text-neutral-300 font-bold px-8 py-3.5 rounded-full text-sm hover:bg-[#ff6f3c]/10 hover:text-white transition-colors font-mono uppercase tracking-wider"
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
            <span className="text-[10px] uppercase tracking-widest text-[#ff6f3c] font-bold font-mono">Core Concept</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono uppercase leading-tight">
              A GPS tracker with streak insurance.
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Designed to drive long-term workout habits. Runlit merges precise CoreLocation GPS coordinates with watchOS biometrics sync, lock screen Live Activities, and automated PDF progression sheets.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 font-mono">
              <div className="space-y-2">
                <span className="text-[#ff6f3c] font-bold text-2xl">watchOS</span>
                <p className="text-neutral-400 text-xs">Standalone companion workout app.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[#ff6f3c] font-bold text-2xl">PDF Report</span>
                <p className="text-neutral-400 text-xs">Core Graphics in-memory vector exports.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4 text-left">
            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl space-y-2 cursor-pointer transition-colors"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#ff6f3c]" />
                Dual-Sensor Engine
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Background CoreLocation mapping filters GPS drift while CoreMotion co-processors classify activity states.
              </p>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl space-y-2 cursor-pointer transition-colors"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono uppercase tracking-wider">
                <Watch className="w-4 h-4 text-[#ff6f3c]" />
                Standalone watchOS target
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Logs active calories, duration, and continuous heart rate curves, writing directly to HealthKit stores.
              </p>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl space-y-2 cursor-pointer transition-colors"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono uppercase tracking-wider">
                <Activity className="w-4 h-4 text-[#ff6f3c]" />
                Dynamic Island Widgets
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Locks live workout states, pace charts, and distance progression straight to lock screens via ActivityKit.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Detailed Product Features Section */}
        <section className="space-y-12 text-left pt-10 border-t border-[#18181c]">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#ff6f3c] font-bold font-mono">Engineering Capabilities</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-mono uppercase">Key Product Features</h2>
            <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed">
              Runlit leverages native iOS frameworks to deliver zero-latency GPS metrics, hardware biometrics integration, and automated exports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">1. Dual-Sensor Processor</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Taps CoreLocation background capabilities with a 3-meter distance change filter to limit stationary drift. CoreMotion activity classifier auto-pauses when the co-processor flags the device state as stationary.
              </p>
            </div>

            <div className="bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">2. Standalone watchOS Engine</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Starts native watchOS HKWorkoutSession configurations to maintain active background telemetry. Captures live BPM readings and logs workouts (calories, path data) straight to Apple HealthKit databases.
              </p>
            </div>

            <div className="bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">3. ActivityKit Widgets</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Manages Live Activity lifecycles for Lock Screens and Dynamic Island. Configures Compact, Expanded, and Minimal layouts showcasing active kilometer counts and monospaced pace counters.
              </p>
            </div>

            <div className="bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">4. Core Graphics PDF Generator</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Builds high-resolution progression report files directly in memory via Core Graphics contexts. Draws split graphs, grids, and weekly metric summaries, sharing them instantly via system sheets.
              </p>
            </div>

            <div className="bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">5. MapKit Route Overlay</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Converts coordinate matrices into compact polyline strings for efficient CloudKit storage. Uses asynchronous MKMapSnapshotter APIs to fetch dark-mode static maps and draw vector lines over paths.
              </p>
            </div>

            <div className="bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider">6. Cryptographic StoreKit 2</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Queries App Store products natively. Performs cryptographic receipt verification to unlock monthly/yearly premium tiers, with background listeners keeping track of external family sharing updates.
              </p>
            </div>
          </div>
        </section>

        {/* Coordinator Design Pattern & Service-Manager Architecture */}
        <section className="space-y-8 pt-10 border-t border-[#18181c] text-left">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#ff6f3c] font-bold font-mono">Structural Patterns</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-mono uppercase">Software Architecture</h2>
            <p className="text-neutral-400 text-sm max-w-xl leading-relaxed">
              Clean separation of concerns designed with a Root Coordinator and dedicated hardware managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-[11px] text-neutral-300">
            <div className="bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider text-[#ff6f3c]">1. Navigation Coordinator</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A root router coordinator handles interface state changes between the Video onboarding presentation screen and the home TabBar structure. Binds user settings values to configure Initial database states automatically.
              </p>
            </div>

            <div className="bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider text-[#ff6f3c]">2. Service-Manager Layout</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Isolates hardware integrations into dedicated classes: LocationService (GPS accuracy), MotionClassifier (CoreMotion), HealthSynchronizer (HealthKit session logs), and LiveActivityCoordinator (Lock screen metrics updates).
              </p>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive Section */}
        <section className="space-y-8 pt-10 border-t border-[#18181c] text-left">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#ff6f3c] font-bold font-mono">Deep Dive</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-mono uppercase">Deep Technical Implementation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider text-[#ff6f3c]">Offline-First SwiftData Container Fallback</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Next-generation iCloud CloudKit integration. Local schema targets dynamically sync with CloudKit, keeping iPad/iPhone/Watch data uniform. 
              </p>
              <p className="text-neutral-400 text-xs leading-relaxed">
                If CloudKit initialization throws exception errors due to device configurations or network absences, the app automatically initializes an isolated local container to prevent launch crashes.
              </p>
            </div>

            <div className="space-y-3 bg-[#121216] border border-[#2c2c2e] p-6 rounded-2xl">
              <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wider text-[#ff6f3c]">SwiftData Schema & Cascading Deletes</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Composed of three interconnected SwiftData models: Run, Streak, and Split. Run relates to split stats via strict Cascade deletion rules. If a workout entry is deleted, all split intervals are purged instantly.
              </p>
              <p className="text-neutral-400 text-xs leading-relaxed">
                GPS coordinate maps are compressed into polyline strings before saving, then decoded at runtime to minimize storage.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Identity Section */}
        <section className="space-y-8 pt-10 border-t border-[#18181c] text-left">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#ff6f3c] font-bold font-mono">UX Design Tokens</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-mono uppercase">Premium Visual Identity</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-[#121216] border border-[#2c2c2e] p-4 rounded-xl space-y-1">
              <span className="text-[8px] font-mono uppercase text-neutral-400">Background</span>
              <div className="w-full h-8 rounded-md bg-[#08080a] border border-[#18181c] flex items-center justify-center font-mono text-[9px] text-white">#08080A</div>
            </div>
            <div className="bg-[#121216] border border-[#2c2c2e] p-4 rounded-xl space-y-1">
              <span className="text-[8px] font-mono uppercase text-neutral-400">Accent Color</span>
              <div className="w-full h-8 rounded-md bg-[#ff6f3c] border border-border flex items-center justify-center font-mono text-[9px] text-white">#FF6F3C</div>
            </div>
            <div className="bg-[#121216] border border-[#2c2c2e] p-4 rounded-xl space-y-1">
              <span className="text-[8px] font-mono uppercase text-neutral-400">Layout Fonts</span>
              <div className="w-full h-8 rounded-md bg-[#18181c] border border-[#2c2c2e] flex items-center justify-center font-mono text-[9px] text-white">Monospace</div>
            </div>
            <div className="bg-[#121216] border border-[#2c2c2e] p-4 rounded-xl space-y-1">
              <span className="text-[8px] font-mono uppercase text-neutral-400">Overlay Surfaces</span>
              <div className="w-full h-8 rounded-md bg-[#121216] border border-[#2c2c2e] flex items-center justify-center font-mono text-[9px] text-white">Glassmorphic</div>
            </div>
          </div>
        </section>

        {/* iPhone screenshots carousel */}
        <motion.section 
          id="showcase" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12 text-left pt-10 border-t border-[#18181c]"
        >
          <motion.div variants={fadeInUp} className="space-y-3 px-2">
            <span className="text-[10px] uppercase tracking-widest text-[#ff6f3c] font-bold font-mono">UI Showroom</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono uppercase">
              Every detail, screen by screen.
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl leading-relaxed">
              Explore the premium, dark-themed running companion interfaces of Runlit, engineered in SwiftUI and watchOS.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
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
                <div className="relative mx-auto w-[180px] sm:w-[210px] border-[5px] border-[#2c2c2e] rounded-[28px] overflow-hidden bg-black shadow-2xl">
                  {/* Dynamic Island */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-2.5 rounded-full bg-black z-20" />
                  <div className="relative aspect-[9/19.5] w-full z-10 bg-neutral-950">
                    {idx === 0 ? (
                      <video
                        src="/RunLit.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    ) : (
                      <img
                        src={`/apps/runlit/${screen}`}
                        alt={`Runlit Screenshot ${idx + 1}`}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    )}
                  </div>
                </div>
                {/* Text explanation */}
                <div className="space-y-1 mt-2">
                  <h4 className="text-xs font-bold text-white font-mono">{screenExplanations[idx].title}</h4>
                  <p className="text-[10px] text-neutral-400 leading-normal">{screenExplanations[idx].desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technical Integration Specs */}
        <motion.section 
          id="specs" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8 pt-6 border-t border-[#18181c] text-left"
        >
          <motion.div variants={fadeInUp} className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#ff6f3c] font-bold font-mono">Specification Matrix</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-mono uppercase">
              Technical Overview
            </h2>
          </motion.div>

          <div className="bg-[#121216] border border-[#2c2c2e] rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-neutral-300 font-mono">
                <thead>
                  <tr className="border-b border-[#2c2c2e] bg-[#18181c] text-white">
                    <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">Parameter</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">Specification Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2c2c2e]">
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Programming Language</td>
                    <td className="px-6 py-3.5">Swift 6.0 / Apple watchOS 10 Target</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Layout Framework</td>
                    <td className="px-6 py-3.5">SwiftUI 3.0 / Apple MapKit Overlay</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Local Persistence</td>
                    <td className="px-6 py-3.5">SwiftData (Relational workout Split maps)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Location Telemetry</td>
                    <td className="px-6 py-3.5">CoreLocation Background GPS / CoreMotion Classifier</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Ecosystem Sync</td>
                    <td className="px-6 py-3.5">CloudKit Private Container Sync / NSUbiquitousKeyValueStore</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">PDF Renderings</td>
                    <td className="px-6 py-3.5">Apple Core Graphics In-Memory Contexts</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 font-bold text-white">Subscription Billing</td>
                    <td className="px-6 py-3.5">StoreKit 2 (Cryptographic Receipt Auditing)</td>
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
          className="pt-6 border-t border-[#18181c]"
        >
          <motion.div 
            variants={fadeInUp}
            className="py-12 px-6 bg-gradient-to-b from-[#ff6f3c]/5 to-transparent border border-[#2c2c2e] rounded-3xl text-center space-y-6" 
            id="support"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-mono uppercase">
              Runlit App Support & Contact
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              Have questions about Apple Health permissions, watchOS heart rate sync states, or StoreKit subscription sandboxes? Reach out to us:
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-sm md:text-base font-semibold text-white">
                Email Support:{" "}
                <a 
                  href="mailto:support@nanhuinteractive.dev" 
                  className="text-[#ff6f3c] hover:underline transition-colors"
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
                  className="text-[#ff6f3c] hover:underline"
                >
                  @nitin_ghss
                </a>
              </p>
            </div>
          </motion.div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="text-center py-12 px-6 border-t border-[#18181c] mt-16 text-xs text-neutral-500 space-y-2">
        <p>&copy; 2026 Nanhu Interactive. All rights reserved.</p>
        <p className="space-x-2">
          <Link href="/apps/runlit/privacy" className="text-[#ff6f3c] hover:underline font-mono uppercase tracking-wider">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/" className="text-[#ff6f3c] hover:underline font-mono uppercase tracking-wider">
            Main Website
          </Link>
        </p>
      </footer>
    </div>
  );
}
