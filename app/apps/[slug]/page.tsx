import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Cpu, DollarSign, Terminal, Lock, ChevronRight } from "lucide-react";
import { APPS_DATA } from "@/lib/apps-data";
import { formatCurrency } from "@/lib/utils";
import { Metadata } from "next";
import { ProductJsonLd, SoftwareApplicationJsonLd } from "@/components/json-ld";
import NdaGate from "./nda-gate";
import fs from "fs";
import path from "path";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return APPS_DATA.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = APPS_DATA.find((a) => a.slug === slug);
  if (!app) return { title: "App Not Found" };

  const appUrl = `https://nanhuinteractive.dev/apps/${app.slug}`;
  const appIcon = `https://nanhuinteractive.dev/apps/${app.slug}/icon.jpg`;

  return {
    title: `${app.name} | iOS Codebase Acquisition`,
    description: `${app.description.slice(0, 155)}... Vetted proprietary iOS codebase. Zero technical debt, ready to transfer.`,
    alternates: {
      canonical: appUrl,
    },
    openGraph: {
      title: `${app.name} | iOS Codebase Acquisition`,
      description: app.tagline,
      url: appUrl,
      siteName: "Nanhu Interactive",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: appIcon,
          width: 512,
          height: 512,
          alt: `${app.name} Icon`,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${app.name} | iOS Codebase Acquisition`,
      description: app.tagline,
      images: [appIcon],
    }
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = APPS_DATA.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  const appsDir = path.join(process.cwd(), "public/apps", app.slug);
  const files = fs.readdirSync(appsDir);
  const screenshotFiles = files
    .filter(f => f.startsWith("screen") && (f.endsWith(".png") || f.endsWith(".jpg")))
    .sort();

  // Map schema categories and operating systems
  const getCategoryAndOS = (appSlug: string) => {
    switch (appSlug) {
      case "fit60":
        return { category: "FitnessApplication", os: "iOS, watchOS" };
      case "nanhufx":
        return { category: "MultimediaApplication", os: "iOS" };
      case "qr-maker":
        return { category: "UtilitiesApplication", os: "iOS" };
      case "runlit":
        return { category: "FitnessApplication", os: "iOS, watchOS" };
      default:
        return { category: "SoftwareApplication", os: "iOS" };
    }
  };

  const schemaInfo = getCategoryAndOS(app.slug);

  return (
    <div className="relative min-h-screen bg-background pb-20">
      <SoftwareApplicationJsonLd
        name={app.name}
        description={app.description}
        image={`https://nanhuinteractive.dev/apps/${app.slug}/icon.jpg`}
        operatingSystem={schemaInfo.os}
        applicationCategory={schemaInfo.category}
      />
      {/* Sticky Product Sub-Navbar */}
      <div className="sticky top-12 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-border h-12">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <span className="font-semibold text-xs text-[#1d1d1f]">{app.name}</span>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer hidden sm:inline font-medium">Overview</span>
            <span className="text-[11px] text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer hidden sm:inline font-medium">Tech Specs</span>
            <Link
              href={`/apps/${app.slug}/support`}
              className="text-[11px] text-[#86868b] hover:text-[#1d1d1f] transition-colors font-medium hidden sm:inline"
            >
              Support
            </Link>
            <Link
              href={`/apps/${app.slug}/privacy`}
              className="text-[11px] text-[#86868b] hover:text-[#1d1d1f] transition-colors font-medium hidden sm:inline"
            >
              Privacy
            </Link>
            <Link
              href={`/acquire?app=${app.slug}`}
              className="rounded-full bg-[#0066cc] hover:bg-[#0077ed] text-white px-3 py-1 text-[10px] font-semibold transition-colors"
            >
              Interested
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-10 mt-8">
        {/* Back Link */}
        <Link
          href="/apps"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#86868b] hover:text-[#1d1d1f] transition-colors"
        >
          <ChevronRight className="w-3.5 h-3.5 rotate-180" />
          Back to Portfolio
        </Link>

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-border pb-8">
          <div className="space-y-3 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold bg-[#e6f0fa] border border-[#b3d1ff] text-[#0066cc] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {app.acquisitionStatus}
              </span>
              {app.verifiedRevenue && (
                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-500/5 border border-emerald-500/10 px-2.5 py-0.5 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified StoreKit Revenue
                </span>
              )}
            </div>
            <div className="flex gap-4 items-center mt-2">
               <img
                src={app.icon || `/apps/${app.slug}/icon.jpg`}
                alt={`${app.name} Icon`}
                className="w-16 h-16 rounded-2xl object-cover border border-border shadow-md"
              />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight">
                  {app.name}
                </h1>
                <p className="text-[#86868b] text-sm max-w-2xl leading-relaxed mt-1">
                  {app.tagline}
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  {app.appStoreUrl ? (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0066cc] hover:underline bg-[#0066cc]/5 hover:bg-[#0066cc]/10 px-3 py-1 rounded-full transition-colors border border-[#0066cc]/10"
                    >
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 22c-1.34.05-1.77-.77-3.29-.77-1.52 0-2 .74-3.29.79-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-1 2.94.97.08 2.06-.52 2.83-1.33z"/>
                      </svg>
                      View on App Store
                      <span className="text-[9px] font-normal text-[#86868b] ml-0.5">↗</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#86868b] bg-[#f5f5f7] px-3 py-1 rounded-full border border-border">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      App Store: Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f7] border border-border p-6 rounded-2xl text-left min-w-[240px] space-y-1.5 shadow-sm">
            <div className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider">Acquisition State</div>
            <div className="text-xl font-bold text-[#1d1d1f]">{app.acquisitionStatus}</div>
            <div className="text-[10px] text-[#86868b] leading-relaxed">
              Escrow-secured transfer. App Store Connect handover included.
            </div>
          </div>
        </div>

        {/* Engineering & Dev Saved Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#f5f5f7] border border-border p-5 rounded-2xl text-left space-y-1">
            <div className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider">Development Hours Saved</div>
            <div className="text-2xl font-bold text-[#1d1d1f]">{app.hoursSaved}+ Hours</div>
            <div className="text-[10px] text-primary flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3 h-3" /> Swift codebase
            </div>
          </div>
          <div className="bg-[#f5f5f7] border border-border p-5 rounded-2xl text-left space-y-1">
            <div className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider">Xcode Target Status</div>
            <div className="text-2xl font-bold text-[#1d1d1f]">{app.buildStatus}</div>
            <div className="text-[10px] text-[#86868b]">App Store Transfer Ready</div>
          </div>
          <div className="bg-[#f5f5f7] border border-border p-5 rounded-2xl text-left space-y-1">
            <div className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider">Code Quality Coverage</div>
            <div className="text-2xl font-bold text-[#1d1d1f]">{app.coverage}%</div>
            <div className="text-[10px] text-[#86868b]">Full XCTest suite</div>
          </div>
          <div className="bg-[#f5f5f7] border border-border p-5 rounded-2xl text-left space-y-1">
            <div className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider">Architecture Framework</div>
            <div className="text-2xl font-bold text-[#1d1d1f]">SwiftUI Native</div>
            <div className="text-[10px] text-[#86868b]">Zero legacy frameworks</div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-8 text-left">
            <section className="space-y-4">
              <h2 className="text-base font-bold text-[#1d1d1f] flex items-center gap-1.5 border-b border-border pb-2">
                <ChevronRight className="w-4 h-4 text-primary" />
                iOS App Overview
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="flex-grow space-y-4">
                  <p className="text-[#86868b] text-sm leading-relaxed whitespace-pre-wrap">
                    {app.longDescription}
                  </p>
                </div>
                
                {/* iPhone Device Frame Mockup */}
                <div className="relative mx-auto sm:mx-0 w-[200px] shrink-0 border-[6px] border-[#1d1d1f] rounded-[32px] overflow-hidden bg-black shadow-lg">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-[#1d1d1f] z-20" />
                  
                  {/* Screen Content */}
                  <div className="relative aspect-[9/19.5] w-full z-10 overflow-hidden bg-neutral-950">
                    {app.slug === "fit60" ? (
                      <video
                        src="/Fit60.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : app.slug === "nanhufx" ? (
                      <video
                        src="/NanhuFX.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : app.slug === "qr-maker" ? (
                      <video
                        src="/QR-maker.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : app.slug === "runlit" ? (
                      <video
                        src="/RunLit.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={`/apps/${app.slug}/onboarding.png`}
                        alt={`${app.name} Onboarding Mockup`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-base font-bold text-[#1d1d1f] flex items-center gap-1.5 border-b border-border pb-2">
                <Cpu className="w-4 h-4 text-primary" />
                Technical Implementation
              </h2>
              <div className="bg-[#f5f5f7] border border-border rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider">Swift SDK Frameworks</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {app.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] bg-white border border-[#e5e5e7] px-2.5 py-0.5 rounded text-neutral-700 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider">Code Quality Assurance</div>
                    <div className="text-base font-bold text-[#1d1d1f] mt-1">{app.coverage}% XCTest Coverage</div>
                  </div>
                </div>
                <div className="text-xs text-[#86868b] leading-relaxed">
                  The architecture follows Apple native SwiftUI standards, clean modular targets, pre-packaged test plans, and isolated database schemas using SwiftData.
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-base font-bold text-[#1d1d1f] flex items-center gap-1.5 border-b border-border pb-2">
                <DollarSign className="w-4 h-4 text-primary" />
                Operating Costs
              </h2>
              <div className="bg-[#f5f5f7] border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between text-xs py-2.5 border-b border-border">
                  <span className="text-[#86868b]">Apple Developer Account Membership</span>
                  <span className="font-semibold text-[#1d1d1f]">$8.25 / mo</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2.5 border-b border-border">
                  <span className="text-[#86868b]">Micro-telemetry / Analytics Cloud</span>
                  <span className="font-semibold text-[#1d1d1f]">{formatCurrency(app.monthlyCost - 8.25)} / mo</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2.5 mt-2">
                  <span className="font-bold text-[#1d1d1f]">Total Operating Overhead</span>
                  <span className="font-bold text-primary">{formatCurrency(app.monthlyCost)} / mo</span>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar CTA & TestFlight Gate */}
          <div className="space-y-6 text-left">
            <div className="bg-[#f5f5f7] border border-border rounded-2xl p-6 space-y-6 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-white border border-[#e5e5e7] flex items-center justify-center">
                <Lock className="w-4 h-4 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#1d1d1f]">Inspection Gate</h3>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  To view Xcode target configurations, TestFlight beta testers pool, and StoreKit transaction ledgers, please execute our Mutual Non-Disclosure Agreement.
                </p>
              </div>

              {/* NDA Gate Form component */}
              <NdaGate appSlug={app.slug} appName={app.name} />

              <div className="text-[10px] text-[#86868b] text-center">
                Requires digital signature. Auto-delivered to your intake panel.
              </div>
            </div>

            <div className="bg-[#f5f5f7] border border-border p-5 rounded-2xl space-y-3">
              <h4 className="text-[10px] font-bold text-[#1d1d1f] uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                iOS Refinery Standard
              </h4>
              <p className="text-xs text-[#86868b] leading-relaxed">
                All Nanhu iOS apps are built with native SwiftUI components, zero third-party framework pollution, 90%+ code coverage ratios, and clean App Store Connect transfer routines.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Showcase Showcase Section */}
        {screenshotFiles.length > 0 && (
          <section className="space-y-6 text-left pt-10 border-t border-border">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#1d1d1f] tracking-tight">
                Interface Showcase
              </h2>
              <p className="text-[#86868b] text-xs md:text-sm max-w-xl leading-relaxed">
                Swipe or scroll to explore high-fidelity native layouts, progressive split routines, and active tracking interface modules.
              </p>
            </div>
            <div className="bg-[#f5f5f7] border border-border rounded-[28px] p-6 md:p-10">
              <div className="flex gap-6 overflow-x-auto pb-4">
                {screenshotFiles.map((screenFile, idx) => (
                  <div 
                    key={idx} 
                    className="relative w-[180px] sm:w-[220px] shrink-0 border-[6px] border-[#1d1d1f] rounded-[32px] overflow-hidden bg-black shadow-lg hover:scale-[1.01] transition-transform duration-300"
                  >
                    {/* Dynamic Island Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-[#1d1d1f] z-20" />
                    
                    {/* Screen Content */}
                    <div className="relative aspect-[9/19.5] w-full z-10 overflow-hidden bg-neutral-950">
                      <img
                        src={`/apps/${app.slug}/${screenFile}`}
                        alt={`${app.name} Screen ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <ProductJsonLd
        name={app.name}
        description={app.description}
        image={`https://nanhuinteractive.dev/apps/${app.slug}/og.png`}
        price={app.price}
        currency="USD"
      />
    </div>
  );
}
