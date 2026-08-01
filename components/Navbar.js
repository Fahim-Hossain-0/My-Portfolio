"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import MagneticButton from "@/components/MagneticButton";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#stack", label: "Stack", id: "stack" },
  { href: "/#services", label: "Services", id: "services" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      {/* Scroll Progress Glow Bar */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-accent via-accent-blue to-accent-cyan shadow-[0_0_12px_rgba(79,70,229,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Glass Navbar */}
      <motion.nav
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className={`flex w-full max-w-content items-center justify-between rounded-full border px-3 py-2 pl-3 transition-all duration-300 ${
          scrolled
            ? "card-surface shadow-[0_16px_40px_-16px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            : "border-transparent bg-surface/30 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5 text-xl font-semibold tracking-tight text-ink">
          <span className="relative flex h-7.5 w-7.5 items-center justify-center rounded-xl bg-gradient-to-br from-accent via-accent-blue to-accent-violet text-[11px] font-bold text-white shadow-accent-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            FH
          </span>
          <span className="tracking-tight">{siteConfig.name}</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 text-sm text-muted md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-1.5 transition-colors duration-300 ${
                    isActive ? "text-ink font-medium" : "hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-surface-2 ring-1 ring-border shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <MagneticButton
            href="#contact"
            className="btn-shine flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent-blue px-4.5 py-2 text-sm font-semibold text-white shadow-accent-sm transition-all duration-300 hover:shadow-lift"
          >
            Let&apos;s talk
          </MagneticButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-9.5 w-9.5 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:bg-surface-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile Slide Overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[-1] bg-black/30 backdrop-blur-md md:hidden"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
              className="card-surface absolute left-4 right-4 top-[76px] rounded-2xl border p-4 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <ul className="flex flex-col gap-1 text-sm">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25, ease: "easeOut" }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-3.5 py-2.5 font-medium transition-colors duration-200 hover:bg-surface-2 hover:text-ink ${
                        active === link.id ? "bg-surface-2 text-ink" : "text-muted"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                <ThemeToggle />
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-shine rounded-full bg-gradient-to-r from-accent to-accent-blue px-4 py-2 text-sm font-semibold text-white shadow-accent-sm"
                >
                  Let&apos;s talk
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
