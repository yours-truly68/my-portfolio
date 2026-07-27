"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SplashScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function triggerIntroSplash() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("trigger-intro-splash"));
  }
}

export function SplashScreen({ className, children, ...props }: SplashScreenProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const timerStartedRef = React.useRef(false);

  // Strict 5-second delay triggered when video starts playing
  const startIntroTimer = React.useCallback(() => {
    if (timerStartedRef.current) return;
    timerStartedRef.current = true;

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const playVideoSequence = React.useCallback(() => {
    setIsLoading(true);
    timerStartedRef.current = false;

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current
        .play()
        .then(() => startIntroTimer())
        .catch(() => startIntroTimer());
    } else {
      startIntroTimer();
    }
  }, [startIntroTimer]);

  // Listen for custom trigger-intro-splash event (fired on Home or Logo click)
  React.useEffect(() => {
    const handleCustomTrigger = () => {
      playVideoSequence();
    };

    window.addEventListener("trigger-intro-splash", handleCustomTrigger);
    return () => {
      window.removeEventListener("trigger-intro-splash", handleCustomTrigger);
    };
  }, [playVideoSequence]);

  // Execute intro video playback on initial mount / reload
  React.useEffect(() => {
    playVideoSequence();
  }, [playVideoSequence]);

  return (
    <div className={cn("relative min-h-screen", className)} {...props}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="splash-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0D13] overflow-hidden select-none"
          >
            {/* Centered Video Scaled to 50% Viewport Width */}
            <div className="flex flex-col items-center justify-center p-4 w-full">
              <video
                ref={videoRef}
                src="/logo.webm"
                autoPlay
                muted
                playsInline
                preload="auto"
                onPlay={startIntroTimer}
                className="w-[50vw] max-w-[450px] sm:max-w-[500px] h-auto object-contain pointer-events-none drop-shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Contents Slide & Ease In */}
      <motion.div
        initial={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
