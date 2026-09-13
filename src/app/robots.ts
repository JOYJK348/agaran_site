import type { MetadataRoute } from "next";

/**
 * Robots configuration — auto-served at /robots.txt by Next.js App Router.
 * Allows all public crawling; references the sitemap for discovery.
 */
export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://agaran.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block API routes from crawling — they return JSON, not content
        disallow: "/api/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
