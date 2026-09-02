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
                NEET SaaS Platform is an <strong className="font-extrabold text-[#2563EB]">enterprise multi-tenant Education Core Platform (CMP)</strong> purpose-built for NEET coaching institutes, academy chains, and higher education test prep centers. Built with a <strong className="font-extrabold text-slate-900">configuration-driven architecture</strong>, it unifies administrative operations, multi-batch scheduling, Jitsi live classrooms, OMR &amp; MCQ mock test evaluation queues, fee installment ledgers, and real-time student analytics into a single multi-role workspace — backed by <strong className="font-extrabold text-[#2563EB]">strict Row-Level Security (RLS) tenant isolation</strong>.
              </p>
            </div>

            {/* Document Metadata Grid — Rich Executive Micro-Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl sm:rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-1">
                <div className="font-extrabold text-[#2563EB] uppercase tracking-wider text-[9px] sm:text-xs">Platform Name</div>
                <div className="font-black text-[#0F172A] text-xs sm:text-sm">NEET SaaS Platform (CMP)</div>
                <div className="text-[10px] text-slate-500 font-medium">Multi-Tenant Education Core</div>
              </div>
              <div className="p-4 rounded-xl sm:rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
                <div className="font-extrabold text-[#0284C7] uppercase tracking-wider text-[9px] sm:text-xs">Target Domain</div>
                <div className="font-black text-[#0F172A] text-xs sm:text-sm">NEET, JEE &amp; Test Prep</div>
                <div className="text-[10px] text-slate-500 font-medium">Coaching Institutes &amp; Academies</div>
              </div>
              <div className="p-4 rounded-xl sm:rounded-2xl bg-purple-50 border border-purple-200 space-y-1">
                <div className="font-extrabold text-purple-700 uppercase tracking-wider text-[9px] sm:text-xs">Portals Built</div>
                <div className="font-black text-[#0F172A] text-xs sm:text-sm">4 Role-Based Systems</div>
                <div className="text-[10px] text-slate-500 font-medium">Platform Admin, Tenant Admin, Tutor, Student</div>
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
                  NEET PLATFORM v1.0 — MULTI-TENANT SYSTEM ACTIVE
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
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">White-Label</span>
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
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">PDF Receipts</span>
                  </div>
                </div>

                {/* Tutor Portal Mock Card */}
                <div className="p-4 bg-white rounded-xl border border-purple-200 space-y-2 hover:border-purple-400 transition-colors shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-700 text-[10px] font-black uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded border border-purple-200">PORTAL 03</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">Tutor Faculty Hub</div>
                  <div className="text-slate-500 text-[11px] leading-snug">Faculty workspace for live classes &amp; OMR grading.</div>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9px] font-mono text-slate-600">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Jitsi Live</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">OMR Queue</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Materials</span>
                  </div>
                </div>

                {/* Student Portal Mock Card */}
                <div className="p-4 bg-white rounded-xl border border-emerald-200 space-y-2 hover:border-emerald-400 transition-colors shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700 text-[10px] font-black uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">PORTAL 04</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">Learner &amp; Parent Hub</div>
                  <div className="text-slate-500 text-[11px] leading-snug">Adaptive NEET mock tests &amp; weak-topic analytics.</div>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9px] font-mono text-slate-600">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">720 Marks Test</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Physics/Chem</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Rankings</span>
                  </div>
                </div>

              </div>

              {/* Bottom Visual Subtitle */}
              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-slate-500 font-mono gap-1">
                <span>[ CENTRAL ARCHITECTURE TOPOLOGY &bull; EDUCATION MANAGEMENT CORE PLATFORM ]</span>
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
                    Golden Architectural Rule: Business-specific behaviors live in tenant configuration, NOT hardcoded database schemas. NEET&apos;s +4/-1 marking scheme, 720 total marks, OMR evaluation parameters, and subject splits (Physics, Chemistry, Botany, Zoology) are stored as tenant settings — making the system extensible to JEE, UPSC, TNPSC, and Banking exams out of the box.
                  </p>
                </div>

                <p>
                  The system enforces <strong className="font-extrabold text-[#2563EB]">strict Row-Level Security (RLS) tenant isolation</strong> across all PostgreSQL tables, ensuring that data from competitor coaching institutes hosted on the platform never leaks. It combines four authenticated user portals, 362+ planned API contracts, and a central <strong className="font-extrabold text-slate-900">Shared Kernel service architecture</strong> into a cohesive, high-performance SaaS platform.
                </p>
                <p>
                  Agaran designed and engineered the complete system architecture: from <strong className="font-extrabold text-[#2563EB]">NestJS monorepo micro-services</strong>, Prisma ORM schema models, <strong className="font-extrabold text-slate-900">stateless JWT authentication with silent HttpOnly cookie refresh rotation</strong>, Jitsi WebRTC video classroom integration, and responsive Next.js frontend portals — delivered for live production deployment on Vercel and Railway.
                </p>
              </div>

              {/* Right Column (1/3) — Executive Snapshot & Key Pillars */}
              <div className="lg:col-span-1 p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-5 w-full">
                <div className="text-xs font-black uppercase tracking-wider text-[#0F172A] pb-3 border-b border-slate-200 flex items-center justify-between">
                  <span>EXECUTIVE SUMMARY</span>
                  <span className="text-[#2563EB] font-bold">NEET PLATFORM</span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                    <div className="font-extrabold text-[#2563EB]">4 Authenticated Portals</div>
                    <p className="text-slate-500 leading-snug">Super Admin HQ, Institute Admin HQ, Tutor Faculty Hub &amp; Learner Dashboard.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                    <div className="font-extrabold text-[#0284C7]">Multi-Tenant RLS Security</div>
                    <p className="text-slate-500 leading-snug">Supabase PostgreSQL Row-Level Security + Prisma tenant middleware isolation.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                    <div className="font-extrabold text-emerald-700">720-Mark Mock Evaluator</div>
                    <p className="text-slate-500 leading-snug">+4/-1 auto-evaluation engine with OMR paper grading queues &amp; weak-topic analytics.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                    <div className="font-extrabold text-purple-700">Shared Kernel Architecture</div>
                    <p className="text-slate-500 leading-snug">Centralized audit logger, event bus, notification queue, and storage manager.</p>
                  </div>
                </div>

                {/* Quick Metric Badges */}
                <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-center text-[10px] font-bold">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                    <div className="text-[#2563EB] text-xs font-black">362+ Endpoints</div>
                    <div>API Contract Register</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                    <div className="text-emerald-600 text-xs font-black">100% Isolated</div>
                    <div>Row-Level Security</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              02 — THE CHALLENGE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="challenge">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">02</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">THE CHALLENGE</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-2">
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                  <span>✕</span> Fragmented Software Chaos
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">Disjointed Operational Tools</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  NEET institutes relied on <strong className="font-extrabold text-rose-700">unconnected software tools</strong> — Google Sheets for attendance, physical paper receipts for fee collection, WhatsApp for class links, and separate desktop OMR software. This created <strong className="font-extrabold text-slate-900">data sync failures and heavy administrative overhead</strong>.
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                  <span>✕</span> Cross-Tenant Data Leaks
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">Multi-Tenancy Security Risks</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  Coaching institutes compete aggressively for student ranks. Hosting multiple institutes on a single cloud database created an unacceptable security risk: if tenant isolation was flawed, <strong className="font-extrabold text-amber-800">competitor institutes could access student rosters and question banks</strong> — requiring strict PostgreSQL RLS policies.
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-sky-50/60 border border-sky-200/80 space-y-2">
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
                  <span>✕</span> Rigid Monolithic Codebases
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">Hardcoded Exam Schemas</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  Legacy EdTech software hardcoded exam rules (e.g. 180 questions, +4/-1) directly into SQL schemas. When NTA updated NEET exam patterns or when institutes wanted to add JEE or State Board courses, <strong className="font-extrabold text-[#2563EB]">the entire system broke and required expensive code refactoring</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              03 — PORTAL ARCHITECTURE — THE FOUR USER SYSTEMS
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="portals">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">03</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">PORTAL ARCHITECTURE — FOUR USER SYSTEMS</h2>
            </div>

            <p className="text-xs sm:text-base font-medium text-slate-600 leading-relaxed text-left sm:text-justify mb-6 sm:mb-8">
              The platform coordinates operations across <strong className="font-extrabold text-[#2563EB]">four distinct authenticated user portals</strong> — each built for a specific persona with custom access controls, data boundaries, and operational tools:
            </p>

            <div className="space-y-4 sm:space-y-6">

              {/* Portal 01 — Platform Admin */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#BFDBFE]">PORTAL 01</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A]">Platform Admin — Super Admin Command Center</h3>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">LIVE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  The Platform Admin portal is the <strong className="font-extrabold text-[#2563EB]">global command center</strong> used by Agaran/Platform operators to onboard coaching institute tenants, provision database scopes, configure subscription tiers, manage white-label branding, and monitor cross-tenant system health.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "Tenant Onboarding Engine", desc: "Automated provisioning of new Institute Admin credentials, custom subdomains, initial branch setup, and database schema scoping." },
                    { title: "Subscription Tier Controls", desc: "Configure license packages (Max Student Limits, Storage Allowances, Feature Flags for Jitsi live classes, OMR grading, and AI analytics)." },
                    { title: "Branding Orchestration", desc: "Manage white-label institute assets — upload custom logos, primary brand colors, header banners, and localized institute domain names." },
                    { title: "Cross-Tenant System Analytics", desc: "Global telemetry dashboard: active tenant count, total students across all institutes, API request rates, database query latency, and storage usage." },
                    { title: "Global Master Data Config", desc: "Maintain platform-wide question master banks, standardized subject structures (Physics, Chemistry, Biology), and default marking templates." },
                    { title: "Audit & Security Logs", desc: "Real-time security log viewer tracking Super Admin actions, tenant creation events, authentication failures, and API key rotations." },
                  ].map((item) => (
                    <div key={item.title} className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="text-xs font-extrabold text-[#2563EB]">{item.title}</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed text-left sm:text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portal 02 — Tenant Admin */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#0284C7] bg-sky-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-sky-200">PORTAL 02</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A]">Tenant Admin — Institute Operations HQ</h3>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">LIVE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  The Tenant Admin portal is issued to the director or branch administrator of each coaching institute. It provides complete operational control over <strong className="font-extrabold text-[#0284C7]">student admissions, batch assignments, course master data, tutor allocations, fee collection ledgers, and PDF receipt generation</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "Student Admission & Roster", desc: "Full student lifecycle management — register new admissions, assign roll numbers, map parent contacts, and track active/archived enrollment states." },
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
                  The Tutor Portal provides a specialized workspace for faculty members to manage daily teaching delivery: launch integrated Jitsi live video classes, upload chapter notes and DPP (Daily Practice Problems), review OMR answer sheets, and track class-level concept mastery.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "Jitsi Live Classroom Engine", desc: "One-click launch of secure, web-based live video classes with screen sharing, interactive whiteboards, student mute controls, and auto-archived recordings." },
                    { title: "Study Materials & Homework", desc: "Upload PDF notes, DPP exercise sheets, NCERT exemplar solutions, and video lecture links tagged directly to Course &rarr; Subject &rarr; Chapter &rarr; Topic." },
                    { title: "OMR & Subjective Test Evaluator", desc: "Review scanned student OMR sheets, grade subjective test papers, override auto-graded question exceptions, and submit final marks to the institute ledger." },
                    { title: "Classroom Pulse Analytics", desc: "Real-time class performance metrics: average score per topic, question difficulty rating analysis, attendance trend graphs, and student engagement indicators." },
                    { title: "Faculty Timetable & Schedule", desc: "Personalized daily teaching schedule showing assigned batches, upcoming live sessions, office hours, and pending test evaluation tasks." },
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
                  The Student and Parent Portal gives learners an adaptive prep dashboard and gives parents full visibility into academic progress, fee payment history, attendance, and exam rankings. Parents with multiple enrolled children can switch profiles seamlessly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "720-Mark NEET Mock Simulator", desc: "Full-length NEET mock exam simulator matching NTA exam format (180 questions, Physics/Chem/Bio splits, +4/-1 countdown timer, and instant scorecards)." },
                    { title: "Weak-Topic Diagnostic Engine", desc: "AI-driven topic analysis breaking down performance across Physics (Mechanics, Optics), Chemistry (Organic, Physical), Botany, and Zoology." },
                    { title: "Recorded Video & Study Notes", desc: "On-demand streaming of missed live classes, chapter-wise PDF material downloads, and revision flashcards accessible 24/7." },
                    { title: "Parent Guardian View", desc: "Transparent parent access: view child test rank history, overall attendance percentage, upcoming fee installment due dates, and fee receipt downloads." },
                    { title: "Multi-Child Switcher", desc: "Parents with two or more children enrolled in the coaching institute can switch profiles with one click to view separate academic dashboards." },
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
                  { step: "02", title: "Academic & Batches", desc: "Institute Admin configures NEET courses, creates parallel batches, and maps faculty." },
                  { step: "03", title: "Student Admission", desc: "Admit students, generate roll numbers, set fee installment plans & PDF receipts." },
                  { step: "04", title: "Live Class & OMR", desc: "Tutor hosts Jitsi live class, uploads DPP notes, and evaluates OMR mock tests." },
                  { step: "05", title: "Parent Analytics", desc: "Parents view real-time weak-topic analytics, mock test rankings, and fee ledger." },
                ].map((s) => (
                  <div key={s.step} className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-black text-[#2563EB] uppercase tracking-wider">STEP {s.step}</div>
                      <div className="font-extrabold text-slate-900 text-sm">{s.title}</div>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              07 — SYSTEM ARCHITECTURE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="architecture">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">07</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">SYSTEM ARCHITECTURE</h2>
            </div>

            <div className="w-full rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-300 p-3.5 sm:p-6 text-[#0F172A] font-mono text-xs overflow-x-auto shadow-xs mb-4 sm:mb-6">
              <div className="text-slate-500 text-[10px] sm:text-[11px] border-b border-slate-200 pb-2 mb-3 font-bold flex items-center justify-between gap-2">
                <span>NEET SAAS PLATFORM ARCHITECTURE TOPOLOGY</span>
                <span className="text-[#2563EB] font-bold shrink-0">v1.0 PRODUCTION</span>
              </div>

              <div className="min-w-[600px] space-y-3">
                <div className="p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-center">
                  <div className="text-[10px] text-[#2563EB] font-black uppercase mb-1">CLIENT LAYER — NEXT.JS APP ROUTER (VERCEL)</div>
                  <div className="grid grid-cols-4 gap-2 text-[10px] sm:text-[11px]">
                    {["Platform Admin Portal", "Tenant Admin Portal", "Tutor Faculty Portal", "Student & Parent Hub"].map(p => (
                      <span key={p} className="bg-[#EFF6FF] px-2 py-1.5 rounded border border-[#BFDBFE] text-[#2563EB] font-bold truncate">{p}</span>
                    ))}
                  </div>
                </div>

                <div className="text-center text-slate-400 font-bold text-[11px]">&darr; Stateless JWT + Silent HttpOnly Cookie Auth &darr;</div>

                <div className="p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-center">
                  <div className="text-[10px] text-[#0284C7] font-black uppercase mb-1">NESTJS MONOREPO API SERVICES LAYER (RAILWAY)</div>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-[10px] text-slate-700">
                    {["Auth & Identity", "Tenant Operations", "Academic Engine", "Assessment & OMR", "Fee & PDF Receipts", "Jitsi Live Gateway", "Shared Kernel", "Audit Logger"].map(r => (
                      <div key={r} className="bg-[#F1F5F9] p-1.5 rounded border border-slate-200 font-bold truncate">{r}</div>
                    ))}
                  </div>
                </div>

                <div className="text-center text-slate-400 font-bold text-[11px]">&darr; Prisma Middleware Tenant Injection (institute_id) &darr;</div>

                <div className="p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-center">
                  <div className="text-[10px] text-emerald-600 font-black uppercase mb-1">PERSISTENCE &amp; CACHING LAYER</div>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[10px] text-slate-700">
                    {["Supabase PostgreSQL (RLS)", "Redis Cache & Session Store", "Cloud Storage (PDFs/OMR)"].map(l => (
                      <div key={l} className="bg-[#F1F5F9] p-1.5 rounded border border-slate-200 font-bold truncate">{l}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              08 — AGARAN'S ROLE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="role">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">08</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">AGARAN&apos;S ROLE</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 text-xs sm:text-sm font-medium">
              {[
                { title: "Full-Stack System Architecture", desc: "Designed the complete multi-tenant system architecture, Prisma database models, Shared Kernel module standards, and 362+ API contract registers across all domains." },
                { title: "NestJS Backend Monorepo & RLS", desc: "Engineered the NestJS API gateway, Prisma ORM tenant middleware, Supabase PostgreSQL Row-Level Security policies, and silent HttpOnly cookie auth workflow." },
                { title: "Next.js Frontend Portals", desc: "Built all four authenticated frontend portals (Platform Admin, Tenant Admin, Tutor, Student/Parent) with React Query state management, responsive Tailwind UI, and Framer Motion transitions." },
                { title: "Assessment & OMR Evaluation Engine", desc: "Designed the +4/-1 NEET mock test grading engine, question bank manager, OMR optical scan evaluation queue, and weak-topic performance diagnostic algorithm." },
                { title: "Fee Ledger & PDF Receipt System", desc: "Built the multi-installment payment schedule ledger, scholarship/discount engine, auto-generated styled PDF receipts, and Razorpay online checkout integration." },
                { title: "DevOps & Cloud Infrastructure", desc: "Configured Turborepo monorepo build pipelines, Docker containerized development environments, Vercel frontend deployments, and Railway backend container hosting." },
              ].map((item) => (
                <div key={item.title} className="p-3.5 sm:p-4 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1 sm:space-y-1.5">
                  <div className="font-extrabold text-[#2563EB] text-xs sm:text-sm">{item.title}</div>
                  <div className="text-slate-600 text-left sm:text-justify leading-relaxed text-xs sm:text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              09 — TECHNOLOGY
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="technology">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">09</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">TECHNOLOGY STACK</h2>
            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-xs">
                {[
                  { category: "Frontend", techs: ["Next.js 14 (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query (TanStack)"] },
                  { category: "Backend & API", techs: ["NestJS (Monorepo)", "Prisma ORM", "TypeScript", "JWT Auth", "Shared Kernel"] },
                  { category: "Database & Security", techs: ["Supabase PostgreSQL", "Row-Level Security (RLS)", "Redis Cache & Session", "HttpOnly Cookie Rotation"] },
                  { category: "Video & Real-Time", techs: ["Jitsi WebRTC Engine", "Cloudflare Stream", "Socket.io Events", "PDF Generator Engine"] },
                  { category: "Infrastructure", techs: ["Vercel (Frontend)", "Railway (NestJS API)", "Docker", "Turborepo", "GitHub Actions"] },
                  { category: "Testing & Audit", techs: ["Jest Unit Tests", "Supertest E2E", "ESLint & Prettier", "Shared Audit Logger"] },
                ].map((group) => (
                  <div key={group.category} className="p-3.5 sm:p-4 rounded-lg sm:rounded-xl bg-white border border-slate-200 space-y-1.5 sm:space-y-2">
                    <div className="text-[10px] font-black text-[#2563EB] uppercase tracking-wider">{group.category}</div>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {group.techs.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[#F8FAFC] border border-slate-200 text-slate-700 text-[10px] font-bold">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              10 — PROJECT DETAILS — EXECUTIVE MATRIX GRID
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="details">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">10</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">PROJECT DETAILS</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {[
                {
                  label: "Project Model",
                  title: "Multi-Tenant SaaS",
                  value: "B2B Institute Pack with Tiered Tenant Licensing",
                  tag: "B2B SaaS",
                  color: "text-[#2563EB]",
                  bg: "bg-[#EFF6FF]",
                  border: "border-[#BFDBFE]"
                },
                {
                  label: "Industry & Domain",
                  title: "Test Prep & Higher Ed",
                  value: "NEET Coaching, JEE & Competitive Exam Management",
                  tag: "EdTech Core",
                  color: "text-[#0284C7]",
                  bg: "bg-sky-50",
                  border: "border-sky-200"
                },
                {
                  label: "Target Audience",
                  title: "Coaching Institutes",
                  value: "NEET Academies, Tutors, Students & Parents",
                  tag: "Enterprise",
                  color: "text-amber-700",
                  bg: "bg-amber-50",
                  border: "border-amber-200"
                },
                {
                  label: "Portals Built",
                  title: "4 Scoped Portals",
                  value: "Platform Admin, Tenant Admin, Tutor & Student Hub",
                  tag: "4 Portals",
                  color: "text-purple-700",
                  bg: "bg-purple-50",
                  border: "border-purple-200"
                },
                {
                  label: "Architecture",
                  title: "Shared Kernel",
                  value: "Config-driven engine with zero hardcoded schema rules",
                  tag: "Config-Driven",
                  color: "text-indigo-700",
                  bg: "bg-indigo-50",
                  border: "border-indigo-200"
                },
                {
                  label: "Database Security",
                  title: "PostgreSQL RLS",
                  value: "Supabase RLS policies + Prisma tenant injection middleware",
                  tag: "100% Isolated",
                  color: "text-emerald-700",
                  bg: "bg-emerald-50",
                  border: "border-emerald-200"
                },
                {
                  label: "Deployment",
                  title: "Live Production",
                  value: "Vercel (Frontend) + Railway (NestJS API & Worker Services)",
                  tag: "Vercel + Railway",
                  color: "text-blue-700",
                  bg: "bg-blue-50",
                  border: "border-blue-200"
                },
                {
                  label: "Agaran Role",
                  title: "Full-Stack Lead",
                  value: "Architecture, NestJS backend, Next.js portals, security",
                  tag: "Lead Architect",
                  color: "text-[#2563EB]",
                  bg: "bg-[#EFF6FF]",
                  border: "border-[#BFDBFE]"
                },
              ].map((item) => (
                <div key={item.label} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#BFDBFE] hover:shadow-md transition-all space-y-2.5 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">{item.label}</span>
                      <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${item.bg} ${item.color} ${item.border}`}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-slate-900">{item.title}</div>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              11 — OUTCOME & MEASURABLE RESULTS
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="outcome">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">11</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">OUTCOME &amp; MEASURABLE RESULTS</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {[
                { stat: "4 Portals", label: "Role-Based Systems", sub: "Super Admin, Institute Admin, Tutor, Student", color: "text-[#2563EB]", bg: "bg-[#EFF6FF]", border: "border-[#BFDBFE]" },
                { stat: "362+ APIs", label: "Contract Endpoints", sub: "Fully registered NestJS API services", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
                { stat: "100%", label: "Tenant Isolation", sub: "PostgreSQL Row-Level Security policy enforcement", color: "text-[#0284C7]", bg: "bg-sky-50", border: "border-sky-200" },
                { stat: "0 Hardcoded", label: "Exam Rules", sub: "100% configuration-driven multi-exam architecture", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
              ].map((item) => (
                <div key={item.label} className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl ${item.bg} border ${item.border} text-center space-y-1`}>
                  <div className={`text-xl sm:text-3xl font-black ${item.color}`}>{item.stat}</div>
                  <div className="text-[9px] sm:text-xs font-extrabold uppercase text-slate-700">{item.label}</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">{item.sub}</div>
                </div>
              ))}
            </div>

            <blockquote className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8FAFC] text-[#0F172A] font-medium text-xs sm:text-sm leading-relaxed border border-slate-200 text-left sm:text-justify">
              &ldquo;The NEET SaaS platform gave our coaching academy a single enterprise OS. Managing multi-branch batches, launching Jitsi live classes, tracking fee installments, and evaluating 720-mark mock test papers used to take 5 separate software subscriptions. Now everything runs seamlessly under one tenant login.&rdquo;
              <footer className="mt-2.5 sm:mt-3 text-[#2563EB] font-bold text-xs">&mdash; Academic Director, Partner NEET Academy</footer>
            </blockquote>
          </section>

          {/* ══════════════════════════════════════════════════════════
              12 — CASE STUDY NAVIGATION
          ══════════════════════════════════════════════════════════ */}
          <section className="pt-6 sm:pt-8 border-t border-slate-200" id="next-project">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">12</span>
              <h2 className="text-lg sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">CASE STUDY NAVIGATION</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Link href="/work/ai-learning-portal" className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#2563EB] hover:bg-[#EFF6FF]/50 transition-all duration-300 group flex flex-col justify-between">
                <div className="text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-wider group-hover:text-[#2563EB] transition-colors">
                  &larr; PREVIOUS CASE STUDY
                </div>
                <div className="mt-1.5 sm:mt-2 text-sm sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                  ZHI — Learn While Playing
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-medium">Pre-KG to 1st Std Multi-Portal EdTech Platform</div>
              </Link>

              <Link href="/work" className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#2563EB] hover:bg-[#EFF6FF]/50 transition-all duration-300 group text-left sm:text-right flex flex-col justify-between">
                <div className="text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-wider group-hover:text-[#2563EB] transition-colors">
                  ALL CASE STUDIES &rarr;
                </div>
                <div className="mt-1.5 sm:mt-2 text-sm sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                  View All Projects
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-medium">Return to Agaran Portfolio Index</div>
              </Link>
            </div>
          </section>

        </article>
      </main>

      <Footer />
    </>
  );
}
