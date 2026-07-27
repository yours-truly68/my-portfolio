"use client";

import * as React from "react";
import {
  Activity,
  Search,
  Sparkles,
  Utensils,
  Layers,
  FileText,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  projectId: string;
}

export const ProjectMockup = React.forwardRef<
  HTMLDivElement,
  ProjectMockupProps
>(({ className, projectId, ...props }, ref) => {
  switch (projectId) {
    case "forge":
      return (
        <div
          ref={ref}
          className={cn(
            "relative w-full h-full min-h-[170px] sm:min-h-[190px] rounded-xl overflow-hidden bg-[#0A0C12] border border-emerald-500/20 p-3 select-none flex flex-col justify-between font-mono text-[0.625rem]",
            className
          )}
          {...props}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>FORGE ORCHESTRATOR v2.4</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[0.55rem] border border-emerald-500/20">
              REACTION EXECUTION ACTIVE
            </span>
          </div>

          {/* Workflow Graph Nodes */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col gap-1">
              <span className="text-[0.55rem] text-slate-400">INPUT TASK</span>
              <span className="text-white font-semibold line-clamp-1">Refactor Module</span>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-2 flex flex-col gap-1 text-emerald-300">
              <span className="text-[0.55rem] text-emerald-400">AGENT NODE</span>
              <span className="font-semibold line-clamp-1">LLM ReAct Loop</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col gap-1">
              <span className="text-[0.55rem] text-slate-400">OUTPUT STATE</span>
              <span className="text-emerald-400 font-semibold line-clamp-1">Checkpoint Saved</span>
            </div>
          </div>

          {/* Execution Timeline & Telemetry Log */}
          <div className="bg-black/40 rounded-lg p-2 border border-white/5 flex flex-col gap-1 text-[0.55rem] text-slate-300">
            <div className="flex items-center justify-between text-slate-400">
              <span>Telemetry Logs</span>
              <span className="text-emerald-400 font-bold">Inngest Engine</span>
            </div>
            <p className="text-emerald-300 font-mono line-clamp-1">
              [11:42:09] &gt; Executed pytest harness (42/42 passed)
            </p>
          </div>
        </div>
      );

    case "kando":
      return (
        <div
          ref={ref}
          className={cn(
            "relative w-full h-full min-h-[170px] sm:min-h-[190px] rounded-xl overflow-hidden bg-[#FAFAFA] dark:bg-[#161822] border border-black/10 dark:border-white/10 p-3 select-none flex flex-col justify-between text-[0.625rem]",
            className
          )}
          {...props}
        >
          {/* Workspace Top Bar */}
          <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-2">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-white">
              <Layers className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Engineering Sprint #14</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-semibold text-[0.55rem]">
              Linear Sync
            </span>
          </div>

          {/* Kanban Columns */}
          <div className="grid grid-cols-3 gap-2 my-2 h-full">
            {/* Column 1 */}
            <div className="bg-slate-100 dark:bg-white/5 rounded-lg p-1.5 flex flex-col gap-1">
              <span className="font-bold text-slate-500 dark:text-slate-400 text-[0.55rem]">TO DO (3)</span>
              <div className="bg-white dark:bg-white/10 p-1.5 rounded shadow-xs text-slate-700 dark:text-slate-200 font-medium line-clamp-1">
                Auth Flow Refactor
              </div>
              <div className="bg-white dark:bg-white/10 p-1.5 rounded shadow-xs text-slate-700 dark:text-slate-200 font-medium line-clamp-1">
                SQL Schema Review
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-slate-100 dark:bg-white/5 rounded-lg p-1.5 flex flex-col gap-1 border-l-2 border-purple-500">
              <span className="font-bold text-purple-600 dark:text-purple-400 text-[0.55rem]">IN PROGRESS</span>
              <div className="bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/50 p-1.5 rounded shadow-xs text-purple-900 dark:text-purple-200 font-semibold line-clamp-1">
                Kanban Drag & Drop
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-slate-100 dark:bg-white/5 rounded-lg p-1.5 flex flex-col gap-1">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-[0.55rem]">DONE</span>
              <div className="bg-white dark:bg-white/10 p-1.5 rounded shadow-xs text-slate-500 line-through line-clamp-1">
                Zustand Store
              </div>
            </div>
          </div>
        </div>
      );

    case "g-bot":
    case "gale":
      return (
        <div
          ref={ref}
          className={cn(
            "relative w-full h-full min-h-[170px] sm:min-h-[190px] rounded-xl overflow-hidden bg-[#FAF7F2] dark:bg-[#1C1A17] border border-amber-500/20 p-3 select-none flex flex-col justify-between text-[0.625rem]",
            className
          )}
          {...props}
        >
          {/* Search Header Bar */}
          <div className="flex items-center justify-between border-b border-amber-500/10 pb-2">
            <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-bold">
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span>GALE MEDICAL RAG</span>
            </div>
            <span className="text-[0.55rem] text-amber-700 dark:text-amber-400 font-mono">
              Pinecone Index Active
            </span>
          </div>

          {/* Query & RAG Response Bubble */}
          <div className="flex flex-col gap-1.5 my-2">
            <div className="bg-amber-100/60 dark:bg-amber-900/20 text-amber-900 dark:text-amber-200 p-2 rounded-lg font-medium text-[0.6rem]">
              &ldquo;What are early clinical indicators of Type 2 Diabetes?&rdquo;
            </div>
            <div className="bg-white dark:bg-white/5 p-2 rounded-lg border border-amber-500/10 text-slate-700 dark:text-slate-300 leading-normal line-clamp-2">
              Gale RAG Answer: Key symptoms include persistent polyuria, polydipsia, fatigue, and blurred vision [1]...
            </div>
          </div>

          {/* Citation Sources Footer */}
          <div className="flex items-center justify-between text-[0.55rem] text-amber-700 dark:text-amber-400 border-t border-amber-500/10 pt-1.5">
            <span>[1] Gale Encyclopedia of Medicine (p. 412)</span>
            <span className="font-semibold text-amber-800 dark:text-amber-300">Grounded Citation</span>
          </div>
        </div>
      );

    case "purplexity":
      return (
        <div
          ref={ref}
          className={cn(
            "relative w-full h-full min-h-[170px] sm:min-h-[190px] rounded-xl overflow-hidden bg-[#100D1A] border border-purple-500/20 p-3 select-none flex flex-col justify-between text-[0.625rem]",
            className
          )}
          {...props}
        >
          {/* AI Search Query Input */}
          <div className="bg-white/5 border border-purple-500/30 rounded-lg px-2.5 py-1.5 flex items-center gap-2 text-white">
            <Search className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-medium text-[0.65rem]">Quantum computing applications in logistics</span>
          </div>

          {/* Web Sources & Reasoning Stream */}
          <div className="flex flex-col gap-1.5 my-1.5">
            <div className="flex items-center gap-1.5 text-[0.55rem] text-purple-300 font-mono">
              <Clock className="w-3 h-3 text-purple-400" />
              <span>Searching Tavily Web Retrieval... (5 sources indexed)</span>
            </div>

            <div className="bg-purple-950/40 border border-purple-800/40 p-2 rounded-lg text-purple-100 leading-normal line-clamp-2">
              Synthesized Summary: Quantum annealing algorithms optimize fleet routing and supply chain distribution with exponential speedup over classical solvers...
            </div>
          </div>

          {/* Citations Footer */}
          <div className="flex items-center justify-between text-[0.55rem] text-slate-400 border-t border-white/10 pt-1.5">
            <span className="text-purple-300">Groq LLM Streaming Active</span>
            <span className="font-mono text-emerald-400">Latency: 120ms</span>
          </div>
        </div>
      );

    case "zomatoes":
    case "jomatoes":
    default:
      return (
        <div
          ref={ref}
          className={cn(
            "relative w-full h-full min-h-[170px] sm:min-h-[190px] rounded-xl overflow-hidden bg-[#0D1612] border border-emerald-500/20 p-3 select-none flex flex-col justify-between text-[0.625rem]",
            className
          )}
          {...props}
        >
          {/* App Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Utensils className="w-3.5 h-3.5 text-emerald-400" />
              <span>ZOMATOES PLATFORM</span>
            </div>
            <div className="flex items-center gap-1 text-[0.55rem] text-emerald-300">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Razorpay Verified</span>
            </div>
          </div>

          {/* Restaurant Card Preview & Live Order Tracking */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col gap-1.5 my-1 text-white">
            <div className="flex items-center justify-between font-semibold">
              <span>Order #9281 — Out For Delivery</span>
              <span className="text-emerald-400 font-mono text-[0.55rem]">WebSockets Live</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full w-[82%] rounded-full animate-pulse" />
            </div>
            <div className="flex items-center justify-between text-[0.55rem] text-slate-300">
              <span>Kitchen Prep → Rider En Route</span>
              <span>ETA: 10 min</span>
            </div>
          </div>

          {/* Architecture Footer */}
          <div className="flex items-center justify-between text-[0.55rem] text-slate-400 border-t border-white/10 pt-1.5">
            <span>RabbitMQ Event Queue</span>
            <span className="font-mono text-emerald-400">Docker Monolith</span>
          </div>
        </div>
      );
  }
});

ProjectMockup.displayName = "ProjectMockup";

export function getProjectIcon(projectId: string) {
  switch (projectId) {
    case "forge":
      return <Sparkles className="w-4 h-4 text-emerald-400" />;
    case "kando":
      return <Layers className="w-4 h-4 text-purple-400" />;
    case "g-bot":
    case "gale":
      return <FileText className="w-4 h-4 text-amber-400" />;
    case "zomatoes":
    case "jomatoes":
      return <Utensils className="w-4 h-4 text-emerald-400" />;
    case "purplexity":
    default:
      return <Search className="w-4 h-4 text-purple-400" />;
  }
}
