import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contact } from "@/data/contact";

export default function ContactPage() {
  return (
    <div className="section-fade mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Contact"
        title="联系与交流"
        description={contact.intro}
      />
      <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300">
        {contact.english}
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <a
          href={`mailto:${contact.email}`}
          className="rounded-lg border border-slate-500/20 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-teal-300/45 hover:bg-white/[0.052] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-300/80">
            Email
          </p>
          <p className="mt-4 text-sm text-slate-100">{contact.email}</p>
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-500/20 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-teal-300/45 hover:bg-white/[0.052] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-300/80">
            GitHub
          </p>
          <p className="mt-4 text-sm text-slate-100">github.com/Yinru666</p>
        </a>
        <Link
          href={contact.resumeHref}
          className="rounded-lg border border-slate-500/20 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-teal-300/45 hover:bg-white/[0.052] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-300/80">
            Resume
          </p>
          <p className="mt-4 text-sm text-slate-100">查看简历页面</p>
        </Link>
      </div>
      <div className="mt-8 rounded-lg border border-slate-500/20 bg-slate-950/70 p-6">
        <h2 className="text-lg font-semibold text-slate-50">微信说明</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">{contact.wechatNote}</p>
      </div>
    </div>
  );
}
