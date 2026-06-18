import { LiaLaptopCodeSolid } from "react-icons/lia";

export default function PortfolioHero() {
  return (
    <section className="section">
      <div className="container pt-12 flex items-center justify-between flex-wrap">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Portfolio
          </p>

          <h1 className="mb-5 font-display font-light leading-none tracking-tight">
            Meaningful solutions for everyday problems
            <span className="text-primary">.</span>
          </h1>

          <p className="text-lg leading-8 text-foreground-muted">
            A collection of projects that showcase my experience building modern
            web applications across the frontend, backend, and everything in
            between.
          </p>
        </div>
        <LiaLaptopCodeSolid className="h-64 w-64 self-center text-primary/70" />
      </div>
    </section>
  );
}
