/**
 * Agaran SEO Configuration
 * Single source of truth for all metadata across the website.
 * Social links and contact info are verified from the live contact page.
 */

export const siteConfig = {
  name: "Agaran",
  tagline: "Build Intelligent Solutions. Automate What Matters.",
  description:
    "Agaran builds AI systems, business automation, custom software, and education technology that help businesses work smarter and people learn, create, and grow.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://agaran.in",
  logo: "/logo.png",
  logoAlt: "Agaran — AI, Automation & Software",
  themeColor: "#2563EB",
  locale: "en_US",

  // Verified from contact page & social links visible on the live site
  social: {
    twitter: undefined as string | undefined, // Not yet verified/claimed
    instagram: "https://www.instagram.com/agaran.ai",
    facebook: "https://www.facebook.com/profile.php?id=61593719520785",
    youtube: "https://www.youtube.com/@agaranyt",
    whatsapp: "https://wa.me/919080558130",
  },

  // Verified social profiles for Organization schema sameAs
  sameAs: [
    "https://www.instagram.com/agaran.ai",
    "https://www.facebook.com/profile.php?id=61593719520785",
    "https://www.youtube.com/@agaranyt",
  ],

  // Verified contact info from contact page
  contact: {
    email: "contact.agaran@gmail.com",
    phone: "+91-90805-58130",
    whatsapp: "+91-90805-58130",
  },

  // Verified from contact page content
  location: {
    locality: "Aruppukottai",
    region: "Tamil Nadu",
    country: "India",
    countryCode: "IN",
  },
};

