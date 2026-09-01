"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const products = [
  {
    id: "coaching-platform",
    num: "01",
    badge: "Automation LMS",
    badgeColor: "#2563EB",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200/90",
    name: "Agaran Coaching Platform",
    headline: "The Complete Operating System for Modern Coaching & Education",
    description: (
      <>
        A unified platform that brings <strong className="font-extrabold text-[#0F172A]">admissions</strong>, <strong className="font-extrabold text-[#2563EB]">academics</strong>, <strong className="font-extrabold text-[#0F172A]">batches</strong>, <strong className="font-extrabold text-[#2563EB]">examinations</strong>, <strong className="font-extrabold text-[#0F172A]">fees</strong>, communication, and <strong className="font-extrabold text-[#2563EB]">analytics</strong> into one intelligent coaching management system.
      </>
    ),
    features: [
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        ),
        iconBg: "bg-blue-100 text-blue-600 border border-blue-200",
        title: "Admissions & Enrollment",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Lead management</strong>, student admissions, <strong className="font-extrabold text-[#0F172A]">enrollment tracking</strong>, and automated follow-ups.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        ),
        iconBg: "bg-blue-50 text-[#2563EB] border border-blue-200",
        title: "Academics & Batch Management",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Courses, subjects, schedules</strong>, batches, attendance, and <strong className="font-extrabold text-[#0F172A]">academic operations</strong>.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
        ),
        iconBg: "bg-blue-50 text-[#2563EB] border border-blue-200",
        title: "Assessments & Performance",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Examinations, question management</strong>, evaluations, rankings, and <strong className="font-extrabold text-[#0F172A]">student performance insights</strong>.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
          </svg>
        ),
        iconBg: "bg-blue-50 text-[#2563EB] border border-blue-200",
        title: "Fees & Communication",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Fee tracking, installment management</strong>, receipts, automated SMS notifications, and <strong className="font-extrabold text-[#0F172A]">parent communication</strong>.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
        ),
        iconBg: "bg-blue-50 text-[#2563EB] border border-blue-200",
        title: "Student & Parent Experience",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Dedicated portals</strong> for attendance, learning resources, results, announcements, and <strong className="font-extrabold text-[#0F172A]">academic progress</strong>.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
          </svg>
        ),
        iconBg: "bg-blue-50 text-[#2563EB] border border-blue-200",
        title: "Live Classes & Recorded Sessions",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Interactive live online classes</strong>, automated attendance tracking, and <strong className="font-extrabold text-[#0F172A]">anytime access to pre-recorded video lectures</strong>.
          </>
        ),
      },
    ],
    footerNote: "Built for coaching institutes, training organizations, schools, colleges, and modern education institutions.",
    cta: "Explore Coaching Platform",
    href: "#",
    metric1: { label: "Exam Accuracy", val: "99.8%" },
    metric2: { label: "Fee Recovery Speed", val: "3.4x" },
    mockupType: "lms",
  },
  {
    id: "automation-suite",
    num: "02",
    badge: "Enterprise Automation",
    badgeColor: "#2563EB",
    badgeBg: "bg-blue-50 text-[#2563EB] border-blue-200/90",
    name: "AI Agents for Modern Businesses",
    headline: "Autonomous Digital Workforce for Modern Startups & Growing Teams",
    description: (
      <>
        <strong className="font-extrabold text-[#0F172A]">Intelligent AI agents.</strong> Our AI agents work like a <strong className="font-extrabold text-[#059669]">digital team</strong> that supports marketing, sales, operations, customer support, and everyday business tasks automatically.
      </>
    ),
    features: [
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
          </svg>
        ),
        iconBg: "bg-emerald-100/90 text-[#059669] border border-emerald-300",
        title: "Marketing Intelligence Agent",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Researches your market</strong>, generates content ideas, creates campaigns, and helps grow your brand consistently.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        ),
        iconBg: "bg-emerald-100/90 text-[#059669] border border-emerald-300",
        title: "Lead & Sales Agent",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Qualifies leads</strong>, responds to inquiries, prepares proposals, schedules meetings, and follows up automatically.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
        ),
        iconBg: "bg-emerald-100/90 text-[#059669] border border-emerald-300",
        title: "Customer Success Agent",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Handles onboarding</strong>, answers customer questions, collects feedback, and improves customer experience.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        ),
        iconBg: "bg-emerald-100/90 text-[#059669] border border-emerald-300",
        title: "Operations & Workflow Agent",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Automates internal processes</strong>, task management, document handling, and cross-platform workflows.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
        ),
        iconBg: "bg-emerald-100/90 text-[#059669] border border-emerald-300",
        title: "Founder Intelligence Agent",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Provides weekly business insights</strong>, priorities, growth recommendations, and operational summaries for founders.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m.567-.567l1.04-1.265m-2.18 2.398l-3.03 2.496m0 0l-3.586-3.586m3.586 3.586l3.586 3.586M15 4.5a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        iconBg: "bg-emerald-100/90 text-[#059669] border border-emerald-300",
        title: "Custom AI Agent Development",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Need something custom?</strong> We build tailored AI agents specifically designed to handle your exact business needs and daily work.
          </>
        ),
      },
    ],
    footerNote: "Built for startups, agencies, educational organizations, SaaS businesses, and growing teams.",
    cta: "Explore AI Agents",
    href: "#",
    metric1: { label: "Ops Work Reduction", val: "85%" },
    metric2: { label: "Execution Speed", val: "24/7" },
    mockupType: "automation",
  },
];

