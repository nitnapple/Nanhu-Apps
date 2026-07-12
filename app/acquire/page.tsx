"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ShieldCheck, Award, HelpCircle, Loader2, DollarSign, Briefcase } from "lucide-react";
import { APPS_DATA } from "@/lib/apps-data";
import confetti from "canvas-confetti";
import { useForm, ValidationError } from "@formspree/react";
import { FAQJsonLd } from "@/components/json-ld";

function AcquireForm() {
  const searchParams = useSearchParams();
  const initialApp = searchParams.get("app") || "";

  const [selectedApp, setSelectedApp] = useState(initialApp);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [liquidity, setLiquidity] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [notes, setNotes] = useState("");
  const [state, handleSubmit] = useForm("mpqgeyqb");

  useEffect(() => {
    if (initialApp) {
      setSelectedApp(initialApp);
    }
  }, [initialApp]);

  const handleAppChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedApp(val);
  };

  useEffect(() => {
    if (state.succeeded) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#000000", "#5e5e5e", "#ffffff"],
      });
      // Clear inputs
      setName("");
      setEmail("");
      setSelectedApp("");
      setLiquidity("");
      setOfferPrice("");
      setNotes("");
    }
  }, [state.succeeded]);

  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start bg-background">
      {/* Left Side: Trust signals */}
      <div className="md:col-span-5 space-y-8 text-left animate-fade-in-up">
        <div className="space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
            Acquisition Intake
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display uppercase leading-[1.1]">
            Begin the Handoff
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Initiate the acquisition pipeline for our premium production-grade assets. Our transfer team responds within 12 business hours.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 bg-card border border-border p-5 rounded-2xl hover:border-neutral-400/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-border flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-foreground font-display uppercase tracking-wide">Escrow.com Protection</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                All transactions are handled through standard escrow accounts. Funds are only released upon successful codebase and resource transfer verification.
              </p>
            </div>
          </div>

          <div className="flex gap-4 bg-card border border-border p-5 rounded-2xl hover:border-neutral-400/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-border flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-foreground font-display uppercase tracking-wide">30-Day Transition Support</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Our engineering team handles DNS migration, container deployment on your AWS/Vercel console, and provides direct Slack channels for technical continuity.
              </p>
            </div>
          </div>

          <div className="flex gap-4 bg-card border border-border p-5 rounded-2xl hover:border-neutral-400/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-border flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-foreground font-display uppercase tracking-wide">Looking for custom builds?</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                We accept partner venture briefs. If you want us to build a specific software asset to sell directly to you, check our About page.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form card */}
      <div className="md:col-span-7 animate-fade-in-up">
        <div className="bg-card border border-border rounded-2xl p-8">
          {state.succeeded ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-12 h-12 rounded-full bg-emerald-50/50 border border-emerald-200 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground text-center font-display uppercase">Offer Logged</h2>
                <p className="text-muted-foreground text-xs max-w-md mx-auto leading-relaxed text-center">
                  Thank you. We have logged your interest and signature. An acquisition engineer will email you within 12 hours with structural audit documentation.
                </p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="text-xs text-foreground font-semibold hover:underline cursor-pointer font-mono uppercase tracking-wider"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-foreground font-display uppercase">Letter of Intent Intake</h2>
                <p className="text-xs text-muted-foreground">
                  Please provide verified buyer parameters to request asset transfer schedules.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">Full Name</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Warren Buffett"
                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">Business Email</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="buyer@berkshire.com"
                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">Target Application</label>
                  <select
                    value={selectedApp}
                    required
                    name="selectedApp"
                    onChange={handleAppChange}
                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-neutral-400 transition-colors"
                  >
                    <option value="">Select an application...</option>
                    {APPS_DATA.map((app) => (
                      <option key={app.slug} value={app.slug}>
                        {app.name}
                      </option>
                    ))}
                  </select>
                  <ValidationError prefix="Target Application" field="selectedApp" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">Verified Liquidity Range</label>
                  <select
                    value={liquidity}
                    required
                    name="liquidity"
                    onChange={(e) => setLiquidity(e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-neutral-400 transition-colors"
                  >
                    <option value="">Select range...</option>
                    <option value="5k-25k">$5,000 - $25,000</option>
                    <option value="25k-100k">$25,000 - $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                  <ValidationError prefix="Liquidity Range" field="liquidity" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">Offer Price (USD)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                  <input
                    type="number"
                    required
                    name="offerPrice"
                    value={offerPrice}
                    onChange={(e) => setOfferPrice(e.target.value)}
                    placeholder="Target price"
                    className="w-full pl-8 pr-4 py-2.5 bg-background border border-border rounded-xl text-xs text-foreground focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>
                <ValidationError prefix="Offer Price" field="offerPrice" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">Operational / Migration Requirements</label>
                <textarea
                  rows={4}
                  name="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Specify any custom hosting setups, database staging dependencies, or required engineering support..."
                  className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                />
                <ValidationError prefix="Requirements" field="notes" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
              </div>

              <button
                type="submit"
                disabled={state.submitting || !name || !email || !selectedApp || !liquidity || !offerPrice}
                className="w-full relative overflow-hidden rounded-full bg-primary text-primary-foreground hover:bg-neutral-800 px-4 py-3 text-xs font-semibold uppercase tracking-wider font-mono transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 cursor-pointer shadow-none border-0"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Logging Offer Parameters...
                  </>
                ) : (
                  <>
                    <Briefcase className="w-3.5 h-3.5" />
                    Submit Letter of Intent
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "Can I rename the app?",
    a: "Yes, absolutely. Once the App Store transfer is complete, you own 100% of the intellectual property. You can modify the app name, swap logo icons, adjust color tokens, and publish under your own developer brand."
  },
  {
    q: "Is the App Store listing included?",
    a: "Yes. We execute a native App Store Connect transfer. This preserves your app bundle ID, downloads history, review logs, search rankings, and index placements without interruption."
  },
  {
    q: "Are subscriptions transferable?",
    a: "Yes. In accordance with Apple Developer guidelines, active StoreKit 2 auto-renewable subscriptions, receipt states, and recurring billing tokens transfer cleanly to your account with zero user disruption."
  },
  {
    q: "Can I inspect the code before buying?",
    a: "Yes. After signing a mutual digital NDA, we grant you read-only access to the private GitHub repository and add you to our active TestFlight channels for technical audit."
  },
  {
    q: "How does escrow work?",
    a: "We secure all sales via Escrow.com. You deposit the acquisition funds. Once Escrow.com flags the deposit, we transfer the App Store listing and GitHub source. You have a 7-day inspection window to verify the codebase before funds release."
  },
  {
    q: "What's included after purchase?",
    a: "You receive the production-grade Swift/SwiftUI repository, original Figma layers, TestFlight channels, marketing metadata sheets, privacy policy templates, and 30 days of engineering support."
  },
  {
    q: "Do I get design assets?",
    a: "Yes. Every codebase handover is accompanied by high-fidelity design deliverables, original icons, vector shapes, and App Store display templates."
  },
  {
    q: "Is documentation included?",
    a: "Yes. Each codebase includes comprehensive README guides detailing SwiftData schema setups, third-party hooks, StoreKit 2 paywalls, and deployment steps."
  }
];

function BuyVsBuildCalculator() {
  const [months, setMonths] = useState(4);
  const [rate, setRate] = useState(10000);
  const overhead = 5000;

  const buildCost = months * rate + overhead;
  const acquireCost = 14999; // Benchmark catalog price
  const savings = buildCost - acquireCost;

  return (
    <div className="border-t border-border mt-16 md:mt-24 pt-16 max-w-4xl mx-auto w-full text-left px-6">
      <div className="space-y-2 mb-10 text-center md:text-left">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">Cost comparison</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-display uppercase">Buy vs. Build ROI Calculator</h2>
        <p className="text-xs text-muted-foreground leading-relaxed">Compare the true resource overhead of building internally versus acquiring a production-ready codebase immediately.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Side: Interactive Sliders */}
        <div className="md:col-span-6 space-y-6 bg-card border border-border p-6 rounded-2xl">
          <h3 className="text-xs font-bold text-foreground font-display uppercase tracking-wide">Internal Build Assumptions</h3>
          
          {/* Months Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-foreground font-mono uppercase tracking-wider">
              <span>Estimated Build Time</span>
              <span className="text-foreground">{months} Months</span>
            </div>
            <input
              type="range"
              min="2"
              max="12"
              value={months}
              onChange={(e) => setMonths(parseInt(e.target.value))}
              className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
              <span>2 Months</span>
              <span>12 Months</span>
            </div>
          </div>

          {/* Salary Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-foreground font-mono uppercase tracking-wider">
              <span>Developer Monthly Rate</span>
              <span className="text-foreground">${rate.toLocaleString()}/mo</span>
            </div>
            <input
              type="range"
              min="5000"
              max="20000"
              step="1000"
              value={rate}
              onChange={(e) => setRate(parseInt(e.target.value))}
              className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
              <span>$5,000/mo</span>
              <span>$20,000/mo</span>
            </div>
          </div>

          {/* Fixed Overhead Info */}
          <div className="flex justify-between text-xs font-semibold text-muted-foreground pt-2 border-t border-border">
            <span>Recruiting &amp; QA Overhead</span>
            <span>$5,000 (Fixed)</span>
          </div>
        </div>

        {/* Right Side: Results Comparisons */}
        <div className="md:col-span-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Build Card */}
            <div className="border border-border p-5 rounded-2xl bg-card space-y-2">
              <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest font-mono">Build Internally</span>
              <div className="text-xl md:text-2xl font-bold text-foreground font-display">${buildCost.toLocaleString()}</div>
              <ul className="text-[10px] text-muted-foreground space-y-1.5 pl-1 leading-relaxed">
                <li>&bull; {months} months code cycle</li>
                <li>&bull; Recruitment overhead</li>
                <li>&bull; QA &amp; validation latency</li>
                <li>&bull; Review rejection risks</li>
              </ul>
            </div>

            {/* Acquire Card */}
            <div className="border border-neutral-800 p-5 rounded-2xl bg-neutral-900 text-white space-y-2">
              <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest font-mono">Acquire from Nanhu</span>
              <div className="text-xl md:text-2xl font-bold font-display">${acquireCost.toLocaleString()}</div>
              <ul className="text-[10px] text-neutral-400 space-y-1.5 pl-1 leading-relaxed">
                <li>&bull; <strong>Immediate</strong> codebase handoff</li>
                <li>&bull; Zero recruiting cycles</li>
                <li>&bull; Audited Swift source</li>
                <li>&bull; Passed review connect</li>
              </ul>
            </div>
          </div>

          {/* ROI Savings Banner */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl text-center space-y-1">
            <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest font-mono">Calculated Net Return</span>
            <div className="text-lg md:text-xl font-black text-emerald-600 font-display">
              Saves ${savings.toLocaleString()} &amp; {months} Months
            </div>
            <p className="text-[10px] text-neutral-500 leading-normal">Immediate ownership transition, zero development delay risk.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqSchemaData = faqs.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <div className="border-t border-border mt-16 md:mt-24 pt-16 max-w-4xl mx-auto w-full text-left px-6">
      <FAQJsonLd mainEntity={faqSchemaData} />
      <div className="space-y-2 mb-10 text-center md:text-left">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">Resolve ambiguity</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-display uppercase">Buyer FAQs</h2>
        <p className="text-xs text-muted-foreground leading-relaxed">Frequently asked questions regarding codebase transfer, escrow safety, and technical transition support.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="border-b border-border pb-4 transition-colors">
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between text-left font-bold text-sm md:text-base text-foreground hover:text-black py-2 focus:outline-none transition-colors cursor-pointer"
              >
                <span className="font-display uppercase tracking-wide text-xs">{faq.q}</span>
                <span className={`text-neutral-400 transform transition-transform duration-300 text-xl font-light ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {isOpen && (
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed animate-fade-in font-sans">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AcquirePage() {
  return (
    <div className="relative min-h-screen py-16 md:py-24 bg-background">
      <Suspense fallback={
        <div className="min-h-[50vh] flex flex-col items-center justify-center gap-2 text-muted-foreground text-sm font-mono">
          <Loader2 className="w-6 h-6 animate-spin text-foreground" />
          Loading acquisition interface...
        </div>
      }>
        <div className="space-y-16">
          <AcquireForm />
          <BuyVsBuildCalculator />
          <FAQSection />
        </div>
      </Suspense>
    </div>
  );
}
