import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "border-teal-300/60 bg-slate-900/90 text-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-teal-200 hover:bg-slate-800 active:translate-y-px",
  secondary:
    "border-slate-400/35 bg-white/[0.055] text-slate-50 hover:border-teal-300/55 hover:bg-white/[0.085] active:translate-y-px",
  ghost:
    "border-slate-500/25 bg-transparent text-slate-200 hover:border-slate-300/45 hover:bg-white/[0.055] active:translate-y-px",
};

export function CTAButton({
  href,
  children,
  variant = "secondary",
  className,
}: CTAButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "min-h-11 rounded-md px-4 py-2 transition duration-200 focus-visible:ring-teal-300/45 motion-reduce:transition-none",
        variants[variant],
        className,
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
