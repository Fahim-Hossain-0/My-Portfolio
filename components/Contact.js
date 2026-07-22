import { Github, Linkedin, Facebook, Mail, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

const socials = [
  { icon: Github, label: "GitHub", sub: "@Fahim-Hossain-0", href: siteConfig.links.github },
  { icon: Linkedin, label: "LinkedIn", sub: siteConfig.name, href: siteConfig.links.linkedin },
  { icon: Facebook, label: "Facebook", sub: siteConfig.name, href: siteConfig.links.facebook },
  { icon: Mail, label: "Email", sub: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MessageCircle, label: "WhatsApp", sub: siteConfig.phone, href: siteConfig.links.whatsapp },
];

export default function Contact() {
  return (
    <section id="contact" className="section-soft mx-auto max-w-content px-4 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Have a project in mind? I usually reply within a day."
      />

      <Reveal delay={0.1} className="mt-10">
        <div className="card-surface rounded-2xl p-6 sm:p-10">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-ink">Start a conversation</h3>
              <p className="mt-2 max-w-xs text-sm text-muted">
                Tell me about your project, and I&apos;ll get back to you with
                next steps.
              </p>

              <div className="mt-6 text-sm">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 border-b border-border py-3 text-muted transition-colors hover:text-ink"
                >
                  <Mail size={16} className="text-accent-blue" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 border-b border-border py-3 text-muted transition-colors hover:text-ink"
                >
                  <Phone size={16} className="text-accent-blue" />
                  {siteConfig.phone}
                </a>
                <p className="flex items-center gap-2.5 py-3 text-muted">
                  <MessageCircle size={16} className="text-accent-blue" />
                  Available for remote work, worldwide
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group rounded-xl border border-border bg-surface-2 p-4 transition-all duration-200 hover:border-accent hover:shadow-[0_4px_16px_rgba(109,93,246,0.08)] hover:-translate-y-1"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-accent-blue transition-colors group-hover:text-accent group-hover:border-accent/40">
                    <s.icon size={15} />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink">{s.label}</p>
                  <p className="truncate text-xs text-muted">{s.sub}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
