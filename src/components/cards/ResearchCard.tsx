import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ResearchArea } from "@/data/research";

type ResearchCardProps = {
  area: ResearchArea;
  index?: number;
};

export function ResearchCard({ area, index }: ResearchCardProps) {
  return (
    <Link
      href={`/research#${area.id}`}
      prefetch={false}
      className="group grid gap-5 border-t border-white/10 py-6 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 sm:grid-cols-[4rem_1fr_auto] sm:items-start"
    >
      <span className="font-mono text-xs text-teal-300/80">
        {String((index ?? 0) + 1).padStart(2, "0")}
      </span>
      <div>
        <p className="editorial-caption text-slate-400">{area.english}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-normal text-slate-50 transition group-hover:text-teal-200">
          {area.title}
        </h3>
        <p className="mt-3 max-w-2xl text-pretty text-sm leading-6 text-slate-400">{area.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {area.keywords.slice(0, 4).map((keyword) => (
            <span key={keyword} className="font-mono text-[10px] text-slate-400">
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <span className="grid size-10 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-slate-200 transition group-hover:bg-slate-100 group-hover:text-slate-950">
        <ArrowUpRight className="size-4" aria-hidden="true" />
        <span className="sr-only">查看研究方向</span>
      </span>
    </Link>
  );
}
