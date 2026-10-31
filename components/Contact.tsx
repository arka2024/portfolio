"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  CopyIcon,
  CheckIcon,
  ArrowRightIcon,
  DownloadIcon,
  MapPinIcon,
  ShieldIcon,
} from "./Icons";

export const Contact: React.FC = () => {
  const { meta } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendState, setSendState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [sendError, setSendError] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(meta.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendState("sending");
    setSendError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          subject,
          message,
        }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "The message could not be sent.");
      }

      setSendState("success");
      setSenderName("");
      setSenderEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setSendState("error");
      setSendError(error instanceof Error ? error.message : "The message could not be sent.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ══════════════════════════════════════════════════════════════════════
         HIGH-IMPACT LEADERSHIP DOSSIER BANNER (Matching Reference Layout)
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="tech-card rounded-3xl p-8 sm:p-12 border border-white/15 bg-slate-950/80 shadow-[0_20px_60px_rgba(0,0,0,0.6)] reveal-on-scroll relative overflow-hidden mb-16">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Headline, Description, Direct CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-cyan-400 mb-4 font-semibold">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>// CONTACT: AVAILABILITY PIPELINE OPEN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display leading-[1.1] mb-5">
              Have an ambitious product ready for senior engineering leadership?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              Available for full-time backend engineering, high-throughput microservice design, Kafka event pipeline architecture, and applied AI & RAG system deployment.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${meta.email}`}
                className="btn-cyan-glow inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-bold tracking-wide"
              >
                <span>Initialize Engineering Discussion</span>
                <span className="text-sm">✉</span>
              </a>

              <a
                href={meta.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-pill inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-mono font-medium"
              >
                <DownloadIcon size={14} className="text-cyan-400" />
                <span>Download Technical Dossier</span>
              </a>
            </div>
          </div>

          {/* Right Column: Identity Dossier Card matching Reference Box */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-white/10 shadow-xl space-y-4 font-mono">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 p-[1px] shrink-0">
                  <div className="h-full w-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                    <span className="text-xs font-black text-cyan-400">AR</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {meta.name}
                  </h3>
                  <p className="text-[11px] text-cyan-300">
                    Backend Systems & Applied AI Engineer
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-slate-200">West Bengal, India / Remote</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Education:</span>
                  <span className="text-slate-200">KIIT (B.Tech CSE, 7.77 CGPA)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Ecosystem:</span>
                  <span className="text-slate-200">Node • Kafka • Postgres • AI</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">GitHub:</span>
                  <a
                    href={meta.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    github.com/arka2024 ↗
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <div className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-[11px] text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Response Time: &lt; 4 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Interactive Mail Composer Card */}
      <div className="tech-card rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto reveal-on-scroll">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold font-display text-white">
              Send a Direct Dispatch
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Direct connection to {meta.email}
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="btn-glass-pill px-3 py-1.5 rounded-lg text-xs font-mono inline-flex items-center gap-1.5"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <CheckIcon size={14} className="text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <CopyIcon size={14} className="text-cyan-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        <form onSubmit={handleSendMail} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="senderName" className="block text-xs font-mono text-slate-400 mb-1">
                Your Name / Team
              </label>
              <input
                id="senderName"
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Engineering Lead"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="senderEmail" className="block text-xs font-mono text-slate-400 mb-1">
                Your Email
              </label>
              <input
                id="senderEmail"
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-mono text-slate-400 mb-1">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Backend Role / Distributed Architecture"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1">
              Message Payload
            </label>
            <textarea
              id="message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Outline project parameters, stack requirements, or role specifications..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600 resize-none"
            />
          </div>

          {sendState === "success" && (
            <p className="text-xs font-mono text-emerald-400" role="status">
              Message sent successfully. I&apos;ll get back to you soon.
            </p>
          )}
          {sendState === "error" && (
            <p className="text-xs font-mono text-rose-400" role="alert">
              {sendError}
            </p>
          )}

          <button
            type="submit"
            disabled={sendState === "sending"}
            className="btn-cyan-glow w-full flex items-center justify-center gap-2 py-3 rounded-xl font-mono font-bold text-xs"
          >
            <span>{sendState === "sending" ? "Dispatching Message..." : "Send Message Directly"}</span>
            <ArrowRightIcon size={14} />
          </button>
        </form>
      </div>
    </section>
  );
};
