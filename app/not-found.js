"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightCard from "@/components/SpotlightCard";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[80vh] max-w-content flex-col items-center justify-center px-4 py-20 text-center relative z-10">
        <SpotlightCard className="p-10 max-w-md transition-all duration-300 hover:border-accent/40 shadow-2xl" maxTilt={5}>
          <p className="eyebrow flex justify-center mb-4 font-mono tracking-widest text-accent">— 404</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            This page doesn&apos;t exist
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted mx-auto">
            The page you&apos;re looking for may have moved or been removed. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="btn-shine inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent via-accent-blue to-accent-cyan px-7 py-3 text-sm font-semibold text-white shadow-accent-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Back to home
            </Link>
          </div>
        </SpotlightCard>
      </main>
      <Footer />
    </>
  );
}
