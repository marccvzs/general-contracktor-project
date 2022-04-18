import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import EditModal from './EditModal';

function ProjectCard({ project, onDelete }) {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [editModalOn, setEditModalOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id, budget, num_rooms, name, client_id, description, completed } = project
  
  function handleDeleteClick() {
    setModalOn(true)
    if (choice) {
      fetch(`/projects/${id}`, {
        method: "DELETE"
      })
        .then(r => {
          if (r.ok) {
            isLoading(true)
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
    <div className="flex justify-center items-center py-2 px-3 m-2">
      <div className="relative shadow-xl flex-col font-mono justify-center bg-black/40 backdrop-blur-sm text-white py-12 px-24 border-4 border-[#7f884a] rounded-xl">
       <div>
        <h3 className="text-lg">{name}</h3>
      </div>
      <div>
        <h6>Budget: ${budget}</h6>
      </div>
      <h6>{num_rooms} rooms</h6>
      <p className="bg-slate-200 rounded-xl text-slate-600 p-1">{description}</p>
      <h6>Status: {completed ? "Completed" : "In Progress"}</h6>
      <div>
        <button className="absolute h-8 shadow-xl -top-4 -right-3 py-1 px-1 bg-stone-400 border rounded-full hover:bg-blue-200"onClick={handleDeleteClick}>
          X</button>
      </div>
      <button className="bg-[#7f884a] border-2 px-1 hover:text-black rounded-xl" onClick={handleEdit}>
        Edit</button>
      <button 
      className="ml-20 px-1 bg-slate-500 hover:bg-sky-400 text-white rounded-xl"
      onClick={handlePostClick}>{isLoading ? "Loading..." : "Post"}</button>
      {editModalOn && <EditModal setEditModalOn={setEditModalOn} project={project} />}
      {modalOn && <ConfirmModal setModalOn={setModalOn} setChoice={setChoice} />}
    </div>
    </div>
  )
}

export default ProjectCard