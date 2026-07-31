import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

const colorMap = {
  amber: "text-accent-amber",
  red: "text-rose-500",
  green: "text-accent-green",
  blue: "text-accent-blue",
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

        <div className="mt-12 divide-y divide-border border-t border-border">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} className="py-10 first:pt-0">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="group min-w-0">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${colorMap[project.color]}`}>
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex gap-4">
                    <span className={`text-sm font-semibold ${colorMap[project.color]}`}>
                      {project.number}
                    </span>
                    <p className="max-w-md text-sm text-muted">{project.summary}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 pl-9">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors duration-300 hover:border-accent/30 hover:text-ink"
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
                  <span className="card-surface relative flex h-24 w-40 flex-col justify-center overflow-hidden rounded-xl px-4 transition-all duration-300 group-hover/link:-translate-y-1 group-hover/link:border-accent/40 group-hover/link:shadow-[0_16px_40px_-12px_rgba(109,93,246,0.4)]">
                    <span className="absolute left-3 top-3 flex gap-1" aria-hidden="true">
                      <span className="h-1 w-1 rounded-full bg-muted/40 transition-colors duration-300 group-hover/link:bg-accent" />
                      <span className="h-1 w-1 rounded-full bg-muted/40 transition-colors duration-300 group-hover/link:bg-accent-blue" />
                      <span className="h-1 w-1 rounded-full bg-muted/40 transition-colors duration-300 group-hover/link:bg-accent-green" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover/link:translate-x-full"
                    />
                    <span className={`relative text-sm font-semibold ${colorMap[project.color]}`}>
                      {project.title}
                    </span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover/link:scale-110 group-hover/link:border-transparent group-hover/link:bg-gradient-to-br group-hover/link:from-accent group-hover/link:to-accent-blue group-hover/link:text-white group-hover/link:shadow-accent-sm">
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
