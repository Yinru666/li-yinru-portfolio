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
      orientation="horizontal"
      className="gap-5"
    >
      <TabsList
        variant="line"
        className="!h-auto w-full flex-wrap justify-start rounded-[1.15rem] border border-white/10 bg-white/[0.025] p-2 lg:flex-nowrap"
        aria-label="Project pipeline steps"
      >
        {steps.map((step, index) => (
          <TabsTrigger
            key={step.title}
            value={`step-${index}`}
            className="min-h-12 min-w-max flex-none justify-start rounded-xl px-3 py-2 text-left text-slate-400 hover:bg-white/[0.04] hover:text-slate-100 data-active:border-teal-300/20 data-active:bg-teal-300/[0.09] data-active:text-slate-50"
          >
            <span className="font-mono text-[11px] text-teal-300/75">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{step.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="min-w-0">
        {steps.map((step, index) => {
          const nextStep = steps[index + 1];

          return (
            <TabsContent
              key={step.title}
              value={`step-${index}`}
              className="mt-0 data-active:animate-in data-active:fade-in-0 data-active:slide-in-from-bottom-1 motion-reduce:animate-none"
            >
              <Card className="border border-white/10 bg-white/[0.035] ring-0 shadow-[0_16px_38px_rgba(0,0,0,0.24)]">
                <CardHeader className="border-b border-white/8">
                  <Badge
                    variant="outline"
                    className="w-fit border-teal-300/20 bg-teal-300/[0.08] font-mono uppercase text-teal-300"
                  >
                    {eyebrow}
                  </Badge>
                  <CardTitle className="text-xl text-slate-50">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="max-w-2xl leading-7 text-slate-400">
                    {title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5 text-sm leading-7 text-slate-400 md:grid-cols-[1fr_0.78fr]">
                  <div>
                    <p className="font-mono text-[10px] uppercase text-slate-400">
                      Explanation
                    </p>
                    <p className="mt-3">{step.detail}</p>
                  </div>
                  <div className="rounded-[1rem] border border-teal-300/15 bg-teal-300/[0.055] p-4">
                    <p className="font-mono text-[10px] uppercase text-teal-300">
                      Flow Context
                    </p>
                    <Separator className="my-3 bg-white/10" />
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
