"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CaseStudyNEETPlatform() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-20 sm:pt-28 pb-16 sm:pb-24 px-3 sm:px-8 lg:px-16 font-sans selection:bg-[#2563EB] selection:text-white">

        <article className="max-w-[1440px] mx-auto bg-white border border-slate-200/90 shadow-[0_4px_30px_rgba(15,23,42,0.03)] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">

          {/* ── Top Document Header Bar ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 sm:mb-8 border-b border-slate-200 text-xs sm:text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/work" className="hover:text-[#2563EB] transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-[#0F172A] font-bold truncate max-w-[200px] sm:max-w-none">NEET SaaS Platform</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider shadow-2xs self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              OFFICIAL TECHNICAL WHITEPAPER &bull; CASE STUDY REPORT
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              PROJECT TITLE & METADATA — OVERHAULED EXECUTIVE HERO
          ══════════════════════════════════════════════════════════ */}
          <header className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Multi-Tenant EdTech SaaS &bull; NEET Coaching &amp; Higher Education Core Platform (CMP)
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight text-[#0F172A] leading-[1.12] mb-6">
              NEET SaaS Platform — <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#0D9488]">Education Core Engine</span>
            </h1>

            <div className="p-5 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 mb-8 space-y-3">
              <p className="text-sm sm:text-lg md:text-xl font-medium leading-relaxed text-slate-700 text-left sm:text-justify">
                NEET SaaS Platform is an <strong className="font-extrabold text-[#2563EB]">enterprise multi-tenant Education Core Platform (CMP)</strong> purpose-built for NEET coaching institutes, academy chains, and higher education test prep centers. Powered by <strong className="font-extrabold text-slate-900">LiveKit real-time live classrooms</strong>, <strong className="font-extrabold text-[#2563EB]">Cloudflare Stream DRM pre-recorded video security</strong>, and a <strong className="font-extrabold text-slate-900">Moodle-style modular course builder</strong>, it unifies administrative operations, multi-batch scheduling, OMR &amp; MCQ mock test evaluation queues, fee installment ledgers, and real-time student analytics into a single multi-role workspace — backed by <strong className="font-extrabold text-[#2563EB]">strict Row-Level Security (RLS) tenant isolation</strong>.
              </p>
            </div>

            {/* Document Metadata Grid — Rich Executive Micro-Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl sm:rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-1">
                <div className="font-extrabold text-[#2563EB] uppercase tracking-wider text-[9px] sm:text-xs">Live Streaming</div>
                <div className="font-black text-[#0F172A] text-xs sm:text-sm">LiveKit Real-Time WebRTC</div>
                <div className="text-[10px] text-slate-500 font-medium">&lt;200ms Latency Live Classes</div>
              </div>
              <div className="p-4 rounded-xl sm:rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
                <div className="font-extrabold text-[#0284C7] uppercase tracking-wider text-[9px] sm:text-xs">Recorded Lectures</div>
                <div className="font-black text-[#0F172A] text-xs sm:text-sm">Cloudflare Stream DRM</div>
                <div className="text-[10px] text-slate-500 font-medium">Dynamic Student Watermark DRM</div>
              </div>
              <div className="p-4 rounded-xl sm:rounded-2xl bg-purple-50 border border-purple-200 space-y-1">
                <div className="font-extrabold text-purple-700 uppercase tracking-wider text-[9px] sm:text-xs">Course Architecture</div>
                <div className="font-black text-[#0F172A] text-xs sm:text-sm">Moodle-Style Builder</div>
                <div className="text-[10px] text-slate-500 font-medium">Modules &bull; Chapters &bull; Lessons</div>
              </div>
              <div className="p-4 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                <div className="font-extrabold text-emerald-700 uppercase tracking-wider text-[9px] sm:text-xs">Deployment</div>
                <div className="font-black text-emerald-700 flex items-center gap-1.5 text-xs sm:text-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Live Production System
                </div>
                <div className="text-[10px] text-slate-500 font-medium">Vercel + Railway Deploy</div>
              </div>
            </div>
          </header>

          {/* ── Hero Visual / Interactive Browser Dashboard Mockup ── */}
          <div className="mb-12 sm:mb-16 relative">
            <div className="w-full rounded-2xl overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-2xs relative p-4 sm:p-6 text-slate-800 flex flex-col justify-between gap-5">
              
              {/* Mockup Browser Window Control Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 text-xs font-mono gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  <div className="ml-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-mono flex items-center gap-2 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>https://app.neet-platform.com</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono uppercase bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] px-3 py-1 rounded-md font-bold self-start sm:self-auto flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                  LIVEKIT &amp; CLOUDFLARE DRM VIDEO VAULT ACTIVE
                </div>
              </div>

              {/* 4 Portal Cards Mockup Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-sans">
                
                {/* Platform Admin Mock Card */}
                <div className="p-4 bg-white rounded-xl border border-[#BFDBFE] space-y-2 hover:border-[#2563EB] transition-colors shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#2563EB] text-[10px] font-black uppercase tracking-wider bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE]">PORTAL 01</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">Platform Admin HQ</div>
                  <div className="text-slate-500 text-[11px] leading-snug">Global Super Admin tenant onboarding &amp; license control.</div>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9px] font-mono text-slate-600">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Tenants List</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Sub Tiers</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Cloudflare DRM</span>
                  </div>
                </div>

                {/* Tenant Admin Mock Card */}
                <div className="p-4 bg-white rounded-xl border border-sky-200 space-y-2 hover:border-sky-400 transition-colors shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0284C7] text-[10px] font-black uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded border border-sky-200">PORTAL 02</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">Institute Operations HQ</div>
                  <div className="text-slate-500 text-[11px] leading-snug">Institute Admin for student admissions &amp; batches.</div>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9px] font-mono text-slate-600">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Batches</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Fee Ledger</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Course Builder</span>
                  </div>
                </div>

                {/* Tutor Portal Mock Card */}
                <div className="p-4 bg-white rounded-xl border border-purple-200 space-y-2 hover:border-purple-400 transition-colors shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-700 text-[10px] font-black uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded border border-purple-200">PORTAL 03</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">Tutor Faculty Hub</div>
                  <div className="text-slate-500 text-[11px] leading-snug">Faculty studio for LiveKit classes &amp; Moodle course builder.</div>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9px] font-mono text-slate-600">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">LiveKit Class</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Cloudflare Video</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">OMR Queue</span>
                  </div>
                </div>

                {/* Student Portal Mock Card */}
                <div className="p-4 bg-white rounded-xl border border-emerald-200 space-y-2 hover:border-emerald-400 transition-colors shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700 text-[10px] font-black uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">PORTAL 04</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">Learner &amp; Parent Hub</div>
                  <div className="text-slate-500 text-[11px] leading-snug">LiveKit live streams &amp; DRM pre-recorded video vault.</div>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9px] font-mono text-slate-600">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Join LiveKit</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">DRM Recorded</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Mock Exam</span>
                  </div>
                </div>

              </div>

              {/* Bottom Visual Subtitle */}
              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-slate-500 font-mono gap-1">
                <span>[ CENTRAL ARCHITECTURE TOPOLOGY &bull; LIVEKIT + CLOUDFLARE DRM + MOODLE BUILDER ]</span>
                <span className="text-[#2563EB] font-bold">Figure 1.0 — Four Role-Based Authenticated Portals</span>
              </div>
            </div>
          </div>

          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* ══════════════════════════════════════════════════════════
              01 — PROJECT OVERVIEW — REDESIGNED EXECUTIVE SPLIT LAYOUT
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="overview">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">PROJECT OVERVIEW</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full">
              
              {/* Left Column (2/3) — Deep Narrative with Callout Box */}
              <div className="lg:col-span-2 space-y-5 text-slate-700 font-medium text-sm sm:text-base leading-relaxed text-left sm:text-justify w-full">
                <p>
                  The <strong className="font-extrabold text-[#2563EB]">NEET SaaS Platform (Education Management Core Platform — CMP)</strong> is designed to transition NEET coaching centers and test prep academies away from disjointed software stacks — such as combinations of WhatsApp groups, spreadsheets, physical receipt books, manual OMR optical scanners, and standalone video tools — into a <strong className="font-extrabold text-slate-900">single unified enterprise workspace</strong>.
                </p>

                {/* Highlight Executive Callout Box */}
                <div className="p-5 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-slate-800 space-y-2 my-4 shadow-2xs">
                  <div className="text-xs font-black uppercase tracking-wider text-[#2563EB] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    Configuration-Driven Domain Philosophy
                  </div>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed text-slate-700">
                    Golden Architectural Rule: Business-specific behaviors live in tenant configuration, NOT hardcoded database schemas. NEET&apos;s +4/-1 marking scheme, configurable total marks criteria, OMR evaluation parameters, and subject splits (Physics, Chemistry, Botany, Zoology) are stored as tenant settings — making the system extensible to JEE, UPSC, TNPSC, and Banking exams out of the box.
                  </p>
                </div>

                <p>
                  Built specifically to handle high-concurrency demands during live faculty broadcasts and national mock test releases, the platform incorporates <strong className="font-extrabold text-[#2563EB]">LiveKit for real-time live classrooms</strong>, <strong className="font-extrabold text-slate-900">Cloudflare Stream DRM for encrypted pre-recorded video lectures</strong>, and a <strong className="font-extrabold text-[#2563EB]">Moodle-style modular course builder</strong> allowing faculty to assemble multi-tier courses with modules, lessons, DPP PDF downloads, and embedded practice quizzes.
                </p>
              </div>

              {/* Right Column (1/3) — High Impact Core Architecture Metrics Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#EFF6FF]/90 via-white to-[#DBEAFE]/40 border border-[#BFDBFE] shadow-md space-y-4 w-full">
                <div className="flex items-center justify-between border-b border-[#BFDBFE] pb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#2563EB]">KEY METRICS &bull; CMP PLATFORM</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-600 font-semibold">Live Streaming Engine</span>
                    <span className="font-extrabold text-[#2563EB]">LiveKit WebRTC SFU</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm border-t border-slate-100 pt-2">
                    <span className="text-slate-600 font-semibold">Video Protection</span>
                    <span className="font-extrabold text-[#0284C7]">Cloudflare Stream DRM</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm border-t border-slate-100 pt-2">
                    <span className="text-slate-600 font-semibold">Course Authoring</span>
                    <span className="font-extrabold text-purple-700">Moodle-Style Builder</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm border-t border-slate-100 pt-2">
                    <span className="text-slate-600 font-semibold">Mock Exam Marks</span>
                    <span className="font-extrabold text-emerald-700">NTA Exam Format</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm border-t border-slate-100 pt-2">
                    <span className="text-slate-600 font-semibold">API Endpoints</span>
                    <span className="font-extrabold text-slate-900">362+ NestJS Routes</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#BFDBFE] text-[11px] font-bold text-[#2563EB] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Enterprise SaaS Architecture Verified</span>
                </div>
              </div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              02 — SPECIAL SECTION: LIVEKIT LIVE CLASSROOMS, CLOUDFLARE DRM & MOODLE COURSE BUILDER
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE]/60 border border-[#BFDBFE] shadow-md relative overflow-hidden" id="video-engine">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#2563EB] px-3 py-1 rounded-full shadow-2xs">CORE MEDIA &amp; ACADEMIC ENGINE</span>
              <span className="text-xs font-extrabold text-[#2563EB] bg-white px-3 py-1 rounded-full border border-[#BFDBFE]">FEATURE HIGHLIGHT</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-4 leading-snug">
              LiveKit Real-Time Classes, Cloudflare Stream DRM &amp; Moodle Course Builder
            </h2>

            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-8 max-w-4xl">
              The NEET platform is engineered around three interconnected pillar engines that give students an uninterrupted, secure learning experience while empowering tutors with complete curriculum authoring control.
            </p>

            {/* 3 Pillar Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* PILLAR 1: LiveKit Real-Time Engine */}
              <div className="p-6 rounded-2xl bg-white border border-[#BFDBFE] shadow-2xs space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-[#BFDBFE]">
                      PILLAR 01
                    </span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      &lt;200ms Latency
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#0F172A] mb-2">LiveKit Real-Time Classrooms</h3>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify mb-4">
                    Students attend live interactive faculty lectures via our integrated <strong className="font-extrabold text-[#2563EB]">LiveKit WebRTC SFU engine</strong>. Designed for high student capacity without buffering or quality drop.
                  </p>

                  <ul className="space-y-2 text-xs font-semibold text-slate-700 border-t border-slate-100 pt-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">✓</span>
                      <span>Real-Time Video, Audio &amp; Screen Sharing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">✓</span>
                      <span>Interactive Digital Whiteboard &amp; Annotations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">✓</span>
                      <span>Student Hand-Raising &amp; Audio Moderation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">✓</span>
                      <span>Automated Join/Leave Attendance Tracking</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-[#2563EB]">
                  Powered by LiveKit WebRTC Core
                </div>
              </div>

              {/* PILLAR 2: Cloudflare Stream DRM Security */}
              <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-2xs space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                      PILLAR 02
                    </span>
                    <span className="text-xs font-bold text-[#0284C7]">DRM Protected</span>
                  </div>

                  <h3 className="text-lg font-black text-[#0F172A] mb-2">Cloudflare Stream Pre-Recorded DRM Vault</h3>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify mb-4">
                    All pre-recorded video lectures are hosted on <strong className="font-extrabold text-[#0284C7]">Cloudflare Stream with DRM encryption</strong>. Students can watch missed lectures anytime with absolute piracy protection.
                  </p>

                  <ul className="space-y-2 text-xs font-semibold text-slate-700 border-t border-slate-100 pt-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0284C7] font-bold">✓</span>
                      <span>Dynamic Student Watermark Overlay (Anti-Piracy)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0284C7] font-bold">✓</span>
                      <span>Signed JWT HLS Tokens (Prevents Video Downloads)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0284C7] font-bold">✓</span>
                      <span>Adaptive Bitrate Streaming (1080p to 360p)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0284C7] font-bold">✓</span>
                      <span>Playback Resume &amp; Completion Percentage Tracking</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-[#0284C7]">
                  Secured by Cloudflare Stream DRM
                </div>
              </div>

              {/* PILLAR 3: Moodle-Style Modular Course Builder */}
              <div className="p-6 rounded-2xl bg-white border border-purple-200 shadow-2xs space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                      PILLAR 03
                    </span>
                    <span className="text-xs font-bold text-purple-700">Moodle-Style</span>
                  </div>

                  <h3 className="text-lg font-black text-[#0F172A] mb-2">Modular Course Builder Engine</h3>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify mb-4">
                    Faculty members can build structured, multi-tier courses (like Moodle) with hierarchical modules, chapters, live schedules, pre-recorded videos, and DPP exercise worksheets.
                  </p>

                  <ul className="space-y-2 text-xs font-semibold text-slate-700 border-t border-slate-100 pt-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-700 font-bold">✓</span>
                      <span>Course &rarr; Module &rarr; Chapter &rarr; Lesson Hierarchy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-700 font-bold">✓</span>
                      <span>Attach LiveKit Live Sessions to Lessons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-700 font-bold">✓</span>
                      <span>Embed Cloudflare Stream Pre-Recorded Videos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-700 font-bold">✓</span>
                      <span>Attach DPP PDFs &amp; Lesson MCQ Quizzes</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-purple-700">
                  Extensible Curriculum Management
                </div>
              </div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              03 — SYSTEM ARCHITECTURE & 4 PORTALS DEEP DIVE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="portals">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">03</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">FOUR ROLE-BASED PORTALS</h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              
              {/* Portal 01 — Platform Admin HQ */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#BFDBFE]">PORTAL 01</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A]">Platform Admin HQ — Super Admin Operations</h3>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">LIVE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  The Super Admin workspace gives platform owners multi-tenant control: instant tenant provisioning, custom subdomain assignment, subscription tier management, Cloudflare Stream DRM API key configuration, and global platform revenue metrics.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "Tenant Provisioning Engine", desc: "One-click institute creation: auto-provisions tenant record, generates isolated database schema, maps primary admin credentials, and configures Cloudflare Stream video keys." },
                    { title: "Custom Subdomain Routing", desc: "Binds institute subdomains (e.g. allen.neet-platform.com) dynamically via Next.js middleware headers without requiring server restarts." },
                    { title: "Subscription Tier Controls", desc: "Configure license packages (Max Student Limits, Storage Allowances, LiveKit live class concurrency, Cloudflare DRM video bandwidth, and AI analytics)." },
                    { title: "Global Revenue & Usage Analytics", desc: "Real-time dashboard displaying total platform ARR/MRR, active student user counts across institutes, and storage consumption." },
                    { title: "Global Audit Logger", desc: "Immutable security audit stream logging every administrative action, data export request, and authentication event across all tenants." },
                    { title: "Feature Flag Management", desc: "Toggle experimental platform modules (such as AI Answer Solvers, Biometric Attendance, and Offline OMR Graders) per institute." },
                  ].map((item) => (
                    <div key={item.title} className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="text-xs font-extrabold text-[#2563EB]">{item.title}</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed text-left sm:text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portal 02 — Institute Operations HQ */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#0284C7] bg-sky-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-sky-200">PORTAL 02</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A]">Institute Operations HQ — Tenant Administrator</h3>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">LIVE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  The Institute Admin portal manages the complete academic and operational lifecycle for a coaching center: student enrollment rosters, batch assignments, fee installment plans, auto-generated PDF receipts, and faculty timetable scheduling.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "Student Roster & Admissions", desc: "Admit students, generate custom enrollment roll numbers, upload photo IDs, and assign students to specific NEET study batches." },
                    { title: "Batch Allocation & Timetables", desc: "Create parallel batches (e.g. NEET 2026 Morning Batch A, Repeater Evening Batch), assign classroom schedules, and map dedicated tutors to subjects." },
                    { title: "Fee Installments & PDF Receipts", desc: "Define flexible fee structures (Upfront vs 3-Installment plans, scholarships, discounts), record offline/online payments, and generate auto-styled PDF receipts." },
                    { title: "Mock Test Scheduler", desc: "Schedule institute-wide NEET mock tests, select syllabus topics, upload question papers/OMR answer keys, and set auto-evaluation cutoff times." },
                    { title: "Branch Operations Control", desc: "For multi-branch institutes: manage branch-wise student rosters, room allocations, branch admin sub-accounts, and comparative performance reports." },
                    { title: "Attendance & Leave Ledger", desc: "Monitor daily student and faculty attendance rates, track biometric/manual entry logs, and trigger instant automated SMS alerts to parents for absences." },
                  ].map((item) => (
                    <div key={item.title} className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="text-xs font-extrabold text-[#0284C7]">{item.title}</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed text-left sm:text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portal 03 — Tutor Portal */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-purple-700 bg-purple-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-purple-200">PORTAL 03</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A]">Tutor Portal — Faculty Workstation</h3>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">LIVE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  The Tutor Portal provides a specialized workspace for faculty members to manage daily teaching delivery: launch integrated LiveKit live video classes, upload pre-recorded Cloudflare DRM videos, build modular courses, upload DPP notes, and review OMR answer sheets.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "LiveKit Live Studio", desc: "One-click launch of secure LiveKit live video classes with screen sharing, interactive whiteboards, student mute controls, and auto-archived recordings." },
                    { title: "Moodle-Style Course Builder", desc: "Build multi-tier courses with modules, chapters, and lessons. Attach LiveKit live schedules, Cloudflare Stream pre-recorded videos, and DPP exercise sheets." },
                    { title: "Cloudflare DRM Video Vault Manager", desc: "Upload pre-recorded video lectures directly to Cloudflare Stream with dynamic student watermark protection and tokenized HLS playback links." },
                    { title: "OMR & Subjective Test Evaluator", desc: "Review scanned student OMR sheets, grade subjective test papers, override auto-graded question exceptions, and submit final marks to the institute ledger." },
                    { title: "Classroom Pulse Analytics", desc: "Real-time class performance metrics: average score per topic, question difficulty rating analysis, attendance trend graphs, and student engagement indicators." },
                    { title: "Doubt Resolution Queue", desc: "Student doubt ticketing portal: faculty can view submitted student question doubts, reply with text/image/audio explanations, and mark doubts resolved." },
                  ].map((item) => (
                    <div key={item.title} className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="text-xs font-extrabold text-purple-700">{item.title}</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed text-left sm:text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portal 04 — Student & Parent Portal */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-emerald-200">PORTAL 04</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A]">Student &amp; Parent Portal — Learner &amp; Guardian Hub</h3>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">LIVE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  The Student and Parent Portal gives learners access to LiveKit live streams, Cloudflare DRM pre-recorded videos, modular course trees, and an adaptive NTA Mock Exam Engine. Parents gain full visibility into academic progress and fee payment history.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "LiveKit Live Class Room", desc: "Join scheduled live video classes in real-time with ultra-low latency, live chat, and hand-raising capability." },
                    { title: "Cloudflare DRM Pre-Recorded Vault", desc: "Watch missed recorded lectures with dynamic student ID watermarking and adaptive resolution streaming on desktop and mobile." },
                    { title: "720-Mark NEET Mock Simulator", desc: "Full-length NEET mock exam simulator matching NTA exam format (180 questions, Physics/Chem/Bio splits, +4/-1 countdown timer, and instant scorecards)." },
                    { title: "Weak-Topic Diagnostic Engine", desc: "AI-driven topic analysis breaking down performance across Physics (Mechanics, Optics), Chemistry (Organic, Physical), Botany, and Zoology." },
                    { title: "Parent Guardian View", desc: "Transparent parent access: view child test rank history, overall attendance percentage, upcoming fee installment due dates, and fee receipt downloads." },
                    { title: "Fee Payment & Installment Ledger", desc: "View total course fee breakdown, payment installment timelines, paid receipts, and clear pending dues via integrated Razorpay online gateway." },
                  ].map((item) => (
                    <div key={item.title} className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="text-xs font-extrabold text-emerald-700">{item.title}</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed text-left sm:text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              04 — TENANCY & SECURITY ARCHITECTURE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="security">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">04</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">TENANCY &amp; SECURITY ARCHITECTURE</h2>
            </div>

            <p className="text-xs sm:text-base font-medium text-slate-600 leading-relaxed text-left sm:text-justify mb-5 sm:mb-6">
              The platform implements a <strong className="font-extrabold text-[#2563EB]">defense-in-depth security model</strong> designed for enterprise multi-tenancy. Every request is verified at three distinct layers before database execution:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE] inline-block">
                  LAYER 01 — AUTH
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Stateless JWT + Silent Cookie Refresh</h3>
                <p className="text-xs text-slate-600 leading-relaxed text-left sm:text-justify">
                  Short-lived access tokens (15-min lifetime) stored in client memory carry <strong className="font-extrabold text-[#2563EB]">institute_id, user_id, and role claims</strong>. Silent refreshes use HttpOnly, Secure, SameSite=Strict cookies with rotating refresh tokens and instant session revocation in Redis.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded border border-sky-200 inline-block">
                  LAYER 02 — MIDDLEWARE
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Prisma Tenant Injection</h3>
                <p className="text-xs text-slate-600 leading-relaxed text-left sm:text-justify">
                  Every NestJS backend request executes through a Prisma middleware wrapper that automatically binds <strong className="font-extrabold text-[#0284C7]">WHERE institute_id = ctx.instituteId</strong> to every SELECT, UPDATE, and DELETE query — preventing developer error from missing tenant clauses.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                  LAYER 03 — DATABASE RLS
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">PostgreSQL Row-Level Security</h3>
                <p className="text-xs text-slate-600 leading-relaxed text-left sm:text-justify">
                  At the database level, Supabase PostgreSQL enforces <strong className="font-extrabold text-emerald-700">Row-Level Security (RLS) policies</strong> on all core entity tables. Even if raw SQL were executed, the database kernel blocks access to rows belonging to other institute IDs.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              05 — ACADEMIC & ASSESSMENT ENGINE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="assessment">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">05</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">ACADEMIC &amp; ASSESSMENT ENGINE</h2>
            </div>

            <p className="text-xs sm:text-base font-medium text-slate-600 leading-relaxed text-left sm:text-justify mb-5 sm:mb-6">
              The curriculum database model separates <strong className="font-extrabold text-[#2563EB]">Course Structure</strong> from <strong className="font-extrabold text-slate-900">Batch Execution</strong>. Subjects, Chapters, and Topics are Course-scoped, allowing an institute to define their master NEET curriculum once and reuse it across 50+ parallel batch iterations without data duplication.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {[
                {
                  subject: "Physics (Class 11 & 12 NEET)",
                  topics: ["Mechanics (Kinematics, Laws of Motion, Work & Energy)", "Thermodynamics & Kinetic Theory", "Electrostatics & Current Electricity", "Optics (Ray & Wave Optics)", "Modern Physics & Semiconductors"],
                  color: "text-[#2563EB]",
                  bg: "bg-[#EFF6FF]",
                  border: "border-[#BFDBFE]"
                },
                {
                  subject: "Chemistry (Physical, Organic & Inorganic)",
                  topics: ["Physical Chemistry (Atomic Structure, Chemical Bonding, Equilibrium)", "Organic Chemistry (Hydrocarbons, Reaction Mechanisms, Biomolecules)", "Inorganic Chemistry (Periodic Table, Coordination Compounds, p-Block)"],
                  color: "text-[#0284C7]",
                  bg: "bg-sky-50",
                  border: "border-sky-200"
                },
                {
                  subject: "Botany (Plant Biology)",
                  topics: ["Cell Biology & Genetics (DNA, Cell Cycle, Inheritance)", "Plant Physiology (Photosynthesis, Respiration, Transport)", "Plant Reproduction & Diversity in Living World", "Ecology & Environment Systems"],
                  color: "text-emerald-700",
                  bg: "bg-emerald-50",
                  border: "border-emerald-200"
                },
                {
                  subject: "Zoology (Animal Biology & Human Physiology)",
                  topics: ["Human Physiology (Digestion, Circulation, Nervous System, Excretion)", "Human Reproduction & Reproductive Health", "Evolution & Animal Kingdom Classification", "Biotechnology & Its Applications"],
                  color: "text-purple-700",
                  bg: "bg-purple-50",
                  border: "border-purple-200"
                },
              ].map((sub) => (
                <div key={sub.subject} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border ${sub.bg} ${sub.color} ${sub.border}`}>
                      NEET MASTER CURRICULUM
                    </span>
                  </div>
                  <h3 className={`text-base sm:text-lg font-extrabold ${sub.color}`}>{sub.subject}</h3>
                  <ul className="space-y-1.5">
                    {sub.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-emerald-500 font-bold mt-0.5 shrink-0">✓</span>
                        <span className="leading-snug">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              06 — HOW IT WORKS — WORKFLOW
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="how-it-works">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">06</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">HOW IT WORKS — OPERATIONAL WORKFLOW</h2>
            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-4">
              <h3 className="font-extrabold text-[#2563EB] text-sm sm:text-base">End-to-End Coaching Institute Journey</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
                {[
                  { step: "01", title: "Tenant Onboarding", desc: "Super Admin registers institute, sets subdomains, and issues Tenant Admin account." },
                  { step: "02", title: "Academic & Course Builder", desc: "Institute Admin & Tutors build Moodle-style modular courses & attach LiveKit/DRM video links." },
                  { step: "03", title: "Student Admission", desc: "Admit students, generate roll numbers, set fee installment plans & PDF receipts." },
                  { step: "04", title: "Live & Pre-Recorded Classes", desc: "Tutor hosts LiveKit live class, uploads Cloudflare DRM pre-recorded videos & evaluates OMR tests." },
                  { step: "05", title: "Parent Analytics", desc: "Parents view real-time weak-topic analytics, mock test rankings, and fee ledger." },
                ].map((s) => (
                  <div key={s.step} className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE]">
                        STEP {s.step}
                      </span>
                    </div>
                    <div className="font-extrabold text-slate-900 text-xs sm:text-sm">{s.title}</div>
                    <p className="text-[11px] text-slate-500 leading-snug">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              07 — ARCHITECTURE & TECH STACK DEEP DIVE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="tech-stack">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">07</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">ARCHITECTURE &amp; TECH STACK DEEP DIVE</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
              {[
                { category: "Frontend Framework", techs: ["Next.js 15 (App Router)", "TypeScript Strict", "Tailwind CSS v4", "Framer Motion", "Shadcn UI"] },
                { category: "Backend Infrastructure", techs: ["NestJS Monorepo", "Prisma ORM (PostgreSQL)", "Redis Cache & Queue", "Supabase Database RLS", "Razorpay Payment Gateway"] },
                { category: "Video & Real-Time Engine", techs: ["LiveKit WebRTC SFU Engine", "Cloudflare Stream DRM", "Socket.io Events", "Signed JWT HLS Tokens"] },
                { category: "Academic & Course Tools", techs: ["Moodle-Style Course Builder", "PDF Generator Engine", "NTA Format OMR Grader", "Chart.js Analytics"] },
              ].map((stack) => (
                <div key={stack.category} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                  <div className="text-xs font-black uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded border border-[#BFDBFE] inline-block">
                    {stack.category}
                  </div>
                  <ul className="space-y-1.5 text-xs font-semibold text-slate-700">
                    {stack.techs.map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* NestJS Monorepo Architecture Box */}
            <div className="p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  NestJS Monorepo Architecture — 8 Decoupled Modules
                </h3>
                <span className="text-[10px] font-mono uppercase bg-[#EFF6FF] text-[#2563EB] px-2.5 py-1 rounded border border-[#BFDBFE] font-bold">
                  MICRO-SERVICES ARCHITECTURE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                The NestJS backend application is organized into 8 isolated domain modules sharing a core database kernel via Prisma ORM:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono font-bold text-slate-700">
                {["Auth & Identity", "Tenant Operations", "Academic Engine", "Assessment & OMR", "Fee & PDF Receipts", "LiveKit Gateway", "Cloudflare DRM Stream", "Audit Logger"].map(r => (
                  <div key={r} className="p-3 rounded-lg bg-white border border-slate-200 text-center shadow-2xs flex items-center justify-center">
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              08 — VERIFICATION & SYSTEM IMPACT REPORT
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="impact">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">08</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">SYSTEM IMPACT &amp; VERIFICATION</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="text-3xl sm:text-4xl font-black text-[#2563EB]">100%</div>
                <div className="text-xs font-black uppercase text-slate-900 tracking-wider">Tenant RLS Isolation</div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Verified across 362+ API routes: zero cross-tenant data leakage detected under simulated penetration testing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="text-3xl sm:text-4xl font-black text-[#0284C7]">&lt;200ms</div>
                <div className="text-xs font-black uppercase text-slate-900 tracking-wider">LiveKit Stream Latency</div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Ultra-low latency live classroom delivery during high-concurrency peak institute broadcast hours.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="text-3xl sm:text-4xl font-black text-emerald-700">0%</div>
                <div className="text-xs font-black uppercase text-slate-900 tracking-wider">DRM Video Piracy Rate</div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Cloudflare Stream tokenized HLS + dynamic student ID watermark preventing screen recording leakage.
                </p>
              </div>
            </div>

            {/* Testimonial Quote Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#EFF6FF] via-white to-[#DBEAFE]/40 border border-[#BFDBFE] shadow-sm relative overflow-hidden">
              <div className="text-xs font-black uppercase tracking-widest text-[#2563EB] mb-3">
                CLIENT TESTIMONIAL &bull; COACHING ACADEMY DIRECTOR
              </div>
              <blockquote className="text-sm sm:text-base lg:text-lg font-medium text-slate-700 italic leading-relaxed mb-4">
                &ldquo;The NEET SaaS platform gave our coaching academy a single enterprise OS. Hosting LiveKit live classes, streaming pre-recorded Cloudflare DRM videos, creating Moodle-style modular courses, tracking fee installments, and evaluating mock test papers used to take 5 separate software subscriptions. Now everything runs seamlessly under one login.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-black text-sm shadow-md">
                  AD
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">Academic Director</div>
                  <div className="text-xs text-slate-500">NEET &amp; JEE Test Prep Institute Network</div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              DOCUMENT FOOTER / NAVIGATION
          ══════════════════════════════════════════════════════════ */}
          <footer className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-bold text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Agaran Engineering &bull; All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/work" className="hover:text-[#2563EB] transition-colors">&larr; Back to Case Studies</Link>
              <Link href="/work/ai-learning-portal" className="hover:text-[#2563EB] transition-colors">Next Case Study: ZHI Portal &rarr;</Link>
            </div>
          </footer>

        </article>

      </main>

      <Footer />
    </>
  );
}
