"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// 4 COMPACT CATEGORIES DATA
// ─────────────────────────────────────────────────────────────────────────────
const categories = [
  {
    id: "businesses",
    num: "01",
    label: "BUSINESSES",
    title: "Technology Engineered to Scale Your Business",
    tagline: "Custom web apps, automated CRM & AI.",
    description: "Custom web applications, automated CRM systems, and AI workflows engineered to drive revenue.",
    badgeBg: "bg-white text-[#2563EB] border-blue-200 shadow-xs",
    cardBg: "bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#DBEAFE]/30",
    cardBorder: "border-[#BFDBFE] hover:border-[#2563EB] hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)]",
    headerLine: "from-[#2563EB] via-blue-500 to-sky-400",
    accentColor: "#2563EB",
    statusBadge: "Operational Automation & CRM Systems",
    features: [
      "Custom Web & Mobile Platforms",
      "AI Agents & Automated Workflows",
      "CRM & Business Analytics Portals",
    ],
    cta: "Build Business Tech",
  },
  {
    id: "education",
    num: "02",
    label: "EDUCATION",
    title: "Automated LMS & Digital Education Systems",
    tagline: "Automating admissions, learning & exams.",
    description: "Automated learning platforms (LMS), online admissions, digital exams, fee collection, and AI doubt solvers.",
    badgeBg: "bg-white text-[#2563EB] border-blue-200 shadow-xs",
    cardBg: "bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#DBEAFE]/30",
    cardBorder: "border-[#BFDBFE] hover:border-[#2563EB] hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)]",
    headerLine: "from-[#2563EB] via-blue-500 to-sky-400",
    accentColor: "#2563EB",
    statusBadge: "Automated LMS & Institutional Platform",
    features: [
      "Automated Admissions & LMS Portals",
      "Online Exams & AI Doubt Solvers",
      "Parent Alerts & Auto Fee Portals",
    ],
    cta: "Build Automated LMS",
  },
  {
    id: "organizations",
    num: "03",
    label: "TEAMS & ORGANIZATIONS",
    title: "Custom Team Software & Workflow Automation",
    tagline: "Connecting teams & streamlining work.",
    description: "Internal team portals, task management, cross-department data sync, and automated reporting systems.",
    badgeBg: "bg-white text-[#2563EB] border-blue-200 shadow-xs",
    cardBg: "bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#DBEAFE]/30",
    cardBorder: "border-[#BFDBFE] hover:border-[#2563EB] hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)]",
    headerLine: "from-[#2563EB] via-blue-500 to-sky-400",
    accentColor: "#2563EB",
    statusBadge: "Team Operations & Workflow Automation",
    features: [
      "Internal Portals & Task Systems",
      "Automated Workflows & Reports",
      "Cross-Department Data Sync",
    ],
    cta: "Build Team Software",
  },
  {
    id: "ideas",
    num: "04",
    label: "IDEAS & PRODUCTS",
    title: "MVP Development & Digital Product Engineering",
    tagline: "Turning startup & product ideas into reality.",
    description: "Building working MVPs, SaaS web applications, mobile apps, and scalable digital products from scratch.",
    badgeBg: "bg-white text-[#2563EB] border-blue-200 shadow-xs",
    cardBg: "bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#DBEAFE]/30",
    cardBorder: "border-[#BFDBFE] hover:border-[#2563EB] hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)]",
    headerLine: "from-[#2563EB] via-blue-500 to-sky-400",
    accentColor: "#2563EB",
    statusBadge: "MVP Development & SaaS Engineering",
    features: [
      "Idea Concept → Working MVP",
      "SaaS Web & Mobile App Dev",
      "Cloud Launch & Product Scaling",
    ],
    cta: "Build Your Product",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPACT 4-COL RESPONSIVE GRID COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function WhoWeBuildForInteractive() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      id="who-we-build-for"
      className="relative py-14 sm:py-20 bg-slate-50/60 overflow-hidden w-full border-t border-slate-200/60"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-50/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-full mx-auto mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] font-black uppercase tracking-widest text-[#2563EB] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            WHO WE BUILD FOR
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.12] mb-3 sm:whitespace-nowrap">
            Different Needs.{" "}
            <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
              One Technology Partner.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
            From ambitious ideas to growing businesses and learning institutions, we build custom technology around the people behind them.
          </p>
        </motion.div>

        {/* 4 CARDS RESPONSIVE GRID Layout:
            - Desktop (lg: 1024px+): 4 columns in 1 single row (grid-cols-4)
            - Tablet (md: 768px-1023px): 2 columns (grid-cols-2)
            - Mobile (<768px): 1 column (grid-cols-1)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className={`group relative rounded-3xl ${cat.cardBg} border ${cat.cardBorder} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between`}
            >
              {/* Top Accent Line */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cat.headerLine}`} />

              <div className="p-5 sm:p-6 flex flex-col flex-1 gap-4">

                {/* Header: Number & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black text-slate-500 bg-white/90 border border-slate-200/80 px-2 py-0.5 rounded-md tracking-wider shadow-2xs">
                      {cat.num}
                    </span>
                    <span className={`text-[9.5px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${cat.badgeBg}`}>
                      {cat.label}
                    </span>
                  </div>
                </div>

                {/* Title & Concise Copy */}
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight leading-snug mb-1.5 group-hover:text-[#2563EB] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Status / Live Badge */}
                <div className="bg-white/90 border border-slate-200/80 rounded-xl p-2 flex items-center gap-2 text-[10px] font-extrabold text-slate-700 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: cat.accentColor }} />
                  <span className="truncate">{cat.statusBadge}</span>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-col gap-1.5 mt-auto pt-1">
                  {cat.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2 text-[11px] font-bold text-slate-700 bg-white/70 border border-slate-200/60 px-2.5 py-1.5 rounded-lg"
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-black text-white shrink-0"
                        style={{ backgroundColor: cat.accentColor }}
                      >
                        ✓
                      </span>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl font-black text-xs text-white transition-all duration-300 shadow-xs hover:shadow-md hover:scale-[1.01]"
                    style={{ backgroundColor: cat.accentColor }}
                  >
                    <span>{cat.cta}</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#EFF6FF] via-white to-[#F0F9FF] border border-[#BFDBFE] text-center relative overflow-hidden shadow-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative z-10 max-w-xl mx-auto space-y-3">
            <h4 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight">
              Have a vision in mind? Let&apos;s build the technology behind it.
            </h4>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white font-black text-xs sm:text-sm hover:shadow-[0_10px_25px_rgba(37,99,235,0.25)] hover:scale-[1.02] transition-all duration-300"
            >
              Build Your Solution
              <span className="text-base">→</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

