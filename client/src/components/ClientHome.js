import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';
import ProjectCard from './ProjectCard';
import Profile from './Profile';
import CustomBtn from './CustomBtn';

function ClientHome({ user }) {
    const [projects, setProjects] = useState([])
    const [modalOn, setModalOn] = useState(false)
    const [toggle, setToggle] = useState(true)
    const [showProfile, setShowProfile] = useState(false)

    useEffect(() => {
        fetch("/projects")
        .then(r => r.json())
        .then(projectsArray => setProjects(projectsArray))
    }, [])

    function handleDelete(id) {        
        const updatedList = projects.filter(project => project.id !== id)
        setProjects(updatedList)
    }

    const projectsList = projects.filter(project => {
        if (!toggle) {
            return(
                project.completed === true
        )} else {
            return project
        }
    }).map(project => {
        return (
            <ProjectCard key={project.id} project={project} onDelete={handleDelete}/>
        )
    })

  return (
    <div className="bg-gradient-to-br from-zinc-200">
        <div className="w-full text-white bg-cover bg-gradient-to-br from-zinc-200 uppercase p-6">
                <CustomBtn children={"Filter " + (toggle ? "Completed" : "All")} onClickItem={() => setToggle(toggle => !toggle)}/>
        </div>
        <div className="flex flex-col items-start">
            {showProfile ? <Profile user={user}/> : null}
        </div>
        <header className="text-center text-2xl p-1 m-1 bg-slate-800 rounded-xl text-[#7f884a] shadow-md shadow-black uppercase font-bold">
            Your Projects
        </header>
        <div className="w-full h-screen bg-kitchen-image bg-cover bg-center grid place-items-center lg:grid-cols-2 children:w-11/12 children:h-5/6 text-center p-4">
            {projectsList}
            {modalOn && <ProjectForm setModalOn={setModalOn} user={user}/>}
        </div>
    </div>
  )
}

export default ClientHome