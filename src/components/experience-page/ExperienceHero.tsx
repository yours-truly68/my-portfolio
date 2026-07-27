"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export type ExperienceHeroProps = React.HTMLAttributes<HTMLDivElement>;

export const ExperienceHero = React.forwardRef<HTMLDivElement, ExperienceHeroProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8 sm:py-12 border-b border-black/[0.04] dark:border-white/[0.04] select-none overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Left Column Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2"
          >
            <Badge variant="brand" size="sm" className="text-[0.65rem] font-bold tracking-wider uppercase px-3 py-1">
              PROFESSIONAL EXPERIENCE
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-text-primary)] leading-[1.1]"
          >
            Building products, solving problems, and{" "}
            <span className="font-serif-italic font-normal text-[var(--color-brand-primary)]">
              growing
            </span>{" "}
            through every opportunity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed pt-1"
          >
            A curated collection of software internships, freelance engagements, client work, design systems, and full-stack engineering experiences that shape how I design and build software today.
          </motion.p>
        </div>

        {/* Right Column: 3D Glassmorphic Isometric Timeline Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-[420px] aspect-square rounded-[28px] overflow-hidden border border-purple-500/20 shadow-2xl bg-[#0B0C14] p-2 group">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,97,255,0.2)_0%,transparent_70%)] animate-pulse pointer-events-none" />

            <Image
              src="/experience-timeline-mockup.png"
              alt="3D Glassmorphic Experience Timeline Mockup"
              width={600}
              height={600}
              priority
              className="w-full h-full object-cover rounded-[22px] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </header>
    );
  }
);

ExperienceHero.displayName = "ExperienceHero";
