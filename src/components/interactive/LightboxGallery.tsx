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
            className="group overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.035] text-left shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-1 hover:border-teal-300/35 hover:bg-white/[0.055] hover:shadow-[0_18px_42px_rgba(0,0,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            aria-label={`放大查看：${image.alt}`}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-[#111718]/88 px-2.5 py-1 text-xs text-slate-100 opacity-0 shadow-sm backdrop-blur-md transition group-hover:opacity-100 group-focus-visible:opacity-100">
                放大查看
              </span>
            </div>
            <p className="border-t border-white/8 px-4 py-3 text-balance text-xs leading-5 text-slate-400">
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
          <DialogContent className="max-h-[92vh] overflow-auto border-white/12 bg-[#0e1414] p-0 shadow-[0_28px_80px_rgba(0,0,0,0.55)] sm:max-w-6xl">
            <DialogHeader className="border-b border-white/10 p-4 pr-12">
              <DialogTitle className="text-sm text-slate-50">
                {selected.alt}
              </DialogTitle>
              <DialogDescription className="text-xs leading-5 text-slate-400">
                项目图像与技术资料原图
              </DialogDescription>
            </DialogHeader>
            <Image
              src={selected.src}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              className="h-auto w-full"
            />
            <p className="border-t border-white/10 p-4 text-sm leading-6 text-slate-400">
              {selected.caption}
            </p>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
}
