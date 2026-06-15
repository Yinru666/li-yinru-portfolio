import Link from "next/link";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export function FeaturedProjectsSection() {
  return (
    <section className="border-y border-slate-500/15 bg-slate-950/55">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Selected Work"
            title="代表项目"
          />
          <Link
            href="/projects"
            className="inline-flex w-fit rounded-md border border-slate-500/25 px-4 py-2 text-sm text-teal-200 transition hover:border-teal-300/55 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
          >
            All projects
          </Link>
        </div>
        <div className="mt-8 grid min-w-0 items-stretch gap-5 lg:mt-10 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
