"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
   Scroll-reveal animation wrapper
ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */
function Reveal({
  children,
  delay = 0,
  y = 20,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
   Animated counter component
ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const t = setInterval(() => {
      start += step;
      if (start >= to) {
        setVal(to);
        clearInterval(t);
      } else setVal(start);
    }, 25);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
   Data
ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */
const principles = [
  {
    num: "01",
    shortTitle: "SIMPLE FIRST",
    title: "Keep Things Simple First",
    desc: "We remove unnecessary clutter before building. Simple software works faster, stays reliable, and never confuses your users.",
    highlight: "Zero Complexity ΓÇó Fast Performance",
  },
  {
    num: "02",
    shortTitle: "LISTEN FIRST",
    title: "Understand Your Need First",
    desc: "We listen carefully to your exact business goals before writing code, ensuring we build the right solution on day one.",
    highlight: "Deep Alignment ΓÇó Tailored Architecture",
  },
  {
    num: "03",
    shortTitle: "REAL RESULTS",
    title: "Real Results Over Empty Talk",
    desc: "Working software in the hands of real users matters most. We focus on real-world impact and business performance.",
    highlight: "Working Code ΓÇó Measurable Growth",
  },
  {
    num: "04",
    shortTitle: "FULL OWNERSHIP",
    title: "We Stay With You All The Way",
    desc: "We take full responsibility from initial design to launch, deployment, and ongoing technical performance.",
    highlight: "End-to-End Delivery ΓÇó Continuous Support",
  },
  {
    num: "05",
    shortTitle: "KEEP UPGRADING",
    title: "Continuous, Goal-Driven Upgrades",
    desc: "Software needs active refinement. We test, optimize, and upgrade your system based on real operational feedback.",
    highlight: "Proactive Maintenance ΓÇó Scale Ready",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Product Modules Built" },
  { value: 3, suffix: "+", label: "Institutional Partners" },
  { value: 2, suffix: "", label: "Live Active Platforms" },
  { value: 98, suffix: "%", label: "On-Time Milestone Rate" },
];

export default function AboutClient() {
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);

  // Mobile Swipe Carousel State for Section 02 Execution Engine
  const engineCarouselRef = useRef<HTMLDivElement>(null);
  const [engineIdx, setEngineIdx] = useState(0);

  const handleEngineScroll = () => {
    if (!engineCarouselRef.current) return;
    const scrollPos = engineCarouselRef.current.scrollLeft;
    const cardWidth = engineCarouselRef.current.offsetWidth * 0.8;
    const newIndex = Math.round(scrollPos / cardWidth);
    setEngineIdx(Math.min(Math.max(newIndex, 0), 3));
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-white text-[#0F172A] pt-20 sm:pt-28 pb-16 sm:pb-24 font-sans selection:bg-[#2563EB] selection:text-white overflow-hidden">
        
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#2563EB]/12 blur-[130px] pointer-events-none" />
        <div className="absolute top-[45%] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#3B82F6]/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-full w-full px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
          
          {/* ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ
              01 HERO HEADER & STATS STRIP
          ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ */}
          <section className="text-center w-full max-w-full mx-auto">
            <Reveal delay={0}>
              <div className="flex justify-center mb-5">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2563EB] shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
                  ABOUT AGARAN &bull; TECHNOLOGY PARTNER
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-black leading-[1.12] tracking-[-0.035em] text-[#0F172A] w-full max-w-5xl mx-auto mb-5">
                Technology Engineered for{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Growth &amp; Scale.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-center text-sm sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-600 w-full max-w-4xl mx-auto mb-8">
                We build custom web apps, automated business workflows, and AI tools for companies, schools, and teams ΓÇö simple to use, rock-solid, and made to drive revenue.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.24}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
                <Link
                  href="/contact#inquiry-form"
                  className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base px-8 py-4 rounded-2xl font-black text-white bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] hover:shadow-[0_12px_35px_rgba(37,99,235,0.35)] hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-md"
                >
                  <span>Start a Conversation</span>
                  <span>&rarr;</span>
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base px-7 py-4 rounded-2xl font-extrabold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] hover:bg-[#DBEAFE] hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-2xs"
                >
                  <span>View Our Work</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </Reveal>

            {/* Stats Strip */}
            <Reveal delay={0.32}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1600px] mx-auto">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="p-5 rounded-2xl bg-gradient-to-b from-[#EFF6FF]/80 via-white to-[#DBEAFE]/40 border border-[#BFDBFE] text-center space-y-1 shadow-2xs hover:border-[#2563EB] transition-all"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-[#2563EB]">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ
              02 OUR CORE EXECUTION ENGINE (4 High-Impact Engineering Pillars)
          ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ */}
          <section className="max-w-[1600px] mx-auto w-full">
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#EFF6FF]/70 via-white to-[#F0F9FF]/80 border border-[#BFDBFE]/80 shadow-[0_15px_45px_rgba(37,99,235,0.07)] relative overflow-hidden">
              {/* Soft Ambient Background Glow */}
              <div className="absolute top-0 left-1/3 w-[500px] h-[250px] bg-blue-200/25 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />

              <div className="relative z-10">
                <Reveal delay={0.05} className="text-center mb-8 sm:mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                    <span>02 &bull; OUR CORE EXECUTION ENGINE</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                    Engineering Built to Scale Your Vision
                  </h2>
                </Reveal>

                <div
                  ref={engineCarouselRef}
                  onScroll={handleEngineScroll}
                  className="flex md:grid md:grid-cols-2 xl:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 sm:gap-5 pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 items-stretch"
                >
                  {[
                    {
                      num: "01",
                      tag: "ARCHITECTURE",
                      title: "Production-First Engineering",
                      desc: "We don't build throwaway prototypes. Every system is architected with clean, scalable code, 100% type safety, and zero hidden technical debt.",
                      pill: "TypeScript ΓÇó NestJS ΓÇó Next.js",
                      icon: (
                        <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      ),
                    },
                    {
                      num: "02",
                      tag: "AUTOMATION",
                      title: "Autonomous AI & Workflows",
                      desc: "We integrate intelligent AI agents and real-time backend queues to automate repetitive operational tasks and customer interactions 24/7.",
                      pill: "24/7 Autopilot ΓÇó AI Workflows",
                      icon: (
                        <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ),
                    },
                    {
                      num: "03",
                      tag: "DELIVERY",
                      title: "Rapid 2-Week Prototyping",
                      desc: "Experience real working software in 14 days. We test, validate, and iterate early based on real operational feedback before full launch.",
                      pill: "Fast Feedback ΓÇó 14-Day Sprint",
                      icon: (
                        <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                    },
                    {
                      num: "04",
                      tag: "TRANSPARENCY",
                      title: "100% IP & Source Ownership",
                      desc: "Full source code access, production server deployment, and complete intellectual property ownership handed directly to your team.",
                      pill: "Full Ownership ΓÇó Direct Engineer Access",
                      icon: (
                        <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      ),
                    },
                  ].map((item, idx) => (
                    <Reveal key={item.num} delay={0.08 + idx * 0.06} className="h-full shrink-0 snap-center w-[84vw] sm:w-[310px] md:w-auto">
                      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#F8FAFC] via-white to-[#EFF6FF]/60 border border-[#BFDBFE]/80 hover:border-[#2563EB] shadow-2xs hover:shadow-[0_10px_30px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                        <div className="space-y-3.5">
                          <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 shadow-2xs">
                              {item.icon}
                            </div>
                            <span className="px-2.5 py-1 rounded-xl bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] font-mono font-black text-xs">
                              {item.num}
                            </span>
                          </div>

                          <div>
                            <span className="text-[10px] font-mono font-black text-[#2563EB] uppercase tracking-wider bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE] inline-block mb-1.5">
                              {item.tag}
                            </span>
                            <h3 className="text-base font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                              {item.title}
                            </h3>
                          </div>

                          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed text-left sm:text-justify">
                            {item.desc}
                          </p>
                        </div>

                        <div className="pt-4 mt-3 border-t border-slate-100">
                          <div className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold text-[#2563EB] bg-white border border-[#BFDBFE] px-2.5 py-1 rounded-lg shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                            <span>{item.pill}</span>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Mobile Swipe Dot Indicator */}
                <div className="flex md:hidden justify-center items-center gap-1.5 mt-5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === engineIdx ? "w-6 bg-[#2563EB]" : "w-1.5 bg-[#BFDBFE]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ
              03 MISSION & VISION (Crispy 2-Column Cards)
          ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ */}
          <section className="max-w-[1600px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Mission */}
              <Reveal delay={0.08}>
                <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#BFDBFE] shadow-2xs hover:border-[#2563EB] transition-all space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-extrabold uppercase text-[#2563EB]">
                    03 &bull; OUR MISSION
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                    Eliminate Unnecessary Operational Complexity
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    Our mission is to deliver software that reduces manual work, automates daily tasks, and makes technology invisible so you can focus on growing your business.
                  </p>
                </div>
              </Reveal>

              {/* Vision */}
              <Reveal delay={0.16}>
                <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#BFDBFE] shadow-2xs hover:border-[#2563EB] transition-all space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-extrabold uppercase text-[#2563EB]">
                    04 &bull; OUR VISION
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                    Long-Term Infrastructure Partner
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    We aim to be the silent engine powering web platforms, AI tools, and automation systems for ambitious founders, schools, and organizations worldwide.
                  </p>
                </div>
              </Reveal>

            </div>
          </section>

          {/* ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ
              04 OPERATING PRINCIPLES (Clean Interactive Tabs)
          ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ */}
          {/* ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ
              05 OUR PRINCIPLES (Mild Color Gradient Accordion List UI)
          ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ */}
          <section className="max-w-[1600px] mx-auto w-full">
            <div className="p-4 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-[#EFF6FF]/80 via-white to-[#F0F9FF]/90 border border-[#BFDBFE]/80 shadow-[0_15px_45px_rgba(37,99,235,0.07)] relative overflow-hidden">
              {/* Soft Ambient Background Glow */}
              <div className="absolute top-0 right-1/4 w-[500px] h-[250px] bg-blue-200/30 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />

              <div className="relative z-10">
                <Reveal delay={0.05} className="text-center mb-8 sm:mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                    <span>05 &bull; OUR PRINCIPLES</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                    How We Work &amp; Deliver
                  </h2>
                </Reveal>

                {/* Accordion Row List (Mild Colors & Elevated UI) */}
                <div className="space-y-3.5 sm:space-y-4 max-w-5xl mx-auto">
                  {principles.map((p, i) => {
                    const isOpen = activePrinciple === i;
                    return (
                      <Reveal key={p.num} delay={i * 0.05}>
                        <div
                          className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                            isOpen
                              ? "bg-gradient-to-r from-[#EFF6FF] via-white to-[#F0F9FF] border-[#2563EB] shadow-[0_12px_35px_rgba(37,99,235,0.16)] ring-2 ring-blue-500/15"
                              : "bg-gradient-to-r from-[#F8FAFC] via-white to-[#EFF6FF]/50 border-[#BFDBFE]/80 shadow-2xs hover:border-[#2563EB] hover:shadow-[0_8px_25px_rgba(37,99,235,0.10)] hover:-translate-y-0.5"
                          }`}
                        >
                          {/* Row Header */}
                          <button
                            type="button"
                            onClick={() => setActivePrinciple(isOpen ? null : i)}
                            className="w-full px-5 py-4 sm:px-7 sm:py-5 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer select-none"
                          >
                            {/* Left: Number Pill + Title */}
                            <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                              <span className={`px-2.5 py-1 rounded-xl font-mono font-black text-xs sm:text-sm shrink-0 transition-all ${
                                isOpen
                                  ? "bg-[#2563EB] text-white shadow-xs"
                                  : "bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]"
                              }`}>
                                {p.num}
                              </span>
                              <h3 className={`text-xs sm:text-sm md:text-base font-black tracking-wider uppercase truncate transition-colors ${
                                isOpen ? "text-[#2563EB]" : "text-slate-800 group-hover:text-[#2563EB]"
                              }`}>
                                {p.shortTitle}
                              </h3>
                            </div>

                            {/* Right: EXPLORE Badge + Chevron Circle */}
                            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                              <span className={`px-3 py-1 rounded-full text-[10.5px] sm:text-xs font-black uppercase tracking-widest transition-all ${
                                isOpen
                                  ? "bg-white text-[#2563EB] border border-[#BFDBFE] shadow-2xs"
                                  : "bg-white text-slate-500 border border-slate-200 group-hover:border-[#BFDBFE] group-hover:text-[#2563EB]"
                              }`}>
                                EXPLORE
                              </span>
                              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                isOpen
                                  ? "bg-[#2563EB] text-white rotate-180 shadow-xs"
                                  : "bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] group-hover:bg-[#2563EB] group-hover:text-white"
                              }`}>
                                <svg
                                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                              </div>
                            </div>
                          </button>

                          {/* Expandable Content Drawer */}
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 pb-5 pt-3 sm:px-7 sm:pb-6 border-t border-[#BFDBFE]/60 space-y-3 bg-gradient-to-b from-[#EFF6FF]/70 via-white to-[#F0F9FF]/80">
                                  <div className="flex items-center gap-2 pt-1">
                                    <span className="text-[10.5px] font-mono font-black text-white bg-[#2563EB] px-2.5 py-0.5 rounded-full shadow-2xs">
                                      STANDARD {p.num}
                                    </span>
                                    <span className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                                      {p.title}
                                    </span>
                                  </div>
                                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed text-left sm:text-justify">
                                    {p.desc}
                                  </p>
                                  {p.highlight && (
                                    <div className="inline-flex items-center gap-2 text-[11px] font-extrabold text-[#2563EB] bg-white border border-[#BFDBFE] px-3.5 py-1.5 rounded-xl shadow-xs">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                                      <span>{p.highlight}</span>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ
              05 FINAL CTA BANNER
          ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ */}
          <section className="max-w-[1600px] mx-auto w-full pt-4">
            <Reveal delay={0.05}>
              <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white text-center space-y-4 shadow-xl relative overflow-hidden">
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                  Have a Project in Mind? Let&apos;s Build It.
                </h2>
                <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-medium">
                  Share your requirements with us and get a technical breakdown and cost estimate within 2 hours.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/contact#inquiry-form"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-[#2563EB] font-black text-sm shadow-md hover:bg-blue-50 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
                  >
                    <span>Start a Conversation</span>
                    <span>&rarr;</span>
                  </Link>
                  <a
                    href="https://wa.me/919080558130"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white/15 border border-white/30 text-white font-extrabold text-sm hover:bg-white/25 transition-all w-full sm:w-auto justify-center"
                  >
                    <span>Chat on WhatsApp</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
