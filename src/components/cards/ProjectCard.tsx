import Image from "next/image";
import Link from "next/link";
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
      className="group grid h-full min-w-0 grid-rows-[auto_1fr] overflow-hidden rounded-xl border border-slate-500/25 bg-slate-900/72 transition duration-200 hover:-translate-y-1 hover:border-teal-300/50 hover:bg-slate-900/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className={featured ? "relative aspect-[16/9]" : "relative aspect-[16/10]"}>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover opacity-85 transition duration-300 group-hover:scale-[1.025] group-hover:opacity-95 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 w-fit max-w-[calc(100%-1.5rem)] truncate rounded border border-slate-300/20 bg-slate-950/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-200">
          {project.eyebrow}
        </div>
      </div>
      <div className="flex h-full min-w-0 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="min-w-0 text-xs text-slate-400">{project.status}</p>
          <span className="text-xs text-teal-300 opacity-0 transition group-hover:opacity-100 motion-reduce:transition-none">
            查看详情
          </span>
        </div>
        <h3 className="mt-3 min-w-0 break-words text-base font-semibold leading-snug text-slate-50 sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.keywords.slice(0, 4).map((keyword) => (
            <span
              key={keyword}
              className="rounded border border-slate-500/20 px-2 py-1 font-mono text-[10px] text-slate-300 transition group-hover:border-teal-300/35 group-hover:text-teal-100"
            >
              {keyword}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex text-sm font-medium text-teal-300">
          View Case Study
        </span>
      </div>
    </Link>
  );
}
