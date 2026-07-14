"use client";

import Link from "next/link";
import { useState } from "react";
import type { TimelineEvent } from "@/data/timeline";

type TimelineInteractiveProps = {
  events: TimelineEvent[];
};

export function TimelineInteractive({ events }: TimelineInteractiveProps) {
  const initial = events.find((event) => event.current)?.id ?? events[0]?.id;
  const [activeId, setActiveId] = useState(initial);
  const activeEvent = events.find((event) => event.id === activeId) ?? events[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.65fr)]">
      <div className="relative grid gap-3 before:absolute before:left-4 before:top-4 before:h-[calc(100%_-_2rem)] before:w-px before:bg-slate-500/25 sm:grid-cols-2 sm:before:hidden">
        {events.map((event) => {
          const active = event.id === activeId;
          return (
            <button
              key={event.id}
              type="button"
              onClick={() => setActiveId(event.id)}
              onFocus={() => setActiveId(event.id)}
              className="group relative rounded-lg border border-slate-500/20 bg-white/[0.03] p-4 pl-11 text-left transition duration-200 hover:border-teal-300/55 hover:bg-white/[0.055] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px sm:pl-4 motion-reduce:transition-none"
              aria-pressed={active}
            >
              <span
                className={
                  active
                    ? "absolute left-3 top-5 h-3 w-3 rounded-full bg-teal-300 shadow-[0_0_0_4px_rgba(45,212,191,0.13)] sm:hidden"
                    : "absolute left-3 top-5 h-3 w-3 rounded-full border border-slate-400 bg-slate-950 sm:hidden"
                }
              />
              <span className="font-mono text-xs uppercase text-teal-300/80">
                {event.time}
              </span>
              <h3 className="mt-2 text-base font-semibold text-slate-50">
                {event.title}
              </h3>
              <p className="mt-2 text-xs text-slate-400">{event.label}</p>
            </button>
          );
        })}
      </div>
      <aside className="rounded-lg border border-slate-500/20 bg-slate-950/70 p-5">
        <p className="font-mono text-xs uppercase text-teal-300">
          Selected Node
        </p>
        <h3 className="mt-3 text-lg font-semibold text-slate-50">
          {activeEvent.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{activeEvent.detail}</p>
        <Link
          href={activeEvent.href}
          prefetch={false}
          className="mt-5 inline-flex rounded-md border border-slate-500/30 px-3 py-2 text-sm text-teal-200 transition hover:border-teal-300/55 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 active:translate-y-px"
        >
          查看关联内容
        </Link>
      </aside>
    </div>
  );
}
