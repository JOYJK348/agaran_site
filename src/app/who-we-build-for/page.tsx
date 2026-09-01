import Navbar from "@/components/layout/Navbar";
import WhoWeBuildForInteractive from "@/components/home/WhoWeBuildForInteractive";
import FinalCTA from "@/components/home/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Build For — Ecosystems & Solutions | Agaran",
  description:
    "Discover how Agaran builds custom software, AI agents, EdTech SaaS platforms, and enterprise automation for startups, businesses, education, and organizations.",
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
