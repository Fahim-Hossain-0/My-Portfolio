import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  const title = `${project.title} — Case Study`;
  const description = project.summary;

  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.url}/projects/${project.slug}` },
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    creator: { "@type": "Person", name: siteConfig.name },
    dateCreated: project.year,
    keywords: project.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="mx-auto max-w-content px-4 pb-24 pt-36">
        <Reveal>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-ink"
          >
            <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to work
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <p className="eyebrow">— {project.category}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl leading-[1.12]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted sm:text-lg leading-relaxed">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-accent-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                View live
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                className="group flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-2 hover:shadow-soft"
              >
                <Github size={15} className="transition-transform duration-300 group-hover:scale-110" />
                View code
              </a>
            )}
          </div>
        </Reveal>

        {/* Cinematic WebGL Shimmer Mockup Panel */}
        <Reveal delay={0.1}>
          <div className="relative mt-12 flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2 sm:h-96 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-blue/15"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%]"
            />
            <p className="relative text-xl font-bold tracking-tight text-ink font-mono uppercase bg-surface/50 backdrop-blur-md border border-border px-5 py-2.5 rounded-xl shadow-xs">
              {project.title} Preview
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-[1fr_280px]">
          <div className="space-y-10">
            <Reveal>
              <h2 className="text-xl font-bold tracking-tight text-ink">Overview</h2>
              <p className="mt-3.5 text-muted leading-relaxed text-base">{project.overview}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-xl font-bold tracking-tight text-ink">The problem</h2>
              <p className="mt-3.5 text-muted leading-relaxed text-base">{project.problem}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-xl font-bold tracking-tight text-ink">My role</h2>
              <p className="mt-3.5 text-muted leading-relaxed text-base">{project.role}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="text-xl font-bold tracking-tight text-ink">Key features</h2>
              <ul className="mt-3.5 space-y-3.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-muted leading-relaxed text-base">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent animate-pulse" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="h-fit">
            <SpotlightCard className="p-6 transition-all duration-300 hover:border-accent/30 shadow-soft" maxTilt={3}>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted">Year</p>
                  <p className="mt-1.5 text-base font-bold text-ink">{project.year}</p>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted">Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-xs font-semibold text-ink"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* Next Project Spotlight Showcase Navigation */}
        <Reveal delay={0.1} className="mt-20 border-t border-border pt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-muted">
            Next project
          </p>
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-4 block"
          >
            <SpotlightCard className="p-6 transition-all duration-300 hover:border-accent/40" maxTilt={2}>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                  {next.title}
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:scale-110 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-blue group-hover:text-white group-hover:shadow-accent-sm">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </SpotlightCard>
          </Link>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
