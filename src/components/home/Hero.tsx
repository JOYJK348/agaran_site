"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);


  // Interactive Canvas particle constellation network (Google DeepMind Antigravity Style)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouse = { x: -1000, y: -1000, active: false };

    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      baseAlpha: number;
      baseSize: number;
    }> = [];

    let w = 0;
    let h = 0;

    const initParticles = () => {
      w = window.innerWidth;
      h = window.innerHeight;

      // On mobile screens (< 768px), disable particle canvas completely for zero distraction
      if (w < 768) {
        particles = [];
        ctx.clearRect(0, 0, w, h);
        return;
      }

      canvas.width = w;
      canvas.height = h;

      particles = [];
      const count = Math.min(90, Math.floor((w * h) / 15000));
      for (let i = 0; i < count; i++) {
        const baseAlpha = Math.random() * 0.25 + 0.12;
        const baseSize = Math.random() * 2.5 + 1.2;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: baseSize,
          speedX: (Math.random() - 0.5) * 0.35,
          speedY: (Math.random() - 0.5) * 0.35,
          alpha: baseAlpha,
          baseAlpha,
          baseSize,
        });
      }
    };

    initParticles();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= -50 && x <= rect.width + 50 && y >= -50 && y <= rect.height + 50) {
        mouse.x = x;
        mouse.y = y;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        if (x >= -50 && x <= rect.width + 50 && y >= -50 && y <= rect.height + 50) {
          mouse.x = x;
          mouse.y = y;
          mouse.active = true;
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw Vibrant Interactive Spotlight (Mouse or Mobile Touch)
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const isMobile = w < 640;
        const glowRadius = isMobile ? 200 : 320;
        const radialGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        );
        radialGradient.addColorStop(0, "rgba(37, 99, 235, 0.32)");
        radialGradient.addColorStop(0.35, "rgba(59, 130, 246, 0.16)");
        radialGradient.addColorStop(0.7, "rgba(96, 165, 250, 0.05)");
        radialGradient.addColorStop(1, "rgba(37, 99, 235, 0)");

        ctx.fillStyle = radialGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Interaction: magnetism & glowing amplification
        let currentAlpha = p.baseAlpha;
        let currentSize = p.baseSize;

        if (mouse.active) {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          const maxRadius = w < 640 ? 180 : 260;

          if (mdist < maxRadius) {
            const factor = 1 - mdist / maxRadius;
            currentAlpha = Math.min(0.95, p.baseAlpha + factor * 0.8);
            currentSize = p.baseSize + factor * 3.0;

            // Connect laser line to touch / cursor position
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.6 * factor})`;
            ctx.lineWidth = 1.6 * factor;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${currentAlpha})`;
        ctx.fill();
      });

      // Inter-particle constellation lines
      const lineDistThreshold = w < 640 ? 100 : 150;
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < lineDistThreshold) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.14 * (1 - dist / lineDistThreshold)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  const fullHeadline = "Build Intelligent Solutions Automate What Matters";

  // Typewriter effect
  useEffect(() => {
    if (done) return;
    if (charIndex > fullHeadline.length) {
      setDone(true);
      return;
    }
    const timeout = setTimeout(() => {
      setDisplayText(fullHeadline.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, 25);
    return () => clearTimeout(timeout);
  }, [charIndex, done]);

  // Helper to format headline with blue highlighted words
  const renderHighlightedHeadline = () => {
    const textToRender = done ? fullHeadline : displayText;
    
    // Replace Intelligent Solutions and Automate What Matters with blue styled spans
    const parts = textToRender.split(/(Intelligent Solutions|Automate What Matters)/g);

    return (
      <>
        {parts.map((part, index) => {
          if (part === "Intelligent Solutions" || part === "Automate What Matters") {
            return (
              <span
                key={index}
                className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent font-extrabold lg:font-black tracking-[-0.035em]"
              >
                {part}
              </span>
            );
          }
          return part;
        })}
        {!done && (
          <span className="inline-block w-[3px] h-[0.85em] bg-[#2563EB] ml-1 align-middle animate-pulse rounded-sm" />
        )}
      </>
    );
  };

  const corePillars = [
    {
      name: "Business Automation",
      icon: (
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: "Workflow Automation",
      icon: (
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      name: "AI Agents",
      icon: (
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "SaaS Products",
      icon: (
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      name: "Education Technology",
      icon: (
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      name: "Custom Software",
      icon: (
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  const trustMetrics = [
    {
      title: "99.9% Uptime",
      subtitle: "Reliable Cloud Infrastructure",
      icon: (
        <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      title: "24/7 Operations",
      subtitle: "Autonomous AI Execution",
      icon: (
        <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "100% Custom",
      subtitle: "Built Around Your Workflows",
      icon: (
        <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Enterprise Grade",
      subtitle: "Security & Scalability",
      icon: (
        <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-white pt-16 pb-6 sm:pt-20 sm:pb-8">
      {/* Light constellation particle background (Desktop Only) */}
      <canvas
        ref={canvasRef}
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Soft ambient background glows */}
      <div
        className="absolute top-[-15%] right-[-10%] w-[650px] h-[650px] rounded-full bg-[#2563EB]/16 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#3B82F6]/14 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--container-padding)] relative z-10">
        {/* Split Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-10 items-center">
          {/* Left Text & CTA Column (Center-Aligned on Mobile, Left-Aligned on Desktop) */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left gap-5 sm:gap-6 lg:gap-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Pill Category Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#2563EB]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span>AI AGENTS &nbsp;•&nbsp; AUTOMATION &nbsp;•&nbsp; SOFTWARE</span>
            </motion.div>

            {/* Main Headline (Top-Notch Vercel/Apple Style Precision Typography) */}
            <h1 className="text-[1.8rem] xs:text-[2.1rem] sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem] xl:text-[3.15rem] font-extrabold lg:font-black leading-[1.22] xs:leading-[1.18] sm:leading-[1.14] lg:leading-[1.12] tracking-[-0.035em] text-slate-900 max-w-full lg:max-w-[570px] xl:max-w-[630px]">
              {renderHighlightedHeadline()}
            </h1>

            {/* Subheadline */}
            <motion.p
              className="text-sm sm:text-base lg:text-[1.05rem] font-medium leading-relaxed text-slate-600 max-w-full lg:max-w-[570px] tracking-normal -mt-1 sm:-mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Agaran builds intelligent technology and AI systems that help businesses work smarter and people learn, create, and grow.
            </motion.p>

            {/* Action Buttons (Stacked Full-Width on Mobile, Row on Desktop) */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-1 w-full max-w-xs sm:max-w-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button variant="primary" href="/what-we-do" className="text-sm sm:text-base px-7 py-3.5 sm:py-4 rounded-xl font-bold w-full sm:w-auto justify-center shadow-md hover:shadow-lg transition-all">
                Explore Solutions <span className="ml-1">→</span>
              </Button>
              <Button variant="secondary" href="/work" className="text-sm sm:text-base px-7 py-3.5 sm:py-4 rounded-xl font-bold w-full sm:w-auto justify-center border border-slate-200">
                View Our Work
              </Button>
            </motion.div>

            {/* Core Pillars & Capabilities Bar (Mobile-First Symmetrical Grid) */}
            <motion.div
              className="pt-5 sm:pt-6 w-full border-t border-slate-100 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#94A3B8]">
                  ENGINEERED FOR IMPACT
                </p>
              </div>
              
              <div className="grid grid-cols-2 xs:grid-cols-3 lg:flex lg:flex-wrap gap-2 sm:gap-2.5 w-full">
                {corePillars.map((pillar) => (
                  <div
                    key={pillar.name}
                    className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-xl sm:rounded-full bg-slate-50/90 border border-slate-200/80 text-[11px] xs:text-xs font-bold text-slate-700 transition-all hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 cursor-default shadow-2xs justify-start sm:justify-center min-w-0"
                  >
                    <span className="flex-shrink-0 text-[#2563EB]">{pillar.icon}</span>
                    <span className="truncate font-extrabold">{pillar.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 3D Showcase */}
          <motion.div
            className="lg:col-span-6 flex justify-center items-center w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[440px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Mobile-First Trust Metrics Bar — Hidden on Mobile View */}
        <motion.div
          className="mt-6 sm:mt-8 lg:mt-10 w-full hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          {trustMetrics.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + idx * 0.08, duration: 0.4 }}
              className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-slate-50/90 via-white to-blue-50/30 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-blue-300/80 transition-all group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-[13.5px] font-black text-[#0F172A] leading-tight tracking-tight truncate">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight mt-0.5 truncate">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

