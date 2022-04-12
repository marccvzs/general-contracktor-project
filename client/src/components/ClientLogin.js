import React, { useState } from 'react';

function ClientLogin({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login/client', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      })
    })
    .then(r => r.json())
    .then(client => console.log(client))
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="my-auto">
      <form onSubmit={handleSubmit}>
        <input 
        className='m-3'
        type="text" 
        placeholder="Email" 
        name='email'
        value={formData.email}
        onChange={handleChange}
        />
        <input
        className='m-3'
        type='password'
        placeholder='Password'
        name='password'
        value={formData.password} 
        onChange={handleChange}
        />
        <button
        className="mx-auto bg-blue-500 hover:bg-blue-600 hover:ring" 
        type='submit'
        >Enter
        </button>
      </form>
    </div>
  )
}

export default ClientLogin