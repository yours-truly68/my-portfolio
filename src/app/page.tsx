import { MainLayout } from "@/components/layout";
import { Section, Card, SectionHeader, Text } from "@/components/ui";

export default function Home() {
  return (
    <MainLayout activeSection="home">
      {/* 01 Home Placeholder */}
      <Section id="home" spacing="md">
        <Card variant="elevated" className="min-h-[480px] flex items-center justify-center border-dashed">
          <Text variant="muted" className="text-sm font-medium tracking-wider uppercase">
            &lt;Home Placeholder&gt;
          </Text>
        </Card>
      </Section>

      {/* 02 Projects Placeholder */}
      <Section id="projects" spacing="md">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Selected Works"
          action={
            <Text variant="caption" className="font-semibold uppercase tracking-wider">
              View All Projects &rarr;
            </Text>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} variant="project" className="min-h-[320px] flex items-center justify-center border-dashed">
              <Text variant="muted" className="text-xs font-medium uppercase">
                Project 0{i}
              </Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* 03 Journal Placeholder */}
      <Section id="journal" spacing="md">
        <SectionHeader
          eyebrow="Journal"
          title="Ideas, notes and thoughts."
        />
        <Card variant="default" className="min-h-[220px] flex items-center justify-center border-dashed">
          <Text variant="muted" className="text-sm font-medium tracking-wider uppercase">
            &lt;Journal Placeholder&gt;
          </Text>
        </Card>
      </Section>

      {/* 04 Experience Placeholder */}
      <Section id="experience" spacing="md">
        <SectionHeader
          eyebrow="Experience"
          title="My journey so far."
        />
        <Card variant="default" className="min-h-[220px] flex items-center justify-center border-dashed">
          <Text variant="muted" className="text-sm font-medium tracking-wider uppercase">
            &lt;Experience Placeholder&gt;
          </Text>
        </Card>
      </Section>

      {/* 05 Principles Placeholder */}
      <Section id="principles" spacing="md">
        <SectionHeader
          eyebrow="Principles I Follow"
          title="Principles that guide everything I build."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} variant="default" className="min-h-[140px] flex items-center justify-center border-dashed">
              <Text variant="muted" className="text-xs font-medium uppercase">
                Principle 0{i}
              </Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* 06 Contact Placeholder */}
      <Section id="contact" spacing="md">
        <Card variant="dark" className="min-h-[280px] flex items-center justify-center border-dashed border-white/20">
          <Text variant="muted" className="text-sm font-medium tracking-wider uppercase text-white/60">
            &lt;Contact Placeholder&gt;
          </Text>
        </Card>
      </Section>
    </MainLayout>
  );
}