/* ── Immersive Coaching Platform OS Visual (Rich Text & 3D Orbital Network • Blue Theme) ── */
function LMS3DVisual() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: "admissions",
      label: "Admissions",
      badge: "ADMISSIONS & ENROLLMENT",
      icon: "🎓",
      problem: "Manual Lead Tracking & Delayed Student Follow-ups",
      solution: "Automated Lead Capture & Instant Student Enrollment",
      steps: [
        { icon: "📝", label: "Lead Ingestion", desc: "Captures web, WhatsApp & walk-in leads" },
        { icon: "⚡", label: "Instant Follow-up", desc: "Sends syllabus & fee options in 1.5s" },
        { icon: "🎯", label: "Auto Enrollment", desc: "Digital form submission & student ID gen" },
      ],
      metric: "3.4x Faster Admissions",
      impact: "100% Digital Onboarding",
      color: "#2563EB",
    },
    {
      id: "academics",
      label: "Academics",
      badge: "ACADEMIC & BATCH OS",
      icon: "📚",
      problem: "Overlapping Schedules & Manual Attendance Sheets",
      solution: "Unified Batch, Schedule & Live Attendance Engine",
      steps: [
        { icon: "📅", label: "Batch Scheduling", desc: "Auto-creates timetables with zero clash" },
        { icon: "📲", label: "Biometric Sync", desc: "Live attendance via app & RFID scanner" },
        { icon: "📊", label: "Progress Report", desc: "Syllabus tracking & performance insights" },
      ],
      metric: "98.2% Attendance Rate",
      impact: "Zero Schedule Clashes",
      color: "#0284C7",
    },
    {
      id: "assessments",
      label: "Exams & Ranking",
      badge: "EXAM & EVALUATION",
      icon: "📝",
      problem: "Days Spent Manual Grading & Rank Calculation",
      solution: "Instant Test Engine, Digital Auto-Grading & AIR Ranks",
      steps: [
        { icon: "🧠", label: "Question Bank", desc: "Auto-generates JEE, NEET & Foundation tests" },
        { icon: "⚡", label: "1-Click Evaluation", desc: "Digital paper scanning & online auto-grade" },
        { icon: "📊", label: "AIR Rank Engine", desc: "Instant AIR ranks & topic weakness reports" },
      ],
      metric: "99.8% Exam Accuracy",
      impact: "Instant Results Delivery",
      color: "#1D4ED8",
    },
    {
      id: "fees",
      label: "Fees & SMS",
      badge: "FEE RECOVERY ENGINE",
      icon: "💳",
      problem: "Uncollected Installments & Manual Reminder Calls",
      solution: "Automated Fee Collection & Parent WhatsApp Alerts",
      steps: [
        { icon: "💳", label: "Payment Plans", desc: "Auto-generates invoices & installments" },
        { icon: "📲", label: "WhatsApp Alerts", desc: "Automated gentle reminders to parents" },
        { icon: "🧾", label: "Digital Receipts", desc: "Instant PDF receipts & accounting sync" },
      ],
      metric: "3.4x Faster Fee Recovery",
      impact: "Zero Pending Installments",
      color: "#0369A1",
    },
    {
      id: "portal",
      label: "Student Hub",
      badge: "STUDENT & PARENT PORTAL",
      icon: "📱",
      problem: "Frequent Parent Inquiries for Marks & Attendance",
      solution: "Dedicated Mobile App for Live Marks, Videos & Notices",
      steps: [
        { icon: "📱", label: "Mobile App", desc: "Dedicated iOS & Android parent portal" },
        { icon: "🎥", label: "Recorded Lectures", desc: "24/7 access to HD class recordings" },
        { icon: "📈", label: "Live Growth View", desc: "Real-time marks, attendance & notifications" },
      ],
      metric: "4.9/5 App Satisfaction",
      impact: "90% Fewer Admin Calls",
      color: "#2563EB",
    },
  ];

  // Auto-cycle modules every 5s
  useEffect(() => {
    const timer = setInterval(() => setActiveModule((p) => (p + 1) % 5), 5000);
    return () => clearInterval(timer);
  }, []);

  const current = modules[activeModule];

  const R = 36;
  const positions = modules.map((_, i) => {
    const angle = -Math.PI / 2 + i * ((2 * Math.PI) / 5);
    return { x: 50 + R * Math.cos(angle), y: 50 + R * Math.sin(angle) };
  });

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-br from-blue-50/90 via-white to-sky-50/70 border border-blue-200/80 shadow-[0_12px_45px_rgba(37,99,235,0.10)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)", top: "-10%", left: "10%" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full opacity-[0.09]"
          style={{ background: "radial-gradient(circle, #0284C7, transparent 70%)", bottom: "-10%", right: "10%" }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#93c5fd_0.8px,transparent_0.8px)] [background-size:22px_22px] opacity-[0.22]" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 py-3 border-b border-blue-200/60 bg-white/60 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs font-black text-[#0F172A] uppercase tracking-wider">
            Agaran Institute Operating System
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5">
          {modules.map((mod, idx) => {
            const isActive = idx === activeModule;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => setActiveModule(idx)}
                className={`cursor-pointer px-3 py-1 rounded-full text-[11px] font-black transition-all duration-300 border flex items-center gap-1.5 ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-500 shadow-md scale-105"
                    : "bg-white/80 text-slate-600 border-blue-200/80 hover:bg-blue-50 hover:text-blue-800"
                }`}
              >
                <span>{mod.icon}</span>
                <span>{mod.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 p-5 sm:p-7 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[340px] lg:h-[340px]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <defs>
                <filter id="aglow-blue">
                  <feGaussianBlur stdDeviation="1.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <circle cx="50" cy="50" r={R} fill="none" stroke="#BFDBFE" strokeWidth="0.6" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r={R * 0.65} fill="none" stroke="#93C5FD" strokeWidth="0.4" opacity="0.5" />

              {positions.map((pos, i) => {
                const isActive = i === activeModule;
                return (
                  <g key={modules[i].id}>
                    <motion.line
                      x1="50" y1="50" x2={pos.x} y2={pos.y}
                      stroke={isActive ? "#2563EB" : "#93C5FD"}
                      strokeWidth={isActive ? 1.6 : 0.6}
                      strokeDasharray={isActive ? "4 2" : "2 4"}
                      filter={isActive ? "url(#aglow-blue)" : undefined}
                      animate={{ strokeDashoffset: isActive ? [12, 0] : [6, 0] }}
                      transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" } }}
                    />
                    {isActive && (
                      <motion.circle
                        r="2.5" fill="#2563EB"
                        animate={{ cx: [50, pos.x], cy: [50, pos.y], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-full bg-blue-400/20 blur-xl pointer-events-none" />
                
                <motion.div
                  className="absolute -inset-7 rounded-full border border-blue-300/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500" />
                </motion.div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-600 via-sky-600 to-blue-800 flex flex-col items-center justify-center shadow-xl shadow-blue-400/30 border-2 border-white">
                  <span className="text-white font-black text-sm sm:text-base tracking-tight">LMS</span>
                  <span className="text-[7.5px] text-blue-100 font-extrabold uppercase tracking-widest">OS</span>
                </div>
              </motion.div>
            </div>

            {modules.map((mod, i) => {
              const pos = positions[i];
              const isActive = i === activeModule;
              return (
                <motion.button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveModule(i)}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer outline-none group"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  animate={{ scale: isActive ? 1.15 : 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute -inset-2.5 rounded-full border-2 border-blue-500/70"
                      animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.2, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <div
                    className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-white border-blue-600 shadow-lg shadow-blue-300/40 text-xl sm:text-2xl ring-4 ring-blue-100"
                        : "bg-white/80 border-blue-200 text-lg opacity-70 group-hover:opacity-100 group-hover:border-blue-300"
                    }`}
                  >
                    <span>{mod.icon}</span>
                  </div>

                  <div className={`absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-black px-2 py-0.5 rounded-full border transition-all ${
                    isActive ? "bg-blue-600 text-white border-blue-500 shadow-xs" : "bg-white/90 text-slate-600 border-slate-200"
                  }`}>
                    {mod.label}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{current.icon}</span>
                <div>
                  <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                    {current.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                    {current.solution}
                  </h3>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-blue-100/90 text-blue-800 text-xs font-black border border-blue-300 shadow-2xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span>{current.impact}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-900 text-xs font-bold shadow-2xs">
              <span className="px-2 py-0.5 rounded-md bg-amber-500 text-white font-black text-[9.5px] uppercase tracking-wider">
                PROBLEM SOLVED
              </span>
              <span className="font-extrabold">{current.problem}</span>
            </div>

            <div className="pt-1 space-y-2.5">
              <div className="text-[10.5px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>Automated Operating Stream</span>
                <div className="h-[1px] flex-1 bg-slate-200/80" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {current.steps.map((step, stepIdx) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: stepIdx * 0.08, duration: 0.3 }}
                    className="relative flex flex-col p-3 rounded-2xl bg-gradient-to-b from-white/90 to-blue-50/40 border border-blue-200/70 shadow-xs hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="w-7 h-7 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center text-sm font-black border border-blue-200">
                        {step.icon}
                      </span>
                      <span className="text-[9px] font-black text-blue-600 bg-blue-100/60 px-1.5 py-0.5 rounded-md">
                        STEP 0{stepIdx + 1}
                      </span>
                    </div>
                    <div className="text-xs font-black text-[#0F172A] leading-snug">
                      {step.label}
                    </div>
                    <div className="text-[11px] text-slate-600 font-medium leading-relaxed mt-1">
                      {step.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs border-t border-blue-100">
              <div className="flex items-center gap-2 text-slate-500 font-bold text-[11px]">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span>Verified Institute Outcome</span>
              </div>
              <div className="text-sm sm:text-base font-black text-blue-700 tracking-tight bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-300 shadow-2xs">
                🎯 {current.metric}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex sm:hidden items-center justify-center gap-2 pb-4 pt-1 border-t border-blue-100">
        {modules.map((mod, idx) => {
          const isActive = idx === activeModule;
          return (
            <button
              key={mod.id}
              type="button"
              onClick={() => setActiveModule(idx)}
              className={`px-3 py-1 rounded-full text-[10px] font-black transition-all flex items-center gap-1 border ${
                isActive
                  ? "bg-blue-600 text-white border-blue-500 shadow-xs"
                  : "bg-white text-slate-600 border-slate-200"
              }`}
            >
              <span>{mod.icon}</span>
              <span>{mod.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Interactive Smartphone App UI/UX Showcase for Enterprise AI Agents ── */
function Automation3DVisual() {
  const [activeAgent, setActiveAgent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const agents = [
    {
      id: "marketing",
      label: "Marketing",
      badge: "MARKETING AI AGENT",
      icon: "📢",
      title: "Marketing Intelligence AI",
      subtitle: "24/7 Autonomous Brand Growth",
      problem: "Manual Content & Slow Lead Generation",
      solution: "24/7 Autonomous Brand Growth Engine",
      steps: [
        { icon: "🔍", label: "Intent Signals", desc: "Scans search & market trends in real-time" },
        { icon: "⚡", label: "Auto-Campaign", desc: "AI writes, designs & publishes posts" },
        { icon: "🚀", label: "Growth Result", desc: "+38% Traffic • 48 Qualified Leads" },
      ],
      metric: "+38% Traffic Growth",
      impact: "85% Less Manual Work",
      color: "#059669",
    },
    {
      id: "sales",
      label: "Sales",
      badge: "SALES AI AGENT",
      icon: "💼",
      title: "Lead & Sales Closure AI",
      subtitle: "2.1s Instant Lead Qualification",
      problem: "Delayed Follow-ups & Lost Prospects",
      solution: "2.1s Instant Lead Qualification & Closing",
      steps: [
        { icon: "💼", label: "Lead Capture", desc: "Detects high-intent prospect inquiry" },
        { icon: "⚡", label: "Instant Proposal", desc: "Generates & dispatches proposal in 2.1s" },
        { icon: "💰", label: "Deal Closed", desc: "₹3.8L Revenue Secured automatically" },
      ],
      metric: "₹3.8L Closed",
      impact: "2.1s Speed-to-Lead",
      color: "#0D9488",
    },
    {
      id: "whatsapp",
      label: "WhatsApp AI",
      badge: "WHATSAPP AI CHATBOT",
      icon: "💬",
      title: "WhatsApp AI Chatbot Agent",
      subtitle: "24/7 Live WhatsApp Messaging & Lead Conversion",
      problem: "Slow WhatsApp Replies & Lost Customer Leads",
      solution: "Instant 24/7 WhatsApp AI Chatbot & Lead Automation",
      steps: [
        { icon: "💬", label: "Message Ingest", desc: "Instantly captures incoming WhatsApp inquiry" },
        { icon: "⚡", label: "Instant Reply", desc: "Dispatches syllabus, fees & demo links in 0.5s" },
        { icon: "📅", label: "Auto Booking", desc: "Schedules demo class & syncs CRM automatically" },
      ],
      metric: "0.5s Response Time",
      impact: "100% Instant WhatsApp Resolution",
      color: "#059669",
    },
    {
      id: "founder",
      label: "Founder AI",
      badge: "FOUNDER ADVISORY AI",
      icon: "📊",
      title: "Executive Intelligence AI",
      subtitle: "Real-Time Metrics & Priority Actions",
      problem: "Strategic Blindspots & Scattered Metrics",
      solution: "Real-Time Executive Intelligence & Priority Actions",
      steps: [
        { icon: "📈", label: "Data Stream", desc: "Tracks MRR, Cash Runway & Churn" },
        { icon: "🔍", label: "Insight Engine", desc: "Identifies top revenue opportunities" },
        { icon: "🚀", label: "Strategic Action", desc: "Recommends high-ROI channel scale" },
      ],
      metric: "3.8x Campaign ROI",
      impact: "24/7 Strategic Visibility",
      color: "#059669",
    },
  ];

  // Auto-cycle agents every 4s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setActiveAgent((p) => (p + 1) % agents.length), 4000);
    return () => clearInterval(timer);
  }, [isPaused, agents.length]);

  const current = agents[activeAgent];

  return (
    <div
      className="relative w-full rounded-3xl bg-gradient-to-b from-white via-slate-50/70 to-white border border-emerald-200/80 p-5 sm:p-7 lg:p-9 shadow-[0_15px_50px_rgba(16,185,129,0.08)] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid: Left Controls + Right Smartphone Frame */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Interactive Agent Tabs & Info */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="text-center lg:text-left mb-1">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#059669]">
              AUTONOMOUS DIGITAL WORKFORCE
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-1">
              Select an AI Agent to Preview
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Tap any AI agent below to see its live smartphone interface & execution stream.
            </p>
          </div>

          {/* Selector Pills */}
          <div className="flex flex-col gap-2">
            {agents.map((agent, idx) => {
              const isActive = idx === activeAgent;
              return (
                <button
                  key={agent.id}
                  type="button"
                  onClick={() => setActiveAgent(idx)}
                  className={`flex items-center gap-3 p-3 rounded-2xl border text-left transition-all ${
                    isActive
                      ? "bg-white border-emerald-500 shadow-[0_8px_25px_rgba(16,185,129,0.15)] scale-[1.02]"
                      : "bg-slate-50/80 border-slate-200/80 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0 border ${
                      isActive
                        ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                        : "bg-slate-100 text-slate-600 border-slate-200"
                    }`}
                  >
                    {agent.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className={`text-xs sm:text-sm font-black truncate ${isActive ? "text-[#0F172A]" : "text-slate-700"}`}>
                      {agent.title}
                    </h4>
                    <p className="text-[10.5px] font-medium text-slate-500 truncate mt-0.5">
                      {agent.subtitle}
                    </p>
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping hidden sm:block" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Smartphone UI Frame (Live Agent Mobile App Interface) */}
        <div className="lg:col-span-7 flex justify-center items-center">
          <div className="relative w-full max-w-[340px] xs:max-w-[360px] sm:max-w-[370px] rounded-[52px] bg-gradient-to-b from-[#2E3136] via-[#1A1C1F] to-[#101113] p-3.5 shadow-[0_30px_70px_rgba(15,23,42,0.35)] border border-[#42454B]/70">
            
            {/* iPhone Side Buttons */}
            <div className="absolute -left-[4px] top-24 w-[4px] h-7 bg-slate-700 rounded-l-md" />
            <div className="absolute -left-[4px] top-36 w-[4px] h-12 bg-slate-700 rounded-l-md" />
            <div className="absolute -left-[4px] top-52 w-[4px] h-12 bg-slate-700 rounded-l-md" />
            <div className="absolute -right-[4px] top-32 w-[4px] h-16 bg-slate-700 rounded-r-md" />

            {/* Smartphone Inner Screen — Fixed 550px Height for extra vertical breathing room */}
            <div className="relative rounded-[42px] bg-slate-950 overflow-hidden border border-slate-800/90 h-[550px] flex flex-col justify-between select-none shadow-inner">
              
              {/* Dynamic Island Header Bar */}
              <div className="pt-3 px-6 pb-2 bg-black flex items-center justify-between z-30 shrink-0">
                <span className="text-[11px] font-semibold text-white">9:41</span>
                
                <div className="w-24 h-5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-between px-2.5 shadow-inner">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="w-1 h-1 rounded-full bg-teal-400" />
                  </div>
                  <div className="flex items-center gap-0.5">
                    <span className="w-0.5 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="w-0.5 h-3 bg-emerald-400 rounded-full animate-pulse delay-75" />
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold text-white">
                  <span>5G</span>
                  <div className="w-5 h-2.5 rounded-xs border border-white/80 p-0.5 flex items-center">
                    <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* Mobile App Header */}
              <div className="px-4 py-2.5 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{current.icon}</span>
                  <div>
                    <div className="text-[11px] font-black text-white leading-tight">{current.badge}</div>
                    <div className="text-[9px] font-mono text-emerald-400">RUNNING • 24/7</div>
                  </div>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono font-bold text-emerald-400">
                  {current.impact}
                </div>
              </div>

              {/* Mobile App Animated Body — Fixed height flex container */}
              <div className="p-3.5 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, y: -10 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="flex-1 flex flex-col justify-between space-y-2.5"
                  >
                    {/* Visual Screen 1: MARKETING AI */}
                    {current.id === "marketing" && (
                      <div className="space-y-2.5">
                        {/* Auto Post Generator Card with Animated Glow & Reach Bar */}
                        <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 shadow-md relative overflow-hidden">
                          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                              <span className="text-white font-mono">AUTONOMOUS CAMPAIGN</span>
                            </span>
                            <span className="text-emerald-400 font-mono text-[9px] bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                              AUTOPILOT
                            </span>
                          </div>
                          
                          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white text-lg shadow-md"
                            >
                              📢
                            </motion.div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-black text-white truncate">Launch New Product Campaign</div>
                              <div className="text-[10px] text-slate-400 truncate">#AI #Automation #Growth</div>
                            </div>
                          </div>

                          {/* Animated Reach Growth Bar */}
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-[9.5px] font-bold text-slate-300">
                              <span>Audience Reach Expansion</span>
                              <span className="text-emerald-400 font-mono">+38% Traffic</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-800">
                              <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-sm"
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[9.5px] font-mono text-slate-400">Status: Scheduled 24/7</span>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="button"
                              className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black shadow-md flex items-center gap-1 cursor-pointer"
                            >
                              <span>Auto-Publish</span>
                              <span className="animate-pulse">⚡</span>
                            </motion.button>
                          </div>
                        </div>

                        {/* Visual Growth Metric Chart Pill */}
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">📈</span>
                            <div>
                              <div className="text-[11px] font-black text-white">48 Qualified Leads</div>
                              <div className="text-[9px] font-mono text-emerald-400">85% Less Manual Work</div>
                            </div>
                          </div>
                          <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/20 px-2.5 py-0.5 rounded-md border border-emerald-500/40 animate-pulse">
                            LIVE ✓
                          </span>
                        </motion.div>
                      </div>
                    )}

                    {/* Visual Screen 2: SALES AI — Professional Animated Sales Pipeline */}
                    {current.id === "sales" && (
                      <div className="space-y-2.5">
                        {/* Live Lead Inbound Alert */}
                        <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 shadow-md relative overflow-hidden">
                          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                              <span className="text-white font-mono uppercase">INBOUND LEAD INBOX</span>
                            </span>
                            <span className="text-teal-400 font-mono text-[9px] bg-teal-500/20 px-2 py-0.5 rounded-full border border-teal-500/30">
                              2.1s QUALIFIED
                            </span>
                          </div>

                          {/* High-Intent Prospect Card */}
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2.5">
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shadow-sm"
                              >
                                <svg className="w-4.5 h-4.5 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                              </motion.div>
                              <div>
                                <div className="text-xs font-black text-white">High-Intent Enterprise Lead</div>
                                <div className="text-[9.5px] text-slate-400">Enterprise AI Plan • WhatsApp Inquiry</div>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono font-black text-teal-400 bg-teal-500/20 px-2 py-1 rounded-lg border border-teal-500/30">
                              98/100
                            </span>
                          </motion.div>

                          {/* Auto Proposal Generation Progress */}
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-[9.5px] font-bold text-slate-300">
                              <span className="flex items-center gap-1">
                                <span>📄 Proposal PDF Auto-Generated</span>
                              </span>
                              <span className="text-teal-400 font-mono">2.1s</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                              <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-400"
                              />
                            </div>
                          </div>

                          {/* Action Button */}
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            className="w-full py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-xs font-black shadow-md flex items-center justify-center gap-1.5 cursor-pointer border border-teal-400/30"
                          >
                            <span>Send Quotation via WhatsApp</span>
                            <span>📲</span>
                          </motion.button>
                        </div>

                        {/* Revenue Result Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-between shadow-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🎉</span>
                            <div>
                              <div className="text-[11px] font-black text-white">₹3.8L Revenue Secured</div>
                              <div className="text-[9px] font-mono text-teal-400">Speed-to-lead: 2.1s (Instant Close)</div>
                            </div>
                          </div>
                          <span className="text-[10px] font-extrabold text-teal-400 bg-teal-500/20 px-2.5 py-1 rounded-md border border-teal-500/40">
                            CLOSED ✓
                          </span>
                        </motion.div>
                      </div>
                    )}

                    {/* Visual Screen 3: EXACT WHATSAPP CLONE CHAT UI/UX */}
                    {current.id === "whatsapp" && (
                      <div className="space-y-2.5">
                        <div className="rounded-2xl bg-[#0b141a] border border-slate-800 shadow-md overflow-hidden flex flex-col">
                          {/* 2. WhatsApp Chat Message Body with Pattern */}
                          <div className="p-2.5 space-y-2 bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px] bg-[#0b141a]">
                            {/* Date Pill */}
                            <div className="flex justify-center">
                              <span className="px-2 py-0.5 rounded-md bg-[#1f2c34] text-[8.5px] font-bold text-slate-400 uppercase tracking-wider">
                                TODAY
                              </span>
                            </div>

                            {/* Incoming User Message (Right Green Bubble #005c4b) */}
                            <motion.div
                              initial={{ opacity: 0, x: 12 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="p-2 rounded-xl rounded-tr-xs bg-[#005c4b] text-white text-[11px] font-medium max-w-[85%] ml-auto shadow-xs"
                            >
                              <div>Need product details, pricing & live demo</div>
                              <div className="text-[8px] text-emerald-200 text-right mt-0.5 font-mono flex items-center justify-end gap-1">
                                <span>9:41 AM</span>
                                <span className="text-sky-300 font-bold">✓✓</span>
                              </div>
                            </motion.div>

                            {/* Outgoing AI Chatbot Message (Left Dark Bubble #202c33) */}
                            <motion.div
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                              className="p-2 rounded-xl rounded-tl-xs bg-[#202c33] text-slate-100 text-[11px] font-medium max-w-[90%] shadow-xs space-y-1.5 border border-slate-700/50"
                            >
                              <div className="text-[9px] font-bold text-[#00a884]">~ Agaran AI Bot</div>
                              <div>Hello! 👋 Here is your instant product catalog & pricing package:</div>

                              {/* Embedded WhatsApp Attachment Document */}
                              <div className="p-1.5 rounded-lg bg-[#111b21] border border-slate-700/60 flex items-center justify-between">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="text-sm">📄</span>
                                  <div className="min-w-0">
                                    <div className="text-[9.5px] font-bold text-white truncate">Product_Catalog_&_Pricing.pdf</div>
                                    <div className="text-[8px] text-slate-400 font-mono">1.2 MB • PDF</div>
                                  </div>
                                </div>
                                <span className="text-[8.5px] font-bold text-[#00a884] bg-[#00a884]/20 px-1.5 py-0.5 rounded-md">View</span>
                              </div>

                              {/* Quick Reply WhatsApp Action Buttons */}
                              <div className="grid grid-cols-2 gap-1 pt-0.5">
                                <div className="py-1 px-1.5 rounded-lg bg-[#111b21] border border-[#00a884]/40 text-[#00a884] text-[9px] font-bold text-center truncate">
                                  💳 Pricing & Plans
                                </div>
                                <div className="py-1 px-1.5 rounded-lg bg-[#00a884] text-white text-[9px] font-bold text-center truncate shadow-xs">
                                  📲 Book Demo
                                </div>
                              </div>

                              <div className="text-[8px] text-slate-400 text-right font-mono">9:41 AM</div>
                            </motion.div>
                          </div>

                          {/* 3. WhatsApp Bottom Input Bar */}
                          <div className="px-2 py-1.5 bg-[#1f2c34] border-t border-slate-800 flex items-center gap-1.5">
                            <div className="flex-1 bg-[#2a3942] rounded-full px-2.5 py-1 flex items-center justify-between text-slate-400 text-xs">
                              <div className="flex items-center gap-1.5">
                                <span>😀</span>
                                <span className="text-slate-400 text-[9.5px]">Type a message...</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                                <span>📎</span>
                                <span>📷</span>
                              </div>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-[#00a884] text-white flex items-center justify-center text-[10px] shadow-sm">
                              ➤
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual Screen 4: FOUNDER EXECUTIVE STRATEGIC AI */}
                    {current.id === "founder" && (
                      <div className="space-y-2.5">
                        {/* Live Founder Executive Dashboard Box */}
                        <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 shadow-md relative overflow-hidden">
                          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-white font-mono uppercase">FOUNDER BRIEFING</span>
                            </span>
                            <span className="text-emerald-400 font-mono text-[9px] bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                              3.8x ROI
                            </span>
                          </div>

                          {/* MRR & Growth Rate */}
                          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                            <div>
                              <div className="text-[9px] text-slate-400 uppercase font-mono">Monthly Recurring Revenue</div>
                              <div className="text-base font-black text-white flex items-center gap-1.5">
                                <span>₹14.8L</span>
                                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded-md">
                                  ▲ +42%
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-[9px] text-slate-400 font-mono uppercase">Net Margin</div>
                              <div className="text-xs font-black text-emerald-400">34% (Safe)</div>
                            </div>
                          </div>

                          {/* Executive Growth Bar Chart */}
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-[9px] font-bold text-slate-400">
                              <span>7-Day Revenue Velocity</span>
                              <span className="text-emerald-400 font-mono">18 Mo Runway</span>
                            </div>
                            <div className="flex items-end gap-1.5 h-8 pt-1 px-1 bg-slate-950 rounded-lg border border-slate-800">
                              {[35, 55, 45, 75, 65, 90, 100].map((h, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ height: "10%" }}
                                  animate={{ height: `${h}%` }}
                                  transition={{ duration: 0.8, delay: i * 0.06, ease: "easeOut" }}
                                  className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-600 via-teal-500 to-emerald-400 opacity-90"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Strategic AI Recommendation Chip & Approve Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2 shadow-xs"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <motion.span
                                animate={{ scale: [1, 1.25, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-sm"
                              >
                                💡
                              </motion.span>
                              <div>
                                <div className="text-xs font-black text-white">Scale High-ROI Channel</div>
                                <div className="text-[9px] text-emerald-400 font-mono">+₹3.2L Projected Growth</div>
                              </div>
                            </div>
                            <span className="text-[9px] font-black text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                              HIGH ROI
                            </span>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            className="w-full py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black shadow-md flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <span>Approve AI Growth Strategy</span>
                            <span>🚀</span>
                          </motion.button>
                        </motion.div>
                      </div>
                    )}

                    {/* Sleek Bottom Live Execution Micro-Pill (Fills bottom empty space) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between text-[9.5px] font-medium text-slate-400 shadow-2xs"
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
                        <span className="text-slate-300 font-bold truncate">
                          {current.id === "marketing" && "⚡ 1-Click Multi-Channel Sync • Insta, LinkedIn, WA"}
                          {current.id === "sales" && "📄 Auto Proposal Dispatched • WhatsApp Synced"}
                          {current.id === "whatsapp" && "💬 WhatsApp AI: 100% Instant Resolution • Zero Delay"}
                          {current.id === "founder" && "📊 Daily Automated Executive Briefing at 9 AM"}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase ml-1 flex-shrink-0">ACTIVE</span>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom iOS Home Indicator Bar */}
                <div className="pt-2 flex justify-center z-30">
                  <div className="w-28 h-1 rounded-full bg-white/40" />
                </div>
              </div>

              {/* Mobile App Navigation Dock */}
              <div className="px-2 py-1.5 bg-slate-950 border-t border-slate-800 grid grid-cols-4 gap-0.5 text-center">
                {agents.map((a, idx) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => setActiveAgent(idx)}
                    className={`py-1 rounded-xl flex flex-col items-center gap-0.5 text-[9px] font-bold transition-all ${
                      activeAgent === idx
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "text-slate-500 hover:text-[#059669]"
                    }`}
                  >
                    <span className="text-xs">{a.icon}</span>
                    <span className="truncate max-w-full">{a.label}</span>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ── Mobile Agent Selector Dots (visible < 640px) ── */}
      <div className="flex sm:hidden items-center justify-center gap-2 pb-4 pt-1 border-t border-emerald-100">
        {agents.map((agent, idx) => {
          const isActive = idx === activeAgent;
          return (
            <button
              key={agent.id}
              type="button"
              onClick={() => setActiveAgent(idx)}
              className={`px-3 py-1 rounded-full text-[10px] font-black transition-all flex items-center gap-1 border ${
                isActive
                  ? "bg-emerald-600 text-white border-emerald-500 shadow-xs"
                  : "bg-white text-slate-600 border-slate-200"
              }`}
            >
              <span>{agent.icon}</span>
              <span>{agent.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

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
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProductStage({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cardInView = useInView(ref, { once: false, amount: 0.15 });

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: false, amount: 0.2 });

  const descRef = useRef<HTMLDivElement>(null);
  const descInView = useInView(descRef, { once: false, amount: 0.2 });

  const themeConfig = {
    "coaching-platform": {
      bg: "bg-white",
      border: "border-blue-200/80 hover:border-blue-400/80",
      headerGradient: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]",
      descBg: "bg-blue-50/70 border-blue-200/90",
      topLine: "from-[#2563EB] to-[#0284C7]",
      tileBg: "bg-blue-50/50 hover:bg-blue-100/60 border border-blue-100",
      noteBg: "bg-blue-50 text-[#2563EB] border-blue-200",
      dotBg: "bg-[#2563EB]",
      ctaBg: "bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] hover:from-[#1e40af] hover:to-[#0369a1]",
      metricText: "text-[#2563EB]",
      shadow: "shadow-[0_12px_40px_rgba(37,99,235,0.08)]",
    },
    "automation-suite": {
      bg: "bg-white",
      border: "border-emerald-200/80 hover:border-emerald-400/80",
      headerGradient: "from-[#047857] via-[#059669] to-[#0D9488]",
      descBg: "bg-emerald-50/70 border-emerald-200/90",
      topLine: "from-[#059669] to-[#0D9488]",
      tileBg: "bg-emerald-50/50 hover:bg-emerald-100/60 border border-emerald-100",
      noteBg: "bg-emerald-50 text-[#059669] border-emerald-200",
      dotBg: "bg-[#059669]",
      ctaBg: "bg-gradient-to-r from-[#047857] via-[#059669] to-[#0D9488] hover:from-[#065f46] hover:to-[#0f766e]",
      metricText: "text-[#059669]",
      shadow: "shadow-[0_12px_40px_rgba(16,185,129,0.08)]",
    },
  };

  const cardTheme = themeConfig[product.id as keyof typeof themeConfig];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative rounded-3xl border ${cardTheme.border} ${cardTheme.bg} overflow-hidden ${cardTheme.shadow} transition-all duration-500 hover:-translate-y-1.5 flex flex-col`}
    >
      {/* ── Cinematic Gradient Header ── */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`relative bg-gradient-to-br ${cardTheme.headerGradient} px-6 pt-7 pb-12 sm:px-9 sm:pt-9 sm:pb-14 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.22),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-extrabold uppercase tracking-[0.12em] bg-white/15 text-white border border-white/25 backdrop-blur-sm shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {product.badge}
          </span>
        </div>

        {/* Product Name & Headline */}
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-black text-white tracking-[-0.03em] leading-[1.18]">
            {product.name}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm font-bold mt-1 tracking-wide">
            {product.headline}
          </p>
        </div>

        {/* Decorative Rings */}
        <div className="absolute bottom-[-36px] right-[-36px] w-[140px] h-[140px] rounded-full border-[28px] border-white/10 pointer-events-none" />
        <div className="absolute bottom-[-10px] right-[40px] w-[80px] h-[80px] rounded-full border-[14px] border-white/8 pointer-events-none" />
      </motion.div>

      {/* ── Floating Description Card Badge ── */}
      <motion.div
        ref={descRef}
        initial={{ opacity: 0, y: 16 }}
        animate={descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        className="relative -mt-6 mx-5 sm:mx-8 z-10"
      >
        <div className={`rounded-2xl ${cardTheme.descBg} border p-4 sm:p-5 shadow-lg`}>
          <div className={`h-1 bg-gradient-to-r ${cardTheme.topLine} rounded-t-2xl -mx-5 -mt-5 mb-3.5`} />
          <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.75] font-normal text-justify">
            {product.description}
          </p>
        </div>
      </motion.div>

      {/* ── Card Body Container (Full-Width 3D Visual Stage for Both Products) ── */}
      <div className="p-5 sm:p-8 pt-6 sm:pt-7 flex-1">
        <div className="w-full flex flex-col items-center">
          {/* Centered 3D Interactive Visual Stage */}
          <div className="w-full mb-6">
            {product.id === "coaching-platform" ? (
              <LMS3DVisual />
            ) : (
              <Automation3DVisual />
            )}
          </div>

          {/* Bottom CTA & Key Metrics Bar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-200/80 bg-gradient-to-r from-slate-50/60 via-white to-slate-50/60 p-4 sm:p-5 rounded-2xl border">
            <a
              href={product.href}
              className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full ${cardTheme.ctaBg} text-white text-xs sm:text-[14px] font-black shadow-md hover:shadow-lg transition-all duration-200 group/btn`}
            >
              <span>{product.cta}</span>
              <span className="group-hover/btn:translate-x-1.5 transition-transform duration-200 text-sm">→</span>
            </a>

            <div className="flex items-center gap-4 sm:gap-8">
              <div className="text-right">
                <div className={`text-base sm:text-xl font-black ${cardTheme.metricText}`}>{product.metric1.val}</div>
                <div className="text-[10px] sm:text-[10.5px] font-extrabold text-slate-500 uppercase tracking-wider">{product.metric1.label}</div>
              </div>
              <div className="h-8 w-[1px] bg-slate-200/90" />
              <div className="text-right">
                <div className={`text-base sm:text-xl font-black ${cardTheme.metricText}`}>{product.metric2.val}</div>
                <div className="text-[10px] sm:text-[10.5px] font-extrabold text-slate-500 uppercase tracking-wider">{product.metric2.label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden border-t border-slate-100 py-8 sm:py-12 lg:py-14">
      {/* ── Soft Ambient Glow Blobs ── */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[300px] bg-sky-100/40 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Light Geometric Dot Grid ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35 pointer-events-none" />

      <Container as="div">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* ── Section Header — Ultra-Clean, Zero-Sentence High-Impact UI/UX ── */}
          <div className="relative text-center max-w-4xl mx-auto mb-8 sm:mb-10">
            {/* Category Badge Pill */}
            <Reveal delay={0} y={14}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-[11px] font-black text-[#2563EB] tracking-[0.18em] uppercase mb-3.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                PRODUCTS BUILT BY AGARAN
              </div>
            </Reveal>

            {/* Main Title */}
            <Reveal delay={0.08} y={20}>
              <h2 className="text-[2.1rem] sm:text-[3rem] lg:text-[3.5rem] font-black text-[#0F172A] tracking-[-0.035em] leading-[1.12]">
                Education & Automation{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Platforms
                </span>
              </h2>
            </Reveal>

            {/* Punchy Capability Highlights — ZERO SENTENCES */}
            <Reveal delay={0.16} y={16}>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-[13px] font-black text-[#0F172A]">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>Coaching & LMS OS</span>
                </div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-[13px] font-black text-[#0F172A]">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>Autonomous AI Workforce</span>
                </div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-[13px] font-black text-[#0F172A]">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>24/7 Operations Engine</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── 3D Product Stages — smooth scroll reveal & refresh ── */}
          <div className="relative space-y-6 sm:space-y-8 lg:space-y-10">
            {products.map((product, index) => (
              <ProductStage key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
