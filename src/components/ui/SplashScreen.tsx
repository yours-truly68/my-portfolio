"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SplashScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SplashScreen({ className, children, ...props }: SplashScreenProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    // Check if user has already viewed the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("has-seen-intro-splash");

    if (hasSeenSplash) {
      setIsLoading(false);
      return;
    }

    // Playback sequence: 4s video playback + 1s pause = 5s total
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("has-seen-intro-splash", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("relative min-h-screen", className)} {...props}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="splash-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--canvas)] overflow-hidden select-none"
          >
            {/* Centered Video Scaled to 50% Viewport Width */}
            <div className="flex flex-col items-center justify-center p-4">
              <video
                ref={videoRef}
                src="/logo.webm"
                autoPlay
                muted
                playsInline
                className="w-[50vw] max-w-[420px] sm:max-w-[480px] h-auto object-contain pointer-events-none drop-shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Contents Slide & Ease In */}
      <motion.div
        initial={{ opacity: isLoading ? 0 : 1, y: isLoading ? 16 : 0 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 16 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
