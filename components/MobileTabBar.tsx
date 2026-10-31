"use client";

import React, { useEffect, useState } from "react";
import {
  ServerIcon,
  BriefcaseIcon,
  CodeIcon,
  MailIcon,
  TerminalIcon,
} from "./Icons";

export const MobileTabBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { id: "hero", label: "Home", href: "#hero", icon: <TerminalIcon size={17} /> },
    { id: "experience", label: "Work", href: "#experience", icon: <BriefcaseIcon size={17} /> },
    { id: "projects", label: "Projects", href: "#projects", icon: <ServerIcon size={17} /> },
    { id: "skills", label: "Stack", href: "#skills", icon: <CodeIcon size={17} /> },
    { id: "contact", label: "Contact", href: "#contact", icon: <MailIcon size={17} /> },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-3 left-4 right-4 z-50 transition-transform duration-300 pointer-events-auto"
      aria-label="Mobile Navigation Dock"
    >
      <div className="mx-auto max-w-md px-3 py-2 rounded-2xl flex items-center justify-around shadow-[0_12px_35px_rgba(0,0,0,0.7)] border border-white/15 bg-slate-950/90 backdrop-blur-xl">
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <a
              key={tab.id}
              href={tab.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 select-none ${
                isActive
                  ? "text-cyan-300 font-semibold bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <div className="relative">
                {tab.icon}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4]" />
                )}
              </div>
              <span className="text-[10px] font-mono mt-1 tracking-tight">
                {tab.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
