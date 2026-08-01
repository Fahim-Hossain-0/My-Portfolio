"use client";

import { Github, Linkedin, Facebook, Mail, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
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

      <Reveal delay={0.1} className="mt-12">
        {/* Parent Spotlight Container (No Tilt, Pure Glow) */}
        <SpotlightCard className="p-6 sm:p-10 hover:border-border" tilt={false}>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-ink">Start a conversation</h3>
              <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted">
                Tell me about your project, and I&apos;ll get back to you with
                next steps.
              </p>

              <div className="mt-6 text-sm space-y-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-3 border-b border-border py-3 text-muted transition-colors duration-300 hover:text-ink"
                >
                  <Mail size={16} className="text-accent-blue transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">{siteConfig.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 border-b border-border py-3 text-muted transition-colors duration-300 hover:text-ink"
                >
                  <Phone size={16} className="text-accent-blue transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">{siteConfig.phone}</span>
                </a>
                <p className="flex items-center gap-3 py-3 text-muted">
                  <MessageCircle size={16} className="text-accent-blue" />
                  <span className="font-medium">Available for remote work, worldwide</span>
                </p>
              </div>
            </div>

            {/* Nested Individual Spotlight Social Cards with 3D Tilt */}
            <div className="grid grid-cols-2 gap-3.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group/social"
                >
                  <SpotlightCard
                    className="p-4 h-full border border-border bg-surface-2/40 transition-all duration-300 hover:border-accent hover:shadow-[0_16px_32px_-16px_rgba(79,70,229,0.35)]"
                    maxTilt={8}
                  >
                    <span className="flex h-8.5 w-8.5 items-center justify-center rounded-xl border border-border bg-surface text-accent-blue transition-all duration-300 group-hover/social:-rotate-6 group-hover/social:scale-110 group-hover/social:border-accent/40 group-hover/social:text-accent">
                      <s.icon size={16} />
                    </span>
                    <p className="mt-4 text-sm font-bold tracking-tight text-ink transition-colors duration-300 group-hover/social:text-accent">
                      {s.label}
                    </p>
                    <p className="truncate text-xs text-muted font-medium mt-0.5">{s.sub}</p>
                  </SpotlightCard>
                </a>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}
