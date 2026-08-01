"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { testimonials } from "@/lib/data";

const avatarColors = ["text-accent", "text-accent-violet", "text-accent-cyan"];
const avatarBgs = ["bg-accent/10", "bg-accent-violet/10", "bg-accent-cyan/10"];

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
          <Reveal key={t.name} delay={i * 0.08} className="h-full">
            <SpotlightCard className="h-full p-6 transition-all duration-300 hover:border-accent/30" maxTilt={5}>
              <figure className="flex h-full flex-col">
                <span
                  className="bg-gradient-to-br from-accent via-accent-blue to-accent-cyan bg-clip-text text-4xl font-serif text-transparent transition-transform duration-300 group-hover:-translate-y-1 inline-block h-6"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink italic font-medium">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-xs font-bold transition-transform duration-300 group-hover:scale-110 ${avatarBgs[i % avatarBgs.length]} ${avatarColors[i % avatarColors.length]}`}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n.charAt(0))
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-muted font-medium">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
