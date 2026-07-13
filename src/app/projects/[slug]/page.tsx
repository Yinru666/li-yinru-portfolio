import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LightboxGallery } from "@/components/interactive/LightboxGallery";
import { PipelineExplorer } from "@/components/interactive/PipelineExplorer";
import { CTAButton } from "@/components/ui/CTAButton";
import { Badge } from "@/components/ui/badge";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getProject, projects, type PipelineStep } from "@/data/projects";
import { researchAreas } from "@/data/research";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | 李胤儒`,
    description: project.summary,
  };
}

function getLogicSteps(slug: string, fallback: PipelineStep[]): PipelineStep[] {
  if (slug === "uav-yolo26-road-damage") {
    return [
      {
        title: "原始影像",
        detail:
          "从无人机低空影像中保留路面纹理、阴影、积水和裂缝等现场信息，作为后续识别的证据来源。",
      },
      {
        title: "检测结果",
        detail:
          "在检测图中核对病害框、类别和置信度，判断模型是否真正定位到需要养护关注的区域。",
      },
      {
        title: "结构化输出",
        detail:
          "将类别、位置、置信度和图像来源整理成可追踪结果，便于后续接入平台或复核流程。",
      },
      {
        title: "养护辅助",
        detail:
          "把识别结果转化为巡检记录、复核任务和处置优先级，进入后续养护流程。",
      },
    ];
  }

  if (slug === "loess-slope-warning") {
    return [
      {
        title: "监测数据",
        detail:
          "汇集位移、降雨、土壤水分、孔隙水压等多源监测数据，先解决采样频率、缺测和噪声问题。",
      },
      {
        title: "时序预测",
        detail:
          "使用 SSA-LSTM 等时序模型观察位移发展趋势，重点关注降雨事件后的滞后变形响应。",
      },
      {
        title: "风险等级",
        detail:
          "结合预测趋势、阈值策略和工程机理，将连续监测结果转化为可解释的风险等级。",
      },
      {
        title: "处置闭环",
        detail:
          "预警结果进入现场核查、处置建议和复核记录，形成从数据到工程行动的闭环。",
      },
    ];
  }

  if (slug === "transport-slope-uav-warning-system") {
    return [
      {
        title: "低空巡检",
        detail:
          "通过无人机影像快速获得边坡表观状态，关注裂缝、滑移迹象和危险区域。",
      },
      {
        title: "多时序对比",
        detail:
          "比较不同巡检周期的影像变化，识别单帧图像难以判断的持续发展趋势。",
      },
      {
        title: "多源风险判断",
        detail:
          "将低空影像、InSAR、三维重建和传感器监测放到统一工程语境中解释。",
      },
      {
        title: "处置复核闭环",
        detail:
          "把风险判断转为发现、报警、处置和复核流程，使系统服务现场管理。",
      },
    ];
  }

  return fallback;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedResearch = researchAreas.filter((area) =>
    project.relatedResearch.includes(area.id),
  );
  const logicSteps = getLogicSteps(project.slug, project.pipeline);
  const routeEvidenceImage =
    project.routeImage && project.routeImage.src !== project.heroImage?.src
      ? project.routeImage
      : undefined;
  const shownImageSources = new Set(
    [project.heroImage?.src, routeEvidenceImage?.src].filter(
      Boolean,
    ),
  );
  const galleryImages = project.gallery.filter(
    (image, index, allImages) =>
      !shownImageSources.has(image.src) &&
      allImages.findIndex((candidate) => candidate.src === image.src) === index,
  );
  const evidenceImages = galleryImages.length > 0 ? galleryImages : project.gallery;

  return (
    <article className="section-fade">
      <header className="border-b border-white/10 bg-white/[0.018]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div>
            <p className="editorial-caption text-teal-300">
              {project.eyebrow}
            </p>
            <h1 className="mt-4 text-[2rem] font-semibold leading-[1.12] tracking-normal text-slate-50 sm:text-6xl sm:leading-[1.08]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
              {project.summary}
            </p>
            <div className="mt-9 grid gap-5 border-t border-white/10 pt-5 sm:grid-cols-[0.85fr_1fr_1.4fr]">
              <div>
                <p className="editorial-caption text-slate-400">Role</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{project.role}</p>
              </div>
              <div>
                <p className="editorial-caption text-slate-400">Status</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{project.status}</p>
              </div>
              <div>
                <p className="editorial-caption text-slate-400">Result</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {project.result ?? "阶段性方案与原型设计"}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.keywords.map((keyword) => (
                <Badge
                  key={keyword}
                  variant="outline"
                  title={`${keyword} used in this project`}
                  className="h-auto rounded-full border-white/10 bg-white/[0.035] px-2.5 py-1 font-mono text-[10px] text-slate-400 transition hover:border-teal-300/35 hover:text-teal-200"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
          {project.heroImage ? (
            <ImageFrame image={project.heroImage} priority className="h-fit" />
          ) : null}
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <section>
          <SectionTitle
            eyebrow="Problem / Challenge"
            title="现场约束与工程挑战"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {project.problems.map((problem, index) => (
              <details
                key={problem.title}
                open={index === 0}
                className="group rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition hover:border-teal-300/35 hover:bg-white/[0.055]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300">
                  <span>{problem.title}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal-300/75">
                    Detail
                  </span>
                </summary>
                <p className="mt-4 text-balance text-sm leading-6 text-slate-400">
                  {problem.detail}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionTitle
            eyebrow="Method / Pipeline"
            title="方法流程"
            description="采集、训练、输出和工程应用按节点展开。"
          />
          <div className="mt-10">
            <PipelineExplorer steps={project.pipeline} />
          </div>
          {routeEvidenceImage ? (
            <div className="mt-8">
              <ImageFrame image={routeEvidenceImage} />
            </div>
          ) : null}
        </section>

        <section className="mt-24">
          <SectionTitle
            eyebrow="Explorable Logic"
            title="从数据到判断，再到工程行动。"
            description="节点切换展示感知结果如何进入复核和处置链路。"
          />
          <div className="mt-10">
            <PipelineExplorer
              steps={logicSteps}
              eyebrow="Project Logic"
              title="项目判断逻辑"
            />
          </div>
        </section>

        <section className="mt-24">
          <SectionTitle
            eyebrow="Gallery / Evidence"
            title="项目图集与证据"
            description="检测结果图保留原始检测框、类别和置信度；图片可放大查看。"
          />
          <div className="mt-10">
            <LightboxGallery images={evidenceImages} />
          </div>
        </section>

        <section className="mt-24 grid gap-10 lg:grid-cols-2">
          <div className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-semibold tracking-normal text-slate-50">
              Results / Outcomes
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
              {project.results.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-px w-5 shrink-0 bg-teal-300/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-semibold tracking-normal text-slate-50">
              Reflection / Next Step
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
              {project.reflection.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-px w-5 shrink-0 bg-teal-300/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-24 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-normal text-slate-50">Related Links</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <CTAButton href="/projects">返回项目列表</CTAButton>
            <CTAButton href="/contact" variant="primary">
              联系我
            </CTAButton>
            <CTAButton href="/resume#projects">查看简历</CTAButton>
            {relatedResearch.map((area) => (
              <Link
                key={area.id}
                href={`/research#${area.id}`}
                prefetch={false}
                className="inline-flex min-h-11 items-center rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
              >
                {area.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
