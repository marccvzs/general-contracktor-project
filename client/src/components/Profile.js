import React from 'react';

function Profile({ user }) {
    const { name, address, email, projects } = user
    console.log(user)
  return (
    <div className="bg-[#7f884a]/80 items-center px-20 m-1 rounded-xl border-2 border-stone-700 shadow-lg">
      <div className="text-center ">
        <label>Your Name: </label>
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
      <div className="text-center">
        <label>Your Email: </label>
        <h3>{email}</h3>
      </div>
      <div className="text-center">
        <label>Your Address: </label>
        <h3>{address}</h3>
      </div>
      <div className="text-center">
        <label>Number of Projects: </label>
        <h3>{projects.length}</h3>
      </div>
      <button className="bg-sky-400 text-black hover:bg-slate-700 rounded-lg pl-1 pr-1 m-1 hover:text-white">Edit</button>
    </div>
  )
}

export default Profile