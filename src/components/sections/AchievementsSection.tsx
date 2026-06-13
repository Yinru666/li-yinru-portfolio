import { AchievementExplorer } from "@/components/interactive/AchievementExplorer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { achievements } from "@/data/achievements";

export function AchievementsSection() {
  const homepageAchievements = achievements.filter(
    (achievement) => achievement.relatedProjectSlug,
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          eyebrow="Highlights"
          title="项目经历与关键成果"
        />
      </div>
      <div className="mt-10">
        <AchievementExplorer achievements={homepageAchievements} />
      </div>
    </section>
  );
}
