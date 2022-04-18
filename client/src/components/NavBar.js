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
    <header className="bg-stone-200">
      <div className="p-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/project/new">New Project</NavLink>
        <NavLink to="/client/signup">Sign Up</NavLink>
        {loggedIn ? <button onClick={handleLogout}>Logout</button> : null}
        {logoutModalOn && <LogoutModal onLogout={onLogout} logoutModalOn={setLogoutModalOn} setChoice={setLogoutChoice}/>}
      </div>
    </header>
  )
}

export default NavBar