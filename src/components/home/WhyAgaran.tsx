"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";

const pillars = [
  {
    id: "mvp",
    num: "01",
    title: "Start Simple & Launch Fast",
    subtitle: "Build First, Improve as You Learn",
    description:
      "You don't need a huge budget or months of waiting. We build your core product first so you can launch quickly and get real customer feedback.",
    tag: "QUICK LAUNCH",
    color: "#2563EB",
    colorLight: "#EFF6FF",
    colorBorder: "#BFDBFE",
    activeBadge: "bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] ring-4 ring-blue-100",
    inactiveBadge: "bg-blue-50/90 text-[#2563EB] border border-blue-200 group-hover:bg-blue-100/70",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 4L20 2L21 4L23 5L21 6L20 8L19 6L17 5L19 4Z" fill="currentColor" opacity="0.9" />
        <path d="M4.5 19.5C4.5 19.5 5.5 15 9 11.5L12.5 15C9 18.5 4.5 19.5 4.5 19.5Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11.5C11.5 9 15.5 5 19.5 4.5C19 8.5 15 12.5 12.5 15L9 11.5Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14.5" cy="9.5" r="1.75" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.4" />
        <path d="M6 14.5L3.5 16.5L4.5 19.5L7.5 18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 18L5.5 19.5L7.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 21L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    screenContent: {
      items: [
        { label: "Build Core Features", status: "Ready ✓", highlight: true },
        { label: "Get Customer Feedback", status: "Live Now", highlight: true },
        { label: "Add Next Enhancements", status: "Planned", highlight: false },
      ],
      metricLabel: "Time to Launch",
      metricValue: "Weeks, Not Months",
    },
  },
  {
    id: "focus",
    num: "02",
    title: "Build Exactly What You Need",
    subtitle: "Simple, Clean & Easy to Use",
    description:
      "We don't overload your app with confusing extras you'll never use. We focus only on what helps your business run smoothly.",
    tag: "ZERO CONFUSION",
    color: "#2563EB",
    colorLight: "#EFF6FF",
    colorBorder: "#BFDBFE",
    activeBadge: "bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] ring-4 ring-blue-100",
    inactiveBadge: "bg-blue-50/90 text-[#2563EB] border border-blue-200 group-hover:bg-blue-100/70",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3.5H18L22 9.5L12 21.5L2 9.5L6 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 9.5H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21.5L7.5 9.5L10.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21.5L16.5 9.5L13.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 9.5L12 21.5L16.5 9.5H7.5Z" fill="currentColor" opacity="0.25" />
        <circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.8" />
      </svg>
    ),
    screenContent: {
      items: [
        { label: "Essential Business Tools", status: "100% Built", highlight: true },
        { label: "Clean Mobile & Web App", status: "Super Fast", highlight: true },
        { label: "Simple for Anyone", status: "Easy ✓", highlight: false },
      ],
      metricLabel: "User Experience",
      metricValue: "100% Simple",
    },
  },
  {
    id: "practical",
    num: "03",
    title: "Automate Daily Repeat Work",
    subtitle: "Let Technology Do the Busywork",
    description:
      "Stop wasting hours sending manual emails, typing reports, or copying files. We create smart tools that handle daily repeat tasks for you.",
    tag: "SAVE TIME",
    color: "#2563EB",
    colorLight: "#EFF6FF",
    colorBorder: "#BFDBFE",
    activeBadge: "bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] ring-4 ring-blue-100",
    inactiveBadge: "bg-blue-50/90 text-[#2563EB] border border-blue-200 group-hover:bg-blue-100/70",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.75V4.25M12 19.75V21.25M4.25 12H2.75M21.25 12H19.75M6.5 6.5L5.4 5.4M18.6 18.6L17.5 17.5M17.5 6.5L18.6 5.4M5.4 18.6L6.5 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.4" />
        <path d="M13.5 2.5L4.5 13H12L10.5 21.5L19.5 11H12L13.5 2.5Z" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="4.5" r="1" fill="currentColor" />
      </svg>
    ),
    screenContent: {
      items: [
        { label: "Manual Data Entry", status: "Automated ✓", highlight: true },
        { label: "Customer Auto-Replies", status: "Active", highlight: true },
        { label: "Weekly Hours Saved", status: "15+ Hours", highlight: false },
      ],
      metricLabel: "Hours Saved Weekly",
      metricValue: "15+ Hours Saved",
    },
  },
  {
    id: "growth",
    num: "04",
    title: "We Stay & Help You Grow",
    subtitle: "Full Support Even After Launch",
    description:
      "We don't just build your app and disappear. Whenever you need updates, fixes, or new features, our team is always just a call away.",
    tag: "FULL SUPPORT",
    color: "#2563EB",
    colorLight: "#EFF6FF",
    colorBorder: "#BFDBFE",
    activeBadge: "bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] ring-4 ring-blue-100",
    inactiveBadge: "bg-blue-50/90 text-[#2563EB] border border-blue-200 group-hover:bg-blue-100/70",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C16.5 3 20 4.5 20 7.5V13C20 17.5 15.5 20.5 12 21.5C8.5 20.5 4 17.5 4 13V7.5C4 4.5 7.5 3 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
        <path d="M8 15L11 12L13.5 14.5L17 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 9.5H17V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7.5" r="1.25" fill="currentColor" />
      </svg>
    ),
    screenContent: {
      items: [
        { label: "Daily App Monitoring", status: "Protected ✓", highlight: true },
        { label: "New Feature Updates", status: "On Demand", highlight: true },
        { label: "Direct Team Support", status: "Always Ready", highlight: false },
      ],
      metricLabel: "Customer Support",
      metricValue: "Always Available",
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
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-3 w-full"
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
                      <span className="text-[9.5px] font-mono font-bold" style={{ color: item.highlight ? "#60a5fa" : "#64748b" }}>
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
                  Verified
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
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-full mx-auto mb-10 sm:mb-14"
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
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive ? pillar.activeBadge : pillar.inactiveBadge
                    }`}
                  >
                    {pillar.icon}
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
          className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12 items-start w-full"
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
                            ? `${pillar.activeBadge} scale-110`
                            : `${pillar.inactiveBadge} shadow-2xs`
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
