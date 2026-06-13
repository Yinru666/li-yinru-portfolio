import { SectionTitle } from "@/components/ui/SectionTitle";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="section-fade mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Blog"
        title="技术笔记"
        description="围绕无人机巡检、目标检测和边坡预警整理后续写作主题。"
      />
      <div className="mt-10 grid gap-4">
        {blogPosts.map((post, index) => (
          <article
            key={post.title}
            className="rounded-lg border border-slate-500/20 bg-white/[0.03] p-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded border border-slate-500/25 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-300">
                {post.tag}
              </span>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-50">
              {post.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{post.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
