"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHidden = pathname.includes("/support") || pathname.includes("/privacy");

  if (isHidden) {
    return null;
  }

  const links = [
    { href: "/apps", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="h-20 w-full shrink-0" id="global-nav-spacer" />
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Nanhu Interactive Logo" className="w-9 h-9 object-contain rounded-full group-hover:opacity-85 transition-opacity" />
          <span className="font-bold text-foreground tracking-tight text-sm uppercase font-mono">
            Nanhu Interactive
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-semibold uppercase tracking-wider font-mono transition-colors hover:text-foreground",
                pathname === link.href ? "text-foreground font-bold" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="/acquire"
            className="flex items-center gap-1.5 rounded-full bg-foreground hover:bg-foreground/90 px-4.5 py-2 text-xs font-semibold font-mono uppercase tracking-wider text-background transition-colors"
          >
            Acquire an App
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-card/95 backdrop-blur-lg px-6 py-6 space-y-4 absolute top-16 left-0 right-0 z-40 shadow-lg">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wider font-mono transition-colors hover:text-foreground",
                  pathname === link.href ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/acquire"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-full bg-foreground px-4 py-2.5 text-xs font-semibold uppercase tracking-wider font-mono text-background hover:bg-foreground/90 transition-colors"
            >
              Acquire an App
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
