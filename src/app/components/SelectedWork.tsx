"use client";
import Image from "next/image";
import Link from "next/link";
import PoplogHome from "@/app/images/poplog-home.png";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function SelectedWork() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="section">
      {/* <div className="container animate-fade-up [animation-delay:0.3s] grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
       
        <div className="max-w-2xl"> */}
      <div
        ref={ref}
        className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        {/* Left Content */}
        <div
          className={`max-w-2xl transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-foreground-subtle">
            Selected Work
          </p>

          <h2 className="mb-5 text-3xl md:text-4xl">
            Building thoughtful digital experiences.
          </h2>

          <p className="mb-6 text-lg leading-8">
            Take a look at <span className="font-bold italic">Poplog</span>, my
            latest project, which bridges media consumption and journaling with
            clean design, responsive performance, and an enjoyable writing
            experience.
          </p>

          <Link href="/portfolio" className="btn btn-secondary no-underline">
            Explore Portfolio
          </Link>
        </div>

        {/* Project Card */}
        <div
          className={`group duration-300 overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all no-underline hover:opacity-100 hover:shadow-lg hover:border-border-strong hover:-translate-y-1
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* <div className="animate-fade-up [animation-delay:0.5s] group duration-300 overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all no-underline hover:opacity-100 hover:shadow-lg hover:border-border-strong hover:-translate-y-1"> */}
          <Link href="/portfolio/poplog">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
              <Image
                src={PoplogHome}
                alt="Poplog project preview"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          <div className="p-6 md:p-8">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="mb-2 text-2xl text-foreground">
                  Poplog - Fullstack Media Journal
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {["React.js", "Express.js", "PostgreSQL", "CSS"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio/poplog"
                className="btn btn-primary no-underline flex-1"
              >
                Learn More
              </Link>
              <Link
                href="https://poplog-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary no-underline flex-1"
              >
                Visit Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
