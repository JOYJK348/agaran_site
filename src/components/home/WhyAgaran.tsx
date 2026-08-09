"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Container from "@/components/ui/Container";

const pillars = [
  {
    title: "AI-Driven Solutions",
    description: (
      <>
        <strong className="font-extrabold text-[#059669]">AI and automation</strong> are built natively into the way we design <strong className="font-extrabold text-[#0F172A]">software</strong> and <strong className="font-extrabold text-[#0F172A]">business systems</strong>.
      </>
    ),
    points: [
      { bold: "AI-powered", text: "workflows" },
      { bold: "Smart business", text: "automation" },
      { bold: "Connected", text: "software systems" },
      { bold: "Faster", text: "everyday operations" },
    ],
  },
  {
    title: "Built to Grow",
    description: (
      <>
        Our software is designed to be <strong className="font-extrabold text-[#0F172A]">reliable, flexible</strong>, and ready to <strong className="font-extrabold text-[#2563EB]">scale as your business grows</strong>.
      </>
    ),
    points: [
      { bold: "Scalable", text: "architecture" },
      { bold: "Cloud-based", text: "systems" },
      { bold: "Secure data", text: "management" },
      { bold: "Long-term", text: "flexibility" },
    ],
  },
  {
    title: "Automation Saves Time",
    description: (
      <>
        We automate <strong className="font-extrabold text-[#2563EB]">repetitive work</strong> so your team can focus on <strong className="font-extrabold text-[#0F172A]">what matters most</strong>.
      </>
    ),
    points: [
      { bold: "Workflow", text: "automation" },
      { bold: "Document", text: "processing" },
      { bold: "Lead & customer", text: "management" },
      { bold: "Faster internal", text: "operations" },
    ],
  },
  {
    title: "A Long-Term Partner",
    description: (
      <>
        We build software that is <strong className="font-extrabold text-[#0F172A]">easy to maintain</strong>, improve, and <strong className="font-extrabold text-[#2563EB]">expand over time</strong>.
      </>
    ),
    points: [
      { bold: "Clean & maintainable", text: "systems" },
      { bold: "Continuous", text: "improvements" },
      { bold: "Reliable", text: "technical support" },
      { bold: "Solutions built for", text: "long-term growth" },
    ],
  },
];

