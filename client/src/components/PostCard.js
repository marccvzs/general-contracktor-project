import React from 'react';

function PostCard({ post }) {
  const { project } = post

  return (
    <div className="p-2 border bg-lime-700 flex-grid justify-center rounded-xl items-center">
      <div className="center"><h2>{project.name}</h2></div>
      <div><p>{project.num_rooms}</p></div>
      <div><p>{project.description}</p></div>
      
    </div>
  )
}

export default PostCard