"use client";

import * as React from "react";
import { Mail, Download, ArrowRight, Globe, Share2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export type ContactLinksProps = React.HTMLAttributes<HTMLDivElement>;

export const ContactLinks = React.forwardRef<HTMLDivElement, ContactLinksProps>(
  ({ className, ...props }, ref) => {
    const links = [
      {
        id: "email",
        label: "Email",
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
        icon: <Mail className="w-4 h-4 text-purple-400" />,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/mohammadrazim880",
        href: personalInfo.linkedin,
        icon: <Globe className="w-4 h-4 text-blue-400" />,
      },
      {
        id: "github",
        label: "GitHub",
        value: "github.com/yours-truly68",
        href: personalInfo.github,
        icon: <Share2 className="w-4 h-4 text-slate-300" />,
      },
      {
        id: "resume",
        label: "Resume",
        value: "Download PDF",
        href: "/Mohammad_Razim_Professional_CV.pdf",
        icon: <Download className="w-4 h-4 text-emerald-400" />,
      },
    ];

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-4 w-full select-none justify-center h-full", className)}
        {...props}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.id === "email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                {link.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider">
                  {link.label}
                </span>
                <span className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">
                  {link.value}
                </span>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
          </a>
        ))}
      </div>
    );
  }
);

ContactLinks.displayName = "ContactLinks";
