"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const worlds = [
  {
    id: "startups",
    num: "01",
    label: "STARTUPS & BUSINESSES",
    shortName: "STARTUPS",
    title: "Have an Idea? Let’s Build It.",
    tagline: "Idea → First Version → Launch → Grow",
    description:
      "Start with what you need, launch it, see how people use it, and improve it as you grow.",
    image: "/images/ecosystem/startups.png",
    accentColor: "#2563EB",
    bgTint: "bg-blue-50/70 border-blue-200/90",
    badgePill: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    ctaText: "Build Your Idea →",
    features: [
      "Start With the Essentials",
      "Launch Without Overbuilding",
      "Improve Based on Real Use",
      "Add More as You Grow",
    ],
  },
  {
    id: "education",
    num: "02",
    label: "EDUCATION & TRAINING",
    shortName: "EDUCATION",
    title: "From Admissions to Career Guidance.",
    tagline: "Admission → LMS → Exams → AI → Career",
    description:
      "We build technology that supports the complete student journey — from joining an institution to learning, assessment and finding the right path ahead.",
    image: "/images/ecosystem/education.png",
    accentColor: "#2563EB",
    bgTint: "bg-blue-50/70 border-blue-200/90",
    badgePill: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    ctaText: "Build For Education →",
    features: [
      "Online Forms & Admissions",
      "LMS & Digital Learning",
      "Tests & Exam Management",
      "AI Learning & Student Support",
      "Career Guidance & Counselling",
    ],
  },
  {
    id: "organizations",
    num: "03",
    label: "ORGANIZATIONS & TEAMS",
    shortName: "TEAMS",
    title: "Make Everyday Work Easier.",
    tagline: "Keep your team, tasks and information organised in one simple place.",
    description:
      "We build simple systems that make day-to-day work easier for your team.",
    image: "/images/ecosystem/organizations.png",
    accentColor: "#2563EB",
    bgTint: "bg-blue-50/70 border-blue-200/90",
    badgePill: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    ctaText: "Build Your Solution →",
    features: [
      "Keep Everything Organised",
      "Reduce Repetitive Work",
      "Find Things Faster",
      "Help Your Team Work Better",
    ],
  },
  {
    id: "ideas",
    num: "04",
    label: "NEW IDEAS & INNOVATIONS",
    shortName: "NEW IDEAS",
    title: "Have a problem to solve? Let's find a better way to do it.",
    tagline: "Problem → Smart Approach → Tailored Solution → Result",
    description:
      "Have a problem to solve? Let's find a better way to do it. We help you explore new ideas and engineer smart technology solutions designed specifically for your unique goals.",
    image: "/images/ecosystem/ideas.png",
    accentColor: "#2563EB",
    bgTint: "bg-blue-50/70 border-blue-200/90",
    badgePill: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    features: [
      "Custom Problem Solving",
      "Tailored System Design",
      "Smart Process AI & Software",
      "Turnkey Production Delivery",
    ],
  },
];

