"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: ProjectItem;
  isLarge?: boolean;
}

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, project, isLarge = false, ...props }, ref) => {
    // Exact theme mapping matching source of truth image for both Dark and Light modes
    const themeMap: Record<
      string,
      {
        cardBg: string;
        textPrimary: string;
        textMuted: string;
        badgeBg: string;
        badgeText: string;
        badgeDot: string;
        imgPath: string;
      }
    > = {
      forge: {
        cardBg:
          "bg-[#12131C] dark:bg-[#12131C] border border-white/10 text-white shadow-2xl hover:border-emerald-500/30",
        textPrimary: "text-white",
        textMuted: "text-slate-400",
        badgeBg: "bg-emerald-500/10 border border-emerald-500/20",
        badgeText: "text-emerald-400",
        badgeDot: "bg-emerald-400",
        imgPath: "/forge-preview.png",
      },
      kando: {
        cardBg:
          "bg-[#14141E] dark:bg-[#14141E] border border-white/10 text-white shadow-2xl hover:border-purple-500/30",
        textPrimary: "text-white",
        textMuted: "text-slate-400",
        badgeBg: "bg-purple-500/10 border border-purple-500/20",
        badgeText: "text-purple-300",
        badgeDot: "bg-purple-500",
        imgPath: "/kando-preview.png",
      },
      gale: {
        cardBg:
          "bg-[#151417] dark:bg-[#151417] border border-white/10 text-white shadow-xl hover:border-amber-500/30",
        textPrimary: "text-white",
        textMuted: "text-slate-400",
        badgeBg: "bg-amber-600/10 border border-amber-600/20",
        badgeText: "text-amber-400",
        badgeDot: "bg-amber-500",
        imgPath: "/gale-preview.png",
      },
      "g-bot": {
        cardBg:
          "bg-[#151417] dark:bg-[#151417] border border-white/10 text-white shadow-xl hover:border-amber-500/30",
        textPrimary: "text-white",
        textMuted: "text-slate-400",
        badgeBg: "bg-amber-600/10 border border-amber-600/20",
        badgeText: "text-amber-400",
        badgeDot: "bg-amber-500",
        imgPath: "/gale-preview.png",
      },
      purplexity: {
        cardBg:
          "bg-[#12101D] dark:bg-[#12101D] border border-white/10 text-white shadow-xl hover:border-purple-500/40",
        textPrimary: "text-white",
        textMuted: "text-slate-400",
        badgeBg: "bg-purple-600/10 border border-purple-600/20",
        badgeText: "text-purple-300",
        badgeDot: "bg-purple-500",
        imgPath: "/purplexity-preview.png",
      },
      zomatoes: {
        cardBg:
          "bg-[#121715] dark:bg-[#121715] border border-white/10 text-white shadow-xl hover:border-emerald-500/30",
        textPrimary: "text-white",
        textMuted: "text-slate-400",
        badgeBg: "bg-emerald-600/10 border border-emerald-600/20",
        badgeText: "text-emerald-400",
        badgeDot: "bg-emerald-400",
        imgPath: "/zomatoes-preview.png",
      },
    };

    const theme = themeMap[project.id] || themeMap.forge;
    const badgeLabel =
      project.id === "forge"
        ? "AI / AGENTS"
        : project.id === "kando"
        ? "PRODUCTIVITY"
        : project.id === "purplexity"
        ? "AI / SEARCH"
        : project.id === "gale" || project.id === "g-bot"
        ? "AI / RESEARCH"
        : "FOOD TECH";

    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex flex-col justify-between rounded-[24px] p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl select-none overflow-hidden min-h-[360px] sm:min-h-[400px]",
          theme.cardBg,
          className
        )}
        {...props}
      >
        {/* Top Action Header: Number + GitHub Arrow Button */}
        <div className="flex items-center justify-between z-20">
          <span className="text-[0.65rem] font-bold font-mono tracking-widest opacity-40">
            {project.number}
          </span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200 backdrop-blur-xs"
          >
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:rotate-[-45deg]" />
          </a>
        </div>

        {/* Card Body Split: Left Typography / Right Source-of-Truth Artwork */}
        {isLarge ? (
          /* Hero Card Layout (Forge & KANDo) */
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center z-20 h-full pt-3">
            <div className="sm:col-span-5 flex flex-col gap-3">
              <h3
                className={cn(
                  "text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight",
                  theme.textPrimary
                )}
              >
                {project.name}
              </h3>
              <p
                className={cn(
                  "text-xs sm:text-sm leading-relaxed font-normal line-clamp-3 max-w-sm",
                  theme.textMuted
                )}
              >
                {project.description}
              </p>
              <div className="pt-2">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.625rem] font-bold font-mono uppercase tracking-wider",
                    theme.badgeBg,
                    theme.badgeText
                  )}
                >
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full animate-pulse",
                      theme.badgeDot
                    )}
                  />
                  {badgeLabel}
                </span>
              </div>
            </div>

            {/* Exact Artwork Preview from Source of Truth */}
            <div className="sm:col-span-7 relative flex items-center justify-end h-[220px] sm:h-[260px] w-full transition-transform duration-500 ease-out group-hover:scale-105">
              <Image
                src={theme.imgPath}
                alt={`${project.name} Product Interface`}
                fill
                priority
                className="object-contain object-right pointer-events-none drop-shadow-2xl"
              />
            </div>
          </div>
        ) : (
          /* Supporting Card Layout (Gale, Purplexity, Zomatoes) */
          <div className="flex flex-col justify-between z-20 h-full gap-3 pt-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-1.5 max-w-[55%]">
                <h3
                  className={cn(
                    "text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight",
                    theme.textPrimary
                  )}
                >
                  {project.name}
                </h3>
                <p
                  className={cn(
                    "text-xs leading-relaxed font-normal line-clamp-3",
                    theme.textMuted
                  )}
                >
                  {project.description}
                </p>
                <div className="pt-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.625rem] font-bold font-mono uppercase tracking-wider",
                      theme.badgeBg,
                      theme.badgeText
                    )}
                  >
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full animate-pulse",
                        theme.badgeDot
                      )}
                    />
                    {badgeLabel}
                  </span>
                </div>
              </div>

              {/* Exact Artwork Preview from Source of Truth */}
              <div className="relative w-[45%] h-[180px] sm:h-[210px] transition-transform duration-500 ease-out group-hover:scale-105">
                <Image
                  src={theme.imgPath}
                  alt={`${project.name} Product Interface`}
                  fill
                  priority
                  className="object-contain object-right pointer-events-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
