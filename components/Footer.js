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
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-4 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="group flex items-center gap-2.5 font-semibold text-ink">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-blue text-[10px] font-bold text-white shadow-accent-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                FH
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm text-muted">
              Full-stack developer building fast, precise web products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {col.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="link-underline text-sm text-muted transition-colors duration-300 hover:text-ink"
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

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted">
          <p className="text-center">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
