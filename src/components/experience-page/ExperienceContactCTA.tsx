"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type ExperienceContactCTAProps = React.HTMLAttributes<HTMLDivElement>;

export const ExperienceContactCTA = React.forwardRef<
  HTMLDivElement,
  ExperienceContactCTAProps
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("py-12 flex flex-col gap-6 select-none", className)}
      {...props}
    >
      <div className="flex flex-col gap-3">
        <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-brand-primary)] block">
          Next Steps
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]">
          Let&apos;s build something intelligent together.
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-xl">
          Interested in full-stack AI engineering, production systems, or technical collaboration? Reach out directly.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="primary"
          size="lg"
          className="group font-bold text-[0.7rem] uppercase tracking-wider rounded-xl px-5 h-11 gap-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          onClick={() => (window.location.href = "mailto:mohammedrazim880@gmail.com")}
        >
          <Mail className="w-3.5 h-3.5" />
          GET IN TOUCH
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>

        <Link href="/resume">
          <Button
            variant="secondary"
            size="lg"
            className="group font-bold text-[0.7rem] uppercase tracking-wider rounded-xl px-5 h-11 gap-2 bg-[var(--color-bg-card-subtle)] border-[var(--color-border-light)] text-[var(--color-text-primary)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            VIEW RESUME
            <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </Button>
        </Link>
      </div>
    </section>
  );
});

ExperienceContactCTA.displayName = "ExperienceContactCTA";
