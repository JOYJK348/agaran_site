import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import WhoWeBuildForInteractive from "@/components/home/WhoWeBuildForInteractive";
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
        <WhoWeBuildForInteractive />
        <WhyAgaran />
        <SelectedWork />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
