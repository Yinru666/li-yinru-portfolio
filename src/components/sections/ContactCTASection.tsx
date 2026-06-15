import { CTAButton } from "@/components/ui/CTAButton";
import { contact } from "@/data/contact";

export function ContactCTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="overflow-hidden rounded-lg border border-slate-500/25 bg-slate-900/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-teal-300/80">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              欢迎围绕智能交通与低空巡检方向交流。
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              {contact.english} {contact.wechatNote}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <CTAButton href="/contact" variant="primary" className="w-full justify-center sm:w-auto">
              Contact Me
            </CTAButton>
            <CTAButton href="/projects" variant="ghost" className="w-full justify-center sm:w-auto">
              View Projects
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
