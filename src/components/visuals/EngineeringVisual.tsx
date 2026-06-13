import Image from "next/image";
import { images } from "@/data/assets";

export function EngineeringVisual() {
  return (
    <div className="engineering-visual group relative min-h-[460px] overflow-hidden rounded-2xl border border-slate-500/20 bg-slate-950/70 shadow-2xl shadow-black/30">
      <Image
        src={images.transportShow.src}
        alt={images.transportShow.alt}
        width={images.transportShow.width}
        height={images.transportShow.height}
        priority
        className="absolute inset-0 h-full w-full object-cover object-[center_44%] opacity-90 contrast-[1.03] saturate-[0.95] transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/32 to-slate-950/10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="route-line absolute left-8 top-16 h-px w-[72%] origin-left bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
      <div className="risk-line absolute bottom-24 left-8 right-8 h-px bg-gradient-to-r from-teal-300/5 via-teal-300/55 to-teal-300/5" />

      <div className="relative flex min-h-[460px] flex-col justify-between p-6">
        <div className="flex flex-wrap gap-2">
          {["UAV Inspection", "Computer Vision", "Infrastructure Safety"].map(
            (label, index) => (
              <span
                key={label}
                className="data-node rounded-full border border-slate-300/20 bg-slate-950/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-100"
                style={{ animationDelay: `${index * 0.7}s` }}
              >
                {label}
              </span>
            ),
          )}
        </div>

        <div className="max-w-md rounded-xl border border-slate-300/20 bg-slate-950/80 p-4 backdrop-blur-md">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-teal-300">
            Research Prototype
          </p>
          <h2 className="mt-3 text-lg font-semibold text-slate-50">
            低空智能巡检驱动交通基础设施安全治理
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            将竞赛答辩、现场采集、视觉识别和风险处置串联为一条可验证的工程化证据链。
          </p>
        </div>
      </div>
    </div>
  );
}
