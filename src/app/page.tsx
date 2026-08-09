import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhoWeBuildFor from "@/components/home/WhoWeBuildFor";
import Products from "@/components/home/Products";
import WhyAgaran from "@/components/home/WhyAgaran";
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
        <WhoWeBuildFor />
        <Products />
        <WhyAgaran />
        <SelectedWork />
        <FinalCTA />
      </main>
    </>
  );
}
