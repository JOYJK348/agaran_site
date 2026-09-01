"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";

const pillars = [
  {
    id: "mvp",
    num: "01",
    title: "Start Small, Build Smart",
    subtitle: "Launch Fast & Learn from Users",
    description:
      "You don't need to build everything at once. Start with an MVP, launch it, learn from real users, and build the next version with confidence.",
    tag: "SMART START",
    color: "#2563EB",
    colorLight: "#EFF6FF",
    colorBorder: "#BFDBFE",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a6 6 0 00-2.39 2.24" />
      </svg>
    ),
    screenContent: {
      items: [
        { label: "Essential Features Launched", status: "Done", highlight: true },
        { label: "Real User Feedback", status: "Gathering", highlight: true },
        { label: "Smart Next Updates", status: "Planned", highlight: false },
      ],
      metricLabel: "Launch Speed",
      metricValue: "3x Faster",
    },
  },
  {
    id: "focus",
    num: "02",
    title: "Build What You Need",
    subtitle: "Only Features That Matter",
    description:
      "We focus on the features that matter most, so you can move faster without unnecessary development.",
    tag: "ZERO WASTE",
    color: "#2563EB",
    colorLight: "#EFF6FF",
    colorBorder: "#BFDBFE",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    screenContent: {
      items: [
        { label: "Core Business Goals", status: "100% Focused", highlight: true },
        { label: "No Unused Extras", status: "Clean & Fast", highlight: true },
        { label: "Easy User Experience", status: "Tested", highlight: false },
      ],
      metricLabel: "Focus & Speed",
      metricValue: "100% Focused",
    },
  },
  {
    id: "practical",
    num: "03",
    title: "Practical AI & Automation",
    subtitle: "Real Value, Not Hype",
    description:
      "We build simple, practical AI and automation tools that actually help your team save time every day.",
    tag: "REAL IMPACT",
    color: "#2563EB",
    colorLight: "#EFF6FF",
    colorBorder: "#BFDBFE",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    screenContent: {
      items: [
        { label: "Daily Repetitive Tasks", status: "Automated", highlight: true },
        { label: "Smart Document Workflow", status: "Active", highlight: true },
        { label: "Team Hours Saved", status: "20+ hrs/wk", highlight: false },
      ],
      metricLabel: "Time Saved",
      metricValue: "20+ hrs/wk",
    },
  },
  {
    id: "growth",
    num: "04",
    title: "Long-Term Partnership",
    subtitle: "We Support as You Grow",
    description:
      "We don't just deliver and walk away. We help you improve your software, add features, and grow long term.",
    tag: "ALWAYS THERE",
    color: "#2563EB",
    colorLight: "#EFF6FF",
    colorBorder: "#BFDBFE",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    screenContent: {
      items: [
        { label: "System Health Checks", status: "Monitored", highlight: true },
        { label: "Continuous Feature Upgrades", status: "Ongoing", highlight: true },
        { label: "Dedicated Engineer Support", status: "Active", highlight: false },
      ],
      metricLabel: "System Support",
      metricValue: "24/7 Active",
    },
  },
];

