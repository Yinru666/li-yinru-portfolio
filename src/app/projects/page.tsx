import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="section-fade mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40 lg:px-8">
      <SectionTitle
        as="h1"
        eyebrow="Selected Work"
        title="项目作品"
        description="围绕道路病害巡检、边坡预警和交通基础设施风险闭环展开的研究与工程实践。"
      />
      <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} featured />
        ))}
      </div>
    </div>
  );
}
