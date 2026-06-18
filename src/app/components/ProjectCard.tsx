import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/app/data/projects";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  return (
    <div
      className={`group overflow-hidden rounded-[28px] border border-border bg-card shadow-sm hover:-translate-y-1 hover:border-border-strong hover:shadow-lg 
            ${className}`}
    >
      <Link href={`/portfolio/${project.slug}`}>
        <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </Link>

      <div className="p-6 md:p-8">
        <h3 className="mb-6 text-2xl text-foreground">{project.title}</h3>

        <div className="mb-6 flex flex-wrap gap-3">
          {project.techStack.map((tag) => (
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
            href={`/portfolio/${project.slug}`}
            className="btn btn-primary no-underline flex-1"
          >
            Learn More
          </Link>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary no-underline flex-1"
          >
            {project.link.includes("vercel")
              ? "Live Demo"
              : project.link.includes("github")
                ? "View on GitHub"
                : "Visit Site"}
          </Link>
        </div>
      </div>
    </div>
  );
}
