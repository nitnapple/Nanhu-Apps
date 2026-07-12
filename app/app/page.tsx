"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { APPS_DATA } from "@/lib/apps-data";
import { motion } from "framer-motion";

export default function AppCoverFlowPage() {
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Extract all unique tech stack elements for the filter bar
  const allTech = Array.from(
    new Set(APPS_DATA.flatMap((app) => app.techStack))
  );

  const filteredApps = APPS_DATA.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.tagline.toLowerCase().includes(search.toLowerCase()) ||
      app.description.toLowerCase().includes(search.toLowerCase());

    const matchesTech = selectedTech ? app.techStack.includes(selectedTech) : true;

    return matchesSearch && matchesTech;
  });

  const safeActiveIndex = Math.min(
    Math.max(0, activeIndex),
    Math.max(0, filteredApps.length - 1)
  );

  // Reset active index if it goes out of bounds when filters change
  useEffect(() => {
    if (activeIndex >= filteredApps.length) {
      setActiveIndex(0);
    }
  }, [filteredApps.length, activeIndex]);

  const activeApp = filteredApps[safeActiveIndex];

  return (
    <div className="relative min-h-screen py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-4 text-left max-w-3xl animate-fade-in-up">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
            Active Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-display uppercase">
            Refined Software Assets
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Explore our collection of native iOS applications. All properties undergo rigorous static analysis and target compile verification before being listed.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center bg-card border border-border p-4 rounded-2xl animate-fade-in-up">
          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search codebases..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-neutral-400 transition-colors"
            />
          </div>

          {/* Tech Stack Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mr-2 font-semibold font-mono">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter Tech:
            </div>
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                selectedTech === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:bg-neutral-100 hover:text-foreground"
              }`}
            >
              All Tech
            </button>
            {allTech.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedTech === tech
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border text-muted-foreground hover:bg-neutral-100 hover:text-foreground"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Cover Flow Selector */}
        {filteredApps.length > 0 ? (
          <div className="flex flex-col items-center gap-12 w-full animate-fade-in-up">
            {/* Cover Flow Slider */}
            <div className="relative h-[180px] sm:h-[220px] md:h-[260px] w-full flex items-center justify-center overflow-visible preserve-3d">
              {filteredApps.map((app, i) => {
                const offset = i - safeActiveIndex;
                const isCenter = offset === 0;
                return (
                  <motion.div
                    key={app.slug}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: 1000,
                    }}
                    animate={{
                      x: offset * 110, // horizontal separation distance
                      scale: 1 - Math.abs(offset) * 0.18,
                      rotateY: offset * -35,
                      z: -Math.abs(offset) * 150,
                      zIndex: 10 - Math.abs(offset),
                      opacity: 1 - Math.abs(offset) * 0.35,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    onClick={() => setActiveIndex(i)}
                    className="absolute w-[90px] sm:w-[120px] md:w-[150px] aspect-square flex flex-col items-center justify-start overflow-visible cursor-pointer"
                  >
                    {/* Icon Container */}
                    <div className="relative w-full h-full rounded-[22%] overflow-hidden bg-[#1e1e1f] shadow-2xl border border-border">
                      <img
                        src={app.icon || `/apps/${app.slug}/icon.jpg`}
                        alt={`${app.name} Icon`}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    </div>
                    
                    {/* Shadow underneath icon */}
                    <div 
                      className="absolute -bottom-6 w-[90%] h-3 rounded-[50%] bg-black/50 blur-md pointer-events-none"
                      style={isCenter ? {} : { transform: "rotateX(75deg)" }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + filteredApps.length) % filteredApps.length)}
                className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
              <div className="flex gap-2">
                {filteredApps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === safeActiveIndex ? "bg-foreground w-6" : "bg-neutral-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % filteredApps.length)}
                className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Active App Details Panel */}
            {activeApp && (
              <div className="w-full max-w-2xl bg-card border border-border rounded-3xl p-6 md:p-10 shadow-xl transition-all duration-300 text-left">
                <div className="space-y-6">
                  {/* Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          activeApp.acquisitionStatus === "Available"
                            ? "bg-emerald-500 animate-pulse"
                            : activeApp.acquisitionStatus === "Under Contract"
                            ? "bg-amber-500"
                            : "bg-red-500"
                        }`}
                      />
                      <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase font-mono">
                        {activeApp.acquisitionStatus}
                      </span>
                    </div>
                  </div>

                  {/* App info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display">
                        {activeApp.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-semibold font-mono uppercase tracking-wider mt-1">{activeApp.tagline}</p>
                      <div className="mt-2 flex items-center gap-1.5">
                        {activeApp.appStoreUrl ? (
                          <a
                            href={activeApp.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-foreground hover:underline bg-neutral-100 hover:bg-neutral-200 px-3 py-1 rounded-full transition-colors border border-border"
                          >
                            App Store ↗
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-muted-foreground bg-neutral-100 px-3 py-1 rounded-full border border-border">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {activeApp.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeApp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] bg-neutral-100 border border-border px-2.5 py-1 rounded-full text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border mt-8 pt-6 flex flex-col gap-6">
                  {/* Key Stats */}
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                    <div>
                      <div>Dev Saved</div>
                      <div className="text-sm font-semibold text-foreground mt-0.5 font-sans normal-case">
                        {activeApp.hoursSaved}+ Hours
                      </div>
                    </div>
                    <div>
                      <div>Target</div>
                      <div className="text-sm font-semibold text-foreground mt-0.5 font-sans normal-case">
                        {activeApp.buildStatus}
                      </div>
                    </div>
                    <div>
                      <div>Test Coverage</div>
                      <div className="text-sm font-semibold text-foreground mt-0.5 font-sans normal-case">
                        {activeApp.coverage}%
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-foreground bg-neutral-100 border border-border px-3 py-2 rounded-lg font-mono uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Audited Swift & Preview Compile
                  </div>

                  <Link
                    href={`/apps/${activeApp.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground hover:bg-neutral-800 rounded-full font-mono text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Interested
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-card">
            <p className="text-muted-foreground text-xs">No applications found matching your filters.</p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedTech(null);
              }}
              className="text-xs text-foreground font-semibold mt-2 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
