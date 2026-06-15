import { ResearchCard } from "@/components/cards/ResearchCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { researchAreas } from "@/data/research";

export function ResearchInterestsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <SectionTitle
        eyebrow="Research"
        title="研究方向"
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10">
        {researchAreas.map((area) => (
          <ResearchCard key={area.id} area={area} />
        ))}
      </div>
    </section>
  );
}
