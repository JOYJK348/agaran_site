"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";

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
  const inView = useInView(ref, { once: true, amount: 0.05 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const cards = [
  {
    id: "business",
    label: "Businesses & Organizations",
    sublabel: "Technology that helps businesses work smarter",
    description: (
      <>
        We build <strong className="font-extrabold text-[#0F172A]">software</strong>, <strong className="font-extrabold text-[#2563EB]">AI agents</strong>, and <strong className="font-extrabold text-[#2563EB]">automation systems</strong> that <strong className="font-extrabold text-[#0F172A]">simplify operations</strong>, <strong className="font-extrabold text-[#0F172A]">connect workflows</strong>, and help businesses <strong className="font-extrabold text-[#2563EB]">grow with confidence</strong>.
      </>
    ),
    accentColor: "#2563EB",
    accentTile: "rgba(37,99,235,0.07)",
    accentBorder: "rgba(37,99,235,0.2)",
    accentBorderHover: "rgba(37,99,235,0.4)",
    accentTileHover: "rgba(37,99,235,0.12)",
    headerGradient: "from-[#1D4ED8] via-[#2563EB] to-[#0EA5E9]",
    iconPath:
      "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    footer: "Startups • SMEs • Enterprises • Service Businesses",
    features: [
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
          </svg>
        ),
        iconBg: "bg-blue-100 text-blue-600 border border-blue-200",
        title: "Custom Software",
        highlight: "Custom Software",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Web and mobile applications</strong> designed around the way your business works.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        ),
        iconBg: "bg-blue-50 text-[#2563EB] border border-blue-200",
        title: "AI Agents & Automation",
        highlight: "AI Agents",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Intelligent agents</strong> that automate repetitive work, customer support, follow-ups, and internal operations.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        ),
        iconBg: "bg-blue-50 text-[#2563EB] border border-blue-200",
        title: "Business Systems",
        highlight: "Business Systems",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">CRM, ERP, SMS automation</strong>, and connected workflows that improve efficiency across teams.
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
        title: "Internal Operations",
        highlight: "Internal Operations",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Dashboards, admin portals</strong>, reporting systems, and tools that help businesses make better decisions.
          </>
        ),
      },
    ],
  },
  {
    id: "education",
    label: "Education & Learning",
    sublabel: "Technology built for modern education",
    description: (
      <>
        We build <strong className="font-extrabold text-[#2563EB]">learning platforms</strong>, <strong className="font-extrabold text-[#0F172A]">coaching systems</strong>, <strong className="font-extrabold text-[#0F172A]">academic automation</strong>, and <strong className="font-extrabold text-[#2563EB]">AI-powered education tools</strong> that help institutions <strong className="font-extrabold text-[#0F172A]">teach</strong>, <strong className="font-extrabold text-[#0F172A]">manage</strong>, and <strong className="font-extrabold text-[#2563EB]">grow more effectively</strong>.
      </>
    ),
    accentColor: "#2563EB",
    accentTile: "rgba(37,99,235,0.07)",
    accentBorder: "rgba(37,99,235,0.2)",
    accentBorderHover: "rgba(37,99,235,0.4)",
    accentTileHover: "rgba(37,99,235,0.12)",
    headerGradient: "from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB]",
    iconPath:
      "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
    footer: "Schools • Colleges • Universities • Coaching Institutes • Research Scholars",
    features: [
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        ),
        iconBg: "bg-blue-50 text-[#2563EB] border border-blue-200",
        title: "Learning Platforms",
        highlight: "Learning Platforms",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">LMS platforms, course portals</strong>, live classes, assessments, and student progress tracking.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        ),
        iconBg: "bg-blue-50 text-[#2563EB] border border-blue-200",
        title: "Coaching & Institute Systems",
        highlight: "Institute Systems",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Admissions, attendance, academics</strong>, examinations, communication, and institute management.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        ),
        iconBg: "bg-blue-50 text-[#2563EB] border border-blue-200",
        title: "AI for Education",
        highlight: "AI for Education",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">AI tutors, learning assistants</strong>, personalized learning support, and intelligent academic workflows.
          </>
        ),
      },
      {
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 15.008A2.25 2.25 0 006.591 18.75h10.818A2.25 2.25 0 0019 15.008l-4.091-4.6a2.25 2.25 0 01-.659-1.591V3.104M9.75 3.104c-.251.037-.501.087-.75.15M9.75 3.104A48.066 48.066 0 0112 3.493c.758 0 1.512.036 2.25.104m-4.5 0h4.5" />
          </svg>
        ),
        iconBg: "bg-blue-50 text-[#2563EB] border border-blue-200",
        title: "Projects & Research",
        highlight: "Projects & Research",
        desc: (
          <>
            <strong className="font-extrabold text-[#0F172A]">Student project development</strong>, academic software solutions, research tools, and technology support.
          </>
        ),
      },
    ],
  },
];

