import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import LogoutModal from './LogoutModal';

function NavBar({ loggedIn, onLogout }) {
  const [logoutModalOn, setLogoutModalOn] = useState(false)
  const [logoutChoice, setLogoutChoice] = useState(false)

  function handleLogout() {
    setLogoutModalOn(true)
  }

  return (
    <div className="fixed w-full text-white flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center">
        <h1>G<span className="block text-4xl">C</span></h1>
      </div>

      <nav>
        <ul className="md:flex gap-8 p-6 uppercase bg-white/10">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/project/new">New Project</NavLink></li>
          <li><NavLink to="/client/signup">Sign Up</NavLink></li>
        </ul>
        {loggedIn ? <button onClick={handleLogout}>Logout</button> : null}
        {logoutModalOn && <LogoutModal onLogout={onLogout} logoutModalOn={setLogoutModalOn} setChoice={setLogoutChoice}/>}
      </nav>
    </div>
  )
}

export default NavBar