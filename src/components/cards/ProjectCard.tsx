import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const image = project.heroImage ?? project.gallery[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      prefetch={false}
      className="group flex min-w-0 flex-col rounded-[1.35rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
    >
      <div className={`relative overflow-hidden rounded-[1.35rem] bg-slate-900 ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/22 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-slate-950/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          {project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-1 pt-5">
        <div className="flex items-start justify-between gap-4">
          <p className="editorial-caption text-teal-300">{project.eyebrow}</p>
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-slate-200 transition group-hover:bg-slate-100 group-hover:text-slate-950">
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">查看详情</span>
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-snug tracking-normal text-slate-50">
          {project.title}
        </h3>
        <p className="mt-3 text-balance text-sm leading-6 text-slate-400">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.keywords.slice(0, 3).map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] text-slate-400 transition group-hover:border-teal-300/30 group-hover:text-teal-200"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