/* ── Single animated feature tile with its own inView ref ── */
function FeatureTile({
  feat,
  card,
  delay,
  cardIdx,
}: {
  feat: (typeof cards)[0]["features"][0];
  card: (typeof cards)[0];
  delay: number;
  cardIdx: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const tileTheme = [
    {
      bg: "bg-gradient-to-br from-emerald-100/80 via-emerald-50/60 to-white hover:from-emerald-200/80 hover:to-white border-emerald-300/80",
      accent: "from-[#059669] via-[#10B981] to-[#0D9488]",
      textAccent: "text-[#059669]",
    },
    {
      bg: "bg-gradient-to-br from-sky-100/80 via-blue-50/60 to-white hover:from-sky-200/80 hover:to-white border-sky-300/80",
      accent: "from-[#0284C7] via-[#38BDF8] to-[#0284C7]",
      textAccent: "text-[#0284C7]",
    },
  ][cardIdx % 2];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={`group/feat flex flex-col gap-2.5 p-4 sm:p-5 rounded-2xl border ${tileTheme.bg} shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default relative overflow-hidden`}
    >
      {/* Top Accent Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tileTheme.accent}`} />

      {/* Icon bubble */}
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-[16px] shadow-xs group-hover/feat:scale-110 transition-transform duration-200 flex-shrink-0 ${feat.iconBg}`}>
        {feat.icon}
      </div>

      {/* Title with highlighted keyword */}
      <h4 className="text-[11.5px] xs:text-[12px] sm:text-[13px] font-black leading-snug tracking-[-0.01em] text-[#0F172A] whitespace-nowrap overflow-hidden text-ellipsis">
        {feat.title.includes(feat.highlight) ? (
          <>
            {feat.title.split(feat.highlight)[0]}
            <span className={`font-black ${tileTheme.textAccent}`}>
              {feat.highlight}
            </span>
            {feat.title.split(feat.highlight)[1]}
          </>
        ) : (
          feat.title
        )}
      </h4>

      {/* Description */}
      <p className="text-[11.5px] sm:text-xs text-[#475569] leading-relaxed font-normal">
        {feat.desc}
      </p>
    </motion.div>
  );
}

/* ── Single card with per-element scroll refs ── */
function AudienceCard({ card, cardIdx }: { card: (typeof cards)[0]; cardIdx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.05 });

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.05 });

  const descRef = useRef<HTMLDivElement>(null);
  const descInView = useInView(descRef, { once: true, amount: 0.05 });

  const footerRef = useRef<HTMLDivElement>(null);
  const footerInView = useInView(footerRef, { once: true, amount: 0.05 });

  const cardTheme = [
    {
      bg: "bg-gradient-to-br from-emerald-100/90 via-emerald-50/60 to-white",
      border: "border-emerald-300/90",
      shadow: "shadow-[0_16px_45px_rgba(5,150,105,0.14)] group-hover:shadow-[0_28px_65px_rgba(5,150,105,0.24)]",
      descBg: "bg-gradient-to-br from-white via-emerald-50/90 to-teal-50/70 border-emerald-300/90 shadow-md shadow-emerald-500/10",
      headerGradient: "from-[#059669] via-[#10B981] to-[#0D9488]",
      headerTextColor: "text-white",
      headerSubTextColor: "text-white/90",
      iconBox: "bg-white/20 border-white/40 text-white",
      iconColor: "text-white",
      topLine: "from-[#059669] via-[#10B981] to-[#0D9488]",
      footerBg: "bg-gradient-to-r from-emerald-100/90 via-white to-emerald-50/90 border-emerald-200/90",
      accentColor: "#059669",
    },
    {
      bg: "bg-gradient-to-br from-sky-100/90 via-blue-50/60 to-white",
      border: "border-sky-300/90",
      shadow: "shadow-[0_16px_45px_rgba(2,132,199,0.12)] group-hover:shadow-[0_28px_65px_rgba(2,132,199,0.22)]",
      descBg: "bg-gradient-to-br from-white via-sky-50/90 to-blue-50/70 border-sky-300/90 shadow-md shadow-sky-500/10",
      headerGradient: "from-[#0284C7] via-[#2563EB] to-[#1D4ED8]",
      headerTextColor: "text-white",
      headerSubTextColor: "text-white/90",
      iconBox: "bg-white/20 border-white/40 text-white",
      iconColor: "text-white",
      topLine: "from-[#0284C7] via-[#2563EB] to-[#1D4ED8]",
      footerBg: "bg-gradient-to-r from-sky-100/90 via-white to-blue-50/90 border-sky-200/90",
      accentColor: "#0284C7",
    },
  ][cardIdx % 2];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: cardIdx * 0.1, ease: "easeOut" }}
      className={`group relative rounded-3xl border ${cardTheme.border} ${cardTheme.bg} overflow-hidden ${cardTheme.shadow} transition-all duration-500 hover:-translate-y-1.5 flex flex-col`}
    >
      {/* ── Cinematic Gradient Header ── */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 + cardIdx * 0.1 }}
        className={`relative bg-gradient-to-r ${cardTheme.headerGradient} px-7 pt-8 pb-12 sm:px-9 sm:pt-9 sm:pb-14 overflow-hidden shadow-md`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.35),transparent_60%)] pointer-events-none" />

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={headerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 + cardIdx * 0.1, ease: "easeOut" }}
          className={`relative z-10 w-12 h-12 rounded-2xl ${cardTheme.iconBox} border backdrop-blur-md flex items-center justify-center mb-4 shadow-lg`}
        >
          <svg className={`w-6 h-6 ${cardTheme.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
          </svg>
        </motion.div>

        {/* Label + Sublabel */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.28 + cardIdx * 0.1, ease: "easeOut" }}
          className="relative z-10"
        >
          <h3 className={`text-lg sm:text-2xl font-black ${cardTheme.headerTextColor} tracking-[-0.02em] leading-snug`}>
            {card.label}
          </h3>
          <p className={`${cardTheme.headerSubTextColor} text-xs sm:text-sm font-bold mt-1 tracking-wide`}>
            {card.sublabel}
          </p>
        </motion.div>

        {/* Decorative rings */}
        <div className="absolute bottom-[-36px] right-[-36px] w-[140px] h-[140px] rounded-full border-[28px] border-white/10 pointer-events-none" />
        <div className="absolute bottom-[-10px] right-[40px] w-[80px] h-[80px] rounded-full border-[14px] border-white/8 pointer-events-none" />
      </motion.div>

      {/* ── Floating Description Badge (Vibrant Mild Gradient Fill) ── */}
      <motion.div
        ref={descRef}
        initial={{ opacity: 0, y: 16 }}
        animate={descInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        className="relative -mt-6 mx-6 sm:mx-8 z-10"
      >
        <div className={`rounded-2xl ${cardTheme.descBg} border p-4 sm:p-5 shadow-lg`}>
          <div className={`h-1 bg-gradient-to-r ${cardTheme.topLine} rounded-t-2xl -mx-5 -mt-5 mb-3.5`} />
          <p className="text-[13px] sm:text-[14.5px] text-[#475569] leading-[1.75] font-normal text-justify">
            {card.description}
          </p>
        </div>
      </motion.div>

      {/* ── 2x2 Feature Grid ── */}
      <div className="p-6 sm:p-8 pt-5 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1">
        {card.features.map((feat, featIdx) => (
          <FeatureTile
            key={featIdx}
            feat={feat}
            card={card}
            delay={featIdx * 0.07}
            cardIdx={cardIdx}
          />
        ))}
      </div>

      {/* ── Footer ── */}
      <motion.div
        ref={footerRef}
        initial={{ opacity: 0 }}
        animate={footerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0"
      >
        <div className={`flex items-center gap-3 p-3 rounded-2xl ${cardTheme.footerBg} border shadow-2xs`}>
          <div
            className="w-6 h-6 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-xs"
            style={{ backgroundColor: cardTheme.accentColor }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-[11px] sm:text-xs text-[#0F172A] font-black tracking-wide">
            {card.footer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhoWeBuildFor() {
  return (
    <section className="relative py-8 sm:py-12 lg:py-14 bg-white overflow-hidden border-t border-slate-100">
      {/* ── Dot grid background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-35 pointer-events-none" />
      {/* ── Ambient glows ── */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[280px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[280px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <Container as="div">
        <div className="relative z-10 max-w-6xl mx-auto">

          {/* ── Section Header — Ultra-Clean, Zero-Sentence High-Impact UI/UX ── */}
          <div className="relative text-center max-w-4xl mx-auto mb-8 sm:mb-10">
            {/* Category Badge Pill */}
            <Reveal delay={0} y={14}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-[11px] font-black text-[#2563EB] tracking-[0.18em] uppercase mb-3.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                WHO WE BUILD FOR
              </div>
            </Reveal>

            {/* Main Title */}
            <Reveal delay={0.08} y={20}>
              <h2 className="text-[2.1rem] sm:text-[3rem] lg:text-[3.5rem] font-black text-[#0F172A] tracking-[-0.035em] leading-[1.12]">
                Built for{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Modern Organizations
                </span>
              </h2>
            </Reveal>

            {/* Punchy Capability Highlights — ZERO SENTENCES */}
            <Reveal delay={0.16} y={16}>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-[13px] font-black text-[#0F172A]">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>Startups & Businesses</span>
                </div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-[13px] font-black text-[#0F172A]">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>Coaching & Training Hubs</span>
                </div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-[13px] font-black text-[#0F172A]">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>Schools & Universities</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Dual Card Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {cards.map((card, cardIdx) => (
              <AudienceCard key={card.id} card={card} cardIdx={cardIdx} />
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
