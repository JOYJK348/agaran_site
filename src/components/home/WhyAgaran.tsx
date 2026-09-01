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
      <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
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
      <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
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
    id: "scale",
    num: "03",
    title: "Grow Step by Step",
    subtitle: "Expands as Your Business Grows",
    description:
      "Start with the essentials and add new features, users, and capabilities as your needs grow.",
    tag: "EASY SCALING",
    color: "#2563EB",
    colorLight: "#EFF6FF",
    colorBorder: "#BFDBFE",
    icon: (
      <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    screenContent: {
      items: [
        { label: "Ready for More Users", status: "Smooth", highlight: true },
        { label: "Easy Feature Add-Ons", status: "Flexible", highlight: true },
        { label: "Reliable Daily Operation", status: "99.99% Stable", highlight: false },
      ],
      metricLabel: "System Reliability",
      metricValue: "99.99% Stable",
    },
  },
  {
    id: "ai",
    num: "04",
    title: "AI Where It Makes Sense",
    subtitle: "AI That Saves Time & Money",
    description:
      "We use AI where it genuinely adds value — not just because it's trending.",
    tag: "REAL AI VALUE",
    color: "#2563EB",
    colorLight: "#EFF6FF",
    colorBorder: "#BFDBFE",
    icon: (
      <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    screenContent: {
      items: [
        { label: "Automatic Customer Replies", status: "Instant", highlight: true },
        { label: "Smart Repetitive Work AI", status: "Zero Error", highlight: true },
        { label: "Measurable Savings", status: "High Value", highlight: false },
      ],
      metricLabel: "Time Saved",
      metricValue: "4.2x Faster",
    },
  },
];

