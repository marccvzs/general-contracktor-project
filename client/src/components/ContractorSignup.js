import React, { useState } from 'react';

function ContractorSignup() {
const [formData, setFormData] = useState({
    name: '',
    company: '',
    trade: '',
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

    fetch('/signup/contractor', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        name: formData.name,
        company: formData.company,
        trade: formData.trade,
        password: formData.password,
        password_confirmation: formData.password_confrimation,
      })
    })
    .then(r => r.json())
    .then(contractor => console.log(contractor))
    
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
          placeholder="Company Name..."
          name="company"
          value={formData.address}
          onChange={handleChange}
          />
        </div>
        <div className="m-3">
          <select
          name="trade"
          value={formData.trade}
          onChange={handleChange}
          >
              <option>Carpenter</option>
              <option>Plummer</option>
              <option>Electrician</option>
          </select>
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

export default ContractorSignup