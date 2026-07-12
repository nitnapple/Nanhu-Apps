import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Refinery Log | Engineering & SaaS Acquisition Insights",
  description: "Read technical essays from Nanhu Apps Studio about modern system architecture, clean source code standards, and seamless business transitions.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="relative min-h-screen py-16 md:py-24 bg-background">
      <BackgroundGrid />

      <div className="max-w-4xl mx-auto px-6 space-y-12 text-left">
        {/* Header */}
        <div className="space-y-4 animate-fade-in-up">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
            Refinery Log
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-display uppercase leading-[1.1]">
            Engineering & Acquisition Essays
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-sans">
            Our insights on building, auditing, scaling, and transferring high-value web applications without startup bloat.
          </p>
        </div>

        {/* Blog Post List */}
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <div 
                key={post.slug} 
                className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-neutral-400/50 hover:scale-[1.005] transition-all duration-300 animate-fade-in-up"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-[9px] text-muted-foreground font-mono uppercase tracking-wider">
                    <span className="text-foreground font-bold bg-neutral-100 border border-border px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-foreground" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-foreground" />
                      {post.readingTime}
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-foreground font-display uppercase tracking-tight group-hover:text-neutral-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-sans">
                    {post.summary}
                  </p>

                  <div className="flex items-center justify-between border-t border-border pt-4 mt-2">
                    <div className="flex items-center gap-2 text-xs text-foreground font-mono uppercase tracking-wider text-[10px]">
                      <div className="w-5 h-5 rounded-full bg-neutral-100 border border-border flex items-center justify-center font-bold text-[9px]">
                        NK
                      </div>
                      <span>{post.author}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground group-hover:translate-x-1 transition-transform border-b border-foreground pb-0.5"
                    >
                      Read Essay
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-card">
            <p className="text-muted-foreground text-sm">No articles published yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
