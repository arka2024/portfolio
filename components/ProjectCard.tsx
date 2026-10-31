import React from "react";
import { Project } from "@/data/portfolio";
import { GithubIcon, ExternalLinkIcon, ShieldIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  featured = false,
}) => {
  return (
    <article className="project-container h-full">
      <div
        className={`tech-card tech-card-interactive h-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
          featured
            ? "border-cyan-500/25 bg-slate-950/70 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
            : "bg-slate-950/50"
        }`}
      >
        <div>
          {/* Header Badges & Project Number Counter */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.categoryTag && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {project.categoryTag}
                </span>
              )}
              {project.badge && (
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide ${
                    project.isCaseStudy
                      ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1"
                      : "bg-white/5 text-slate-300 border border-white/10"
                  }`}
                >
                  {project.isCaseStudy && <ShieldIcon size={11} />}
                  {project.badge}
                </span>
              )}
            </div>

            {project.projectNumber && (
              <span className="text-xs font-mono text-slate-400 font-bold tracking-wider">
                {project.projectNumber}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="project-title font-black font-display text-white tracking-tight mb-2.5 hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-300 font-normal mb-5 leading-relaxed">
            {project.subtitle}
          </p>

          {/* ════════════════════════════════════════════════════════════════════
             FEATURED LIVE TELEMETRY WIDGETS (Matching Reference Design)
             ════════════════════════════════════════════════════════════════════ */}
          {featured && project.telemetryType === "wave" && (
            <div className="my-5 p-4 rounded-xl bg-slate-900/80 border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                <span className="text-slate-400">Throughput: Sync Cluster (12 Services)</span>
                <span className="text-cyan-400 font-bold">45,210 msg/s</span>
              </div>
              <div className="relative h-20 w-full">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Fill area */}
                  <path
                    d="M0,50 Q40,65 75,35 T150,45 T225,25 T300,30 L300,80 L0,80 Z"
                    fill="url(#waveGrad)"
                  />
                  {/* Stroke path */}
                  <path
                    d="M0,50 Q40,65 75,35 T150,45 T225,25 T300,30"
                    fill="none"
                    stroke="#00f2fe"
                    strokeWidth="2.5"
                  />
                  {/* Live pulsing coordinate node */}
                  <circle cx="225" cy="25" r="4.5" fill="#38bdf8" />
                  <circle cx="225" cy="25" r="9" fill="#00f2fe" opacity="0.4" className="wave-pulse-dot" />
                </svg>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                <span>P99: &lt; 14ms Latency</span>
                <span className="text-emerald-400">● 12 Microservices Synchronized</span>
              </div>
            </div>
          )}

          {featured && project.telemetryType === "metrics" && (
            <div className="my-5 p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-3 font-mono">
              <div className="flex items-center justify-between text-[11px] pb-1 border-b border-white/5">
                <span className="text-slate-400">Vector Index Retrieval & QA</span>
                <span className="text-cyan-400 font-bold">AWS OpenSearch + RAG</span>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-slate-300 mb-1">
                  <span>Semantic Recall Accuracy</span>
                  <span className="text-cyan-300 font-semibold">99.4%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full w-[99.4%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-slate-300 mb-1">
                  <span>Manual QA Testing Effort Cut</span>
                  <span className="text-emerald-400 font-semibold">60.0% Reduction</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[60%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-slate-300 mb-1">
                  <span>P99 Query Latency across 100+ Schools</span>
                  <span className="text-indigo-300 font-semibold">118ms</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full w-[35%]" />
                </div>
              </div>
            </div>
          )}

          {featured && project.telemetryType === "spectrum" && (
            <div className="my-5 p-4 rounded-xl bg-slate-900/80 border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                <span className="text-slate-400">Multi-Factor Heuristic Spectrum</span>
                <span className="text-cyan-400 font-bold">+28% Precision Lift</span>
              </div>
              {/* Equalizer Spectrum Bars */}
              <div className="flex items-end justify-between h-16 gap-1 px-1">
                {[45, 75, 90, 60, 85, 100, 70, 95, 55, 80, 65, 90, 75, 85].map((height, i) => (
                  <div
                    key={i}
                    style={{
                      height: `${height}%`,
                      animationDelay: `${i * 0.08}s`,
                    }}
                    className="spectrum-bar flex-1 bg-gradient-to-t from-cyan-600 via-cyan-400 to-sky-200 rounded-t-sm shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5 mt-2">
                <span>Cosine • Haversine • TF-IDF</span>
                <span className="text-cyan-300">500+ Test Profiles</span>
              </div>
            </div>
          )}

          {/* Regular impact bullets */}
          <ul className="space-y-2 mb-6 text-xs text-slate-300">
            {project.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-cyan-400 mt-0.5 text-xs">▸</span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Stack Tags with Effect C (Fluid Hover Staggering) */}
          <div className="pt-4 border-t border-white/10 mb-5">
            <div className="flex flex-wrap gap-1.5 stagger-group">
              {project.stack.map((tech, idx) => (
                <span
                  key={tech}
                  style={{ "--item-index": idx } as React.CSSProperties}
                  className="stagger-item px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links matching Reference Buttons */}
          <div className="flex items-center justify-between pt-2">
            {project.isCaseStudy ? (
              <>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <ShieldIcon size={13} className="text-amber-400" />
                  <span>Private Client NDA</span>
                </div>
                <span className="text-xs font-mono text-cyan-400/80 font-semibold">
                  Case Study Protected 🔒
                </span>
              </>
            ) : (
              <div className="flex items-center justify-between w-full">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass-pill inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-1.5 rounded-lg"
                  >
                    <GithubIcon size={14} className="text-cyan-400" />
                    <span>Inspect Deep Dive ↗</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyan-glow inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-lg"
                  >
                    <ExternalLinkIcon size={13} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
