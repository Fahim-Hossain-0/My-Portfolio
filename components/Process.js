import { Fragment } from "react";
import { Search, PenLine, Code2, ShieldCheck, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { process } from "@/lib/data";

const icons = { search: Search, pen: PenLine, code: Code2, shield: ShieldCheck };

const colorMap = {
  blue: { text: "text-accent-blue", bg: "bg-accent-blue/10", border: "border-accent-blue/30" },
  purple: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
  green: { text: "text-accent-green", bg: "bg-accent-green/10", border: "border-accent-green/30" },
  amber: { text: "text-accent-amber", bg: "bg-accent-amber/10", border: "border-accent-amber/30" },
};

export default function Process() {
  return (
    <section className="mx-auto max-w-content px-4 py-24">
      <SectionHeading
        eyebrow="Process"
        title="How I work"
        description="Same four steps on every project, small or large."
      />

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
        {process.map((step, i) => {
          const Icon = icons[step.icon];
          const c = colorMap[step.color];
          return (
            <Fragment key={step.number}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="card-surface-process h-full rounded-2xl p-6">
                  <span className={`text-xs font-semibold ${c.text}`}>{step.number}</span>
                  <div className={`mt-3 flex h-9 w-9 items-center justify-center rounded-lg border ${c.bg} ${c.border}`}>
                    <Icon size={16} className={c.text} />
                  </div>
                  <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </div>
              </Reveal>
              {i < process.length - 1 && (
                <ChevronRight
                  size={16}
                  className="mx-auto hidden shrink-0 text-muted/40 lg:block"
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
