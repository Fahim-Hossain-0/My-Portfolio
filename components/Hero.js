"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Clock, Rocket, Code2, Heart } from "lucide-react";
import { stats } from "@/lib/data";
import { siteConfig } from "@/lib/siteConfig";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[560px]" aria-hidden="true" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-content flex-col items-center px-4 text-center"
      >
        <motion.div
          variants={item}
          className="mb-6 flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green" aria-hidden="true" />
          Available for new projects
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Full-stack developer building{" "}
          <span className="text-gradient">fast, precise</span> web products
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-balance text-muted sm:text-lg">
          I design and build web applications end-to-end — from interface to
          database — with React, Next.js and Node.js. Clean systems,
          considered detail.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
          >
            View my work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 rounded-full border border-accent/20 bg-white px-6 py-3 text-sm font-semibold text-accent transition-all duration-200 hover:border-accent/40 hover:shadow-[0_2px_12px_rgba(109,93,246,0.1)]"
          >
            <Download size={16} />
            Download resume
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          

          {[
            { icon: Clock, value: stats[0].value, label: stats[0].label, bg: "bg-accent-blue/10", color: "text-accent-blue" },
            { icon: Rocket, value: stats[1].value, label: stats[1].label, bg: "bg-accent-green/10", color: "text-accent-green" },
            { icon: Code2, value: stats[2].value, label: stats[2].label, bg: "bg-accent/10", color: "text-accent" },
            { icon: Heart, value: stats[3].value, label: stats[3].label, bg: "bg-accent-amber/10", color: "text-accent-amber" },
          ].map((s) => (
            <div key={s.label} className="card-surface group rounded-2xl p-4 text-left transition-all duration-200 hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(109,93,246,0.08)]">
              <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg ${s.bg} ${s.color}`}>
                <s.icon size={15} />
              </div>
              <p className="text-xl font-bold text-ink">{s.value}</p>
              <p className="mt-0.5 text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
