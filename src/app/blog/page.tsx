import { SectionTitle } from "@/components/ui/SectionTitle";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="section-fade mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40 lg:px-8">
      <SectionTitle
        as="h1"
        eyebrow="Research Notes"
        title="技术笔记"
        description="围绕无人机巡检、目标检测和边坡预警整理的研究问题与实践判断。"
      />
      <div className="mt-12">
        {blogPosts.map((post, index) => (
          <article
            key={post.title}
            id={`note-${index + 1}`}
            className="scroll-mt-28 grid gap-5 border-t border-white/10 py-7 sm:grid-cols-[4rem_1fr] sm:items-start"
          >
            <span className="font-mono text-xs text-teal-300/80">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="editorial-caption text-slate-400">{post.tag}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-normal text-slate-50">
                {post.title}
              </h2>
              <p className="mt-3 max-w-2xl text-balance text-sm leading-7 text-slate-400">{post.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
