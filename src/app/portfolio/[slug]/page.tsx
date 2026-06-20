import { Project, projects } from "@/app/data/projects";
import ProjectHero from "./components/ProjectHero";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project: Project | undefined = projects.find((p) => p.slug === slug);
  if (!project) {
    return (
      <section className="section">
        <div className="container pt-12">
          <h1 className="mb-6">Project Not Found</h1>
        </div>
      </section>
    );
  }
  return <ProjectHero project={project} />;
}
