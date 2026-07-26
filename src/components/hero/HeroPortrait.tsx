"use client";

import * as React from "react";
import Image from "next/image";
import { AvailabilityCard } from "./AvailabilityCard";
import { cn } from "@/lib/utils";

export type HeroPortraitProps = React.HTMLAttributes<HTMLDivElement> & {
  imageSrc?: string;
};

export const HeroPortrait = React.forwardRef<HTMLDivElement, HeroPortraitProps>(
  ({ className, imageSrc = "/mockup-image.png", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full h-[480px] sm:h-[580px] lg:h-[640px] xl:h-[680px] flex items-end justify-center select-none overflow-hidden rounded-[24px]",
          className
        )}
        {...props}
      >
        {/* Soft Lavender Circular Disc & Subtle Geometry Graphic matching image.png */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          {/* Main Large Soft Lavender Circle with ~4% Opacity Geometry Lines */}
          <div className="relative w-[440px] h-[440px] sm:w-[560px] sm:h-[560px] lg:w-[630px] lg:h-[630px] rounded-full bg-gradient-to-tr from-[#F2EDFF]/30 via-[#ECE6FF]/50 to-[#E6DFFF]/70 border border-[#7D63F2]/10 flex items-center justify-center">
            {/* Fine Diagonal Axis Technical Drawing Line */}
            <div className="absolute w-[140%] h-[1px] bg-[#7D63F2]/10 -rotate-35" />

            {/* Top-Right Technical Compass Star / Crosshair Axis Mark */}
            <div className="absolute top-[14%] right-[14%] w-7 h-7 flex items-center justify-center">
              <div className="absolute w-full h-[1px] bg-[#7D63F2]/15" />
              <div className="absolute h-full w-[1px] bg-[#7D63F2]/15" />
              <div className="w-2.5 h-2.5 rounded-full border border-[#7D63F2]/20" />
            </div>

            {/* Concentric Inner Ring Trace */}
            <div className="absolute inset-8 rounded-full border border-[#7D63F2]/5" />
          </div>
        </div>

        {/* Primary Authoritative Portrait Image (mockup-image.png) with soft ambient drop shadow */}
        <div className="relative z-10 w-full h-full flex items-end justify-center pt-2">
          <Image
            src={imageSrc}
            alt="Mohammad Razim - Full-Stack AI Engineer"
            width={800}
            height={1000}
            priority
            unoptimized
            className="object-cover object-top h-full w-auto max-w-none select-none transition-transform duration-300 hover:scale-[1.005] drop-shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
          />
        </div>

        {/* Floating Availability Card Overlay */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 max-w-[260px] sm:max-w-[290px]">
          <AvailabilityCard />
        </div>
      </div>
    );
  }
);

HeroPortrait.displayName = "HeroPortrait";
