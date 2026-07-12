import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";

const avatarColors = ["text-accent", "text-accent-amber", "text-accent-green"];

export default function Testimonials() {
  return (
    <section className="section-muted mx-auto max-w-content px-4 py-24">
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say"
        description="A few words from people I've built things for."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="card-surface flex h-full flex-col rounded-2xl p-6">
              <span className="text-3xl font-serif text-accent" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 font-serif text-xs font-bold ${avatarColors[i % avatarColors.length]}`}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n.charAt(0))
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
