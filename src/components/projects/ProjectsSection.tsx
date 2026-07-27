"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export type ProjectsSectionProps = React.HTMLAttributes<HTMLElement>;

export const ProjectsSection = React.forwardRef<
  HTMLElement,
  ProjectsSectionProps
>(({ className, ...props }, ref) => {
  const topRowProjects = projectsData.slice(0, 2); // Forge & KANDo
  const bottomRowProjects = projectsData.slice(2, 5); // Purplexity, Gale, Zomatoes

  return (
    <Section
      ref={ref}
      id="projects"
      spacing="md"
      className={cn("w-full select-none", className)}
      {...props}
    >
      {/* Editorial Selected Works Section Wrapper */}
      <div className="w-full flex flex-col">
        {/* Section Header */}
        <SectionHeader
          eyebrow="FEATURED PROJECTS"
          title="Selected Work"
          action={
            <Button
              variant="ghost"
              size="sm"
              className="group text-[0.7rem] font-bold tracking-wider uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] gap-1.5 p-0 hover:bg-transparent transition-colors"
              onClick={() =>
                window.open("https://github.com/yours-truly68", "_blank")
              }
            >
              VIEW ALL PROJECTS
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          }
        />

        {/* Compact Single-Screen Bento Grid */}
        <div className="flex flex-col gap-3 pt-1">
          {/* Top Row: 2 Hero Cards (Forge & KANDo) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
            {topRowProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isLarge />
            ))}
          </div>

          {/* Bottom Row: 3 Supporting Cards (Purplexity, Gale, Zomatoes) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
            {bottomRowProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
});

ProjectsSection.displayName = "ProjectsSection";
