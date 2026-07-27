"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/data/portfolioData";
import { ProjectPreviewImage } from "./ProjectPreviewImage";
import { cn } from "@/lib/utils";

export interface ProjectPreviewWindowProps {
  project: ProjectItem;
  isOpen: boolean;
  targetRect: DOMRect | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const emptySubscribe = () => () => {};

export function ProjectPreviewWindow({
  project,
  isOpen,
  targetRect,
  onMouseEnter,
  onMouseLeave,
}: ProjectPreviewWindowProps) {
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted || !isOpen || !targetRect || !project.preview) return null;

  // Mobile Touch screen check
  const isTouchScreen =
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
  if (isTouchScreen) return null;

  // Collision detection & viewport placement math
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const panelWidth = 380;
  const panelHeight = 265;

  // Preferred placement: Top-Right of hovered card
  let left = targetRect.right - 60;
  let top = targetRect.top - 20;

  // Collision check X (Flip left if overflow right)
  if (left + panelWidth > viewportWidth - 20) {
    left = targetRect.left - panelWidth + 60;
  }
  if (left < 20) {
    left = Math.max(20, (viewportWidth - panelWidth) / 2);
  }

  // Collision check Y
  if (top + panelHeight > viewportHeight - 20) {
    top = Math.max(20, viewportHeight - panelHeight - 20);
  }
  if (top < 20) {
    top = 20;
  }

  // Project accent color border & shadow tinting map
  const accentMap: Record<string, string> = {
    forge: "border-emerald-500/30 shadow-[0_20px_50px_rgba(16,185,129,0.18)]",
    kando: "border-purple-500/30 shadow-[0_20px_50px_rgba(168,85,247,0.18)]",
    gale: "border-amber-500/30 shadow-[0_20px_50px_rgba(217,119,6,0.18)]",
    purplexity:
      "border-purple-500/30 shadow-[0_20px_50px_rgba(147,51,234,0.18)]",
    zomatoes:
      "border-emerald-500/30 shadow-[0_20px_50px_rgba(16,185,129,0.18)]",
  };

  const accentClass = accentMap[project.id] || accentMap.forge;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key={`preview-window-${project.id}`}
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          position: "fixed",
          left: `${left}px`,
          top: `${top}px`,
          width: `${panelWidth}px`,
          zIndex: 99999,
        }}
        className={cn(
          "rounded-[20px] overflow-hidden bg-[#0D0F16]/95 backdrop-blur-md border select-none pointer-events-auto",
          accentClass,
        )}
      >
        {/* Editorial macOS Window Top Bar */}
        <div className="flex items-center justify-between px-3.5 py-2 bg-white/5 border-b border-white/10 text-white text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          <span className="font-mono font-bold text-[0.65rem] text-slate-300 uppercase tracking-wider">
            {project.name} Preview
          </span>

          <span className="w-4 h-4 opacity-0" />
        </div>

        {/* Product Preview Image Component */}
        <ProjectPreviewImage preview={project.preview} title={project.name} />
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
