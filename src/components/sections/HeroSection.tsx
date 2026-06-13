import { CTAButton } from "@/components/ui/CTAButton";
import { EngineeringVisual } from "@/components/visuals/EngineeringVisual";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-500/15">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.1),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(20,184,166,0.08),transparent_28%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-teal-300/80">
            {profile.educationLine}
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
            {profile.displayName}
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl">
            {profile.positioning}
          </p>
          <p className="mt-5 max-w-2xl font-mono text-sm leading-7 text-slate-400">
            {profile.englishPositioning}
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/projects" variant="primary">
              View Projects
            </CTAButton>
            <CTAButton href="/resume">Resume</CTAButton>
            <CTAButton href="/contact" variant="ghost">
              Contact
            </CTAButton>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {["道路病害识别", "黄土边坡预警", "多源监测融合"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-500/18 bg-white/[0.028] px-4 py-3"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Focus
                </p>
                <p className="mt-1 text-sm text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10">
          <EngineeringVisual />
        </div>
      </div>
    </section>
  );
}
