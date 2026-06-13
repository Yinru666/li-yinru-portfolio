import { ResearchCard } from "@/components/cards/ResearchCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { researchAreas } from "@/data/research";

export function ResearchInterestsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Research"
        title="研究方向"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {researchAreas.map((area) => (
          <ResearchCard key={area.id} area={area} />
        ))}
      </div>
    </section>
  );
}
