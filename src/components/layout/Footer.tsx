import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/contact";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-28 sm:px-6 md:pb-12 lg:px-8">
      <div className="editorial-rule" />
      <div className="grid gap-8 py-8 text-sm text-slate-400 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-semibold text-slate-50">李胤儒</p>
          <p className="mt-2 max-w-xl leading-6">
            太原科技大学车辆与交通工程学院，智慧交通方向。关注低空智能巡检、计算机视觉与交通基础设施安全。
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-1 font-medium text-slate-200 transition hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
          >
            Email <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-slate-200 transition hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
          >
            GitHub <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
          <Link
            href="/contact"
            prefetch={false}
            className="font-medium text-slate-200 transition hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
          >
            联系与交流
          </Link>
        </div>
      </div>
    </footer>
  );
}
