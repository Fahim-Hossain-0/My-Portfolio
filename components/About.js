import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { quickFacts, coreSkills, milestones } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-warm mx-auto max-w-content px-4 py-24">
      <SectionHeading
        eyebrow="About"
        title="A developer who ships"
        description="Full-stack by trade, detail-obsessed by habit."
      />

      <Reveal delay={0.1} className="mt-8 max-w-2xl text-muted">
        <p>
          I&apos;m <strong className="font-semibold text-ink">Fahim Hossain</strong>,
          a full-stack developer working mainly in the{" "}
          <strong className="font-semibold text-ink">MERN</strong> stack. I care
          about the parts most people skip — loading states, error handling,
          the API that doesn&apos;t fall over under real traffic — as much as
          the interface people actually see.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-4">
        {quickFacts.map((fact) => (
          <div key={fact.label}>
            <p className="text-lg font-semibold text-ink">{fact.value}</p>
            <p className="mt-1 text-xs text-muted">{fact.label}</p>
          </div>
        ))}
      </Reveal>

      <Reveal delay={0.2} className="mt-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
          Core skills
        </p>
        <div className="flex flex-wrap gap-2">
          {coreSkills.map((skill, i) => {
            const colors = [
              "border-accent-blue/30 bg-accent-blue/5 text-accent-blue",
              "border-accent/30 bg-accent/5 text-accent",
              "border-accent-green/30 bg-accent-green/5 text-accent-green",
              "border-accent-amber/30 bg-accent-amber/5 text-accent-amber",
            ];
            return (
              <span
                key={skill}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors hover:brightness-90 dark:border-border dark:bg-transparent dark:text-ink ${colors[i % colors.length]}`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-3">
        {milestones.map((m, i) => (
          <Reveal key={m.year} delay={0.1 * i} className="relative pl-6">
            <span
              className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full ${
                m.current ? "milestone-dot-current" : "milestone-dot-past"
              }`}
              aria-hidden="true"
            />
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {m.year}
            </p>
            <p className="mt-2 font-semibold text-ink">{m.title}</p>
            <p className="mt-1.5 text-sm text-muted">{m.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
