import React, { useState } from 'react';

function ProjectForm({ setModalOn, user }) {
    const [formData, setFormData] = useState({
        budget: 0,
        num_rooms: 0,
        name: '', 
        description: '',
    })

    function handleChange(e) {
        const value = e.target.value
        const name = e.target.name

        setFormData({
            ...formData,
            [name]: value
        })
    }
    console.log(user.id)
    function handleSubmit(e) {
        e.preventDefault();
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
                address: user.address,
                client_id: user.id
            })
        })
    }

  return (
    <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50">
        <div className="flex h-screen justify-center items-center">
            <div className="flex-col justify-center bg-white py-12 px-24 border-4 border-sky-500 rounded-xl">
                <form onSubmit={handleSubmit}>
                    <div className="m-3">
                        <input
                        type="text"
                        placeholder="Name your project..."
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="m-3">
                        <span>How many rooms:</span>
                        <select className="ml-2" name="num_romms" value={formData.num_rooms} onChange={handleChange}>
                            
                        </select>
                    </div>
                    <div className="m-2">
                        <span>$</span>
                        <input 
                        type="text"
                        placeholder="What's your budget..."
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="m-3">
                        <textarea 
                        type="text" 
                        placeholder="Describe your project..."
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flex">
                        <button className="bg-blue-300" type="submit">Submit</button>
                        <button className="bg-blue-300 ml-20" type="submit" onClick={() => setModalOn(false)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ProjectForm