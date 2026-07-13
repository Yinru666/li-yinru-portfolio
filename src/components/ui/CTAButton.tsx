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
    "border-white/10 bg-slate-100 text-slate-950 shadow-[0_10px_24px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 hover:bg-teal-200 active:translate-y-px",
  secondary:
    "border-white/12 bg-white/[0.04] text-slate-100 hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.08] active:translate-y-px",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:bg-white/[0.05] hover:text-white active:translate-y-px",
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
        "min-h-11 rounded-full px-5 py-2 transition duration-200 focus-visible:ring-teal-300/35 motion-reduce:transition-none",
        variants[variant],
        className,
      )}
    >
      <Link href={href} prefetch={false}>
        {children}
      </Link>
    </Button>
  );
}
