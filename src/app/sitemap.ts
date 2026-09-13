import type { MetadataRoute } from "next";

/**
 * Dynamic sitemap — auto-served at /sitemap.xml by Next.js App Router.
 * Only public, indexable routes are listed here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://agaran.in";

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/what-we-do`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/products`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/products/ai-education-platform`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/products/whatsapp-automation`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/products/ai-agent-platform`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/work`,
      lastModified: new Date("2026-08-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/work/ai-learning-portal`,
      lastModified: new Date("2026-08-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${base}/work/neet-saas-platform`,
      lastModified: new Date("2026-08-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${base}/about`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${base}/who-we-build-for`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return routes;
}