export default function WhyAgaran() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % pillars.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + pillars.length) % pillars.length);
  }, []);

  // Auto-cycle for mobile view every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <section id="why-agaran" className="relative py-8 sm:py-12 lg:py-14 bg-gradient-to-b from-white via-slate-50/40 to-white border-t border-slate-200/80 overflow-hidden">
      {/* ── Soft Ambient Glow Blobs ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-50/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />

      <Container as="div">
        <div className="relative z-10 max-w-7xl mx-auto px-1 sm:px-0">
          
          {/* ── Section Header — Ultra-Clean, Zero-Sentence High-Impact UI/UX (Matching Pattern) ── */}
          <div className="relative text-center max-w-4xl mx-auto mb-8 sm:mb-10">
            {/* Category Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-[11px] font-black text-[#2563EB] tracking-[0.18em] uppercase mb-3.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              WHY CHOOSE AGARAN
            </div>

            {/* Main Title */}
            <h2 className="text-[2.1rem] sm:text-[3rem] lg:text-[3.5rem] font-black text-[#0F172A] tracking-[-0.035em] leading-[1.12]">
              Built for{" "}
              <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                Growth
              </span>
            </h2>

            {/* Punchy Capability Highlights — ZERO SENTENCES */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-[13px] font-black text-[#0F172A]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>Practical Engineering</span>
              </div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-[13px] font-black text-[#0F172A]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>Automated Efficiency</span>
              </div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-[13px] font-black text-[#0F172A]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>Reliable Partnership</span>
              </div>
            </div>
          </div>

          {/* ── Mobile / Tablet Auto-Slider (< lg) ── */}
          <div
            className="block lg:hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {pillars.map((pillar, idx) => {
                  const cardStyles = [
                    { bg: "bg-gradient-to-br from-emerald-100/90 via-emerald-50/70 to-white", border: "border-emerald-300/80", accent: "from-[#059669] via-[#10B981] to-[#059669]", badge: "bg-emerald-100 text-emerald-800 border-emerald-300" },
                    { bg: "bg-gradient-to-br from-blue-100/90 via-blue-50/70 to-white", border: "border-blue-300/80", accent: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]", badge: "bg-blue-100 text-[#2563EB] border-blue-300" },
                    { bg: "bg-gradient-to-br from-emerald-100/90 via-emerald-50/70 to-white", border: "border-emerald-300/80", accent: "from-[#059669] via-[#10B981] to-[#059669]", badge: "bg-emerald-100 text-emerald-800 border-emerald-300" },
                    { bg: "bg-gradient-to-br from-blue-100/90 via-blue-50/70 to-white", border: "border-blue-300/80", accent: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]", badge: "bg-blue-100 text-[#2563EB] border-blue-300" },
                  ][idx];

                  return (
                    <div key={pillar.title} className="w-full shrink-0 px-1">
                      <div className={`relative rounded-3xl ${cardStyles.bg} border ${cardStyles.border} shadow-[0_8px_30px_rgba(37,99,235,0.08)] overflow-hidden flex flex-col justify-between p-5 sm:p-6`}>
                        {/* Top Brand Accent Line */}
                        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cardStyles.accent}`} />

                        {/* Ambient Spotlight */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none" />

                        <div className="relative z-10">
                          {/* Slide Number Tag */}
                          <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-black uppercase tracking-wider mb-2.5 shadow-2xs ${cardStyles.badge}`}>
                            <span>0{idx + 1}</span>
                            <span>/</span>
                            <span>04</span>
                          </div>

                          {/* Card Title */}
                          <h3 className="text-lg font-black text-[#0F172A] tracking-tight leading-snug mb-2">
                            {pillar.title}
                          </h3>

                          {/* Description with Highlights */}
                          <p className="text-[13px] leading-[1.65] text-[#475569] font-normal mb-4 text-justify">
                            {pillar.description}
                          </p>
                        </div>

                        {/* Feature Bullet Checklist */}
                        <div className="relative z-10 pt-3.5 border-t border-blue-200/60">
                          <ul className="space-y-2">
                            {pillar.points.map((pt) => (
                              <li
                                key={pt.bold + pt.text}
                                className="flex items-start gap-2.5 text-[12px] text-[#334155] leading-snug"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
                                <span className="font-normal">
                                  <strong className="font-extrabold text-[#0F172A]">{pt.bold}</strong> {pt.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Mobile Navigation Controls (Dots + Counter) ── */}
            <div className="flex items-center justify-between mt-3.5 px-2">
              <div className="flex items-center gap-1.5">
                {pillars.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === idx
                        ? "w-7 bg-[#2563EB]"
                        : "w-2 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-8 h-8 rounded-full bg-white border border-slate-200/90 text-[#0F172A] hover:bg-blue-50 hover:text-[#2563EB] hover:border-blue-200 flex items-center justify-center text-xs font-black shadow-xs transition-colors"
                >
                  &larr;
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-8 h-8 rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] flex items-center justify-center text-xs font-black shadow-xs transition-colors"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* ── Desktop Single Row (lg:grid-cols-4) ── */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-4 xl:gap-5 items-stretch">
            {pillars.map((pillar, idx) => {
              const cardStyles = [
                { bg: "bg-gradient-to-br from-emerald-100/90 via-emerald-50/70 to-white", border: "border-emerald-300/80", hoverShadow: "hover:shadow-[0_22px_50px_rgba(5,150,105,0.20)]", accent: "from-[#059669] via-[#10B981] to-[#059669]", badge: "bg-emerald-100 text-emerald-800 border-emerald-300", dot: "bg-emerald-600", spotlight: "rgba(16,185,129,0.18)" },
                { bg: "bg-gradient-to-br from-blue-100/90 via-blue-50/70 to-white", border: "border-blue-300/80", hoverShadow: "hover:shadow-[0_22px_50px_rgba(37,99,235,0.16)]", accent: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]", badge: "bg-blue-100 text-[#2563EB] border-blue-300", dot: "bg-[#2563EB]", spotlight: "rgba(37,99,235,0.14)" },
                { bg: "bg-gradient-to-br from-emerald-100/90 via-emerald-50/70 to-white", border: "border-emerald-300/80", hoverShadow: "hover:shadow-[0_22px_50px_rgba(5,150,105,0.20)]", accent: "from-[#059669] via-[#10B981] to-[#059669]", badge: "bg-emerald-100 text-emerald-800 border-emerald-300", dot: "bg-emerald-600", spotlight: "rgba(16,185,129,0.18)" },
                { bg: "bg-gradient-to-br from-blue-100/90 via-blue-50/70 to-white", border: "border-blue-300/80", hoverShadow: "hover:shadow-[0_22px_50px_rgba(37,99,235,0.16)]", accent: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]", badge: "bg-blue-100 text-[#2563EB] border-blue-300", dot: "bg-[#2563EB]", spotlight: "rgba(37,99,235,0.14)" },
              ][idx];

              return (
                <div
                  key={pillar.title}
                  className={`group relative rounded-3xl ${cardStyles.bg} border ${cardStyles.border} shadow-[0_8px_30px_rgba(37,99,235,0.06)] ${cardStyles.hoverShadow} transition-all duration-300 overflow-hidden flex flex-col justify-between p-5 xl:p-6 hover:-translate-y-1.5 cursor-default`}
                >
                  {/* Radial Spotlight Hover Shimmer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top, ${cardStyles.spotlight}, transparent 70%)` }}
                  />

                  {/* Top Animated Brand Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 group-hover:h-2 bg-gradient-to-r ${cardStyles.accent} transition-all duration-300`} />

                  <div className="relative z-10">
                    {/* Slide Number Tag */}
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-black uppercase tracking-wider mb-3 shadow-2xs ${cardStyles.badge}`}>
                      <span>0{idx + 1}</span>
                      <span>/</span>
                      <span>04</span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-[18px] xl:text-[19px] font-black text-[#0F172A] tracking-tight leading-snug mb-2.5 group-hover:text-[#2563EB] transition-colors duration-200">
                      {pillar.title}
                    </h3>

                    {/* Description with Highlights */}
                    <p className="text-[12.5px] xl:text-[13px] leading-[1.65] text-[#475569] font-normal mb-4 text-justify">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Feature Bullet Checklist (Clean Typographic Bullets) */}
                  <div className="relative z-10 pt-3.5 border-t border-slate-200/60">
                    <ul className="space-y-2.5">
                      {pillar.points.map((pt) => (
                        <li
                          key={pt.bold + pt.text}
                          className="flex items-start gap-2.5 text-[12px] xl:text-[12.5px] text-[#334155] leading-snug group/item hover:text-[#0F172A] transition-colors duration-150"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${cardStyles.dot} shrink-0 mt-1.5 group-hover/item:scale-125 transition-transform duration-150`} />
                          <span className="group-hover/item:translate-x-0.5 transition-transform duration-150 font-normal">
                            <strong className="font-extrabold text-[#0F172A]">{pt.bold}</strong> {pt.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Signature Bottom Commitment Banner (Zero Emojis) ── */}
          <div className="mt-7 sm:mt-9 p-5 sm:p-6 lg:p-7 rounded-3xl bg-gradient-to-r from-blue-50/95 via-sky-50/60 to-blue-50/90 border border-blue-200/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 text-center lg:text-left">
            <div>
              <div className="text-[10px] sm:text-[11px] font-mono font-extrabold text-[#2563EB] uppercase tracking-wider">
                THE AGARAN COMMITMENT
              </div>
              <h4 className="text-sm sm:text-base lg:text-lg font-black text-[#0F172A] tracking-tight mt-0.5 leading-snug">
                Technology engineered for <span className="text-[#2563EB]">growth</span>, <span className="text-[#2563EB]">automation</span>, and long-term enterprise capability.
              </h4>
            </div>

            <div className="flex items-center justify-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg shadow-blue-500/20 transition-all duration-200 shrink-0 group/cta"
              >
                <span>Start a Conversation</span>
                <span className="group-hover/cta:translate-x-1 transition-transform duration-200">&rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
