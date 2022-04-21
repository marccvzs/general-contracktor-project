import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import CustomBtn from './CustomBtn';
import EditModal from './EditModal';

function ClientHome({ user }) {
    const [projects, setProjects] = useState([])
    const [toggle, setToggle] = useState(true)
    const [editModalOn, setEditModalOn] = useState(false)
    const [project, setProject] = useState({})

    useEffect(() => {
        fetch("/projects")
        .then(r => r.json())
        .then(projectsArray => setProjects(projectsArray))
    }, [])

    function handleEdit(project) {
        setProject(project)
        setEditModalOn(true);
    }
  

    function handlePostClick(id) {
        fetch('/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                client_id: user.id,
                project_id: id,
            })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(post => {
                    setEditModalOn(false)
                })
            }
        })
    }

    function handleDelete(id) {        
        const updatedList = projects.filter(project => project.id !== id)
        setProjects(updatedList)
    }

    function handleEditUpdate(newProj) {
        console.log(newProj)
        const updated = projects.map(project => {
            if (project.id === newProj.id) {
                return newProj
            } else {
                return project
            }
        })
        console.log(updated)
        setProjects(updated)
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
            <ProjectCard key={project.id} project={project} onPostClick={handlePostClick} handleEdit={handleEdit} onDelete={handleDelete}/>
        )
    })

  return (
    <div className="bg-gradient-to-br from-zinc-200">

        <div className="w-full text-white bg-cover bg-gradient-to-br from-zinc-200 uppercase p-6">
            <CustomBtn children={"Filter " + (toggle ? "Completed" : "All")} onClickItem={() => setToggle(toggle => !toggle)}/>
        </div>

        <header className="text-center text-2xl p-1 mx-5 my-2 bg-slate-800 rounded-xl text-[#7f884a] shadow-md shadow-black uppercase font-bold">
            Your Projects
        </header>

        <div className="w-full h-screen bg-kitchen-image bg-cover bg-center grid place-items-center lg:grid-cols-2 children:w-11/12 children:h-5/6 text-center p-4">
            {projectsList}
        </div>
        {editModalOn && <EditModal onEdit={handleEditUpdate} setEditModalOn={setEditModalOn} project={project} />}
    </div>
  )
}

export default ClientHome