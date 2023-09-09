import React from 'react';
import projectsData from '../data/projects';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectsData.map(project => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {/* ... other project details */}
        </div>
      ))}
    </section>
  );
}

export default Projects;
