import { MetadataRoute } from "next";
import { APPS_DATA } from "@/lib/apps-data";
import { getBlogPosts } from "@/lib/blog";
import { SEO_LANDINGS } from "@/lib/seo-landing-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nanhuinteractive.dev";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/acquire",
    "/apps",
    "/app",
    "/presentation",
    "/presentation2",
    "/blog",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Programmatic SEO routes
  const seoSlugs = Object.keys(SEO_LANDINGS);
  const seoRoutes = seoSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic app routes
  const appRoutes = APPS_DATA.flatMap((app) => [
    {
      url: `${baseUrl}/apps/${app.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apps/${app.slug}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/apps/${app.slug}/support`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]);

  // Duplicate landing pages that exist statically for Fit60 and NanhuFX
  const duplicateAppRoutes = [
    "/apps/fit60",
    "/apps/nanhufx",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic blog routes
  const blogPosts = getBlogPosts();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...seoRoutes, ...appRoutes, ...duplicateAppRoutes, ...blogRoutes];
}
