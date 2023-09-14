import React from 'react';
import projectsData from '../data/projects.js';

function Projects() {
  return (
    <section id="projects" className="py-8">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map(project => (
          <div key={project.title} className="border rounded-lg overflow-hidden shadow-lg">
            {project.image && (
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              {project.link && (
                <a href={project.link} className="text-blue-500 hover:underline">
                  View Project
                </a>
              )}
              {/* ... other project details */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
