import type { Metadata } from "next";
import { aiEducationPlatformMeta } from "@/lib/seo";
import AIEducationClient from "./AIEducationClient";

export const metadata: Metadata = {
  title: aiEducationPlatformMeta.title,
  description: aiEducationPlatformMeta.description,
  keywords: aiEducationPlatformMeta.keywords,
  alternates: aiEducationPlatformMeta.alternates,
  openGraph: aiEducationPlatformMeta.openGraph,
  twitter: aiEducationPlatformMeta.twitter,
  robots: aiEducationPlatformMeta.robots,
};

export default function AIEducationPage() {
  return <AIEducationClient />;
}
