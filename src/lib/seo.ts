/**
 * Agaran SEO Configuration
 * Centralized metadata for the entire website.
 * Update this file to change global SEO settings.
 */

export const siteConfig = {
  name: "Agaran",
  tagline: "Build Intelligent Solutions Automate What Matters",
  description:
    "Agaran builds intelligent technology and AI systems that help businesses work smarter and people learn, create, and grow.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://agaran.com",
  logo: "/logo.png",
  logoAlt: "Agaran — Intelligent Systems & AI Agents",
  themeColor: "#2563EB",
  locale: "en_US",
  social: {
    twitter: "@agaran",
  },
  // Future: Add real social profiles here
  sameAs: [] as string[],
};

export const homepageMeta = {
  title: "Agaran — Build Intelligent Solutions Automate What Matters",
  titleTemplate: "%s | Agaran",
  description: siteConfig.description,
  keywords: [
    "AI agents",
    "business automation",
    "workflow automation",
    "intelligent systems",
    "SaaS platforms",
    "education technology",
    "learning platforms",
    "custom software",
    "Agaran",
  ],
  openGraph: {
    title: "Agaran — Build Intelligent Solutions Automate What Matters",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Agaran — Build Intelligent Solutions Automate What Matters",
      },
    ],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Agaran — Build Intelligent Solutions Automate What Matters",
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
  } as const,
  alternates: {
    canonical: siteConfig.url,
  },
};
