import React, { useState } from 'react';

function ClientSignup() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    budget: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/signup/client', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        name: formData.name,
        address: formData.address,
        budget: formData.budget,
        password: formData.password,
        password_confirmation: formData.password_confrimation,
      })
    })
    .then(r => r.json())
    .then(user => console.log(user))
    
  }

  return (
    <div className="my-auto">
      <form onSubmit={handleSubmit}>
        <div className="m-3">
          <input
          type="text"
          placeholder="Name..."
          name="name"
          value={formData.name}
          onChange={handleChange}
          />
        </div>
        <div className="m-3">
          <input
          type="text"
          placeholder="Email..."
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        </div>
        <div className="m-3">
          <input
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          />
        </div>
        <div className="m-3">
          <input
          type="text"
          placeholder="What's Your Budget..."
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          />
        </div>
        <div className="m-3">
          <input
          type="password"
          placeholder="Password..."
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
        </div>
        <div className="m-3">
          <input
          type="password"
          placeholder="Confirm Password..."
          name="password_confirmation"
          value={formData.password_confirmaiton}
          onChange={handleChange}
          />
        </div>
        <button className="m-3 bg-blue-300 hover:bg-blue-600" type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default ClientSignup