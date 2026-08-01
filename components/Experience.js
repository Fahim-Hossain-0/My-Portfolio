"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-cool mx-auto max-w-content px-4 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="relative mt-12 pl-6 sm:pl-8">
        {/* Animated Timeline Vertical Bar */}
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[5px] top-4 w-px bg-gradient-to-b from-accent via-accent-blue/30 to-transparent"
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.08}>
              <div className="group relative">
                {/* Timeline Dot Indicator */}
                <span
                  className={`absolute -left-[29px] sm:-left-[37px] top-6 h-3 w-3 rounded-full transition-transform duration-300 group-hover:scale-150 ${
                    job.current ? "milestone-dot-current" : "milestone-dot-past"
                  }`}
                  aria-hidden="true"
                />

                <SpotlightCard className="p-6 transition-all duration-300 hover:border-accent/30" maxTilt={3}>
                  <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-8 items-start">
                    <p className="text-sm font-semibold text-muted font-mono tracking-wider">{job.period}</p>
                    <div className="max-w-xl">
                      <h3 className="text-lg font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-accent-blue">{job.subtitle}</p>
                      <p className="mt-3.5 text-sm leading-relaxed text-muted">{job.description}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
