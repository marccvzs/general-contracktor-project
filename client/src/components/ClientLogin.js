import React, { useState } from 'react';
import ClientSignup from './ClientSignup';
import { Link, Redirect } from 'react-router-dom';

function ClientLogin({ onLogin, onSetUser }) {
    const [showLogin, setShowLogin] = useState(true)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        fetch("/login/client", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(client => {
                    onLogin(true);
                    onSetUser(client);
                    <Redirect push to="/" />
                });
            }
        });
    }
  return (
      <div className="bg-gradient-to-br from-amber-200 h-screen">
    {showLogin ? (
        <>
            <div className="flex flex-wrap mt-20 justify-center">
                <div className="w-full max-w-sm">
                <form onSubmit={handleSubmit} className="shadown-md bg-white rounded pt-6 pb-8 mb-4">
                    <div className="mb">
                        <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" 
                            className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                        <input type="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline py-2 m-2">
                                Sign In
                            </button>
                        </div>
                </form>
                <span>Don't have an account? <button onClick={() => setShowLogin(false)}>Sign Up</button></span>
            </div>
        </div>
    </>
    ) : (
        <>
            <ClientSignup onLogin={onLogin} onSetUser={onSetUser}/>
        </>
    )}
  </div>
  )
}

export default ClientLogin