import { MainLayout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects";
import { JournalSection } from "@/components/journal";
import { ExperienceSection } from "@/components/experience";
import { PrinciplesSection } from "@/components/principles";
import { ContactSection } from "@/components/contact";
import { Section } from "@/components/ui";

export default function Home() {
  return (
    <MainLayout>
      {/* 01 Home / Hero Section */}
      <Section id="home" spacing="none">
        <Hero />
      </Section>

      {/* 02 Featured Projects Section */}
      <ProjectsSection />

      {/* 03 Journal & 04 Experience Two-Column Editorial Section */}
      <Section id="journal" spacing="lg" className="scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Journal Column - ~45% Width (5 of 12 columns) */}
          <div className="lg:col-span-5">
            <JournalSection />
          </div>

          {/* Experience Column - ~55% Width (7 of 12 columns) */}
          <div id="experience" className="lg:col-span-7 scroll-mt-24">
            <ExperienceSection />
          </div>
        </div>
      </Section>

      {/* 05 Principles Section */}
      <PrinciplesSection />

      {/* 06 Contact Section */}
      <ContactSection />
    </MainLayout>
  );
}
