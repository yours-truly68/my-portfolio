"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type QuoteSectionProps = React.HTMLAttributes<HTMLDivElement>;

export const QuoteSection = React.forwardRef<HTMLDivElement, QuoteSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full select-none mb-16 lg:mb-20 transition-colors duration-300",
          className
        )}
        {...props}
      >
        {/* Top Editorial Soft Gold Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 dark:via-[#8C7449]/50 to-transparent" />

        {/* Quote Editorial Canvas (Warm Ivory #FAF9F6 in Light Mode, Deep Atmospheric Canvas in Dark Mode) */}
        <div className="relative w-full py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 rounded-[24px] bg-[#FAF9F6]/80 dark:bg-transparent transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center overflow-hidden">
          {/* Left Editorial Typography Column (7 of 12 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-4 z-10">
            {/* Violet/Purple Quotation Mark Ornament */}
            <div className="text-[#7C3AED] dark:text-[#8B5CF6] text-5xl sm:text-6xl font-serif leading-none select-none -mb-2">
              “
            </div>

            {/* Hero Quote Heading (Rich Charcoal in Light Mode, Crisp White in Dark Mode) */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-normal leading-[1.18] text-[#1A1A1A] dark:text-white tracking-tight">
              Simplicity is the <br className="hidden sm:inline" />
              ultimate sophistication.
            </h2>

            {/* Author Attribution */}
            <div className="flex flex-col gap-1 pt-2">
              <span className="font-serif text-lg sm:text-xl text-[#B78A52] dark:text-[#C6A868] font-normal tracking-wide">
                — Leonardo da Vinci
              </span>
              <span className="text-xs sm:text-sm text-[#78716C] dark:text-slate-400 font-sans tracking-wide font-normal">
                Renaissance Artist, Inventor, and Thinker
              </span>
            </div>
          </div>

          {/* Right Museum Portrait Column (5 of 12 columns - Enlarged 30%) */}
          <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[340px] lg:h-[360px] flex items-center justify-end">
            <Image
              src="/da-vinci-editorial.png"
              alt="Leonardo da Vinci Museum Portrait and Renaissance Manuscript Diagrams"
              fill
              priority
              className="object-contain object-right pointer-events-none drop-shadow-xl opacity-95 dark:opacity-90 mix-blend-multiply dark:mix-blend-normal contrast-105 dark:contrast-100"
            />
          </div>
        </div>

        {/* Bottom Editorial Soft Gold Divider Line with Centered Star Emblem */}
        <div className="relative w-full flex items-center justify-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 dark:via-[#8C7449]/50 to-transparent" />
          <div className="absolute bg-[#FAF9F6] dark:bg-[var(--canvas)] px-3 text-[#B78A52] dark:text-[#C6A868] text-xs leading-none transition-colors duration-300">
            ✦
          </div>
        </div>
      </div>
    );
  }
);

QuoteSection.displayName = "QuoteSection";
