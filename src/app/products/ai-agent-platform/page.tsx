import type { Metadata } from "next";
import { aiAgentPlatformMeta } from "@/lib/seo";
import AIAgentClient from "./AIAgentClient";

export const metadata: Metadata = {
  title: aiAgentPlatformMeta.title,
  description: aiAgentPlatformMeta.description,
  keywords: aiAgentPlatformMeta.keywords,
  alternates: aiAgentPlatformMeta.alternates,
  openGraph: aiAgentPlatformMeta.openGraph,
  twitter: aiAgentPlatformMeta.twitter,
  robots: aiAgentPlatformMeta.robots,
};

export default function AIAgentPlatformPage() {
  return <AIAgentClient />;
}
