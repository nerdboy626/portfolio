import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mt-16 relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-6">
      <div className="hero-orb absolute h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <section className="w-full max-w-xl">
        <div className="rounded-[28px] border border-border bg-card p-10 text-center shadow-md">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            404
          </p>

          <h1 className="mb-5 text-3xl md:text-4xl">This page wandered off.</h1>

          <p className="mb-6 text-lg leading-8">
            The page you&apos;re looking for doesn&apos;t exist, may have been
            moved, or the URL may be incorrect.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary flex-1 no-underline">
              Back Home
            </Link>

            <Link
              href="/portfolio"
              className="btn btn-secondary flex-1 no-underline"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
