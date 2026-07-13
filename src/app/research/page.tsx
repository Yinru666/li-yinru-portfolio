import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { researchAreas } from "@/data/research";

export default function ResearchPage() {
  return (
    <div className="section-fade mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40 lg:px-8">
      <SectionTitle
        as="h1"
        eyebrow="Research"
        title="研究方向"
        description="以真实工程问题为起点，探索低空遥感、计算机视觉、多源监测与风险预警之间的可解释连接。"
      />
      <div className="mt-12">
        {researchAreas.map((area, index) => (
          <section
            key={area.id}
            id={area.id}
            className="scroll-mt-28 border-t border-white/10 py-8 lg:grid lg:grid-cols-[4rem_1.1fr_1fr] lg:gap-10"
          >
            <p className="font-mono text-xs text-teal-300/80">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div>
              <p className="editorial-caption text-slate-400">{area.english}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-50">
                {area.title}
              </h2>
              <p className="mt-4 text-balance text-sm leading-7 text-slate-400">{area.summary}</p>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                {area.keywords.map((keyword) => (
                  <span key={keyword} className="font-mono text-[10px] text-teal-300/80">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-7 grid gap-6 text-sm leading-6 text-slate-400 lg:mt-0">
              <div>
                <h3 className="editorial-caption text-slate-400">Methods</h3>
                <ul className="mt-3 space-y-2">
                  {area.methods.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="editorial-caption text-slate-400">Scenarios</h3>
                <ul className="mt-3 space-y-2">
                  {area.scenarios.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="editorial-caption text-slate-400">Future Work</h3>
                <p className="mt-3 text-balance">{area.futureWork}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Link
        href="/projects"
        prefetch={false}
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
      >
        查看相关项目 <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
