import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightIcon } from "./Icons";

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header matching Reference */}
      <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-cyan-400 mb-2 font-semibold">
            <span>// FLAGSHIP CLIENT DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
            Spotlight Case Studies
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Selected engineering solutions balancing rigorous distributed concurrency, sub-millisecond query latency, and reliable AI architectures.
          </p>
        </div>

        <a
          href="#all-projects"
          className="btn-glass-pill self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium shrink-0"
        >
          <span>All 7+ Architecture Case Studies</span>
          <ArrowRightIcon size={14} className="text-cyan-400" />
        </a>
      </div>

      {/* Featured Projects Grid (Top 2 side by side, 3rd wide underneath — matching reference layout) */}
      <div className="space-y-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredProjects.slice(0, 2).map((project) => (
            <div key={project.id} className="reveal-on-scroll h-full">
              <ProjectCard project={project} featured={true} />
            </div>
          ))}
        </div>

        {featuredProjects[2] && (
          <div className="reveal-on-scroll">
            <ProjectCard project={featuredProjects[2]} featured={true} />
          </div>
        )}
      </div>

      {/* Secondary Projects Grid */}
      <div id="all-projects" className="pt-8">
        <div className="flex items-center gap-2.5 mb-6 reveal-on-scroll">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
            Additional Systems & Applied ML Repositories
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularProjects.map((project) => (
            <div key={project.id} className="reveal-on-scroll h-full">
              <ProjectCard project={project} featured={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
