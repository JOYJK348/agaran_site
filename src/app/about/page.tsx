"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

/* ─────────────────────────────────────────────
   Scroll-reveal — same easing as Home Hero
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
   Animated number counter
───────────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 50);
    const t = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(t); }
      else setVal(start);
    }, 20);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const beliefs = [
  {
    idx: "01",
    title: "Engineering for Clarity",
    statement: "The most powerful software is the software that disappears into the workflow — reliable, intuitive, and invisible enough to never slow you down.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    idx: "02",
    title: "Intelligence with Purpose",
    statement: "AI should amplify decision-making — not replace judgment. We build AI systems that surface the right insight at the right moment, without noise.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    idx: "03",
    title: "Products That Last",
    statement: "A digital product isn't done when it launches — it's done when it's been tested by real users, refined under real conditions, and proven to hold.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const principles = [
  {
    num: "01",
    shortTitle: "Simple First",
    title: "Keep Things Simple First",
    desc: "We remove unnecessary clutter before building. Simple tools work faster, stay reliable, and never confuse your users.",
    dot: "bg-[#2563EB]",
  },
  {
    num: "02",
    shortTitle: "Listen First",
    title: "Understand Your Need First",
    desc: "We take time to listen and understand your exact goal before writing code, so we build the right thing on day one.",
    dot: "bg-[#0284C7]",
  },
  {
    num: "03",
    shortTitle: "Real Results",
    title: "Real Results Over Talk",
    desc: "Theories don't mean much. What matters is a working product in the hands of real people that solves your real-world problem.",
    dot: "bg-[#1D4ED8]",
  },
  {
    num: "04",
    shortTitle: "Full Ownership",
    title: "We Stay With You All The Way",
    desc: "We don't build and walk away. We take full responsibility from initial design to launch and long-term performance.",
    dot: "bg-[#2563EB]",
  },
  {
    num: "05",
    shortTitle: "Keep Upgrading",
    title: "Constant, Goal-Driven Upgrades",
    desc: "Improvement is a continuous habit. We regularly test, refine, and upgrade your software based on real feedback.",
    dot: "bg-[#0284C7]",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Product Modules Engineered" },
  { value: 3, suffix: "+", label: "Institutional Partners" },
  { value: 2, suffix: "", label: "Products in Active Deployment" },
  { value: 98, suffix: "%", label: "Milestone Completion Rate" },
];

export default function AboutPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePrinciple, setActivePrinciple] = useState(0);

  /* Particle constellation — desktop only, matching Home hero */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let id: number;
    type P = { x: number; y: number; vx: number; vy: number; a: number; r: number };
    let pts: P[] = [];

    const init = () => {
      const w = window.innerWidth, h = window.innerHeight;
      if (w < 768) { pts = []; ctx.clearRect(0, 0, w, h); return; }
      canvas.width = w; canvas.height = h;
      pts = Array.from({ length: Math.min(80, Math.floor(w * h / 14000)) }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        a: Math.random() * 0.22 + 0.1, r: Math.random() * 2.2 + 1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37,99,235,${p.a})`; ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 145) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(37,99,235,${0.12 * (1 - d / 145)})`; ctx.lineWidth = 0.65; ctx.stroke();
        }
      }));
      id = requestAnimationFrame(draw);
    };
    init(); draw();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", init); };
  }, []);

  return (
    <>
      <Navbar />

      <main className="relative bg-white overflow-x-hidden">
        {/* ── Particle Canvas (desktop only) ── */}
        <canvas ref={canvasRef} className="hidden md:block absolute inset-0 pointer-events-none z-0" aria-hidden />

        {/* ── Ambient glows — matching Home Hero ── */}
        <div className="absolute top-[-15%] right-[-10%] w-[650px] h-[650px] rounded-full bg-[#2563EB]/14 blur-[130px] pointer-events-none" />
        <div className="absolute top-[40%] left-[-12%] w-[600px] h-[600px] rounded-full bg-[#3B82F6]/12 blur-[120px] pointer-events-none" />
        <div className="absolute top-[75%] right-[-5%] w-[500px] h-[400px] rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none" />

        {/* ══════════════════════════════════════════════════════════
            01  HERO
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-16">
          {/* Dot grid — same as Home */}
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:28px_28px] opacity-50 pointer-events-none" />

          <div className="relative max-w-[1280px] mx-auto">
            {/* Badge — exact match Home pill */}
            <Reveal delay={0}>
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                  ABOUT AGARAN
                </div>
              </div>
            </Reveal>

            {/* H1 — balanced hero font size */}
            <Reveal delay={0.1}>
              <h1 className="text-center text-[1.65rem] xs:text-[1.95rem] sm:text-3xl md:text-[2.25rem] lg:text-[2.65rem] xl:text-[2.85rem] font-extrabold lg:font-black leading-[1.18] sm:leading-[1.12] lg:leading-[1.08] tracking-[-0.035em] text-[#0F172A] w-full max-w-[1280px] mx-auto mb-4">
                Technology With a{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Reason.
                </span>
              </h1>
            </Reveal>

            {/* Sub — Home hero body text style */}
            <Reveal delay={0.2}>
              <p className="text-center text-sm sm:text-base lg:text-[1.08rem] font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-6">
                We build software, AI systems, and automation infrastructure for organizations that want to move faster, operate leaner, and deliver more — without adding complexity to do it.
              </p>
            </Reveal>

            {/* CTA row */}
            <Reveal delay={0.28}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Button variant="primary" href="/contact" className="text-sm sm:text-[15px] px-7 py-3.5 rounded-xl font-bold w-full sm:w-auto justify-center shadow-md">
                  Start a Conversation →
                </Button>
                <Button variant="secondary" href="/work" className="text-sm sm:text-[15px] px-7 py-3.5 rounded-xl font-bold w-full sm:w-auto justify-center border border-[#2563EB]">
                  View Our Work
                </Button>
              </div>
            </Reveal>

            {/* Stats strip — full width */}
            <Reveal delay={0.38}>
              <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-[1280px] mx-auto">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center justify-center gap-1 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 shadow-[0_4px_20px_rgba(37,99,235,0.06)] hover:border-[#BFDBFE] hover:shadow-[0_8px_25px_rgba(37,99,235,0.10)] transition-all duration-300"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-[#2563EB] tracking-tight">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            02  OUR STORY (Interactive Split Journey Showcase)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-white via-[#EFF6FF]/30 to-white">
          {/* Background ambient glow + dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
          <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none" />

          <div className="relative max-w-[1280px] mx-auto">
            {/* Section Badge */}
            <Reveal delay={0.04} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>02 &nbsp;•&nbsp; OUR STORY</span>
              </div>
            </Reveal>

            {/* Section H2 */}
            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-8 max-w-3xl mx-auto">
                Why Agaran{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent font-extrabold lg:font-black tracking-[-0.035em]">
                  Exists
                </span>
              </h2>
            </Reveal>

            {/* Interactive Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch mb-8">
              
              {/* Left Column: Interactive 3-Stage Story Navigation (7 Cols) — Touch-Swipe on Mobile */}
              <div className="lg:col-span-7 flex lg:flex-col overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3 pb-3 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                {[
                  {
                    num: "01",
                    tag: "THE CLARITY GAP",
                    title: "Solving the Clarity Problem",
                    desc: "Most organizations don't have a technology problem — they have a clarity problem. They know what outcome they need, but not how to get there without the wrong tradeoffs.",
                    highlight: "Zero Compromise Scope",
                    icon: (
                      <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                  },
                  {
                    num: "02",
                    tag: "THE PRODUCTION BRIDGE",
                    title: "Translating Business Intent",
                    desc: "We founded Agaran to be the partner that bridges that gap — translating business intent into production-grade technology that actually performs under real operational conditions.",
                    highlight: "Production-Grade Code",
                    icon: (
                      <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    ),
                  },
                  {
                    num: "03",
                    tag: "HIGH-IMPACT EXECUTION",
                    title: "Built for Real Scale",
                    desc: "Whether you're a founder who needs to move fast, an institution building for scale, or a business automating critical workflows — we're the team that gets it done without the overhead.",
                    highlight: "Zero Overhead Delivery",
                    icon: (
                      <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    ),
                  },
                ].map((stage, idx) => (
                  <Reveal key={stage.num} delay={0.12 + idx * 0.08} className="snap-center shrink-0 w-[84vw] sm:w-[340px] lg:w-auto">
                    <div className="group relative p-5 sm:p-6 rounded-[22px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(37,99,235,0.06)] hover:shadow-[0_14px_35px_rgba(37,99,235,0.12)] hover:border-[#BFDBFE] transition-all duration-300 h-full">
                      {/* Left vertical indicator line */}
                      <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="flex items-start gap-4">
                        {/* Number & Icon Badge */}
                        <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-colors duration-300">
                          <span className="text-xs font-black text-[#2563EB] group-hover:text-white transition-colors duration-300">
                            {stage.num}
                          </span>
                        </div>

                        {/* Text Block */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#2563EB]">{stage.tag}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="text-[10px] font-bold text-slate-400">{stage.highlight}</span>
                          </div>
                          <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] mb-1.5 group-hover:text-[#2563EB] transition-colors duration-200">
                            {stage.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 text-justify">
                            {stage.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Mobile Swipe Dot Indicator */}
              <div className="flex lg:hidden items-center justify-center gap-1.5 -mt-1 mb-3">
                <span className="w-5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              </div>

              {/* Right Column: Premium 3D-Glass Architectural Feature Card (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col">
                <Reveal delay={0.25} className="h-full">
                  <div className="relative h-full min-h-[340px] rounded-[24px] bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#0284C7] p-7 sm:p-8 text-white flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.25)] border border-blue-400/40">
                    
                    {/* Background glow effects */}
                    <div className="absolute top-[-20%] right-[-20%] w-[350px] h-[350px] rounded-full bg-white/10 blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-[-20%] left-[-20%] w-[300px] h-[300px] rounded-full bg-blue-900/30 blur-[80px] pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

                    {/* Top status header */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
                        HOW WE WORK WITH YOU
                      </div>
                      <span className="text-[11px] font-extrabold text-blue-200">OUR PROMISE</span>
                    </div>

                    {/* Middle feature metric callout */}
                    <div className="relative z-10 my-6 space-y-4">
                      <div className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
                        <p className="text-xs font-medium text-blue-100 uppercase tracking-wider mb-1">What We Do For You</p>
                        <p className="text-base sm:text-lg font-black text-white leading-snug">
                          &ldquo;You bring your idea or problem. We build the exact technology you need to solve it and grow.&rdquo;
                        </p>
                      </div>

                      {/* Interactive Pillar Grid */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                          <p className="text-[10px] font-bold text-sky-200 uppercase tracking-widest">Your Goal</p>
                          <p className="text-sm font-black text-white mt-0.5">Built Exactly For You</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                          <p className="text-[10px] font-bold text-sky-200 uppercase tracking-widest">User Experience</p>
                          <p className="text-sm font-black text-white mt-0.5">Simple & Easy To Use</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom brand pill */}
                    <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-blue-100">
                      <span>For Businesses, Creators & Institutions</span>
                      <span className="font-black text-white">Agaran →</span>
                    </div>

                  </div>
                </Reveal>
              </div>

            </div>

            {/* Bottom Full-Width Brand Pull-Quote Banner */}
            <Reveal delay={0.35}>
              <div className="relative rounded-[20px] overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#1D4ED8] via-[#2563EB] to-[#0284C7]" />
                <div className="bg-gradient-to-r from-[#EFF6FF] via-white to-[#EFF6FF]/60 border border-[#BFDBFE] py-5 px-6 sm:px-10">
                  <div className="flex items-start gap-4">
                    <span className="text-[54px] leading-none font-black text-[#BFDBFE] select-none -mt-3 hidden sm:block">&ldquo;</span>
                    <div>
                      <p className="text-base sm:text-xl lg:text-2xl font-extrabold lg:font-black text-[#1D4ED8] tracking-[-0.035em] leading-snug">
                        We didn&rsquo;t build Agaran to be another software agency. We built it to be the technical partner that organizations deserve — rigorous, invested, and accountable beyond delivery.
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#2563EB]">THE AGARAN STANDARD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            03  OUR BELIEF (Simplified Non-Tech Pillar Showcase)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-[1280px] mx-auto">

            <Reveal delay={0.05} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>03 &nbsp;•&nbsp; OUR BELIEF</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-3 max-w-3xl mx-auto">
                Technology Should Work For You,{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent font-extrabold lg:font-black tracking-[-0.035em]">
                  Not Against You.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-center text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 max-w-2xl mx-auto mb-8">
                Powerful technology doesn&apos;t need to be confusing or hard to use. Here is the core standard we hold for everything we build:
              </p>
            </Reveal>

            {/* 3 Elevated Non-Tech Belief Cards — Touch-Swipe Horizontal Carousel on Mobile */}
            <div className="flex md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 md:gap-6 pb-4 md:pb-0 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
              {[
                {
                  idx: "01",
                  tag: "CLARITY FIRST",
                  title: "Simple & Easy to Use",
                  desc: "The best software is the software you don't have to struggle with. We design every screen so anyone can use it effortlessly from day one.",
                  icon: (
                    <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                },
                {
                  idx: "02",
                  tag: "HELPFUL AI",
                  title: "Smart AI That Actually Helps",
                  desc: "AI shouldn't be complicated or full of technical jargon. We build AI tools that do the tedious work for you and give clear, useful answers.",
                  icon: (
                    <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  idx: "03",
                  tag: "RELIABILITY",
                  title: "Built to Work Every Day",
                  desc: "A great digital product doesn't just look good on day one — it runs fast, stays reliable, and grows with your business over time.",
                  icon: (
                    <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
              ].map((b, i) => (
                <Reveal key={b.idx} delay={0.1 + i * 0.1} className="snap-center shrink-0 w-[82vw] sm:w-[320px] md:w-auto">
                  <div className="group relative h-full rounded-[24px] border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_6px_24px_rgba(37,99,235,0.06)] hover:shadow-[0_18px_45px_rgba(37,99,235,0.13)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between">
                    {/* Top gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] opacity-80 group-hover:opacity-100 transition-opacity" />
                    
                    <div>
                      {/* Top icon + index row */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-colors duration-300">
                          <span className="text-[#2563EB] group-hover:text-white transition-colors duration-300">
                            {b.icon}
                          </span>
                        </div>
                        <span className="text-xs font-black text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-[#BFDBFE]">
                          {b.idx}
                        </span>
                      </div>

                      <div className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] mb-1">{b.tag}</div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                        {b.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 text-justify">
                        {b.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                      <span>Agaran Standard</span>
                      <span>✓</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Swipe Dot Indicator */}
            <div className="flex md:hidden items-center justify-center gap-1.5 -mt-4 mb-6">
              <span className="w-5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            </div>

            {/* Bottom Callout Banner */}
            <Reveal delay={0.35}>
              <div className="rounded-2xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] p-6 sm:p-7 text-white shadow-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-extrabold tracking-tight leading-snug">
                      &ldquo;The products we&apos;re most proud of are the ones that make your daily work easier. That is our design standard.&rdquo;
                    </p>
                  </div>
                  <div className="shrink-0 text-xs font-black uppercase tracking-widest text-white/80 bg-white/15 px-3 py-1.5 rounded-full border border-white/20">
                    AGARAN DESIGN PRINCIPLE
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            04 + 05  MISSION & VISION — Touch-Swipe Carousel on Mobile
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 py-8 sm:py-12 px-4 sm:px-8 lg:px-16 bg-[#EFF6FF]/40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
          <div className="relative max-w-[1280px] mx-auto flex md:grid md:grid-cols-2 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-5 sm:gap-6 pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">

            {/* Mission */}
            <Reveal delay={0.08} className="snap-center shrink-0 w-[86vw] sm:w-[360px] md:w-auto">
              <div className="h-full rounded-[24px] bg-white border border-slate-200/90 shadow-[0_8px_28px_rgba(37,99,235,0.07)] hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7]" />
                <div className="p-6 sm:p-8 flex flex-col h-[calc(100%-6px)]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4 self-start">
                    04 &nbsp;•&nbsp; OUR MISSION
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold lg:font-black text-[#0F172A] tracking-[-0.035em] leading-snug mb-3">
                    Eliminate the Gap Between Business Intent and Technical Execution.
                  </h3>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 flex-1 text-justify">
                    Most organizations lose time and resources in translation — between what they need and what they receive. Our mission is to close that gap permanently: delivering technology that is precisely scoped, rigorously built, and immediately usable by the people it's made for.
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#94A3B8]">AGARAN MISSION</span>
                    <span className="text-xs font-bold text-[#2563EB]">Precision-Built →</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.18} className="snap-center shrink-0 w-[86vw] sm:w-[360px] md:w-auto">
              <div className="h-full rounded-[24px] bg-white border border-slate-200/90 shadow-[0_8px_28px_rgba(37,99,235,0.07)] hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-[#0284C7] via-[#2563EB] to-[#1D4ED8]" />
                <div className="p-6 sm:p-8 flex flex-col h-[calc(100%-6px)]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4 self-start">
                    05 &nbsp;•&nbsp; OUR VISION
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold lg:font-black text-[#0F172A] tracking-[-0.035em] leading-snug mb-3">
                    To Be the Infrastructure Layer Behind Organizations That Move Fast.
                  </h3>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 flex-1 text-justify">
                    We're building toward a future where Agaran is the silent engine powering the platforms, workflows, and AI systems of ambitious organizations — not just a vendor that gets replaced, but a foundational partner that grows with the institutions it serves.
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#94A3B8]">AGARAN VISION</span>
                    <span className="text-xs font-bold text-[#2563EB]">Long-Term Infrastructure →</span>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Mobile Swipe Dot Indicator */}
          <div className="flex md:hidden items-center justify-center gap-1.5 mt-4 mb-1">
            <span className="w-5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            06  OUR PHILOSOPHY (Interactive Strategy Comparison)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1280px] mx-auto">

            <Reveal delay={0.05} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>06 &nbsp;•&nbsp; OUR PHILOSOPHY</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-3 max-w-3xl mx-auto">
                Quality First.{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent font-extrabold lg:font-black tracking-[-0.035em]">
                  Always.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-center text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 max-w-2xl mx-auto mb-8">
                We don&apos;t rush out quick fixes that break a few months later. We build software carefully so it lasts and runs smoothly for years:
              </p>
            </Reveal>

            {/* 2-Column Side-by-Side Comparison Cards — Touch-Swipe Carousel on Mobile */}
            <div className="flex lg:grid lg:grid-cols-2 overflow-x-auto snap-x snap-mandatory scrollbar-none gap-5 lg:gap-6 items-stretch mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
              
              {/* Card 1: The Common Way */}
              <Reveal delay={0.18} className="snap-center shrink-0 w-[85vw] sm:w-[380px] lg:w-auto h-full">
                <div className="h-full rounded-[24px] bg-slate-50/80 border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-[10.5px] font-extrabold text-slate-600 uppercase tracking-wider mb-4">
                      <span>✕</span>
                      <span>THE RUSHED WAY</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 mb-2">
                      Rushing Features Without Planning
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 mb-5 text-justify">
                      Building too many features too quickly leads to slow software, confusing screens, and constant bugs that force you to rebuild everything from scratch in a few months.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Result: High Costs & Wasted Time</span>
                    <span className="text-rose-500 font-extrabold">✕ Avoid</span>
                  </div>
                </div>
              </Reveal>

              {/* Card 2: The Agaran Way */}
              <Reveal delay={0.25} className="snap-center shrink-0 w-[85vw] sm:w-[380px] lg:w-auto h-full">
                <div className="relative h-full rounded-[24px] bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#0284C7] p-6 sm:p-8 text-white flex flex-col justify-between shadow-[0_16px_45px_rgba(37,99,235,0.22)] border border-blue-400/40 overflow-hidden">
                  <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] rounded-full bg-white/10 blur-[70px] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-[10.5px] font-extrabold text-white uppercase tracking-wider backdrop-blur-md mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
                      <span>✓ THE AGARAN WAY</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">
                      Careful Design & Strong Foundation
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-blue-100 mb-5 text-justify">
                      We focus on building the exact solution you need with precision. It runs fast, feels smooth, and stays reliable for years without unexpected headaches.
                    </p>
                  </div>

                  <div className="relative z-10 p-3.5 rounded-xl bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-between text-xs font-bold text-white">
                    <span>Result: Long-Term Value & Peace of Mind</span>
                    <span className="text-sky-300 font-black">✓ The Agaran Standard</span>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* Mobile Swipe Dot Indicator */}
            <div className="flex lg:hidden items-center justify-center gap-1.5 -mt-4 mb-6">
              <span className="w-5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            </div>

            {/* Bottom Highlight Pill */}
            <Reveal delay={0.35}>
              <div className="rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] p-5 sm:p-6 text-center">
                <p className="text-sm sm:text-base font-extrabold text-[#1D4ED8] tracking-tight">
                  💡 &ldquo;Taking the time to ask the right question first saves months of wasted work.&rdquo;
                </p>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            07  OUR PRINCIPLES (Animation-Based Interactive Stepper)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#EFF6FF]/40">
          <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />
          <div className="relative max-w-[1280px] mx-auto">

            <Reveal delay={0.05} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>07 &nbsp;•&nbsp; OUR PRINCIPLES</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center text-[1.55rem] xs:text-[1.8rem] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.4rem] font-extrabold lg:font-black leading-[1.18] tracking-[-0.035em] text-[#0F172A] mb-2 w-full max-w-[1280px] mx-auto">
                How We Work & Make Decisions
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-center text-xs sm:text-sm lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-8">
                These aren&apos;t rules on a wall. They are the 5 standards we follow every single day:
              </p>
            </Reveal>

            {/* Interactive Animated Stepper Tabs */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2 scrollbar-none w-full">
              {principles.map((p, i) => (
                <button
                  key={p.num}
                  onClick={() => setActivePrinciple(i)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                    activePrinciple === i
                      ? "bg-[#2563EB] text-white shadow-[0_8px_25px_rgba(37,99,235,0.3)] scale-105"
                      : "bg-white text-slate-600 border border-slate-200/90 hover:border-[#BFDBFE] hover:text-[#2563EB]"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${activePrinciple === i ? "bg-white animate-pulse" : "bg-blue-400"}`} />
                  <span>{p.num}</span>
                  <span className="hidden sm:inline-block">• {p.shortTitle}</span>
                </button>
              ))}
            </div>

            {/* Animated Spotlight Display Card — full width */}
            <motion.div
              key={activePrinciple}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-[1280px] mx-auto rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-10 shadow-[0_12px_40px_rgba(37,99,235,0.08)] relative overflow-hidden"
            >
              <div className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7]" />
              
              <div>
                {/* Text Content */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10px] font-black uppercase tracking-widest text-[#2563EB] mb-3">
                  <span>AGARAN OPERATING STANDARD</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-2.5 tracking-tight">
                  {principles[activePrinciple].title}
                </h3>
                <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600 text-justify">
                  {principles[activePrinciple].desc}
                </p>
              </div>

              {/* Prev / Next Controls */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActivePrinciple((prev) => (prev > 0 ? prev - 1 : principles.length - 1))}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#2563EB] transition-colors"
                >
                  ← Previous Standard
                </button>
                <div className="flex items-center gap-1.5">
                  {principles.map((_, i) => (
                    <span
                      key={i}
                      onClick={() => setActivePrinciple(i)}
                      className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                        activePrinciple === i ? "w-6 bg-[#2563EB]" : "w-2 bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActivePrinciple((prev) => (prev < principles.length - 1 ? prev + 1 : 0))}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:underline transition-all"
                >
                  Next Standard →
                </button>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            08  MINDSET — Final CTA-style full-width blue banner
        ══════════════════════════════════════════════════════════ */}
        <section className="relative z-10 pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1280px] mx-auto">
            <Reveal delay={0.05}>
              <div className="relative rounded-[2rem] bg-[#2563EB] border border-blue-400/50 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_25px_80px_rgba(37,99,235,0.28)] text-white">

                {/* Inner ambient glows */}
                <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/10 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#1D4ED8]/60 blur-[100px] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

                <div className="relative z-10">
                  {/* Section tag */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/35 text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
                    <span>08 &nbsp;•&nbsp; OUR MINDSET</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

                    {/* Left: big headline */}
                    <div>
                      <h2 className="text-[1.45rem] xs:text-[1.7rem] sm:text-2xl md:text-[1.85rem] lg:text-3xl xl:text-[2.15rem] font-extrabold lg:font-black leading-[1.2] tracking-[-0.035em] text-white mb-3">
                        Evaluate First. Adopt When It Earns It.
                      </h2>
                      <p className="text-xs sm:text-sm lg:text-[1.05rem] font-medium leading-relaxed text-blue-100 mb-5">
                        Every framework, every AI model, every infrastructure pattern is evaluated against a single question: does it genuinely improve the outcome for the people using this system?
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center gap-2 text-sm sm:text-base px-7 py-3.5 rounded-xl font-black bg-white text-[#1D4ED8] hover:bg-blue-50 shadow-lg transition-all duration-200"
                        >
                          Start a Conversation →
                        </Link>
                        <Link
                          href="/work"
                          className="inline-flex items-center justify-center gap-2 text-sm sm:text-base px-6 py-3.5 rounded-xl font-bold bg-blue-700/50 border border-white/30 text-white hover:bg-blue-700/70 transition-all duration-200"
                        >
                          View Our Work
                        </Link>
                      </div>
                    </div>

                    {/* Right: 3 high-contrast conviction cards with non-tech clear text */}
                    <div className="space-y-3.5">
                      {[
                        { label: "ON AI & TOOLS", text: "We only use AI where it genuinely saves you time, cuts costs, or speeds up work — never just for hype." },
                        { label: "ON REAL SCALE", text: "We build your software from day one so it handles growing users smoothly without breaking or needing rewrites." },
                        { label: "ON SUCCESS", text: "A project is only successful when it makes your daily business easier and delivers real, practical results." },
                      ].map((item) => (
                        <div key={item.label} className="p-4 sm:p-5 rounded-2xl bg-[#1E40AF]/70 border border-blue-300/30 shadow-sm">
                          <div className="text-[11px] font-black uppercase tracking-widest text-sky-200 mb-1.5">{item.label}</div>
                          <p className="text-xs sm:text-sm font-medium leading-relaxed text-white text-justify">{item.text}</p>
                        </div>
                      ))}
                    </div>

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
