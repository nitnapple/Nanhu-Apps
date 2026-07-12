"use client";

import { useState, useEffect } from "react";
import { Mail, MessageSquare, Send, Check, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("mpqgeyqb");

  useEffect(() => {
    if (state.succeeded) {
      confetti({
        particleCount: 50,
        spread: 40,
        origin: { y: 0.7 },
        colors: ["#000000", "#5e5e5e", "#ffffff"],
      });
      // Clear inputs on success
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }, [state.succeeded]);

  return (
    <div className="relative min-h-screen py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        {/* Left info */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
              Get in Touch
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display uppercase leading-[1.1]">
              Connect with our Team
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Have questions about security deposits, custom software audits, or contract terms? Drop us a note or coordinate a direct developer briefing.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Mail className="w-4 h-4 text-foreground" />
              <span className="font-mono">acquisitions@nanhu.studio</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <MessageSquare className="w-4 h-4 text-foreground" />
              <span className="font-mono">Typical response time: Under 12 Hours</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="animate-fade-in-up">
          <div className="bg-card border border-border rounded-2xl p-8">
            {state.succeeded ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-base font-bold text-foreground font-display uppercase tracking-wide">Message Dispatched</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto text-center font-sans">
                  Your inquiry has been signed. A Nanhu studio partner will reach out shortly.
                </p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="text-xs text-foreground font-semibold hover:underline cursor-pointer font-mono uppercase tracking-wider"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">Full Name</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jean-Luc Picard"
                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">Email Address</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. captain@enterprise.com"
                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">Inquiry Subject</label>
                  <input
                    type="text"
                    required
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Venture Partnership proposal"
                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">Message Description</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write details of your inquiry..."
                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting || !name || !email || !message}
                  className="w-full relative overflow-hidden rounded-full bg-primary text-primary-foreground hover:bg-neutral-800 px-4 py-3 text-xs font-semibold uppercase tracking-wider font-mono transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 cursor-pointer shadow-none border-0"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Dispatch Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
