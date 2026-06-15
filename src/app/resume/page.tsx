import Image from "next/image";
import Link from "next/link";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { achievements } from "@/data/achievements";
import { images } from "@/data/assets";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const resumeEvidence = [
  images.transportAward,
  images.caacLicense,
  images.computerRank,
];

export default function ResumePage() {
  return (
    <div className="section-fade mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SectionTitle
        eyebrow="Profile / Resume"
        title="个人履历"
      />

      <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[0.68fr_1.32fr]">
        <aside className="h-fit rounded-lg border border-slate-500/25 bg-slate-900/65 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-6 lg:sticky lg:top-24">
          <ImageFrame
            image={images.portrait}
            priority
            imageClassName="max-h-[420px] object-contain"
            showCaption={false}
          />
          <h2 className="mt-6 text-xl font-semibold text-slate-50">
            {profile.displayName}
          </h2>
          <p className="mt-2 text-sm text-teal-200">{profile.role}</p>
          <p className="mt-5 text-sm leading-7 text-slate-300">{profile.bio}</p>
          <div className="mt-6 grid gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-md border border-slate-500/25 px-4 py-2 text-sm text-teal-200 transition hover:border-teal-300/50 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
            >
              {contact.email}
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-500/25 px-4 py-2 text-sm text-teal-200 transition hover:border-teal-300/50 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
            >
              GitHub
            </a>
          </div>

          <div className="mt-8 border-t border-slate-500/15 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-300/80">
              Evidence
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-50">
              证书与奖项材料
            </h3>
            <div className="mt-4 grid gap-3">
              {resumeEvidence.map((image) => (
                <a
                  key={image.src}
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[5.5rem_1fr] gap-3 rounded-md border border-slate-500/20 bg-slate-950/55 p-2 transition hover:border-teal-300/45 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px sm:grid-cols-[6rem_1fr]"
                >
                  <div className="overflow-hidden rounded border border-slate-500/15 bg-slate-950">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="6rem"
                      className="h-20 w-full object-cover opacity-85 saturate-[0.86] transition group-hover:scale-[1.035] group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <div className="min-w-0 py-1">
                    <p className="line-clamp-2 text-sm leading-5 text-slate-100">
                      {image.caption}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-300">
                      Open
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <section
            id="education"
            className="scroll-mt-24 rounded-lg border border-slate-500/20 bg-white/[0.03] p-6"
          >
            <h2 className="text-xl font-semibold text-slate-50">教育背景</h2>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-slate-300 sm:grid-cols-3">
              <p>
                <span className="block text-xs text-slate-400">University</span>
                {profile.university}
              </p>
              <p>
                <span className="block text-xs text-slate-400">College</span>
                {profile.college}
              </p>
              <p>
                <span className="block text-xs text-slate-400">Major</span>
                {profile.major}
              </p>
            </div>
          </section>

          <section
            id="achievements"
            className="scroll-mt-24 rounded-lg border border-slate-500/20 bg-white/[0.03] p-6"
          >
            <h2 className="text-xl font-semibold text-slate-50">
              核心荣誉与资质
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  id={achievement.id}
                  className="rounded border border-slate-500/20 bg-slate-950/60 p-4"
                >
                  <p className="font-mono text-xs text-teal-300">
                    {achievement.label}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-slate-50">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {achievement.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="projects"
            className="scroll-mt-24 rounded-lg border border-slate-500/20 bg-white/[0.03] p-6"
          >
            <h2 className="text-xl font-semibold text-slate-50">项目经历</h2>
            <div className="mt-5 space-y-4">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="block rounded border border-slate-500/20 bg-slate-950/60 p-4 transition hover:border-teal-300/40 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
                >
                  <h3 className="text-base font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{project.role}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section
            id="skills"
            className="scroll-mt-24 rounded-lg border border-slate-500/20 bg-white/[0.03] p-6"
          >
            <h2 className="text-xl font-semibold text-slate-50">技术能力</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {group.items.map((item) => (
                      <li key={item.name}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section
            id="research"
            className="scroll-mt-24 rounded-lg border border-slate-500/20 bg-white/[0.03] p-6"
          >
            <h2 className="text-xl font-semibold text-slate-50">科研与成果</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              作为发明人之一参与 2 项国家发明专利，持续将智能交通、无人机巡检与边坡风险预警中的工程问题转化为可验证的技术方案。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
