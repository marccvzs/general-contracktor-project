import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("/projects")
    .then(r => r.json())
    .then(projectsArray => setProjects(projectsArray))
  }, [])

  const projectsList = projects.map(project => {
    return (
      <ProjectCard key={project.id} project={project} />
    )
  })

  return (
    <div>Projects</div>
  )
}

export default Projects