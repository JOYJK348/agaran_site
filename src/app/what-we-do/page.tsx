import type { Metadata } from "next";
import { whatWeDoMeta } from "@/lib/seo";
import WhatWeDoClient from "./WhatWeDoClient";

export const metadata: Metadata = {
  title: whatWeDoMeta.title,
  description: whatWeDoMeta.description,
  keywords: whatWeDoMeta.keywords,
  alternates: whatWeDoMeta.alternates,
  openGraph: whatWeDoMeta.openGraph,
  twitter: whatWeDoMeta.twitter,
  robots: whatWeDoMeta.robots,
};

export default function WhatWeDoPage() {
  return <WhatWeDoClient />;
}
