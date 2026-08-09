"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";

const highlights = [
  {
    title: "Free System Architecture Audit",
    desc: "No generic pitches. We review your exact business workflows and map out a tailored solution architecture.",
    tag: "Step 01",
  },
  {
    title: "Working Prototype in 2 Weeks",
    desc: "Experience real working software early so you can test, refine, and validate before full-scale deployment.",
    tag: "Step 02",
  },
  {
    title: "Dedicated Engineering Partner",
    desc: "Long-term commitment with continuous performance monitoring, updates, and proactive technical support.",
    tag: "Step 03",
  },
];

const trustBadges = [
  "100% Confidential NDA",
  "Direct Engineer Access",
  "Transparent Fixed Pricing",
  "24-Hour Inquiry Response",
];

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });

  return (
    <section className="relative bg-white overflow-hidden py-10 sm:py-14 lg:py-18 border-t border-slate-100">
      {/* ── Soft Background Ambient Glows ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <Container as="div">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative z-10 max-w-6xl mx-auto rounded-[2.5rem] bg-[#2563EB] border border-blue-400/50 p-6 sm:p-10 lg:p-14 shadow-[0_25px_80px_rgba(37,99,235,0.30)] overflow-hidden text-white"
        >

          {/* ── Top Header Section ── */}
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            {/* Category Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/35 text-white text-xs font-black uppercase tracking-[0.15em] backdrop-blur-md shadow-xs mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-sky-300 animate-pulse" />
              Start Your Project
            </motion.div>

            {/* Main Title & Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black tracking-[-0.03em] leading-[1.14] text-white"
            >
              Have a problem worth solving?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-3 text-lg sm:text-2xl font-black text-blue-100 tracking-tight"
            >
              Let&apos;s build the right system for it.
            </motion.p>
          </div>

          {/* ── 3 High-Impact Highlight Cards (White Background) ── */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.45, delay: 0.3 + idx * 0.08, ease: "easeOut" }}
                className="group relative rounded-2xl bg-gradient-to-br from-white via-blue-50/40 to-white border border-white/90 p-5 sm:p-6 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.20)] overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-black text-[#1D4ED8] uppercase tracking-widest bg-blue-100/90 px-2.5 py-0.5 rounded-full border border-blue-200/90 shadow-2xs">
                      {item.tag}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] group-hover:scale-125 transition-transform duration-200" />
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#0F172A] leading-snug tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65] font-normal text-justify">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Action Buttons & CTA Section ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10"
          >
            {/* Primary CTA */}
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-white hover:bg-blue-50 text-[#1D4ED8] text-sm sm:text-base font-black tracking-wide shadow-[0_12px_35px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group/btn"
            >
              <span>Start a Conversation</span>
              <span className="group-hover/btn:translate-x-1.5 transition-transform duration-200 text-lg">→</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-blue-950/40 hover:bg-blue-950/60 text-white text-sm font-extrabold border border-white/30 backdrop-blur-md hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <span>Schedule a Strategy Call</span>
            </a>
          </motion.div>

          {/* ── Trust Metrics Footer Bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="relative z-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs font-extrabold text-blue-100"
          >
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
