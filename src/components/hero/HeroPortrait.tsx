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
          "relative w-full h-[480px] sm:h-[580px] lg:h-[640px] xl:h-[680px] flex items-end justify-center select-none",
          className
        )}
        {...props}
      >
        {/* Authoritative Portrait Image (mockup-image.png) - Scaled 60% Visual Dominance */}
        <div className="relative w-full h-full flex items-end justify-center pt-2">
          <Image
            src={imageSrc}
            alt="Mohammad Razim - Full-Stack AI Engineer"
            width={800}
            height={1000}
            priority
            unoptimized
            className="object-cover object-top h-full w-auto max-w-none select-none transition-transform duration-300 hover:scale-[1.005]"
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
