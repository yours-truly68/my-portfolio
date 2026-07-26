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
    const [parallax, setParallax] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const x = Math.max(-8, Math.min(8, ((e.clientX - cx) / (rect.width / 2)) * 8));
      const y = Math.max(-8, Math.min(8, ((e.clientY - cy) / (rect.height / 2)) * 8));
      setParallax({ x, y });
    };

    const handleMouseLeave = () => {
      setParallax({ x: 0, y: 0 });
    };

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative w-full h-[480px] sm:h-[580px] lg:h-[640px] xl:h-[680px] flex items-end justify-center select-none overflow-hidden rounded-[24px] group",
          className,
        )}
        {...props}
      >
        {/* Soft Lavender Circular Disc & Technical Geometry Graphic matching image.png */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[440px] h-[440px] sm:w-[560px] sm:h-[560px] lg:w-[630px] lg:h-[630px] rounded-full bg-gradient-to-tr from-[#F2EDFF]/30 via-[#ECE6FF]/60 to-[#E6DFFF] flex items-center justify-center animate-breathe">
            {/* Fine Diagonal Axis Technical Drawing Line */}
            <div className="absolute w-[140%] h-[2px] bg-[#7B61FF]/25 -rotate-35" />

            {/* Top-Right Technical Compass Star / Crosshair Axis Mark */}
            <div className="absolute top-[14%] right-[14%] w-7 h-7 flex items-center justify-center">
              <div className="absolute w-full h-[1px] bg-[#7B61FF]/30" />
              <div className="absolute h-full w-[1px] bg-[#7B61FF]/30" />
              <div className="w-2.5 h-2.5 rounded-full border border-[#7B61FF]/40" />
            </div>

            {/* Concentric Inner Ring Trace */}
            <div className="absolute inset-8 rounded-full border border-[#7B61FF]/10" />
          </div>
        </div>

        {/* Primary Authoritative Portrait Image (mockup-image.png) with Subtle Parallax */}
        <div
          className="relative z-10 w-full h-full flex items-end justify-center pt-2 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0px)`,
          }}
        >
          <Image
            src={imageSrc}
            alt="Mohammad Razim - Full-Stack AI Engineer"
            width={800}
            height={1000}
            priority
            unoptimized
            className="object-cover object-top h-full w-auto max-w-none select-none transition-transform duration-300 group-hover:scale-[1.008]"
          />
        </div>

        {/* Floating Availability Card Overlay */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 max-w-[260px] sm:max-w-[290px] transition-transform duration-300 group-hover:-translate-y-1">
          <AvailabilityCard />
        </div>
      </div>
    );
  },
);

HeroPortrait.displayName = "HeroPortrait";
