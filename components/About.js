import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { quickFacts, coreSkills, milestones } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-warm mx-auto max-w-content px-4 py-24">
      <SectionHeading
        eyebrow="About"
        title="A developer who ships"
        description="Full-stack by trade, detail-obsessed by habit."
      />

      <Reveal delay={0.1} className="mt-8 max-w-2xl text-muted text-base leading-relaxed sm:text-lg">
        <p>
          I&apos;m <strong className="font-semibold text-ink">Fahim Hossain</strong>,
          a full-stack developer working mainly in the{" "}
          <strong className="font-semibold text-ink">MERN</strong> stack. I care
          about the parts most people skip — loading states, error handling,
          the API that doesn&apos;t fall over under real traffic — as much as
          the interface people actually see.
        </p>
      </Reveal>

      {/* Quick Facts Spotlight Grid */}
      <Reveal delay={0.15} className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
        {quickFacts.map((fact) => (
          <SpotlightCard
            key={fact.label}
            className="p-5 text-left transition-all duration-300 hover:border-accent/30"
            maxTilt={6}
          >
            <p className="text-xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
              {fact.value}
            </p>
            <p className="mt-1 text-xs font-medium text-muted">{fact.label}</p>
          </SpotlightCard>
        ))}
      </Reveal>

      {/* Core Skills Tags */}
      <Reveal delay={0.2} className="mt-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
          Core skills
        </p>
        <div className="flex flex-wrap gap-2.5">
          {coreSkills.map((skill, i) => {
            const colors = [
              "border-accent-blue/30 bg-accent-blue/5 text-accent-blue hover:border-accent-blue/60",
              "border-accent/30 bg-accent/5 text-accent hover:border-accent/60",
              "border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan hover:border-accent-cyan/60",
              "border-accent-violet/30 bg-accent-violet/5 text-accent-violet hover:border-accent-violet/60",
            ];
            return (
              <span
                key={skill}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-accent-sm dark:border-border dark:bg-surface/50 dark:text-ink ${colors[i % colors.length]}`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </Reveal>

      {/* Timeline Milestones */}
      <div className="relative mt-16 grid gap-8 sm:grid-cols-3">
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[11px] hidden h-px bg-gradient-to-r from-accent/40 via-accent-blue/30 to-transparent sm:block"
        />
        {milestones.map((m, i) => (
          <Reveal key={m.year} delay={0.1 * i} className="group relative pl-6">
            <span
              className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full transition-all duration-300 group-hover:scale-150 ${
                m.current ? "milestone-dot-current" : "milestone-dot-past"
              }`}
              aria-hidden="true"
            />
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {m.year}
            </p>
            <p className="mt-2 font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
              {m.title}
            </p>
            <p className="mt-1.5 text-sm text-muted leading-relaxed">{m.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
