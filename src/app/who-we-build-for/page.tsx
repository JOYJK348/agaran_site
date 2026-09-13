import Navbar from "@/components/layout/Navbar";
import WhoWeBuildForInteractive from "@/components/home/WhoWeBuildForInteractive";
import FinalCTA from "@/components/home/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { Metadata } from "next";
import { whoWeBuildForMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: whoWeBuildForMeta.title,
  description: whoWeBuildForMeta.description,
  keywords: whoWeBuildForMeta.keywords,
  alternates: whoWeBuildForMeta.alternates,
  openGraph: whoWeBuildForMeta.openGraph,
  twitter: whoWeBuildForMeta.twitter,
  robots: whoWeBuildForMeta.robots,
};

export default function WhoWeBuildForPage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="pt-20">
        <WhoWeBuildForInteractive />
        <FinalCTA />
      </main>
    </>
  );
}
