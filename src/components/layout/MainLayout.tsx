"use client";

import * as React from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { PageContainer } from "./PageContainer";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export type MainLayoutProps = React.HTMLAttributes<HTMLDivElement>;

export const MainLayout = React.forwardRef<HTMLDivElement, MainLayoutProps>(
  ({ className, children, ...props }, ref) => {
    const activeSection = useActiveSection();

    return (
      <SplashScreen>
        <div
          ref={ref}
          className={cn(
            "relative min-h-screen bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]",
            className
          )}
          {...props}
        >
          <Sidebar activeSection={activeSection} />

          <MainContent>
            <PageContainer>{children}</PageContainer>
          </MainContent>
        </div>
      </SplashScreen>
    );
  }
);

MainLayout.displayName = "MainLayout";
