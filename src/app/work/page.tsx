import type { Metadata } from "next";
import { workMeta } from "@/lib/seo";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: workMeta.title,
  description: workMeta.description,
  keywords: workMeta.keywords,
  alternates: workMeta.alternates,
  openGraph: workMeta.openGraph,
  twitter: workMeta.twitter,
  robots: workMeta.robots,
};

export default function WorkPage() {
  return <WorkClient />;
}
