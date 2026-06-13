"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { SiteImage } from "@/data/assets";

type LightboxGalleryProps = {
  images: SiteImage[];
};

export function LightboxGallery({ images }: LightboxGalleryProps) {
  const [selected, setSelected] = useState<SiteImage | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelected(image)}
            className="group overflow-hidden rounded-lg border border-slate-500/20 bg-white/[0.03] text-left transition duration-200 hover:-translate-y-1 hover:border-teal-300/45 hover:bg-white/[0.052] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            aria-label={`放大查看：${image.alt}`}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.025] group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <span className="absolute bottom-3 right-3 rounded border border-slate-300/20 bg-slate-950/75 px-2 py-1 text-xs text-teal-200 opacity-0 transition group-hover:opacity-100">
                Click to enlarge
              </span>
            </div>
            <p className="border-t border-slate-500/15 px-4 py-3 text-xs leading-5 text-slate-400">
              {image.caption}
            </p>
          </button>
        ))}
      </div>

      <Dialog
        open={Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        {selected ? (
          <DialogContent className="max-h-[92vh] overflow-auto border-slate-500/25 bg-slate-950/95 p-0 shadow-2xl shadow-black/50 sm:max-w-6xl">
            <DialogHeader className="border-b border-slate-500/15 p-4 pr-12">
              <DialogTitle className="text-sm text-slate-100">
                {selected.alt}
              </DialogTitle>
              <DialogDescription className="text-xs leading-5 text-slate-400">
                这里呈现原始证据、技术路线图或检测结果；检测图不重绘框线，保留原图中的类别与置信度。
              </DialogDescription>
            </DialogHeader>
            <Image
              src={selected.src}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              className="h-auto w-full"
            />
            <div className="grid gap-4 border-t border-slate-500/20 p-4 text-sm leading-6 text-slate-400 md:grid-cols-[1.2fr_0.8fr]">
              <p>{selected.caption}</p>
              <div className="rounded-md border border-slate-500/20 bg-white/[0.03] p-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-300/80">
                  Reading layer
                </p>
                <p className="mt-2">
                  关注图像来源、识别结果、空间位置和它在项目流程中的证据作用。
                </p>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
}
