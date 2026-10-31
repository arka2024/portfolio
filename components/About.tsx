import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  GraduationCapIcon,
  ServerIcon,
  CpuIcon,
  SparklesIcon,
  DatabaseIcon,
  SearchIcon,
  CloudIcon,
  TerminalIcon,
} from "./Icons";

export const About: React.FC = () => {
  const { meta, education, focusAreas } = PORTFOLIO_DATA;

  const getFocusIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <ServerIcon size={18} className="text-cyan-400" />;
      case "Cpu":
        return <CpuIcon size={18} className="text-indigo-400" />;
      case "Sparkles":
        return <SparklesIcon size={18} className="text-violet-400" />;
      case "Database":
        return <DatabaseIcon size={18} className="text-emerald-400" />;
      case "Search":
        return <SearchIcon size={18} className="text-amber-400" />;
      case "Cloud":
        return <CloudIcon size={18} className="text-sky-400" />;
      default:
        return <TerminalIcon size={18} className="text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-cyan-400 mb-2 font-semibold">
            <span>// BACKGROUND & SYSTEMS SPECIALIZATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
            Engineering High-Throughput Backends & Applied AI
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Combining distributed systems fundamentals with practical AI engineering to deliver high-throughput, fault-tolerant services.
          </p>
        </div>

        <div className="text-xs font-mono text-slate-400 self-start md:self-auto">
          <span>ACADEMIC CGPA: </span>
          <span className="text-emerald-400 font-bold">{education.cgpa}</span>
        </div>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Education & Summary */}
        <div className="lg:col-span-5 flex flex-col gap-6 reveal-on-scroll">
          {/* Biography Card */}
          <div className="tech-card p-6 sm:p-8 rounded-2xl relative overflow-hidden bg-slate-950/70 border border-white/10">
            <h3 className="text-base font-bold font-display text-white mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Engineering Focus
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {meta.bio}
            </p>
          </div>

          {/* Education Card */}
          <div className="tech-card p-6 sm:p-8 rounded-2xl relative border-l-4 border-l-cyan-500 bg-slate-950/70 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCapIcon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">
                  {education.institution}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  {education.period}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-medium text-slate-200 mb-1">
              {education.degree}
            </p>
            <p className="text-xs font-mono text-slate-400 mb-4">
              Cumulative CGPA:{" "}
              <span className="font-bold text-emerald-400">{education.cgpa}</span>
            </p>

            <div className="pt-3 border-t border-white/10">
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                Core Coursework
              </p>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Focus Areas Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-on-scroll">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="tech-card tech-card-interactive p-5 rounded-2xl flex flex-col justify-between bg-slate-950/60 border border-white/10"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-white/5 w-fit border border-white/10 mb-3.5">
                  {getFocusIcon(area.icon)}
                </div>
                <h3 className="text-sm font-bold font-display text-white mb-1.5">
                  {area.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
