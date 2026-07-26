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
      const x = Math.max(
        -8,
        Math.min(8, ((e.clientX - cx) / (rect.width / 2)) * 8),
      );
      const y = Math.max(
        -8,
        Math.min(8, ((e.clientY - cy) / (rect.height / 2)) * 8),
      );
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
          "relative w-full h-[480px] sm:h-[580px] lg:h-[640px] xl:h-[680px] flex items-end justify-center select-none overflow-hidden rounded-[20px] group",
          className,
        )}
        {...props}
      >
        {/* Layer 3 — Overlapping Ambient Studio Lighting Sources */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 animate-breathe opacity-95"
            style={{
              background: "var(--hero-lighting)",
            }}
          />
        </div>

        {/* Layer 4 — Blueprint Geometry (4% - 12% Opacity Engineering Graphics) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          {/* Main Editorial Lavender Graphic Disc */}
          <div
            className="relative w-[440px] h-[440px] sm:w-[560px] sm:h-[560px] lg:w-[630px] lg:h-[630px] rounded-full flex items-center justify-center"
            style={{
              background: "var(--hero-disc)",
              boxShadow: "var(--shadow-hero)",
            }}
          >
            {/* Fine Diagonal Axis Drawing Line (8% Opacity) */}
            <div className="absolute w-[140%] h-[1px] bg-[var(--blueprint)] -rotate-35" />
            <div className="absolute w-[140%] h-[1px] bg-[var(--blueprint)] rotate-55" />

            {/* Construction Circle 1 (10% Opacity) */}
            <div className="absolute inset-8 sm:inset-10 rounded-full border border-[var(--blueprint-strong)] border-dashed" />

            {/* Alignment Guide Ring 2 (6% Opacity) */}
            <div className="absolute inset-16 sm:inset-20 rounded-full border border-[var(--blueprint)]" />

            {/* Top-Right Technical Compass Star Crosshair Axis Mark (14% Opacity) */}
            <div className="absolute top-[14%] right-[14%] w-7 h-7 flex items-center justify-center">
              <div className="absolute w-full h-[1px] bg-[var(--blueprint-crosshair)]" />
              <div className="absolute h-full w-[1px] bg-[var(--blueprint-crosshair)]" />
              <div className="w-2.5 h-2.5 rounded-full border border-[var(--blueprint-crosshair)] bg-white/40" />
            </div>

            {/* Bottom-Left Measurement Cross Mark (8% Opacity) */}
            <div className="absolute bottom-[16%] left-[16%] w-4 h-4 flex items-center justify-center">
              <div className="absolute w-full h-[1px] bg-[var(--blueprint)]" />
              <div className="absolute h-full w-[1px] bg-[var(--blueprint)]" />
            </div>
          </div>
        </div>

        {/* Primary Authoritative Portrait Image (mockup-image.png) with Subtle Parallax */}
        <div
          className="relative z-10 w-full h-full flex items-end justify-center pt-2 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0px)`,
          }}
        >
          {/* Subtle Ambient Rim Light Diffusion */}
          <div className="absolute bottom-10 w-64 h-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(123,97,255,0.12)_0%,transparent_70%)] blur-2xl pointer-events-none" />

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
