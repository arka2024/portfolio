import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const MetricsBar: React.FC = () => {
  const { stats } = PORTFOLIO_DATA;

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="tech-card tech-card-interactive p-6 rounded-2xl flex flex-col justify-between border border-white/10 relative overflow-hidden group"
          >
            {/* Ambient subtle corner glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

            <div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-white drop-shadow-sm">
                  {item.value}
                </span>
                {item.suffix && (
                  <span className="text-2xl sm:text-3xl font-black font-mono text-cyan-400">
                    {item.suffix}
                  </span>
                )}
              </div>

              <h4 className="text-xs sm:text-sm font-bold font-display text-slate-100 tracking-wide uppercase mb-1">
                {item.label}
              </h4>
            </div>

            <p className="text-[11px] font-mono text-slate-400 leading-relaxed border-t border-white/5 pt-2 mt-2">
              {item.sublabel}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
