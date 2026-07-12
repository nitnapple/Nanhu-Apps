import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { marked } from "marked";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await marked.parse(post.content);

  return (
    <div className="relative min-h-screen py-16 md:py-24 bg-background">
      <BackgroundGrid />

      <div className="max-w-3xl mx-auto px-6 space-y-8 text-left">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-wider animate-fade-in-up"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
          Back to essays
        </Link>

        {/* Article Header */}
        <div className="space-y-4 border-b border-border pb-6 animate-fade-in-up">
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

          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight font-display uppercase">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-foreground pt-2 font-mono uppercase tracking-wider text-[10px]">
            <div className="w-5 h-5 rounded-full bg-neutral-100 border border-border flex items-center justify-center font-bold text-[9px]">
              NK
            </div>
            <span>Written by {post.author}</span>
          </div>
        </div>

        {/* Content Body */}
        <article
          className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-6 animate-fade-in-up font-sans
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:uppercase
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:uppercase
            [&_p]:leading-relaxed [&_p]:my-4
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4
            [&_li]:leading-relaxed
            [&_code]:bg-neutral-150 [&_code]:border [&_code]:border-border [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-foreground/90 [&_code]:text-xs
            [&_pre]:bg-card [&_pre]:border [&_pre]:border-border [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre]:font-mono
            [&_pre_code]:bg-transparent [&_pre_code]:border-0 [&_pre_code]:p-0 [&_pre_code]:text-xs
          "
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
