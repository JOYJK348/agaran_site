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
    title: "Have an idea? Let's turn it into something that works.",
    tagline: "Vision → MVP → Real Product → User Growth",
    description:
      "Have an idea? Let's turn it into something that works. We focus on building what you actually need so you can launch fast, learn from real users, and grow with confidence.",
    image: "/images/ecosystem/startups.png",
    accentColor: "#2563EB",
    bgTint: "bg-blue-50/70 border-blue-200/90",
    badgePill: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a6 6 0 00-2.39 2.24" />
      </svg>
    ),
    features: [
      "Practical MVP Launch",
      "User-Focused Feature Design",
      "Scalable Software Architecture",
      "Fast Iteration & Feedback",
    ],
  },
  {
    id: "education",
    num: "02",
    label: "EDUCATION & TRAINING",
    shortName: "EDUCATION",
    title: "Make everyday work easier for your team, teachers & students.",
    tagline: "Classes → Exams → Student Learning → Easy Management",
    description:
      "Make everyday work easier for your team, teachers & students. Simple tools that streamline academic management, online & offline test workflows, and student learning experiences.",
    image: "/images/ecosystem/education.png",
    accentColor: "#2563EB",
    bgTint: "bg-blue-50/70 border-blue-200/90",
    badgePill: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    features: [
      "Simple Test & Exam Engine",
      "Interactive Learning Tools",
      "Easy Academic Dashboards",
      "Parent & Student Portals",
    ],
  },
  {
    id: "organizations",
    num: "03",
    label: "ORGANIZATIONS & TEAMS",
    shortName: "TEAMS",
    title: "Bring your people, work & information together in one place.",
    tagline: "Teams → Workflows → Automation → Smooth Operations",
    description:
      "Bring your people, work & information together in one place. We create custom platforms and practical automation to help your team collaborate effortlessly and save time.",
    image: "/images/ecosystem/organizations.png",
    accentColor: "#2563EB",
    bgTint: "bg-blue-50/70 border-blue-200/90",
    badgePill: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7m4 0v5" />
      </svg>
    ),
    features: [
      "Connected Team Hubs",
      "Automated Routine Tasks",
      "Central Information Flow",
      "Reliable Daily Execution",
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
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-4a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
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

  // Handle Explicit User Click / Tap ON MOBILE & DESKTOP -> Smooth Auto-Scroll to Top of Showcase
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
    >
      {/* Background Ambient Glows & Dot Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] h-[450px] bg-[#2563EB]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
            ULTRA-RICH ANIMATED FLOATING CAPSULE MATRIX (Desktop & Tablet)
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="hidden sm:block relative mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {worlds.map((world, idx) => {
              const isActive = activeIdx === idx;
              return (
                <motion.button
                  key={world.id}
                  onClick={() => handleUserClick(idx)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-5 sm:p-6 rounded-3xl text-left transition-all duration-300 backdrop-blur-xl focus:outline-none cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-b from-white via-blue-50/50 to-white border-2 border-[#2563EB] shadow-[0_20px_45px_rgba(37,99,235,0.18)]"
                      : "bg-white/90 border border-slate-200/90 hover:bg-white hover:border-blue-200 shadow-sm"
                  }`}
                >
                  {/* Glowing Mesh Accent behind active card */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-[#2563EB]/15 blur-2xl pointer-events-none"
                    />
                  )}

                  {/* Top Row: Icon Badge + Watermark Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                        isActive
                          ? "bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] text-white shadow-blue-500/30 scale-105"
                          : "bg-slate-100/90 text-slate-600 border border-slate-200/80 group-hover:text-[#2563EB]"
                      }`}
                    >
                      {world.icon}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
                      )}
                      <span
                        className={`text-xs font-mono font-black tracking-widest ${
                          isActive ? "text-[#2563EB]" : "text-slate-400"
                        }`}
                      >
                        {world.num}
                      </span>
                    </div>
                  </div>

                  {/* Category Label */}
                  <div
                    className={`text-[10.5px] sm:text-xs font-black uppercase tracking-wider mb-1.5 ${
                      isActive ? "text-[#2563EB]" : "text-slate-500"
                    }`}
                  >
                    {world.label}
                  </div>

                  {/* Title Sentence */}
                  <div className="text-xs sm:text-[13px] font-extrabold text-slate-900 leading-snug line-clamp-2 min-h-[36px]">
                    {world.title}
                  </div>

                  {/* Bottom Active Progress Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeLine"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7]"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ULTRA-RICH MOBILE EXPLORABLE SWIPE MATRIX (Mobile-First 100%)
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="block sm:hidden mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 4 Interactive Capsule Pills */}
          <div className="grid grid-cols-2 gap-2.5">
            {worlds.map((world, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={world.id}
                  onClick={() => handleUserClick(idx)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`relative p-3.5 rounded-2xl text-left border transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "bg-gradient-to-b from-white via-blue-50/60 to-white border-2 border-[#2563EB] shadow-md"
                      : "bg-white border-slate-200 text-slate-600"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs ${
                        isActive
                          ? "bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] text-white shadow-sm"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {world.icon}
                    </div>
                    <span
                      className={`text-[9.5px] font-mono font-black ${
                        isActive ? "text-[#2563EB]" : "text-slate-400"
                      }`}
                    >
                      {world.num}
                    </span>
                  </div>

                  <div
                    className={`text-[9.5px] font-black uppercase tracking-wider truncate mb-0.5 ${
                      isActive ? "text-[#2563EB]" : "text-slate-500"
                    }`}
                  >
                    {world.label.split("&")[0]}
                  </div>

                  <div className="text-[11px] font-extrabold text-slate-900 line-clamp-1 leading-tight">
                    {world.title}
                  </div>

                  {isActive && (
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#2563EB]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ACTIVE WORLD DISPLAY SHOWCASE (Image LEFT | Content RIGHT)
        ════════════════════════════════════════════════════════════════ */}
        <div
          ref={showcaseRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          className="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-6 sm:p-10 lg:p-12 overflow-hidden scroll-mt-24 w-full"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWorld.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
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
              <div className="lg:col-span-6 space-y-4 sm:space-y-5 lg:space-y-6 order-2 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] font-extrabold uppercase tracking-wider text-[#2563EB]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  {activeWorld.label}
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:font-black text-slate-900 tracking-[-0.035em] leading-tight">
                  {activeWorld.title}
                </h3>

                <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-100/90 text-xs sm:text-sm font-bold text-slate-700 font-mono">
                  {activeWorld.tagline}
                </div>

                <p className="text-xs sm:text-sm lg:text-base font-medium leading-relaxed text-slate-600 tracking-normal">
                  {activeWorld.description}
                </p>

                {/* Features Bullet List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                  {activeWorld.features.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-[13px] font-extrabold text-slate-800">
                      <span className="w-4 h-4 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <Button variant="primary" href="/contact" className="text-xs sm:text-sm px-7 py-3.5 rounded-xl font-bold shadow-md w-full sm:w-auto justify-center">
                    Build For {activeWorld.label.split("&")[0]} <span className="ml-1.5">→</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Top Showcase Active Progress Countdown Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
            <motion.div
              key={activeWorld.id + "-top-progress"}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4.5, ease: "linear" }}
              className="h-full bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7]"
            />
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            MOBILE-ONLY ANIMATED 4-STEP ECOSYSTEM PROGRESS INDICATOR BAR
        ════════════════════════════════════════════════════════════════ */}
        <div className="block sm:hidden mt-6 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-4 gap-1.5 w-full">
            {worlds.map((w, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={w.id + "-indicator-mobile"}
                  onClick={() => handleUserClick(idx)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all border text-center cursor-pointer ${
                    isActive
                      ? "bg-[#EFF6FF] border-[#BFDBFE] text-[#2563EB] font-black shadow-2xs"
                      : "bg-slate-50 border-slate-200/80 text-slate-500 font-bold"
                  }`}
                >
                  <span className="text-[9.5px] font-black uppercase tracking-wider truncate w-full mb-1">
                    {w.shortName}
                  </span>

                  {/* Step Segment Fill Bar */}
                  <div className="w-full h-1 rounded-full bg-slate-200 overflow-hidden">
                    {isActive ? (
                      <motion.div
                        key={activeWorld.id + "-step-fill-mobile"}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4.5, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-[#1D4ED8] to-[#2563EB]"
                      />
                    ) : idx < activeIdx ? (
                      <div className="h-full bg-[#2563EB]" />
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── INCLUSIVE BOTTOM BANNER ── */}
        <motion.div
          className="mt-12 sm:mt-16 p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 border border-blue-200/80 text-center relative overflow-hidden shadow-xs"
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
