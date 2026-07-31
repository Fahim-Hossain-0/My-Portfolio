import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-cool mx-auto max-w-content px-4 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="relative mt-10">
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent"
        />

        {experience.map((job, i) => (
          <Reveal key={job.title} delay={i * 0.08}>
            <div className="group relative pb-10 pl-7 last:pb-0 sm:pl-8">
              <span
                className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-125 ${
                  job.current ? "milestone-dot-current" : "milestone-dot-past"
                }`}
                aria-hidden="true"
              />

              <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-8">
                <p className="text-sm text-muted">{job.period}</p>
                <div className="max-w-xl">
                  <h3 className="font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent-blue">{job.subtitle}</p>
                  <p className="mt-3 text-sm text-muted">{job.description}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
