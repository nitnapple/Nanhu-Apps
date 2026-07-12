import React from "react";
import { ShieldCheck, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy and NDA Terms | Nanhu Apps Studio",
  description: "Review our Mutual Non-Disclosure Agreement terms and user data privacy practices for secure codebase audits.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 space-y-12 text-left">
        {/* Header */}
        <div className="space-y-4 animate-fade-in-up">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
            Legal & Security
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display uppercase leading-[1.1]">
            Privacy Policy & NDA Terms
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Please read the following guidelines regarding code audits, escrow accounts, and the protection of proprietary IP.
          </p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h3 className="text-base font-bold text-foreground font-display uppercase tracking-wide flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-foreground" />
              1. Mutual Non-Disclosure Agreement (NDA)
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              When you digitally execute an NDA gate on Nanhu Interactive, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground leading-relaxed pl-2 font-mono">
              <li>Keep all codebase architecture, package configurations, and API structures confidential.</li>
              <li>Not duplicate, clone, or redistribute any repository components.</li>
              <li>Scrub any local caches or build profiles if the acquisition is cancelled.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h3 className="text-base font-bold text-foreground font-display uppercase tracking-wide flex items-center gap-2">
              <FileText className="w-5 h-5 text-foreground" />
              2. Transaction & Escrow Protocol
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              All transactions are secured via Escrow.com. Upon signing a Letter of Intent:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground leading-relaxed pl-2 font-mono">
              <li>The buyer deposits full funds in a neutral escrow holding account.</li>
              <li>A 7-day technical verification window is initiated.</li>
              <li>The transfer team relocates assets, domains, and Stripe pipelines.</li>
              <li>Once verified, funds are released to Nanhu Interactive.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
