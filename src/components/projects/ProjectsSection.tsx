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

export const ProjectsSection = React.forwardRef<HTMLElement, ProjectsSectionProps>(
  ({ className, ...props }, ref) => {
    // Select top 4 featured projects from authoritative CV data
    const featuredProjects = projectsData.slice(0, 4);

    return (
      <Section
        ref={ref}
        id="projects"
        spacing="md"
        className={cn("w-full select-none", className)}
        {...props}
      >
        {/* Section Header */}
        <SectionHeader
          eyebrow="FEATURED PROJECTS"
          title="Selected Works"
          action={
            <Button
              variant="ghost"
              size="sm"
              className="text-[0.7rem] font-bold tracking-wider uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] gap-1.5 p-0 hover:bg-transparent"
              onClick={() => window.open("https://github.com/yours-truly68", "_blank")}
            >
              VIEW ALL PROJECTS
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          }
        />

        {/* 4-Column Project Card Grid with Increased Gutters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";
