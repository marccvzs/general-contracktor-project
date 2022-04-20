import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import EditModal from './EditModal';

function ProjectCard({ project, onDelete }) {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [editModalOn, setEditModalOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id, budget, num_rooms, name, client_id, description, completed, img} = project
  
  function handleDeleteClick() {
    setModalOn(true)
    if (choice) {
      fetch(`/projects/${id}`, {
        method: "DELETE"
      })
        .then(r => {
          if (r.ok) {
            setIsLoading(true)
          }
        })
        }
  }
  
  function handlePostClick() {
    fetch("/posts", {
      method: "POST",
      headers: {
        "Cotent-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: client_id,
        project_id: id
      })
    })

  }

  function handleEdit() {
    setEditModalOn(true)
  }

  return (
    <div className="relative hover:opacity-80 shadow-md transition-all cursor-pointer p-4 bg-blue-200/10 shadow-black backdrop-blur-lg">
      <div className={`w-full h-5/6 bg-cover bg-center`}>
        <h1 className={`absolute left-2/4 top-1/2 translate text-black uppercase -translate-x-1/2 -translate=y-1/2 text-2xl`}>{name}</h1>
      </div>
      <div className="m-2 lg:m-4">
        <h1 className="uppercase text-white font-bold">${budget}</h1>
        <button className="-translate-y-5 -translate-x-5 bg-[rgb(127,136,74)] shadow-md shadow-black px-1 hover:text-black rounded-xl" onClick={handleEdit}>
          Edit</button>
        <button 
        className="-translate-y-5 translate-x-5 ml-20 px-1 bg-slate-500 hover:bg-sky-400 shadow-md shadow-black text-white rounded-xl"
        onClick={handlePostClick}>{isLoading ? "Loading..." : "Post"}</button>
      </div>
      {editModalOn && <EditModal setEditModalOn={setEditModalOn} project={project} />}
      {modalOn && <ConfirmModal setModalOn={setModalOn} setChoice={setChoice} />}
    </div>

  )
}

export default ProjectCard