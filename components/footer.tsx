"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHidden = pathname.includes("/support") || pathname.includes("/privacy");

  if (isHidden) {
    return null;
  }

  return (
    <footer id="global-footer" className="border-t border-neutral-800 bg-[#1c1b1b] py-10 md:py-16 text-[11px] text-neutral-400 mt-auto">
      {/* Apple-style disclaimers */}
      <div className="max-w-7xl mx-auto px-6 border-b border-neutral-800 pb-6 mb-8 space-y-2.5 leading-relaxed text-neutral-500">
        <p>1. Codebase development hours saved and Swift target compile state metrics are calculated relative to average professional mobile engineering velocity. Handovers are configured to transfer 100% of all intellectual property, design assets, and repository history.</p>
        <p>2. Non-Disclosure Agreement (NDA) signatures are validated dynamically. NDA clearance is mandatory to view full Xcode compile schemas, TestFlight developer beta channels, and detailed transaction records.</p>
        <p>3. Asset transitions are secured via Escrow.com holding frameworks. Standard transition support is restricted to a 30-day technical handover period unless specified otherwise in the definitive asset transfer agreement.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Nanhu Interactive Logo" className="w-6 h-6 object-contain rounded-full opacity-90" />
            <span className="font-semibold text-white tracking-wide text-xs font-display">
              Nanhu Interactive
            </span>
          </div>
          <p className="leading-relaxed max-w-xs text-neutral-400">
            We engineer high-fidelity, acquisition-ready native iOS applications. Clean codebases, verified revenues, and secure handover procedures.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-3 text-xs tracking-tight font-display">Products</h4>
          <ul className="space-y-2">
            <li><Link href="/apps" className="hover:text-white transition-colors">Catalog</Link></li>
            <li><Link href="/apps/qr-maker" className="hover:text-white transition-colors">QR Maker</Link></li>
            <li><Link href="/apps/fit60" className="hover:text-white transition-colors">Fit60</Link></li>
            <li><Link href="/apps/nanhufx" className="hover:text-white transition-colors">NanhuFX</Link></li>
            <li><Link href="/apps/runlit" className="hover:text-white transition-colors">Runlit</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-3 text-xs tracking-tight font-display">Studio</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Refinery Log</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Partner Inquiry</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-3 text-xs tracking-tight font-display">Security</h4>
          <ul className="space-y-2">
            <li><Link href="/acquire" className="hover:text-white transition-colors">Escrow Verification</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">NDA Terms</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-neutral-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Nanhu Interactive. All rights reserved.</p>
        <p>Built for strategic buyers, private equity pools, and SaaS portfolio managers.</p>
      </div>
    </footer>
  );
}
