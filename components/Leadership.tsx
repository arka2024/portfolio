import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { UserIcon } from "./Icons";

export const Leadership: React.FC = () => {
  const { leadership } = PORTFOLIO_DATA;

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-cyan-400 mb-2 font-semibold">
            <span>// COMMUNITY & INITIATIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
            Leadership & Technical Mentorship
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Leading GenAI workshops, mentoring project teams, and fostering engineering best practices.
          </p>
        </div>

        <div className="text-xs font-mono text-cyan-400 self-start md:self-auto">
          <span>● 200+ STUDENTS MENTORED</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadership.map((item, idx) => (
          <div
            key={idx}
            className="tech-card tech-card-interactive rounded-2xl p-6 sm:p-7 flex flex-col justify-between reveal-on-scroll bg-slate-950/60 border border-white/10"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <UserIcon size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base font-display text-white leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300 font-medium">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-400">
                  {item.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-300 font-normal">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-0.5 text-xs">▸</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
