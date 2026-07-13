import { ResearchCard } from "@/components/cards/ResearchCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { researchAreas } from "@/data/research";

export function ResearchInterestsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <SectionTitle eyebrow="Research" title="研究方向" />
      <div className="mt-10 lg:mt-14">
        {researchAreas.map((area, index) => (
          <ResearchCard key={area.id} area={area} index={index} />
        ))}
      </div>
    </section>
  );
}
