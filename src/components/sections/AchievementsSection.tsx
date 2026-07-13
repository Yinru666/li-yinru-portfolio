import { AchievementExplorer } from "@/components/interactive/AchievementExplorer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { achievements } from "@/data/achievements";

export function AchievementsSection() {
  const homepageAchievements = achievements.filter(
    (achievement) => achievement.relatedProjectSlug,
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <SectionTitle eyebrow="Highlights" title="项目经历与关键成果" />
      <div className="mt-10 lg:mt-14">
        <AchievementExplorer achievements={homepageAchievements} />
      </div>
    </section>
  );
}
