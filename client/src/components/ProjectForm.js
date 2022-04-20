import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function ProjectForm({ user }) {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        budget: 0,
        num_rooms: 0,
        name: '', 
        description: '',
        img: '',
    })

    function handleChange(e) {
        const value = e.target.value
        const name = e.target.name
        console.log(formData)
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)
        fetch("/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                num_rooms: formData.num_rooms,
                budget: formData.budget,
                description: formData.description,
                img: formData.img,
                address: user.address,
                client_id: user.id
            })
        })
        .then(r => {
            if (r.ok) {
                setIsLoading(false);
                <Redirect push to='/' />
            }
        })
    }
    
    function handleCancel() {
        setFormData({
            name: '',
            num_rooms: 0,
            address: '',
            budget: 0,
            description: '',
        })
    }

  return (
    <div className="bg-gradient-to-br  from-zinc-200 mt-28 opacity-80 fixed inset-0">
        <div className="flex h-screen gap-2 justify-center items-center">
            <label className="text-3xl uppercase font-extrabold">New Project</label>
            <div className="justify-center bg-black/70 text-white py-12 px-24 border-4 border-[#7f884a] rounded-xl">
                <form onSubmit={handleSubmit} >
                    <div className="m-3">
                        <input
                        className="w-full p-2 bg-transparent outline-none"
                        type="text"
                        placeholder="Name your project..."
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="m-3">
                        <span>How many rooms:</span>
                        <select className="ml-2 bg-transparent outline-none" 
                        name="num_rooms" 
                        value={formData.num_rooms} 
                        onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="m-2">
                        <span>$ </span>
                        <input 
                        className="bg-transparent outline-none"
                        type="text"
                        placeholder="What's your budget..."
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="m-2">
                        <span>Image: </span>
                        <input 
                        className="bg-transparent outline-none"
                        type="text"
                        placeholder="Upload an Image..."
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="m-3">
                        <textarea 
                        className="bg-transparent"
                        type="text" 
                        placeholder="Describe your project..."
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        />
                        <br/>
                    <button className="bg-transparent rounded-xl pl-1 pr-1 hover:bg-[#7f884a] hover:text-white" type="submit">{isLoading ? "Submitting..." : "Submit"}</button>
                    </div>
                </form>
                    <button className="bg-transparent ml-3 px-1 text-white hover:bg-red-500 rounded-xl" type="submit" onClick={handleCancel}>Clear</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectForm