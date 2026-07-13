import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contact } from "@/data/contact";

export default function ContactPage() {
  return (
    <div className="section-fade mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40 lg:px-8">
      <SectionTitle
        as="h1"
        eyebrow="Contact"
        title="联系与交流"
        description={contact.intro}
      />
      <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">{contact.english}</p>
      <div className="mt-12 grid border-t border-white/10 md:grid-cols-3">
        <a
          href={`mailto:${contact.email}`}
          className="group border-b border-white/10 py-7 transition-colors hover:bg-white/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 md:border-r md:pr-8"
        >
          <p className="editorial-caption text-teal-300">Email</p>
          <p className="mt-4 flex items-center justify-between gap-4 text-lg font-semibold text-slate-50">
            {contact.email} <ArrowUpRight className="size-4 shrink-0 transition group-hover:text-teal-300" aria-hidden="true" />
          </p>
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="group border-b border-white/10 py-7 transition-colors hover:bg-white/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 md:border-r md:px-8"
        >
          <p className="editorial-caption text-teal-300">GitHub</p>
          <p className="mt-4 flex items-center justify-between gap-4 text-lg font-semibold text-slate-50">
            github.com/Yinru666 <ArrowUpRight className="size-4 shrink-0 transition group-hover:text-teal-300" aria-hidden="true" />
          </p>
        </a>
        <Link
          href={contact.resumeHref}
          prefetch={false}
          className="group border-b border-white/10 py-7 transition-colors hover:bg-white/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 md:pl-8"
        >
          <p className="editorial-caption text-teal-300">Resume</p>
          <p className="mt-4 flex items-center justify-between gap-4 text-lg font-semibold text-slate-50">
            查看个人履历 <ArrowUpRight className="size-4 shrink-0 transition group-hover:text-teal-300" aria-hidden="true" />
          </p>
        </Link>
      </div>
      <div className="mt-12 rounded-[1.4rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
        <p className="editorial-caption text-teal-300">WeChat</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-normal text-slate-50">微信说明</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{contact.wechatNote}</p>
      </div>
    </div>
  );
}
