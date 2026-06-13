import Link from "next/link";
import type { ResearchArea } from "@/data/research";

type ResearchCardProps = {
  area: ResearchArea;
};

export function ResearchCard({ area }: ResearchCardProps) {
  return (
    <Link
      href={`/research#${area.id}`}
      className="group block h-full rounded-lg border border-slate-500/20 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 hover:border-teal-300/55 hover:bg-white/[0.055] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-300/80">
        {area.english}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-slate-50">{area.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{area.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2 opacity-80 transition group-hover:opacity-100 motion-reduce:transition-none">
        {area.keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded border border-slate-500/20 px-2 py-1 font-mono text-[10px] text-slate-300 group-hover:border-teal-300/35"
          >
            {keyword}
          </span>
        ))}
      </div>
      <span className="mt-5 inline-flex text-sm text-teal-300 opacity-0 transition group-hover:opacity-100 motion-reduce:transition-none">
        Explore direction
      </span>
    </Link>
  );
}

