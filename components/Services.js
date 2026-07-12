import { Server, LayoutGrid, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

const icons = { server: Server, layout: LayoutGrid, shield: ShieldCheck };
const iconColors = { server: "text-accent-blue", layout: "text-accent-amber", shield: "text-accent" };

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
              <Reveal key={service.title} delay={i * 0.08}>
                <div
                  className={`h-full rounded-2xl border p-6 ${
                    service.highlighted
                      ? "border-accent-amber bg-surface shadow-[0_0_60px_-15px_rgba(245,165,36,0.35)]"
                      : "card-surface"
                  }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 ${iconColors[service.icon]}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
