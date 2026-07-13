import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/data/assets";

export function EngineeringVisual() {
  return (
    <Link
      href="/projects/uav-yolo26-road-damage"
      prefetch={false}
      className="group block rounded-[1.75rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
    >
      <figure className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 shadow-[0_28px_70px_rgba(0,0,0,0.42)]">
        <div className="relative aspect-[4/3] sm:aspect-[16/10]">
          <Image
            src={images.transportShow.src}
            alt={images.transportShow.alt}
            width={images.transportShow.width}
            height={images.transportShow.height}
            priority
            className="h-full w-full object-cover object-[center_42%] transition duration-500 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
        </div>
      </figure>

      <div className="grid gap-5 px-1 pt-5 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8 sm:px-2">
        <div>
          <p className="editorial-caption text-teal-300">
            UAV inspection / road damage detection
          </p>
          <h2 className="mt-2 text-xl font-semibold leading-tight tracking-normal text-slate-50 sm:text-2xl">
            低空智能巡检驱动交通基础设施安全治理
          </h2>
          <p className="mt-3 max-w-4xl text-balance text-sm leading-6 text-slate-400">
            围绕交通基础设施安全监测，融合低空遥感、多源数据采集、视觉识别与风险评估，形成可验证的智能巡检研究路径。
          </p>
        </div>
        <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-slate-200 transition group-hover:bg-slate-100 group-hover:text-slate-950">
          <ArrowUpRight className="size-5" aria-hidden="true" />
          <span className="sr-only">查看项目详情</span>
        </span>
      </div>
    </Link>
  );
}
