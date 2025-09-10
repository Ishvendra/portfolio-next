import projects from '@/data/projects';
import NotFound from '@/app/not-found';
import ProjectShowcaseClient from '@/components/ProjectShowcaseClient';

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectShowcasePage({ params }) {
  const index = projects.findIndex((p) => p.id === params.id);
  const project = projects[index];
  if (!project) return <NotFound />;

  return (
    <ProjectShowcaseClient
      project={{
        ...project,
        index,
        prev: projects[index - 1] || null,
        next: projects[index + 1] || null,
      }}
    />
  );
}
