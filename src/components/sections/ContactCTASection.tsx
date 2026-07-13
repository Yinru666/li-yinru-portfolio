import { CTAButton } from "@/components/ui/CTAButton";
import { contact } from "@/data/contact";

export function ContactCTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_58px_rgba(0,0,0,0.24)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="editorial-caption text-teal-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-50 sm:text-4xl">
              欢迎围绕智能交通与低空巡检方向交流。
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
              欢迎通过邮件交流科研合作、项目实践与技术问题。{contact.wechatNote}
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
