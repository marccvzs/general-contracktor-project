import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';

function NavBar({ loggedIn, onLogout }) {
  const [modalOn, setModalOn] = useState(false)
  const [choice, setChoice] = useState(false)

  function handleLogout() {
    setModalOn(true)
    if (choice) {
      fetch('/logout/client', {
        method: "DELETE",
      })
      .then(r => {
        if (r.ok) {
          r.json()
          .then(client => {
            onLogout(false);
            <Redirect push to="/client/login" />
          })
        }
      })
    }
  }

  console.log(loggedIn)

  return (
    <div className="bg-stone-200">
      <NavLink to="/client/projects">Home</NavLink>
      <NavLink to="/projects/new">New Project</NavLink>
      <NavLink to="/client/signup">Sign Up</NavLink>
      {loggedIn ? <button onClick={handleLogout}>Logout</button> : null}
      {modalOn && <ConfirmModal setModalOn={setModalOn} setChoice={setChoice}/>}
    </div>
  )
}

export default NavBar