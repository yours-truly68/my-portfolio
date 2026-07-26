"use client";

import * as React from "react";
import { personalInfo } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export type ContactTerminalProps = React.HTMLAttributes<HTMLDivElement>;

export const ContactTerminal = React.forwardRef<HTMLDivElement, ContactTerminalProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full h-full min-h-[220px] rounded-2xl bg-[#05060d] border border-white/10 p-5 font-mono text-[0.725rem] text-slate-300 flex flex-col gap-3.5 select-none relative overflow-hidden shadow-inner",
          className
        )}
        {...props}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between text-slate-500 pb-1 border-b border-white/5">
          <span className="text-purple-400 font-semibold">mrazim@portfolio:~$</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
        </div>

        {/* Terminal Output Commands */}
        <div className="flex flex-col gap-3 text-[0.7rem] leading-relaxed">
          <div>
            <span className="text-slate-500 font-bold">&gt; whoami</span>
            <p className="text-slate-200 font-medium">Full Stack AI Engineer &amp; Builder</p>
          </div>

          <div>
            <span className="text-slate-500 font-bold">&gt; skills</span>
            <p className="text-purple-300/90 font-medium">
              Python, TypeScript, Next.js, FastAPI, PostgreSQL, AI Systems, Agentic workflows, System Design
            </p>
          </div>

          <div>
            <span className="text-slate-500 font-bold">&gt; availability</span>
            <p className="text-emerald-400 font-medium">
              {personalInfo.terminalAvailability}
            </p>
          </div>

          {/* Terminal Prompt with Blinking Cursor */}
          <div className="flex items-center gap-1 text-slate-500 pt-1">
            <span>l</span>
            <span className="w-2 h-4 bg-purple-400 animate-pulse inline-block" />
          </div>
        </div>
      </div>
    );
  }
);

ContactTerminal.displayName = "ContactTerminal";
