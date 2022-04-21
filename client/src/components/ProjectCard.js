import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import EditModal from './EditModal';

function ProjectCard({ project, onDelete, confirm, setModalOn, onPostClick }) {
  const [choice, setChoice] = useState(false);
  const [editModalOn, setEditModalOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false)
  const { id, budget, num_rooms, name, client, description, completed, img} = project

  function handleDeleteClick() {
    setModalOn(true)
    setIsLoading(true)
    if (choice) {
      fetch(`/projects/${id}`, {
        method: "DELETE"
      })
        .then(r => {
          if (r.ok) {
            setIsLoading(false)
          }
        })
        }
  }

  function handlePost() {
    setIsLoading(true)
    onPostClick(id)
    setIsLoading(false)
  }

  function handleEdit() {
    setEditModalOn(true)
  }

  return (
    <div className="relative hover:opacity-80 shadow-md transition-all cursor-pointer p-4 bg-blue-200/10 shadow-black backdrop-blur-lg">
      <button className="float-right hover:bg-red-600 rounded-full p-2" onClick={handleDeleteClick}>X</button>
     {toggle ? null : <div className={`w-full h-5/6 bg-cover bg-center`}>
        <h1 className={`absolute left-2/4 top-1/2 translate text-black uppercase -translate-x-1/2 -translate=y-1/2 text-2xl`}>{name}</h1>
      </div>}
      <div className="m-2 lg:m-4">
        <button className="hover:bg-[rgb(127,136,74)] rounded-xl hover:shadow-md hover:shadow-black p-1" onClick={() => setToggle(toggle => !toggle)}>Show {toggle ? "Less" : "More"}</button>
        {toggle ? 
        <div>
          <h1 className="uppcase text-3xl font-bold text-[rgb(127,136,74)]">{name}</h1>
          <h2 className="uppercase text-white font-bold">${budget}</h2>
          <h3 className="uppercase text-white font-bold">Number of rooms: {num_rooms}</h3>
          <button className="bg-[rgb(127,136,74)] shadow-md shadow-black px-1 hover:text-black rounded-xl" onClick={handleEdit}>
            Edit</button>
          <button 
          className="ml-20 px-1 bg-slate-500 hover:bg-sky-400 shadow-md shadow-black text-white rounded-xl"
          onClick={handlePost}>{isLoading ? "Loading..." : "Post"}</button> 
        </div>
        : null}
        {editModalOn && <EditModal setEditModalOn={setEditModalOn} project={project} />}
      </div>
      
    </div>

  )
}

export default ProjectCard