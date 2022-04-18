import React, { useState } from 'react';
import Errors from './Errors';

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
          onSetUser(user)
        });
      } else {
      r.json()
      .then(err => setErrors(err.errors));
    }
  });
}
  

  return (
    <div className="flex flex-wrap mt-20 justify-center p-2">
      <form onSubmit={handleSubmit}>
        <div>
          <input
          className="m-2"
          type="text"
          placeholder="Name..."
          name="name"
          value={formData.name}
          onChange={handleChange}
          />
        </div>
        <div>
          <input 
          className="m-2"
          type="email"
          placeholder="Email..."
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        </div>
        <div>
          <input
          className="m-2"
          type="text"
          placeholder="Address.."
          name="address"
          value={formData.address}
          onChange={handleChange}
          />
        </div>
        <div>
          <input
          className="m-2"
          type="password"
          placeholder="Password..."
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
        </div>
        <div>
          <input
          className="m-2"
          type="password"
          placeholder="Confirm Password..."
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
          />
        </div>
        <div>
          <button 
          className="bg-slate-400 hover:bg-blue-200 rounded p-2" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        </div>
        <Errors errors={errors} />
      </form>
    </div>
  )
}

export default ClientSignup;