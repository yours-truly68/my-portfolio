"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContactTerminal } from "./ContactTerminal";
import { ContactLinks } from "./ContactLinks";
import { cn } from "@/lib/utils";

export type ContactSectionProps = React.HTMLAttributes<HTMLElement>;

export const ContactSection = React.forwardRef<HTMLElement, ContactSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <Section
        ref={ref}
        id="contact"
        spacing="lg"
        className={cn("w-full select-none scroll-mt-24", className)}
        {...props}
      >
        {/* Dark Cinematic Second Hero Container */}
        <div className="relative w-full rounded-[24px] bg-[#0B0C14] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden text-white">
          {/* Subtle Purple Atmospheric Radial Diffusion Glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(123,97,255,0.2)_0%,rgba(168,85,247,0.06)_50%,transparent_75%)] blur-3xl" />
          </div>

          {/* Three-Column Desktop Layout (40% / 30% / 30%) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column (~40% Width - 5 of 12 columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Badge variant="brand" dot size="sm" className="w-fit text-[0.65rem] uppercase tracking-wider font-semibold bg-white/10 text-white border-white/15">
                LET&apos;S CONNECT
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.05]">
                Let&apos;s build <br />
                something <br />
                <span className="font-serif-italic text-purple-400 font-normal">extraordinary.</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
                I&apos;m always open to interesting problems, engineering collaborations, and conversations.
              </p>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  className="font-bold text-[0.7rem] uppercase tracking-wider rounded-xl px-6 h-11 gap-2 bg-white text-slate-950 hover:bg-slate-100 shadow-lg"
                  onClick={() => {
                    window.location.href = "mailto:mrazim.dev@gmail.com";
                  }}
                >
                  START A CONVERSATION
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
                </Button>
              </div>
            </div>

            {/* Middle Column (~30% Width - 4 of 12 columns) */}
            <div className="lg:col-span-4 w-full h-full">
              <ContactTerminal />
            </div>

            {/* Right Column (~30% Width - 3 of 12 columns) */}
            <div className="lg:col-span-3 w-full h-full flex items-center">
              <ContactLinks />
            </div>
          </div>
        </div>
      </Section>
    );
  }
);

ContactSection.displayName = "ContactSection";
