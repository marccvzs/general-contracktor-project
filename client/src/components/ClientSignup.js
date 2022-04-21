import React, { useState } from 'react';
import Errors from './Errors';
import { Redirect } from 'react-router-dom';

function ClientSignup({ onLogin, onSetUser }) {
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    password_confirmation: '',
  })

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        name: formData.name,
        address: formData.address,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      }),
    })
    .then(r => {
      setIsLoading(false);
      if (r.ok) {
        r.json()
        .then(user => {
          onLogin(true)
          onSetUser(user);
          fetch('/login/client', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
              password: formData.password
            })
          })
          .then(r => {
            if (r.ok) {
              r.json()
              .then( <Redirect push to='/project/new'/>)
            }
          })
        });
      } else {
      r.json()
      .then(err => setErrors(err.errors));
    }
  });
}
  

  return (
    <div className="flex flex-wrap mt-20 justify-center p-2 bg-[#7f884a]/80 rounded shadow-lg shadow-black">
      <form className="border "onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <div>
          <input
          className="m-2 bg-transparent text-black"
          type="text"
          placeholder="Name..."
          name="name"
          value={formData.name}
          onChange={handleChange}
          />
        </div>
        <div>
          <input 
          className="m-2 bg-transparent"
          type="email"
          placeholder="Email..."
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        </div>
        <div>
          <input
          className="m-2 bg-transparent"
          type="text"
          placeholder="Address.."
          name="address"
          value={formData.address}
          onChange={handleChange}
          />
        </div>
        <div>
          <input
          className="m-2 bg-transparent"
          type="password"
          placeholder="Password..."
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
        </div>
        <div>
          <input
          className="m-2 bg-transparent"
          type="password"
          placeholder="Confirm Password..."
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
          />
        </div>
        <div>
          <button 
          className="bg-transparent hover:bg-black/50 hover:text-white hover:shadow-md hover:shadow-black rounded p-2" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
          <button
          className="bg-transparent hover:bg-red-500/50 hover:shadow-md hover:shadow-black m-1 rounded p-2"
          >Clear</button>
        </div>
        <Errors errors={errors} />
      </form>
    </div>
  )
}

export default ClientSignup;