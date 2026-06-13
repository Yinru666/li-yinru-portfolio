import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="section-fade mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Projects"
        title="项目作品"
        description="以道路病害巡检、边坡预警和交通基础设施风险闭环为主线。"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} featured />
        ))}
      </div>
    </div>
  );
}
