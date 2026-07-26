"use client";

import * as React from "react";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarFooter } from "./SidebarFooter";
import { cn } from "@/lib/utils";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  activeSection?: string;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, activeSection = "home", ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "fixed inset-y-0 left-0 z-[var(--z-sidebar)] hidden lg:grid",
          "w-[var(--sidebar-width)]",
          "grid-rows-[auto_1fr_auto]",
          "border-r border-black/5",
          "bg-[var(--color-bg-primary)]",
          "px-10 py-12",
          "select-none",
          className,
        )}
        {...props}
      >
        <SidebarLogo />

        <div className="flex items-center">
          <SidebarNavigation activeId={activeSection} />
        </div>

        <SidebarFooter />
      </aside>
    );
  },
);

Sidebar.displayName = "Sidebar";
