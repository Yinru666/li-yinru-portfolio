import Link from "next/link";
import { contact } from "@/data/contact";

export function Footer() {
  return (
    <footer className="border-t border-slate-500/15 bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 text-sm text-slate-400 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-semibold text-slate-100">李胤儒</p>
          <p className="mt-2 max-w-2xl leading-6">
            太原科技大学车辆与交通工程学院，智慧交通方向。关注低空智能巡检、计算机视觉与交通基础设施安全。
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-md border border-slate-500/25 px-3 py-2 transition hover:border-teal-300/50 hover:text-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
          >
            Email
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-500/25 px-3 py-2 transition hover:border-teal-300/50 hover:text-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
          >
            GitHub
          </a>
          <Link
            href="/projects"
            className="rounded-md border border-slate-500/25 px-3 py-2 transition hover:border-teal-300/50 hover:text-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
          >
            Projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
