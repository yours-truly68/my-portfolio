"use client";

import * as React from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { PageContainer } from "./PageContainer";
import { cn } from "@/lib/utils";

export interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  activeSection?: string;
}

export const MainLayout = React.forwardRef<HTMLDivElement, MainLayoutProps>(
  ({ className, activeSection = "home", children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative min-h-screen bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]", className)} {...props}>
        <Sidebar activeSection={activeSection} />
        <MainContent>
          <PageContainer>{children}</PageContainer>
        </MainContent>
      </div>
    );
  }
);

MainLayout.displayName = "MainLayout";
