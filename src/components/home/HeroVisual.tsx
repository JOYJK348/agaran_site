"use client";

import { motion } from "framer-motion";

/* ── Offering data (Exact User Order: 1. EdTech, 2. AI Agents, 3. SaaS, 4. Custom Software) ── */
const offerings = [
  {
    id: "education-tech",
    title: "Education Technology",
    desc: "Learning platforms, digital tools, and AI-powered education systems.",
    color: "#EA580C",
    gradient: "from-[#EA580C] to-[#C2410C]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: "ai-agents",
    title: "AI Agents & Business Automation",
    desc: "Intelligent agents that automate operations, workflows, and repetitive work.",
    color: "#059669",
    gradient: "from-[#059669] to-[#047857]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "saas",
    title: "SaaS Products",
    desc: "Cloud-based platforms designed for growth, scalability, and recurring value.",
    color: "#7C3AED",
    gradient: "from-[#7C3AED] to-[#6D28D9]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: "custom-software",
    title: "Custom Software & Mobile Apps",
    desc: "Scalable software & mobile applications built around your business workflows.",
    color: "#2563EB",
    gradient: "from-[#2563EB] to-[#1D4ED8]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto flex flex-col items-center justify-center select-none py-2 sm:py-4">
      {/* ── Ambient soft glow ── */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-[240px] h-[240px] rounded-full bg-[#2563EB]/4 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-[#7C3AED]/3 blur-[90px] pointer-events-none"
        animate={{ scale: [1, 0.9, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ── Central Hub + Connection Lines (SVG) ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 560 520"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connection lines from center to each card position */}
        {/* Top-left card (1st - EdTech) */}
        <motion.line
          x1="280" y1="260" x2="140" y2="105"
          stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.25"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        {/* Top-right card (2nd - AI Agents) */}
        <motion.line
          x1="280" y1="260" x2="420" y2="105"
          stroke="#059669" strokeWidth="1.5" strokeOpacity="0.25"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        {/* Bottom-left card (3rd - SaaS Products) */}
        <motion.line
          x1="280" y1="260" x2="140" y2="415"
          stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.25"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        {/* Bottom-right card (4th - Custom Software) */}
        <motion.line
          x1="280" y1="260" x2="420" y2="415"
          stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.25"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Animated pulse dots traveling along lines */}
        <motion.circle cx="280" cy="260" r="3.5" fill="#EA580C" fillOpacity="0.8"
          animate={{ cx: [280, 140], cy: [260, 105], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0, ease: "easeInOut" }}
        />
        <motion.circle cx="280" cy="260" r="3.5" fill="#059669" fillOpacity="0.8"
          animate={{ cx: [280, 420], cy: [260, 105], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
        />
        <motion.circle cx="280" cy="260" r="3.5" fill="#7C3AED" fillOpacity="0.8"
          animate={{ cx: [280, 140], cy: [260, 415], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1.6, ease: "easeInOut" }}
        />
        <motion.circle cx="280" cy="260" r="3.5" fill="#2563EB" fillOpacity="0.8"
          animate={{ cx: [280, 420], cy: [260, 415], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2.4, ease: "easeInOut" }}
        />

        {/* Center hub outer ring */}
        <motion.circle
          cx="280" cy="260" r="38"
          stroke="#2563EB" strokeWidth="2" strokeOpacity="0.15" fill="none"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.circle
          cx="280" cy="260" r="52"
          stroke="#2563EB" strokeWidth="1" strokeOpacity="0.08" fill="none" strokeDasharray="4 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "280px 260px" }}
        />
      </svg>

      {/* ── Central Nucleus Hub (Aligned dead-center inside the SVG round ring) ── */}
      <div className="absolute left-1/2 top-[calc(50%+10px)] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          className="w-[96px] sm:w-[115px] h-[64px] sm:h-[72px] flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        >
          <img
            src="/logo.png"
            alt="Agaran Logo"
            className="max-w-full max-h-full object-contain drop-shadow-none opacity-90"
          />
        </motion.div>
        <motion.p
          className="mt-0.5 text-[9px] sm:text-[11px] font-bold text-[#2563EB] tracking-wider uppercase opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          What We Build
        </motion.p>
      </div>

      {/* ── 4 Offering Cards in 2x2 Grid (Connected to center hub) ── */}
      <div className="relative z-10 w-full grid grid-cols-2 gap-x-16 sm:gap-x-20 gap-y-24 sm:gap-y-28 px-1 sm:px-2 py-8 sm:py-10">
        {offerings.map((o, idx) => (
          <motion.div
            key={o.id}
            className="relative flex flex-col items-center text-center group"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 * idx + 0.2, ease: "easeOut" }}
          >
            {/* Soft subtle glow behind icon on hover */}
            <div
              className="absolute -top-3 w-16 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
              style={{ backgroundColor: o.color }}
            />

            {/* Icon circle */}
            <div
              className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${o.gradient} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200`}
              style={{ boxShadow: `0 2px 8px ${o.color}15` }}
            >
              {o.icon}
            </div>

            {/* Title */}
            <h4 className="mt-3 text-[11px] sm:text-[13px] font-extrabold text-[#0F172A] leading-snug group-hover:text-[#2563EB] transition-colors duration-300">
              {o.title}
            </h4>

            {/* Description */}
            <p className="mt-1 text-[9px] sm:text-[11px] leading-relaxed text-[#64748B] max-w-[150px] sm:max-w-[180px]">
              {o.desc}
            </p>

            {/* Colored accent dot */}
            <motion.div
              className="mt-2.5 w-1 h-1 rounded-full"
              style={{ backgroundColor: o.color }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
