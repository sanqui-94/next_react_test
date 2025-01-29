import Projects from '@/components/projects/Projects';
import React from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
}

async function fetchProjects() {
  const res = await fetch('https://www.google.com/');
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}

const ProjectsPage = async () => {
  // const projects: Project[] = await fetchProjects();

  return <Projects />;
    
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
