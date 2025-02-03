import Projects from '@/components/projects/Projects';
import { query } from '@/lib/db';
import React from 'react';

export type Project = {
  id: number;
  name: string;
  short_description: string;
};

async function fetchProjects() {
  const res = await query("SELECT * FROM projects");
  return res.rows;
}

const ProjectsPage = async () => {
  const projects: Project[] = await fetchProjects();

  return <Projects projects={projects}/>;
    
    // <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
    //   {projects.map((project) => (
    //     <div key={project.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
    //       <h3>{project.name}</h3>
    //       <p>{project.description}</p>
    //     </div>
    //   ))}
    // </div>
  
};

export default ProjectsPage;
