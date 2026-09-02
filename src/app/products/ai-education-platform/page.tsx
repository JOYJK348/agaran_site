"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProductAIEducationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-20 sm:pt-28 pb-16 sm:pb-24 px-3 sm:px-8 lg:px-16 font-sans selection:bg-[#2563EB] selection:text-white">

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1440px] mx-auto bg-white border border-slate-200/90 shadow-[0_4px_30px_rgba(15,23,42,0.03)] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >

          {/* ── Top Navigation Bar ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 sm:mb-8 border-b border-slate-200 text-xs sm:text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-[#2563EB] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-[#0F172A] font-bold truncate">AI Education Automation Platform</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-50 border border-amber-200/90 text-amber-800 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider shadow-2xs self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              PRODUCT SPECIFICATION &bull; STATUS: IN DEVELOPMENT
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              HEADER — PRODUCT TITLE & HERO NARRATIVE
          ══════════════════════════════════════════════════════════ */}
          <header className="mb-10 sm:mb-14">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                END-TO-END LMS &bull; AI TUTOR &bull; INSTITUTIONAL ERP
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Status: In Development
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight text-[#0F172A] leading-[1.12] mb-4">
              AI Education Automation Platform
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#0D9488] mb-6">
              The Complete End-to-End AI LMS &amp; Education ERP Platform.
            </p>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 border border-slate-200/90 mb-8 space-y-4">
              <p className="text-sm sm:text-lg font-medium leading-relaxed text-slate-700 text-left sm:text-justify">
                Running an educational institution requires seamless management of <strong className="font-extrabold text-[#0F172A]">admissions, live &amp; recorded classes, course modules, digital &amp; offline exams, daily attendance, fee collection, student portals, parent communication, and 24/7 AI learning assistance</strong>.
              </p>
              <p className="text-sm sm:text-lg font-medium leading-relaxed text-slate-700 text-left sm:text-justify">
                Agaran is building a unified, multi-tenant AI Education Platform that connects every stakeholder — <strong className="font-extrabold text-[#2563EB]">Students, Parents, Teachers, and Administrators</strong> — into a single automated ecosystem.
              </p>
            </div>
          </header>

          {/* ── Product Architecture Dashboard Mockup ── */}
          <div className="mb-12 sm:mb-16 relative">
            <div className="w-full rounded-2xl overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-2xs relative p-4 sm:p-6 text-slate-800 flex flex-col justify-between gap-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 text-xs font-mono gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <div className="ml-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-mono flex items-center gap-2 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>https://app.agaran-edu.com/dashboard</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono uppercase bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-md font-bold self-start sm:self-auto flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  UNIFIED SYSTEM ECOSYSTEM &bull; IN DEVELOPMENT
                </div>
              </div>

              {/* 4 Connected System Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-[#BFDBFE] space-y-1 shadow-2xs">
                  <div className="text-[10px] font-black uppercase text-[#2563EB]">STUDENT PORTAL</div>
                  <div className="font-extrabold text-slate-900">Live Classes &amp; LMS</div>
                  <div className="text-slate-500 text-[11px]">Stream live via LiveKit, watch Cloudflare recordings &amp; access course modules.</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-emerald-200 space-y-1 shadow-2xs">
                  <div className="text-[10px] font-black uppercase text-emerald-700">PARENT PORTAL</div>
                  <div className="font-extrabold text-slate-900">Attendance &amp; Reports</div>
                  <div className="text-slate-500 text-[11px]">Real-time attendance logs, automated SMS/WhatsApp alerts &amp; marksheets.</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-sky-200 space-y-1 shadow-2xs">
                  <div className="text-[10px] font-black uppercase text-[#0284C7]">EXAM ENGINE</div>
                  <div className="font-extrabold text-slate-900">Digital &amp; Offline Exams</div>
                  <div className="text-slate-500 text-[11px]">Online OMR/MCQ tests + printable offline paper generator &amp; rank lists.</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-purple-200 space-y-1 shadow-2xs">
                  <div className="text-[10px] font-black uppercase text-purple-700">AI TUTOR</div>
                  <div className="font-extrabold text-slate-900">24/7 AI Doubt Solver</div>
                  <div className="text-slate-500 text-[11px]">Instant step-by-step problem explanations &amp; subject practice assistance.</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* ══════════════════════════════════════════════════════════
              01 — THE PROBLEM & INSTITUTIONAL CHALLENGES
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="problem">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-rose-600 px-2.5 py-1 rounded">01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">THE PROBLEM</h2>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-4">
              Disconnected Systems Create Friction for Students, Teachers &amp; Parents.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6 text-justify">
              Most educational institutions run on scattered tools: Zoom for live classes, Google Drive for study materials, physical sheets or WhatsApp for attendance, paper exams with manual grading, and separate software for fees and parent communication. This creates heavy administrative workload, lost data, and delayed updates.
            </p>

            <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-4">
              <div className="text-xs font-black uppercase tracking-wider text-rose-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                Problems Solved by Agaran AI Education Platform:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-bold text-slate-700">
                {[
                  "Scattered academic information across apps",
                  "Manual daily attendance logging & paper registers",
                  "Time-consuming exam creation & grading",
                  "Lack of real-time parent visibility on progress",
                  "Manual follow-ups for fee installments",
                  "Student doubt backlog outside classroom hours",
                  "Disorganized live class streaming & recordings",
                  "Repetitive data entry between teams",
                ].map((item) => (
                  <div key={item} className="p-3 rounded-xl bg-white border border-rose-200/80 flex items-center gap-2 text-slate-800 shadow-2xs">
                    <span className="text-rose-600 font-black">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              02 — COMPLETE 8-PILLAR MODULE ECOSYSTEM
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="modules">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">COMPLETE 8-PILLAR MODULE ECOSYSTEM</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  num: "01",
                  title: "Student Portal",
                  desc: "Dedicated portal for students to attend classes, take exams & track progress.",
                  points: ["Live class streaming", "Recorded video library", "Chapter notes & PDFs", "Online digital tests", "Personal performance analytics"],
                  color: "text-[#2563EB]",
                  badge: "LEARNER HUB"
                },
                {
                  num: "02",
                  title: "Parent Portal",
                  desc: "Transparent access for parents to monitor academic growth & attendance.",
                  points: ["Real-time attendance status", "Exam marksheets & ranks", "Automated SMS/WhatsApp alerts", "Fee payment receipts", "Direct teacher communication"],
                  color: "text-emerald-700",
                  badge: "PARENT HUB"
                },
                {
                  num: "03",
                  title: "Live Classes & LMS",
                  desc: "High-definition live interactive sessions & Cloudflare stream recordings.",
                  points: ["LiveKit SDK integration", "Cloudflare video storage", "Module-wise course builder", "Batch schedule calendar", "Downloadable study resources"],
                  color: "text-[#0284C7]",
                  badge: "COURSE LMS"
                },
                {
                  num: "04",
                  title: "Digital & Offline Exams",
                  desc: "Comprehensive assessment builder for both digital and printed test papers.",
                  points: ["Digital MCQ / OMR tests", "Printable offline exam builder", "Automated instant grading", "Detailed answer key explanations", "Batch rank list generation"],
                  color: "text-purple-700",
                  badge: "EXAM BUILDER"
                },
                {
                  num: "05",
                  title: "Automated Attendance",
                  desc: "Digital attendance logging with instant automated parent notification.",
                  points: ["QR code / Mobile check-in", "Biometric integration ready", "Absent parent WhatsApp alert", "Monthly attendance percentage", "Batch attendance analytics"],
                  color: "text-amber-800",
                  badge: "ATTENDANCE"
                },
                {
                  num: "06",
                  title: "AI Doubt Solver",
                  desc: "24/7 AI learning assistant for instant question resolution & practice.",
                  points: ["Step-by-step problem explanations", "Physics/Math/Chemistry solver", "Subject concept clarification", "Custom practice quizzes", "Always-available AI tutor"],
                  color: "text-teal-700",
                  badge: "AI TUTOR"
                },
                {
                  num: "07",
                  title: "Faculty Dashboard",
                  desc: "Empowering teachers to manage classes, tests & student progress.",
                  points: ["Class timetable management", "Assignment & test upload", "Syllabus completion tracker", "Student performance insights", "Attendance validation"],
                  color: "text-[#2563EB]",
                  badge: "FACULTY HUB"
                },
                {
                  num: "08",
                  title: "Fee & Operations ERP",
                  desc: "Complete financial & administrative automation for management.",
                  points: ["Custom fee structure setup", "Installment payment tracking", "Automated fee reminders", "Digital receipt generation", "Institutional analytics"],
                  color: "text-[#0284C7]",
                  badge: "OPERATIONS"
                },
              ].map((card) => (
                <div key={card.num} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between hover:border-[#2563EB] transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                        {card.num} &bull; {card.badge}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400">IN DEV</span>
                    </div>

                    <h3 className={`text-base font-black ${card.color} mb-1.5`}>{card.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{card.desc}</p>

                    <ul className="space-y-1 text-[11px] font-semibold text-slate-700 border-t border-slate-100 pt-2.5">
                      {card.points.map((p) => (
                        <li key={p} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-[10px] font-bold text-slate-400">
                    Core Platform Module
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              03 — END-TO-END STUDENT LIFECYCLE PIPELINE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="pipeline">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#2563EB] px-2.5 py-1 rounded">03</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">END-TO-END STUDENT LIFECYCLE PIPELINE</h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6 text-justify">
              From the moment a prospective student inquires to their daily learning, exam assessments, and ongoing parent updates, the entire journey moves automatically through one connected platform:
            </p>

            {/* 6-Stage Visual Chain */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white shadow-lg space-y-4">
              <div className="text-xs font-black uppercase tracking-widest text-sky-200">AUTOMATED STUDENT JOURNEY</div>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 text-center text-xs font-extrabold">
                {[
                  { step: "01", label: "Lead Capture", sub: "Online Form / WhatsApp" },
                  { step: "02", label: "Admission & Fee", sub: "Digital Receipt & Batch" },
                  { step: "03", label: "Classes & LMS", sub: "Live & Cloud Video" },
                  { step: "04", label: "Exams & Ranks", sub: "Digital & Printed OMR" },
                  { step: "05", label: "AI Doubt Tutor", sub: "24/7 Subject Helper" },
                  { step: "06", label: "Parent Updates", sub: "Attendance & Marks" },
                ].map((s) => (
                  <div key={s.step} className="p-3 rounded-2xl bg-white/15 border border-white/25 space-y-1">
                    <div className="text-[10px] font-mono text-sky-200">{s.step}</div>
                    <div className="text-sm font-black">{s.label}</div>
                    <div className="text-[10px] text-white/80 font-normal">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              04 — DEDICATED PORTALS FOR EVERY ROLE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="portals">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">04</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">DEDICATED PORTALS FOR EVERY ROLE</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                <div className="text-xs font-black uppercase text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-[#BFDBFE] inline-block">
                  FOR STUDENTS
                </div>
                <h3 className="text-lg font-black text-slate-900">Student Portal</h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Students log into a distraction-free learning dashboard to watch live sessions, access pre-recorded course modules, attempt digital exams, review marksheets, and ask the 24/7 AI tutor for doubt resolution.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                <div className="text-xs font-black uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block">
                  FOR PARENTS
                </div>
                <h3 className="text-lg font-black text-slate-900">Parent Portal &amp; Alerts</h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Parents receive immediate visibility into their child&apos;s daily attendance, exam marksheets, batch rank performance, fee payment receipts, and automated WhatsApp/SMS alerts when a student is absent.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                <div className="text-xs font-black uppercase text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200 inline-block">
                  FOR MANAGEMENT
                </div>
                <h3 className="text-lg font-black text-slate-900">Management &amp; Faculty ERP</h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Administrators and teachers manage course schedules, create digital/offline exams, monitor student performance analytics, track fee installments, and manage institutional growth seamlessly.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              05 — CURRENT DEVELOPMENT STATUS & VISION
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="status-vision">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE]/40 border border-[#BFDBFE] text-slate-800 space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#BFDBFE] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest text-[#2563EB]">CURRENT STATUS &bull; IN DEVELOPMENT</span>
                </div>
                <span className="text-xs font-extrabold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Active Engineering
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-black text-[#0F172A] mb-2">Development Focus</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed text-justify mb-4">
                    The platform is currently being designed and developed with high-performance multi-tenant architecture to support coaching centers, schools, and colleges.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-[#2563EB]">
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> LiveKit SDK integration
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Cloudflare Stream storage
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Student &amp; Parent portals
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Digital &amp; Offline exam engine
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> AI doubt solver assistant
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Attendance &amp; Fee ERP
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#0F172A] mb-2">The Bigger Vision</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed text-justify mb-4">
                    To deliver a unified digital backbone for modern education — where learning, assessment, administration, and parent communication flow effortlessly through intelligent automation.
                  </p>
                  <div className="p-4 rounded-2xl bg-white border border-[#BFDBFE] space-y-2 text-xs">
                    <div className="font-extrabold text-[#0F172A]">Why We Build Differently:</div>
                    <p className="text-slate-600 leading-relaxed text-justify">
                      Instead of building isolated chatbots or single-purpose apps, Agaran builds connected systems where data flows seamlessly across every operational layer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              BOTTOM NAVIGATION & CTA
          ══════════════════════════════════════════════════════════ */}
          <footer className="pt-8 border-t border-slate-200 space-y-8">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black">Building the Future of Smarter Education.</h2>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
                We&apos;re building technology that helps education institutions spend less time managing systems and more time focusing on people.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2563EB] font-black text-xs sm:text-sm shadow-md hover:bg-slate-50 transition-all"
                >
                  <span>Start a Conversation</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-bold text-slate-500">
              <Link href="/products" className="hover:text-[#2563EB] transition-colors">&larr; Back to Products</Link>
              <Link href="/products/whatsapp-automation" className="hover:text-[#2563EB] transition-colors">Next Product: WhatsApp Automation &rarr;</Link>
            </div>
          </footer>

        </motion.article>

      </main>

      <Footer />
    </>
  );
}
