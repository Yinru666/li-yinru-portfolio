import { ArrowDownRight } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { EngineeringVisual } from "@/components/visuals/EngineeringVisual";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="paper-grid pointer-events-none absolute inset-x-0 top-0 h-[44rem] opacity-55" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="editorial-caption text-teal-300">智慧交通 / Smart Transportation</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-normal text-slate-50 sm:text-7xl lg:text-8xl">
            {profile.displayName}
          </h1>
          <p className="mx-auto mt-7 w-full max-w-4xl text-3xl font-semibold leading-[1.1] tracking-normal text-slate-100 sm:text-5xl lg:text-6xl">
            <span className="block">低空感知、视觉识别</span>
            <span className="block">与交通基础设施安全。</span>
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-balance text-base leading-8 text-slate-400 sm:text-lg">
            面向道路与边坡场景，探索无人机低空感知、多源监测融合与风险预警的研究和工程实践。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            <CTAButton href="/projects" variant="primary">
              查看项目
            </CTAButton>
            <CTAButton href="/resume" variant="secondary">
              个人履历
            </CTAButton>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl sm:mt-20">
          <EngineeringVisual />
        </div>

        <div className="mx-auto mt-16 flex max-w-5xl items-center justify-between border-t border-white/10 pt-5 text-sm text-slate-400 sm:mt-20">
          <p>{profile.educationLine}</p>
          <a
            href="#selected-work"
            className="hidden items-center gap-2 font-medium text-slate-200 transition hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 sm:inline-flex"
          >
            向下浏览 <ArrowDownRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
