/**
 * Agaran SEO Configuration
 * Centralized metadata for the entire website.
 * Update this file to change global SEO settings.
 */

export const siteConfig = {
  name: "Agaran",
  tagline: "Building Intelligent Solutions",
  description:
    "Agaran builds custom software, education platforms, business automation systems, and intelligent AI solutions. Building intelligent software and AI systems for business and education.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://agaran.com",
  logo: "/logo.png",
  logoAlt: "Agaran — Building Intelligent Solutions",
  themeColor: "#2563EB",
  locale: "en_US",
  social: {
    twitter: "@agaran",
  },
  // Future: Add real social profiles here
  sameAs: [] as string[],
};

export const homepageMeta = {
  title: "Agaran — Building intelligent software and AI systems for business and education",
  titleTemplate: "%s | Agaran",
  description: siteConfig.description,
  keywords: [
    "custom software development",
    "education technology",
    "learning platforms",
    "business automation",
    "workflow automation",
    "AI solutions",
    "intelligent systems",
    "SaaS platforms",
    "coaching management",
    "Agaran",
  ],
  openGraph: {
    title: "Agaran — Building Intelligent Solutions",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Agaran — Building Intelligent Solutions",
      },
    ],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Agaran — Building Intelligent Solutions",
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
