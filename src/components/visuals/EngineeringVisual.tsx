import Image from "next/image";
import { images } from "@/data/assets";

export function EngineeringVisual() {
  return (
    <div className="engineering-visual group relative min-h-[320px] w-full min-w-0 overflow-hidden rounded-xl border border-slate-500/20 bg-slate-950/72 shadow-2xl shadow-black/30 sm:min-h-[420px] sm:rounded-2xl lg:min-h-[460px]">
      <Image
        src={images.transportShow.src}
        alt={images.transportShow.alt}
        width={images.transportShow.width}
        height={images.transportShow.height}
        priority
        className="absolute inset-0 h-full w-full object-cover object-[center_42%] opacity-90 contrast-[1.04] saturate-[0.95] transition duration-500 group-hover:scale-[1.018] group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/32 to-slate-950/10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="route-line absolute left-8 top-16 h-px w-[72%] origin-left bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
      <div className="risk-line absolute bottom-24 left-8 right-8 h-px bg-gradient-to-r from-teal-300/5 via-teal-300/55 to-teal-300/5" />

      <div className="relative flex min-h-[320px] min-w-0 flex-col justify-between p-4 sm:min-h-[420px] sm:p-6 lg:min-h-[460px]">
        <div className="flex min-w-0 flex-wrap gap-2">
          {["UAV Inspection", "Computer Vision", "Infrastructure Safety"].map(
            (label, index) => (
              <span
                key={label}
                className="data-node max-w-full truncate rounded-full border border-slate-300/20 bg-slate-950/75 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-teal-100 sm:px-3 sm:text-[10px]"
                style={{ animationDelay: `${index * 0.7}s` }}
              >
                {label}
              </span>
            ),
          )}
        </div>

        <div className="max-w-full rounded-xl border border-slate-300/20 bg-slate-950/86 p-4 backdrop-blur-md sm:max-w-md">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-teal-300">
            Research Prototype
          </p>
          <h2 className="mt-3 break-all text-lg font-semibold text-slate-50 [overflow-wrap:anywhere] sm:break-words">
            低空智能巡检驱动交通基础设施安全治理
          </h2>
          <p className="mt-3 break-all text-sm leading-6 text-slate-300 [overflow-wrap:anywhere] sm:break-words">
            将竞赛答辩、现场采集、视觉识别和风险处置串联为一条可验证的工程化证据链。
          </p>
        </div>
      </div>
    </div>
  );
}
