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

/* ── Ultra-Rich Interactive LMS Dashboard & Portal Simulation (Pure Light Theme) ── */
function LMS3DVisual() {
  const [activeTab, setActiveTab] = useState<"kpi" | "exam" | "lectures" | "academics">("kpi");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  /* Render animated SVG icons for LMS module tabs */
  const renderLmsIcon = (id: string, isActive: boolean, color: string) => {
    const cls = "w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300";
    const gradId = `grad-lms-${id}-${isActive ? 'a' : 'i'}`;
    const activeGrad = (
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}>
            <animate attributeName="stop-color" values={`${color};#3B82F6;#0284C7;${color}`} dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#3B82F6">
            <animate attributeName="stop-color" values={`#3B82F6;${color};#1D4ED8;#3B82F6`} dur="3s" repeatCount="indefinite" />
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

  const tabs: { id: "kpi" | "academics" | "lectures" | "exam"; label: string; color: string }[] = [
    { id: "kpi", label: "Admissions & Leads", color: "#2563EB" },
    { id: "academics", label: "Academics & Batches", color: "#0284C7" },
    { id: "lectures", label: "Live & Recorded Hub", color: "#1D4ED8" },
    { id: "exam", label: "Exam & Assessment", color: "#0369A1" },
  ];

  // Auto-cycle through LMS tabs every 3.5 seconds
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const order: ("kpi" | "academics" | "lectures" | "exam")[] = ["kpi", "academics", "lectures", "exam"];
        const nextIdx = (order.indexOf(prev) + 1) % order.length;
        return order[nextIdx];
      });
    }, 3500);
  }, []);

  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      startAutoPlay();
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying, isHovered, startAutoPlay]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTabClick = (tabId: "kpi" | "exam" | "lectures" | "academics") => {
    setActiveTab(tabId);
    setIsAutoPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[480px] sm:min-h-[540px] rounded-3xl bg-gradient-to-br from-blue-50/90 via-sky-50/50 via-white to-blue-50/70 border border-blue-200/90 shadow-[0_20px_60px_rgba(37,99,235,0.12)] overflow-hidden flex flex-col justify-between group/visual text-[#0F172A]"
    >
      {/* ── Top Ambient Light Mesh ── */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      {/* ── Top Application Titlebar (Vibrant Brand Blue Gradient Header) ── */}
      <div className="relative z-10 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-blue-400/30 flex flex-wrap items-center justify-between gap-2 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-white text-[#2563EB] flex items-center justify-center text-[11px] font-black shadow-md">
            AG
          </div>
          <div>
            <div className="text-[11.5px] sm:text-[12px] font-black tracking-tight leading-none text-white">
              Agaran Institute OS
            </div>
            <div className="text-[9px] sm:text-[9.5px] text-blue-100 mt-0.5 font-semibold">
              Enterprise Coaching & Learning Hub
            </div>
          </div>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/20 border border-white/30 text-white text-[9.5px] sm:text-[10px] font-black backdrop-blur-md shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
            2,450 Students Active
          </span>
        </div>
      </div>

      {/* ── Visual Module Showcase Strip — Matching AI Agents Style (No Scrollbar) ── */}
      <div className="relative z-10 px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-b from-blue-100/50 via-sky-50/60 to-white/90 border-b border-blue-200/50">
        {/* Sleek Fiber-Optic Energy Pipeline Track */}
        <div className="absolute left-[12%] right-[12%] top-1/2 -translate-y-1/2 h-[1.5px] rounded-full overflow-hidden bg-slate-200/60 z-0">
          <motion.div
            className="w-24 h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${tabs[0].color}, #38BDF8, transparent)`,
              boxShadow: `0 0 10px ${tabs[0].color}80`,
            }}
            animate={{ x: ['-100%', '350%'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
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
                      ? `linear-gradient(135deg, ${tab.color}30, ${tab.color}10)`
                      : `linear-gradient(135deg, ${tab.color}15, white)`,
                    borderColor: isActive ? tab.color : `${tab.color}40`,
                    boxShadow: isActive
                      ? `0 10px 25px -5px ${tab.color}50, 0 4px 10px -3px ${tab.color}30`
                      : `0 2px 6px ${tab.color}12`,
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
                      className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white flex items-center justify-center shadow-sm"
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
                  className="text-[7.5px] sm:text-[8.5px] font-black text-center leading-tight max-w-[65px] sm:max-w-[85px]"
                  style={{ color: isActive ? tab.color : '#64748B' }}
                  animate={isActive ? { opacity: 1 } : { opacity: 0.8 }}
                >
                  {tab.label}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ── Active Module Interactive Detail Canvas — Clean & Vibrant Light Theme ── */}
      <div className="relative z-10 px-3 sm:px-4 py-4 sm:py-5 flex-1 flex flex-col">

        {/* TAB 1: Admissions & Leads Pipeline */}
        {activeTab === "kpi" && (
          <motion.div
            key="kpi"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col justify-between gap-3"
          >
            <div className="bg-gradient-to-br from-blue-100/90 via-blue-50/80 to-white rounded-2xl p-4 border border-blue-300/90 shadow-md shadow-blue-500/10 relative overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] rounded-t-2xl -mx-4 -mt-4 mb-3" />
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-[#2563EB] bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-300 shadow-2xs">
                  Automated Lead Pipeline
                </span>
                <span className="text-[10px] font-black text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-300 shadow-2xs">
                  +42 Inbound Today
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight">
                Inbound Student Admission Velocity
              </h4>

              {/* Stat Row */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-blue-100/80 via-white to-blue-50 border border-blue-200/90 shadow-2xs">
                  <div className="text-[10px] font-bold text-[#64748B]">Total Leads</div>
                  <div className="text-base sm:text-lg font-black text-[#2563EB]">1,280</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-sky-100/80 via-white to-blue-50 border border-sky-200/90 shadow-2xs">
                  <div className="text-[10px] font-bold text-[#64748B]">Converted</div>
                  <div className="text-base sm:text-lg font-black text-[#0284C7]">842</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-indigo-100/80 via-white to-blue-50 border border-indigo-200/90 shadow-2xs">
                  <div className="text-[10px] font-bold text-[#64748B]">Conv. Rate</div>
                  <div className="text-base sm:text-lg font-black text-[#1D4ED8]">65.8%</div>
                </div>
              </div>
            </div>

            {/* Inbound Lead Stream */}
            <div className="bg-gradient-to-br from-white via-blue-50/50 to-sky-50/40 rounded-2xl p-4 border border-blue-200/90 shadow-lg shadow-blue-500/10 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] font-black text-[#0F172A] mb-2">
                <span>Real-Time Lead Stream</span>
                <span className="text-[9.5px] font-black text-[#2563EB]">Auto CRM Sync</span>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100/80 via-white to-sky-50 border border-blue-200/90 shadow-sm flex items-center justify-between gap-3">
                  <div>
                    <div className="font-black text-[#0F172A] text-[12px] leading-snug">Siddharth V. (Advanced Masterclass)</div>
                    <div className="text-[#2563EB] text-[10px] mt-0.5 font-extrabold">Admission Confirmed • ₹45,000 Paid</div>
                  </div>
                  <span className="text-[9.5px] text-[#1D4ED8] bg-blue-100 px-2.5 py-1 rounded-lg font-black shrink-0 shadow-2xs border border-blue-300">Enrolled</span>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100/80 via-white to-blue-50 border border-blue-200/90 shadow-sm flex items-center justify-between gap-3">
                  <div>
                    <div className="font-black text-[#0F172A] text-[12px] leading-snug">Ananya R. (Core Foundation Batch)</div>
                    <div className="text-[#2563EB] text-[10px] mt-0.5 font-extrabold">Counseling Scheduled Today 04:30 PM</div>
                  </div>
                  <span className="text-[9.5px] text-[#1D4ED8] bg-blue-100 px-2.5 py-1 rounded-lg font-black shrink-0 shadow-2xs border border-blue-300">Hot Lead</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-blue-200/60 flex items-center justify-between text-[10px] font-bold text-[#64748B]">
                <span>Top Inbound Source: Google (42%)</span>
                <span className="text-[#2563EB] font-black">Velocity: 4.2 Days</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Live Exam & Assessment Portal */}
        {activeTab === "exam" && (
          <motion.div
            key="exam"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col justify-between gap-3"
          >
            <div className="bg-gradient-to-br from-sky-100/90 via-blue-50/80 to-white rounded-2xl p-4 border border-sky-300/90 shadow-md shadow-sky-500/10 relative overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] rounded-t-2xl -mx-4 -mt-4 mb-3" />
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-[#2563EB] bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-300 shadow-2xs">
                  Exam Engine Active
                </span>
                <span className="text-[10px] font-black text-[#0284C7] bg-sky-100 px-2.5 py-0.5 rounded-full border border-sky-300 flex items-center gap-1.5 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  42:15 Remaining
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight">
                National Mock Examination Series #08
              </h4>
              <p className="text-[11.5px] text-[#475569] mt-1 font-extrabold leading-relaxed">
                420 Students Active • Hybrid Evaluation (Online CBT & Paper OCR)
              </p>
            </div>

            <div className="bg-gradient-to-br from-white via-sky-50/50 to-blue-50/40 rounded-2xl p-4 border border-sky-200/90 shadow-lg shadow-sky-500/10 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] font-black text-[#0F172A] mb-2">
                <span>Performance & Ranking</span>
                <span className="text-[#0284C7] bg-sky-100 px-2.5 py-0.5 rounded-full font-black border border-sky-300 text-[9.5px] shadow-2xs">
                  99.8% Accuracy
                </span>
              </div>

              <p className="text-[12px] text-[#475569] leading-relaxed font-normal p-3 rounded-xl bg-gradient-to-r from-blue-100/70 via-white to-blue-100/70 border border-blue-200/90 shadow-2xs">
                Online Score: <strong className="font-extrabold text-[#0F172A]">194 / 200 (Rank #01)</strong> • Paper Scans: <strong className="font-extrabold text-[#0284C7]">186 Sheets Graded (3.2s)</strong>.
              </p>

              <div className="pt-3 border-t border-blue-200/60 flex items-center justify-between text-[10px] font-bold text-[#64748B]">
                <span>Class Average: 96.4%</span>
                <span className="text-[#2563EB] font-black">Auto SMS Results Sent</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: Live Classroom & Video Player Studio */}
        {activeTab === "lectures" && (
          <motion.div
            key="lectures"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col justify-between gap-3"
          >
            <div className="bg-gradient-to-br from-blue-100/90 via-blue-50/80 to-white rounded-2xl p-4 border border-blue-300/90 shadow-md shadow-blue-500/10 relative overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] rounded-t-2xl -mx-4 -mt-4 mb-3" />
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                  <span className="text-[10px] font-black text-[#0F172A]">Live Studio Broadcast</span>
                </div>
                <span className="text-[9.5px] font-black text-[#1D4ED8] bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-300 shadow-2xs">
                  184 Attending
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight">
                Advanced Physics Masterclass & Problem Solving
              </h4>
              <p className="text-[11.5px] text-[#475569] mt-1 font-extrabold leading-relaxed">
                Instructor: Dr. R. Sharma • Live Chat & Interactive Q&A Active
              </p>
            </div>

            <div className="bg-gradient-to-br from-white via-blue-50/50 to-sky-50/40 rounded-2xl p-4 border border-blue-200/90 shadow-lg shadow-blue-500/10 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] font-black text-[#0F172A] mb-2">
                <span>Recorded Lecture Hub</span>
                <span className="text-[9.5px] font-black text-[#1D4ED8] bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-300 shadow-2xs">
                  24/7 Access
                </span>
              </div>

              <p className="text-[12px] text-[#475569] leading-relaxed font-normal p-3 rounded-xl bg-gradient-to-r from-blue-100/70 via-white to-sky-50/70 border border-blue-200/90 shadow-2xs">
                Organic Chemistry & Calculus lectures archived in <strong className="font-extrabold text-[#1D4ED8]">1080p HD</strong> with attached PDF study notes.
              </p>

              <div className="pt-3 border-t border-blue-200/60 flex items-center justify-between text-[10px] font-bold text-[#64748B]">
                <span>Automated Class Attendance Tracked</span>
                <span className="text-[#2563EB] font-black">HD Streaming 1080p</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: Academics & Batches */}
        {activeTab === "academics" && (
          <motion.div
            key="academics"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col justify-between gap-3"
          >
            <div className="bg-gradient-to-br from-sky-100/90 via-blue-50/80 to-white rounded-2xl p-4 border border-sky-300/90 shadow-md shadow-sky-500/10 relative overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] rounded-t-2xl -mx-4 -mt-4 mb-3" />
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-[#2563EB] bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-300 shadow-2xs">
                  Batch Operations
                </span>
                <span className="text-[9.5px] font-black text-[#0284C7] bg-sky-100 px-2.5 py-0.5 rounded-full border border-sky-300 shadow-2xs">
                  12 Batches Active
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight">
                Academic Curriculum & Timetable Engine
              </h4>
              <p className="text-[11.5px] text-[#475569] mt-1 font-extrabold leading-relaxed">
                Automated Class Schedules • Attendance Tracking • Faculty Workload Optimization
              </p>
            </div>

            <div className="bg-gradient-to-br from-white via-sky-50/50 to-blue-50/40 rounded-2xl p-4 border border-sky-200/90 shadow-lg shadow-sky-500/10 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] font-black text-[#0F172A] mb-2">
                <span>Active Batches</span>
                <span className="text-[9.5px] font-black text-[#2563EB]">Schedules Synced</span>
              </div>

              <p className="text-[12px] text-[#475569] leading-relaxed font-normal p-3 rounded-xl bg-gradient-to-r from-sky-100/70 via-white to-blue-100/70 border border-sky-200/90 shadow-2xs">
                <strong className="font-extrabold text-[#0F172A]">Target JEE 2026</strong> & <strong className="font-extrabold text-[#0284C7]">Foundation NEET 2027</strong> active with <strong className="font-extrabold text-[#2563EB]">98.2% attendance</strong>.
              </p>

              <div className="pt-3 border-t border-sky-200/60 flex items-center justify-between text-[10px] font-bold text-[#64748B]">
                <span>Biometric & App Attendance Combined</span>
                <span className="text-[#2563EB] font-black">Reports Generated</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* ── Bottom Telemetry Footer Strip (Ultra Crisp Dark Blue Theme) ── */}
      <div className="relative z-10 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border-t border-slate-700/80 text-white px-4 py-2.5 flex items-center justify-between text-[10.5px] font-extrabold shadow-inner">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-white">Real-Time Cloud LMS Engine Active</span>
        </div>
        <span className="bg-blue-600/90 text-white border border-blue-400/80 px-2.5 py-0.5 rounded-md text-[9.5px] tracking-wide font-black shadow-2xs">
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
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % 5);
    }, 3500);
  }, []);

  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      startAutoPlay();
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying, isHovered, startAutoPlay]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAgentClick = (idx: number) => {
    setActiveAgent(idx);
    setIsAutoPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  const current = agents[activeAgent];

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[480px] sm:min-h-[540px] rounded-3xl bg-gradient-to-br from-emerald-50/90 via-teal-50/50 via-white to-emerald-50/70 border border-emerald-200/90 shadow-[0_20px_60px_rgba(5,150,105,0.14)] overflow-hidden flex flex-col justify-between text-[#0F172A]"
    >

      {/* ── Animated Background Mesh ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-[0.18]"
          style={{ background: `radial-gradient(circle, ${current.color}, transparent 70%)`, top: '20%', left: '30%' }}
          animate={{ scale: [1, 1.3, 1], x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full opacity-[0.12]"
          style={{ background: `radial-gradient(circle, ${current.color}, transparent 70%)`, bottom: '10%', right: '10%' }}
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#a7f3d0_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
      </div>

      {/* ── Top Bar (Fresh Light Emerald Green Header Bar) ── */}
      <div className="relative z-10 bg-gradient-to-r from-[#059669] via-[#10B981] to-[#0D9488] text-white px-4 py-2.5 border-b border-emerald-400/30 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <motion.div
            className="w-7 h-7 rounded-xl bg-white text-[#059669] flex items-center justify-center text-[11px] font-black shadow-md"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            AI
          </motion.div>
          <div>
            <div className="text-[11.5px] font-black tracking-tight leading-none text-white">Agaran AI Workforce</div>
            <div className="text-[8.5px] text-emerald-100 mt-0.5 font-semibold">5 Autonomous Agents • Always Running</div>
          </div>
        </div>
        <motion.span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9.5px] font-black bg-white/20 border border-white/30 text-white backdrop-blur-md shadow-2xs"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Engine
        </motion.span>
      </div>

      {/* ── Visual Agent Showcase Strip — Rich Animated Icons ── */}
      <div className="relative z-10 px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-b from-emerald-100/60 via-teal-50/60 to-white/90 border-b border-emerald-200/60">
        {/* Sleek Fiber-Optic Energy Pipeline Track */}
        <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-[1.5px] rounded-full overflow-hidden bg-slate-200/60 z-0">
          <motion.div
            className="w-24 h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${current.color}, #34D399, transparent)`,
              boxShadow: `0 0 10px ${current.color}80`,
            }}
            animate={{ x: ['-100%', '350%'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
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
                      : `linear-gradient(135deg, ${agent.colorLight}40, white)`,
                    borderColor: isActive ? agent.color : `${agent.color}45`,
                    boxShadow: isActive
                      ? `0 10px 25px -5px ${agent.color}50, 0 4px 10px -3px ${agent.color}30`
                      : `0 2px 6px ${agent.color}12`,
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
                      className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white flex items-center justify-center shadow-sm"
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
                  className="text-[7.5px] sm:text-[8.5px] font-black text-center leading-tight max-w-[56px] sm:max-w-[72px]"
                  style={{ color: isActive ? agent.color : '#64748B' }}
                  animate={isActive ? { opacity: 1 } : { opacity: 0.8 }}
                >
                  {agent.label}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ── Rich Agent Detail Stage — Tall & Immersive Colorful Cards ── */}
      <div className="relative z-10 px-3 sm:px-4 py-4 sm:py-5 flex-1 flex flex-col">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="w-full rounded-2xl border p-4 sm:p-5 backdrop-blur-sm flex-1 flex flex-col relative overflow-hidden"
          style={{
            background: `linear-gradient(145deg, ${current.colorLight}90, white 50%, ${current.colorLight}50)`,
            borderColor: `${current.colorMid}`,
            boxShadow: `0 12px 40px ${current.color}15, inset 0 1px 0 rgba(255,255,255,0.9)`,
          }}
        >
          <div className="h-1 bg-gradient-to-r from-[#059669] via-[#10B981] to-[#0D9488] rounded-t-2xl -mx-5 -mt-5 mb-4" />

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
                <div className="text-[10px] text-[#475569] font-extrabold mt-0.5">{current.tagline}</div>
              </div>
            </div>
            <motion.div
              className="text-right"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: 0.15 }}
            >
              <div className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: current.color }}>{current.stat}</div>
              <div className="text-[9px] font-extrabold text-[#64748B] uppercase tracking-wider">{current.statLabel}</div>
            </motion.div>
          </div>

          {/* ── Rich Visual Action Scenes — Colorful & Vibrant ── */}
          <div className="flex-1 flex flex-col justify-between gap-3">

            {/* Marketing: Clean analytics & campaign summary */}
            {activeAgent === 0 && (
              <>
                <div className="bg-gradient-to-br from-emerald-100/90 via-emerald-50/80 to-white rounded-2xl border border-emerald-300/80 p-3.5 sm:p-4 shadow-md shadow-emerald-500/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black text-[#0F172A]">Campaign Performance & Discovery</span>
                    <span
                      className="text-[9px] font-extrabold px-2.5 py-0.5 rounded-full shadow-2xs border border-emerald-200"
                      style={{ background: current.colorLight, color: current.color }}
                    >
                      5 Channels Active
                    </span>
                  </div>
                  <div className="flex items-end gap-2 h-16 sm:h-20 py-1">
                    {[35, 48, 42, 68, 58, 82, 72, 92, 78, 98].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md transition-all duration-300 shadow-2xs"
                        style={{ height: `${h}%`, background: `linear-gradient(to top, ${current.color}, ${current.colorMid})` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/40 rounded-2xl p-3.5 border border-emerald-200/90 shadow-md shadow-emerald-500/10 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-black text-[#0F172A] mb-2">
                    <span>Trending Market Discovery</span>
                    <span className="text-[9.5px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                      +340% Spike
                    </span>
                  </div>
                  <p className="text-[12px] text-[#475569] leading-relaxed font-normal p-2.5 rounded-xl bg-gradient-to-r from-emerald-100/70 via-white to-emerald-100/70 border border-emerald-200/90 shadow-2xs">
                    Keyword: <strong className="font-extrabold text-[#059669]">&quot;Enterprise Workflow Automation&quot;</strong>. 3 LinkedIn posts & email sequences drafted and scheduled automatically.
                  </p>
                </div>
              </>
            )}

            {/* Sales: Lead pipeline with clean cards */}
            {activeAgent === 1 && (
              <>
                <div className="bg-gradient-to-br from-emerald-100/90 via-teal-50/80 to-white rounded-2xl border border-emerald-300/80 p-3.5 sm:p-4 shadow-md shadow-emerald-500/10">
                  <div className="flex items-center justify-between text-[11px] font-black text-[#0F172A] mb-3">
                    <span>Lead Qualification & Proposal Pipeline</span>
                    <span className="text-[9.5px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                      Score: 98/100
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { step: "Lead Captured", detail: "Inbound Website Form • Vertex Global", status: "Done" },
                      { step: "Proposal Sent", detail: "Scoped deliverables & pricing in 2.1s", status: "Done" },
                      { step: "Meeting Booked", detail: "Calendar invite confirmed • 03:00 PM Today", status: "Live" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-2.5 p-2 rounded-xl bg-gradient-to-r from-emerald-50 via-white to-teal-50 border border-emerald-200/80 shadow-2xs">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[8px] font-black shrink-0 shadow-xs"
                          style={{ background: current.color }}
                        >
                          ✓
                        </div>
                        <div className="flex-1">
                          <div className="text-[11.5px] font-black text-[#0F172A] leading-snug">{item.step}</div>
                          <div className="text-[10px] text-[#475569] font-bold">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/40 rounded-2xl p-3.5 border border-emerald-200/90 shadow-md shadow-emerald-500/10 flex items-center justify-between text-[11px]">
                  <span className="font-black text-[#0F172A]">Pipeline Value: ₹3,80,000</span>
                  <span className="font-black text-[#059669] bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 text-[10px] shadow-2xs">
                    2.1s / Deal Velocity
                  </span>
                </div>
              </>
            )}

            {/* Support: Clean onboarding & response stream */}
            {activeAgent === 2 && (
              <>
                <div className="bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/30 rounded-2xl border border-emerald-200/90 p-3.5 sm:p-4 shadow-lg shadow-emerald-500/10 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black text-[#0F172A]">24/7 Autonomous Onboarding Stream</span>
                    <span className="text-[9.5px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                      0.8s Response
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl bg-gradient-to-r from-slate-100 via-white to-slate-100 text-[11.5px] text-[#334155] leading-snug border border-slate-200 shadow-2xs">
                      <strong className="text-[#0F172A] font-black">Customer:</strong> How do we configure team access & custom workflows?
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-100/90 via-white to-emerald-50 text-[11.5px] text-[#0F172A] leading-snug font-normal border border-emerald-200 shadow-2xs">
                      <strong className="text-emerald-900 font-black">AI Support:</strong> Workspace configured! Guided onboarding links sent to all 12 team members.
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-[10.5px] font-bold text-[#64748B]">
                    <span>CSAT Score: 5.0 / 5.0</span>
                    <span className="text-emerald-700 font-black">0 Backlog Tickets</span>
                  </div>
                </div>
              </>
            )}

            {/* Ops: Clean task automation grid */}
            {activeAgent === 3 && (
              <>
                <div className="bg-gradient-to-br from-white via-amber-50/40 to-emerald-50/30 rounded-2xl border border-amber-200/90 p-3.5 sm:p-4 shadow-lg shadow-amber-500/10 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-black text-[#0F172A] mb-3">
                    <span>Automated Operations & Workflow Tasks</span>
                    <span className="text-[9.5px] font-black text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300 shadow-2xs">
                      85% Automated
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-100/80 via-white to-amber-50 border border-amber-200 shadow-2xs">
                      <div className="text-[11px] font-black text-[#0F172A]">Invoices & Billing</div>
                      <div className="text-[10px] text-amber-900 font-black mt-0.5">24 Processed Today</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-100/80 via-white to-emerald-50 border border-emerald-200 shadow-2xs">
                      <div className="text-[11px] font-black text-[#0F172A]">Cross-App Data Sync</div>
                      <div className="text-[10px] text-emerald-900 font-black mt-0.5">100% Real-Time</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-amber-200/60 flex items-center justify-between text-[10px] font-bold text-[#64748B]">
                    <span>Integrations: Stripe, QuickBooks, Slack, Notion</span>
                    <span className="text-amber-800 font-black">Self-Healing Active</span>
                  </div>
                </div>
              </>
            )}

            {/* Founder: Clean executive briefing */}
            {activeAgent === 4 && (
              <>
                <div className="bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/30 rounded-2xl border border-emerald-200/90 p-3.5 sm:p-4 shadow-lg shadow-emerald-500/10 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black text-[#0F172A]">Weekly Founder Executive Digest</span>
                    <span className="text-[9.5px] font-black text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                      Weekly Briefing
                    </span>
                  </div>

                  <div className="space-y-2 text-[11.5px] text-[#334155] leading-relaxed">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-emerald-100/80 via-white to-teal-50 border border-emerald-200 shadow-2xs">
                      <span className="font-extrabold text-[#0F172A]">Revenue Growth (MoM)</span>
                      <strong className="text-emerald-700 font-black">↑ +34.2%</strong>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-emerald-100/80 via-white to-emerald-50 border border-emerald-200 shadow-2xs">
                      <span className="font-extrabold text-[#0F172A]">Cash Runway</span>
                      <strong className="text-emerald-700 font-black">24.5 Months</strong>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-emerald-200/60 text-[10.5px] font-bold text-[#64748B]">
                    <span>Top Focus: Scale High-Performing Inbound Acquisition</span>
                  </div>
                </div>
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

      {/* ── Bottom Telemetry Footer Strip (Fresh Emerald Dark Theme) ── */}
      <div className="relative z-10 bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#064E3B] border-t border-emerald-600/80 text-white px-4 py-2.5 flex items-center justify-between text-[10.5px] font-extrabold shadow-inner">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
          <span className="text-white">Real-Time Autonomous AI Engine Active</span>
        </div>
        <span className="bg-emerald-700/90 text-white border border-emerald-400/80 px-2.5 py-0.5 rounded-md text-[9.5px] tracking-wide font-black shadow-2xs">
          99.99% Uptime
        </span>
      </div>
    </div>
  );
}

/* ── Single 3D Product Stage Component (Matching 2nd Section Card & UI/UX Look) ── */
/* ── Reusable scroll-reveal wrapper (Matches 2nd section WhoWeBuildFor look & behavior) ── */
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
  product: (typeof products)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: false, amount: 0.05 });

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: false, amount: 0.05 });

  const descRef = useRef<HTMLDivElement>(null);
  const descInView = useInView(descRef, { once: false, amount: 0.05 });

  const isAiAgent = product.id === "automation-suite";

  const cardTheme = isAiAgent
    ? {
        bg: "bg-gradient-to-br from-emerald-100/90 via-emerald-50/60 to-white",
        border: "border-emerald-300/90",
        shadow: "shadow-[0_16px_45px_rgba(5,150,105,0.14)] group-hover:shadow-[0_28px_65px_rgba(5,150,105,0.24)]",
        headerGradient: "from-[#059669] via-[#10B981] to-[#0D9488]",
        descBg: "bg-gradient-to-br from-white via-emerald-50/90 to-teal-50/70 border-emerald-300/90 shadow-md shadow-emerald-500/10",
        topLine: "from-[#059669] via-[#10B981] to-[#0D9488]",
        tileBg: "bg-gradient-to-br from-emerald-100/80 via-emerald-50/60 to-white border-emerald-300/80 hover:from-emerald-200/80 hover:to-white",
        ctaBg: "bg-[#059669] hover:bg-[#047857] shadow-emerald-500/20",
        noteBg: "bg-emerald-100/90 border-emerald-200/90 text-[#064E3B]",
        dotBg: "bg-[#059669]",
        metricText: "text-[#059669]",
      }
    : {
        bg: "bg-gradient-to-br from-blue-100/90 via-blue-50/60 to-white",
        border: "border-blue-300/90",
        shadow: "shadow-[0_16px_45px_rgba(37,99,235,0.12)] group-hover:shadow-[0_28px_65px_rgba(37,99,235,0.22)]",
        headerGradient: "from-[#1D4ED8] via-[#2563EB] to-[#0EA5E9]",
        descBg: "bg-gradient-to-br from-white via-blue-50/90 to-sky-50/70 border-blue-300/90 shadow-md shadow-blue-500/10",
        topLine: "from-[#1D4ED8] via-[#2563EB] to-[#0EA5E9]",
        tileBg: "bg-gradient-to-br from-blue-100/80 via-blue-50/60 to-white border-blue-300/80 hover:from-blue-200/80 hover:to-white",
        ctaBg: "bg-[#2563EB] hover:bg-[#1D4ED8] shadow-blue-500/20",
        noteBg: "bg-blue-100/90 border-blue-200/90 text-[#1E3A8A]",
        dotBg: "bg-[#2563EB]",
        metricText: "text-[#2563EB]",
      };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative rounded-3xl border ${cardTheme.border} ${cardTheme.bg} overflow-hidden ${cardTheme.shadow} transition-all duration-500 hover:-translate-y-1.5 flex flex-col`}
    >
      {/* ── Cinematic Gradient Header (Matching 2nd Section Look) ── */}
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

      {/* ── Floating Description Card Badge (Matching 2nd Section Look) ── */}
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

      {/* ── Card Body Container (Features + 3D Visual Stage) ── */}
      <div className="p-5 sm:p-8 pt-6 sm:pt-7 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-stretch">
          {/* Left Column: Core Capability 6-Tile Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-6">
                {product.features.map((feat, featIdx) => (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                    transition={{ duration: 0.4, delay: featIdx * 0.06, ease: "easeOut" }}
                    className={`group/feat rounded-2xl p-3.5 sm:p-4 ${cardTheme.tileBg} transition-all duration-200 flex items-start gap-3 shadow-2xs hover:shadow-md relative overflow-hidden`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs flex-shrink-0 group-hover/feat:scale-105 transition-transform duration-200 ${feat.iconBg}`}>
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-[12.5px] sm:text-[13px] font-black text-[#0F172A] leading-snug">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] sm:text-[11.5px] text-[#64748B] leading-[1.65] mt-1 font-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Target Audience Footer Note */}
              {"footerNote" in product && product.footerNote && (
                <div className={`mb-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl ${cardTheme.noteBg} border text-[11px] font-extrabold shadow-2xs`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${cardTheme.dotBg}`} />
                  {product.footerNote}
                </div>
              )}
            </div>

            {/* CTA & Metrics Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-200/60">
              <a
                href={product.href}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${cardTheme.ctaBg} text-white text-xs sm:text-[13.5px] font-extrabold shadow-md hover:shadow-lg transition-all duration-200 group/btn`}
              >
                <span>{product.cta}</span>
                <span className="group-hover/btn:translate-x-1 transition-transform duration-200 text-sm">→</span>
              </a>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-right">
                  <div className={`text-base sm:text-lg font-black ${cardTheme.metricText}`}>{product.metric1.val}</div>
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">{product.metric1.label}</div>
                </div>
                <div className="h-7 w-[1px] bg-slate-200/80" />
                <div className="text-right">
                  <div className={`text-base sm:text-lg font-black ${cardTheme.metricText}`}>{product.metric2.val}</div>
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">{product.metric2.label}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Visual Canvas */}
          <div className="lg:col-span-5 flex flex-col justify-center w-full h-full">
            {product.mockupType === "lms" ? <LMS3DVisual /> : <Automation3DVisual />}
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
