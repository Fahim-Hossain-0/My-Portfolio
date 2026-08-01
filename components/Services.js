"use client";

import { Server, LayoutGrid, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { services } from "@/lib/data";

const icons = { server: Server, layout: LayoutGrid, shield: ShieldCheck };
const iconColors = { server: "text-accent-blue bg-accent-blue/10 border-accent-blue/20", layout: "text-accent-violet bg-accent-violet/10 border-accent-violet/20", shield: "text-accent bg-accent/10 border-accent/20" };

export default function Services() {
  return (
    <div className="w-full bg-black dark">
      <section id="services" className="mx-auto max-w-content px-4 py-24">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          description="From a single feature to a full platform build."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.08} className="h-full">
                <SpotlightCard
                  className={`h-full p-6 transition-all duration-300 ${
                    service.highlighted
                      ? "border-accent-violet/60 shadow-[0_0_60px_-15px_rgba(124,58,237,0.35)]"
                      : "hover:border-accent/30"
                  }`}
                  maxTilt={6}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${iconColors[service.icon]}`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.description}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
