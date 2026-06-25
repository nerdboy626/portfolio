"use client";
import Link from "next/link";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { fadeUpClass } from "../lib/animation";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function SelectedWork() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <section id="selected-work" className="section">
      <div
        ref={ref}
        className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        {/* Left Content */}
        <div
          className={`max-w-2xl ${fadeUpClass(isVisible, "delay-100", "translate-y-12")}`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Selected Work
          </p>

          <h2 className="mb-5 text-3xl md:text-4xl">
            Projects that solve real problems.
          </h2>

          <p className="mb-6 text-lg leading-8">
            Take a look at <span className="font-bold italic">Poplog</span>, a
            media tracking platform that brings together content discovery,
            personal journaling, and data from multiple external services into a
            single destination.
          </p>

          <Link href="/portfolio" className="btn btn-secondary no-underline">
            Explore Portfolio
          </Link>
        </div>

        {/* Project Card */}
        <ProjectCard
          project={projects[0]}
          className={fadeUpClass(isVisible, "delay-300", "translate-y-12")}
        />
      </div>
    </section>
  );
}
