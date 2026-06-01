export default function Principles() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Why Work With Me
          </p>

          <h2 className="mb-5 text-3xl md:text-4xl">Core Principles.</h2>

          <p className="mb-6 text-lg leading-8">
            A few ideas that guide how I approach software development.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className=" inline-block h-12 w-12 rounded-xl bg-primary/50" />
                <h3 className="inline-block">Build For People</h3>
              </div>
              <p>Description...</p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className=" inline-block h-12 w-12 rounded-xl bg-secondary/50" />
                <h3 className="inline-block">Build For People</h3>
              </div>
              <p>Description...</p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className=" inline-block h-12 w-12 rounded-xl bg-accent/50" />
                <h3 className="inline-block">Build For People</h3>
              </div>
              <p>Description...</p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className=" inline-block h-12 w-12 rounded-xl bg-foreground-subtle/30" />
                <h3 className="inline-block">Build For People</h3>
              </div>
              <p>Description...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