// ─── Shared OG image reference ───────────────────────────────────────────────
const ogImage = {
  url: `${siteConfig.url}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Agaran — AI, Automation & Software",
};

// ─── Homepage / Root Metadata ─────────────────────────────────────────────────
export const homepageMeta = {
  title: "Agaran — Build Intelligent Solutions. Automate What Matters.",
  titleTemplate: "%s | Agaran",
  description: siteConfig.description,
  keywords: [
    "AI agents",
    "business automation",
    "workflow automation",
    "custom software development",
    "education technology",
    "LMS platform",
    "WhatsApp automation",
    "SaaS development India",
    "AI-powered software",
    "Agaran",
  ],
  openGraph: {
    title: "Agaran — Build Intelligent Solutions. Automate What Matters.",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Agaran — Build Intelligent Solutions. Automate What Matters.",
    description: siteConfig.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  } as const,
  alternates: {
    canonical: siteConfig.url,
  },
};

// ─── Per-Page Metadata ────────────────────────────────────────────────────────

export const whatWeDoMeta = {
  title: "What We Do — AI, Automation, Software & EdTech",
  description:
    "Agaran builds custom software, AI agents, business automation systems, education technology platforms, and cloud infrastructure for businesses and institutions.",
  keywords: [
    "custom software development",
    "AI agents India",
    "business automation",
    "WhatsApp automation",
    "education technology platform",
    "LMS development",
    "cloud infrastructure",
  ],
  openGraph: {
    title: "What We Do — Agaran",
    description:
      "Custom software, AI agents, automation, EdTech and cloud — built for real business problems.",
    url: `${siteConfig.url}/what-we-do`,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "What We Do — Agaran",
    description:
      "Custom software, AI agents, automation, EdTech and cloud — built for real business problems.",
    images: [ogImage.url],
  },
  alternates: { canonical: `${siteConfig.url}/what-we-do` },
  robots: { index: true, follow: true } as const,
};

export const productsMeta = {
  title: "Products — AI Education, WhatsApp Automation & AI Agents",
  description:
    "Explore Agaran's AI-powered software products: an AI Education Platform for schools and coaching institutes, WhatsApp Business Automation, and an AI Agent Platform for enterprises.",
  keywords: [
    "AI education platform",
    "WhatsApp automation software",
    "AI agent platform",
    "EdTech SaaS India",
    "LMS for coaching institutes",
    "business AI tools",
  ],
  openGraph: {
    title: "Products — Agaran",
    description:
      "AI Education Platform, WhatsApp Business Automation, and AI Agent Platform — built for schools, businesses, and enterprises.",
    url: `${siteConfig.url}/products`,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Products — Agaran",
    description:
      "AI Education Platform, WhatsApp Automation, and AI Agent Platform — built for schools, businesses, and enterprises.",
    images: [ogImage.url],
  },
  alternates: { canonical: `${siteConfig.url}/products` },
  robots: { index: true, follow: true } as const,
};

export const aiEducationPlatformMeta = {
  title: "AI Education Platform — LMS, Online Exams & AI Tutoring",
  description:
    "Agaran's AI Education Platform powers schools, colleges, and coaching institutes with LMS, online exam systems, AI-assisted tutoring, student management, and smart assessments.",
  keywords: [
    "AI education platform India",
    "LMS for coaching institutes",
    "online exam platform",
    "AI tutoring system",
    "student management software",
    "EdTech SaaS",
  ],
  openGraph: {
    title: "AI Education Platform — Agaran",
    description:
      "LMS, online exams, AI tutoring, and student management for schools, colleges, and coaching institutes.",
    url: `${siteConfig.url}/products/ai-education-platform`,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "AI Education Platform — Agaran",
    description:
      "LMS, online exams, AI tutoring, and student management for schools, colleges, and coaching institutes.",
    images: [ogImage.url],
  },
  alternates: { canonical: `${siteConfig.url}/products/ai-education-platform` },
  robots: { index: true, follow: true } as const,
};

export const whatsappAutomationMeta = {
  title: "WhatsApp Business Automation — Chatbots & Smart Auto-Replies",
  description:
    "Automate your WhatsApp business communication with Agaran's platform. Build smart chatbots, capture leads automatically, manage orders, and handle customer support 24/7.",
  keywords: [
    "WhatsApp business automation",
    "WhatsApp chatbot India",
    "WhatsApp auto-reply software",
    "WhatsApp lead capture bot",
    "business messaging automation",
  ],
  openGraph: {
    title: "WhatsApp Business Automation — Agaran",
    description:
      "Smart chatbots, lead capture, order management, and 24/7 customer support automation for WhatsApp Business.",
    url: `${siteConfig.url}/products/whatsapp-automation`,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "WhatsApp Business Automation — Agaran",
    description:
      "Smart chatbots, lead capture, and 24/7 customer support automation on WhatsApp Business.",
    images: [ogImage.url],
  },
  alternates: { canonical: `${siteConfig.url}/products/whatsapp-automation` },
  robots: { index: true, follow: true } as const,
};

export const aiAgentPlatformMeta = {
  title: "AI Agent Platform — Autonomous AI Agents for Business",
  description:
    "Deploy intelligent AI agents that automate complex workflows, handle customer queries, process documents, and perform multi-step business tasks autonomously with Agaran's AI Agent Platform.",
  keywords: [
    "AI agent platform India",
    "autonomous AI agents",
    "business AI automation",
    "AI workflow automation",
    "intelligent AI systems",
    "LLM agents for business",
  ],
  openGraph: {
    title: "AI Agent Platform — Agaran",
    description:
      "Autonomous AI agents that handle workflows, customer queries, and multi-step business tasks.",
    url: `${siteConfig.url}/products/ai-agent-platform`,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "AI Agent Platform — Agaran",
    description:
      "Autonomous AI agents that handle workflows, customer queries, and multi-step business tasks.",
    images: [ogImage.url],
  },
  alternates: { canonical: `${siteConfig.url}/products/ai-agent-platform` },
  robots: { index: true, follow: true } as const,
};

export const workMeta = {
  title: "Our Work — Projects & Case Studies",
  description:
    "Explore Agaran's real-world projects: AI learning portals, NEET exam SaaS platforms, WhatsApp automation systems, and custom business software built for real clients.",
  keywords: [
    "software development portfolio",
    "AI projects India",
    "EdTech case study",
    "NEET exam platform",
    "AI learning portal",
    "custom software projects",
  ],
  openGraph: {
    title: "Our Work — Agaran",
    description:
      "AI learning portals, NEET exam platforms, and custom software — real projects built by Agaran.",
    url: `${siteConfig.url}/work`,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Our Work — Agaran",
    description:
      "AI learning portals, NEET exam platforms, and custom software — real projects built by Agaran.",
    images: [ogImage.url],
  },
  alternates: { canonical: `${siteConfig.url}/work` },
  robots: { index: true, follow: true } as const,
};

export const aiLearningPortalMeta = {
  title: "AI Learning Portal — Case Study",
  description:
    "How Agaran designed and built a full-featured AI-powered learning portal with personalized study plans, live classes, and smart assessments for students.",
  keywords: [
    "AI learning portal case study",
    "EdTech platform development",
    "personalized learning software",
    "online study platform India",
  ],
  openGraph: {
    title: "AI Learning Portal Case Study — Agaran",
    description:
      "A full-featured AI-powered learning portal with personalized study plans, live classes, and smart assessments.",
    url: `${siteConfig.url}/work/ai-learning-portal`,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "article" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "AI Learning Portal Case Study — Agaran",
    description:
      "A full-featured AI-powered learning portal with personalized study plans, live classes, and smart assessments.",
    images: [ogImage.url],
  },
  alternates: { canonical: `${siteConfig.url}/work/ai-learning-portal` },
  robots: { index: true, follow: true } as const,
};

export const neetSaasPlatformMeta = {
  title: "NEET Exam SaaS Platform — Case Study",
  description:
    "How Agaran built a scalable SaaS platform for NEET exam preparation with mock tests, performance analytics, batch management, and multi-institute support.",
  keywords: [
    "NEET exam platform development",
    "SaaS exam platform India",
    "coaching institute software",
    "online exam management",
    "NEET preparation software",
  ],
  openGraph: {
    title: "NEET Exam SaaS Platform Case Study — Agaran",
    description:
      "A scalable SaaS platform for NEET exam preparation with mock tests, analytics, batch management, and multi-institute support.",
    url: `${siteConfig.url}/work/neet-saas-platform`,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "article" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "NEET Exam SaaS Platform Case Study — Agaran",
    description:
      "A scalable SaaS platform for NEET exam prep with mock tests, analytics, and multi-institute support.",
    images: [ogImage.url],
  },
  alternates: { canonical: `${siteConfig.url}/work/neet-saas-platform` },
  robots: { index: true, follow: true } as const,
};

export const aboutMeta = {
  title: "About Agaran — AI & Software Company, Tamil Nadu, India",
  description:
    "Agaran is a software and AI company based in Aruppukottai, Tamil Nadu, India. We build intelligent systems, automation tools, custom software, and education technology for businesses and institutions.",
  keywords: [
    "about Agaran",
    "AI company Tamil Nadu",
    "software company Aruppukottai",
    "tech company India",
    "AI and automation company",
    "custom software development company India",
  ],
  openGraph: {
    title: "About Agaran — AI & Software Company",
    description:
      "A software and AI company from Aruppukottai, Tamil Nadu — building intelligent systems, automation, and education technology.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "About Agaran — AI & Software Company",
    description:
      "A software and AI company from Aruppukottai, Tamil Nadu — building intelligent systems, automation, and education technology.",
    images: [ogImage.url],
  },
  alternates: { canonical: `${siteConfig.url}/about` },
  robots: { index: true, follow: true } as const,
};

export const contactMeta = {
  title: "Contact Agaran — Start Your Project",
  description:
    "Get in touch with the Agaran team. Tell us about your software, AI, or automation project and we will reply within 2 hours. Reach us by email or WhatsApp.",
  keywords: [
    "contact Agaran",
    "start a software project India",
    "AI development inquiry",
    "hire software developers Tamil Nadu",
    "WhatsApp automation inquiry",
  ],
  openGraph: {
    title: "Contact Agaran — Start Your Project",
    description:
      "Tell us about your software, AI, or automation project. We reply within 2 hours.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Contact Agaran — Start Your Project",
    description: "Tell us about your software, AI, or automation project. We reply within 2 hours.",
    images: [ogImage.url],
  },
  alternates: { canonical: `${siteConfig.url}/contact` },
  robots: { index: true, follow: true } as const,
};

export const whoWeBuildForMeta = {
  title: "Who We Build For — Startups, Businesses, Education & Organisations",
  description:
    "Agaran builds custom software, AI systems, and automation for startups, growing businesses, schools and coaching institutes, and organisations looking to modernise their technology.",
  keywords: [
    "software for startups India",
    "business automation company",
    "EdTech solutions for schools",
    "coaching institute software",
    "organisation software development",
    "custom software for businesses India",
  ],
  openGraph: {
    title: "Who We Build For — Agaran",
    description:
      "Custom software and AI for startups, businesses, educational institutions, and organisations.",
    url: `${siteConfig.url}/who-we-build-for`,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: siteConfig.locale,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Who We Build For — Agaran",
    description:
      "Custom software and AI for startups, businesses, educational institutions, and organisations.",
    images: [ogImage.url],
  },
  alternates: { canonical: `${siteConfig.url}/who-we-build-for` },
  robots: { index: true, follow: true } as const,
};
