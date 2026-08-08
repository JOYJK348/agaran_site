"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group px-3.5 py-1.5 text-[14px] font-medium text-slate-600 transition-colors duration-200 hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 rounded-lg bg-blue-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-0" />
              <span className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[#2563EB] opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 ease-out z-10" />
            </Link>
          ))}
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
