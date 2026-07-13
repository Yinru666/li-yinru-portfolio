import Link from "next/link";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export function FeaturedProjectsSection() {
  return (
    <section id="selected-work" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Selected Work"
            title="代表项目"
          />
          <Link
            href="/projects"
            prefetch={false}
            className="inline-flex w-fit rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
          >
            全部项目
          </Link>
        </div>
        <div className="mt-10 grid min-w-0 items-stretch gap-8 lg:mt-14 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
