import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { techLayers } from "@/lib/data";

const colorMap = {
  blue: { dot: "bg-accent-blue", text: "text-accent-blue" },
  purple: { dot: "bg-accent", text: "text-accent" },
  green: { dot: "bg-accent-green", text: "text-accent-green" },
  amber: { dot: "bg-accent-amber", text: "text-accent-amber" },
};

function LayerIndicator({ depth, color }) {
  return (
    <div className="flex shrink-0 flex-col gap-1.5">
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className={`h-3.5 w-3.5 rounded-[4px] ${
            i < depth ? colorMap[color].dot : "bg-surface-2"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-content px-4 py-24">
      <SectionHeading
        eyebrow="Tech stack"
        title="How the stack is layered"
        description="Four layers, front to back — the same shape as the products I build."
      />

      <div className="mt-12 divide-y divide-border border-t border-border">
        {techLayers.map((layer, i) => (
          <Reveal key={layer.name} delay={i * 0.06} className="py-8 first:pt-0">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
              <LayerIndicator depth={i + 1} color={layer.color} />

              <div className="w-full sm:w-56 sm:shrink-0">
                <p className={`text-xs font-semibold uppercase tracking-wider ${colorMap[layer.color].text}`}>
                  Layer {layer.index}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold text-ink">{layer.name}</h3>
                <p className="mt-1 text-sm text-muted">{layer.description}</p>
              </div>

              <div className="flex flex-1 flex-wrap gap-2.5">
                {layer.items.map((tool) => (
                  <span
                    key={tool.name}
                    className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink transition-all duration-200 hover:border-accent/30 hover:shadow-[0_2px_12px_rgba(109,93,246,0.06)] hover:-translate-y-0.5"
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-[5px] bg-surface-2 text-[10px] font-semibold ${colorMap[layer.color].text}`}
                    >
                      {tool.tag}
                    </span>
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
