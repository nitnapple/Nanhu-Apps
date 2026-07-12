"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { APPS_DATA } from "@/lib/apps-data";

export default function AppsPage() {
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

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

        {/* Catalog Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <div
                key={app.slug}
                className="flex flex-col justify-between h-full bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-neutral-400/50 hover:scale-[1.01] transition-all duration-300 animate-fade-in-up"
              >
                <div className="space-y-6 text-left">
                  {/* Status & Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          app.acquisitionStatus === "Available"
                            ? "bg-emerald-500 animate-pulse"
                            : app.acquisitionStatus === "Under Contract"
                            ? "bg-amber-500"
                            : "bg-red-500"
                        }`}
                      />
                      <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase font-mono">
                        {app.acquisitionStatus}
                      </span>
                    </div>
                  </div>

                  {/* Icon, Name & Desc */}
                  <div className="space-y-4">
                    <div className="flex gap-4 items-center">
                      <img
                        src={app.icon || `/apps/${app.slug}/icon.jpg`}
                        alt={`${app.name} Icon`}
                        className="w-16 h-16 rounded-xl object-cover border border-border shadow-sm"
                      />
                      <div>
                        <h3 className="text-base font-bold text-foreground font-display">
                          {app.name}
                        </h3>
                        <p className="text-[10px] text-muted-foreground font-semibold font-mono uppercase tracking-wider">{app.tagline}</p>
                        <div className="mt-1 flex items-center gap-1.5">
                          {app.appStoreUrl ? (
                            <a
                              href={app.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[9px] font-bold text-foreground hover:underline bg-neutral-100 hover:bg-neutral-200 px-2 py-0.5 rounded-full transition-colors border border-border"
                            >
                              App Store ↗
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[9px] font-bold text-muted-foreground bg-neutral-100 px-2 py-0.5 rounded-full border border-border">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                      {app.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {app.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] bg-neutral-100 border border-border px-2 py-0.5 rounded-full text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border mt-8 pt-4 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-[9px] text-muted-foreground font-mono uppercase tracking-wider">
                    <div>
                      <div>Dev Saved</div>
                      <div className="text-xs font-semibold text-foreground mt-0.5 font-sans normal-case">
                        {app.hoursSaved}+ Hours
                      </div>
                    </div>
                    <div>
                      <div>Target</div>
                      <div className="text-xs font-semibold text-foreground mt-0.5 font-sans normal-case">
                        {app.buildStatus}
                      </div>
                    </div>
                    <div>
                      <div>Test Coverage</div>
                      <div className="text-xs font-semibold text-foreground mt-0.5 font-sans normal-case">
                        {app.coverage}%
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[9px] text-foreground bg-neutral-100 border border-border px-2.5 py-1.5 rounded-lg font-mono uppercase tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Audited Swift & Preview Compile
                  </div>

                  <Link
                    href={`/apps/${app.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground hover:bg-neutral-800 rounded-full font-mono text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Interested
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
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
