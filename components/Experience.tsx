import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { BriefcaseIcon } from "./Icons";

export const Experience: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-cyan-400 mb-2 font-semibold">
            <span>// VERIFIED PRODUCTION ROLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
            Experience & Engineering Impact
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            History debugging distributed microservices, building cross-service workflows, and integrating AI MVPs.
          </p>
        </div>

        <div className="text-xs font-mono text-cyan-400 self-start md:self-auto">
          <span>● 12 DISTRIBUTED SERVICES DEBUGGED</span>
        </div>
      </div>

      <div className="relative border-l border-cyan-500/30 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative reveal-on-scroll group"
          >
            {/* Timeline Node Marker */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center h-7 w-7 rounded-full bg-slate-950 border-2 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
              <BriefcaseIcon size={12} />
            </div>

            {/* Date Badge */}
            <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 mb-3">
              {exp.period}
            </div>

            {/* Tech Card Container */}
            <div className="tech-card p-6 sm:p-8 rounded-2xl bg-slate-950/70 border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium font-mono text-cyan-300">
                    {exp.company}
                  </p>
                </div>
                {exp.client && (
                  <span className="self-start sm:self-center px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 border border-cyan-500/25 text-cyan-300">
                    Client: {exp.client}
                  </span>
                )}
              </div>

              {/* Bullet points */}
              <ul className="space-y-3 mb-6 text-xs sm:text-sm text-slate-300 font-normal">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-0.5 font-mono text-xs">▸</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
