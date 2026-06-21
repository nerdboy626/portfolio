"use client";
import { Project } from "@/app/data/projects";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { fadeUpClass } from "@/app/lib/animation";

type ProjectHeroProps = {
  project: Project;
};

export default function Overview({ project }: ProjectHeroProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <section ref={ref} className="section bg-background">
      <div className="container">
        <div
          className={`max-w-2xl ${fadeUpClass(isVisible, "delay-100", "translate-y-12")}`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Key Features
          </p>

          <h2 className="mb-5 text-3xl md:text-4xl">
            {project.features.heading}
          </h2>

          <p className="mb-6 text-lg leading-8">{project.features.content}</p>
        </div>
      </div>
    </section>
  );
}
