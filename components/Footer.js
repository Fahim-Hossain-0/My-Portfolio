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
            <Link href="/" className="flex items-center gap-2 font-semibold text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
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
                        className="text-sm text-muted transition-colors hover:text-ink"
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

        <div className="mt-12 gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p className="text-center">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
