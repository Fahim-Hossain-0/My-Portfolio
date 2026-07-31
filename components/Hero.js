"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, Download, Clock, Rocket, Code2, Heart } from "lucide-react";
import { stats } from "@/lib/data";

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

function CountUp({ raw }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = raw.match(/^([^\d.]*)([\d.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : raw;
  const [display, setDisplay] = useState(raw);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) =>
        setDisplay(`${prefix}${v.toFixed(Number.isInteger(target) ? 0 : 1)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, target, prefix, suffix]);

  return <span ref={ref}>{display}</span>;
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[560px]" aria-hidden="true" />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-70" aria-hidden="true" />

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[6%] top-32 h-40 w-40 rounded-full bg-accent/15 blur-3xl dark:bg-accent/20"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="pointer-events-none absolute right-[8%] top-48 h-44 w-44 rounded-full bg-accent-blue/15 blur-3xl dark:bg-accent-blue/20"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="pointer-events-none absolute bottom-16 right-[22%] hidden h-32 w-32 rounded-full bg-accent-green/10 blur-3xl dark:bg-accent-green/15 lg:block"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-content flex-col items-center px-4 text-center"
      >
        <motion.div
          variants={item}
          className="mb-6 flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-sm text-muted backdrop-blur-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" aria-hidden="true" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" aria-hidden="true" />
          </span>
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
            className="group btn-shine flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            View my work
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="/resume.pdf"
            className="group flex items-center gap-2 rounded-full border border-accent/20 bg-surface px-6 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/5 hover:shadow-accent-sm"
          >
            <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            Download resume
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { raw: stats[0].value, icon: Clock, label: stats[0].label, bg: "bg-accent-blue/10", color: "text-accent-blue" },
            { raw: stats[1].value, icon: Rocket, label: stats[1].label, bg: "bg-accent-green/10", color: "text-accent-green" },
            { raw: stats[2].value, icon: Code2, label: stats[2].label, bg: "bg-accent/10", color: "text-accent" },
            { raw: stats[3].value, icon: Heart, label: stats[3].label, bg: "bg-accent-amber/10", color: "text-accent-amber" },
          ].map((s) => (
            <div
              key={s.label}
              className="card-surface group rounded-2xl p-4 text-left transition-all duration-300 hover:border-accent/30 hover:shadow-[0_12px_32px_-12px_rgba(109,93,246,0.25)]"
            >
              <div
                className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${s.bg} ${s.color}`}
              >
                <s.icon size={15} />
              </div>
              <p className="text-xl font-bold text-ink">
                <CountUp raw={s.raw} />
              </p>
              <p className="mt-0.5 text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
