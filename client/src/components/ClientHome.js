import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';
import ProjectCard from './ProjectCard';
import Profile from './Profile';

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

    console.log(projects)
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

    const toggleClass = 'transform translate-x-6 bg-green-500';


  return (
    <div className="items-center h-screen overflow-y-scroll">
        <header>
            <button 
            className="bg-gradient-to-br from-slate-100 rounded h-8 w-30 m-1 px-1 hover:bg-gradient-to-l"
            onClick={() => setModalOn(modalOn => !modalOn)}>
            New Project +
            </button>
        </header>
        <div className="m-1">
            <label className="m-1">Filter {toggle ? "Completed" : "All"}</label>
            <br/>
            <button 
            className="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
            onClick={() => setToggle(toggle => !toggle)}>
                <div 
                className={"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" + (toggle ? null : toggleClass)}
                >
                </div>
            </button>
        </div>
        <div className="flex">
            <div className="flex-col">
                <button onClick={() => setShowProfile(showProfile => !showProfile)}>{showProfile ? "Hide" : "Show"} Profile</button>
                {showProfile ? <Profile user={user}/> : null}
                <header className="text-center text-2xl">Your Projects</header>
                {projectsList}
            </div>
        {modalOn && <ProjectForm setModalOn={setModalOn} user={user}/>}
        </div>
    </div>
  )
}

export default ClientHome