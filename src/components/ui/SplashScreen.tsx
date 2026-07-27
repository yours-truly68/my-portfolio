"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplashContextType {
  triggerSplash: () => void;
}

const SplashContext = React.createContext<SplashContextType>({
  triggerSplash: () => {},
});

export const useSplash = () => React.useContext(SplashContext);

export interface SplashScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SplashScreen({ className, children, ...props }: SplashScreenProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [splashKey, setSplashKey] = React.useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const triggerSplash = React.useCallback(() => {
    setIsLoading(true);
    setSplashKey((prev) => prev + 1);
  }, []);

  // 4-second timer runs when isLoading or splashKey changes
  React.useEffect(() => {
    if (!isLoading) return;

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isLoading, splashKey]);

  return (
    <SplashContext.Provider value={{ triggerSplash }}>
      <div className={cn("relative min-h-screen", className)} {...props}>
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key={`splash-overlay-${splashKey}`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              }}
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
                  onLoadedMetadata={(e) => {
                    const video = e.currentTarget;
                    video.currentTime = 0;
                    video.play().catch(() => {});
                  }}
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
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </div>
    </SplashContext.Provider>
  );
}
