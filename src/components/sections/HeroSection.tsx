import { CTAButton } from "@/components/ui/CTAButton";
import { EngineeringVisual } from "@/components/visuals/EngineeringVisual";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-500/15">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.075),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(94,234,212,0.045),transparent_28%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 overflow-x-clip px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-8 lg:py-16">
        <div className="relative z-10 min-w-0">
          <p className="max-w-full break-words font-mono text-[11px] uppercase tracking-[0.22em] text-teal-300/85 [overflow-wrap:anywhere] sm:text-xs sm:tracking-[0.28em]">
            {profile.educationLine}
          </p>
          <h1 className="mt-5 max-w-3xl break-words text-4xl font-semibold leading-[0.98] tracking-tight text-slate-50 [overflow-wrap:anywhere] sm:text-6xl lg:text-7xl">
            {profile.displayName}
          </h1>
          <p className="mt-5 max-w-2xl break-all text-xl font-semibold leading-snug text-slate-100 [overflow-wrap:anywhere] sm:break-words sm:text-3xl">
            {profile.positioning}
          </p>
          <p className="mt-5 max-w-2xl break-all font-mono text-sm leading-7 text-slate-300 [overflow-wrap:anywhere] sm:break-words">
            {profile.englishPositioning}
          </p>
          <p className="mt-6 max-w-xl break-all text-base leading-8 text-slate-200 [overflow-wrap:anywhere] sm:break-words">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/projects" variant="primary" className="w-full justify-center sm:w-auto">
              View Projects
            </CTAButton>
            <CTAButton href="/resume" className="w-full justify-center sm:w-auto">Resume</CTAButton>
            <CTAButton href="/contact" variant="ghost" className="w-full justify-center sm:w-auto">
              Contact
            </CTAButton>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-10">
            {["道路病害识别", "黄土边坡预警", "多源监测融合"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-500/18 bg-slate-900/45 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Focus
                </p>
                <p className="mt-1 text-sm text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 min-w-0">
          <EngineeringVisual />
        </div>
      </div>
    </section>
  );
}