// ─── Shared iPhone Mockup (Real-Time Asia/Kolkata Clock) ───────────────────────────────────────────
function PhoneMockup({ current }: { current: typeof pillars[0] }) {
  const [kolkataTime, setKolkataTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(now);
        setKolkataTime(formatted);
      } catch {
        setKolkataTime("9:41 PM");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[320px] xs:max-w-[340px] sm:max-w-[360px] rounded-[48px] bg-gradient-to-b from-[#3B3E43] via-[#1F2125] to-[#121315] p-3 shadow-[0_24px_60px_rgba(15,23,42,0.18)] border border-[#484B52]/60">
      {/* Side Buttons */}
      <div className="absolute -left-[4px] top-20 w-[4px] h-6 bg-slate-600 rounded-l-md" />
      <div className="absolute -left-[4px] top-32 w-[4px] h-10 bg-slate-600 rounded-l-md" />
      <div className="absolute -left-[4px] top-44 w-[4px] h-10 bg-slate-600 rounded-l-md" />
      <div className="absolute -right-[4px] top-28 w-[4px] h-14 bg-slate-600 rounded-r-md" />

      {/* Screen */}
      <div className="relative rounded-[38px] bg-[#09090b] overflow-hidden border border-slate-800/60 h-[495px] flex flex-col select-none">
        {/* Live Status Bar (Real-Time Asia/Kolkata IST Clock) */}
        <div className="pt-3 px-5 pb-2 bg-black flex items-center justify-between shrink-0">
          <span className="text-[10.5px] font-semibold text-white tracking-tight font-mono">
            {kolkataTime || "9:41 PM"}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
            <span className="text-[9px] font-bold text-white ml-0.5">5G</span>
          </div>
        </div>

        {/* App Header */}
        <div className="px-4 py-3 bg-[#111115] border-b border-white/5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center p-0.5 shrink-0 shadow-md overflow-hidden">
              <Image
                src="/logo-transparent.png"
                alt="Agaran Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain scale-110"
              />
            </div>
            <div>
              <div className="text-[11.5px] font-black text-white leading-tight">Agaran Dashboard</div>
              <div className="text-[8.5px] font-mono text-slate-400 mt-0.5">Business Intelligence</div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.span
              key={current.id + "-badge"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="px-2.5 py-0.5 rounded-full text-[8.5px] font-extrabold uppercase tracking-wider border"
              style={{ backgroundColor: current.colorLight, color: current.color, borderColor: current.colorBorder }}
            >
              {current.tag}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-hidden bg-[#0c0c10]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.26, ease: "easeOut" }}
              className="flex flex-col gap-3 p-4 h-full justify-between"
            >
              {/* Clean Title strip */}
              <div className="rounded-2xl px-4 py-3 bg-[#2563EB]/15 border border-[#2563EB]/30">
                <div className="text-xs font-black text-white leading-tight tracking-tight">{current.title}</div>
                <div className="text-[9.5px] font-medium text-slate-400 mt-0.5 leading-tight">{current.subtitle}</div>
              </div>

              {/* Status list */}
              <div className="rounded-2xl bg-white/5 border border-white/8 overflow-hidden">
                <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/5">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">Workflow Status</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[8.5px] font-bold text-emerald-400">ACTIVE</span>
                  </div>
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

              {/* Progress bar */}
              <div className="h-0.5 rounded-full bg-white/10 overflow-hidden shrink-0">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: current.color }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  key={current.id + "-prog"}
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
      className="relative py-6 sm:py-8 lg:py-10 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[#2563EB]/7 rounded-full blur-[120px] pointer-events-none" />

      <Container as="div">
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">

          {/* Section Header */}
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span>WHY CHOOSE AGARAN</span>
            </div>

            <h2 className="text-[1.8rem] xs:text-[2.1rem] sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem] xl:text-[3.15rem] font-extrabold lg:font-black leading-[1.22] xs:leading-[1.18] sm:leading-[1.14] lg:leading-[1.12] tracking-[-0.035em] text-slate-900">
              Built to Help Your{" "}
              <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent font-extrabold lg:font-black tracking-[-0.035em]">
                Business Grow
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 tracking-normal mt-4">
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
          >
            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="w-full flex justify-center"
            >
              <PhoneMockup current={current} />
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
                    onClick={() => setActiveIdx(idx)}
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
              className="w-full max-w-[340px] xs:max-w-[360px]"
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
                    <motion.div
                      className="h-full rounded-full bg-[#2563EB]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4, ease: "linear" }}
                      key={current.id + "-mob-prog"}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* ══════════════════════════════════════
              DESKTOP LAYOUT
          ══════════════════════════════════════ */}
          <div
            className="hidden lg:flex gap-14 items-start"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* LEFT: Accordion List */}
            <div className="w-[52%]">
              {pillars.map((pillar, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                  >
                    {idx === 0 && <div className="h-px bg-slate-100" />}
                    <button
                      onClick={() => setActiveIdx(idx)}
                      className="group w-full text-left relative py-6 flex items-start gap-5 focus:outline-none"
                    >
                      {/* Left accent */}
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                        animate={{
                          backgroundColor: isActive ? "#2563EB" : "transparent",
                          scaleY: isActive ? 1 : 0.3,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ originY: 0 }}
                      />

                      {/* Number */}
                      <span
                        className="shrink-0 text-[10.5px] sm:text-xs font-mono font-black tracking-wider mt-1 w-7 text-right transition-colors duration-300"
                        style={{ color: isActive ? "#2563EB" : "#94a3b8" }}
                      >
                        {pillar.num}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <h3
                            className="text-base sm:text-lg lg:text-xl font-extrabold lg:font-black tracking-[-0.035em] leading-snug transition-colors duration-300"
                            style={{ color: isActive ? "#2563EB" : "#64748b" }}
                          >
                            {pillar.title}
                          </h3>

                          <div className="flex items-center gap-2 shrink-0 mt-0.5">
                            <AnimatePresence>
                              {isActive && (
                                <motion.span
                                  initial={{ opacity: 0, scale: 0.7, x: 8 }}
                                  animate={{ opacity: 1, scale: 1, x: 0 }}
                                  exit={{ opacity: 0, scale: 0.7, x: 8 }}
                                  transition={{ duration: 0.22 }}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider border bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]"
                                >
                                  {pillar.icon}
                                  {pillar.tag}
                                </motion.span>
                              )}
                            </AnimatePresence>

                            <motion.span
                              animate={{ rotate: isActive ? 90 : 0, color: isActive ? "#2563EB" : "#94a3b8" }}
                              transition={{ duration: 0.25 }}
                              className="text-lg font-[#94a3b8] leading-none select-none"
                            >
                              →
                            </motion.span>
                          </div>
                        </div>

                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              key="body"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 tracking-normal mt-2.5 pr-2">
                                {pillar.description}
                              </p>

                              <div className="mt-3 flex items-center gap-1.5">
                                <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                                  {pillar.subtitle}
                                </span>
                                <span className="text-[#2563EB] text-xs">→</span>
                              </div>

                              <div className="mt-4 h-0.5 rounded-full bg-slate-100 overflow-hidden">
                                <motion.div
                                  className="h-full rounded-full bg-[#2563EB]"
                                  initial={{ width: "0%" }}
                                  animate={{ width: "100%" }}
                                  transition={{ duration: 4, ease: "linear" }}
                                  key={pillar.id + "-bar"}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                    <div className="h-px bg-slate-100" />
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT: Sticky Phone */}
            <motion.div
              className="w-[48%] flex justify-end items-start sticky top-24"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            >
              <PhoneMockup current={current} />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
