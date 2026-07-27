"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { HeroBadge } from "./HeroBadge";
import { HeroHeading } from "./HeroHeading";
import { HeroDescription } from "./HeroDescription";
import { HeroActions } from "./HeroActions";
import { HeroTechStack } from "./HeroTechStack";
import { HeroPortrait } from "./HeroPortrait";
import { cn } from "@/lib/utils";

export type HeroProps = React.HTMLAttributes<HTMLElement>;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        {...props}
        className={cn(
          "relative isolate overflow-hidden w-full rounded-[18px] bg-[var(--canvas)] sm:py-8 sm:px-4 lg:py-8 lg:px-6 border border-black/[0.025] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.025)] transition-all select-none",
          className,
        )}
      >
        {/* Layer 3 — Multiple Overlapping Studio Lighting Sources via var(--hero-lighting) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 animate-breathe"
            style={{
              background: "var(--hero-lighting)",
            }}
          />
        </div>

        {/* Desktop 40/60 Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Editorial Content Column - 40% Width with Staggered Entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col gap-6 justify-center z-10"
          >
            <motion.div variants={itemVariants}>
              <HeroBadge label="CURIOUS & CREATIVE" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroHeading />
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroDescription />
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroActions />
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroTechStack />
            </motion.div>
          </motion.div>

          {/* Right Visual Portrait Column - 60% Width */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }}
            className="lg:col-span-7 w-full h-full"
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </section>
    );
  },
);

Hero.displayName = "Hero";
