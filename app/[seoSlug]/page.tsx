import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { SEO_LANDINGS } from "@/lib/seo-landing-data";
import { APPS_DATA } from "@/lib/apps-data";
import { marked } from "marked";
import { Metadata } from "next";

interface Props {
  params: Promise<{ seoSlug: string }>;
}

export async function generateStaticParams() {
  const slugs = Object.keys(SEO_LANDINGS);
  return slugs.map((slug) => ({
    seoSlug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seoSlug } = await params;
  const data = SEO_LANDINGS[seoSlug];
  if (!data) return { title: "Page Not Found" };

  return {
    title: data.metaTitle,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `https://nanhuinteractive.dev/${seoSlug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.description,
      url: `https://nanhuinteractive.dev/${seoSlug}`,
      siteName: "Nanhu Interactive",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://nanhuinteractive.dev/logo.png",
          width: 512,
          height: 512,
          alt: "Nanhu Interactive Logo",
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.description,
      images: ["https://nanhuinteractive.dev/logo.png"],
    }
  };
}

export default async function SEOLandingPage({ params }: Props) {
  const { seoSlug } = await params;
  const data = SEO_LANDINGS[seoSlug];

  if (!data) {
    notFound();
  }

  // Generate html content via marked library
  const htmlContent = await marked.parse(data.content);

  // Get active portfolio apps to feature alongside the SEO content
  const featuredApps = APPS_DATA.slice(0, 3);

  return (
    <div className="relative min-h-screen py-16 md:py-24 bg-background">
      <BackgroundGrid />

      <div className="max-w-4xl mx-auto px-6 space-y-12 text-left relative z-10">
        {/* Back Link */}
        <Link
          href="/apps"
          className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-wider animate-fade-in-up"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
          Back to Apps Portfolio
        </Link>

        {/* Hero Header */}
        <div className="space-y-4 border-b border-border pb-8 animate-fade-in-up">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#0066cc] bg-[#e6f0fa] border border-[#b3d1ff] px-2.5 py-0.5 rounded-full inline-block">
            Programmatic Research Report
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-display uppercase">
            {data.heroTitle}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {data.heroSubtitle}
          </p>
        </div>

        {/* Longform 2000-word Article */}
        <article className="prose prose-sm md:prose-base prose-neutral max-w-none text-foreground leading-relaxed animate-fade-in-up">
          <div 
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
            className="space-y-6 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:font-display [&>h3]:uppercase [&>h3]:tracking-tight [&>h3]:text-foreground [&>h3]:mt-8 [&>p]:text-muted-foreground [&>p]:text-xs [&>p]:md:text-sm [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:text-muted-foreground [&>ul]:text-xs [&>ul]:space-y-2 [&>pre]:bg-neutral-900 [&>pre]:text-white [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:text-xs [&>pre]:font-mono [&>pre]:border [&>pre]:border-border/10"
          />
        </article>

        {/* Featured App Showcase CTA */}
        <div className="border-t border-border pt-12 space-y-8 animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-xl font-bold font-display uppercase text-foreground">Available Acquisition-Ready Assets</h2>
            <p className="text-muted-foreground text-xs">Vetted proprietary codebases matching these architectural compliance standards:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredApps.map((app) => (
              <div 
                key={app.slug}
                className="flex flex-col justify-between bg-card border border-border p-5 rounded-2xl hover:border-neutral-400/50 hover:scale-[1.01] transition-all"
              >
                <div className="space-y-4">
                  <div className="flex gap-3 items-center">
                    <img 
                      src={app.icon || `/apps/${app.slug}/icon.jpg`} 
                      alt={app.name} 
                      className="w-10 h-10 rounded-lg object-cover border border-border"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display">{app.name}</h4>
                      <p className="text-[9px] text-muted-foreground font-semibold font-mono uppercase tracking-wider">{app.tagline}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-[10px] leading-relaxed line-clamp-3">
                    {app.description}
                  </p>
                </div>
                <div className="border-t border-border mt-4 pt-3 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[8px] text-muted-foreground font-mono uppercase tracking-wider">
                    <div>
                      <div>Target</div>
                      <div className="text-[10px] font-semibold text-foreground mt-0.5 font-sans normal-case">{app.buildStatus}</div>
                    </div>
                    <div>
                      <div>Coverage</div>
                      <div className="text-[10px] font-semibold text-foreground mt-0.5 font-sans normal-case">{app.coverage}%</div>
                    </div>
                  </div>
                  <Link
                    href={`/apps/${app.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-primary text-primary-foreground hover:bg-neutral-800 rounded-lg font-mono text-[9px] uppercase tracking-wider transition-colors"
                  >
                    View Code Details
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Conversion Bar */}
        <div className="bg-[#1e1e1f] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden animate-fade-in-up">
          <div className="text-left space-y-2 z-10">
            <h3 className="text-lg font-bold font-display uppercase tracking-wider">Acquisition Integration Consultation</h3>
            <p className="text-neutral-400 text-xs max-w-md">Schedule a technical walkthrough session of Xcode schemas and verify compile environments with our lead systems engineer.</p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-black hover:bg-neutral-200 rounded-full font-mono text-xs uppercase tracking-wider transition-colors z-10 shrink-0 font-semibold shadow-md"
          >
            Inquire Asset
          </Link>
        </div>
      </div>
    </div>
  );
}
