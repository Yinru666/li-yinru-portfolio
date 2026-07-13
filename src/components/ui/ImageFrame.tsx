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
        "overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#111718] shadow-[0_20px_52px_rgba(0,0,0,0.32)]",
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
            "h-full w-full object-cover",
            imageClassName,
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-teal-950/[0.025]" />
      </div>
      {showCaption ? (
        <figcaption className="border-t border-white/8 px-4 py-3 text-xs leading-5 text-slate-400">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
