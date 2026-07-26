"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data";
import { cn } from "@/lib/utils";

export type ProjectIndexProps = React.HTMLAttributes<HTMLDivElement>;

export const ProjectIndex = React.forwardRef<HTMLDivElement, ProjectIndexProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="projects"
        className={cn("flex flex-col gap-6 scroll-mt-24", className)}
        {...props}
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-primary)]">
          Featured Engineering Projects
        </h2>

        <div className="flex flex-col gap-8">
          {projectsData.map((project) => (
            <article key={project.id} className="flex flex-col gap-2 break-inside-avoid">
              {/* Title & GitHub Link */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-[var(--color-text-primary)]">
                    {project.name}
                  </h3>
                  <span className="text-xs font-medium text-[var(--color-text-muted)]">
                    — {project.subtitle}
                  </span>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-brand-primary)] hover:underline shrink-0"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-normal">
                {project.description}
              </p>

              {/* Tech Stack Row */}
              <div className="text-xs font-mono font-medium text-[var(--color-text-muted)] flex flex-wrap items-center gap-1.5 pt-0.5">
                <span className="font-sans font-semibold text-[var(--color-text-primary)]">Stack:</span>
                <span>{project.techStack.join(" • ")}</span>
              </div>

              {/* Bullet Highlights */}
              <ul className="flex flex-col gap-1 pt-1 text-xs text-[var(--color-text-secondary)]">
                {project.highlights.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    );
  }
);

ProjectIndex.displayName = "ProjectIndex";
