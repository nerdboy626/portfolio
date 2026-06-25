"use client";
import Link from "next/link";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { fadeUpClass } from "../lib/animation";

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Orbs */}
      <div className="hero-orb left-[-100px] top-[-140px] h-[520px] w-[520px] bg-primary blur-[90px] opacity-40" />

      <div className="hero-orb bottom-[-100px] right-[-80px] h-[380px] w-[380px] bg-secondary blur-[80px] opacity-40 [animation-duration:22s] [animation-delay:-6s]" />

      <div className="hero-orb left-[55%] top-[40%] h-[300px] w-[300px] bg-accent blur-[70px] opacity-30 [animation-duration:26s] [animation-delay:-12s]" />

      <div className="hero-orb left-[18%] bottom-[20%] h-[200px] w-[200px] bg-primary blur-[60px] opacity-30 [animation-duration:20s] [animation-delay:-4s]" />

      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg_viewBox=%270_0_256_256%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27noise%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.9%27_numOctaves=%274%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23noise)%27/%3E%3C/svg%3E')] bg-[length:200px_200px]" />

      {/* Content */}
      <div
        ref={ref}
        className="container relative z-10 flex flex-col items-center text-center"
      >
        <p
          className={`mb-4 text-sm font-medium uppercase tracking-[0.15em] text-foreground-subtle ${fadeUpClass(isVisible, "delay-50", "translate-y-16")}`}
        >
          Hey there! My name is
        </p>

        <h1
          className={`mb-5 text-[clamp(3.5rem,10vw,6rem)] font-display font-light leading-none tracking-tight text-foreground ${fadeUpClass(isVisible, "delay-120", "translate-y-16")}`}
        >
          Nicolas Caminero<span className="text-primary">.</span>
        </h1>

        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ${fadeUpClass(isVisible, "delay-200", "translate-y-16")}`}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
          Fullstack Developer
        </div>

        <p
          className={`mb-10 max-w-xl text-lg leading-8 text-foreground-muted ${fadeUpClass(isVisible, "delay-280", "translate-y-16")}`}
        >
          I build fullstack web applications that combine thoughtful user
          experiences, reliable architecture, and modern development practices.
        </p>

        <div
          className={`flex flex-wrap justify-center gap-3 ${fadeUpClass(isVisible, "delay-360", "translate-y-16")}`}
        >
          <Link href="/contact" className="btn btn-primary no-underline">
            Get In Touch
          </Link>

          <Link href="/portfolio" className="btn btn-secondary no-underline">
            See My Work
          </Link>
        </div>
      </div>
      <a
        href="#selected-work"
        aria-label="Scroll to selected work section"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("selected-work")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className={`absolute bottom-12 md:bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground-subtle no-underline ${fadeUpClass(isVisible, "delay-500", "translate-y-8")}`}
      >
        <span className="text-xs font-medium uppercase tracking-[0.35em]">
          Scroll
        </span>

        <div className="flex flex-col items-center">
          <span className="scroll-arrow" />
          <span className="scroll-arrow -mt-1 [animation-delay:0.2s]" />
        </div>
      </a>
    </section>
  );
}
