import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from "./Icons";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home & Overview", href: "#hero" },
    { label: "Work & Case Studies", href: "#projects" },
    { label: "Playground & Skills", href: "#skills" },
    { label: "Experience & Contact", href: "#experience" },
  ];

  const stackPills = [
    "Next.js 14",
    "Node.js",
    "Apache Kafka",
    "PostgreSQL",
    "Drizzle ORM",
    "LangChain",
    "Python / Flask",
    "Docker & AWS",
    "gRPC",
  ];

  return (
    <footer className="w-full border-t border-white/10 mt-20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-400 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        {/* Column 1: Monogram, Identity, System Status */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-slate-950">
                <span className="font-mono text-xs font-black text-cyan-400">AR</span>
              </div>
            </div>
            <span className="font-mono text-sm font-bold tracking-wider text-white">
              ARKABRATA<span className="text-cyan-400 font-extrabold">.DEV</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Engineering scalable distributed backend systems and crafting robust applied AI microservices.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-emerald-400 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors block py-0.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Primary Architecture Stack */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Primary Architecture Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {stackPills.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Column 4: Network & Sync */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Network & Sync
          </h4>
          <p className="text-xs text-slate-400">
            Connect for enterprise computing, high-scale greenfield ventures, and engineering mentorship.
          </p>
          <div className="flex items-center gap-2.5 pt-1">
            <a
              href={PORTFOLIO_DATA.meta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={PORTFOLIO_DATA.meta.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.meta.email}`}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Send an Email"
            >
              <MailIcon size={16} />
            </a>
            <a
              href={PORTFOLIO_DATA.meta.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Download Resume PDF"
            >
              <DownloadIcon size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Line */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
        <div>
          <p>© {currentYear} Arkabrata Roy. All systems engineered with precision.</p>
        </div>
        <div className="flex items-center gap-3">
          <span>Latency: 12ms</span>
          <span>•</span>
          <span className="text-cyan-400">FPS: 60+ LOCKED</span>
        </div>
      </div>
    </footer>
  );
};
