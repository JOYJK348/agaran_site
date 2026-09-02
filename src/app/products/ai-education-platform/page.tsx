"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProductAIEducationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-20 sm:pt-28 pb-16 sm:pb-24 px-3 sm:px-8 lg:px-16 font-sans selection:bg-[#2563EB] selection:text-white">

        <article className="max-w-[1440px] mx-auto bg-white border border-slate-200/90 shadow-[0_4px_30px_rgba(15,23,42,0.03)] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">

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
                AI &bull; EDUCATION &bull; AUTOMATION
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
              A Smarter Way to Run Education.
            </p>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 border border-slate-200/90 mb-8 space-y-4">
              <p className="text-sm sm:text-lg font-medium leading-relaxed text-slate-700 text-left sm:text-justify">
                Education involves much more than teaching. Institutions manage students, admissions, courses, classes, attendance, assessments, communication, administrative work and many repetitive day-to-day tasks.
              </p>
              <p className="text-sm sm:text-lg font-medium leading-relaxed text-slate-700 text-left sm:text-justify">
                Agaran is building an intelligent platform that brings these workflows together and uses <strong className="font-extrabold text-[#2563EB]">AI + automation</strong> to reduce the amount of manual work required.
              </p>
            </div>
          </header>

          {/* ── Product UI Visual / Planned Architecture Mockup ── */}
          <div className="mb-12 sm:mb-16 relative">
            <div className="w-full rounded-2xl overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-2xs relative p-4 sm:p-6 text-slate-800 flex flex-col justify-between gap-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 text-xs font-mono gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <div className="ml-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-mono flex items-center gap-2 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>https://app.agaran-edu.com</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono uppercase bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-md font-bold self-start sm:self-auto flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  PLANNED SYSTEM ARCHITECTURE &bull; IN DEVELOPMENT
                </div>
              </div>

              {/* 3 Core Workflow Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-[#BFDBFE] space-y-2 shadow-2xs">
                  <div className="text-[10px] font-black uppercase text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE] inline-block">ACADEMICS</div>
                  <div className="font-extrabold text-slate-900 text-sm">Admissions &amp; Courses</div>
                  <div className="text-slate-500 text-[11px]">Structured course builder, online forms &amp; student verification.</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-sky-200 space-y-2 shadow-2xs">
                  <div className="text-[10px] font-black uppercase text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded border border-sky-200 inline-block">EXAMS</div>
                  <div className="font-extrabold text-slate-900 text-sm">Assessments &amp; Results</div>
                  <div className="text-slate-500 text-[11px]">Automated test evaluation, result calculation &amp; history.</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-purple-200 space-y-2 shadow-2xs">
                  <div className="text-[10px] font-black uppercase text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 inline-block">AI ENGINE</div>
                  <div className="font-extrabold text-slate-900 text-sm">AI Learning Support</div>
                  <div className="text-slate-500 text-[11px]">Personalized concept explanations &amp; workflow assistance.</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* ══════════════════════════════════════════════════════════
              01 — THE PROBLEM
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="problem">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-rose-600 px-2.5 py-1 rounded">01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">THE PROBLEM</h2>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-4">
              Education Has Too Much Repetitive Work.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6 text-justify">
              Many education institutions still spend a significant amount of time managing routine operations manually. Information can be spread across different systems. Staff may need to enter the same information multiple times. Students and parents may depend on staff for simple updates. Teachers and administrators spend time on tasks that could be handled automatically.
            </p>

            <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-4">
              <div className="text-xs font-black uppercase tracking-wider text-rose-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                The platform is designed to help reduce:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-bold text-slate-700">
                {[
                  "Repetitive administrative work",
                  "Manual student updates",
                  "Routine communication",
                  "Time spent managing assessments",
                  "Scattered academic information",
                  "Repeated data entry",
                  "Manual follow-up tasks",
                  "Unnecessary coordination between teams",
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
              02 — THE IDEA
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="idea">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#2563EB] px-2.5 py-1 rounded">02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">THE IDEA</h2>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-4">
              Let People Focus on Education. Let Technology Handle the Repetition.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6 text-justify">
              The platform combines education management, learning tools, AI capabilities and automated workflows into one connected environment. Instead of treating every task as a separate process, the system connects them together.
            </p>

            {/* Workflow Visual Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white shadow-lg space-y-4 mb-6">
              <div className="text-xs font-black uppercase tracking-widest text-sky-200">CORE SYSTEM PHILOSOPHY</div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm sm:text-xl font-black text-white">
                <span className="px-4 py-2 rounded-xl bg-white/15 border border-white/25">Manage</span>
                <span>&rarr;</span>
                <span className="px-4 py-2 rounded-xl bg-white/15 border border-white/25">Automate</span>
                <span>&rarr;</span>
                <span className="px-4 py-2 rounded-xl bg-white/15 border border-white/25">Assist</span>
                <span>&rarr;</span>
                <span className="px-4 py-2 rounded-xl bg-white/15 border border-white/25">Improve</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-slate-800 text-xs sm:text-sm font-semibold">
              The goal isn&apos;t to remove people from the process. <strong className="font-extrabold text-[#2563EB]">The goal is to remove the unnecessary work around them.</strong>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              03 — WHAT THE PLATFORM BRINGS TOGETHER (01 - 06)
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="features">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">03</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">WHAT THE PLATFORM BRINGS TOGETHER</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Admissions & Online Forms",
                  desc: "Make the admission process easier for institutions and students.",
                  points: ["Online application forms", "Student information collection", "Document submission", "Application tracking", "Verification workflows", "Admission status updates", "Automated communication"],
                  color: "text-[#2563EB]",
                  badge: "ADMISSIONS"
                },
                {
                  num: "02",
                  title: "Learning & Course Management",
                  desc: "Create a structured digital learning environment for students and educators.",
                  points: ["Course management", "Learning content", "Classes & Live learning", "Recorded sessions", "Student progress tracking", "Learning activities", "Course organisation"],
                  color: "text-[#0284C7]",
                  badge: "LEARNING"
                },
                {
                  num: "03",
                  title: "Exams & Assessments",
                  desc: "Make assessment workflows easier to manage.",
                  points: ["Online examinations", "Question management", "Assessment creation", "Automated evaluation", "Results calculation", "Performance tracking", "Assessment workflows"],
                  color: "text-purple-700",
                  badge: "EXAMS"
                },
                {
                  num: "04",
                  title: "AI-Powered Learning Support",
                  desc: "AI becomes part of the learning experience instead of being an isolated feature.",
                  points: ["Understanding concepts", "Asking questions & explanations", "Practising topics", "Reviewing learning material", "Personalised support", "Educator-centred assistance"],
                  color: "text-emerald-700",
                  badge: "AI SUPPORT"
                },
                {
                  num: "05",
                  title: "Communication & Notifications",
                  desc: "Reduce the need for staff to manually send routine updates.",
                  points: ["Automated reminders", "Class updates", "Exam notifications", "Student updates", "Parent communication", "Scheduled announcements"],
                  color: "text-amber-800",
                  badge: "NOTIFICATIONS"
                },
                {
                  num: "06",
                  title: "Administrative Automation",
                  desc: "Automate recurring institutional workflows (Trigger → Process → Action).",
                  points: ["Triggered processing", "Automatic status updates", "Staff workload reduction", "Cross-team synchronization", "System monitoring"],
                  color: "text-[#2563EB]",
                  badge: "AUTOMATION"
                },
              ].map((card) => (
                <div key={card.num} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between hover:border-[#2563EB] transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-[#BFDBFE]">
                        {card.num} &bull; {card.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">PLANNED</span>
                    </div>

                    <h3 className={`text-lg font-black ${card.color} mb-2`}>{card.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mb-4">{card.desc}</p>

                    <ul className="space-y-1.5 text-xs font-semibold text-slate-700 border-t border-slate-100 pt-3">
                      {card.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-400">
                    Integrated Core Module
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              04 — AI & AUTOMATION INSIDE THE PLATFORM
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="ai-automation">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">04</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">AI &amp; AUTOMATION INSIDE THE PLATFORM</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* AI Pillar */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#EFF6FF]/80 via-white to-white border border-[#BFDBFE] space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-[#2563EB] bg-white px-3 py-1 rounded-full border border-[#BFDBFE] inline-block">
                  AI THAT ACTUALLY HELPS
                </div>
                <h3 className="text-xl font-black text-[#0F172A]">AI Role Assistance</h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <strong className="text-[#2563EB] font-extrabold block mb-0.5">For Students</strong>
                    <span>Personalised explanations, learning assistance and concept practice.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <strong className="text-[#0284C7] font-extrabold block mb-0.5">For Teachers</strong>
                    <span>Learning insights, content assistance and student progress support.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <strong className="text-purple-700 font-extrabold block mb-0.5">For Institutions &amp; Administrators</strong>
                    <span>Intelligent information processing, handling routine processes and reducing manual work.</span>
                  </div>
                </div>
              </div>

              {/* Automation Workflow Visual Pillar */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 via-white to-white border border-slate-200 space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                  AUTOMATION WORKFLOW EXAMPLE
                </div>
                <h3 className="text-xl font-black text-[#0F172A]">End-to-End Automated Sequence</h3>
                
                <div className="space-y-2 text-xs font-semibold text-slate-800">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">Student Submits Form</div>
                  <div className="text-center text-slate-400 font-bold">&darr;</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">Information Processed</div>
                  <div className="text-center text-slate-400 font-bold">&darr;</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">Application Status Updated</div>
                  <div className="text-center text-slate-400 font-bold">&darr;</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">Relevant Team Notified</div>
                  <div className="text-center text-slate-400 font-bold">&darr;</div>
                  <div className="p-2.5 rounded-xl bg-[#2563EB] text-white text-center font-bold">Student Receives Update</div>
                </div>
              </div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              05 — ONE CONNECTED EDUCATION SYSTEM & WHO IS IT FOR
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="target-audience">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">05</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">WHO IS IT FOR?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { title: "Schools", desc: "Manage learning, students, assessments and daily parent communication." },
                { title: "Colleges", desc: "Connect academic workflows, department student management and digital learning." },
                { title: "Coaching Institutions", desc: "Manage courses, batches, exams, live classes and learning support." },
                { title: "Education Businesses", desc: "Build and manage digital learning experiences for their own client users." },
              ].map((aud) => (
                <div key={aud.title} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="font-black text-[#2563EB] text-base">{aud.title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">{aud.desc}</p>
                </div>
              ))}
            </div>

            {/* Designed to Grow */}
            <div className="p-6 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-3">
              <h3 className="font-extrabold text-[#0F172A] text-base sm:text-lg">
                Designed to Grow With the Institution
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                The platform is being designed with a scalable architecture so different institutions can use the system according to their own requirements. Institutions should not have to completely change the way they work just to use the software. The system can be configured around their workflows, users and requirements.
              </p>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              06 — CURRENT STATUS & BIGGER VISION
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="status-vision">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8]">CURRENT STATUS &bull; IN DEVELOPMENT</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Current Development Focus</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-4">
                    The platform is currently being developed and refined. Our focus is on building the core experience first, validating how the workflows work in real environments and gradually expanding the AI and automation capabilities.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-mono text-sky-200">
                    <li>&bull; Core platform</li>
                    <li>&bull; Education workflows</li>
                    <li>&bull; Automation</li>
                    <li>&bull; AI integration</li>
                    <li>&bull; User experience</li>
                    <li>&bull; Scalable architecture</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">The Bigger Vision</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    The long-term vision is to create a connected technology layer for education — a place where students learn, teachers teach, administrators manage, AI assists, and automation handles repetitive work within one connected ecosystem.
                  </p>
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

        </article>

      </main>

      <Footer />
    </>
  );
}
