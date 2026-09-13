import type { Metadata } from "next";
import { productsMeta } from "@/lib/seo";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: productsMeta.title,
  description: productsMeta.description,
  keywords: productsMeta.keywords,
  alternates: productsMeta.alternates,
  openGraph: productsMeta.openGraph,
  twitter: productsMeta.twitter,
  robots: productsMeta.robots,
};

export default function ProductsPage() {
  return <ProductsClient />;
}
