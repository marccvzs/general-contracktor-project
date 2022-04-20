import React from 'react';

function PostCard({ post }) {
  const { project } = post

  console.log(project)
  return (
    <div className="relative hover:opacity-80 shadow-md transition-all cursor-pointer p-4 bg-blue-200/10 shadow-black backdrop-blur-lg">
      <div className={`w-full h-5/6 bg-cover bg-center`}>
        <h1 className={`absolute left-2/4 top-1/2 translate text-black uppercase -translate-x-1/2 -translate=y-1/2 text-2xl`}>{project.name}</h1>
      </div>
      <div className="m-2 lg:m-4">
        <h1 className="uppercase text-white font-bold">{project.num_rooms}</h1>
      </div>
    </div>
  )
}

export default PostCard