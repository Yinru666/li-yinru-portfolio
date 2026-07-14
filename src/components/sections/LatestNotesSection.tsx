import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { blogPosts } from "@/data/blog";

export function LatestNotesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          eyebrow="Research Notes"
          title="最新技术笔记"
        />
        <Link
          href="/blog"
          prefetch={false}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
        >
          全部笔记 <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-10 grid gap-x-10 md:grid-cols-2 lg:mt-14">
        {blogPosts.slice(0, 4).map((post, index) => (
          <Link
            href={`/blog#note-${index + 1}`}
            key={post.title}
            prefetch={false}
            className="group grid gap-4 border-t border-white/10 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 sm:grid-cols-[2.5rem_1fr_auto]"
          >
            <span className="font-mono text-xs text-teal-300/80">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="editorial-caption text-slate-400">{post.tag}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-normal text-slate-50 transition group-hover:text-teal-200">
                {post.title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-6 text-slate-400">{post.summary}</p>
            </div>
            <ArrowUpRight className="mt-1 size-4 text-slate-400 transition group-hover:text-teal-200" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}
