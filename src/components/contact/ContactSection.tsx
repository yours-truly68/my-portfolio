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
        {/* Deep Charcoal Environment #0E1015 */}
        <div className="relative w-full rounded-[24px] bg-[#0E1015] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.6)] overflow-hidden text-white">
          {/* Distant Purple Horizon & Volumetric Lighting Mist */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -bottom-[30%] -left-[10%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(123,97,255,0.20)_0%,rgba(168,85,247,0.06)_45%,transparent_75%)] blur-3xl animate-breathe" />
            <div className="absolute top-[5%] right-[5%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)] blur-2xl" />
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
                  className="group font-bold text-[0.7rem] uppercase tracking-wider rounded-xl px-6 h-11 gap-2 bg-white text-slate-950 hover:bg-slate-100 shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                  onClick={() => {
                    window.location.href = "mailto:mohammedrazim880@gmail.com";
                  }}
                >
                  START A CONVERSATION
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-950 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
