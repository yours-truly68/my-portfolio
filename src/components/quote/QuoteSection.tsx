"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import LeonardoDark from "@/assets/leonardo_negative_preview.png";
export type QuoteSectionProps = React.HTMLAttributes<HTMLDivElement>;

export const QuoteSection = React.forwardRef<HTMLDivElement, QuoteSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full select-none py-20 lg:py-28 transition-colors duration-300",
          className,
        )}
        {...props}
      >
        {/* Top Divider */}
        <div className="relative mb-14">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D5B46A]/40 to-transparent" />
        </div>

        {/* Main Layout */}
        <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* ================= LEFT ================= */}

          <div className="relative z-20 lg:col-span-6">
            {/* Quote Mark */}

            <span className="font-serif text-6xl lg:text-7xl text-violet-500 leading-none">
              “
            </span>

            {/* Quote */}

            <h2 className="mt-2 max-w-2xl font-serif text-[2.8rem] sm:text-[3.2rem] lg:text-[4rem] leading-[1.08] tracking-[-0.03em] text-[var(--color-text-primary)]">
              Simplicity is the
              <br />
              ultimate <span className="italic">sophistication.</span>
            </h2>

            {/* Author */}

            <div className="mt-8 space-y-2">
              <p className="font-serif text-2xl text-[#B78A52] dark:text-[#C9A869]">
                — Leonardo da Vinci
              </p>

              <p className="text-sm tracking-wide text-[var(--color-text-secondary)]">
                Renaissance Artist, Inventor & Thinker
              </p>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative lg:col-span-6 flex justify-end items-center min-h-[420px]">
            {/* Background Manuscripts */}

            <div
              className="
              absolute
              inset-0
              opacity-[0.04]
              dark:opacity-[0.07]
              pointer-events-none
              bg-no-repeat
              bg-right
              bg-contain
            "
              style={{
                backgroundImage: "url('/da-vinci-notes.png')",
              }}
            />

            {/* Portrait */}

            <div className="relative z-10 pointer-events-none">
              <Image
                src="/da-vinci-editorial.png"
                alt="Leonardo da Vinci"
                width={760}
                height={900}
                priority
                className="
                w-auto
                h-[380px]
                sm:h-[430px]
                lg:h-[520px]

                object-contain
                object-right

                opacity-95


                contrast-105

                select-none

                [mask-image:linear-gradient(to_left,transparent_0%,black_18%,black_100%)]
                [-webkit-mask-image:linear-gradient(to_left,transparent_0%,black_18%,black_100%)]

                drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                dark:drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]
              "
              />
            </div>
          </div>
        </div>

        {/* Editorial Divider */}

        <div className="relative mt-20 flex items-center justify-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D5B46A]/40 to-transparent" />

          <div className="absolute bg-[var(--canvas)] px-5 text-[#B78A52] dark:text-[#C9A869] text-sm">
            ✦
          </div>
        </div>
      </section>
    );
  },
);

QuoteSection.displayName = "QuoteSection";
