import type { Metadata } from "next";
import { aboutMeta } from "@/lib/seo";

// ─── Server component: exports metadata, renders the client component ─────────
export const metadata: Metadata = {
  title: aboutMeta.title,
  description: aboutMeta.description,
  keywords: aboutMeta.keywords,
  alternates: aboutMeta.alternates,
  openGraph: aboutMeta.openGraph,
  twitter: aboutMeta.twitter,
  robots: aboutMeta.robots,
};

// Import the client component that holds all the existing UI + animations
import AboutClient from "./AboutClient";

export default function AboutPage() {
  return <AboutClient />;
}
