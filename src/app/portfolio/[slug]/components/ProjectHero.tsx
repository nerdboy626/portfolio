"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/data/projects";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { fadeUpClass } from "@/app/lib/animation";

type ProjectHeroProps = {
  project: Project;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section">
      <div className="container pt-12">
        <div ref={ref} className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div
            className={fadeUpClass(isVisible, "delay-100", "translate-y-12")}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-primary">
              Project
            </p>

            <h1 className="mb-6">
              {project.title}
              <span className="text-primary">.</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-foreground-muted">
              {project.tagline}
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-foreground-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {project.liveDemoLink && (
                <Link
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary no-underline"
                >
                  Live Demo
                </Link>
              )}

              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${project.liveDemoLink ? "btn-secondary" : "btn-primary"} no-underline`}
                >
                  View on GitHub
                </Link>
              )}

              {!project.liveDemoLink && !project.githubLink && (
                <Link
                  href={project.cardLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary no-underline"
                >
                  Visit Site
                </Link>
              )}
            </div>
          </div>

          <div
            className={fadeUpClass(isVisible, "delay-300", "translate-y-12")}
          >
            <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-lg">
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
