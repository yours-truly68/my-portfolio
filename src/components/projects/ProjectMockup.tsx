"use client";

import * as React from "react";
import { Lock, Sparkles, Folder, MessageSquare, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  projectId: string;
}

export const ProjectMockup = React.forwardRef<HTMLDivElement, ProjectMockupProps>(
  ({ className, projectId, ...props }, ref) => {
    switch (projectId) {
      case "forge":
        return (
          <div
            ref={ref}
            className={cn(
              "relative w-full h-[250px] sm:h-[270px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0b0c16] via-[#111326] to-[#06060c] flex items-center justify-center select-none",
              className
            )}
            {...props}
          >
            {/* Deep Cosmic Space Grid & Glowing Celestial Particle Energy Core */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,97,255,0.4)_0%,transparent_70%)]" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-purple-500/20 animate-spin-slow" />
            <div className="absolute w-[210px] h-[210px] rounded-full border border-indigo-400/25" />
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-400 shadow-[0_0_50px_rgba(123,97,255,0.9)] flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
        );

      case "kando":
        return (
          <div
            ref={ref}
            className={cn(
              "relative w-full h-[250px] sm:h-[270px] rounded-2xl overflow-hidden bg-[#e6e5e3] p-3.5 flex flex-col gap-2 border border-black/5 select-none",
              className
            )}
            {...props}
          >
            {/* Kanban Workspace Minimal UI Mockup */}
            <div className="grid grid-cols-3 gap-2 h-full text-[0.6rem]">
              {/* To Do Column */}
              <div className="bg-[#eeedeb] rounded-xl p-2 flex flex-col gap-1.5 border border-black/5">
                <span className="font-bold text-slate-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> To Do
                </span>
                <div className="bg-white rounded-lg p-2 shadow-2xs font-medium text-slate-700">Auth Flow</div>
                <div className="bg-white rounded-lg p-2 shadow-2xs font-medium text-slate-700">API Integration</div>
                <div className="bg-white rounded-lg p-2 shadow-2xs font-medium text-slate-700">Database</div>
                <div className="bg-white rounded-lg p-2 shadow-2xs font-medium text-slate-700">Board Settings</div>
              </div>
              {/* In Progress Column */}
              <div className="bg-[#eeedeb] rounded-xl p-2 flex flex-col gap-1.5 border border-black/5">
                <span className="font-bold text-slate-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> In Progress
                </span>
                <div className="bg-white rounded-lg p-2 shadow-2xs font-medium text-slate-700">Drag & Drop</div>
                <div className="bg-white rounded-lg p-2 shadow-2xs font-medium text-slate-700">Database</div>
                <div className="bg-white rounded-lg p-2 shadow-2xs font-medium text-slate-700">AI Tags</div>
                <div className="bg-white rounded-lg p-2 shadow-2xs font-medium text-slate-700">Activity Logs</div>
              </div>
              {/* Done Column */}
              <div className="bg-[#eeedeb] rounded-xl p-2 flex flex-col gap-1.5 border border-black/5">
                <span className="font-bold text-slate-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Done
                </span>
                <div className="bg-white rounded-lg p-2 shadow-2xs font-medium text-slate-700">Assignees</div>
                <div className="bg-white rounded-lg p-2 shadow-2xs font-medium text-slate-700">Comments</div>
                <div className="bg-white rounded-lg p-2 shadow-2xs font-medium text-slate-700">Priority Tags</div>
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
              "relative w-full h-[250px] sm:h-[270px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#161826] via-[#1a1d32] to-[#0e101a] p-4 flex flex-col items-center justify-center border border-white/10 select-none",
              className
            )}
            {...props}
          >
            {/* Soft Medical Assistant Chat Card Mockup */}
            <div className="w-[92%] bg-white/95 rounded-2xl p-4 shadow-xl text-slate-800 flex flex-col gap-2.5 relative">
              <span className="text-xs text-slate-500 font-medium">
                What are the early signs of Type 2 diabetes?
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium bg-purple-50 p-3 rounded-xl border border-purple-100">
                Early signs of Type 2 diabetes can include increased thirst, frequent urination, fatigue...
              </p>
              <div className="absolute right-3.5 bottom-3.5 w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-md">
                <Lock className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        );

      case "purplexity":
      default:
        return (
          <div
            ref={ref}
            className={cn(
              "relative w-full h-[250px] sm:h-[270px] rounded-2xl overflow-hidden bg-[#090a12] p-4 flex flex-col gap-3 border border-white/10 select-none",
              className
            )}
            {...props}
          >
            {/* Premium Dark Search Platform Interface & Result Analytics Bars */}
            <div className="w-full bg-[#161828] rounded-xl px-3 py-2 flex items-center gap-2 border border-white/10 text-slate-400 text-xs">
              <Search className="w-3.5 h-3.5 text-purple-400" />
              <span>Search anything...</span>
            </div>
            <div className="flex items-center gap-2 text-[0.65rem] pt-1">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-600 text-white font-medium">All</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400">Code</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400">Docs</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400">Web</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400">More</span>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider">Top Results</span>
              <div className="h-2.5 w-4/5 bg-purple-500/80 rounded-full" />
              <div className="h-2.5 w-3/5 bg-purple-600/60 rounded-full" />
              <div className="h-2.5 w-2/3 bg-indigo-500/40 rounded-full" />
            </div>
          </div>
        );
    }
  }
);

ProjectMockup.displayName = "ProjectMockup";

export function getProjectIcon(projectId: string) {
  switch (projectId) {
    case "forge":
      return <Sparkles className="w-4 h-4 text-purple-400" />;
    case "kando":
      return <Folder className="w-4 h-4 text-amber-500" />;
    case "g-bot":
    case "gale":
      return <MessageSquare className="w-4 h-4 text-purple-400" />;
    case "purplexity":
    default:
      return <Search className="w-4 h-4 text-purple-400" />;
  }
}
