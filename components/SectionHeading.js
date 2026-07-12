import Reveal from "@/components/Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className="eyebrow mb-3">— {eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">{title}</h2>
      {description && (
        <p className="mt-3 max-w-xl text-muted">{description}</p>
      )}
    </Reveal>
  );
}
