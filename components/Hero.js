"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
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
          <div className="card-surface col-span-2 rounded-2xl p-5 text-left transition-all duration-200 hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(109,93,246,0.08)] sm:col-span-1">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 font-serif text-sm font-semibold text-accent">
              FH
            </div>
            <p className="font-semibold text-ink">{siteConfig.name}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
              Available for work
            </p>
          </div>

          {stats.map((stat) => (
            <div key={stat.label} className="card-surface rounded-2xl p-5 text-left transition-all duration-200 hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(109,93,246,0.08)]">
              <p className="text-2xl font-bold text-ink">{stat.value}</p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
