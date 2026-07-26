"use client";

import * as React from "react";
import { HeroBadge } from "./HeroBadge";
import { HeroHeading } from "./HeroHeading";
import { HeroDescription } from "./HeroDescription";
import { HeroActions } from "./HeroActions";
import { HeroTechStack } from "./HeroTechStack";
import { HeroPortrait } from "./HeroPortrait";
import { cn } from "@/lib/utils";

export type HeroProps = React.HTMLAttributes<HTMLElement>;

export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-[24px] bg-[#F8F8F6] border border-[rgba(0,0,0,0.04)] shadow-[0_2px_8px_rgba(0,0,0,0.015)] p-6 sm:p-8 lg:px-[36px] lg:py-[32px] transition-all select-none",
          className
        )}
        {...props}
      >
        {/* Soft Illuminated Lavender Atmosphere & Faint Geometry Rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-[2%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_65%_40%,rgba(123,97,255,0.09)_0%,rgba(168,85,247,0.03)_50%,transparent_75%)] blur-3xl" />
          <div className="absolute top-[18%] right-[8%] w-[500px] h-[500px] lg:w-[580px] lg:h-[580px] rounded-full border border-[var(--color-brand-primary)]/8" />
          <div className="absolute top-[10%] right-[4%] w-[660px] h-[660px] lg:w-[740px] lg:h-[740px] rounded-full border border-[var(--color-brand-primary)]/4" />
        </div>

        {/* Desktop 40/60 Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Editorial Content Column - 40% Width */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center z-10">
            <HeroBadge label="FULL STACK AI ENGINEER" />
            <HeroHeading />
            <HeroDescription />
            <HeroActions />
            <HeroTechStack />
          </div>

          {/* Right Visual Portrait Column - 60% Width */}
          <div className="lg:col-span-7 w-full h-full">
            <HeroPortrait />
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = "Hero";
