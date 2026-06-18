import { LiaLaptopCodeSolid } from "react-icons/lia";

export default function PortfolioHero() {
  return (
    <section className="section">
      <div className="container pt-12 grid gap-12 lg:grid-cols-[1fr_auto] items-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Portfolio
          </p>

          <h1 className="mb-5 font-display font-light leading-none tracking-tight">
            Meaningful solutions for everyday problems
            <span className="text-primary">.</span>
          </h1>

          <p className="text-lg leading-8 text-foreground-muted">
            A collection of software, design, and research projects spanning
            fullstack web development, mobile applications, and human-centered
            design.
          </p>
        </div>
        <div className="flex justify-center">
          <LiaLaptopCodeSolid className="h-64 w-64 text-primary/70" />
        </div>
      </div>
    </section>
  );
}
