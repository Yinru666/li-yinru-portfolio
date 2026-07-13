import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { achievements } from "@/data/achievements";
import { images } from "@/data/assets";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const resumeEvidence = [images.transportAward, images.caacLicense, images.computerRank];

export default function ResumePage() {
  return (
    <div className="section-fade mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40 lg:px-8">
      <SectionTitle
        as="h1"
        eyebrow="Profile / Resume"
        title="个人履历"
        description="研究方向、工程实践与项目成果的持续记录。"
      />

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
        <aside className="h-fit lg:sticky lg:top-28">
          <ImageFrame
            image={images.portrait}
            priority
            imageClassName="max-h-[32rem] object-contain bg-[#111718]"
            showCaption={false}
          />
          <p className="editorial-caption mt-7 text-teal-300">Researcher / Builder</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-normal text-slate-50">
            {profile.displayName}
          </h2>
          <p className="mt-3 text-sm font-medium text-slate-300">{profile.role}</p>
          <p className="mt-5 text-sm leading-7 text-slate-400">{profile.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
            >
              Email
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
            >
              GitHub
            </a>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="editorial-caption text-teal-300">Selected Evidence</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {resumeEvidence.map((image) => (
                <a
                  key={image.src}
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-xl border border-white/10 bg-[#111718] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
                  title={image.caption}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1024px) 7rem, 28vw"
                    className="aspect-[3/4] h-full w-full object-cover transition duration-300 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-12">
          <section id="education" className="scroll-mt-28 border-t border-white/10 pt-6">
            <p className="editorial-caption text-teal-300">Education</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal text-slate-50">教育背景</h2>
            <div className="mt-5 grid gap-5 text-sm leading-7 text-slate-400 sm:grid-cols-3">
              <p><span className="block text-xs text-slate-400">University</span>{profile.university}</p>
              <p><span className="block text-xs text-slate-400">College</span>{profile.college}</p>
              <p><span className="block text-xs text-slate-400">Major</span>{profile.major}</p>
            </div>
          </section>

          <section id="achievements" className="scroll-mt-28 border-t border-white/10 pt-6">
            <p className="editorial-caption text-teal-300">Highlights</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal text-slate-50">核心荣誉与资质</h2>
            <div className="mt-5 grid gap-x-8 md:grid-cols-2">
              {achievements.map((achievement) => (
                <div key={achievement.id} id={achievement.id} className="border-b border-white/8 py-5">
                  <p className="font-mono text-xs text-teal-300">{achievement.metric}</p>
                  <h3 className="mt-2 text-base font-semibold text-slate-50">{achievement.title}</h3>
                  <p className="mt-2 text-balance text-sm leading-6 text-slate-400">{achievement.summary}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="scroll-mt-28 border-t border-white/10 pt-6">
            <p className="editorial-caption text-teal-300">Project Experience</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal text-slate-50">项目经历</h2>
            <div className="mt-5">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  prefetch={false}
                  className="group grid gap-4 border-b border-white/8 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <h3 className="text-lg font-semibold tracking-normal text-slate-50 transition group-hover:text-teal-200">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{project.role} · {project.status}</p>
                    <p className="mt-3 text-balance text-sm leading-6 text-slate-400">{project.summary}</p>
                  </div>
                  <ArrowUpRight className="size-4 text-slate-400 transition group-hover:text-teal-300" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-mt-28 border-t border-white/10 pt-6">
            <p className="editorial-caption text-teal-300">Skills</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal text-slate-50">技术能力</h2>
            <div className="mt-5 grid gap-8 md:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="editorial-caption text-slate-400">{group.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-400">
                    {group.items.map((item) => <li key={item.name}>{item.name}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="research" className="scroll-mt-28 border-t border-white/10 pt-6">
            <p className="editorial-caption text-teal-300">Research Output</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal text-slate-50">科研与成果</h2>
            <p className="mt-4 max-w-3xl text-balance text-sm leading-7 text-slate-400">
              作为发明人之一参与 2 项国家发明专利，持续将智能交通、无人机巡检与边坡风险预警中的工程问题转化为可验证的技术方案。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
