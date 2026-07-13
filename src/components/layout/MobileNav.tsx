"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, FolderKanban, House, Mail, Microscope } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
};

const icons = [House, FolderKanban, Microscope, FileText, Mail];

export function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="移动端导航"
      className="pointer-events-auto fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-50 flex w-[calc(100%_-_2rem)] max-w-[22rem] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-[#111718]/92 px-2 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden"
    >
      {items.map((item, index) => {
        const Icon = icons[index];
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            prefetch={false}
            aria-label={item.label}
            aria-current={active ? "page" : undefined}
            title={item.label}
            className={`grid size-10 place-items-center rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:scale-95 ${
              active
                ? "bg-slate-100 text-slate-950 shadow-sm shadow-black/30"
                : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            <Icon aria-hidden="true" className="size-[1.05rem]" strokeWidth={1.8} />
            <span className="sr-only">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
