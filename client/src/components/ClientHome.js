import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';
import ProjectCard from './ProjectCard';
import Profile from './Profile';
import Switch from './Switch';

function ClientHome({ user }) {
    const [projects, setProjects] = useState([])
    const [modalOn, setModalOn] = useState(false)
    const [choice, setChoice] = useState(false)

    useEffect(() => {
        fetch("/projects")
        .then(r => r.json())
        .then(projectsArray => setProjects(projectsArray))
    }, [])

    function handleDelete(id) {        
        const updatedList = projects.filter(project => project.id !== id)
        setProjects(updatedList)
    }

    const projectsList = projects.map(project => {
        return (
            <ProjectCard key={project.id} project={project} onDelete={handleDelete}/>
        )
    })


  return (
    <div>
        <button 
        className="bg-gradient-to-br from-slate-100 rounded h-8 w-30 m-1 px-1 hover:bg-gradient-to-l"
        onClick={() => setModalOn(modalOn => !modalOn)}>
        New Project +
        </button>
        <Profile user={user}/>
        {projectsList}
        {modalOn && <ProjectForm setModalOn={setModalOn} user={user}/>}
    </div>
  )
}

export default ClientHome