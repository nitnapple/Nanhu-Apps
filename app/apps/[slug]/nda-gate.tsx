"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Check, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

interface NdaGateProps {
  appSlug: string;
  appName: string;
}

export default function NdaGate({ appSlug, appName }: NdaGateProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !agreed) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setUnlocked(true);
      
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#0066cc", "#ffffff"],
      });

      setTimeout(() => {
        router.push(`/acquire?app=${appSlug}`);
      }, 2500);
    }, 1500);
  };

  if (unlocked) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-xl text-center space-y-3">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto">
          <Check className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="space-y-1 text-center">
          <div className="text-sm font-bold text-[#1d1d1f]">NDA Executed Successfully</div>
          <p className="text-xs text-[#86868b]">
            Unlocking audit ledger. Redirecting to acquisition panel...
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1 text-left">
        <label className="text-[10px] font-semibold text-[#86868b] uppercase tracking-wider">Full Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Warren Buffett"
          className="w-full bg-white border border-border rounded-xl px-3 py-2.5 text-xs text-[#1d1d1f] focus:outline-none focus:border-neutral-400 transition-colors"
        />
      </div>

      <div className="space-y-1 text-left">
        <label className="text-[10px] font-semibold text-[#86868b] uppercase tracking-wider">Business Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. buyer@berkshire.com"
          className="w-full bg-white border border-border rounded-xl px-3 py-2.5 text-xs text-[#1d1d1f] focus:outline-none focus:border-neutral-400 transition-colors"
        />
      </div>

      <label className="flex items-start gap-2.5 cursor-pointer group text-left">
        <input
          type="checkbox"
          required
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 rounded border-border bg-white text-primary focus:ring-0 focus:ring-offset-0 cursor-pointer"
        />
        <span className="text-[10px] text-[#86868b] group-hover:text-[#1d1d1f] transition-colors leading-relaxed">
          I accept the terms of the Mutual Non-Disclosure Agreement for inspecting the {appName} codebase and financials.
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting || !name || !email || !agreed}
        className="w-full relative overflow-hidden rounded-full bg-[#1d1d1f] hover:bg-neutral-800 px-4 py-2.5 text-xs font-semibold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 cursor-pointer shadow-none border-0"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Executing Digital Signature...
          </>
        ) : (
          <>
            <ShieldCheck className="w-3.5 h-3.5" />
            Sign NDA & Unlock Codebase
          </>
        )}
      </button>
    </form>
  );
}
