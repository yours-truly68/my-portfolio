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
          "fixed top-0 left-0 z-[var(--z-sidebar)] hidden lg:flex flex-col h-screen w-[var(--sidebar-width)] bg-[var(--color-bg-sidebar)] backdrop-blur-[var(--blur-md)] border-r border-[var(--color-border-light)] justify-between overflow-y-auto select-none",
          className
        )}
        {...props}
      >
        <SidebarLogo />
        <SidebarNavigation activeId={activeSection} />
        <SidebarFooter />
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";
