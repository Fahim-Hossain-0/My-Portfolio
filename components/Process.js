"use client";

import { Fragment } from "react";
import { Search, PenLine, Code2, ShieldCheck, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { process } from "@/lib/data";

const icons = { search: Search, pen: PenLine, code: Code2, shield: ShieldCheck };

const colorMap = {
  blue: { text: "text-accent-blue", bg: "bg-accent-blue/10", border: "border-accent-blue/30" },
  purple: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
  green: { text: "text-accent-cyan", bg: "bg-accent-cyan/10", border: "border-accent-cyan/30" },
  amber: { text: "text-accent-violet", bg: "bg-accent-violet/10", border: "border-accent-violet/30" },
};

export default function Process() {
  return (
    <section className="mx-auto max-w-content px-4 py-24">
      <SectionHeading
        eyebrow="Process"
        title="How I work"
        description="Same four steps on every project, small or large."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
        {process.map((step, i) => {
          const Icon = icons[step.icon];
          const c = colorMap[step.color];
          return (
            <Fragment key={step.number}>
              <Reveal delay={i * 0.08} className="h-full">
                <SpotlightCard className="h-full rounded-2xl p-6 transition-all duration-300 hover:border-accent/30" maxTilt={6}>
                  <span className={`text-xs font-mono font-semibold ${c.text}`}>STEP {step.number}</span>
                  <div
                    className={`mt-3 flex h-9.5 w-9.5 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${c.bg} ${c.border}`}
                  >
                    <Icon size={18} className={c.text} />
                  </div>
                  <h3 className="mt-4 font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </SpotlightCard>
              </Reveal>
              {i < process.length - 1 && (
                <ChevronRight
                  size={16}
                  className="mx-auto hidden shrink-0 text-muted/40 transition-colors duration-300 hover:text-accent lg:block"
                  aria-hidden="true"
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
