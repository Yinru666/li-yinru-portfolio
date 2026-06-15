"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavItem = {
  href: string;
  label: string;
};

export function MobileNav({ items }: { items: NavItem[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="shrink-0 border-slate-500/25 bg-white/[0.03] text-slate-200 hover:border-teal-300/45 hover:bg-white/[0.06] md:hidden"
        >
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[min(21rem,calc(100vw-2rem))] border-slate-500/20 bg-slate-950/95 p-0 shadow-2xl shadow-black/30"
      >
        <SheetHeader className="border-b border-slate-500/15 p-5">
          <SheetTitle className="text-slate-50">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="grid gap-1 p-3" aria-label="Mobile navigation">
          {items.map((item) => (
            <SheetClose key={item.href} asChild>
              <Link
                href={item.href}
                className="block rounded-md px-3 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05] hover:text-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
