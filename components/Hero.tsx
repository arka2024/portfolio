"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  TerminalIcon,
} from "./Icons";

const CODE_SNIPPETS = {
  kafka: {
    filename: "kafka_stream_pipeline.ts",
    tab: "KafkaStream.ts",
    code: `// Zero-copy async event buffer with failure telemetry
pub async fn dispatch_policy_event(
  event: &EventPayload<PolicyRecord>
) -> Result<AckStream, KafkaError> {
  let partition = hash_key(&event.claim_id);
  
  // Traced producer-consumer dispatch with backoff
  let stream = KafkaProducer::builder()
    .topic("warranty.claims.lifecycle")
    .partition(partition)
    .batch_timeout(Duration::from_millis(12))
    .send(event).await?;
    
  telemetry::record_latency("< 14ms", &event.id);
  Ok(stream)
}`,
    status: "Fn: dispatch_policy_event() -> Result<AckStream>",
  },
  rag: {
    filename: "rag_evaluator.py",
    tab: "RAGEngine.py",
    code: `# RAG Semantic retrieval & hallucination evaluator
from langchain.vectorstores import OpenSearchVectorSearch
from langchain_openai import ChatOpenAI

async def evaluate_retrieval(query: str) -> EvaluationReport:
    vector_retriever = opensearch.as_retriever(k=10)
    documents = await vector_retriever.ainvoke(query)
    
    # Automated hallucination scoring cut manual QA by 60%
    groundedness = await judge_faithfulness(documents, query)
    assert groundedness.score >= 0.94, "Hallucination detected"
    
    return EvaluationReport(status="PASSED", recall=0.992)`,
    status: "Fn: evaluate_retrieval() -> EvaluationReport",
  },
  drizzle: {
    filename: "schema_migration.ts",
    tab: "DrizzleSchema.ts",
    code: `import { pgTable, uuid, varchar, timestamp, index } from "drizzle-orm/pg-core";

export const claimsTable = pgTable("claims_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  policyNumber: varchar("policy_number", { length: 64 }).notNull(),
  technicianId: uuid("technician_id"),
  state: varchar("state", { length: 32 }).default("DISPATCHED"),
  dispatchedAt: timestamp("dispatched_at").defaultNow(),
}, (table) => ({
  claimIdx: index("claim_lookup_idx").on(table.policyNumber, table.state),
}));`,
    status: "Schema: PostgreSQL via Drizzle ORM",
  },
};

export const Hero: React.FC = () => {
  const { meta } = PORTFOLIO_DATA;
  const [activeCodeTab, setActiveCodeTab] = useState<"kafka" | "rag" | "drizzle">("kafka");

  const activeSnippet = CODE_SNIPPETS[activeCodeTab];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto z-10">
        {/* Top Telemetry Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-8 border-b border-white/10 mb-10 text-xs font-mono">
          <div className="inline-flex items-center gap-2 text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="tracking-wide">
              AVAILABLE FOR APPLIED AI & BACKEND ADVISORY • PIPELINE OPEN
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 self-start sm:self-auto">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-cyan-400">
              SYS_BUILD: {meta.systemBuild}
            </span>
          </div>
        </div>

        {/* 2-Column High-Tech Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Subtitle, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Systems Tag */}
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-widest mb-3">
              <span>// STAFF SYSTEMS ENGINEER & ARCHITECT</span>
            </div>

            {/* Giant Title matching reference */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-display leading-[1.08] mb-4">
              Hi , I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Arkabrata Roy</span> Software Developer & AI Engineer.
            </h1>

            {/* Single-line Subtitle (strictly preserved) */}
            <div className="mb-6 inline-block max-w-full">
              <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs sm:text-sm text-cyan-300 font-medium whitespace-nowrap overflow-hidden text-ellipsis shadow-inner">
                Software Engineer — Backend Systems — Applied AI
              </div>
            </div>

            {/* Engineering Mission Bio */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Bridging the chasm between mechanical runtime efficiency and distributed reliability. Specializing in high-throughput microservices, event-driven streaming with <span className="text-white font-medium">Apache Kafka</span>, <span className="text-white font-medium">PostgreSQL & Drizzle</span> migrations, and resilient <span className="text-white font-medium">LangChain & RAG</span> semantic retrieval architectures.
            </p>

            {/* Hero Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="btn-cyan-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold tracking-wide"
              >
                <span>Explore Flagship Work</span>
                <span className="text-sm">↓</span>
              </a>

              <a
                href={meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-pill inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-medium"
              >
                <TerminalIcon size={14} className="text-cyan-400" />
                <span>Inspect Source Node</span>
                <ExternalLinkIcon size={13} />
              </a>

              <div className="inline-flex items-center gap-2 px-3 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs font-mono text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>SYS: 60 FPS SYNC</span>
              </div>
            </div>

            {/* Micro Tech Tags Row */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              {["Node.js / Express", "Apache Kafka", "PostgreSQL / Drizzle", "LangChain / RAG", "Docker & AWS", "gRPC Services"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal & Telemetry KPI Widgets */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* macOS Style Code Terminal Window */}
            <div className="tech-card rounded-2xl overflow-hidden border border-white/15 bg-slate-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Window Titlebar with Traffic Lights & File Tabs */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-slate-400 hidden sm:inline">
                    {activeSnippet.filename}
                  </span>
                </div>

                {/* Tab switchers */}
                <div className="flex items-center gap-1">
                  {(["kafka", "rag", "drizzle"] as const).map((tabKey) => {
                    const isSelected = activeCodeTab === tabKey;
                    return (
                      <button
                        key={tabKey}
                        onClick={() => setActiveCodeTab(tabKey)}
                        type="button"
                        className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider transition-colors ${
                          isSelected
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {CODE_SNIPPETS[tabKey].tab.split(".")[0]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Code Snippet Area */}
              <div className="p-4 font-mono text-xs overflow-x-auto text-slate-300 leading-relaxed max-h-[300px]">
                <pre className="text-slate-300">
                  <code>{activeSnippet.code}</code>
                </pre>
              </div>

              {/* Window Footer Status */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-cyan-400 truncate mr-2">{activeSnippet.status}</span>
                <span className="text-emerald-400 shrink-0">● Active Stream</span>
              </div>
            </div>

            {/* Two High-Tech Telemetry Cards Under Terminal (Matching Reference) */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="tech-card p-4 rounded-xl flex items-center gap-3 border border-white/10 bg-slate-950/70">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <span className="text-base font-black">⚡</span>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-white tracking-wide">
                    60 FPS
                  </h4>
                  <p className="font-mono text-[10px] text-cyan-400/90 uppercase">
                    ZERO JITTER • LOCKED
                  </p>
                </div>
              </div>

              <div className="tech-card p-4 rounded-xl flex items-center gap-3 border border-white/10 bg-slate-950/70">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                  <span className="text-base font-black">⏱</span>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-white tracking-wide">
                    &lt; 14ms
                  </h4>
                  <p className="font-mono text-[10px] text-indigo-300 uppercase">
                    P99 LATENCY ENGINE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
