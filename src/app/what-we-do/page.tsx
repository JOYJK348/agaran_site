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
   Interactive Ecosystem Categories (Section 09)
───────────────────────────────────────────── */
const ecosystemCategories = [
  {
    id: "startups",
    label: "STARTUPS",
    flow: "Idea → Product",
    badge: "FOUNDERS",
    headline: "Turn Your Idea Into a Production-Ready Product",
    desc: "We help founders move fast without taking shortcuts. We build your initial product cleanly so it's ready for real users and scale.",
    features: ["MVP Development", "Web & Mobile Apps", "Scalable Tech Foundation", "Rapid Iteration"],
  },
  {
    id: "businesses",
    label: "BUSINESSES",
    flow: "Manual → Automated",
    badge: "OPERATIONS",
    headline: "Replace Manual Work With Streamlined Systems",
    desc: "Stop losing hours to manual data entry, messaging, and scattered spreadsheets. We build custom software that automates daily operations.",
    features: ["Custom Software", "WhatsApp & Workflow Automation", "Data Dashboards", "System Integration"],
  },
  {
    id: "institutions",
    label: "INSTITUTIONS",
    flow: "Disconnected → Connected",
    badge: "ENTERPRISE",
    headline: "Unify Scattered Systems Into One Platform",
    desc: "Connect legacy software, databases, and departments into a single secure interface that keeps everyone aligned.",
    features: ["Unified Dashboards", "API Integrations", "Secure Access Control", "Legacy Upgrades"],
  },
  {
    id: "teams",
    label: "TEAMS",
    flow: "Scattered → Organised",
    badge: "COLLABORATION",
    headline: "Give Your Team Clear Tools That Save Time",
    desc: "Empower your team with intuitive internal tools, approval workflows, and AI assistants designed for their exact daily tasks.",
    features: ["Internal Management Tools", "Approval Workflows", "Team AI Assistants", "Automated Reports"],
  },
  {
    id: "education",
    label: "EDUCATION",
    flow: "Traditional → Digital",
    badge: "EDTECH",
    headline: "Digitalize The Complete Learning & Administrative Journey",
    desc: "From admissions to assessments, AI support, and student portals — we build modern platforms for schools, colleges & EdTechs.",
    features: ["Admissions Portals", "LMS & Course Hubs", "Online Exam Systems", "Student & Parent Apps"],
  },
  {
    id: "ai",
    label: "AI SYSTEMS",
    flow: "Information → Intelligence",
    badge: "INTELLIGENCE",
    headline: "Turn Unstructured Information Into Actionable Intelligence",
    desc: "We build AI systems that read your documents, answer customer questions accurately, and perform tasks automatically.",
    features: ["Knowledge Search AI", "Custom AI Assistants", "Document Intelligence", "Process Automation"],
  },
];

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
  const [activeCategory, setActiveCategory] = useState("startups");
  const [isPaused, setIsPaused] = useState(false);

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

  /* Auto-slide Ecosystem categories every 4.5 seconds (Pauses on Hover) */
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveCategory((prev) => {
        const currIndex = ecosystemCategories.findIndex((c) => c.id === prev);
        const nextIndex = (currIndex + 1) % ecosystemCategories.length;
        return ecosystemCategories[nextIndex].id;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

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

  const selectedCategoryData = ecosystemCategories.find((c) => c.id === activeCategory) || ecosystemCategories[0];

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

          <div className="relative max-w-[1400px] mx-auto w-full text-center">
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
              <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-black leading-[1.12] tracking-[-0.035em] text-[#0F172A] w-full max-w-5xl mx-auto mb-5">
                We Build Technology That{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Works For You.
                </span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={0.2}>
              <p className="text-center text-sm sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-9">
                From custom software to AI-powered systems, we turn real problems and ideas into technology that people can actually use.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.28}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
                <Link
                  href="/contact"
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
                    { title: "REFINEMENT", tag: "Upgrade • Modernise", badge: "EXISTING SYSTEM", href: "#existing-systems" },
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
                    { title: "REFINEMENT", tag: "Upgrade • Modernise • Scale", badge: "EXISTING SYSTEM", href: "#existing-systems" },
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
            01  SOFTWARE DEVELOPMENT
        ══════════════════════════════════════════════════════════ */}
        <section id="software-development" className="relative z-10 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#EFF6FF]/40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>01 &nbsp;•&nbsp; SOFTWARE DEVELOPMENT</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-3 w-full max-w-[1280px] mx-auto">
                Software Built Around{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Your Business.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-8 text-justify sm:text-center">
                We build websites, web applications, mobile apps and complete software platforms based on how your business actually works.
              </p>
            </Reveal>

            {/* Visual Problem vs Solution Flow — Full Container Width */}
            <Reveal delay={0.2} className="mb-10">
              <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
                {/* Problem */}
                <div className="md:col-span-5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-rose-600 uppercase tracking-wider mb-2">
                    <span>✕ THE PROBLEM</span>
                  </div>
                  <h3 className="text-base font-black text-slate-800 mb-1.5">&ldquo;Too Many Tools&rdquo;</h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed text-justify">
                    Spreadsheets, separate chat apps, disconnected forms, and manual copy-pasting that slow down your team.
                  </p>
                </div>

                {/* Arrow Bridge */}
                <div className="md:col-span-1 flex justify-center py-2 md:py-0">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-black shadow-md">
                    →
                  </div>
                </div>

                {/* Solution */}
                <div className="md:col-span-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] text-white shadow-lg border border-blue-400/30">
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-sky-200 uppercase tracking-wider mb-2">
                    <span>✓ THE AGARAN SOLUTION</span>
                  </div>
                  <h3 className="text-base font-black text-white mb-1.5">One Connected System</h3>
                  <p className="text-xs sm:text-sm font-medium text-blue-100 leading-relaxed text-justify">
                    A single intuitive software platform custom-built for your workflows, accessible from desktop & mobile.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Capabilities Horizontal Swipe Carousel on Mobile */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 6, setSoftIdx)}
              className="flex md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 sm:gap-6 pb-4 md:pb-0 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "Websites & Web Apps", desc: "Fast, responsive web applications built for high performance and smooth user experience." },
                { title: "Mobile Applications", desc: "Native & cross-platform iOS and Android apps designed for speed and daily reliability." },
                { title: "Custom Business Software", desc: "Tailored internal tools and platforms aligned precisely with your operational needs." },
                { title: "SaaS Platforms", desc: "Multi-tenant cloud applications built to onboard users cleanly and scale effortlessly." },
                { title: "Internal Management Systems", desc: "Centralized dashboards for team collaboration, tracking, and operational management." },
                { title: "APIs & System Integrations", desc: "Secure API connections that link all your third-party tools into one automated pipeline." },
              ].map((cap, i) => (
                <Reveal key={cap.title} delay={0.1 + i * 0.06} className="snap-center shrink-0 w-[82vw] sm:w-[320px] md:w-auto">
                  <div className="group relative h-full p-6 sm:p-7 rounded-[26px] bg-gradient-to-b from-[#EFF6FF]/70 via-white to-[#DBEAFE]/30 border border-[#BFDBFE] shadow-[0_8px_28px_rgba(37,99,235,0.08)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] hover:border-[#2563EB] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    {/* Ambient glow orb */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Low-opacity diagonal tech stripe overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.03)_25%,transparent_25%,transparent_50%,rgba(37,99,235,0.03)_50%,rgba(37,99,235,0.03)_75%,transparent_75%,transparent)] [background-size:20px_20px] pointer-events-none" />

                    {/* Rich Low-Opacity Agaran Watermark Vector SVG */}
                    <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-[0.12] group-hover:opacity-[0.25] group-hover:scale-110 transition-all duration-500 pointer-events-none z-0">
                      <svg viewBox="0 0 100 100" fill="none" stroke="#2563EB" strokeWidth="2">
                        <circle cx="50" cy="50" r="42" strokeDasharray="5 3" />
                        <polygon points="50,16 84,78 16,78" />
                        <circle cx="50" cy="50" r="12" fill="#2563EB" opacity="0.3" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2.5 group-hover:text-[#2563EB] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed text-justify">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[9.5px] font-extrabold uppercase text-[#2563EB]">AGARAN STANDARD</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={6} activeIndex={softIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            02  AI & INTELLIGENT SYSTEMS
        ══════════════════════════════════════════════════════════ */}
        <section id="ai-systems" className="relative z-10 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>02 &nbsp;•&nbsp; AI & INTELLIGENT SYSTEMS</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-3 w-full max-w-[1280px] mx-auto">
                AI That Can Do More Than{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Answer.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-8 text-justify sm:text-center">
                We build AI-powered systems that understand information, make decisions, and help people get things done.
              </p>
            </Reveal>

            {/* ── Visual AI Flow: Connected Neural Pipeline (UNDERSTAND -> THINK -> ACT) — Full Container Width ── */}
            <Reveal delay={0.2} className="mb-12">
              <div className="w-full max-w-[1440px] mx-auto relative">
                
                {/* Connecting Laser Ray between Steps (Desktop) */}
                <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563EB]/20 via-[#2563EB] to-[#2563EB]/20 -translate-y-1/2 z-0 pointer-events-none" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 relative z-10">
                  {[
                    {
                      step: "01",
                      title: "UNDERSTAND",
                      tag: "DATA INGESTION",
                      desc: "Reads documents, user prompts, and raw data to extract exact context.",
                      badge: "PHASE 1",
                      svg: (
                        <svg viewBox="0 0 100 100" fill="none" stroke="#2563EB" strokeWidth="2" className="w-24 h-24">
                          <circle cx="50" cy="50" r="35" strokeDasharray="4 2" />
                          <circle cx="50" cy="50" r="15" fill="#2563EB" opacity="0.15" />
                        </svg>
                      )
                    },
                    {
                      step: "02",
                      title: "THINK",
                      tag: "NEURAL REASONING",
                      desc: "Evaluates rules, calculates options, and decides the best action.",
                      badge: "PHASE 2",
                      svg: (
                        <svg viewBox="0 0 100 100" fill="none" stroke="#2563EB" strokeWidth="2" className="w-24 h-24">
                          <polygon points="50,15 85,80 15,80" strokeDasharray="4 2" />
                          <circle cx="50" cy="52" r="12" fill="#2563EB" opacity="0.2" />
                        </svg>
                      )
                    },
                    {
                      step: "03",
                      title: "ACT",
                      tag: "AUTONOMOUS EXECUTION",
                      desc: "Generates output, updates databases, and triggers real-world workflows.",
                      badge: "PHASE 3",
                      svg: (
                        <svg viewBox="0 0 100 100" fill="none" stroke="#2563EB" strokeWidth="2" className="w-24 h-24">
                          <rect x="25" y="25" width="50" height="50" rx="10" strokeDasharray="4 2" />
                          <circle cx="50" cy="50" r="10" fill="#2563EB" opacity="0.25" />
                        </svg>
                      )
                    },
                  ].map((st) => (
                    <motion.div
                      key={st.title}
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#EFF6FF]/90 via-white to-[#DBEAFE]/40 border border-[#BFDBFE] shadow-[0_8px_30px_rgba(37,99,235,0.08)] hover:border-[#2563EB] hover:shadow-[0_16px_40px_rgba(37,99,235,0.18)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
                    >
                      {/* Ambient background glow orb */}
                      <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#2563EB]/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                      
                      {/* Low-opacity background watermark graphic */}
                      <div className="absolute -bottom-4 -right-4 opacity-[0.10] group-hover:opacity-[0.22] group-hover:scale-110 transition-all duration-500 pointer-events-none z-0">
                        {st.svg}
                      </div>

                      <div className="relative z-10">
                        {/* Top Badge Row */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center gap-1.5 text-[9.5px] font-black uppercase tracking-widest text-[#2563EB] bg-white px-2.5 py-1 rounded-full border border-[#BFDBFE] shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                            {st.step} &bull; STEP
                          </span>
                          <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                            {st.badge}
                          </span>
                        </div>

                        {/* Title & Tag */}
                        <h3 className="text-lg sm:text-xl font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-0.5 tracking-tight">
                          {st.title}
                        </h3>
                        <div className="text-[10.5px] font-extrabold text-[#2563EB] tracking-wider mb-3">
                          {st.tag}
                        </div>

                        {/* Body */}
                        <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed text-justify">
                          {st.desc}
                        </p>
                      </div>

                      {/* Footer Progress bar */}
                      <div className="relative z-10 mt-5 pt-3 border-t border-slate-100/80 flex items-center justify-between text-[10.5px] font-bold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                        <span>AI PIPELINE FLOW</span>
                        <span>&rarr;</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Capabilities Swipe Carousel */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 7, setAiIdx)}
              className="flex md:grid md:grid-cols-3 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 md:pb-0 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "AI Agents", desc: "Autonomous AI workers designed to perform multi-step business tasks." },
                { title: "AI Assistants", desc: "Intelligent co-pilots that help your team and customers get answers fast." },
                { title: "AI-Powered Apps", desc: "Custom web & mobile apps enhanced with real-time AI intelligence." },
                { title: "Knowledge Systems", desc: "Instant semantic search across all your company documents and files." },
                { title: "AI Search", desc: "Smart search tools that understand meaning, not just exact keywords." },
                { title: "AI Content Systems", desc: "Automated recommendations and content generation tailored to users." },
                { title: "AI Integrations", desc: "Plug smart AI capabilities seamlessly into your existing software tools." },
              ].map((aiItem, i) => (
                <Reveal key={aiItem.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[80vw] sm:w-[290px] md:w-auto">
                  <div className="group relative h-full p-5 sm:p-6 rounded-[26px] bg-gradient-to-b from-[#EFF6FF]/70 via-white to-[#DBEAFE]/30 border border-[#BFDBFE] shadow-[0_8px_28px_rgba(37,99,235,0.08)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] hover:border-[#2563EB] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    {/* Ambient glow orb */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Low-opacity diagonal tech stripe overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.03)_25%,transparent_25%,transparent_50%,rgba(37,99,235,0.03)_50%,rgba(37,99,235,0.03)_75%,transparent_75%,transparent)] [background-size:20px_20px] pointer-events-none" />

                    {/* Low-opacity Watermark AI Neural SVG */}
                    <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-[0.12] group-hover:opacity-[0.25] group-hover:scale-110 transition-all duration-500 pointer-events-none z-0">
                      <svg viewBox="0 0 100 100" fill="none" stroke="#2563EB" strokeWidth="2">
                        <path d="M20,50 Q50,16 80,50 Q50,84 20,50 Z" strokeDasharray="4 3" />
                        <circle cx="50" cy="50" r="14" fill="#2563EB" opacity="0.3" />
                        <line x1="50" y1="16" x2="50" y2="84" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                        {aiItem.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-600 leading-relaxed text-justify">
                        {aiItem.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[9.5px] font-extrabold uppercase text-[#2563EB]">SMART AI SYSTEM</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={7} activeIndex={aiIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            03  BUSINESS AUTOMATION
        ══════════════════════════════════════════════════════════ */}
        <section id="business-automation" className="relative z-10 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#EFF6FF]/40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>03 &nbsp;•&nbsp; BUSINESS AUTOMATION</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-3 w-full max-w-[1280px] mx-auto">
                Let Technology Handle the{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Repetitive Work.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-8 text-justify sm:text-center">
                If your team is doing the same task again and again, we look for a simpler way to handle it.
              </p>
            </Reveal>

            {/* Visual Workflow Comparison: Manual vs Automated — Full Container Width */}
            <Reveal delay={0.2} className="mb-10">
              <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Manual Flow */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">✕ MANUAL WORKFLOW</span>
                    <span className="text-xs font-extrabold text-rose-500 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">Slow &amp; Error-Prone</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600 pt-1">
                    <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">Message</span>
                    <span>&rarr;</span>
                    <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">Copy Data</span>
                    <span>&rarr;</span>
                    <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">Update Sheet</span>
                    <span>&rarr;</span>
                    <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">Check Approval</span>
                    <span>&rarr;</span>
                    <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">Send Notification</span>
                  </div>
                </div>

                {/* Automated Flow */}
                <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-white/20 pb-3">
                    <span className="text-xs font-black text-sky-100 uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full border border-white/20">✓ AUTOMATED AGARAN FLOW</span>
                    <span className="text-xs font-extrabold text-white bg-emerald-500/30 px-2.5 py-0.5 rounded border border-emerald-300/40">Instant &amp; 100% Accurate</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-extrabold text-white pt-1">
                    <span className="px-3.5 py-2 rounded-xl bg-white/15 border border-white/25 backdrop-blur-xs">Trigger Event</span>
                    <span>&rarr;</span>
                    <span className="px-3.5 py-2 rounded-xl bg-white/15 border border-white/25 backdrop-blur-xs">Automated Processing</span>
                    <span>&rarr;</span>
                    <span className="px-3.5 py-2 rounded-xl bg-white/15 border border-white/25 backdrop-blur-xs">Instant Action &amp; Update</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Automation Examples Grid / Swipe */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 7, setAutoIdx)}
              className="flex md:grid md:grid-cols-3 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 md:pb-0 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "Workflow Automation", desc: "Automatically route tasks, assign leads, and move projects forward without manual friction." },
                { title: "WhatsApp Automation", desc: "Automate customer support messages, notifications, and status updates via WhatsApp." },
                { title: "Instant Notifications", desc: "Trigger automated email, SMS, and push alerts based on live user activity." },
                { title: "Data Entry Automation", desc: "Automatically capture and structure incoming data directly into your database." },
                { title: "Approval Workflows", desc: "Streamline multi-step manager approvals and document sign-offs with one click." },
                { title: "System Integration", desc: "Connect scattered tools so data syncs automatically across all your software." },
                { title: "Process Automation", desc: "End-to-end automation of core business operations tailored to your business rules." },
              ].map((auto, i) => (
                <Reveal key={auto.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[80vw] sm:w-[290px] md:w-auto">
                  <div className="group relative h-full p-5 sm:p-6 rounded-[26px] bg-gradient-to-b from-[#EFF6FF]/70 via-white to-[#DBEAFE]/30 border border-[#BFDBFE] shadow-[0_8px_28px_rgba(37,99,235,0.08)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] hover:border-[#2563EB] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    {/* Ambient glow orb */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Low-opacity diagonal tech stripe overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.03)_25%,transparent_25%,transparent_50%,rgba(37,99,235,0.03)_50%,rgba(37,99,235,0.03)_75%,transparent_75%,transparent)] [background-size:20px_20px] pointer-events-none" />

                    {/* Low-opacity Watermark Automation Vector SVG */}
                    <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-[0.12] group-hover:opacity-[0.25] group-hover:scale-110 transition-all duration-500 pointer-events-none z-0">
                      <svg viewBox="0 0 100 100" fill="none" stroke="#2563EB" strokeWidth="2">
                        <circle cx="50" cy="50" r="40" strokeDasharray="4 3" />
                        <polygon points="50,20 80,75 20,75" strokeDasharray="3 3" />
                        <circle cx="50" cy="50" r="10" fill="#2563EB" opacity="0.3" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                        {auto.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-600 leading-relaxed text-justify">
                        {auto.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[9.5px] font-extrabold uppercase text-[#2563EB]">AUTOMATION FLOW</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={7} activeIndex={autoIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            04  EDUCATION TECHNOLOGY
        ══════════════════════════════════════════════════════════ */}
        <section id="education-technology" className="relative z-10 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>04 &nbsp;•&nbsp; EDUCATION TECHNOLOGY</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-3 w-full max-w-[1280px] mx-auto">
                Technology For The Complete{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Learning Journey.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-8 text-justify sm:text-center">
                We build digital platforms that connect admissions, learning, assessments, AI support and the wider education experience.
              </p>
            </Reveal>



            {/* EdTech Capabilities Grid / Swipe */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 8, setEdIdx)}
              className="flex md:grid md:grid-cols-3 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 md:pb-0 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "Admission & Online Forms", desc: "Streamlined online application portals and document verification for institutions." },
                { title: "LMS & Course Hubs", desc: "Interactive Learning Management Systems for courses, live classes, and student tracking." },
                { title: "Teacher & Tutor Portals", desc: "Dedicated management portals for teachers to organize courses, assignments, attendance, and student grading." },
                { title: "Exam & Assessment Systems", desc: "Secure online examination platforms with automated grading and instant results." },
                { title: "Student & Parent Apps", desc: "Dedicated portals for attendance, grades, announcements, and direct communication." },
                { title: "AI-Powered Learning", desc: "Personalized AI tutoring and adaptive practice modules that help students learn faster." },
                { title: "Career Guidance", desc: "Skill gap analysis and AI-driven placement recommendations for graduating students." },
                { title: "Institution Management", desc: "Complete administrative software connecting fees, staff, schedules, and operations." },
              ].map((ed, i) => (
                <Reveal key={ed.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[80vw] sm:w-[290px] md:w-auto">
                  <div className="group relative h-full p-5 sm:p-6 rounded-[26px] bg-gradient-to-b from-[#EFF6FF]/70 via-white to-[#DBEAFE]/30 border border-[#BFDBFE] shadow-[0_8px_28px_rgba(37,99,235,0.08)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] hover:border-[#2563EB] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    {/* Ambient glow orb */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Low-opacity diagonal tech stripe overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.03)_25%,transparent_25%,transparent_50%,rgba(37,99,235,0.03)_50%,rgba(37,99,235,0.03)_75%,transparent_75%,transparent)] [background-size:20px_20px] pointer-events-none" />

                    {/* Low-opacity Watermark EdTech Vector SVG */}
                    <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-[0.12] group-hover:opacity-[0.25] group-hover:scale-110 transition-all duration-500 pointer-events-none z-0">
                      <svg viewBox="0 0 100 100" fill="none" stroke="#2563EB" strokeWidth="2">
                        <polygon points="50,20 85,40 50,60 15,40" strokeDasharray="4 2" />
                        <line x1="85" y1="40" x2="85" y2="70" />
                        <circle cx="50" cy="40" r="10" fill="#2563EB" opacity="0.3" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                        {ed.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-600 leading-relaxed text-justify">
                        {ed.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[9.5px] font-extrabold uppercase text-[#2563EB]">EDTECH PLATFORM</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={8} activeIndex={edIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            05  CLOUD & INFRASTRUCTURE
        ══════════════════════════════════════════════════════════ */}
        <section id="cloud-infrastructure" className="relative z-10 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#EFF6FF]/40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>05 &nbsp;•&nbsp; CLOUD & INFRASTRUCTURE</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-3 w-full max-w-[1280px] mx-auto">
                Built To Run.{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Built To Grow.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-8 text-justify sm:text-center">
                We set up the technology behind your product so it stays reliable as your users and business grow.
              </p>
            </Reveal>



            {/* Cloud Capabilities Grid / Swipe */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 8, setCloudIdx)}
              className="flex md:grid md:grid-cols-3 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 md:pb-0 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "Cloud Deployment", desc: "Automated deployment setup on AWS, Google Cloud, or Azure for maximum uptime." },
                { title: "Database Architecture", desc: "Clean database design structured for fast queries and data integrity." },
                { title: "Scalable Infrastructure", desc: "Systems designed to handle sudden traffic spikes without slowing down." },
                { title: "DevOps & CI/CD Pipelines", desc: "Automated testing, building, and seamless zero-downtime deployment pipelines for fast updates." },
                { title: "Security & Access", desc: "Bank-grade encryption, role-based access control, and data protection." },
                { title: "System Monitoring", desc: "24/7 automated uptime tracking and instant alert notifications." },
                { title: "Automated Backups", desc: "Scheduled data backups ensuring your business information is never lost." },
                { title: "Performance Optimisation", desc: "Speed tuning across databases and code to ensure lightning-fast loading." },
              ].map((cloud, i) => (
                <Reveal key={cloud.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[80vw] sm:w-[290px] md:w-auto">
                  <div className="group relative h-full p-5 sm:p-6 rounded-[26px] bg-gradient-to-b from-[#EFF6FF]/70 via-white to-[#DBEAFE]/30 border border-[#BFDBFE] shadow-[0_8px_28px_rgba(37,99,235,0.08)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] hover:border-[#2563EB] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    {/* Ambient glow orb */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Low-opacity diagonal tech stripe overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.03)_25%,transparent_25%,transparent_50%,rgba(37,99,235,0.03)_50%,rgba(37,99,235,0.03)_75%,transparent_75%,transparent)] [background-size:20px_20px] pointer-events-none" />

                    {/* Low-opacity Watermark Cloud Vector SVG */}
                    <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-[0.12] group-hover:opacity-[0.25] group-hover:scale-110 transition-all duration-500 pointer-events-none z-0">
                      <svg viewBox="0 0 100 100" fill="none" stroke="#2563EB" strokeWidth="2">
                        <path d="M25,60 Q15,60 15,45 Q15,35 30,30 Q35,15 55,20 Q70,15 75,30 Q85,35 85,50 Q85,60 70,60 Z" strokeDasharray="4 2" />
                        <circle cx="50" cy="40" r="8" fill="#2563EB" opacity="0.3" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                        {cloud.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-600 leading-relaxed text-justify">
                        {cloud.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[9.5px] font-extrabold uppercase text-[#2563EB]">CLOUD INFRA</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={8} activeIndex={cloudIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            06  EXISTING SYSTEM IMPROVEMENT
        ══════════════════════════════════════════════════════════ */}
        <section id="existing-systems" className="relative z-10 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>06 &nbsp;•&nbsp; EXISTING SYSTEM IMPROVEMENT</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-3 w-full max-w-[1280px] mx-auto">
                Already Have A System?{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  We Can Improve It.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-8 text-justify sm:text-center">
                Your existing software doesn't always need to be replaced. Sometimes it just needs to work better.
              </p>
            </Reveal>

            {/* Visual Transformation: Before vs After — Full Container Width */}
            <Reveal delay={0.2} className="mb-10">
              <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
                {/* Before */}
                <div className="md:col-span-5 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
                    EXISTING SYSTEM PROBLEMS
                  </div>
                  <div className="space-y-1.5 text-xs font-bold text-slate-700">
                    <div className="flex items-center gap-2"><span className="text-rose-500 font-extrabold">✕</span><span>Slow & frustrating to load</span></div>
                    <div className="flex items-center gap-2"><span className="text-rose-500 font-extrabold">✕</span><span>Repetitive manual tasks</span></div>
                    <div className="flex items-center gap-2"><span className="text-rose-500 font-extrabold">✕</span><span>Disconnected from other tools</span></div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-center py-2 md:py-0">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-black shadow-md">
                    &rarr;
                  </div>
                </div>

                {/* After */}
                <div className="md:col-span-5 p-5 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] text-white shadow-lg">
                  <div className="text-xs font-black text-sky-200 uppercase tracking-wider mb-2">
                    AFTER AGARAN IMPROVEMENT
                  </div>
                  <div className="space-y-1.5 text-xs font-extrabold text-white">
                    <div className="flex items-center gap-2"><span className="text-sky-200">✓</span><span>Faster & responsive screens</span></div>
                    <div className="flex items-center gap-2"><span className="text-sky-200">✓</span><span>Fully connected workflows</span></div>
                    <div className="flex items-center gap-2"><span className="text-sky-200">✓</span><span>Smarter with AI capabilities</span></div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* System Improvement Capabilities */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 8, setImpIdx)}
              className="flex md:grid md:grid-cols-3 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 md:pb-0 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "Improve Existing Apps", desc: "Upgrade user experience, fix broken UI elements, and refine app speed." },
                { title: "Add New Features", desc: "Build new capability modules into your current software without disrupting live users." },
                { title: "Integrate Systems", desc: "Link your legacy software directly to new web services and payment gateways." },
                { title: "Add AI Capabilities", desc: "Embed smart AI chat, search, or document reading into your existing portal." },
                { title: "Automate Workflows", desc: "Turn manual operational steps inside your software into automated actions." },
                { title: "Fix Performance Issues", desc: "Optimize slow database queries and server bottlenecks for instant loading." },
                { title: "Modernise Old Systems", desc: "Update old codebases to modern, secure web standards without starting from scratch." },
                { title: "Security & Compliance Upgrades", desc: "Harden your existing codebase with modern security patches, encryption, and vulnerability fixes." },
              ].map((imp, i) => (
                <Reveal key={imp.title} delay={0.08 + i * 0.05} className="snap-center shrink-0 w-[80vw] sm:w-[290px] md:w-auto">
                  <div className="group relative h-full p-5 sm:p-6 rounded-[26px] bg-gradient-to-b from-[#EFF6FF]/70 via-white to-[#DBEAFE]/30 border border-[#BFDBFE] shadow-[0_8px_28px_rgba(37,99,235,0.08)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] hover:border-[#2563EB] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    {/* Ambient glow orb */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Low-opacity diagonal tech stripe overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.03)_25%,transparent_25%,transparent_50%,rgba(37,99,235,0.03)_50%,rgba(37,99,235,0.03)_75%,transparent_75%,transparent)] [background-size:20px_20px] pointer-events-none" />

                    {/* Low-opacity Watermark System Refinement Vector SVG */}
                    <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-[0.12] group-hover:opacity-[0.25] group-hover:scale-110 transition-all duration-500 pointer-events-none z-0">
                      <svg viewBox="0 0 100 100" fill="none" stroke="#2563EB" strokeWidth="2">
                        <circle cx="50" cy="50" r="35" strokeDasharray="4 2" />
                        <line x1="50" y1="15" x2="50" y2="85" />
                        <line x1="15" y1="50" x2="85" y2="50" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                        {imp.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-600 leading-relaxed text-justify">
                        {imp.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[9.5px] font-extrabold uppercase text-[#2563EB]">SYSTEM REFINEMENT</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <CarouselDots total={8} activeIndex={impIdx} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            07  HOW WE APPROACH TECHNOLOGY
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#EFF6FF]/40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>07 &nbsp;•&nbsp; HOW WE THINK</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-3 w-full max-w-[1280px] mx-auto">
                We Start With The Problem.{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Not The Technology.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-8 text-justify sm:text-center">
                We don't start by choosing a technology. We start by understanding what needs to be solved.
              </p>
            </Reveal>

            {/* Visual Process Chain */}
            <Reveal delay={0.2} className="mb-10">
              <div className="w-full max-w-[1440px] mx-auto p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-extrabold text-[#0F172A]">
                  <span className="px-3.5 py-2 rounded-xl bg-slate-100">Problem</span>
                  <span>→</span>
                  <span className="px-3.5 py-2 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB]">Understand</span>
                  <span>→</span>
                  <span className="px-3.5 py-2 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB]">Design</span>
                  <span>→</span>
                  <span className="px-3.5 py-2 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB]">Build</span>
                  <span>→</span>
                  <span className="px-3.5 py-2 rounded-xl bg-[#2563EB] text-white">Improve</span>
                </div>
              </div>
            </Reveal>

            {/* 4 Approach Principles Mobile Swipe Carousel */}
            <div
              onScroll={(e) => handleCarouselScroll(e, 4, setThinkIdx)}
              className="flex lg:grid lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 lg:pb-0 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {[
                { title: "Understand", sub: "Know the real problem.", desc: "We listen carefully to your goals and users before proposing any technical solution." },
                { title: "Simplify", sub: "Remove complexity.", desc: "Every unnecessary feature is a debt. We eliminate clutter so your software stays fast." },
                { title: "Build", sub: "Create what matters.", desc: "We write clean, production-grade code that performs reliably under real conditions." },
                { title: "Improve", sub: "Keep making it better.", desc: "Software evolves. We continuously refine and upgrade your system based on user feedback." },
              ].map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.07} className="snap-center shrink-0 w-[82vw] sm:w-[320px] lg:w-auto">
                  <div className="group relative h-full p-6 sm:p-7 rounded-[26px] bg-gradient-to-b from-[#EFF6FF]/70 via-white to-[#DBEAFE]/30 border border-[#BFDBFE] shadow-[0_8px_28px_rgba(37,99,235,0.08)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] hover:border-[#2563EB] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    {/* Ambient glow orb */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Low-opacity diagonal tech stripe overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.03)_25%,transparent_25%,transparent_50%,rgba(37,99,235,0.03)_50%,rgba(37,99,235,0.03)_75%,transparent_75%,transparent)] [background-size:20px_20px] pointer-events-none" />

                    <div className="relative z-10">
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-[#BFDBFE] inline-block mb-3">
                        0{i + 1} &bull; PRINCIPLE
                      </div>
                      <h3 className="text-lg font-black text-[#0F172A] mb-1 group-hover:text-[#2563EB] transition-colors">{p.title}</h3>
                      <div className="text-xs font-bold text-[#2563EB] mb-2">{p.sub}</div>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed text-justify">{p.desc}</p>
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
            08  INTERACTIVE "WHAT CAN WE BUILD?" ECOSYSTEM
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Header */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>08 &nbsp;•&nbsp; INTERACTIVE ECOSYSTEM</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-3 w-full max-w-[1280px] mx-auto">
                If You Can Describe The Problem,{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  We Can Explore The Solution.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-center text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-8 text-justify sm:text-center">
                Click any category below to see how Agaran turns specific operational challenges into tailored digital solutions:
              </p>
            </Reveal>

            {/* Interactive Ecosystem Container (Hover to Pause Auto-Slide) */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="relative"
            >
              {/* Interactive Category Selector Tile Grid (Clean 6-Tile Responsive Grid Layout!) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10 max-w-5xl mx-auto">
                {ecosystemCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`group relative p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border cursor-pointer select-none ${
                        isActive
                          ? "bg-[#EFF6FF] border-[#2563EB] shadow-[0_8px_25px_rgba(37,99,235,0.15)] scale-[1.03] z-10"
                          : "bg-white border-[#BFDBFE] hover:border-[#2563EB]/60 hover:bg-[#EFF6FF]/40 hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[8.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isActive ? "bg-[#2563EB] text-white" : "bg-[#EFF6FF] text-[#2563EB]"
                        }`}>
                          {cat.badge}
                        </span>
                        {isActive && (
                          <span className={`w-2 h-2 rounded-full bg-[#2563EB] ${isPaused ? "opacity-60" : "animate-ping"}`} />
                        )}
                      </div>

                      <div>
                        <h4 className={`text-xs sm:text-sm font-black tracking-tight mb-0.5 transition-colors ${
                          isActive ? "text-[#2563EB]" : "text-[#0F172A] group-hover:text-[#2563EB]"
                        }`}>
                          {cat.label}
                        </h4>
                        <div className="text-[10px] font-extrabold text-slate-500 leading-tight">
                          {cat.flow}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Category Display Showcase Card (Ultra-Rich 2-Column Grid with Auto-Slide Progress) */}
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full max-w-[1440px] mx-auto rounded-[30px] bg-gradient-to-br from-[#EFF6FF]/80 via-white to-[#DBEAFE]/40 border border-[#BFDBFE] p-7 sm:p-10 shadow-[0_16px_50px_rgba(37,99,235,0.12)] relative overflow-hidden"
              >
                {/* Auto-slide timer progress line (Pauses on Hover) */}
                <motion.div
                  key={`progress-${activeCategory}-${isPaused ? 'paused' : 'active'}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isPaused ? 1 : 1 }}
                  transition={{ duration: isPaused ? 0 : 4.5, ease: "linear" }}
                  className={`absolute top-0 left-0 right-0 h-1 origin-left pointer-events-none transition-colors ${
                    isPaused ? "bg-amber-400 opacity-70" : "bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7]"
                  }`}
                />

              {/* Ambient Glow Orb */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#2563EB]/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Tech Mesh Pattern Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Column: Problem & Transformation Blueprint */}
                <div className="md:col-span-7">
                  <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB] text-white text-[9.5px] font-black uppercase tracking-widest shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      TRANSFORMATION: {selectedCategoryData.flow}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[9.5px] font-black uppercase text-[#2563EB]">
                      {selectedCategoryData.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0F172A] tracking-tight leading-snug mb-3">
                    {selectedCategoryData.headline}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 text-justify mb-6">
                    {selectedCategoryData.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#2563EB]">
                    <span>⚡ Engineered by Agaran Core</span>
                    <span>&bull;</span>
                    <span>Production Grade</span>
                  </div>
                </div>

                {/* Right Column: Key Solution Capabilities & CTA */}
                <div className="md:col-span-5 p-6 rounded-2xl bg-white/90 border border-[#BFDBFE] shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] mb-3">
                      AGARAN SOLUTION BLUEPRINT
                    </div>

                    <div className="space-y-2.5 mb-6">
                      {selectedCategoryData.features.map((feat) => (
                        <div key={feat} className="p-3 rounded-xl bg-[#EFF6FF]/70 border border-[#BFDBFE] flex items-center justify-between shadow-2xs">
                          <span className="text-xs font-extrabold text-[#0F172A]">{feat}</span>
                          <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm px-6 py-3.5 rounded-xl font-extrabold text-white bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] hover:shadow-[0_8px_25px_rgba(37,99,235,0.3)] transition-all shadow-md w-full"
                  >
                    <span>Discuss Your Solution</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            09  FINAL CTA
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 pt-6 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto w-full">
            <Reveal delay={0.05}>
              <div className="relative rounded-[2rem] bg-[#2563EB] border border-blue-400/50 p-7 sm:p-10 lg:p-12 overflow-hidden shadow-[0_25px_80px_rgba(37,99,235,0.28)] text-white">
                {/* Ambient glows */}
                <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/10 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#1D4ED8]/60 blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/35 text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
                    <span>LET&apos;S WORK TOGETHER</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-[-0.035em] text-white mb-4">
                    Have A Problem Worth Solving?
                  </h2>

                  <p className="text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-blue-100 mb-8 text-justify sm:text-center">
                    Tell us what you&apos;re trying to improve, build or automate. We&apos;ll help you figure out what makes sense.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 text-sm sm:text-base px-8 py-4 rounded-xl font-black bg-white text-[#1D4ED8] hover:bg-blue-50 shadow-lg transition-all duration-200 w-full sm:w-auto"
                    >
                      Start a Conversation →
                    </Link>
                    <Link
                      href="/work"
                      className="inline-flex items-center justify-center gap-2 text-sm sm:text-base px-7 py-4 rounded-xl font-bold bg-blue-700/50 border border-white/30 text-white hover:bg-blue-700/70 transition-all duration-200 w-full sm:w-auto"
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
