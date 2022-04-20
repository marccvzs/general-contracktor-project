import React, { useState } from 'react';
import ProfileEdit from './ProfileEdit';

function Profile({ user }) {
  const [editModalOn, setEditModalOn] = useState(false)
    const { name, address, email, projects } = user
    
    function handleEditClick() {

    }

  return (
    <div className="bg-devol-image mt-20 bg-cover h-screen w-full bg-center flex">
      <div className="bg-gradient-to-br from-[#7f884a]/80 backdrop-blur-sm justify-center items-center px-20 m-1 rounded-xl border-2 border-stone-700 shadow-lg">
        <div className="text-center bg-transparent">
          <label>Your Name: </label>
          <h1 className="text-2xl font-bold">{name}</h1>
        </div>
        <div className="text-center bg-transparent">
          <label>Your Email: </label>
          <h3>{email}</h3>
        </div>
        <div className="text-center bg-transparent">
          <label>Your Address: </label>
          <h3>{address}</h3>
        </div>
        <div className="text-center bg-transparent">
          <label>Number of Projects: </label>
          <h3>{projects.length}</h3>
        </div>
        <button className="bg-transparent text-black hover:bg-slate-700 rounded-lg pl-1 pr-1 m-1 hover:text-white"
        onClick={() => setEditModalOn(editModalOn => !editModalOn)}>
          Edit
        </button>
      </div>
      {editModalOn && <ProfileEdit onEdit={setEditModalOn} />}
    </div>
  )
}

export default Profile