import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { TrophyIcon, AwardIcon, ShieldIcon } from "./Icons";

export const Achievements: React.FC = () => {
  const { achievements, certifications } = PORTFOLIO_DATA;

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-cyan-400 mb-2 font-semibold">
            <span>// RECOGNITION & VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
            Honors & Certifications
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Hackathon victories, national engineering challenges, and official Google Cloud & Generative AI certifications.
          </p>
        </div>

        <div className="text-xs font-mono text-cyan-400 self-start md:self-auto">
          <span>● 5+ HACKATHON ACCOLADES</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Hackathons & Competitions */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 mb-2 reveal-on-scroll">
            <TrophyIcon size={16} className="text-cyan-400" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
              Competitive Hackathons & Awards
            </h3>
          </div>

          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="tech-card tech-card-interactive p-5 sm:p-6 rounded-2xl flex items-start gap-4 reveal-on-scroll bg-slate-950/60 border border-white/10"
            >
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 mt-0.5">
                <TrophyIcon size={18} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h4 className="font-bold text-sm sm:text-base font-display text-white">
                    {item.title}
                  </h4>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider ${
                      item.badge === "Winner"
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                        : item.badge === "Finalist"
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                        : "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                {item.organization && (
                  <p className="text-xs font-mono text-cyan-300/90 mb-1">
                    {item.organization}
                  </p>
                )}
                <p className="text-xs text-slate-300 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Professional Certifications */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 mb-2 reveal-on-scroll">
            <AwardIcon size={16} className="text-indigo-400" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
              Verified Technical Certifications
            </h3>
          </div>

          <div className="tech-card p-6 rounded-2xl space-y-5 reveal-on-scroll bg-slate-950/70 border border-white/10">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="pb-5 last:pb-0 border-b border-white/5 last:border-0 flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                  <ShieldIcon size={16} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-xs sm:text-sm text-white mb-1 leading-snug">
                    {cert.name}
                  </h4>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-400">
                      {cert.issuer}
                    </span>
                    {cert.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/10 text-cyan-300">
                        {cert.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
