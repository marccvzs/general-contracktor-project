import React, { useState } from 'react';

function ProjectCard({ project, setModalOn, onPostClick, handleEdit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false)
  const { id, budget, num_rooms, name, address, description, completed, img} = project

  function handleDeleteClick() {
    setModalOn(true)
    setIsLoading(true)

    fetch(`/projects/${id}`, {
      method: "DELETE"
    })
      .then(r => {
        if (r.ok) {
          setIsLoading(false)
        }
      })
        
  }

  function handlePost() {
    setIsLoading(true)
    onPostClick(id)
    setIsLoading(false)
  }

  return (
    <div className="relative hover:opacity-80 shadow-md transition-all cursor-pointer p-8 bg-blue-200/10 shadow-black backdrop-blur-lg">
      <button className="float-right hover:bg-red-600 rounded-full p-2" onClick={handleDeleteClick}>X</button>
     {toggle ? null : <div className={`w-full h-5/6 bg-cover bg-center`}>
        <h1 className={`absolute left-2/4 top-1/2 translate text-black uppercase -translate-x-1/2 -translate-y-1/2 text-2xl`}>{name}</h1>
      </div>}
      <div className="m-1 lg:m-4">
        <button className="hover:bg-[rgb(127,136,74)] rounded-xl hover:shadow-md hover:shadow-black p-1 float-left" onClick={() => setToggle(toggle => !toggle)}>Show {toggle ? "Less" : "More"}</button>
        {toggle ? 
        <div className="bg-slate-800rounded">
          <h1 className="uppcase text-3xl font-bold rounded text-[rgb(127,136,74)]">{name}</h1>
          <h2 className="uppercase text-white font-bold">${budget}</h2>
          <p className="uppercase text-white font-bold">{address}</p>
          <h3 className="uppercase text-white font-bold">Number of rooms: {num_rooms}</h3>
          <p className="text-white font-bold rounded">{description}</p>
          <span className="uppercase text-white font-bold float-right">Status: {completed ? <span className="text-green-800">Completed</span> : <span className="text-red-800">In Progress</span>}</span>
          <button className="hover:bg-[rgb(127,136,74)] bg-transparent hover:shadow-md hover:shadow-black px-1 hover:text-black rounded-xl" onClick={() => handleEdit(project)}>
            Edit</button>
          <button 
          className="ml-20 px-1 bg-transparent hover:bg-sky-400 hover:shadow-md hover:shadow-black text-white rounded-xl"
          onClick={handlePost}>{isLoading ? "Loading..." : "Post"}</button> 
        </div>
        : null}
      </div>
      
    </div>

  )
}

export default ProjectCard