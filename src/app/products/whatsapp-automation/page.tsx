import type { Metadata } from "next";
import { whatsappAutomationMeta } from "@/lib/seo";
import WhatsAppClient from "./WhatsAppClient";

export const metadata: Metadata = {
  title: whatsappAutomationMeta.title,
  description: whatsappAutomationMeta.description,
  keywords: whatsappAutomationMeta.keywords,
  alternates: whatsappAutomationMeta.alternates,
  openGraph: whatsappAutomationMeta.openGraph,
  twitter: whatsappAutomationMeta.twitter,
  robots: whatsappAutomationMeta.robots,
};

export default function WhatsAppAutomationPage() {
  return <WhatsAppClient />;
}
