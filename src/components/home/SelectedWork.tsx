"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/* ── Reusable scroll-reveal wrapper ── */
function Reveal({
  children,
  delay = 0,
  className = "",
  y = 22,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Project Data ── */
const projects = [
  {
    name: "NEET Academy Platform",
    href: "/work/neet-saas-platform",
    status: "Live Production System",
    statusDot: "bg-emerald-400",
    tags: [
      "Live Classes & Recordings",
      "Exam Management",
      "Digital Exam Builder",
      "Offline Exam Builder",
      "AI Answer Solver",
      "AI Integration",
      "Course Builder",
      "Student & Parent Portal",
    ],
    description: (
      <>
        A <strong className="font-extrabold text-[#0F172A]">B2B2C EdTech SaaS platform</strong> that helps NEET coaching centers manage <strong className="font-extrabold text-[#2563EB]">academics, live classes, recordings, exams, offline test workflows, and AI-powered learning</strong> through a single unified platform. Built with a scalable multi-tenant architecture for coaching institutes while delivering a seamless learning experience for students and parents.
      </>
    ),
    metrics: [
      { label: "Status", value: "Live System" },
      { label: "Model", value: "B2B2C SaaS" },
      { label: "Architecture", value: "Multi-Tenant" },
    ],
  },
  {
    name: "ZHI Learn While Playing",
    href: "/work/ai-learning-portal",
    status: "Live Production System",
    statusDot: "bg-emerald-400",
    tags: [
      "B2B + B2C EdTech Platform",
      "Multi-Tenant SaaS Architecture",
      "Animation & Interactive Video Learning",
      "Storytelling, Games & Activities",
      "Personalized Learning Experience",
    ],
    description: (
      <>
        A <strong className="font-extrabold text-[#0F172A]">hybrid B2B and B2C educational SaaS platform</strong> that helps children learn through <strong className="font-extrabold text-[#2563EB]">animations, interactive videos, storytelling, games, and personalized learning experiences</strong>. Built with a scalable multi-tenant architecture for schools and institutions, while supporting direct learning for parents and children.
      </>
    ),
    metrics: [
      { label: "Status", value: "Live System" },
      { label: "Model", value: "B2B + B2C" },
      { label: "Architecture", value: "Multi-Tenant" },
    ],
  },
];

/* ── Partner Testimonials ── */
const testimonials = [
  {
    quote:
      "The Agaran team has been highly collaborative throughout the development process. The platform is being built with a strong focus on scalability, usability, and long-term growth.",
    label: "Ongoing Product Development",
    role: "Education Technology Partner",
    initials: "ET",
    tagPill: "EDTECH PARTNER",
  },
  {
    quote:
      "The project is progressing steadily with regular iterations, improvements, and feature enhancements. We appreciate the transparent communication and structured development approach.",
    label: "Active Client Collaboration",
    role: "Technology Partner",
    initials: "TP",
    tagPill: "TECH COLLABORATION",
  },
  {
    quote:
      "We're currently building long-term technology solutions together, and the experience has been focused on quality, flexibility, and practical execution.",
    label: "Current Implementation Phase",
    role: "Business Automation Partner",
    initials: "BA",
    tagPill: "AUTOMATION PARTNER",
  },
];

/* ── Animated counter hook ── */
function useCounter(end: number, inView: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) { setCount(0); return; }
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [end, inView, duration]);
  return count;
}

