"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrincipleCard } from "./PrincipleCard";
import { QuoteSection } from "@/components/quote";
import { principlesData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export type PrinciplesSectionProps = React.HTMLAttributes<HTMLElement>;

export const PrinciplesSection = React.forwardRef<HTMLElement, PrinciplesSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <Section
        ref={ref}
        id="principles"
        spacing="lg"
        className={cn("w-full select-none scroll-mt-24", className)}
        {...props}
      >
        {/* Quote Section Right Above Principles I Follow */}
        <QuoteSection />

        {/* Desktop 30/70 Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (~30% Width - 4 of 12 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <SectionHeader
              eyebrow="PRINCIPLES I FOLLOW"
              title={
                <span className="text-3xl sm:text-4xl font-bold leading-[1.08] tracking-tight block">
                  Principles <br />
                  that guide <br />
                  everything <br />
                  <span className="font-serif-italic text-[var(--color-brand-primary)] font-normal">I build.</span>
                </span>
              }
            />
          </div>

          {/* Right Column (~70% Width - 8 of 12 columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch pt-2 lg:pt-8">
            {principlesData.map((principle) => (
              <PrincipleCard key={principle.id} principle={principle} />
            ))}
          </div>
        </div>
      </Section>
    );
  }
);

PrinciplesSection.displayName = "PrinciplesSection";
