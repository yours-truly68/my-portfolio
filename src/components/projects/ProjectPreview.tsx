"use client";

import * as React from "react";
import { ProjectItem } from "@/data/portfolioData";
import { useProjectPreview } from "@/hooks/useProjectPreview";
import { ProjectPreviewWindow } from "./ProjectPreviewWindow";

export interface ProjectPreviewProps {
  project: ProjectItem;
  children: (props: {
    handleMouseEnterCard: (e: React.MouseEvent<HTMLElement>) => void;
    handleMouseLeaveCard: () => void;
    handleFocus: (e: React.FocusEvent<HTMLElement>) => void;
    handleBlur: () => void;
  }) => React.ReactNode;
}

export function ProjectPreview({ project, children }: ProjectPreviewProps) {
  const {
    isOpen,
    targetRect,
    handleMouseEnterCard,
    handleMouseLeaveCard,
    handleMouseEnterPreview,
    handleMouseLeavePreview,
    handleFocus,
    handleBlur,
  } = useProjectPreview();

  return (
    <>
      {children({
        handleMouseEnterCard,
        handleMouseLeaveCard,
        handleFocus,
        handleBlur,
      })}

      <ProjectPreviewWindow
        project={project}
        isOpen={isOpen}
        targetRect={targetRect}
        onMouseEnter={handleMouseEnterPreview}
        onMouseLeave={handleMouseLeavePreview}
      />
    </>
  );
}

export { useProjectPreview, ProjectPreviewWindow };
