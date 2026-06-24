"use client";

import { Project } from "@/app/data/projects";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { fadeUpClass } from "@/app/lib/animation";

type FeaturesProps = {
  project: Project;
};

const brandColors: string[] = [
  "bg-primary/50",
  "bg-secondary/50",
  "bg-accent/50",
  "bg-foreground-subtle/30",
];

export default function Features({ project }: FeaturesProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section bg-background">
      <div className="container">
        <div
          className={`max-w-2xl mb-12 ${fadeUpClass(
            isVisible,
            "delay-100",
            "translate-y-12",
          )}`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Key Features
          </p>

          <h2 className="mb-5 text-3xl md:text-4xl">
            {project.features.heading}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {project.features.content.map((feature, index) => (
            <div
              key={feature}
              className={`rounded-3xl border border-border bg-card p-4 md:p-8 shadow-sm ${fadeUpClass(
                isVisible,
                `delay-${150 + index * 100}`,
                "translate-y-12",
              )}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`inline-block h-8 w-8 flex-none rounded-lg self-center ${
                    brandColors[index % brandColors.length]
                  }`}
                />

                <p className="inline-block leading-8">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
