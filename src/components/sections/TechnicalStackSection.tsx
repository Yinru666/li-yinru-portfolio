import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillGroups } from "@/data/skills";

export function TechnicalStackSection() {
  return (
    <section className="border-y border-slate-500/15 bg-slate-950/55">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="技术能力"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-slate-500/20 bg-white/[0.03] p-5"
            >
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-teal-300">
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
