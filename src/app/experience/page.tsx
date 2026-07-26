import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import {
  ExperienceHero,
  ExperienceTimelineOverview,
  ExperienceDetailBlock,
  ExperienceTechMatrix,
  ExperiencePhilosophy,
  ExperienceContactCTA,
} from "@/components/experience-page";
import { detailedExperiences } from "@/data/experienceData";
import { personalInfo } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Professional Experience | Mohammad Razim - Full-Stack AI Engineer",
  description:
    "A curated editorial breakdown of Mohammad Razim's engineering growth across Fortune Group, Sri Sai Tours, Peri Pair Trading, Tech Trade Solutions, and Dflix.",
  openGraph: {
    title: "Professional Experience | Mohammad Razim",
    description:
      "Curated career timeline and case studies showcasing AI engineering, full-stack systems, trading platforms, and design systems.",
    url: "https://mohammadrazim.dev/experience",
    type: "profile",
  },
};

export default function ExperiencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Mohammad Razim - Professional Experience",
    mainEntity: {
      "@type": "Person",
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      worksFor: {
        "@type": "Organization",
        name: personalInfo.currentEmployer,
      },
    },
  };

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container size="default" className="py-6 sm:py-10 flex flex-col gap-8">
        <ExperienceHero />
        <ExperienceTimelineOverview />

        <section aria-label="Detailed Professional Experience Case Studies" className="flex flex-col">
          {detailedExperiences.map((exp, idx) => (
            <ExperienceDetailBlock
              key={exp.id}
              experience={exp}
              isEven={idx % 2 === 1}
            />
          ))}
        </section>

        <ExperienceTechMatrix />
        <ExperiencePhilosophy />
        <ExperienceContactCTA />
      </Container>
    </MainLayout>
  );
}
