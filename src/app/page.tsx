import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import HowWeWork from "@/components/home/HowWeWork";
import EducationTechnology from "@/components/home/EducationTechnology";
import BusinessAutomation from "@/components/home/BusinessAutomation";
import Products from "@/components/home/Products";
import SelectedWork from "@/components/home/SelectedWork";
import FinalCTA from "@/components/home/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <HowWeWork />
        <EducationTechnology />
        <BusinessAutomation />
        <Products />
        <SelectedWork />
        <FinalCTA />
      </main>
    </>
  );
}
