import React from 'react';
import { NavLink } from 'react-router-dom';
import { Close } from '@material-ui/icons';

function MenuItems({ showMenu, active }) {
  return (
    <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden ' : 'hidden'}>
        <Close onClick={showMenu} className="cursor-pointer"/>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/project/new">New Project</NavLink></li>
        <li><NavLink to="/client/signup">Sign Up</NavLink></li>
    </ul>
  )
}

export default MenuItems