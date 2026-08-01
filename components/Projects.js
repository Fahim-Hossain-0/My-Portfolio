"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import MagneticButton from "@/components/MagneticButton";
import { projects } from "@/lib/data";

const colorMap = {
  amber: "text-accent-violet border-accent-violet/30 bg-accent-violet/10",
  red: "text-rose-400 border-rose-500/30 bg-rose-500/10",
  green: "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10",
  blue: "text-accent-blue border-accent-blue/30 bg-accent-blue/10",
};

export default function Projects() {
  return (
    <div className="w-full bg-black dark">
      <section id="work" className="mx-auto max-w-content px-4 py-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A few products I designed, built and shipped end-to-end."
        />

        <div className="mt-12 space-y-4">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <SpotlightCard
                className="p-6 sm:p-8 transition-all duration-300 hover:border-accent/40"
                maxTilt={4}
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase ${colorMap[project.color]}`}>
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-muted">#{project.number}</span>
                    </div>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-surface-2/80 px-3 py-1 text-xs font-medium text-muted transition-colors duration-300 hover:border-accent/30 hover:text-ink"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/link flex shrink-0 items-center gap-4 self-start sm:self-center"
                    aria-label={`View ${project.title} case study`}
                  >
                    <span className="card-surface relative flex h-28 w-44 flex-col justify-center overflow-hidden rounded-xl px-4 transition-all duration-300 group-hover/link:-translate-y-1 group-hover/link:border-accent/40 group-hover/link:shadow-[0_16px_40px_-12px_rgba(79,70,229,0.35)]">
                      <span className="absolute left-3 top-3 flex gap-1.5" aria-hidden="true">
                        <span className="h-1.5 w-1.5 rounded-full bg-muted/40 transition-colors duration-300 group-hover/link:bg-accent" />
                        <span className="h-1.5 w-1.5 rounded-full bg-muted/40 transition-colors duration-300 group-hover/link:bg-accent-blue" />
                        <span className="h-1.5 w-1.5 rounded-full bg-muted/40 transition-colors duration-300 group-hover/link:bg-accent-cyan" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover/link:translate-x-full"
                      />
                      <span className="relative text-sm font-semibold tracking-tight text-ink transition-colors duration-300 group-hover/link:text-accent">
                        {project.title}
                      </span>
                    </span>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover/link:scale-110 group-hover/link:border-transparent group-hover/link:bg-gradient-to-br group-hover/link:from-accent group-hover/link:to-accent-blue group-hover/link:text-white group-hover/link:shadow-accent-sm">
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
