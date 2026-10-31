import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MetricsBar } from "@/components/MetricsBar";
import { TechTicker } from "@/components/TechTicker";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. NAV (Segmented Dock + Actions) */}
      <Navbar />

      <main className="flex-1">
        {/* 2. HERO (High-Performance Headline + Code Terminal + KPI Widgets) */}
        <Hero />

        {/* 3. METRICS / STATS BAR (Matching Reference 4-Card Grid) */}
        <MetricsBar />

        {/* 4. TECH TICKER (Continuous Streaming Module Ribbon) */}
        <TechTicker />

        {/* 5. ABOUT (Systems Specialization & Focus Areas) */}
        <About />

        {/* 6. EXPERIENCE (Verified Production Roles & Timeline) */}
        <Experience />

        {/* 7. SPOTLIGHT CASE STUDIES (With Live SVG Waveform, Metric Bars & Equalizer) */}
        <Projects />

        {/* 8. SKILLS (Architecture Matrix & Verified Tooling) */}
        <Skills />

        {/* 9. ACHIEVEMENTS & CERTIFICATIONS (Honors & Credentials) */}
        <Achievements />

        {/* 10. LEADERSHIP (Workshops & Mentorship) */}
        <Leadership />

        {/* 11. CONTACT (Executive Dossier Banner + Direct Dispatch Composer) */}
        <Contact />
      </main>

      {/* 12. FOOTER (Multi-Column Architecture Footer with System Status) */}
      <Footer />
    </div>
  );
}
