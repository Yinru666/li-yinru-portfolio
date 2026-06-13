import { TimelineInteractive } from "@/components/interactive/TimelineInteractive";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { timeline } from "@/data/timeline";

export function TimelineSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Timeline"
        title="项目轨迹"
        description="按项目推进顺序整理关键节点。"
      />
      <div className="mt-10">
        <TimelineInteractive events={timeline} />
      </div>
    </section>
  );
}
