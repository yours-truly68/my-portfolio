"use client";

import * as React from "react";
import { ArrowRight, Briefcase, Code2, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ExperienceTimelineItem } from "./ExperienceTimelineItem";
import { professionalExperience, educationData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export type ExperienceSectionProps = React.HTMLAttributes<HTMLDivElement>;

export const ExperienceSection = React.forwardRef<HTMLDivElement, ExperienceSectionProps>(
  ({ className, ...props }, ref) => {
    // CV Experience Data
    const workExperience = professionalExperience[0];
    const collegeEducation = educationData[0];

    return (
      <div ref={ref} className={cn("relative flex flex-col gap-8 select-none", className)} {...props}>
        {/* Miniature Hero Style Heading */}
        <SectionHeader
          eyebrow="EXPERIENCE"
          title={
            <span className="text-3xl sm:text-4xl font-bold leading-[1.08] tracking-tight block">
              My <span className="font-serif-italic text-[var(--color-brand-primary)] font-normal">journey</span> <br />
              so far.
            </span>
          }
          action={
            <Button
              variant="ghost"
              size="sm"
              className="text-[0.7rem] font-bold tracking-wider uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] gap-1.5 p-0 hover:bg-transparent"
              onClick={() => window.open("/Mohammad_Razim_Professional_CV.pdf", "_blank")}
            >
              VIEW FULL TIMELINE
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          }
        />

        <div className="relative flex justify-between items-start pt-2">
          {/* Vertical Timeline Items List */}
          <div className="flex flex-col w-full max-w-lg">
            {/* 1. Dflix Work Experience */}
            <ExperienceTimelineItem
              date={`${workExperience.period}`}
              company={workExperience.company}
              role={workExperience.role}
              description={workExperience.highlights[0]}
              dotColor="purple"
            />

            {/* 2. Personal & Open Source Experience */}
            <ExperienceTimelineItem
              date="2022 — PRESENT"
              company="Personal & Open Source"
              role="AI Systems & Tooling"
              description="Building tools, experimenting with AI systems, RAG pipelines, and contributing to the open-source developer community."
              dotColor="blue"
            />

            {/* 3. Education Milestone */}
            <ExperienceTimelineItem
              date="EDUCATION"
              company={collegeEducation.institution}
              role={collegeEducation.degree}
              description={`Focused on algorithms, distributed systems, AI applications, and software engineering. (${collegeEducation.grade})`}
              dotColor="green"
              isLast
            />
          </div>

          {/* Supporting Floating Icon Elements */}
          <div className="hidden sm:flex flex-col gap-3.5 pl-4 pt-2">
            <div className="w-8 h-8 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-center text-[var(--color-text-secondary)]">
              <Briefcase className="w-3.5 h-3.5 text-[var(--color-brand-primary)]" />
            </div>
            <div className="w-8 h-8 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-center text-[var(--color-text-secondary)]">
              <Code2 className="w-3.5 h-3.5 text-blue-500" />
            </div>
            <div className="w-8 h-8 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-center text-[var(--color-text-secondary)]">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ExperienceSection.displayName = "ExperienceSection";
