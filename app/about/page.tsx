import React from "react";
import { CheckCircle2, Cpu, FileText, Settings, ShieldCheck, HeartHandshake } from "lucide-react";

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

export default function AboutPage() {
  const standards = [
    {
      icon: <Cpu className="w-5 h-5 text-foreground" />,
      title: "iOS SDK Architecture",
      description: "We use Apple native frameworks (Swift, SwiftUI, SwiftData, HealthKit, CoreImage) with strict design patterns for zero-effort extensibility."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-foreground" />,
      title: "Rigorous Code Coverage",
      description: "All apps are audited to maintain a minimum 90% Swift test coverage, complete XCTest suites, and full SwiftUI preview coverage."
    },
    {
      icon: <FileText className="w-5 h-5 text-foreground" />,
      title: "Xcode Assets & Docs",
      description: "Every codebase is delivered with complete Xcode project schemas, environment setups, custom icon vectors, and TestFlight beta pools."
    },
    {
      icon: <Settings className="w-5 h-5 text-foreground" />,
      title: "Clean Xcode Targets",
      description: "Clean target dependencies, pre-configured compilation schemes, and isolated asset files are standard. No third-party package pollution."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-foreground" />,
      title: "App Store Connect Ledgers",
      description: "We connect financial dashboard exports directly. Buyers get real-time auditability of StoreKit subscription history and downloads."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-foreground" />,
      title: "Frictionless App Transfer",
      description: "Complete developer account transfer checklists, TestFlight build ownership, code repositories transfer, and 30 days of direct support."
    }
  ];

  return (
    <div className="relative min-h-screen py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="space-y-4 text-left max-w-3xl animate-fade-in-up">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
            Our Studio Model
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground font-display uppercase">
            We build native iOS apps to last, <br />
            then hand over the keys.
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Nanhu Interactive is a venture-backed style software refinery. We build proprietary, native iOS applications with extreme engineering precision, scale them to initial product-market fit, and transition ownership to strategic buyers.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left animate-fade-in-up">
          <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
            <h3 className="text-base font-bold text-foreground font-display uppercase">Why We Build Native Swift</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Cross-platform wrappers lead to poor performance and clunky interfaces. We believe premium apps deserve native SwiftUI execution, leveraging CoreData, HealthKit, and StoreKit to their fullest potential.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Decoupled architecture makes it easy for any developer to step in, scale the app, and continue growing the acquisition.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
            <h3 className="text-base font-bold text-foreground font-display uppercase">The iOS Studio Manifesto</h3>
            <ul className="space-y-2.5 text-xs text-muted-foreground leading-relaxed list-disc list-inside font-mono">
              <li>100% native Swift & SwiftUI codebases.</li>
              <li>Strict offline-first local cache schemas.</li>
              <li>Clean StoreKit billing transitions.</li>
              <li>Preserved App Store ratings on transfer.</li>
            </ul>
          </div>
        </div>

        {/* Studio Standards Checklist */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-2 text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">The refinery blueprint</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-display uppercase">Our Production Standards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {standards.map((std, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-neutral-400/50 transition-colors duration-300">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-100 border border-border flex items-center justify-center">
                    {std.icon}
                  </div>
                  <h4 className="text-xs font-bold text-foreground font-display uppercase tracking-wide">{std.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{std.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Buy Instead of Build Section */}
        <div className="space-y-8 pt-6 border-t border-border animate-fade-in-up">
          <div className="space-y-2 text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">Opportunity Cost</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-display uppercase">Why Buy Instead of Build?</h2>
            <p className="text-muted-foreground text-xs md:text-sm max-w-2xl leading-relaxed">
              Building premium iOS software from scratch takes months of recruitment, architecture decisions, and App Store review uncertainty. Acquiring a proven Nanhu Interactive asset gives you immediate market readiness.
            </p>
          </div>

          <div className="overflow-x-auto border border-border rounded-2xl bg-card">
            <table className="w-full border-collapse text-left text-xs md:text-sm text-muted-foreground">
              <thead>
                <tr className="border-b border-border bg-neutral-100 text-foreground font-bold font-mono uppercase text-[10px] tracking-wider">
                  <th className="p-4 md:p-5">Decision Pillar</th>
                  <th className="p-4 md:p-5">Build Yourself</th>
                  <th className="p-4 md:p-5 text-foreground">Acquire from Nanhu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-neutral-50/50 transition-colors">
                  <td className="p-4 md:p-5 font-semibold text-foreground">Time to Market</td>
                  <td className="p-4 md:p-5">4–8 months average development</td>
                  <td className="p-4 md:p-5 text-foreground font-semibold">Immediate asset ownership & transfer</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 transition-colors">
                  <td className="p-4 md:p-5 font-semibold text-foreground">Resource Overhead</td>
                  <td className="p-4 md:p-5">Hiring, recruiting, and contractor management</td>
                  <td className="p-4 md:p-5 text-foreground font-semibold">No recruitment needed</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 transition-colors">
                  <td className="p-4 md:p-5 font-semibold text-foreground">Engineering Quality</td>
                  <td className="p-4 md:p-5">Higher execution and bug-testing risks</td>
                  <td className="p-4 md:p-5 text-foreground font-semibold">Production-ready, audited Swift codebases</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 transition-colors">
                  <td className="p-4 md:p-5 font-semibold text-foreground">Compliance Risk</td>
                  <td className="p-4 md:p-5">App Store review rejections & uncertainty</td>
                  <td className="p-4 md:p-5 text-foreground font-semibold">Launch-ready assets (passed TestFlight/App Store)</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 transition-colors">
                  <td className="p-4 md:p-5 font-semibold text-foreground">Architecture Decisions</td>
                  <td className="p-4 md:p-5">Managing custom database, API, and package schemas</td>
                  <td className="p-4 md:p-5 text-foreground font-semibold">Proven, clean Model-View-ViewModel structures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-12 border-t border-border items-start text-left animate-fade-in-up">
          {/* Photo Column */}
          <div className="md:col-span-5">
            <img
              src="/founder_v2.jpg"
              alt="Nitin Kumar, Founder of Nanhu Interactive"
              className="w-full h-auto rounded-2xl border border-border object-contain shadow-md hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-2 transition-all duration-300 select-none cursor-pointer"
            />
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">The vision</span>
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-display uppercase">Meet the Founder</p>
              <p className="text-xs md:text-sm font-semibold text-foreground font-mono uppercase tracking-wide mt-1">Nitin Kumar &mdash; Founder & Lead iOS Architect</p>
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

            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              I am a mobile engineer and product designer dedicated to clean architecture, native performance, and aesthetic perfection. With years of experience developing for the Apple ecosystem, I founded Nanhu Interactive to bridge the gap between visionary entrepreneurs and high-quality, pre-built iOS software assets.
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-foreground font-display uppercase">My Philosophy for Building Apps</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                I believe that software should be a joy to read, test, and run. Every line of code is written with the expectation that another engineer will inherit it&mdash;meaning no shortcuts, zero hacky workarounds, and rigorous documentation.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-foreground font-display uppercase">Why Focus on Clean, Acquisition-Ready Codebases?</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                By focusing entirely on production-grade, transfer-ready native codebases, we eliminate technical debt for buyers. We handle the complex plumbing&mdash;StoreKit 2 billing systems, SwiftData local caches, HealthKit syncs, and Apple Sandboxing&mdash;so you can focus entirely on scaling, marketing, and monetization from day one.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
