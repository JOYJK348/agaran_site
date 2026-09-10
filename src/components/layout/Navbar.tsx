"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export interface WhatWeDoOverviewItem {
  title: string;
  subtext: string;
  href: string;
  badge: string;
  icon?: React.ReactNode;
}

export const WHAT_WE_DO_ITEMS: WhatWeDoOverviewItem[] = [
  {
    title: "Software Dev",
    subtext: "Web Apps, Mobile & Custom SaaS",
    href: "/what-we-do#software-development",
    badge: "01",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "AI Tools",
    subtext: "Agents, Chatbots & Semantic Search",
    href: "/what-we-do#ai-systems",
    badge: "02",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Automation",
    subtext: "Workflows & Auto Data Sync",
    href: "/what-we-do#business-automation",
    badge: "03",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "EdTech",
    subtext: "LMS, Exams & Student Portals",
    href: "/what-we-do#education-technology",
    badge: "04",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Cloud Scale",
    subtext: "Cloud Infra, Security & Scale",
    href: "/what-we-do#cloud-infrastructure",
    badge: "05",
  },
  {
    title: "Maintenance",
    subtext: "System Upgrades & Maintenance",
    href: "/what-we-do#existing-systems",
    badge: "06",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsDropdownOpen(false);
    const [path, hash] = href.split("#");
    if (typeof window !== "undefined" && window.location.pathname === path && hash) {
      e.preventDefault();
      const elem = document.getElementById(hash);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  // Handle scroll for sticky state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-sm border-b border-slate-200"
          : "bg-white border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-4 sm:px-6 lg:px-[var(--container-padding)] h-14 sm:h-16"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 rounded-lg group"
          aria-label="Agaran — Go to homepage"
        >
          <Image
            src="/logo-transparent.png"
            alt="Agaran Icon"
            width={48}
            height={48}
            className="h-9 sm:h-11 md:h-[52px] lg:h-[56px] w-auto object-contain"
            priority
          />
          <Image
            src="/agaran_font.png"
            alt="Agaran Wordmark"
            width={140}
            height={40}
            className="h-6 sm:h-8 md:h-[32px] lg:h-[36px] w-auto object-contain mix-blend-multiply"
            priority
          />
        </Link>

        {/* ── Desktop Navigation ── */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => {
            const isWhatWeDo = link.label.toLowerCase() === "what we do";
            if (isWhatWeDo) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className="relative group px-3.5 py-1.5 text-[14px] font-medium text-slate-600 transition-colors duration-200 hover:text-[#2563EB] flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 relative z-10 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-[#2563EB]" : "text-slate-400 group-hover:text-[#2563EB]"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute inset-0 rounded-lg bg-blue-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-0" />
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[#2563EB] opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 ease-out z-10" />
                  </Link>

                  {/* ── What We Do Hover Pop-Up Dropdown Menu (Seamless Professional List) ── */}
                  <div
                    className={`absolute top-full left-0 mt-2.5 w-[460px] p-3.5 rounded-2xl bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)] border border-slate-200/80 backdrop-blur-xl transition-all duration-200 z-50 overflow-hidden ${
                      isDropdownOpen
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {/* Minimal Top Blue Accent Bar */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] absolute top-0 left-0 right-0" />

                    {/* Header Bar */}
                    <div className="flex items-center justify-between px-1.5 pb-2 mb-1.5 border-b border-slate-100 pt-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                        <span className="text-[10.5px] font-mono font-bold tracking-widest text-[#2563EB] uppercase">
                          WHAT WE DO
                        </span>
                      </div>
                      <span className="text-[9.5px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                        6 CAPABILITIES
                      </span>
                    </div>

                    {/* 2-Column Box-less List Layout */}
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                      {WHAT_WE_DO_ITEMS.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={(e) => handleItemClick(e, item.href)}
                          className="group/item p-2 rounded-xl hover:bg-[#EFF6FF]/70 transition-colors duration-150 flex flex-col justify-center"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#2563EB] transition-colors">
                              {item.title}
                            </span>
                            <span className="text-[10px] font-mono font-medium text-slate-400 group-hover/item:text-[#2563EB] transition-colors">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-[11.5px] text-slate-500 font-normal line-clamp-1 group-hover/item:text-slate-700 transition-colors mt-0.5">
                            {item.subtext}
                          </p>
                        </Link>
                      ))}
                    </div>

                    {/* Footer Bar */}
                    <div className="mt-2 pt-2 px-1.5 border-t border-slate-100 flex items-center justify-between text-[11.5px]">
                      <span className="text-slate-500 font-medium">Explore full capability breakdown</span>
                      <Link
                        href="/what-we-do"
                        onClick={() => setIsDropdownOpen(false)}
                        className="font-bold text-[#2563EB] hover:text-[#1d4ed8] hover:underline transition-all"
                      >
                        View All &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative group px-3.5 py-1.5 text-[14px] font-medium text-slate-600 transition-colors duration-200 hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 rounded-lg bg-blue-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-0" />
                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[#2563EB] opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 ease-out z-10" />
              </Link>
            );
          })}
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2 rounded-lg text-[13.5px] font-semibold text-white bg-[#2563EB] hover:bg-[#1d4ed8] transition-colors duration-150 active:scale-[0.98]"
          >
            Start a Conversation
          </Link>
        </div>

        {/* ── Mobile Menu Toggle ── */}
        <div className="relative md:hidden">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-100 active:bg-slate-200/80 transition-colors duration-150"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>

          {/* Popover Menu */}
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={closeMenu}
            navLinks={navLinks}
          />
        </div>
      </nav>
    </header>
  );
}
