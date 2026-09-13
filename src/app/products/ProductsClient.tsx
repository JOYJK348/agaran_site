"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
   Scroll-reveal animation wrapper
ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */
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
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProductsClient() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    if (id === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAFCFF] text-[#0F172A] pt-20 sm:pt-28 pb-20 sm:pb-28 px-3 sm:px-6 lg:px-12 font-sans selection:bg-[#2563EB] selection:text-white relative overflow-hidden">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-100/30 via-slate-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="relative max-w-[1500px] mx-auto w-full space-y-12 sm:space-y-16">
          
          {/* ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ
              HEADER SECTION — CLEAN CREATIVE SHOWCASE HERO
          ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ */}
          <Reveal>
            <header className="text-center w-full max-w-4xl mx-auto mb-8 sm:mb-12 px-2">
              <div className="flex justify-center mb-4 sm:mb-5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-black uppercase tracking-wider text-[#2563EB] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                  <span>AGARAN PRODUCTS &bull; OWN IP PLATFORMS</span>
                </div>
              </div>

              <h1 className="text-center text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black leading-[1.08] tracking-[-0.035em] text-[#0F172A] mb-4 sm:mb-5">
                Platforms We&apos;re{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Engineering.
                </span>
              </h1>

              <p className="text-center text-xs sm:text-base md:text-lg font-medium leading-relaxed text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-8">
                We don&apos;t just build client solutions — we design and develop proprietary SaaS platforms to automate complex workflows across education, communication, and business operations.
              </p>

              {/* Quick Jump Interactive Navigation Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-2xl bg-slate-200/50 backdrop-blur-md max-w-fit mx-auto border border-slate-300/60 shadow-xs">
                <button
                  onClick={() => scrollToSection("all")}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 ${
                    activeTab === "all"
                      ? "bg-[#2563EB] text-white shadow-md scale-105"
                      : "text-slate-700 hover:text-[#2563EB] hover:bg-white/60"
                  }`}
                >
                  All Products (3)
                </button>
                <button
                  onClick={() => scrollToSection("ai-education")}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 ${
                    activeTab === "ai-education"
                      ? "bg-[#2563EB] text-white shadow-md scale-105"
                      : "text-slate-700 hover:text-[#2563EB] hover:bg-white/60"
                  }`}
                >
                  01 &bull; AI Education
                </button>
                <button
                  onClick={() => scrollToSection("whatsapp-automation")}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 ${
                    activeTab === "whatsapp-automation"
                      ? "bg-[#2563EB] text-white shadow-md scale-105"
                      : "text-slate-700 hover:text-[#2563EB] hover:bg-white/60"
                  }`}
                >
                  02 &bull; WhatsApp AI
                </button>
                <button
                  onClick={() => scrollToSection("ai-agent-platform")}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 ${
                    activeTab === "ai-agent-platform"
                      ? "bg-[#2563EB] text-white shadow-md scale-105"
                      : "text-slate-700 hover:text-[#2563EB] hover:bg-white/60"
                  }`}
                >
                  03 &bull; AI Agents
                </button>
              </div>
            </header>
          </Reveal>

          {/* ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ
              CREATIVE VERTICAL ECOSYSTEM TIMELINE & FLOATING SECTIONS
              (Clean Borderless Open Layout — No Side Accent Bars)
          ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ */}
          <div className="relative">
            {/* Clean Single-Tone Vertical Timeline Ribbon */}
            <div className="absolute top-8 bottom-8 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#2563EB]/30 via-[#2563EB]/50 to-[#2563EB]/30 opacity-40 pointer-events-none hidden sm:block" />

            <div className="space-y-16 sm:space-y-24">
              
              {/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
                  PRODUCT 01 — AI EDUCATION AUTOMATION PLATFORM
              ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */}
              <Reveal delay={0.05}>
                <section className="scroll-mt-28 relative group" id="ai-education">
                  
                  {/* Watermark Giant Number Backdrop */}
                  <div className="absolute -top-10 left-0 md:left-8 text-[120px] sm:text-[180px] font-black text-[#2563EB]/[0.05] select-none pointer-events-none font-mono leading-none z-0">
                    01
                  </div>

                  {/* Floating Content Block — Clean Borderless Design */}
                  <div className="relative z-10 p-5 sm:p-8 lg:p-10 rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_45px_rgba(37,99,235,0.1)] hover:border-[#BFDBFE] transition-all duration-300">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Narrative Column (7 Cols) */}
                      <div className="lg:col-span-7 space-y-4">
                        
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                            PRODUCT 01 &bull; EDTECH &amp; LMS
                          </span>
                          <span className="text-[11px] font-extrabold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            In Development
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
                          AI Education Automation Platform
                        </h2>

                        <div className="text-sm sm:text-base font-extrabold text-[#2563EB] flex items-center gap-2">
                          <span className="w-2 h-0.5 bg-[#2563EB]" />
                          <span>A Smarter Way to Run Educational Institutions.</span>
                        </div>

                        <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed text-left sm:text-justify">
                          An intelligent, multi-tenant education platform bringing student lead capture, online admissions, live LMS, digital/printed exams, attendance, parent WhatsApp updates, and a 24/7 AI Tutor into one seamless operational engine.
                        </p>

                        {/* Feature Highlights Grid */}
                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-black uppercase tracking-wider text-slate-400">Key Platform Highlights:</div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#2563EB] transition-all">
                              <div className="text-xs font-black text-[#2563EB]">Live LMS &amp; Video</div>
                              <div className="text-[11px] font-semibold text-slate-500 mt-0.5">LiveKit + Cloudflare DRM</div>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#2563EB] transition-all">
                              <div className="text-xs font-black text-[#0F172A]">Digital &amp; OMR Exams</div>
                              <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Online MCQ + Printed papers</div>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#2563EB] transition-all">
                              <div className="text-xs font-black text-[#2563EB]">24/7 AI Doubt Tutor</div>
                              <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Instant step-by-step solver</div>
                            </div>
                          </div>
                        </div>

                        {/* Action CTA Link */}
                        <div className="pt-3">
                          <Link
                            href="/products/ai-education-platform"
                            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
                          >
                            <span>Explore Full Architecture &amp; Specs</span>
                            <span className="text-base">&rarr;</span>
                          </Link>
                        </div>

                      </div>

                      {/* Clean Visual Canvas Column (5 Cols) */}
                      <div className="lg:col-span-5">
                        <div className="relative rounded-2xl bg-[#0F172A] p-4 sm:p-5 text-white font-mono text-xs shadow-xl border border-slate-800 overflow-hidden space-y-4">
                          
                          {/* Clean Single-Tone Studio Header */}
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                              <span className="text-[11px] text-slate-300 font-extrabold font-sans">AGARAN LMS SYSTEM MOCKUP</span>
                            </div>
                            <span className="text-[9.5px] font-black uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                              IN DEV
                            </span>
                          </div>

                          {/* Architecture Visual Nodes */}
                          <div className="space-y-2.5 font-sans">
                            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                                <span className="font-extrabold text-white text-xs">Student Portal &amp; LMS</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">Live / DRM Video</span>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                                <span className="font-extrabold text-white text-xs">Parent WhatsApp Alerts</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">Auto Attendance</span>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                                <span className="font-extrabold text-white text-xs">AI Doubt Resolution</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">24/7 Academic AI</span>
                            </div>
                          </div>

                          {/* Footer Tag */}
                          <div className="p-2.5 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/30 text-blue-200 text-center font-mono text-[11px]">
                            ΓÜí Multi-Tenant Institutional Engine
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </section>
              </Reveal>

              {/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
                  PRODUCT 02 — WHATSAPP BUSINESS AUTOMATION PLATFORM
              ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */}
              <Reveal delay={0.08}>
                <section className="scroll-mt-28 relative group" id="whatsapp-automation">
                  
                  {/* Watermark Giant Number Backdrop */}
                  <div className="absolute -top-10 left-0 md:left-8 text-[120px] sm:text-[180px] font-black text-[#2563EB]/[0.05] select-none pointer-events-none font-mono leading-none z-0">
                    02
                  </div>

                  {/* Floating Content Block — Clean Borderless Design */}
                  <div className="relative z-10 p-5 sm:p-8 lg:p-10 rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_45px_rgba(37,99,235,0.1)] hover:border-[#BFDBFE] transition-all duration-300">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Narrative Column (7 Cols) */}
                      <div className="lg:col-span-7 space-y-4">
                        
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                            PRODUCT 02 &bull; WHATSAPP AI AUTOMATION
                          </span>
                          <span className="text-[11px] font-extrabold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            In Development
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
                          WhatsApp Business Automation Platform
                        </h2>

                        <div className="text-sm sm:text-base font-extrabold text-[#2563EB] flex items-center gap-2">
                          <span className="w-2 h-0.5 bg-[#2563EB]" />
                          <span>Turn WhatsApp Conversations into Automated Business Operations.</span>
                        </div>

                        <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed text-left sm:text-justify">
                          Automates customer communication from first enquiry to instant pricing quotes, catalog discovery, appointment bookings, and scheduled follow-ups using a customized AI WhatsApp assistant trained on your business data.
                        </p>

                        {/* Feature Highlights Grid */}
                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-black uppercase tracking-wider text-slate-400">Key Platform Highlights:</div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#2563EB] transition-all">
                              <div className="text-xs font-black text-[#0F172A]">Adaptable Workflows</div>
                              <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Salons, Gyms, Clinics, Retail</div>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#2563EB] transition-all">
                              <div className="text-xs font-black text-[#2563EB]">Live AI Assistant</div>
                              <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Responds using live catalog</div>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#2563EB] transition-all">
                              <div className="text-xs font-black text-[#2563EB]">Lead &amp; Quote Engine</div>
                              <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Instant automated follow-ups</div>
                            </div>
                          </div>
                        </div>

                        {/* Action CTA Link */}
                        <div className="pt-3">
                          <Link
                            href="/products/whatsapp-automation"
                            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
                          >
                            <span>Explore WhatsApp Automation Specs</span>
                            <span className="text-base">&rarr;</span>
                          </Link>
                        </div>

                      </div>

                      {/* Clean Visual Canvas Column (5 Cols) */}
                      <div className="lg:col-span-5">
                        <div className="relative rounded-2xl bg-[#0F172A] p-4 sm:p-5 text-white font-mono text-xs shadow-xl border border-slate-800 overflow-hidden space-y-3.5">
                          
                          {/* Clean Single-Tone Studio Header */}
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                              <span className="text-[11px] text-slate-300 font-extrabold font-sans">WHATSAPP AUTOMATION STUDIO</span>
                            </div>
                            <span className="text-[9.5px] font-black uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                              IN DEV
                            </span>
                          </div>

                          {/* Chat Messages */}
                          <div className="space-y-2.5 font-sans text-xs">
                            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 max-w-[90%] shadow-2xs">
                              <span className="text-[9.5px] font-extrabold text-[#2563EB] block mb-0.5 uppercase tracking-wider">Customer Enquiry</span>
                              <span>&ldquo;Hi, what are your pricing packages and booking availability for tomorrow?&rdquo;</span>
                            </div>

                            <div className="p-3 rounded-2xl bg-[#2563EB] text-white font-medium max-w-[90%] ml-auto shadow-2xs">
                              <span className="text-[9.5px] font-extrabold text-blue-100 block mb-0.5 uppercase tracking-wider">Agaran AI Assistant</span>
                              <span>&ldquo;Here is our instant pricing catalog PDF. Tap below to select your slot directly!&rdquo;</span>
                            </div>
                          </div>

                          {/* Action Footer */}
                          <div className="p-2.5 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/30 text-blue-200 text-center font-mono text-[11px]">
                            ≡ƒÆ¼ Lead Captured &bull; Invoice Generated &bull; CRM Updated
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </section>
              </Reveal>

              {/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
                  PRODUCT 03 — AUTONOMOUS AI AGENT PLATFORM
              ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */}
              <Reveal delay={0.1}>
                <section className="scroll-mt-28 relative group" id="ai-agent-platform">
                  
                  {/* Watermark Giant Number Backdrop */}
                  <div className="absolute -top-10 left-0 md:left-8 text-[120px] sm:text-[180px] font-black text-[#2563EB]/[0.05] select-none pointer-events-none font-mono leading-none z-0">
                    03
                  </div>

                  {/* Floating Content Block — Clean Borderless Design */}
                  <div className="relative z-10 p-5 sm:p-8 lg:p-10 rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_45px_rgba(37,99,235,0.1)] hover:border-[#BFDBFE] transition-all duration-300">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Narrative Column (7 Cols) */}
                      <div className="lg:col-span-7 space-y-4">
                        
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                            PRODUCT 03 &bull; AI AGENTS &amp; WORKFORCE
                          </span>
                          <span className="text-[11px] font-extrabold text-[#1D4ED8] bg-[#DBEAFE] px-3 py-1 rounded-full border border-[#BFDBFE] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                            Exploring Concept
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
                          Autonomous AI Agent Platform
                        </h2>

                        <div className="text-sm sm:text-base font-extrabold text-[#2563EB] flex items-center gap-2">
                          <span className="w-2 h-0.5 bg-[#2563EB]" />
                          <span>A Specialised Digital Workforce Working Alongside Your Team.</span>
                        </div>

                        <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed text-left sm:text-justify">
                          Deploy a team of 8 specialised AI agents (Sales, Support, Knowledge, Ops, Finance, Strategy) that handle routine business responsibilities and inter-agent collaboration under human supervision.
                        </p>

                        {/* Feature Highlights Grid */}
                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-black uppercase tracking-wider text-slate-400">Key Platform Highlights:</div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#2563EB] transition-all">
                              <div className="text-xs font-black text-[#2563EB]">8 Specialised Agents</div>
                              <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Sales, Ops, Finance &amp; SOPs</div>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#2563EB] transition-all">
                              <div className="text-xs font-black text-[#0F172A]">Inter-Agent Sync</div>
                              <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Automated workflow chains</div>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#2563EB] transition-all">
                              <div className="text-xs font-black text-[#2563EB]">Human Control Layer</div>
                              <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Approval bounds for safety</div>
                            </div>
                          </div>
                        </div>

                        {/* Action CTA Link */}
                        <div className="pt-3">
                          <Link
                            href="/products/ai-agent-platform"
                            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
                          >
                            <span>Explore AI Agent Concept Specs</span>
                            <span className="text-base">&rarr;</span>
                          </Link>
                        </div>

                      </div>

                      {/* Clean Visual Canvas Column (5 Cols) */}
                      <div className="lg:col-span-5">
                        <div className="relative rounded-2xl bg-[#0F172A] p-4 sm:p-5 text-white font-mono text-xs shadow-xl border border-slate-800 overflow-hidden space-y-3.5">
                          
                          {/* Clean Single-Tone Studio Header */}
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                              <span className="text-[11px] text-slate-300 font-extrabold font-sans">AI DIGITAL WORKFORCE MATRIX</span>
                            </div>
                            <span className="text-[9.5px] font-black uppercase text-[#2563EB] bg-[#EFF6FF]/10 px-2 py-0.5 rounded border border-[#BFDBFE]/30">
                              CONCEPT
                            </span>
                          </div>

                          {/* Grid of 4 Active Agent Status Cards */}
                          <div className="grid grid-cols-2 gap-2 font-sans text-xs">
                            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                              <div className="font-extrabold text-[#2563EB] text-[11px]">Sales Agent</div>
                              <div className="text-[10px] text-slate-400">Qualifies incoming leads</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                              <div className="font-extrabold text-blue-300 text-[11px]">Knowledge Agent</div>
                              <div className="text-[10px] text-slate-400">Searches company SOPs</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                              <div className="font-extrabold text-blue-200 text-[11px]">Support Agent</div>
                              <div className="text-[10px] text-slate-400">Resolves client tickets</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                              <div className="font-extrabold text-slate-300 text-[11px]">Ops Agent</div>
                              <div className="text-[10px] text-slate-400">Monitors task delays</div>
                            </div>
                          </div>

                          {/* Inter-Agent Status */}
                          <div className="p-2.5 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/30 text-blue-200 text-center font-mono text-[11px]">
                            ≡ƒñû Multi-Agent Interoperability + Human Approval
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </section>
              </Reveal>

            </div>
          </div>

          {/* ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ
              FINAL CALL TO ACTION — HIGH-IMPACT GRADIENT CANVAS
          ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ */}
          <Reveal delay={0.12}>
            <section className="pt-6 sm:pt-10">
              <div className="relative p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white shadow-2xl text-center space-y-4 overflow-hidden">
                
                {/* Background Accent Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight relative z-10">
                  Want to Explore Platform Capabilities for Your Organization?
                </h2>
                
                <p className="text-xs sm:text-base text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed relative z-10">
                  Share your business or institutional workflow requirements with us. We&apos;ll explore how our technology platforms can accelerate your operations.
                </p>
                
                <div className="pt-3 relative z-10">
                  <Link
                    href="/contact#inquiry-form"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-[#2563EB] font-black text-xs sm:text-sm shadow-xl hover:bg-slate-50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  >
                    <span>Start a Technical Inquiry</span>
                    <span className="text-base">&rarr;</span>
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>

        </div>

      </main>

      <Footer />
    </>
  );
}
