import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const columns = [
  {
    title: "Site",
    links: [
      { label: "Work", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "GitHub", href: siteConfig.links.github },
      { label: "LinkedIn", href: siteConfig.links.linkedin },
      { label: "Facebook", href: siteConfig.links.facebook },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30 backdrop-blur-md">
      <div className="mx-auto max-w-content px-4 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="group flex items-center gap-2.5 font-bold tracking-tight text-ink text-lg">
              <span className="flex h-7.5 w-7.5 items-center justify-center rounded-xl bg-gradient-to-br from-accent via-accent-blue to-accent-violet text-[11px] font-bold text-white shadow-accent-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                FH
              </span>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="mt-3.5 text-sm leading-relaxed text-muted font-medium">
              Full-stack developer building fast, precise web products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-20">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">
                  {col.title}
                </p>
                <ul className="mt-4.5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="link-underline text-sm font-medium text-muted transition-colors duration-300 hover:text-ink inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Elegant bottom section with subtle lighting */}
        <div className="mt-14 border-t border-border pt-8 flex flex-col items-center justify-between gap-4 text-xs font-medium text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-muted/80">
            <span>Designed & Engineered with premium precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
