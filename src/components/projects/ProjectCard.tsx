"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { IconButton } from "@/components/ui/IconButton";
import { Badge } from "@/components/ui/Badge";
import { ProjectMockup, getProjectIcon } from "./ProjectMockup";
import { ProjectItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: ProjectItem;
}

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, project, ...props }, ref) => {
    const isLightCard = project.id === "kando";

    return (
      <Card
        ref={ref}
        variant={isLightCard ? "default" : "dark"}
        padding="none"
        className={cn(
          "group relative flex flex-col justify-between h-full min-h-[520px] sm:min-h-[560px] rounded-[24px] p-5 sm:p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 active:scale-[0.99] border select-none overflow-hidden",
          isLightCard
            ? "bg-[#F4F3F1] border-[rgba(0,0,0,0.06)] hover:border-black/20 text-[var(--color-text-primary)] shadow-[0_10px_30px_-5px_rgba(18,18,18,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(18,18,18,0.08)]"
            : "bg-[#0B0C14] border-white/10 hover:border-purple-500/40 text-white shadow-[0_12px_36px_-5px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_48px_-10px_rgba(0,0,0,0.6)]",
          className
        )}
        {...props}
      >
        {/* Top Header Bar: Number + Icon / Status Badge */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className={cn("text-xs font-bold font-mono tracking-widest", isLightCard ? "text-slate-500" : "text-white/40")}>
              {project.number}
            </span>
            {project.status ? (
              <Badge variant="success" dot size="sm" className="text-[0.65rem] font-semibold px-3 py-0.5">
                {project.status}
              </Badge>
            ) : (
              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-200 group-hover:scale-110", isLightCard ? "bg-white border-black/10" : "bg-white/10 border-white/15")}>
                {getProjectIcon(project.id)}
              </div>
            )}
          </div>

          {/* Title & Description with Refined Hierarchy */}
          <div className="flex flex-col gap-2">
            <h3 className={cn("text-[26px] font-extrabold tracking-tight leading-tight transition-colors duration-200", isLightCard ? "text-slate-900 group-hover:text-[var(--color-brand-primary)]" : "text-white group-hover:text-purple-300")}>
              {project.name}
            </h3>
            <p className={cn("text-xs leading-relaxed line-clamp-2 min-h-[34px] transition-opacity duration-200", isLightCard ? "text-slate-500 group-hover:text-slate-700" : "text-white/60 group-hover:text-white/80")}>
              {project.description}
            </p>
          </div>

          {/* Lightweight Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <Pill
                key={tech}
                variant={isLightCard ? "default" : "dark"}
                size="sm"
                className={cn(
                  "text-[0.65rem] font-medium px-2.5 py-0.5 opacity-90 transition-transform duration-200 group-hover:scale-105",
                  isLightCard
                    ? "bg-white/80 text-slate-600 border-black/5"
                    : "bg-white/10 text-white/70 border-white/10"
                )}
              >
                {tech}
              </Pill>
            ))}
          </div>
        </div>

        {/* Prominent Integrated Artwork Graphic Area */}
        <div className="relative mt-4 mb-2 w-full overflow-hidden rounded-2xl">
          <div className="transition-transform duration-300 ease-out group-hover:scale-[1.03]">
            <ProjectMockup projectId={project.id} />
          </div>

          {/* Floating Action Button (Arrow →) Inset from Edges */}
          <div className="absolute bottom-4 right-4 z-10">
            <IconButton
              variant={isLightCard ? "default" : "dark"}
              size="sm"
              aria-label={`View ${project.name} on GitHub`}
              className={cn(
                "w-9 h-9 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 active:scale-95",
                isLightCard
                  ? "bg-white/90 backdrop-blur border-black/10 text-slate-900 hover:bg-white"
                  : "bg-white/15 backdrop-blur border-white/20 text-white hover:bg-white/25"
              )}
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-[-45deg]" />
            </IconButton>
          </div>
        </div>
      </Card>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
