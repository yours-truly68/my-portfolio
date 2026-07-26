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
          "group flex flex-col justify-between h-full min-h-[520px] sm:min-h-[560px] rounded-[24px] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 border select-none",
          isLightCard
            ? "bg-[#F4F3F1] border-[rgba(0,0,0,0.06)] text-[var(--color-text-primary)] shadow-[0_10px_30px_-5px_rgba(18,18,18,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(18,18,18,0.08)]"
            : "bg-[#0B0C14] border-white/10 text-white shadow-[0_12px_36px_-5px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_48px_-10px_rgba(0,0,0,0.6)]",
          className
        )}
        {...props}
      >
        {/* Card Header: Number + Icon / Status Badge */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className={cn("text-xs font-bold font-mono tracking-widest", isLightCard ? "text-slate-500" : "text-white/50")}>
              {project.number}
            </span>
            {project.status ? (
              <Badge variant="success" dot size="sm" className="text-[0.65rem] font-semibold px-3 py-0.5">
                {project.status}
              </Badge>
            ) : (
              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center border", isLightCard ? "bg-white border-black/10" : "bg-white/10 border-white/15")}>
                {getProjectIcon(project.id)}
              </div>
            )}
          </div>

          {/* Title & Description with Improved Spacing */}
          <div className="flex flex-col gap-2">
            <h3 className={cn("text-2xl font-bold tracking-tight", isLightCard ? "text-slate-900" : "text-white")}>
              {project.name}
            </h3>
            <p className={cn("text-xs leading-relaxed line-clamp-2 min-h-[36px]", isLightCard ? "text-slate-600" : "text-white/70")}>
              {project.description}
            </p>
          </div>

          {/* Lightweight Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {project.techStack.slice(0, 3).map((tech) => (
              <Pill
                key={tech}
                variant={isLightCard ? "default" : "dark"}
                size="sm"
                className={cn(
                  "text-[0.65rem] font-medium px-2.5 py-0.5",
                  isLightCard
                    ? "bg-white/80 text-slate-700 border-black/5"
                    : "bg-white/10 text-white/80 border-white/10"
                )}
              >
                {tech}
              </Pill>
            ))}
          </div>
        </div>

        {/* Dominant Center UI Graphic Preview */}
        <div className="my-5">
          <ProjectMockup projectId={project.id} />
        </div>

        {/* Bottom Editorial CTA Button */}
        <div className="flex items-center justify-between pt-2 mt-auto">
          <span className={cn("text-[0.65rem] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity", isLightCard ? "text-slate-600" : "text-white/60")}>
            View Case Study
          </span>
          <IconButton
            variant={isLightCard ? "default" : "dark"}
            size="sm"
            aria-label={`View ${project.name} on GitHub`}
            className={cn(
              "w-9 h-9 rounded-full transition-transform group-hover:translate-x-0.5",
              isLightCard
                ? "bg-white border-black/10 text-slate-900 hover:bg-slate-100"
                : "bg-white/10 border-white/15 text-white hover:bg-white/20"
            )}
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            <ArrowRight className="w-4 h-4" />
          </IconButton>
        </div>
      </Card>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
