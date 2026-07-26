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
        {...props}
        className={cn(
          "relative isolate overflow-hidden w-full rounded-[24px] bg-[#F8F7F4] sm:py-8 sm:px-4 lg:py-10 lg:px-8 border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all select-none",
          className
        )}
      >
        {/* Diffused Soft Ambient Lavender Lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[15%] right-[-5%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_70%_45%,rgba(125,99,242,0.08)_0%,transparent_72%)] blur-3xl" />
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
