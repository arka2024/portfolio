import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  CpuIcon,
  CloudIcon,
  GitBranchIcon,
} from "./Icons";

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  const getSkillCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <CodeIcon size={18} className="text-cyan-400" />;
      case "Server":
        return <ServerIcon size={18} className="text-indigo-400" />;
      case "Database":
        return <DatabaseIcon size={18} className="text-emerald-400" />;
      case "Cpu":
        return <CpuIcon size={18} className="text-violet-400" />;
      case "Cloud":
        return <CloudIcon size={18} className="text-sky-400" />;
      case "GitBranch":
        return <GitBranchIcon size={18} className="text-amber-400" />;
      default:
        return <CodeIcon size={18} className="text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-cyan-400 mb-2 font-semibold">
            <span>// ARCHITECTURE MATRIX & PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
            Technical Stack & Ecosystem
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Battle-tested microservice runtimes, distributed event streaming, relational indexing, and modern AI/RAG tooling.
          </p>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300 self-start md:self-auto">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span>VERIFIED PRODUCTION COMPETENCIES</span>
        </div>
      </div>

      {/* Grouped High-Tech Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="tech-card tech-card-interactive rounded-2xl p-6 sm:p-7 flex flex-col justify-between reveal-on-scroll bg-slate-950/60"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {getSkillCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-bold text-sm font-display text-white tracking-wide">
                    {cat.category}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-950/40 border border-cyan-800/30 px-2 py-0.5 rounded">
                  {cat.skills.length} MODULES
                </span>
              </div>

              {/* Skill Tags with Effect C (Fluid Hover Staggering) */}
              <div className="flex flex-wrap gap-2 stagger-group">
                {cat.skills.map((skill, idx) => (
                  <span
                    key={skill}
                    style={{ "--item-index": idx } as React.CSSProperties}
                    className="stagger-item px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-slate-400 flex items-center justify-between">
              <span>ACTIVE DEPLOYMENTS</span>
              <span className="text-emerald-400 font-semibold">● Production Ready</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
