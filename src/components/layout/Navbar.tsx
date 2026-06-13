import Link from "next/link";
import { MobileNav } from "./MobileNav";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-500/15 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md border border-teal-300/35 bg-teal-300/10 font-mono text-sm text-teal-200 transition group-hover:border-teal-300/70">
            李
          </span>
          <span>
            <span className="block text-sm font-semibold text-slate-50">李胤儒</span>
            <span className="block text-xs text-slate-400">Smart Transportation</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <MobileNav items={navItems} />
      </nav>
    </header>
  );
}
