import type { Metadata } from "next";
import { aiLearningPortalMeta } from "@/lib/seo";
import AILearningClient from "./AILearningClient";

export const metadata: Metadata = {
  title: aiLearningPortalMeta.title,
  description: aiLearningPortalMeta.description,
  keywords: aiLearningPortalMeta.keywords,
  alternates: aiLearningPortalMeta.alternates,
  openGraph: aiLearningPortalMeta.openGraph,
  twitter: aiLearningPortalMeta.twitter,
  robots: aiLearningPortalMeta.robots,
};

export default function AILearningPortalPage() {
  return <AILearningClient />;
}
