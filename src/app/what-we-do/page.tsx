"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ─────────────────────────────────────────────
   Scroll-reveal animation wrapper
───────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  y = 24,
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
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Dynamic Mobile Swipe Dots Indicator Component
───────────────────────────────────────────── */
function CarouselDots({
  total,
  activeIndex,
  className = "",
}: {
  total: number;
  activeIndex: number;
  className?: string;
}) {
  return (
    <div className={`flex lg:hidden items-center justify-center gap-1.5 mt-3 mb-2 ${className}`}>
      {Array.from({ length: total }).map((_, idx) => (
        <span
          key={idx}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            idx === activeIndex
              ? "w-6 bg-[#2563EB]"
              : "w-1.5 bg-slate-300 hover:bg-slate-400"
          }`}
        />
      ))}
    </div>
  );
}

export default function WhatWeDoPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Dynamic Carousel Scroll States for Mobile */
  const [softIdx, setSoftIdx] = useState(0);
  const [aiIdx, setAiIdx] = useState(0);
  const [autoIdx, setAutoIdx] = useState(0);
  const [edIdx, setEdIdx] = useState(0);
  const [cloudIdx, setCloudIdx] = useState(0);
  const [impIdx, setImpIdx] = useState(0);
  const [thinkIdx, setThinkIdx] = useState(0);

  const handleCarouselScroll = (
    e: React.UIEvent<HTMLDivElement>,
    total: number,
    setIdx: (idx: number) => void
  ) => {
    const target = e.currentTarget;
    const maxScrollLeft = target.scrollWidth - target.clientWidth;
    if (maxScrollLeft <= 0) return;
    const scrollRatio = target.scrollLeft / maxScrollLeft;
    const calculatedIndex = Math.min(
      total - 1,
      Math.max(0, Math.round(scrollRatio * (total - 1)))
    );
    setIdx(calculatedIndex);
  };

  /* Particle constellation background (desktop) */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const count = 35;
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < count; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(37, 99, 235, 0.25)";
        ctx.fill();

        for (let j = i + 1; j < count; j++) {
          const p2 = pts[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="relative bg-white overflow-x-hidden">
        {/* Particle Canvas */}
        <canvas ref={canvasRef} className="hidden md:block absolute inset-0 pointer-events-none z-0" aria-hidden />

        {/* Ambient background glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[650px] h-[650px] rounded-full bg-[#2563EB]/12 blur-[130px] pointer-events-none" />
        <div className="absolute top-[35%] left-[-12%] w-[600px] h-[600px] rounded-full bg-[#3B82F6]/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-[70%] right-[-8%] w-[550px] h-[450px] rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none" />

        {/* ══════════════════════════════════════════════════════════
            01  HERO
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 pt-20 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

          <div className="relative max-w-[1600px] mx-auto w-full text-center">
            {/* Section Tag */}
            <Reveal delay={0}>
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2563EB] shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
                  WHAT WE DO &bull; AGARAN
                </div>
              </div>
            </Reveal>

            {/* H1 Title */}
            <Reveal delay={0.1}>
              <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-black leading-[1.12] tracking-[-0.035em] text-[#0F172A] w-full max-w-full lg:max-w-6xl mx-auto mb-5">
                We Build Technology That{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Works For You.
                </span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={0.2}>
              <p className="text-center text-sm sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-600 w-full max-w-full lg:max-w-6xl mx-auto mb-9">
                From custom software to AI-powered systems, we turn real problems and ideas into technology that people can actually use.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.28}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
                <Link
                  href="/contact#inquiry-form"
                  className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base px-8 py-4 rounded-2xl font-black text-white bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] hover:shadow-[0_12px_35px_rgba(37,99,235,0.35)] hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-md"
                >
                  <span>Tell Us What You Need</span>
                  <span>&rarr;</span>
                </Link>
                <a
                  href="#software-development"
                  className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base px-7 py-4 rounded-2xl font-extrabold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] hover:bg-[#DBEAFE] hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-2xs"
                >
                  <span>Explore Capabilities</span>
                  <span>&darr;</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            02  THE AGARAN ECOSYSTEM STAGE
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#EFF6FF]/70 via-white to-[#DBEAFE]/40 border-y border-[#BFDBFE]/60 overflow-hidden">
          
          {/* Ambient light glow backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[#2563EB]/10 blur-[140px] pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto w-full">
            <Reveal delay={0.1}>
              {/* Section Header */}
              <div className="text-center mb-10 sm:mb-14 relative z-10">
                <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-black uppercase tracking-widest text-[#2563EB] bg-white px-5 py-2 rounded-full border border-[#BFDBFE] shadow-2xs mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
                  THE AGARAN ECOSYSTEM
                </span>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight mb-3">
                  Everything You Need to Build.{" "}
                  <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                    Connected.
                  </span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Software, AI, automation and cloud &mdash; brought together to create complete technology solutions.
                </p>
              </div>

              {/* ── DESKTOP VIEW: 6 Orbiting Pillars connected to Center Pedestal ── */}
              <div className="hidden md:block relative">
                
                {/* Ambient Counter-Rotating Energy Rings behind Center Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                  <div className="w-96 h-96 rounded-full bg-[#2563EB]/15 blur-3xl animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-dashed border-[#2563EB]/30 animate-[spin_30s_linear_infinite]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-dashed border-[#0284C7]/35 animate-[spin_20s_linear_infinite_reverse]" />
                </div>

                {/* SVG Traveling Laser Beams */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" opacity="0.85">
                  {[
                    { x1: "8%", y1: "35%", x2: "50%", y2: "82%" },
                    { x1: "25%", y1: "35%", x2: "50%", y2: "82%" },
                    { x1: "42%", y1: "35%", x2: "50%", y2: "82%" },
                    { x1: "58%", y1: "35%", x2: "50%", y2: "82%" },
                    { x1: "75%", y1: "35%", x2: "50%", y2: "82%" },
                    { x1: "92%", y1: "35%", x2: "50%", y2: "82%" },
                  ].map((line, idx) => (
                    <g key={idx}>
                      <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#BFDBFE" strokeWidth="2.5" strokeDasharray="6 4" />
                      <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#2563EB" strokeWidth="3" strokeDasharray="10 10" className="animate-[pulse_2s_infinite]" />
                    </g>
                  ))}
                </svg>

                {/* 6 Synchronized Floating Pillars (Wide Full-Width Grid) */}
                <div className="grid grid-cols-6 gap-4 sm:gap-5 relative z-10 mb-16 text-center items-start">
                  {[
                    { title: "SOFTWARE", tag: "Web • Mobile • SaaS", badge: "APPLICATION", href: "#software-development" },
                    { title: "AI", tag: "Agents • Intelligence", badge: "INTELLIGENCE", href: "#ai-systems" },
                    { title: "AUTOMATION", tag: "Workflows • Operations", badge: "WORKFLOW", href: "#business-automation" },
                    { title: "EDUCATION", tag: "Learning • EdTech", badge: "EDTECH", href: "#education-technology" },
                    { title: "CLOUD", tag: "Infrastructure • Scale", badge: "INFRASTRUCTURE", href: "#cloud-infrastructure" },
                    { title: "MAINTENANCE", tag: "Upgrade • Modernise", badge: "EXISTING SYSTEM", href: "#existing-systems" },
                  ].map((node, i) => (
                    <motion.a
                      key={node.title}
                      href={node.href}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4.5, delay: i * 0.6, ease: "easeInOut" }}
                      whileHover={{ scale: 1.08, y: -14 }}
                      className="group flex flex-col items-center cursor-pointer select-none p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#EFF6FF]/95 via-white to-[#DBEAFE]/50 border border-[#BFDBFE] shadow-[0_12px_35px_rgba(37,99,235,0.12)] hover:border-[#2563EB] hover:shadow-[0_22px_48px_rgba(37,99,235,0.24)] transition-all duration-300 relative overflow-hidden"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-ping absolute top-3 right-3" />
                      <span className="text-[9.5px] font-black uppercase tracking-wider text-[#2563EB] bg-white px-3 py-1 rounded-full border border-[#BFDBFE] mb-3 shadow-2xs">
                        {node.badge}
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-1.5 tracking-tight">
                        {node.title}
                      </h4>
                      <p className="text-xs font-extrabold text-[#2563EB] leading-tight">
                        {node.tag}
                      </p>
                    </motion.a>
                  ))}
                </div>

                {/* Visual Center Hub: Logo & Wordmark on 3D Glass Pedestal */}
                <div className="relative z-10 max-w-lg mx-auto text-center">
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="p-6 sm:p-8 rounded-[36px] bg-white/95 backdrop-blur-2xl border border-[#BFDBFE] shadow-[0_20px_60px_rgba(37,99,235,0.22)] flex items-center justify-center gap-4 sm:gap-6 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#EFF6FF] via-white to-[#EFF6FF] opacity-90 pointer-events-none" />
                    <span className="w-3 h-3 rounded-full bg-[#2563EB] animate-ping absolute top-4 right-4" />
                    <Image
                      src="/logo-transparent.png"
                      alt="Agaran Icon"
                      width={64}
                      height={64}
                      className="h-12 sm:h-14 w-auto object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                      priority
                    />
                    <Image
                      src="/agaran_font.png"
                      alt="Agaran Wordmark"
                      width={180}
                      height={54}
                      className="h-8 sm:h-10 w-auto object-contain mix-blend-multiply relative z-10 group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </motion.div>
                </div>
              </div>

              {/* ── MOBILE VIEW: Vertical Animated Laser Stream Pipeline ── */}
              <div className="block md:hidden relative">
                
                {/* Central AGARAN Logo Hub (Top) */}
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="p-5 rounded-3xl bg-white/95 border border-[#BFDBFE] shadow-md mb-8 flex items-center justify-center gap-4 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EFF6FF] via-white to-[#EFF6FF] pointer-events-none" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-ping absolute top-3 right-3" />
                  <Image
                    src="/logo-transparent.png"
                    alt="Agaran Icon"
                    width={56}
                    height={56}
                    className="h-10 w-auto object-contain relative z-10"
                    priority
                  />
                  <Image
                    src="/agaran_font.png"
                    alt="Agaran Wordmark"
                    width={160}
                    height={48}
                    className="h-7 w-auto object-contain mix-blend-multiply relative z-10"
                    priority
                  />
                </motion.div>

                {/* Vertical Animated Laser Line */}
                <div className="relative pl-6 space-y-4">
                  <div className="absolute left-[27px] top-2 bottom-2 w-1 bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#0284C7] rounded-full animate-pulse opacity-80" />

                  {[
                    { title: "SOFTWARE", tag: "Web • Mobile • SaaS", badge: "APPLICATION", href: "#software-development" },
                    { title: "AI", tag: "Agents • Assistants • Intelligence", badge: "INTELLIGENCE", href: "#ai-systems" },
                    { title: "AUTOMATION", tag: "Workflows • Integrations • Operations", badge: "WORKFLOW", href: "#business-automation" },
                    { title: "EDUCATION", tag: "Learning • Assessment • Institution", badge: "EDTECH", href: "#education-technology" },
                    { title: "CLOUD", tag: "Infrastructure • Security • Scale", badge: "INFRASTRUCTURE", href: "#cloud-infrastructure" },
                    { title: "MAINTENANCE", tag: "Upgrade • Modernise • Scale", badge: "EXISTING SYSTEM", href: "#existing-systems" },
                  ].map((node, i) => (
                    <motion.a
                      key={node.title}
                      href={node.href}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#EFF6FF] to-white border border-[#BFDBFE] shadow-2xs hover:border-[#2563EB] transition-all cursor-pointer"
                    >
                      {/* Laser node indicator */}
                      <div className="relative w-11 h-11 rounded-xl bg-white border border-[#BFDBFE] flex items-center justify-center font-black text-[#2563EB] text-xs shrink-0 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping absolute -top-1 -right-1" />
                        <span>0{i + 1}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-xs sm:text-sm font-black text-[#0F172A]">{node.title}</h4>
                          <span className="text-[8.5px] font-black uppercase text-[#2563EB] bg-white px-2 py-0.5 rounded-full border border-[#BFDBFE]">
                            {node.badge}
                          </span>
                        </div>
                        <div className="text-xs font-extrabold text-[#2563EB]">{node.tag}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

              </div>

              {/* Bottom Banner */}
              <div className="mt-12 sm:mt-16 text-center relative z-10 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#EFF6FF] via-[#DBEAFE] to-[#EFF6FF] border border-[#BFDBFE] shadow-[0_10px_35px_rgba(37,99,235,0.14)] text-[#0F172A]">
                  <span className="w-3 h-3 rounded-full bg-[#2563EB] animate-ping shrink-0" />
                  <span className="text-sm sm:text-base font-black text-[#0F172A] tracking-tight">
                    One Problem. Multiple Possibilities. <span className="text-[#2563EB]">One Connected Solution</span>
                  </span>
                </div>
              </div>

            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            03  SOFTWARE DEVELOPMENT
        ══════════════════════════════════════════════════════════ */}
        <section id="software-development" className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#EFF6FF]/40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>01 &nbsp;•&nbsp; SOFTWARE DEVELOPMENT</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-[2.2rem] lg:text-4xl font-black leading-tight tracking-tight text-[#0F172A] mb-2.5 max-w-4xl mx-auto">
                Software Built Around{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Your Business.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-xs sm:text-base font-medium leading-relaxed text-slate-600 max-w-2xl mx-auto mb-7">
                Custom web apps, mobile applications, and software platforms tailored to your business operations.
              </p>
            </Reveal>

            {/* Visual Problem vs Solution Flow */}
            <Reveal delay={0.2} className="mb-8">
              <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-11 gap-3 items-center">
                {/* Problem */}
                <div className="md:col-span-5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-rose-600 uppercase tracking-wider mb-1">
                    <span>✕ THE PROBLEM</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-slate-800 mb-1">&ldquo;Too Many Tools&rdquo;</h3>
                  <p className="text-xs font-medium text-slate-600 leading-normal">
                    Disconnected spreadsheets and manual copy-pasting that slow down operations.
                  </p>
                </div>

                {/* Arrow Bridge */}
                <div className="md:col-span-1 flex justify-center py-1 md:py-0">
                  <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    →
                  </div>
                </div>

                {/* Solution */}
                <div className="md:col-span-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] text-white shadow-md">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-sky-200 uppercase tracking-wider mb-1">
                    <span>✓ THE AGARAN SOLUTION</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-white mb-1">One Connected System</h3>
                  <p className="text-xs font-medium text-blue-100 leading-normal">
                    A single unified software platform custom-built for desktop and mobile users.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Capabilities Horizontal Swipe Carousel on Mobile */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 4, setSoftIdx)}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3.5 pb-3 md:pb-0 mb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "Websites & Web Apps", desc: "High-performance web applications built for speed and effortless user experience." },
                { title: "Mobile Applications", desc: "Native iOS and Android apps designed for smooth daily operational use." },
                { title: "Custom Business Platforms", desc: "Tailored internal management tools aligned precisely with your workflow." },
                { title: "SaaS & Cloud APIs", desc: "Scalable cloud SaaS products and secure APIs connecting third-party services." },
              ].map((cap, i) => (
                <Reveal key={cap.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[82vw] sm:w-[280px] md:w-auto">
                  <div className="group relative h-full p-5 rounded-2xl bg-white border border-[#BFDBFE] shadow-2xs hover:border-[#2563EB] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
                      <span className="text-[#2563EB] uppercase tracking-wider font-mono">0{i + 1} &bull; SOFTWARE</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={4} activeIndex={softIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            04  AI & INTELLIGENT SYSTEMS
        ══════════════════════════════════════════════════════════ */}
        <section id="ai-systems" className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>02 &nbsp;•&nbsp; AI & INTELLIGENT SYSTEMS</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-[2.2rem] lg:text-4xl font-black leading-tight tracking-tight text-[#0F172A] mb-2.5 max-w-4xl mx-auto">
                AI That Can Do More Than{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Answer.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-xs sm:text-base font-medium leading-relaxed text-slate-600 max-w-2xl mx-auto mb-7">
                Intelligent systems that understand data, make decisions, and automate work.
              </p>
            </Reveal>

            {/* ── Visual AI Flow (UNDERSTAND -> THINK -> ACT) ── */}
            <Reveal delay={0.2} className="mb-8">
              <div className="w-full max-w-[1440px] mx-auto relative">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { step: "01", title: "UNDERSTAND", desc: "Reads documents, inputs, and raw data to extract exact context.", badge: "PHASE 1" },
                    { step: "02", title: "THINK", desc: "Evaluates rules and determines the best decision path.", badge: "PHASE 2" },
                    { step: "03", title: "ACT", desc: "Executes output, updates systems, and triggers workflows.", badge: "PHASE 3" },
                  ].map((st) => (
                    <div key={st.title} className="p-4 rounded-xl bg-white border border-[#BFDBFE] shadow-2xs">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-[#2563EB]">{st.step} &bull; STEP</span>
                        <span className="text-[9px] font-mono text-slate-400">{st.badge}</span>
                      </div>
                      <h3 className="text-sm font-bold text-[#0F172A] mb-1">{st.title}</h3>
                      <p className="text-xs text-slate-500 font-normal leading-normal">{st.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Capabilities Swipe Carousel */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 4, setAiIdx)}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3.5 pb-3 md:pb-0 mb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "Autonomous AI Agents", desc: "Smart AI workers capable of executing complex multi-step business actions." },
                { title: "Intelligent Assistants", desc: "Co-pilots offering instant support and smart internal knowledge lookup." },
                { title: "Semantic Document AI", desc: "Automated extraction and summary of text from complex PDFs and invoices." },
                { title: "AI Application Integration", desc: "Embed real-time LLM intelligence seamlessly into your software." },
              ].map((aiItem, i) => (
                <Reveal key={aiItem.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[82vw] sm:w-[280px] md:w-auto">
                  <div className="group relative h-full p-5 rounded-2xl bg-white border border-[#BFDBFE] shadow-2xs hover:border-[#2563EB] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                        {aiItem.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {aiItem.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
                      <span className="text-[#2563EB] uppercase tracking-wider font-mono">0{i + 1} &bull; AI SYSTEM</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={4} activeIndex={aiIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            05  BUSINESS AUTOMATION
        ══════════════════════════════════════════════════════════ */}
        <section id="business-automation" className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#EFF6FF]/40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>03 &nbsp;•&nbsp; BUSINESS AUTOMATION</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-[2.2rem] lg:text-4xl font-black leading-tight tracking-tight text-[#0F172A] mb-2.5 max-w-4xl mx-auto">
                Let Technology Handle the{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Repetitive Work.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-xs sm:text-base font-medium leading-relaxed text-slate-600 max-w-2xl mx-auto mb-7">
                Automate routine tasks to save time and eliminate manual effort.
              </p>
            </Reveal>

            {/* Visual Workflow Comparison */}
            <Reveal delay={0.2} className="mb-8">
              <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Manual Flow */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">✕ MANUAL WORKFLOW</span>
                    <span className="text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded">Slow & Manual</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <span className="px-2 py-1 rounded bg-slate-100">Message</span>
                    <span>&rarr;</span>
                    <span className="px-2 py-1 rounded bg-slate-100">Copy Data</span>
                    <span>&rarr;</span>
                    <span className="px-2 py-1 rounded bg-slate-100">Update Sheet</span>
                    <span>&rarr;</span>
                    <span className="px-2 py-1 rounded bg-slate-100">Notify Team</span>
                  </div>
                </div>

                {/* Automated Flow */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white shadow-md flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-2">
                    <span className="text-[10px] font-bold text-sky-100 uppercase tracking-wider">✓ AUTOMATED AGARAN FLOW</span>
                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded">Instant & Accurate</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span className="px-2.5 py-1 rounded bg-white/20">Trigger Event</span>
                    <span>&rarr;</span>
                    <span className="px-2.5 py-1 rounded bg-white/20">Automated Processing & Action</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Automation Examples Grid / Swipe */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 4, setAutoIdx)}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3.5 pb-3 md:pb-0 mb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "Workflow Automation", desc: "Automatically route tasks, assign leads, and move operations forward." },
                { title: "WhatsApp Automation", desc: "Automate support messages, notifications, and customer status updates." },
                { title: "Data Entry & Invoices", desc: "Structure incoming data directly into your database with auto-generated invoices." },
                { title: "Cross-System Sync", desc: "Connect tools so information syncs automatically across all software." },
              ].map((auto, i) => (
                <Reveal key={auto.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[82vw] sm:w-[280px] md:w-auto">
                  <div className="group relative h-full p-5 rounded-2xl bg-white border border-[#BFDBFE] shadow-2xs hover:border-[#2563EB] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                        {auto.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {auto.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
                      <span className="text-[#2563EB] uppercase tracking-wider font-mono">0{i + 1} &bull; AUTOMATION</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={4} activeIndex={autoIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            06  EDUCATION TECHNOLOGY
        ══════════════════════════════════════════════════════════ */}
        <section id="education-technology" className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>04 &nbsp;•&nbsp; EDUCATION TECHNOLOGY</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-[2.2rem] lg:text-4xl font-black leading-tight tracking-tight text-[#0F172A] mb-2.5 max-w-4xl mx-auto">
                Technology For The Complete{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Learning Journey.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-xs sm:text-base font-medium leading-relaxed text-slate-600 max-w-2xl mx-auto mb-7">
                Digital platforms connecting learning, online exams, and educational management.
              </p>
            </Reveal>

            {/* EdTech Capabilities Grid / Swipe */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 4, setEdIdx)}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3.5 pb-3 md:pb-0 mb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "LMS & Course Hubs", desc: "Interactive Learning Management Systems for courses, live classes, and tracking." },
                { title: "Exam & Assessment Systems", desc: "Secure online examination platforms with automated grading and instant results." },
                { title: "Student & Teacher Portals", desc: "Dedicated portals for attendance, grades, announcements, and assignment workflows." },
                { title: "AI Learning Assistants", desc: "Personalized AI practice modules that accelerate student learning." },
              ].map((ed, i) => (
                <Reveal key={ed.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[82vw] sm:w-[280px] md:w-auto">
                  <div className="group relative h-full p-5 rounded-2xl bg-white border border-[#BFDBFE] shadow-2xs hover:border-[#2563EB] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                        {ed.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {ed.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
                      <span className="text-[#2563EB] uppercase tracking-wider font-mono">0{i + 1} &bull; EDTECH</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={4} activeIndex={edIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            07  CLOUD & INFRASTRUCTURE
        ══════════════════════════════════════════════════════════ */}
        <section id="cloud-infrastructure" className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#EFF6FF]/40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>05 &nbsp;•&nbsp; CLOUD & INFRASTRUCTURE</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-[2.2rem] lg:text-4xl font-black leading-tight tracking-tight text-[#0F172A] mb-2.5 max-w-4xl mx-auto">
                Built To Run.{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Built To Grow.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-xs sm:text-base font-medium leading-relaxed text-slate-600 max-w-2xl mx-auto mb-7">
                Reliable cloud setup designed for high uptime, security, and effortless scaling.
              </p>
            </Reveal>

            {/* Cloud Capabilities Grid / Swipe */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 4, setCloudIdx)}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3.5 pb-3 md:pb-0 mb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "Cloud Deployment", desc: "Automated setup on AWS, GCP & Vercel for high reliability and uptime." },
                { title: "Scalable Architecture", desc: "Database and backend structure engineered to handle traffic spikes." },
                { title: "CI/CD Deployment Pipelines", desc: "Zero-downtime automated testing and continuous deployment setup." },
                { title: "Security & Monitoring", desc: "Role-based access, automated backups, and 24/7 uptime monitoring." },
              ].map((cloud, i) => (
                <Reveal key={cloud.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[82vw] sm:w-[280px] md:w-auto">
                  <div className="group relative h-full p-5 rounded-2xl bg-white border border-[#BFDBFE] shadow-2xs hover:border-[#2563EB] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                        {cloud.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {cloud.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
                      <span className="text-[#2563EB] uppercase tracking-wider font-mono">0{i + 1} &bull; CLOUD</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={4} activeIndex={cloudIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            08  EXISTING SYSTEM IMPROVEMENT
        ══════════════════════════════════════════════════════════ */}
        <section id="existing-systems" className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>06 &nbsp;•&nbsp; EXISTING SYSTEM IMPROVEMENT</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-[2.2rem] lg:text-4xl font-black leading-tight tracking-tight text-[#0F172A] mb-2.5 max-w-4xl mx-auto">
                Already Have A System?{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  We Can Improve It.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-xs sm:text-base font-medium leading-relaxed text-slate-600 max-w-2xl mx-auto mb-7">
                Upgrade your existing software without rebuilding everything from scratch.
              </p>
            </Reveal>

            {/* Visual Transformation */}
            <Reveal delay={0.2} className="mb-8">
              <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-11 gap-3 items-center">
                {/* Before */}
                <div className="md:col-span-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    EXISTING SYSTEM ISSUES
                  </div>
                  <div className="space-y-1 text-xs font-medium text-slate-700">
                    <div className="flex items-center gap-1.5"><span className="text-rose-500 font-bold">✕</span><span>Slow performance & UI bottlenecks</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-rose-500 font-bold">✕</span><span>Manual repetitive operations</span></div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-center py-1 md:py-0">
                  <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    &rarr;
                  </div>
                </div>

                {/* After */}
                <div className="md:col-span-5 p-4 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] text-white shadow-md">
                  <div className="text-[10px] font-bold text-sky-200 uppercase tracking-wider mb-1.5">
                    AFTER AGARAN IMPROVEMENT
                  </div>
                  <div className="space-y-1 text-xs font-bold text-white">
                    <div className="flex items-center gap-1.5"><span className="text-sky-200">✓</span><span>Faster load speeds & clean UI</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-sky-200">✓</span><span>Automated workflows & AI capabilities</span></div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* System Improvement Capabilities */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 4, setImpIdx)}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3.5 pb-3 md:pb-0 mb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "UI & Speed Upgrades", desc: "Fix slow screens, UI clutter, and performance bottlenecks." },
                { title: "Feature Additions", desc: "Build new capability modules into your current software seamlessly." },
                { title: "AI & Automation Additions", desc: "Add smart AI search, chat, or automated steps into legacy portals." },
                { title: "Modernization & Security", desc: "Update codebase standards and patch security vulnerabilities." },
              ].map((imp, i) => (
                <Reveal key={imp.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[82vw] sm:w-[280px] md:w-auto">
                  <div className="group relative h-full p-5 rounded-2xl bg-white border border-[#BFDBFE] shadow-2xs hover:border-[#2563EB] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                        {imp.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {imp.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
                      <span className="text-[#2563EB] uppercase tracking-wider font-mono">0{i + 1} &bull; UPGRADE</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={4} activeIndex={impIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            09  HOW WE APPROACH TECHNOLOGY
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#EFF6FF]/40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>07 &nbsp;•&nbsp; HOW WE THINK</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-[2.2rem] lg:text-4xl font-black leading-tight tracking-tight text-[#0F172A] mb-2.5 max-w-4xl mx-auto">
                We Start With The Problem.{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Not The Technology.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-xs sm:text-base font-medium leading-relaxed text-slate-600 max-w-2xl mx-auto mb-7">
                We focus first on what needs to be solved, then select the right technology to solve it.
              </p>
            </Reveal>

            {/* 4 Approach Principles Mobile Swipe Carousel */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 4, setThinkIdx)}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3.5 pb-3 md:pb-0 mb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "Understand", sub: "Identify the root goal.", desc: "Listen carefully to user needs before writing code." },
                { title: "Simplify", sub: "Remove unnecessary bloat.", desc: "Eliminate clutter so your software stays fast and easy to use." },
                { title: "Build", sub: "Production-grade execution.", desc: "Write clean, scalable code that performs under real traffic." },
                { title: "Improve", sub: "Continuous optimization.", desc: "Refine and upgrade systems iteratively based on user feedback." },
              ].map((p, i) => (
                <Reveal key={p.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[82vw] sm:w-[280px] md:w-auto">
                  <div className="group relative h-full p-5 rounded-2xl bg-white border border-[#BFDBFE] shadow-2xs hover:border-[#2563EB] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-2 font-mono">
                        0{i + 1} &bull; PRINCIPLE
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1 group-hover:text-[#2563EB] transition-colors">{p.title}</h3>
                      <div className="text-xs font-semibold text-[#2563EB] mb-1.5">{p.sub}</div>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={4} activeIndex={thinkIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            10  FINAL CTA
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 pt-4 pb-14 sm:pb-20 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto w-full">
            <Reveal delay={0.05}>
              <div className="relative rounded-[2rem] bg-[#2563EB] border border-blue-400/50 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-lg text-white text-center">
                <div className="relative z-10 max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
                    <span>LET&apos;S WORK TOGETHER</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
                    Have A Problem Worth Solving?
                  </h2>

                  <p className="text-xs sm:text-base font-medium text-blue-100 mb-6">
                    Tell us what you&apos;re trying to build or automate. We&apos;ll help you figure out the best approach.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/contact#inquiry-form"
                      className="inline-flex items-center justify-center gap-2 text-sm sm:text-base px-7 py-3.5 rounded-xl font-bold bg-white text-[#1D4ED8] hover:bg-blue-50 transition-all duration-200 w-full sm:w-auto"
                    >
                      Start a Conversation →
                    </Link>
                    <Link
                      href="/work"
                      className="inline-flex items-center justify-center gap-2 text-sm sm:text-base px-6 py-3.5 rounded-xl font-semibold bg-blue-700/50 border border-white/30 text-white hover:bg-blue-700/70 transition-all duration-200 w-full sm:w-auto"
                    >
                      View Our Work
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
