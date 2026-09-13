import type { Metadata } from "next";
import { neetSaasPlatformMeta } from "@/lib/seo";
import NEETClient from "./NEETClient";

export const metadata: Metadata = {
  title: neetSaasPlatformMeta.title,
  description: neetSaasPlatformMeta.description,
  keywords: neetSaasPlatformMeta.keywords,
  alternates: neetSaasPlatformMeta.alternates,
  openGraph: neetSaasPlatformMeta.openGraph,
  twitter: neetSaasPlatformMeta.twitter,
  robots: neetSaasPlatformMeta.robots,
};

export default function NEETSaaSPlatformPage() {
  return <NEETClient />;
}
