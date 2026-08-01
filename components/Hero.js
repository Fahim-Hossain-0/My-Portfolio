"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, Download, Clock, Rocket, Code2, Heart } from "lucide-react";
import { stats } from "@/lib/data";
import Hero3DCanvas from "@/components/Hero3DCanvas";
import MagneticButton from "@/components/MagneticButton";
import SpotlightCard from "@/components/SpotlightCard";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
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
      {/* Three.js Interactive 3D WebGL Scene Background */}
      <Hero3DCanvas />

      {/* Layered Lighting & Grid Background */}
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[580px]" aria-hidden="true" />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[640px] opacity-60" aria-hidden="true" />

      {/* Hero Motion Container */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-content flex-col items-center px-4 text-center"
      >
        {/* Availability Badge */}
        <motion.div
          variants={item}
          className="mb-6 flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-4.5 py-1.5 text-sm font-medium text-muted backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" aria-hidden="true" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" aria-hidden="true" />
          </span>
          Available for new projects
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          variants={item}
          className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Full-stack developer building{" "}
          <span className="text-gradient">fast, precise</span> web products
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p variants={item} className="mt-6 max-w-xl text-balance text-muted sm:text-lg leading-relaxed">
          I design and build web applications end-to-end — from interface to
          database — with React, Next.js and Node.js. Clean systems,
          considered detail.
        </motion.p>

        {/* Hero Magnetic Action CTAs */}
        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href="#work"
            className="group btn-shine flex items-center gap-2 rounded-full bg-gradient-to-r from-accent via-accent-blue to-accent-violet px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-lift"
          >
            View my work
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>

          <MagneticButton
            href="/resume.pdf"
            className="group flex items-center gap-2 rounded-full border border-border bg-surface/90 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-surface-2 hover:shadow-soft"
          >
            <Download size={16} className="text-accent transition-transform duration-300 group-hover:translate-y-0.5" />
            Download resume
          </MagneticButton>
        </motion.div>

        {/* Hero Interactive Spotlight Stat Cards */}
        <motion.div
          variants={item}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-3.5 sm:grid-cols-4"
        >
          {[
            { raw: stats[0].value, icon: Clock, label: stats[0].label, bg: "bg-accent-blue/10", color: "text-accent-blue" },
            { raw: stats[1].value, icon: Rocket, label: stats[1].label, bg: "bg-accent-cyan/10", color: "text-accent-cyan" },
            { raw: stats[2].value, icon: Code2, label: stats[2].label, bg: "bg-accent/10", color: "text-accent" },
            { raw: stats[3].value, icon: Heart, label: stats[3].label, bg: "bg-accent-violet/10", color: "text-accent-violet" },
          ].map((s) => (
            <SpotlightCard
              key={s.label}
              className="p-4 text-left transition-all duration-300 hover:border-accent/30"
              maxTilt={8}
            >
              <div
                className={`mb-3 flex h-8.5 w-8.5 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${s.bg} ${s.color}`}
              >
                <s.icon size={16} />
              </div>
              <p className="text-xl font-bold tracking-tight text-ink">
                <CountUp raw={s.raw} />
              </p>
              <p className="mt-0.5 text-xs text-muted font-medium">{s.label}</p>
            </SpotlightCard>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
