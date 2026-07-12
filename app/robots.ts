import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://nanhuinteractive.dev/sitemap.xml",
      "https://nanhuinteractive.dev/sitemap-images.xml",
      "https://nanhuinteractive.dev/video-sitemap.xml"
    ],
  };
}
