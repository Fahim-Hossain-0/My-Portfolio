import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-cool mx-auto max-w-content px-4 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="mt-10 divide-y divide-border border-t border-border">
        {experience.map((job, i) => (
          <Reveal key={job.title} delay={i * 0.08}>
            <div className="grid gap-2 py-8 sm:grid-cols-[160px_1fr] sm:gap-8">
              <p className="text-sm text-muted">{job.period}</p>
              <div className="max-w-xl">
                <h3 className="font-semibold text-ink">{job.title}</h3>
                <p className="mt-1 text-sm font-semibold text-accent-blue">{job.subtitle}</p>
                <p className="mt-3 text-sm text-muted">{job.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
