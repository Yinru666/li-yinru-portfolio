"use client";

import { useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SkillBadgeProps = {
  name: string;
  detail?: string;
};

export function SkillBadge({ name, detail }: SkillBadgeProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const badge = (
    <span
      tabIndex={detail ? 0 : undefined}
      className="inline-flex cursor-help rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-teal-300/35 hover:bg-teal-300/[0.08] hover:text-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {name}
    </span>
  );

  if (!detail) {
    return badge;
  }

  return (
    <Tooltip
      open={open}
      onOpenChange={(nextOpen) => {
        if (nextOpen) {
          setOpen(true);
          return;
        }

        if (!wrapperRef.current?.contains(document.activeElement)) {
          setOpen(false);
        }
      }}
    >
      <span
        ref={wrapperRef}
        className="inline-flex"
        onFocusCapture={() => setOpen(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setOpen(false);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        <TooltipTrigger asChild>{badge}</TooltipTrigger>
      </span>
      <TooltipContent
        side="top"
        align="start"
        sideOffset={12}
        className="z-50 max-w-72 border border-white/12 bg-[#151d1d] px-3 py-2 text-left text-xs leading-5 text-slate-200 shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
      >
        {detail}
      </TooltipContent>
    </Tooltip>
  );
}
