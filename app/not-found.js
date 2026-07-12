import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[70vh] max-w-content flex-col items-center justify-center px-4 text-center">
        <p className="eyebrow">— 404</p>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-3 max-w-sm text-muted">
          The page you&apos;re looking for may have moved or been removed.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-gradient-to-r from-accent to-accent-blue px-6 py-3 text-sm font-semibold text-white"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
