import type { Metadata } from "next";
import { contactMeta } from "@/lib/seo";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: contactMeta.title,
  description: contactMeta.description,
  keywords: contactMeta.keywords,
  alternates: contactMeta.alternates,
  openGraph: contactMeta.openGraph,
  twitter: contactMeta.twitter,
  robots: contactMeta.robots,
};

export default function ContactPage() {
  return <ContactClient />;
}
