import Container from "@/components/ui/Container";

const pillars = [
  {
    title: "AI-first approach",
    description:
      "AI and automation are built into the way we design software, workflows, and digital products.",
    points: [
      "Autonomous agent workflow integration",
      "Real-time decision intelligence",
      "Native tool & API orchestration",
    ],
    color: "#2563EB",
    iconBg: "bg-blue-50 text-[#2563EB] border-blue-100",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    title: "Built for scalability",
    description:
      "Our systems are designed to grow with your business, not limit it.",
    points: [
      "Modular micro-architecture design",
      "High-throughput load handling",
      "99.99% cloud reliability standards",
    ],
    color: "#0284C7",
    iconBg: "bg-sky-50 text-[#0284C7] border-sky-100",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "Real-world automation",
    description:
      "We automate repetitive work, simplify operations, and improve business efficiency.",
    points: [
      "Cross-platform data synchronization",
      "85% operational overhead reduction",
      "Autonomous error recovery & logging",
    ],
    color: "#059669",
    iconBg: "bg-emerald-50 text-[#059669] border-emerald-100",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Long-term technology partner",
    description:
      "We build products and systems that can evolve with your organization over time.",
    points: [
      "Continuous architectural evolution",
      "Maintainable, clean code standards",
      "Dedicated senior engineering support",
    ],
    color: "#7C3AED",
    iconBg: "bg-purple-50 text-[#7C3AED] border-purple-100",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function WhyAgaran() {
  return (
    <section id="why-agaran" className="relative py-14 sm:py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <Container as="div">
        <div className="max-w-6xl mx-auto px-1 sm:px-0">
          {/* ── Section Header (Title: Why Agaran + Subtitle) ── */}
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16 text-left">
            <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Why{" "}
              <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                Agaran
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl font-bold text-[#334155] leading-relaxed mt-3 tracking-tight">
              We build technology that is practical, scalable, and designed for long-term growth.
            </p>
          </div>

          {/* ── 4 Clean Cards Grid (No Numbers, No Extra Tags) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Clean Icon Container */}
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${pillar.iconBg} border flex items-center justify-center shadow-2xs mb-5`}>
                    {pillar.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#475569] mt-2 font-medium">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-200/70">
                  <div className="space-y-1.5 sm:space-y-2">
                    {pillar.points.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-[12.5px] sm:text-[13px] text-[#334155] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: pillar.color }} />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Signature Bottom Card (Mobile Responsive) ── */}
          <div className="mt-6 sm:mt-10 p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-50/90 via-sky-50/50 to-indigo-50/80 border border-blue-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#2563EB] flex items-center justify-center text-white text-lg sm:text-xl font-black shadow-md shadow-blue-500/20 shrink-0">
                ✦
              </div>
              <div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#2563EB] uppercase tracking-wider">
                  THE AGARAN COMMITMENT
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-black text-[#0F172A] tracking-tight mt-0.5 leading-snug">
                  Technology built for growth, automation, and long-term impact.
                </h4>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-extrabold shadow-md hover:shadow-blue-500/25 transition-all duration-150 shrink-0"
            >
              <span>Start a Conversation</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
