import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { Section } from "@/components/ui/Section";
import {
  ResumeHero,
  ResumeSummary,
  ResumeHighlights,
  ResumeExperience,
  ProjectIndex,
  ResumeSkills,
  ResumeEducation,
  ResumeCertifications,
  ResumeStickyNav,
  ResumeContact,
} from "@/components/resume";
import { generatePersonJsonLd } from "@/lib/seo/person";
import { generateResumeJsonLd } from "@/lib/seo/resume";

export const metadata: Metadata = {
  title: "Mohammad Razim — Curriculum Vitae & Professional Profile",
  description:
    "Curriculum Vitae and Professional Profile of Mohammad Razim, Full-Stack AI Engineer specializing in Python, TypeScript, Next.js, FastAPI, Agentic Workflows, and System Design.",
  openGraph: {
    title: "Mohammad Razim — Curriculum Vitae & Professional Profile",
    description:
      "Full-Stack AI Engineer building intelligent systems that scale. Explore work experience, technical skills, and software projects.",
  },
};

export default function ResumePage() {
  const personJsonLd = generatePersonJsonLd();
  const resumeJsonLd = generateResumeJsonLd();

  return (
    <MainLayout>
      {/* Inject Structured JSON-LD Schema for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />

      <Section spacing="sm" className="py-8 lg:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
          {/* Main Editorial Resume Document (10 of 12 columns on XL) */}
          <div className="xl:col-span-10 flex flex-col gap-10">
            {/* Editorial Hero Header */}
            <ResumeHero />

            {/* Professional Summary */}
            <ResumeSummary />

            {/* Selected Highlights */}
            <ResumeHighlights />

            {/* Work Experience */}
            <ResumeExperience />

            {/* Featured Projects Index */}
            <ProjectIndex />

            {/* Technical Skills */}
            <ResumeSkills />

            {/* Education & Academic History */}
            <ResumeEducation />

            {/* Certifications */}
            <ResumeCertifications />

            {/* Contact Footer */}
            <ResumeContact />
          </div>

          {/* Table of Contents Sticky Nav (2 of 12 columns on XL) */}
          <div className="xl:col-span-2">
            <ResumeStickyNav />
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}
