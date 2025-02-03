"use Client";

import { Project } from "@/app/projects/page";

type ProjectProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectProps) {
  return (
    <main>
      <h1>Projects</h1>
      <p>Here are some of the projects I have worked on:</p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a href={`/projects/${project.id}`}>{project.name}</a>
            <p>{project.short_description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