function PhoneMockup({ current, isPaused }: { current: typeof pillars[0]; isPaused: boolean }) {
  const [timeStr, setTimeStr] = useState("09:41");

  // Real-Time Clock Updating Live Every Second (Asia/Kolkata Timezone)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[280px] xs:w-[300px] sm:w-[320px] rounded-[38px] bg-[#090D16] border-[6px] border-[#1e293b] shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden select-none">
      {/* Dynamic Ambient Island Glow */}
      <div
        className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-30 transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: current.color }}
      />

      {/* Screen Notch with Live Asia/Kolkata Real-Time Clock */}
      <div className="pt-3 pb-1.5 px-6 flex justify-between items-center bg-[#090D16] shrink-0 border-b border-white/5">
        <span className="text-[10.5px] font-mono font-black text-slate-300 tracking-wider">
          {timeStr}
        </span>
        <div className="w-16 h-3.5 bg-black rounded-full border border-white/10 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500/80 animate-pulse" />
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-slate-400" />
          <div className="w-2.5 h-1.5 rounded-xs bg-slate-400" />
        </div>
      </div>

      {/* Screen Body */}
      <div className="p-4 bg-[#090d16] text-white flex flex-col justify-between min-h-[460px] xs:min-h-[480px]">
        {/* Header bar */}
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black text-white"
                style={{ backgroundColor: current.color }}
              >
                A
              </div>
              <span className="text-[11px] font-extrabold tracking-wider text-slate-200 uppercase">
                AGARAN APP
              </span>
            </div>
            <span
              className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase"
              style={{ backgroundColor: current.colorLight, color: current.color }}
            >
              {current.tag}
            </span>
          </div>

          {/* Screen Content - Animated */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="space-y-3"
            >
              {/* Title inside phone */}
              <div>
                <div className="text-[9.5px] font-mono text-slate-400 uppercase tracking-wider">
                  PILLAR {current.num}
                </div>
                <h4 className="text-sm font-black text-white leading-tight mt-0.5">
                  {current.title}
                </h4>
              </div>

              {/* Status items */}
              <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                <div className="px-3 py-2 bg-white/5 border-b border-white/5 text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Execution Workflow
                </div>
                <div className="p-2 space-y-1.5">
                  {current.screenContent.items.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.22 }}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/5"
                    >
                      <span className="text-[11px] font-medium text-slate-300">{item.label}</span>
                      <span className="text-[9.5px] font-mono font-bold" style={{ color: item.highlight ? "#34d399" : "#64748b" }}>
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Metric */}
              <div className="rounded-xl px-4 py-3 flex items-center justify-between" style={{ background: `linear-gradient(135deg, ${current.color}22, ${current.color}0d)`, border: `1px solid ${current.color}35` }}>
                <div>
                  <div className="text-[8.5px] font-mono text-slate-400 uppercase tracking-wider">{current.screenContent.metricLabel}</div>
                  <div className="text-xl font-black text-white mt-0.5 tracking-tight">{current.screenContent.metricValue}</div>
                </div>
                <div className="px-3 py-1.5 rounded-lg text-white text-[10px] font-extrabold uppercase tracking-wider" style={{ backgroundColor: current.color }}>
                  Verified ✓
                </div>
              </div>

              {/* Progress bar — Freezes EXACTLY mid-fill on hover with animationPlayState */}
              <div className="h-0.5 rounded-full bg-white/10 overflow-hidden shrink-0">
                <div
                  key={current.id + "-bar"}
                  className="h-full rounded-full bg-[#2563EB]"
                  style={{
                    animationName: "fillProgress",
                    animationDuration: "4s",
                    animationTimingFunction: "linear",
                    animationFillMode: "forwards",
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Home bar */}
        <div className="py-2 flex justify-center bg-black shrink-0">
          <div className="w-20 h-1 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}

export default function WhyAgaran() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % pillars.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = pillars[activeIdx];

  return (
    <section
      ref={sectionRef}
      id="why-agaran"
      className="relative py-6 sm:py-8 lg:py-10 bg-white overflow-hidden w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Inline Keyframe for Precise Progress Bar Fill Freeze */}
      <style jsx global>{`
        @keyframes fillProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[#2563EB]/7 rounded-full blur-[120px] pointer-events-none" />

      {/* Comfortably Positioned Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-5xl xl:max-w-6xl mx-auto mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>WHY CHOOSE AGARAN</span>
          </div>

          <h2 className="text-[1.8rem] xs:text-[2.1rem] sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem] xl:text-[3.25rem] font-extrabold lg:font-black leading-[1.22] xs:leading-[1.18] sm:leading-[1.14] lg:leading-[1.12] tracking-[-0.035em] text-slate-900 lg:whitespace-nowrap">
            Built to Help Your{" "}
            <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent font-extrabold lg:font-black tracking-[-0.035em]">
              Business Grow
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 tracking-normal mt-4 lg:whitespace-nowrap">
            We build software that solves real problems, saves you time, and helps your company grow smoothly.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════
            MOBILE LAYOUT
        ══════════════════════════════════════ */}
        <div
          className="flex flex-col items-center gap-6 lg:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <PhoneMockup current={current} isPaused={isPaused} />
          </motion.div>

          {/* 4 Pill Selector Tabs */}
          <motion.div
            className="w-full max-w-[340px] xs:max-w-[360px] grid grid-cols-4 gap-2.5"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            {pillars.map((pillar, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsPaused(true);
                  }}
                  onMouseEnter={() => {
                    setActiveIdx(idx);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  className="flex flex-col items-center gap-1.5 py-3 px-1 rounded-2xl border transition-all duration-300 focus:outline-none"
                  style={{
                    backgroundColor: isActive ? "#EFF6FF" : "#f8fafc",
                    borderColor: isActive ? "#BFDBFE" : "#f1f5f9",
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: isActive ? "#2563EB" : "#e2e8f0" }}
                  >
                    <span style={{ color: isActive ? "#fff" : "#94a3b8" }}>{pillar.icon}</span>
                  </span>
                  <span
                    className="text-[9.5px] font-mono font-black tracking-widest"
                    style={{ color: isActive ? "#2563EB" : "#cbd5e1" }}
                  >
                    {pillar.num}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Active Description Block */}
          <motion.div
            className="w-full max-w-sm sm:max-w-md text-left"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-mob"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl p-4.5 border bg-[#EFF6FF] border-[#BFDBFE]"
              >
                {/* Tag + title */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border text-[#2563EB] bg-white border-[#BFDBFE]">
                    {current.tag}
                  </span>
                </div>

                <h3 className="text-[1.1rem] sm:text-xl font-extrabold lg:font-black tracking-[-0.035em] mb-1.5 leading-snug text-[#2563EB]">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600 tracking-normal">
                  {current.description}
                </p>

                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                    {current.subtitle}
                  </span>
                  <span className="text-[#2563EB] text-xs">→</span>
                </div>

                {/* Progress */}
                <div className="mt-3.5 h-0.5 rounded-full bg-white/60 overflow-hidden">
                  <div
                    key={current.id + "-mob-bar"}
                    className="h-full rounded-full bg-[#2563EB]"
                    style={{
                      animationName: "fillProgress",
                      animationDuration: "4s",
                      animationTimingFunction: "linear",
                      animationFillMode: "forwards",
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════
            DESKTOP LAYOUT (Ultra-Sleek Cardless Icon-Node Stepper with Instant Hover Freeze)
        ══════════════════════════════════════ */}
        <div
          className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT: Cardless Glowing Icon Node Stepper (7 Cols) */}
          <div className="lg:col-span-7 relative pl-3">
            {/* Vertical Timeline Guide Line */}
            <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-slate-200/80 -z-0" />

            <div className="space-y-6 sm:space-y-8 relative z-10">
              {pillars.map((pillar, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                  >
                    <button
                      onClick={() => {
                        setActiveIdx(idx);
                        setIsPaused(true);
                      }}
                      onMouseEnter={() => {
                        setActiveIdx(idx);
                        setIsPaused(true);
                      }}
                      onMouseLeave={() => setIsPaused(false)}
                      className="group w-full text-left flex items-start gap-4 sm:gap-5 focus:outline-none cursor-pointer"
                    >
                      {/* 3D Icon Node Badge */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] scale-110 ring-4 ring-blue-100"
                            : "bg-slate-100 text-slate-500 border border-slate-200/90 group-hover:bg-white group-hover:text-[#2563EB] group-hover:border-blue-200 shadow-2xs"
                        }`}
                      >
                        {pillar.icon}
                      </motion.div>

                      {/* Content Column */}
                      <div className="flex-1 pt-1">
                        {/* Title & Tag Row */}
                        <div className="flex items-center justify-between gap-3 mb-1">
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`text-[10px] font-mono font-black tracking-widest ${
                                isActive ? "text-[#2563EB]" : "text-slate-400"
                              }`}
                            >
                              {pillar.num}
                            </span>

                            <h3
                              className={`text-lg sm:text-xl lg:text-[1.25rem] font-black tracking-[-0.025em] leading-snug transition-colors duration-300 ${
                                isActive ? "text-[#2563EB]" : "text-slate-800 group-hover:text-[#2563EB]"
                              }`}
                            >
                              {pillar.title}
                            </h3>
                          </div>

                          <AnimatePresence>
                            {isActive && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0.8, x: 6 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.8, x: 6 }}
                                transition={{ duration: 0.2 }}
                                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-wider border bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE] shrink-0"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-ping" />
                                {pillar.tag}
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Expandable Narrative */}
                        <AnimatePresence initial={false}>
                          {isActive ? (
                            <motion.div
                              key="body"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                              className="overflow-hidden pt-1.5"
                            >
                              <p className="text-xs sm:text-sm lg:text-[0.95rem] font-medium text-slate-600 leading-relaxed max-w-xl">
                                {pillar.description}
                              </p>

                              <div className="mt-2.5 flex items-center gap-2">
                                <span className="text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                                  {pillar.subtitle}
                                </span>
                                <span className="text-[#2563EB] text-xs font-bold">→</span>
                              </div>
                            </motion.div>
                          ) : (
                            <p className="text-xs font-medium text-slate-500 truncate max-w-md mt-0.5">
                              {pillar.subtitle}
                            </p>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Sticky Phone (5 Cols) */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-start sticky top-24"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          >
            <PhoneMockup current={current} isPaused={isPaused} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