export default function WhoWeBuildForInteractive() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  // Auto-cycle through the 4 worlds every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % worlds.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Handle Explicit User Click / Tap -> Smooth Auto-Scroll to Top of Showcase
  const handleUserClick = (idx: number) => {
    setActiveIdx(idx);
    setTimeout(() => {
      if (showcaseRef.current) {
        const yOffset = -80; // offset for fixed navbar header
        const y = showcaseRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 60);
  };

  const activeWorld = worlds[activeIdx];

  return (
    <section
      ref={sectionRef}
      id="who-we-build-for"
      className="relative py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Keyframes for Exact Progress Line Pause/Resume */}
      <style jsx global>{`
        @keyframes worldProgressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {/* Background Ambient Glows & Dot Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#2563EB]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35 pointer-events-none" />

      <div className="relative z-10 w-full max-w-full px-2 xs:px-3 sm:px-4 lg:px-6">
        
        {/* Section Header - Instantly Visible */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>WHO WE BUILD FOR</span>
          </div>

          <h2 className="text-[1.8rem] xs:text-[2.1rem] sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem] xl:text-[3.25rem] font-extrabold lg:font-black leading-[1.22] xs:leading-[1.18] sm:leading-[1.14] lg:leading-[1.12] tracking-[-0.035em] text-slate-900">
            From Everyday Needs{" "}
            <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent font-extrabold lg:font-black tracking-[-0.035em]">
              to Bigger Ideas.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-[1.08rem] font-medium leading-relaxed text-slate-600 tracking-normal mt-4 max-w-2xl mx-auto">
            Technology can take many forms depending on who needs it. We architect intelligent systems tailored to your specific ecosystem.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ACTIVE WORLD DISPLAY SHOWCASE (Image LEFT | Content RIGHT)
        ════════════════════════════════════════════════════════════════ */}
        <div
          ref={showcaseRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          className="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-5 sm:p-8 lg:p-12 overflow-hidden scroll-mt-24 w-full"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={activeWorld.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: High-Res Brand 3D Image Showcase */}
              <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-1">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl bg-gradient-to-tr from-slate-50 via-white to-blue-50/40 group">
                  <Image
                    src={activeWorld.image}
                    alt={activeWorld.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Right Column: World Narrative & Capabilities */}
              <div className="lg:col-span-6 space-y-3.5 sm:space-y-5 lg:space-y-6 order-2 lg:order-2 text-left">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-wider text-[#2563EB] mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    {activeWorld.label}
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:font-black text-slate-900 tracking-[-0.035em] leading-tight">
                    {activeWorld.title}
                  </h3>
                </div>

                <div className="p-3 sm:px-4 sm:py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
                  {activeWorld.tagline}
                </div>

                <p className="text-xs sm:text-sm lg:text-base font-medium leading-relaxed text-slate-600 tracking-normal">
                  {activeWorld.description}
                </p>

                {/* Features Bullet List - Wrap cleanly on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                  {activeWorld.features.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs sm:text-[13px] font-extrabold text-slate-800 leading-snug">
                      <span className="w-4 h-4 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">✓</span>
                      <span className="whitespace-normal break-words">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 sm:pt-3">
                  <Button variant="primary" href="/contact" className="text-xs sm:text-sm px-7 py-3.5 rounded-xl font-bold shadow-md w-full sm:w-auto justify-center">
                    {activeWorld.ctaText ? activeWorld.ctaText : `Build For ${activeWorld.label.split("&")[0]} →`}
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Top Showcase Blue Progress Line — Pauses at Exact Percentage on Hover & Resumes on Leave */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
            <div
              key={activeWorld.id + "-top-progress"}
              className="h-full bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7]"
              style={{
                animationName: "worldProgressFill",
                animationDuration: "4.5s",
                animationTimingFunction: "linear",
                animationFillMode: "forwards",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ULTRA-RICH 3D FLOATING GLASS SEGMENT NAVIGATION DOCK
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="mt-6 p-2.5 sm:p-3.5 rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_15px_40px_rgba(37,99,235,0.08)] backdrop-blur-2xl w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full">
            {worlds.map((w, idx) => {
              const isActive = activeIdx === idx;
              return (
                <motion.button
                  key={w.id + "-rich-indicator"}
                  onClick={() => handleUserClick(idx)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative p-3 sm:p-4 rounded-2xl transition-all duration-300 text-left cursor-pointer focus:outline-none overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-b from-white via-blue-50/80 to-white border-2 border-[#2563EB] shadow-md shadow-blue-500/10 scale-[1.02]"
                      : "bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-blue-200"
                  }`}
                >
                  {/* Header Row: Monospace Step Pill + Live Pulse */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[9.5px] font-mono font-black tracking-widest px-2 py-0.5 rounded-md border ${
                        isActive
                          ? "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]"
                          : "bg-slate-200/70 text-slate-500 border-slate-300/60"
                      }`}
                    >
                      {w.num}
                    </span>

                    {isActive && (
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-ping" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      </div>
                    )}
                  </div>

                  {/* Step Short Title */}
                  <div
                    className={`text-[11px] sm:text-xs font-black uppercase tracking-wider truncate mb-2.5 ${
                      isActive ? "text-[#2563EB]" : "text-slate-700"
                    }`}
                  >
                    {w.shortName}
                  </div>

                  {/* Step Segment Fill Bar — Pauses at Exact Percentage on Hover & Resumes on Leave */}
                  <div className="w-full h-1.5 rounded-full bg-slate-200/90 overflow-hidden">
                    {isActive ? (
                      <div
                        key={activeWorld.id + "-nav-fill"}
                        className="h-full bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] rounded-full"
                        style={{
                          animationName: "worldProgressFill",
                          animationDuration: "4.5s",
                          animationTimingFunction: "linear",
                          animationFillMode: "forwards",
                          animationPlayState: isPaused ? "paused" : "running",
                        }}
                      />
                    ) : idx < activeIdx ? (
                      <div className="h-full bg-[#2563EB] rounded-full" />
                    ) : null}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── INCLUSIVE BOTTOM BANNER ── */}
        <motion.div
          className="mt-10 sm:mt-14 p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 border border-blue-200/80 text-center relative overflow-hidden shadow-xs w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider">
              Custom Technology Engineering
            </div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-extrabold lg:font-black text-slate-900 tracking-tight">
              Not seeing your exact category here?
            </h4>
            <p className="text-xs sm:text-sm lg:text-base font-medium text-slate-600">
              That&apos;s okay. We build custom technology solutions tailored specifically to your unique workflow.
            </p>
            <div className="pt-2">
              <Button variant="secondary" href="/contact" className="text-xs sm:text-sm px-6 py-3 rounded-xl font-bold bg-white border-slate-200 hover:border-blue-300">
                Tell Us What You&apos;re Building →
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
