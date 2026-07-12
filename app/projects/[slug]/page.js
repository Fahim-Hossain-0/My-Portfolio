import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
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
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={15} />
            Back to work
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <p className="eyebrow">— {project.category}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted sm:text-lg">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
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
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-blue px-5 py-2.5 text-sm font-semibold text-white"
              >
                View live
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-surface-2"
              >
                <Github size={15} />
                View code
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex h-64 items-center justify-center rounded-2xl border border-border bg-surface-2 text-lg font-medium text-muted sm:h-96">
            {project.title} preview
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-[1fr_260px]">
          <div className="space-y-10">
            <Reveal>
              <h2 className="text-lg font-semibold text-ink">Overview</h2>
              <p className="mt-3 text-muted">{project.overview}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-lg font-semibold text-ink">The problem</h2>
              <p className="mt-3 text-muted">{project.problem}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-lg font-semibold text-ink">My role</h2>
              <p className="mt-3 text-muted">{project.role}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="text-lg font-semibold text-ink">Key features</h2>
              <ul className="mt-3 space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="h-fit space-y-6 rounded-2xl border border-border bg-surface p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Year</p>
              <p className="mt-1 text-sm text-ink">{project.year}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Stack</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-20 border-t border-border pt-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Next project
          </p>
          <Link
            href={`/projects/${next.slug}`}
            className="mt-3 flex items-center justify-between gap-4 rounded-2xl border border-border p-6 transition-colors hover:bg-surface-2"
          >
            <span className="text-xl font-semibold text-ink">{next.title}</span>
            <ArrowUpRight size={18} className="text-muted" />
          </Link>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
