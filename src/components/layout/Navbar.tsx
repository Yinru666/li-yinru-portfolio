import Link from "next/link";
import { MobileNav } from "./MobileNav";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "项目" },
  { href: "/research", label: "研究" },
  { href: "/resume", label: "履历" },
  { href: "/contact", label: "联系" },
];

export function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="relative mx-auto flex max-w-[92rem] items-center justify-center px-5 pt-4 lg:px-8">
        <Link
          href="/"
          prefetch={false}
          className="pointer-events-auto absolute left-8 top-6 hidden items-center gap-3 rounded-full text-sm text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 lg:flex"
        >
          <span className="grid size-8 place-items-center rounded-full border border-white/12 bg-white/[0.05] font-mono text-xs text-slate-100 shadow-sm shadow-black/30">
            李
          </span>
          <span className="leading-tight">
            <span className="block font-semibold">李胤儒</span>
            <span className="block text-xs text-slate-400">Smart Transportation</span>
          </span>
        </Link>

        <nav
          aria-label="主导航"
          className="pointer-events-auto hidden items-center gap-1 rounded-full border border-white/10 bg-[#111718]/88 p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.38)] backdrop-blur-xl md:flex"
        >
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
            >
              {index === 0 ? <span className="mr-1.5 font-mono text-xs">01</span> : null}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <MobileNav items={navItems} />
    </header>
  );
}
