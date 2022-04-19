import React, { useState } from 'react';
import ClientSignup from './ClientSignup';
import NavBar from './NavBar';
import { Link, Redirect } from 'react-router-dom';
import CustomBtn from './CustomBtn';

function ClientLogin({ onLogin, onSetUser }) {
    const [showLogin, setShowLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true);
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
    <div>
        <NavBar />
        <div className="bg-concept-image w-full h-screen bg-cover bg-center flex items-center justify-center px-2">
            <div className="text-center font-extrabold m-8">
                <h1 className="text-6xl text-[#7f884a]/90">iRENO</h1></div>
        {showLogin ? (
            <>
                <div className="flex flex-wrap mt-20 justify-center">
                    <div className="w-full max-w-sm">
                    <form onSubmit={handleSubmit} className="text-center shadown-md bg-[#7f884a]/90 p-2 border-2 border-black rounded pt-6 pb-8 mb-4">
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
                            <CustomBtn 
                            children="Sign In"
                            />
                            {/* <div className="flex items-center justify-between">
                                <button 
                                className={'bg-[#7f884a] border-2 transition ease-in-out delay-150 duration-300 border-black hover:-translate-y-1 hover:scale-110 hover:bg-[#000080]/70 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline py-2 m-2' + (isLoading ? 'animate-spin' : null)}
                                type="submit">
                                    {isLoading ? "Loading..." : "Sign In"}
                                </button>
                            </div> */}
                    </form>
                    <div className="bg-white/70 p-1">
                        <span>Don't have an account?</span>
                        <button 
                        className="m-1 hover:text-blue-500"
                        onClick={() => setShowLogin(false)}> Sign Up</button>
                    </div>
                </div>
            </div>
        </>
        ) : (
            <>
                <ClientSignup onLogin={onLogin} onSetUser={onSetUser}/>
                <button onClick={() => setShowLogin(true)}>Cancel</button>
            </>
        )}
    </div>
  </div>
  )
}

export default ClientLogin