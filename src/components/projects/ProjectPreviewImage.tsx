"use client";

import * as React from "react";
import { StaticImageData } from "next/image";

/* eslint-disable @next/next/no-img-element */

export interface ProjectPreviewImageProps {
  preview?: StaticImageData | string;
  title: string;
}

export const ProjectPreviewImage = React.memo(function ProjectPreviewImage({
  preview,
  title,
}: ProjectPreviewImageProps) {
  if (!preview) return null;

  const isStaticObject = typeof preview === "object" && preview !== null && "src" in preview;
  const src = isStaticObject ? (preview as StaticImageData).src : (preview as string);

  return (
    <div className="relative w-full h-[210px] sm:h-[230px] overflow-hidden bg-[#0A0C10] flex items-center justify-center p-2">
      <img
        src={src}
        alt={`${title} Interactive Product Preview`}
        className="w-full h-full object-contain pointer-events-none transition-transform duration-300"
      />
    </div>
  );
});
