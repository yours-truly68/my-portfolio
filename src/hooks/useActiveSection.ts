"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "framer-motion";

const SECTION_IDS = [
  "home",
  "projects",
  "journal",
  "experience",
  "principles",
  "contact",
] as const;

export function useActiveSection() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    if (pathname === "/resume") {
      setActiveSection("resume");
      return;
    }

    const anchor = window.innerHeight * 0.35;
    let closest: string = SECTION_IDS[0];
    let closestDistance = Number.POSITIVE_INFINITY;

    for (const id of SECTION_IDS) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(center - anchor);

      if (distance < closestDistance) {
        closest = id;
        closestDistance = distance;
      }
    }

    setActiveSection((prev) => (prev === closest ? prev : closest));
  });

  if (pathname === "/resume") {
    return "resume";
  }

  return activeSection;
}
