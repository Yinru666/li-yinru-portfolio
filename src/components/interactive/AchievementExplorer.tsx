import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Achievement } from "@/data/achievements";

type AchievementExplorerProps = {
  achievements: Achievement[];
};

export function AchievementExplorer({ achievements }: AchievementExplorerProps) {
  return (
    <div className="grid gap-x-10 md:grid-cols-2">
      {achievements.map((achievement) => {
        const href = achievement.relatedProjectSlug
          ? `/projects/${achievement.relatedProjectSlug}`
          : achievement.resumeAnchor;

        return (
          <Link
            key={achievement.id}
            href={href}
            prefetch={false}
            className="group grid gap-4 border-t border-white/10 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 sm:grid-cols-[auto_1fr_auto] sm:items-start"
          >
            <span className="rounded-full bg-teal-300/10 px-3 py-1.5 font-mono text-[10px] uppercase text-teal-200">
              {achievement.metric}
            </span>
            <div>
              <p className="editorial-caption text-slate-400">{achievement.label}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug tracking-normal text-slate-50">
                {achievement.title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-6 text-slate-400">{achievement.summary}</p>
            </div>
            <span className="grid size-9 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-slate-200 transition group-hover:bg-slate-100 group-hover:text-slate-950">
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">查看关联内容</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
