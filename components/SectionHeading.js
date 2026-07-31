import Reveal from "@/components/Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className="eyebrow mb-3">
        <span
          className="mr-2 inline-block h-px w-6 rounded-full bg-gradient-to-r from-accent to-accent-blue"
          aria-hidden="true"
        />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-xl text-muted">{description}</p>
      )}
    </Reveal>
  );
}
