import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillGroups } from "@/data/skills";

export function TechnicalStackSection() {
  return (
    <section className="border-y border-white/8 bg-white/[0.018]">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="技术能力"
        />
        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-t border-white/10 pt-5"
            >
              <h3 className="editorial-caption text-teal-300">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    detail={skill.detail}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
