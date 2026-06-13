import Image from "next/image";
import { cn } from "@/lib/classes";
import type { SiteImage } from "@/data/assets";

type ImageFrameProps = {
  image: SiteImage;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  showCaption?: boolean;
};

export function ImageFrame({
  image,
  priority = false,
  className,
  imageClassName,
  showCaption = true,
}: ImageFrameProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg border border-slate-500/20 bg-slate-950/70 shadow-2xl shadow-black/20",
        className,
      )}
    >
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          className={cn(
            "h-full w-full object-cover opacity-90 saturate-[0.86]",
            imageClassName,
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-teal-950/10" />
      </div>
      {showCaption ? (
        <figcaption className="border-t border-slate-500/15 px-4 py-3 text-xs leading-5 text-slate-400">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
