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
  const badge = (
    <span
      tabIndex={detail ? 0 : undefined}
      className="inline-flex cursor-help rounded-md border border-slate-500/30 bg-slate-900/60 px-3 py-2 text-xs text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-teal-300/50 hover:bg-slate-900 hover:text-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {name}
    </span>
  );

  if (!detail) {
    return badge;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{badge}</TooltipTrigger>
      <TooltipContent
        side="top"
        align="start"
        sideOffset={12}
        className="z-50 max-w-72 border border-slate-500/25 bg-slate-950 px-3 py-2 text-left text-xs leading-5 text-slate-100 shadow-2xl shadow-black/40"
      >
        {detail}
      </TooltipContent>
    </Tooltip>
  );
}
