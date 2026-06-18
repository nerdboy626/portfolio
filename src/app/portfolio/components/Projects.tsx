"use client";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";
import { fadeUpClass } from "@/app/lib/animation";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section className="section bg-background-alt">
      <div className="container">
        <div ref={ref} className="grid gap-16 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              className={fadeUpClass(
                isVisible,
                `delay-${project.id * 100}`,
                "translate-y-12",
              )}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