export default function SelectedWork() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: false, amount: 0.3 });

  const projectCount = useCounter(2, statsInView);
  const moduleCount = useCounter(100, statsInView);
  const partnerCount = useCounter(3, statsInView);

  return (
    <>
      {/* ══════════════════════════════════════════════ */}
      {/* SECTION 1 — ACTIVE PROJECTS                   */}
      {/* ══════════════════════════════════════════════ */}
      <section className="relative py-4 sm:py-6 lg:py-8 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[280px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-full px-2 xs:px-3 sm:px-4 lg:px-6">

            {/* ── Section Header ── */}
            <div className="relative text-center max-w-4xl mx-auto mb-8 sm:mb-10">
              <Reveal delay={0} y={14}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-[11px] font-black text-[#2563EB] tracking-[0.18em] uppercase mb-3.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                  SELECTED WORK
                </div>
              </Reveal>
              <Reveal delay={0.08} y={20}>
                <h2 className="text-[2.1rem] sm:text-[3rem] lg:text-[3.5rem] font-black text-[#0F172A] tracking-[-0.035em] leading-[1.12]">
                  What We&apos;re{" "}
                  <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                    Building
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.16} y={16}>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4">
                  {["Education Platforms", "AI-Powered Systems", "Business Automation"].map((t) => (
                    <div key={t} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-[13px] font-black text-[#0F172A]">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* ── Stats Strip — Rich Elevated White Card ── */}
            <Reveal delay={0.2} y={16}>
              <div
                ref={statsRef}
                className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8 sm:mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white to-slate-50/80 border border-blue-100/90 shadow-[0_8px_25px_-5px_rgba(37,99,235,0.07)]"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">{projectCount}</div>
                  <div className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase mt-0.5">Active Projects</div>
                </div>
                <div className="text-center border-x border-slate-200/80">
                  <div className="text-2xl sm:text-3xl font-black text-[#2563EB] tracking-tight">{moduleCount}+</div>
                  <div className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase mt-0.5">Modules Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">{partnerCount}+</div>
                  <div className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase mt-0.5">Partners</div>
                </div>
              </div>
            </Reveal>

            {/* ── Project Cards — Equal Height Grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 items-stretch">
              {projects.map((project, idx) => {
                const cardStyles = [
                  { bg: "bg-gradient-to-br from-blue-100/90 via-blue-50/70 to-white", border: "border-blue-300/80", hoverShadow: "hover:shadow-[0_22px_50px_rgba(37,99,235,0.16)]", accent: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]", badge: "bg-blue-100 text-[#2563EB] border-blue-300", metricBg: "bg-gradient-to-r from-blue-100/80 via-white to-blue-50/90 border-blue-200", tagBg: "bg-blue-100/90 border-blue-200 text-[#2563EB]" },
                  { bg: "bg-gradient-to-br from-sky-100/90 via-blue-50/70 to-white", border: "border-sky-300/80", hoverShadow: "hover:shadow-[0_22px_50px_rgba(2,132,199,0.16)]", accent: "from-[#0284C7] via-[#38BDF8] to-[#0284C7]", badge: "bg-sky-100 text-[#0284C7] border-sky-300", metricBg: "bg-gradient-to-r from-sky-100/80 via-white to-blue-50/90 border-sky-200", tagBg: "bg-sky-100/90 border-sky-200 text-[#0284C7]" },
                ][idx % 2];

                return (
                  <Reveal key={project.name} delay={0.1 + idx * 0.12} y={28} className="h-full">
                    <div className="group relative rounded-[22px] transition-all duration-500 h-full">
                      {/* Multi-layered Soft Glow Shadow Background */}
                      <div className={`relative rounded-[22px] ${cardStyles.bg} border ${cardStyles.border} transition-all duration-500 overflow-hidden shadow-[0_8px_30px_rgba(37,99,235,0.07)] ${cardStyles.hoverShadow} h-full flex flex-col justify-between`}>
                        {/* Top Brand Accent Bar */}
                        <div className={`h-[4px] bg-gradient-to-r ${cardStyles.accent}`} />
                        
                        {/* Ambient inner glow */}
                        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none bg-blue-100/0 group-hover:bg-blue-100/70 transition-all duration-700" />

                        <div className="relative p-6 sm:p-8 flex flex-col justify-between h-full">
                          <div>
                            {/* Status + Number Row */}
                            <div className="flex items-center justify-between mb-5">
                              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-2xs text-[10.5px] font-bold text-slate-700 tracking-wider uppercase">
                                <span className={`w-2 h-2 rounded-full ${project.statusDot} animate-pulse shadow-sm`} />
                                {project.status}
                              </div>
                              <div className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-black tracking-wider uppercase shadow-2xs ${cardStyles.badge}`}>
                                0{idx + 1}
                              </div>
                            </div>

                            {/* Project Title */}
                            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-[-0.02em] mb-3">
                              {project.name}
                            </h3>

                            {/* Description */}
                            <p className="text-[13.5px] sm:text-sm text-[#475569] leading-[1.7] mb-6 font-normal text-justify">
                              {project.description}
                            </p>

                            {/* Rich Mini Metrics Row */}
                            <div className={`grid grid-cols-3 gap-3 mb-6 p-3.5 rounded-2xl ${cardStyles.metricBg} border shadow-2xs`}>
                              {project.metrics.map((m) => (
                                <div key={m.label} className="text-center">
                                  <div className="text-sm sm:text-base font-black text-[#2563EB]">{m.value}</div>
                                  <div className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mt-0.5">{m.label}</div>
                                </div>
                              ))}
                            </div>

                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`px-3 py-1.5 rounded-xl ${cardStyles.tagBg} border text-[11px] font-extrabold tracking-wide shadow-2xs transition-all duration-300`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Solid Theme Blue CTA Button — Anchored to bottom */}
                          <div className="pt-4 border-t border-slate-200/60 mt-auto">
                            <Link
                              href={project.href}
                              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 group/btn"
                            >
                              <span>Explore Case Study</span>
                              <span className="text-base group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                            </Link>
                          </div>

                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* ── CTA — View Our Work Main Page ── */}
            <Reveal delay={0.3} y={14}>
              <div className="mt-8 sm:mt-10 flex justify-center">
                <Button variant="secondary" href="/work">
                  View Our Work &rarr;
                </Button>
              </div>
            </Reveal>
          </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* SECTION 2 — PARTNER FEEDBACK GRID (WHAT-WE-DO UI/UX) */}
      {/* ══════════════════════════════════════════════ */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-[#EFF6FF]/60 via-white to-[#DBEAFE]/30 border-t border-[#BFDBFE]/60 overflow-hidden w-full">
        <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

            {/* ── Section Header ── */}
            <div className="relative text-center max-w-4xl mx-auto mb-10 sm:mb-12">
              <Reveal delay={0} y={14}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#BFDBFE] text-[11px] font-black text-[#2563EB] tracking-[0.18em] uppercase mb-3 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                  PARTNER FEEDBACK
                </div>
              </Reveal>
              <Reveal delay={0.08} y={20}>
                <h2 className="text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-black text-[#0F172A] tracking-[-0.035em] leading-[1.12]">
                  Building with{" "}
                  <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                    Our Partners
                  </span>
                </h2>
              </Reveal>
            </div>

            {/* ── PARTNER TESTIMONIALS GRID (Matching What-We-Do Card UI/UX) ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
              {testimonials.map((item, idx) => {
                return (
                  <Reveal key={item.role} delay={0.1 + idx * 0.12} y={20} className="h-full">
                    <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#EFF6FF]/95 via-white to-[#DBEAFE]/50 border border-[#BFDBFE] shadow-[0_12px_35px_rgba(37,99,235,0.08)] hover:border-[#2563EB] hover:shadow-[0_22px_48px_rgba(37,99,235,0.20)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full">
                      {/* Top Right Live Dot Accent */}
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-ping absolute top-4 right-4" />

                      <div>
                        {/* Card Header Row: Step Badge + Tag Pill */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="text-[10px] font-mono font-black tracking-widest text-[#2563EB] bg-white px-2.5 py-1 rounded-full border border-[#BFDBFE] shadow-2xs">
                            0{idx + 1} / 03
                          </span>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                            {item.tagPill}
                          </span>
                        </div>

                        {/* Avatar & Role Header */}
                        <div className="flex items-center gap-3.5 mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 text-white font-black text-sm tracking-wider">
                            {item.initials}
                          </div>
                          <div>
                            <p className="text-base font-extrabold text-[#0F172A] leading-tight group-hover:text-[#2563EB] transition-colors">{item.role}</p>
                            <div className="inline-flex items-center gap-1.5 mt-1">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              <span className="text-xs font-extrabold text-emerald-700">{item.label}</span>
                            </div>
                          </div>
                        </div>

                        {/* Quote Body */}
                        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs my-2">
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium text-left">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                        </div>
                      </div>

                      {/* Footer Tag */}
                      <div className="pt-4 mt-4 border-t border-[#BFDBFE]/60 flex items-center justify-between text-xs">
                        <span className="font-mono font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">
                          VERIFIED PARTNER
                        </span>
                        <span className="font-extrabold text-[#2563EB]">
                          Agaran Network
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>
      </section>
    </>
  );
}
