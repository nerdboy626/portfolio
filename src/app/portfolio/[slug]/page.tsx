import { Project, projects } from "@/app/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project: Project | undefined = projects.find((p) => p.slug === slug);
  return (
    <section className="section">
      <div className="container pt-12">
        {project ? <h1>{project.title}</h1> : <h1>Project not found</h1>}
      </div>
    </section>
  );
}
