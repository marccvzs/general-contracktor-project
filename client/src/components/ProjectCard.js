import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import EditModal from './EditModal';

function ProjectCard({ project, onDelete }) {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [editModalOn, setEditModalOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id, budget, num_rooms, name, client_id, description } = project
  
  function handleClick() {
    setModalOn(true)
    if (choice) {
      fetch(`/projects/${id}`, {
        method: "DELETE"
      })
        .then(r => r.json())
        .then(onDelete(id))
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
    <div className="flex justify-center items-center py-2 px-3 m-2">
      <div className="relative shadow-lg flex-col font-mono justify-center bg-zinc-300 py-12 px-24 border-4 border-sky-500 rounded-xl">
       <div>
        <h3 className="text-lg">{name}</h3>
      </div>
      <div>
        <h6>{budget}</h6>
      </div>
      <h6>{num_rooms}</h6>
      <p>{description}</p>
      <div>
        <button className="absolute h-8 shadow -top-4 -right-3 py-1 px-1 bg-stone-400 border rounded hover:bg-blue-200"onClick={handleClick}>X</button>
      </div>
      <button className="bg-sky-300 border-2 pl-1 pr-1 hover:text-blue-500  rounded-xl" onClick={handleEdit}>Edit</button>
      <button 
      className="ml-20 pl-1 pr-1 bg-slate-500 hover:bg-sky-400 rounded-xl"
      onClick={handlePostClick}>{isLoading ? "Loading..." : "Post"}</button>
      {editModalOn && <EditModal setEditModalOn={setEditModalOn} project={project} />}
      {modalOn && <ConfirmModal setModalOn={setModalOn} setChoice={setChoice} />}
    </div>
    </div>
  )
}

export default ProjectCard