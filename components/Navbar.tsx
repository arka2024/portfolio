"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { MenuIcon, XIcon, DownloadIcon, ArrowRightIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const NAV_TABS = [
  { label: "Home & Overview", href: "#hero" },
  { label: "Work & Case Studies", href: "#projects" },
  { label: "Playground & Skills", href: "#skills" },
  { label: "Experience & Contact", href: "#experience" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#hero");

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <nav
        className="glass-nav-header mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-colors"
        aria-label="Main Architecture Navigation"
      >
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand Identity / Monogram */}
          <Link
            href="#hero"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Arkabrata Roy Architecture Home"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-violet-600 p-[1px] shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950">
                <span className="font-mono text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  AR
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors">
                ARKABRATA<span className="text-cyan-400 font-extrabold">.DEV</span>
              </span>
              <span className="text-[10px] font-mono tracking-tight text-slate-400 uppercase">
                BACKEND & AI ARCHITECT
              </span>
            </div>

            {/* Availability Pill (Desktop) */}
            <div className="hidden xl:inline-flex items-center gap-1.5 ml-2 px-2.5 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-[10px] font-mono text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>AVAILABLE FOR SELECT ROLES</span>
            </div>
          </Link>

          {/* Segmented Center Pill Navigation Bar */}
          <div className="hidden lg:flex items-center p-1 rounded-full bg-slate-950/60 border border-white/10 backdrop-blur-md stagger-group shadow-inner">
            {NAV_TABS.map((tab, index) => {
              const isActive = activeTab === tab.href;
              return (
                <a
                  key={tab.href}
                  href={tab.href}
                  onClick={() => setActiveTab(tab.href)}
                  style={{ "--item-index": index } as React.CSSProperties}
                  className={`stagger-item px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 select-none ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {tab.label}
                </a>
              );
            })}
          </div>

          {/* Action CTAs: Resume & Get In Touch Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* View Resume Pill */}
            <a
              href={PORTFOLIO_DATA.meta.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass-pill hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium"
              aria-label="View Resume PDF"
            >
              <DownloadIcon size={14} className="text-cyan-400" />
              <span>View Resume</span>
            </a>

            {/* Glowing Cyan 'Get In Touch' Pill */}
            <a
              href="#contact"
              className="btn-cyan-glow inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-mono tracking-tight"
            >
              <span>Get in Touch</span>
              <ArrowRightIcon size={13} />
            </a>

            <ThemeToggle />

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <XIcon size={19} /> : <MenuIcon size={19} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-white/10 flex flex-col gap-2">
            {NAV_TABS.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                onClick={() => {
                  setActiveTab(tab.href);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-colors"
              >
                {tab.label}
              </a>
            ))}
            <div className="pt-2 px-2 flex flex-col gap-2">
              <a
                href={PORTFOLIO_DATA.meta.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-semibold btn-glass-pill"
              >
                <DownloadIcon size={15} />
                <span>View Resume (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
