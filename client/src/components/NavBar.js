import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuOutlined } from '@material-ui/icons';
import LogoutModal from './LogoutModal';
import MenuItems from './MenuItems';

function NavBar({ loggedIn, onLogout }) {
  const [logoutModalOn, setLogoutModalOn] = useState(false)
  const [logoutChoice, setLogoutChoice] = useState(false)
  const [active, setActive] = useState(false)

  function handleLogout() {
    setLogoutModalOn(true)
  }

  function showMenu() {
    setActive(active => !active)
  }

  return (
    <div className="fixed w-full text-white flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center bg-[#7f884a]/70 rounded-full p-1 shadow-lg">
        <h1>GC</h1>
      </div>

      <nav>

        <div className="absolute right-6 md:hidden top-6 sc-150">
          <MenuOutlined onClick={showMenu} className="scale-150 cursor-pointer"/>
        </div>

        <ul className="hidden md:flex gap-8 p-6 uppercase text-black bg-white/10">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/project/new">New Project</NavLink></li>
          <li><NavLink to="/client/signup">Sign Up</NavLink></li>
          {loggedIn ? <li className="cursor-pointer" onClick={handleLogout}>Logout</li> : null}
        </ul>

        <MenuItems showMenu={showMenu} active={active} />

        {logoutModalOn && <LogoutModal onLogout={onLogout} logoutModalOn={setLogoutModalOn} setChoice={setLogoutChoice}/>}
      </nav>
    </div>
  )
}

export default NavBar