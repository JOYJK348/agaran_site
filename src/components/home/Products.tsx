"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
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
        iconBg: "bg-purple-100 text-purple-600 border border-purple-200",
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
        iconBg: "bg-emerald-100 text-emerald-600 border border-emerald-200",
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
        iconBg: "bg-amber-100 text-amber-600 border border-amber-200",
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
        iconBg: "bg-sky-100 text-sky-600 border border-sky-200",
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
        iconBg: "bg-rose-100 text-rose-600 border border-rose-200",
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
    badgeColor: "#0284C7",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200/90",
    name: "AI Agents for Modern Businesses",
    headline: "Autonomous Digital Workforce for Modern Startups & Growing Teams",
    description: (
      <>
        <strong className="font-extrabold text-[#0F172A]">Intelligent AI agents.</strong> Our AI agents work like a <strong className="font-extrabold text-[#0284C7]">digital team</strong> that supports marketing, sales, operations, customer support, and everyday business tasks automatically.
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
        iconBg: "bg-blue-100 text-[#2563EB] border border-blue-200",
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
        iconBg: "bg-sky-100 text-[#0284C7] border border-sky-200",
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
        iconBg: "bg-emerald-100 text-emerald-700 border border-emerald-200",
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
        iconBg: "bg-amber-100 text-amber-700 border border-amber-200",
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
        iconBg: "bg-purple-100 text-purple-700 border border-purple-200",
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
        iconBg: "bg-indigo-100 text-indigo-700 border border-indigo-200",
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

/* ── Ultra-Rich Interactive LMS Dashboard & Portal Simulation (Pure Light Theme) ── */
function LMS3DVisual() {
  const [activeTab, setActiveTab] = useState<"kpi" | "exam" | "lectures" | "academics">("kpi");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  /* Render animated SVG icons for LMS module tabs */
  const renderLmsIcon = (id: string, isActive: boolean, color: string) => {
    const cls = "w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300";
    const gradId = `grad-lms-${id}-${isActive ? 'a' : 'i'}`;
    const activeGrad = (
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#3B82F6;#10B981;${color}`} dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#3B82F6">
            <animate attributeName="stop-color" values={`#3B82F6;${color};#8B5CF6;#3B82F6`} dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
    );
    const inactiveGrad = (
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.75" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    );
    const stroke = `url(#${gradId})`;
    const sw = isActive ? 2.2 : 1.8;

    switch (id) {
      case "kpi":
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
            {isActive ? activeGrad : inactiveGrad}
            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke={stroke} />
            {isActive && <circle cx="12" cy="14" r="1.5" fill={color} opacity="0.8"><animate attributeName="r" values="1.5;2.5;1.5" dur="1.5s" repeatCount="indefinite" /></circle>}
          </svg>
        );
      case "exam":
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
            {isActive ? activeGrad : inactiveGrad}
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke={stroke} />
            {isActive && <line x1="9" y1="12" x2="15" y2="12" stroke={color} strokeWidth="3"><animate attributeName="x2" values="9;15;9" dur="2s" repeatCount="indefinite" /></line>}
          </svg>
        );
      case "lectures":
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
            {isActive ? activeGrad : inactiveGrad}
            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke={stroke} />
          </svg>
        );
      case "academics":
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
            {isActive ? activeGrad : inactiveGrad}
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke={stroke} />
          </svg>
        );
      default:
        return null;
    }
  };

  const tabs: { id: "kpi" | "exam" | "lectures" | "academics"; label: string; color: string }[] = [
    { id: "kpi", label: "Admissions & Leads", color: "#2563EB" },
    { id: "exam", label: "Exam & Assessment", color: "#059669" },
    { id: "lectures", label: "Live & Recorded Hub", color: "#7C3AED" },
    { id: "academics", label: "Academics & Batches", color: "#7C3AED" },
  ];

  // Auto-cycle through LMS tabs every 5 seconds
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const order: ("kpi" | "exam" | "lectures" | "academics")[] = ["kpi", "exam", "lectures", "academics"];
        const nextIdx = (order.indexOf(prev) + 1) % order.length;
        return order[nextIdx];
      });
    }, 3500);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) startAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying, startAutoPlay]);

  const handleTabClick = (tabId: "kpi" | "exam" | "lectures" | "academics") => {
    setActiveTab(tabId);
    setIsAutoPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setTimeout(() => {
      setIsAutoPlaying(true);
      startAutoPlay();
    }, 8000);
  };

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-br from-white via-slate-50/70 to-blue-50/40 border border-blue-200/90 shadow-[0_20px_60px_rgba(37,99,235,0.07)] overflow-hidden flex flex-col justify-between group/visual text-[#0F172A]">
      {/* ── Top Ambient Light Mesh ── */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      {/* ── Top Application Titlebar (Pure Crisp Light) ── */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-2 shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#0284C7] flex items-center justify-center text-white text-[11px] font-black shadow-sm">
            AG
          </div>
          <div>
            <div className="text-[11.5px] sm:text-[12px] font-black tracking-tight leading-none text-[#0F172A]">
              Agaran Institute OS
            </div>
            <div className="text-[9px] sm:text-[9.5px] text-[#64748B] mt-0.5 font-medium">
              Enterprise Coaching & Learning Hub
            </div>
          </div>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9.5px] sm:text-[10px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            2,450 Students Active
          </span>
        </div>
      </div>

      {/* ── Visual Module Showcase Strip — Matching AI Agents Style (No Scrollbar) ── */}
      <div className="relative z-10 px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-b from-slate-50/90 to-white/60 border-b border-slate-200/40">
        {/* Continuous animated connection line across all tabs */}
        <div className="absolute left-[12%] right-[12%] top-1/2 -translate-y-1/2 h-[2px] rounded-full overflow-hidden bg-slate-200/50 z-0">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${tabs[0].color}, ${tabs[1].color}, ${tabs[2].color}, ${tabs[3].color})` }}
            animate={{ x: ['-100%', '0%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-between gap-1">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className="flex flex-col items-center cursor-pointer flex-1 group/tab"
                animate={isActive ? { y: -2 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border-2 mb-1.5 transition-all duration-300"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${tab.color}25, ${tab.color}08)`
                      : `linear-gradient(135deg, ${tab.color}10, white)`,
                    borderColor: isActive ? tab.color : `${tab.color}30`,
                    boxShadow: isActive
                      ? `0 10px 25px -5px ${tab.color}40, 0 4px 10px -3px ${tab.color}20`
                      : `0 2px 6px ${tab.color}08`,
                  }}
                  animate={isActive ? { y: -4, scale: 1.05 } : { y: 0, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                >
                  <motion.div
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    animate={isActive ? { y: [0, -2, 0] } : { y: 0 }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {renderLmsIcon(tab.id, isActive, tab.color)}
                  </motion.div>

                  {/* Sleek active dot indicator at top right */}
                  {isActive && (
                    <motion.span
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white flex items-center justify-center shadow-sm"
                      style={{ background: tab.color }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                    </motion.span>
                  )}
                </motion.div>

                {/* Label */}
                <motion.span
                  className="text-[7.5px] sm:text-[8.5px] font-bold text-center leading-tight max-w-[65px] sm:max-w-[85px]"
                  style={{ color: isActive ? tab.color : '#94A3B8' }}
                  animate={isActive ? { opacity: 1 } : { opacity: 0.7 }}
                >
                  {tab.label}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ── Main Dynamic Stage Content ── */}
      <div className="relative z-10 p-3.5 sm:p-4 flex-1 flex flex-col justify-center">
        {/* TAB 1: Admissions & Student Lead Management Pipeline (Clean & Spacious) */}
        {activeTab === "kpi" && (
          <motion.div
            key="kpi"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2.5"
          >
            {/* Top 2 Clean Big Metric Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all">
                <div className="text-[10.5px] font-bold text-[#64748B]">Total Inbound Leads</div>
                <div className="text-2xl sm:text-3xl font-black text-[#0F172A] mt-0.5 tracking-tight">640</div>
                <div className="text-[10px] text-emerald-600 font-bold mt-1">↑ +28% Conversion</div>
              </div>

              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all">
                <div className="text-[10.5px] font-bold text-[#64748B]">Confirmed Admissions</div>
                <div className="text-2xl sm:text-3xl font-black text-[#2563EB] mt-0.5 tracking-tight">184</div>
                <div className="text-[10px] text-emerald-600 font-bold mt-1">✓ 92% Target Filled</div>
              </div>
            </div>

            {/* Inbound Lead Live Queue (Clean Spacious List) */}
            <div className="bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between text-[11px] font-black text-[#0F172A] mb-2.5">
                <span>Recent Student Enrollments</span>
                <span className="text-[9.5px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full font-bold border border-blue-200">
                  Auto SMS Synced
                </span>
              </div>

              <div className="space-y-2 text-[10px]">
                <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-emerald-950">Siddharth V. (Advanced Program)</div>
                    <div className="text-emerald-700 text-[9px]">Admission Confirmed • ₹45,000 Paid</div>
                  </div>
                  <span className="text-[9px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md font-extrabold">Enrolled</span>
                </div>

                <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-blue-950">Ananya R. (Core Foundation Batch)</div>
                    <div className="text-blue-700 text-[9px]">Counseling Scheduled Today 4:30 PM</div>
                  </div>
                  <span className="text-[9px] text-blue-800 bg-blue-100 px-2 py-0.5 rounded-md font-extrabold">Hot Lead</span>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-amber-950">Karthik M. (Comprehensive Track)</div>
                    <div className="text-amber-700 text-[9px]">Score: 96/100 • Offer SMS Sent</div>
                  </div>
                  <span className="text-[9px] text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md font-extrabold">Pending</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Live Exam & Assessment Portal (Hybrid Online & Offline Tests) */}
        {activeTab === "exam" && (
          <motion.div
            key="exam"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2.5"
          >
            {/* Top Hybrid Mode Selector / Header */}
            <div className="flex items-center justify-between text-[10px] font-black pb-1 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[#0F172A]">Hybrid Examination Engine</span>
              </div>
              <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full font-bold border border-blue-200 text-[9px] sm:text-[9.5px]">
                Online & Offline
              </span>
            </div>

            {/* 2 Dual Mode Cards: Online & Offline Assessment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Mode 1: Online Mode */}
              <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5">
                    <span className="text-[9.5px] sm:text-[10px] font-extrabold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100 whitespace-nowrap">
                      🖥️ Online
                    </span>
                    <span className="text-[8.5px] sm:text-[9px] font-black text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200 whitespace-nowrap shrink-0 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-rose-500 animate-ping" />
                      ⏱️ 42:15 Left
                    </span>
                  </div>

                  <h5 className="text-[12px] font-black text-[#0F172A] leading-snug">
                    Comprehensive Grand Mock #08
                  </h5>
                  <p className="text-[9.5px] text-[#64748B] mt-0.5 font-medium">
                    60 Questions • 48 Answered (80%)
                  </p>

                  {/* Visual Progress Bar */}
                  <div className="w-full bg-slate-100 rounded-full h-1 mt-2 overflow-hidden">
                    <motion.div
                      className="bg-[#2563EB] h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[9.5px]">
                  <span className="font-extrabold text-[#0F172A]">Score: 194 / 200</span>
                  <span className="font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 text-[8.5px]">
                    Rank #01 (Top 1%)
                  </span>
                </div>
              </div>

              {/* Mode 2: Offline Classroom Paper */}
              <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5">
                    <span className="text-[9.5px] sm:text-[10px] font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 whitespace-nowrap">
                      📝 Offline
                    </span>
                    <span className="text-[8.5px] sm:text-[9px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 whitespace-nowrap shrink-0">
                      ✓ 186 Graded
                    </span>
                  </div>

                  <h5 className="text-[12px] font-black text-[#0F172A] leading-snug">
                    Classroom Diagnostic Exam
                  </h5>
                  <p className="text-[9.5px] text-[#64748B] mt-0.5 font-medium">
                    Physical Paper to Cloud Sync in 3.2s
                  </p>

                  {/* Visual Progress Bar */}
                  <div className="w-full bg-slate-100 rounded-full h-1 mt-2 overflow-hidden">
                    <motion.div
                      className="bg-emerald-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[9.5px]">
                  <span className="font-extrabold text-[#0F172A]">99.8% Accuracy</span>
                  <span className="font-black text-[#2563EB] bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200 text-[8.5px]">
                    SMS Sent
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Unified Evaluation Bar */}
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 border border-blue-200/80 flex flex-wrap items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[9.5px] sm:text-[10px] font-black text-[#0F172A]">
                  Unified Ranklist: Online & Offline Students Synced Instantly
                </span>
              </div>
              <span className="text-[8.5px] font-black text-[#2563EB] bg-white px-2 py-0.5 rounded shadow-2xs border border-blue-100">
                100% Automated
              </span>
            </div>
          </motion.div>
        )}

        {/* TAB 3: Pure Light Live Classroom & Video Player Studio */}
        {activeTab === "lectures" && (
          <motion.div
            key="lectures"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2.5"
          >
            {/* Pure Light Video Studio Canvas */}
            <div className="bg-gradient-to-br from-blue-50/90 via-sky-50/60 to-indigo-50/80 rounded-2xl p-3 sm:p-3.5 border border-blue-200/90 shadow-sm text-[#0F172A]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                  <span className="text-[11px] font-extrabold text-[#0F172A]">
                    Live Broadcast: Core & Advanced Coaching Hub
                  </span>
                </div>
                <span className="text-[9.5px] font-black text-[#2563EB] bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs">
                  1080p HD Studio
                </span>
              </div>

              {/* Whiteboard / Video simulation banner (Pure Light Theme) */}
              <div className="h-20 sm:h-24 rounded-xl bg-white/90 border border-blue-100 flex flex-col justify-center items-center p-2.5 text-center shadow-xs">
                <div className="text-[11.5px] sm:text-xs font-black text-[#0F172A]">
                  Module 04: Core Concepts & Applied Problem Solving
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-[#2563EB] font-bold mt-0.5">
                  Instructor: Dr. Arvind S. (Senior Academic Head)
                </div>
                {/* Audio Equalizer */}
                <div className="flex items-center gap-1 mt-1.5">
                  {[4, 14, 8, 18, 10, 16, 6, 12, 8].map((h, idx) => (
                    <motion.span
                      key={idx}
                      className="w-1 bg-[#2563EB] rounded-full"
                      animate={{ height: [`${h}px`, `${h * 1.4}px`, `${h * 0.6}px`, `${h}px`] }}
                      transition={{ repeat: Infinity, duration: 1 + idx * 0.1, ease: "easeInOut" }}
                    />
                  ))}
                </div>
              </div>

              {/* Real-time Automated Attendance Tracking Bar */}
              <div className="mt-2 p-2 rounded-xl bg-white/80 border border-emerald-200/90 flex items-center justify-between text-[9.5px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-extrabold text-emerald-950">
                    Auto Attendance: 184/186 Present (98.9%)
                  </span>
                </div>
                <span className="text-[8.5px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  ✓ Watch-Time Logged
                </span>
              </div>

              {/* Pre-recorded library status */}
              <div className="flex items-center justify-between text-[9.5px] text-[#475569] mt-2 font-semibold">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  48 Pre-Recorded Lecture Vault Ready
                </span>
                <span className="text-[#2563EB] font-extrabold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200 text-[8.5px]">
                  Auto-Synced
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: Academics & Batch Operations Hub */}
        {activeTab === "academics" && (
          <motion.div
            key="academics"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2.5"
          >
            {/* Top Academics Strip */}
            <div className="flex items-center justify-between text-[10px] font-black pb-1 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[#0F172A]">Academics & Batch Operations</span>
              </div>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold border border-emerald-200 text-[9px] sm:text-[9.5px]">
                18 Batches Live
              </span>
            </div>

            {/* Live Batch Timetable Grid */}
            <div className="bg-white rounded-2xl p-3 border border-slate-200/90 shadow-sm space-y-2 text-[10px]">
              {/* Batch 1 */}
              <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-blue-950 flex items-center gap-1.5">
                    <span>Advanced Masterclass (Batch A)</span>
                    <span className="text-[8px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-black">Live</span>
                  </div>
                  <div className="text-blue-700 text-[9px] mt-0.5">09:00 AM - 11:00 AM • Dr. Arvind S. • Room 402</div>
                </div>
                <span className="text-[8.5px] font-black text-[#2563EB] bg-white px-2 py-0.5 rounded shadow-2xs border border-blue-100">
                  Room 402
                </span>
              </div>

              {/* Batch 2 */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-[#0F172A]">Core Foundation Program (Batch B)</div>
                  <div className="text-[#64748B] text-[9px] mt-0.5">11:30 AM - 01:30 PM • Prof. Meera K. • Studio 01</div>
                </div>
                <span className="text-[8.5px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                  Next in 15m
                </span>
              </div>

              {/* Course Syllabus Progress Bars */}
              <div className="pt-1.5 border-t border-slate-100 grid grid-cols-2 gap-2 text-[9px]">
                <div>
                  <div className="flex justify-between font-bold text-[#0F172A] mb-0.5">
                    <span>Core Foundation Track</span>
                    <span className="text-[#2563EB] font-black">82% (14/18 Modules)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                    <motion.div
                      className="bg-[#2563EB] h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-[#0F172A] mb-0.5">
                    <span>Advanced Skill Track</span>
                    <span className="text-emerald-600 font-black">75% (12/16 Modules)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                    <motion.div
                      className="bg-emerald-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* ── Bottom Telemetry Footer Strip (Crisp Light Theme) ── */}
      <div className="relative z-10 bg-slate-50/90 border-t border-slate-200/80 text-[#0F172A] px-4 py-2.5 flex items-center justify-between text-[10.5px] font-extrabold">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#0F172A]">Real-Time Cloud LMS Engine Active</span>
        </div>
        <span className="bg-blue-50 text-[#2563EB] border border-blue-200/80 px-2.5 py-0.5 rounded-md text-[9.5px] tracking-wide font-black">
          99.99% Uptime
        </span>
      </div>
    </div>
  );
}

/* ── 🚀 Immersive AI Agent Orchestration Visual — Top-Notch 3D Agent Animations ── */
function Automation3DVisual() {
  const [activeAgent, setActiveAgent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  /* Gradient-animated SVG icon for each agent — rich, meaningful, premium */
  const renderAgentIcon = (id: string, size: string, isActive: boolean, agentColor: string) => {
    const cls = `${size} transition-all duration-300`;
    const gradId = `grad-${id}-${isActive ? 'a' : 'i'}`;
    const activeGrad = (
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={agentColor}>
            <animate attributeName="stop-color" values={`${agentColor};#818CF8;#06B6D4;${agentColor}`} dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#818CF8">
            <animate attributeName="stop-color" values={`#818CF8;${agentColor};#F472B6;#818CF8`} dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
    );
    const inactiveGrad = (
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={agentColor} stopOpacity="0.75" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    );
    const grad = isActive ? activeGrad : inactiveGrad;
    const stroke = `url(#${gradId})`;
    const sw = isActive ? 2.2 : 1.8;

    switch (id) {
      case "marketing":
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
            {grad}
            <path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" stroke={stroke} />
            <path d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" stroke={stroke} />
            {isActive && <circle cx="14" cy="8" r="1.2" fill={agentColor} opacity="0.6"><animate attributeName="r" values="1.2;2;1.2" dur="1.5s" repeatCount="indefinite" /></circle>}
          </svg>
        );
      case "sales":
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
            {grad}
            <path d="M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" stroke={stroke} />
            <path d="M2.25 21a8.25 8.25 0 0115.5 0" stroke={stroke} />
            <path d="M17.25 9.75a2.25 2.25 0 110-4.5" stroke={stroke} />
            <path d="M21.75 21a6 6 0 00-4.5-5.8" stroke={stroke} />
            {isActive && <circle cx="19" cy="7.5" r="1" fill={agentColor} opacity="0.6"><animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite" /></circle>}
          </svg>
        );
      case "support":
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
            {grad}
            <path d="M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" stroke={stroke} />
            <circle cx="8.5" cy="12" r="0.8" fill={isActive ? agentColor : '#94A3B8'}>
              {isActive && <animate attributeName="r" values="0.8;1.3;0.8" dur="1.2s" repeatCount="indefinite" />}
            </circle>
            <circle cx="12" cy="12" r="0.8" fill={isActive ? agentColor : '#94A3B8'}>
              {isActive && <animate attributeName="r" values="0.8;1.3;0.8" dur="1.2s" begin="0.2s" repeatCount="indefinite" />}
            </circle>
            <circle cx="15.5" cy="12" r="0.8" fill={isActive ? agentColor : '#94A3B8'}>
              {isActive && <animate attributeName="r" values="0.8;1.3;0.8" dur="1.2s" begin="0.4s" repeatCount="indefinite" />}
            </circle>
          </svg>
        );
      case "ops":
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
            {grad}
            {/* Workflow process node paths */}
            <path d="M3.75 12h4.5m7.5 0h4.5M12 4.5v4.5m0 7.5v4.5" stroke={stroke} strokeDasharray={isActive ? "none" : "2 2"} />
            {/* Central hub node */}
            <circle cx="12" cy="12" r="3" stroke={stroke} fill={isActive ? `${agentColor}20` : "none"} />
            {/* 4 surrounding workflow nodes */}
            <circle cx="12" cy="3.75" r="1.75" stroke={stroke} fill={isActive ? `${agentColor}30` : "none"} />
            <circle cx="20.25" cy="12" r="1.75" stroke={stroke} fill={isActive ? `${agentColor}30` : "none"} />
            <circle cx="12" cy="20.25" r="1.75" stroke={stroke} fill={isActive ? `${agentColor}30` : "none"} />
            <circle cx="3.75" cy="12" r="1.75" stroke={stroke} fill={isActive ? `${agentColor}30` : "none"} />
            {isActive && (
              <>
                <circle cx="12" cy="12" r="1" fill={agentColor}>
                  <animate attributeName="r" values="1;2.2;1" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="8" cy="12" r="1" fill={agentColor}>
                  <animate attributeName="cx" values="3.75;12;20.25" dur="2s" repeatCount="indefinite" />
                </circle>
              </>
            )}
          </svg>
        );
      case "founder":
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
            {grad}
            <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75z" stroke={stroke} fill={isActive ? `${agentColor}15` : 'none'} />
            <path d="M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625z" stroke={stroke} fill={isActive ? `${agentColor}20` : 'none'} />
            <path d="M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" stroke={stroke} fill={isActive ? `${agentColor}25` : 'none'} />
            {isActive && <line x1="3" y1="21.5" x2="21" y2="21.5" stroke={agentColor} strokeWidth="1.5" opacity="0.3" />}
          </svg>
        );
      default:
        return null;
    }
  };

  const agents = [
    {
      id: "marketing",
      label: "Marketing Intelligence",
      color: "#2563EB",
      colorLight: "#DBEAFE",
      colorMid: "#93C5FD",
      tagline: "Researches your market & creates campaigns",
      stat: "+38%",
      statLabel: "Campaign Lift",
    },
    {
      id: "sales",
      label: "Lead & Sales",
      color: "#0284C7",
      colorLight: "#E0F2FE",
      colorMid: "#7DD3FC",
      tagline: "Qualifies leads & sends proposals automatically",
      stat: "98/100",
      statLabel: "Lead Score",
    },
    {
      id: "support",
      label: "Customer Success",
      color: "#059669",
      colorLight: "#D1FAE5",
      colorMid: "#6EE7B7",
      tagline: "Onboards customers & resolves queries 24/7",
      stat: "5.0/5.0",
      statLabel: "CSAT",
    },
    {
      id: "ops",
      label: "Operations & Workflow",
      color: "#D97706",
      colorLight: "#FEF3C7",
      colorMid: "#FCD34D",
      tagline: "Automates tasks, docs & cross-platform workflows",
      stat: "85%",
      statLabel: "Ops Automated",
    },
    {
      id: "founder",
      label: "Founder Intelligence",
      color: "#7C3AED",
      colorLight: "#EDE9FE",
      colorMid: "#C4B5FD",
      tagline: "Weekly insights, priorities & growth recommendations",
      stat: "+34.2%",
      statLabel: "MoM Growth",
    },
  ];

  // Keep AgentIcons for use in detail card
  const AgentIcons: Record<string, React.ReactNode> = Object.fromEntries(
    ["marketing", "sales", "support", "ops", "founder"].map(id => [
      id,
      renderAgentIcon(id, "w-5 h-5 sm:w-6 sm:h-6", true, agents.find(a => a.id === id)?.color || "#2563EB")
    ])
  );

  // Auto-cycle through agents
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % 5);
    }, 3500);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) startAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying, startAutoPlay]);

  const handleAgentClick = (idx: number) => {
    setActiveAgent(idx);
    setIsAutoPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setTimeout(() => {
      setIsAutoPlaying(true);
      startAutoPlay();
    }, 8000);
  };

  const current = agents[activeAgent];

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-br from-[#f8faff] via-white to-[#f0f7ff] border border-blue-200/80 shadow-[0_24px_80px_rgba(37,99,235,0.08)] overflow-hidden flex flex-col text-[#0F172A]">

      {/* ── Animated Background Mesh ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-[0.12]"
          style={{ background: `radial-gradient(circle, ${current.color}, transparent 70%)`, top: '20%', left: '30%' }}
          animate={{ scale: [1, 1.3, 1], x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full opacity-[0.08]"
          style={{ background: `radial-gradient(circle, ${current.color}, transparent 70%)`, bottom: '10%', right: '10%' }}
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_0.7px,transparent_0.7px)] [background-size:20px_20px] opacity-20" />
      </div>

      {/* ── Top Bar ── */}
      <div className="relative z-10 bg-white/90 backdrop-blur-lg px-4 py-2 border-b border-slate-200/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            className="w-7 h-7 rounded-xl flex items-center justify-center text-white text-[11px] font-black shadow-lg"
            style={{ background: `linear-gradient(135deg, ${current.color}, #2563EB)` }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            AI
          </motion.div>
          <div>
            <div className="text-[11.5px] font-black tracking-tight leading-none">Agaran AI Workforce</div>
            <div className="text-[8.5px] text-[#64748B] mt-0.5 font-medium">5 Autonomous Agents • Always Running</div>
          </div>
        </div>
        <motion.span
          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold border"
          style={{ background: current.colorLight, borderColor: current.colorMid, color: current.color }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: current.color }} />
          Live
        </motion.span>
      </div>

      {/* ── Visual Agent Showcase Strip — Rich Animated Icons ── */}
      <div className="relative z-10 px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-b from-slate-50/90 to-white/60 border-b border-slate-200/40">
        {/* Connection line running across all agents */}
        <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-[2px] rounded-full overflow-hidden bg-slate-200/50 z-0">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${agents[0].color}, ${agents[1].color}, ${agents[2].color}, ${agents[3].color}, ${agents[4].color})` }}
            animate={{ x: ['-100%', '0%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-between gap-1">
          {agents.map((agent, idx) => {
            const isActive = idx === activeAgent;
            return (
              <motion.button
                key={agent.id}
                type="button"
                onClick={() => handleAgentClick(idx)}
                className="flex flex-col items-center cursor-pointer flex-1 group/agent"
                animate={isActive ? { y: -2 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border-2 mb-1.5 transition-all duration-300"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${agent.colorLight}, white)`
                      : `linear-gradient(135deg, ${agent.colorLight}30, white)`,
                    borderColor: isActive ? agent.color : `${agent.color}35`,
                    boxShadow: isActive
                      ? `0 10px 25px -5px ${agent.color}40, 0 4px 10px -3px ${agent.color}20`
                      : `0 2px 6px ${agent.color}08`,
                  }}
                  animate={isActive ? { y: -4, scale: 1.05 } : { y: 0, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                >
                  <motion.div
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    animate={isActive ? { y: [0, -2, 0] } : { y: 0 }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {renderAgentIcon(agent.id, "w-5 h-5 sm:w-6 sm:h-6", isActive, agent.color)}
                  </motion.div>

                  {/* Sleek active dot indicator at top right */}
                  {isActive && (
                    <motion.span
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white flex items-center justify-center shadow-sm"
                      style={{ background: agent.color }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                    </motion.span>
                  )}
                </motion.div>

                {/* Label */}
                <motion.span
                  className="text-[7.5px] sm:text-[8.5px] font-bold text-center leading-tight max-w-[56px] sm:max-w-[72px]"
                  style={{ color: isActive ? agent.color : '#94A3B8' }}
                  animate={isActive ? { opacity: 1 } : { opacity: 0.7 }}
                >
                  {agent.label}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ── Rich Agent Detail Stage — Tall & Immersive ── */}
      <div className="relative z-10 px-3 sm:px-4 py-4 sm:py-5 flex-1 flex flex-col">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="w-full rounded-2xl border p-4 sm:p-5 backdrop-blur-sm flex-1 flex flex-col"
          style={{
            background: `linear-gradient(145deg, ${current.colorLight}60, white 40%, ${current.colorLight}30)`,
            borderColor: `${current.colorMid}70`,
            boxShadow: `0 8px 40px ${current.color}08, inset 0 1px 0 rgba(255,255,255,0.8)`,
          }}
        >
          {/* Agent Header Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <motion.div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center border shadow-md"
                style={{
                  background: `linear-gradient(145deg, ${current.colorLight}, white)`,
                  borderColor: `${current.colorMid}`,
                  color: current.color,
                }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-5 h-5">{AgentIcons[current.id]}</div>
              </motion.div>
              <div>
                <div className="text-[13px] sm:text-[14px] font-black leading-tight" style={{ color: current.color }}>
                  {current.label} Agent
                </div>
                <div className="text-[10px] text-[#64748B] font-medium mt-0.5">{current.tagline}</div>
              </div>
            </div>
            <motion.div
              className="text-right"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: 0.15 }}
            >
              <div className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: current.color }}>{current.stat}</div>
              <div className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-wider">{current.statLabel}</div>
            </motion.div>
          </div>

          {/* ── Rich Visual Action Scenes ── */}
          <div className="flex-1 flex flex-col gap-2.5">

            {/* Marketing: Rich analytics dashboard feel */}
            {activeAgent === 0 && (
              <>
                {/* Animated bar chart — taller */}
                <div className="bg-white/80 rounded-xl border border-slate-200/60 p-3 flex-1">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-black text-[#0F172A]">Campaign Performance Analytics</span>
                    <motion.span
                      className="text-[8.5px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: current.colorLight, color: current.color }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Multi-Channel Active
                    </motion.span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16 sm:h-20">
                    {[28, 45, 38, 62, 55, 78, 68, 88, 72, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-md"
                        style={{ background: `linear-gradient(to top, ${current.color}, ${current.colorMid})` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                </div>
                {/* KPI strip */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Topics Found", val: "14 Clusters" },
                    { label: "Campaigns Drafted", val: "6 Angles" },
                    { label: "Audience Reach", val: "12.4K" },
                  ].map((kpi, i) => (
                    <motion.div
                      key={kpi.label}
                      className="bg-white/80 rounded-xl border border-slate-200/50 p-2.5 text-center"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <div className="text-[12px] sm:text-[13px] font-black" style={{ color: current.color }}>{kpi.val}</div>
                      <div className="text-[8px] font-bold text-[#94A3B8] mt-0.5">{kpi.label}</div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {/* Sales: Lead pipeline with rich cards */}
            {activeAgent === 1 && (
              <>
                <div className="bg-white/80 rounded-xl border border-slate-200/60 p-3 flex-1">
                  <div className="text-[10px] font-black text-[#0F172A] mb-2.5">Lead Qualification Pipeline</div>
                  <div className="space-y-2">
                    {[
                      { step: "Lead Captured", detail: "Vertex Global • Inbound Form", status: "Done" },
                      { step: "Intent Scored", detail: "Enterprise Tier • Score: 98/100", status: "Done" },
                      { step: "Proposal Sent", detail: "Scoped deliverables & pricing in 2.1s", status: "Done" },
                      { step: "Meeting Booked", detail: "Calendar link dispatched • 03:00 PM", status: "Live" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.step}
                        className="flex items-center gap-2.5"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2, type: "spring", stiffness: 250 }}
                      >
                        <motion.div
                          className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[9px] font-black shrink-0"
                          style={{ background: current.color }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.2 + 0.1, type: "spring" }}
                        >
                          {item.status === "Live" ? (
                            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }}>●</motion.span>
                          ) : "✓"}
                        </motion.div>
                        <div className="flex-1">
                          <div className="text-[10px] font-bold text-[#0F172A]">{item.step}</div>
                          <div className="text-[8.5px] text-[#64748B]">{item.detail}</div>
                        </div>
                        <span className="text-[8px] font-black px-1.5 py-0.5 rounded-md shrink-0"
                          style={{ background: item.status === "Live" ? current.colorLight : '#F0FDF4', color: item.status === "Live" ? current.color : '#059669', border: `1px solid ${item.status === "Live" ? current.colorMid : '#BBF7D0'}` }}
                        >
                          {item.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="bg-white/80 rounded-xl border border-slate-200/50 p-2.5 flex items-center justify-between text-[9.5px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="font-bold text-[#0F172A]">CRM Auto-Updated • Follow-up Scheduled</span>
                  <span className="font-black px-2 py-0.5 rounded" style={{ background: current.colorLight, color: current.color }}>Autonomous</span>
                </motion.div>
              </>
            )}

            {/* Support: Richer chat conversation */}
            {activeAgent === 2 && (
              <>
                <div className="bg-white/80 rounded-xl border border-slate-200/60 p-3 flex-1">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-black text-[#0F172A]">Live Customer Onboarding</span>
                    <span className="text-[8px] font-bold px-2 py-0.5 rounded-full" style={{ background: current.colorLight, color: current.color }}>24/7 Active</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { from: "user", text: "How do we configure team access & custom workflows?" },
                      { from: "ai", text: "Workspace configured! Guided onboarding links sent to all 12 team members." },
                      { from: "user", text: "Can we integrate with our existing CRM?" },
                      { from: "ai", text: "3 CRM integrations synced successfully. Data flowing in real-time." },
                    ].map((msg, i) => (
                      <motion.div
                        key={i}
                        className={`flex ${msg.from === "ai" ? "justify-end" : "justify-start"}`}
                        initial={{ opacity: 0, x: msg.from === "ai" ? 16 : -16, y: 4 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: i * 0.35, type: "spring", stiffness: 220 }}
                      >
                        <div
                          className={`px-3 py-2 rounded-xl text-[9.5px] font-medium max-w-[85%] ${
                            msg.from === "ai"
                              ? "border font-semibold"
                              : "bg-slate-100/80 text-slate-700"
                          }`}
                          style={msg.from === "ai" ? { background: `${current.colorLight}`, borderColor: current.colorMid, color: '#0F172A' } : {}}
                        >
                          <span className="font-black mr-1" style={{ color: msg.from === "ai" ? current.color : '#475569' }}>
                            {msg.from === "ai" ? "AI:" : "Q:"}
                          </span>
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "CSAT Score", val: "5.0 / 5.0" },
                    { label: "Resolution", val: "100%" },
                  ].map((kpi, i) => (
                    <motion.div
                      key={kpi.label}
                      className="bg-white/80 rounded-xl border border-slate-200/50 p-2.5 flex items-center justify-between"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                    >
                      <span className="text-[9px] font-bold text-[#64748B]">{kpi.label}</span>
                      <span className="text-[11px] font-black" style={{ color: current.color }}>{kpi.val}</span>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {/* Ops: Task automation grid — richer */}
            {activeAgent === 3 && (
              <>
                <div className="bg-white/80 rounded-xl border border-slate-200/60 p-3 flex-1">
                  <div className="text-[10px] font-black text-[#0F172A] mb-2.5">Automated Workflow Tasks</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { task: "Invoice Processing", count: "24 Done", pct: 100 },
                      { task: "Contract Drafting", count: "12 Done", pct: 100 },
                      { task: "Report Generation", count: "8 Done", pct: 100 },
                      { task: "Email Sequences", count: "36 Sent", pct: 100 },
                      { task: "Task Assignment", count: "18 Routed", pct: 85 },
                      { task: "Approval Flows", count: "6 Pending", pct: 60 },
                    ].map((item, i) => (
                      <motion.div
                        key={item.task}
                        className="rounded-lg border p-2"
                        style={{ borderColor: `${current.colorMid}60`, background: i < 4 ? `${current.colorLight}40` : 'white' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                      >
                        <div className="text-[9px] font-bold text-[#0F172A] mb-1">{item.task}</div>
                        <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(to right, ${current.color}, ${current.colorMid})` }}
                            initial={{ width: '0%' }}
                            animate={{ width: `${item.pct}%` }}
                            transition={{ duration: 0.6, delay: i * 0.1 + 0.15 }}
                          />
                        </div>
                        <div className="text-[8px] font-bold mt-1" style={{ color: current.color }}>{item.count}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="bg-white/80 rounded-xl border border-slate-200/50 p-2.5 flex items-center justify-between text-[9.5px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="font-bold text-[#0F172A]">Cross-Platform Sync Active</span>
                  <span className="font-black px-2 py-0.5 rounded" style={{ background: current.colorLight, color: current.color }}>85% Ops Automated</span>
                </motion.div>
              </>
            )}

            {/* Founder: Rich executive briefing */}
            {activeAgent === 4 && (
              <>
                <div className="bg-white/80 rounded-xl border border-slate-200/60 p-3 flex-1">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-black text-[#0F172A]">Weekly Founder Intelligence Brief</span>
                    <span className="text-[8px] font-bold px-2 py-0.5 rounded-full" style={{ background: current.colorLight, color: current.color }}>Automated Digest</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "Revenue & Pipeline Growth", val: "↑ +34.2% MoM", width: "92%" },
                      { label: "Operational Tasks Automated", val: "18 Completed", width: "78%" },
                      { label: "Customer Satisfaction", val: "CSAT 5.0/5.0", width: "96%" },
                      { label: "Inbound Lead Conversion", val: "↑ +28% Rate", width: "72%" },
                    ].map((line, i) => (
                      <motion.div
                        key={line.label}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <span className="text-[#64748B] font-medium shrink-0 text-[8.5px] w-[38%]">{line.label}</span>
                        <div className="flex-1 h-2.5 rounded-full overflow-hidden bg-slate-100">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(to right, ${current.color}, ${current.colorMid})` }}
                            initial={{ width: '0%' }}
                            animate={{ width: line.width }}
                            transition={{ duration: 0.7, delay: i * 0.2 + 0.1, ease: "easeOut" }}
                          />
                        </div>
                        <motion.span
                          className="font-black text-[9px] shrink-0"
                          style={{ color: current.color }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.2 + 0.5 }}
                        >
                          {line.val}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="rounded-xl border p-2.5 flex items-center justify-between text-[9.5px]"
                  style={{ background: `${current.colorLight}60`, borderColor: `${current.colorMid}60` }}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="font-extrabold" style={{ color: '#0F172A' }}>Top Priority: Expand High-Performing Inbound Funnel</span>
                  <span className="text-[8px] font-black px-2 py-0.5 rounded bg-white border" style={{ borderColor: current.colorMid, color: current.color }}>
                    Sent to Founder
                  </span>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>

        {/* ── Compact Pipeline Dots ── */}
        <div className="flex items-center justify-center gap-1.5 mt-2.5">
          {agents.map((agent, idx) => (
            <button key={agent.id} type="button" onClick={() => handleAgentClick(idx)} className="cursor-pointer p-0.5">
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: idx === activeAgent ? current.color : '#CBD5E1' }}
                animate={idx === activeAgent ? { scale: [1, 1.6, 1] } : { scale: 1 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Bottom Status Strip ── */}
      <div className="relative z-10 bg-white/80 backdrop-blur border-t border-slate-200/60 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <motion.span
            className="w-2 h-2 rounded-full"
            style={{ background: current.color }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[10px] font-black text-[#0F172A]">Multi-Agent Orchestration</span>
        </div>
        <div className="flex items-center gap-1.5 text-[8.5px] sm:text-[9px] font-black">
          <span className="px-2 py-0.5 rounded border" style={{ background: current.colorLight, borderColor: current.colorMid, color: current.color }}>
            24/7 Autonomous
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700">
            5 Agents Live
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Single 3D Product Stage Component ── */
function ProductStage({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: "easeOut" }}
      className="relative rounded-3xl sm:rounded-[36px] bg-white border border-slate-200/90 shadow-[0_15px_40px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.09)] transition-all duration-500 overflow-hidden p-5 sm:p-8 lg:p-10 mb-12 last:mb-0 group/card"
    >
      {/* 3D Top Accent Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] opacity-90" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Product Info & Feature Grid */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Number + Badge Pill */}
            <div className="flex items-center gap-3 mb-3.5">
              <span className="text-xs font-black tracking-[0.2em] text-[#2563EB]">
                {product.num}
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-[0.12em] border ${product.badgeBg}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                {product.badge}
              </span>
            </div>

            {/* Product Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-[#0F172A] tracking-[-0.03em] leading-tight mb-2 group-hover/card:text-[#2563EB] transition-colors duration-300">
              {product.name}
            </h3>

            {/* Sub-headline */}
            <p className="text-sm sm:text-[15px] font-bold text-[#2563EB] mb-3.5">
              {product.headline}
            </p>

            {/* Description */}
            <p className="text-[13.5px] sm:text-sm text-[#475569] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Core Capability 6-Tile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {product.features.map((feat) => (
                <div
                  key={feat.title}
                  className="rounded-2xl p-3 bg-slate-50/90 border border-slate-200/80 hover:bg-blue-50/60 hover:border-blue-200 transition-colors duration-200 flex items-start gap-2.5"
                >
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs flex-shrink-0 ${feat.iconBg}`}>
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-[12px] font-extrabold text-[#0F172A] leading-snug">
                      {feat.title}
                    </h4>
                    <p className="text-[10.5px] text-[#64748B] leading-relaxed mt-0.5 font-normal">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Target Audience Footer Note */}
            {"footerNote" in product && product.footerNote && (
              <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[10.5px] font-bold text-[#475569]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                {product.footerNote}
              </div>
            )}
          </div>

          {/* CTA & Metrics Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-100">
            <a
              href={product.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-[13px] font-extrabold shadow-md hover:shadow-lg shadow-blue-500/20 transition-all duration-200 group/btn"
            >
              <span>{product.cta}</span>
              <span className="group-hover/btn:translate-x-1 transition-transform duration-200 text-sm">→</span>
            </a>

            <div className="flex items-center gap-4 sm:gap-6">
              <div>
                <div className="text-base sm:text-lg font-black text-[#0F172A]">{product.metric1.val}</div>
                <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">{product.metric1.label}</div>
              </div>
              <div className="w-px h-7 bg-slate-200" />
              <div>
                <div className="text-base sm:text-lg font-black text-[#0F172A]">{product.metric2.val}</div>
                <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">{product.metric2.label}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive Visual Canvas */}
        <div className="lg:col-span-5 flex justify-center w-full">
          {product.mockupType === "lms" ? <LMS3DVisual /> : <Automation3DVisual />}
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden border-t border-slate-100 py-20 sm:py-28 lg:py-32">
      {/* ── Soft Ambient Glow Blobs ── */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[300px] bg-sky-100/40 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Light Geometric Dot Grid ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35 pointer-events-none" />

      <Container as="div">
        <div ref={sectionRef} className="relative z-10 max-w-6xl mx-auto">
          {/* ── Section Header ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-14 sm:mb-20">
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-[11px] font-extrabold text-[#2563EB] tracking-[0.15em] uppercase mb-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                Products Built by Agaran
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-[1.95rem] sm:text-[2.65rem] lg:text-[3.15rem] font-black text-[#0F172A] tracking-[-0.035em] leading-[1.14]"
              >
                Purpose-built platforms for{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  education & automation.
                </span>
              </motion.h2>
            </div>

            <div className="lg:col-span-6 flex items-end">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="text-sm sm:text-base text-[#475569] leading-[1.75] max-w-lg font-normal"
              >
                Technology designed to modernize institutions and scale business operations with intelligence, precision, and long-term capability.
              </motion.p>
            </div>
          </div>

          {/* ── 3D Product Stages ── */}
          <div className="relative">
            {products.map((product, index) => (
              <ProductStage key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
