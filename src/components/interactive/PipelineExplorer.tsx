"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { PipelineStep } from "@/data/projects";

type PipelineExplorerProps = {
  steps: PipelineStep[];
  eyebrow?: string;
  title?: string;
};

export function PipelineExplorer({
  steps,
  eyebrow = "Interactive Pipeline",
  title = "每个节点对应输入、处理与输出。",
}: PipelineExplorerProps) {
  if (steps.length === 0) return null;

  return (
    <Tabs
      defaultValue="step-0"
      orientation="vertical"
      className="!grid gap-5 lg:grid-cols-[0.42fr_1fr] lg:items-start"
    >
      <TabsList
        variant="line"
        className="h-auto w-full flex-col items-stretch justify-start rounded-lg border border-slate-500/20 bg-white/[0.025] p-2"
        aria-label="Project pipeline steps"
      >
        {steps.map((step, index) => (
          <TabsTrigger
            key={step.title}
            value={`step-${index}`}
            className="min-h-12 justify-start rounded-md px-3 py-2 text-left data-active:border-teal-300/35 data-active:bg-teal-300/10 data-active:text-teal-100"
          >
            <span className="font-mono text-[11px] text-teal-300/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="truncate">{step.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="min-w-0">
        {steps.map((step, index) => {
          const nextStep = steps[index + 1];

          return (
            <TabsContent key={step.title} value={`step-${index}`} className="mt-0">
              <Card className="border border-slate-500/20 bg-white/[0.035] ring-0">
                <CardHeader className="border-b border-slate-500/15">
                  <Badge
                    variant="outline"
                    className="w-fit border-teal-300/25 bg-teal-300/10 font-mono uppercase tracking-[0.18em] text-teal-200"
                  >
                    {eyebrow}
                  </Badge>
                  <CardTitle className="text-xl text-slate-50">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="max-w-2xl leading-7 text-slate-300">
                    {title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5 text-sm leading-7 text-slate-300 md:grid-cols-[1fr_0.78fr]">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
                      Explanation
                    </p>
                    <p className="mt-3">{step.detail}</p>
                  </div>
                  <div className="rounded-lg border border-slate-500/20 bg-slate-950/60 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-300/80">
                      Flow Context
                    </p>
                    <Separator className="my-3 bg-slate-500/20" />
                    <p>
                      {nextStep
                        ? `该步骤的结果会进入「${nextStep.title}」，继续形成后续判断或工程输出。`
                        : "该步骤形成最终输出，用于复盘、决策或工程闭环。"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
}
