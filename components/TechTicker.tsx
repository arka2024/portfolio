import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const TechTicker: React.FC = () => {
  const { marqueeTech } = PORTFOLIO_DATA;
  // Duplicate for seamless 50% infinite translation
  const fullList = [...marqueeTech, ...marqueeTech];

  return (
    <div className="relative z-10 w-full overflow-hidden border-y border-white/10 bg-slate-950/40 backdrop-blur-md py-3.5 my-8">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="marquee-track flex items-center gap-6">
        {fullList.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors whitespace-nowrap shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
