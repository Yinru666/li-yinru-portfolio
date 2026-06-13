import Link from "next/link";
import type { Achievement } from "@/data/achievements";

type AchievementExplorerProps = {
  achievements: Achievement[];
};

export function AchievementExplorer({ achievements }: AchievementExplorerProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {achievements.map((achievement) => {
        const href = achievement.relatedProjectSlug
          ? `/projects/${achievement.relatedProjectSlug}`
          : achievement.resumeAnchor;

        return (
          <Link
            key={achievement.id}
            href={href}
            className="group min-h-48 rounded-lg border border-slate-500/25 bg-slate-900/55 p-5 transition duration-200 hover:-translate-y-1 hover:border-teal-300/45 hover:bg-slate-900/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded border border-teal-300/20 bg-teal-300/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-teal-200">
                {achievement.label}
              </span>
              <span className="text-sm text-teal-300 opacity-0 transition group-hover:opacity-100 motion-reduce:transition-none">
                查看项目
              </span>
            </div>
            <p className="mt-5 inline-flex rounded-md border border-slate-400/20 bg-white/[0.045] px-2.5 py-1 text-sm font-medium text-slate-100 transition group-hover:-translate-y-0.5 group-hover:border-teal-300/35 group-hover:text-teal-100 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
              {achievement.metric}
            </p>
            <h3 className="mt-3 text-base font-semibold leading-snug text-slate-50">
              {achievement.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {achievement.summary}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
