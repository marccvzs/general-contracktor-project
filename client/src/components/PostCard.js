import React from 'react';

function PostCard({ post }) {
  const { project, client } = post

  console.log(client)
  return (
    <div className="relative hover:opacity-80 shadow-md transition-all cursor-pointer p-8 bg-white/30 shadow-black backdrop-blur-lg rounded-xl m-2 min-h-max">
      <div className={`w-full h-5/6 bg-cover bg-center`}>
        <h1 className={`absolute text-center text-white font-bold uppercase text-2xl`}>{project.name}</h1>
        <h3 className="text-right text-white font-bold uppercase">Owned by: {client.name}</h3>
        <br/>
        <h2 className="uppercase text-white font-bold">$ {project.budget}</h2>
      </div>
    </div>
  )
}

export default PostCard