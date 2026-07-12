"use client";

import { useState } from "react";
import { Send, Check, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

interface SupportFormProps {
  appName: string;
}

export default function SupportForm({ appName }: SupportFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Technical Help");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.75 },
        colors: ["#0066cc", "#ffffff"],
      });
    }, 1200);
  };

  if (success) {
    return (
      <div className="py-8 text-center space-y-4">
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto">
          <Check className="w-5 h-5 text-emerald-500" />
        </div>
        <h3 className="text-sm font-bold text-[#1d1d1f]">Support Ticket Created</h3>
        <p className="text-xs text-[#86868b] leading-relaxed max-w-xs mx-auto">
          Your request has been logged. An engineer will follow up at {email} within 24 hours.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-xs text-primary font-semibold hover:underline cursor-pointer"
        >
          Submit another ticket
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="space-y-1">
        <label className="text-[10px] font-semibold text-[#86868b] uppercase tracking-wider">Full Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Jean-Luc Picard"
          className="w-full bg-white border border-border rounded-xl px-3 py-2 text-xs text-[#1d1d1f] focus:outline-none focus:border-neutral-400 transition-colors"
        />
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-semibold text-[#86868b] uppercase tracking-wider">Email Address</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. captain@enterprise.com"
          className="w-full bg-white border border-border rounded-xl px-3 py-2 text-xs text-[#1d1d1f] focus:outline-none focus:border-neutral-400 transition-colors"
        />
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-semibold text-[#86868b] uppercase tracking-wider">Inquiry Category</label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full bg-white border border-border rounded-xl px-3 py-2 text-xs text-[#1d1d1f] focus:outline-none focus:border-neutral-400 transition-colors"
        >
          <option value="Technical Help">Technical Issue / Bug</option>
          <option value="Billing / StoreKit">Billing / Subscription Restore</option>
          <option value="Data Privacy">Privacy / HealthKit Inquiry</option>
          <option value="Other">Other Issues</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-semibold text-[#86868b] uppercase tracking-wider">Describe your issue</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Describe the help you need with ${appName}...`}
          className="w-full bg-white border border-border rounded-xl px-3 py-2 text-xs text-[#1d1d1f] focus:outline-none focus:border-neutral-400 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !name || !email || !message}
        className="w-full relative overflow-hidden rounded-full bg-[#1d1d1f] hover:bg-neutral-800 px-4 py-2 text-xs font-semibold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 cursor-pointer shadow-none border-0"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Creating Ticket...
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            Send Support Request
          </>
        )}
      </button>
    </form>
  );
}
