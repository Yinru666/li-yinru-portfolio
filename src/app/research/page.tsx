import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { researchAreas } from "@/data/research";

export default function ResearchPage() {
  return (
    <div className="section-fade mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Research"
        title="研究方向"
      />
      <div className="mt-10 grid gap-6">
        {researchAreas.map((area) => (
          <section
            key={area.id}
            id={area.id}
            className="scroll-mt-24 rounded-lg border border-slate-500/20 bg-white/[0.03] p-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-teal-300">
              {area.english}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50">
              {area.title}
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
              {area.summary}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-100">Methods</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  {area.methods.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">Scenarios</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  {area.scenarios.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">Future Work</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {area.futureWork}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {area.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded border border-slate-500/25 px-2 py-1 font-mono text-[11px] text-slate-300 transition hover:border-teal-300/45 hover:text-teal-100"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Link
        href="/projects"
        className="mt-8 inline-flex rounded-md border border-slate-500/25 px-4 py-2 text-sm text-teal-200 transition hover:border-teal-300/55 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
      >
        查看相关项目
      </Link>
    </div>
  );
}
