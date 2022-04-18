import React, { useState } from 'react';

function ProjectForm({ setModalOn, user }) {
    const [isLoading, setIsLoading] = useState(false)
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
        .then(r => {
            if (r.ok) {
                setModalOn(false)
            }
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
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
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
                        <button className="bg-blue-300 rounded-xl pl-1 pr-1 hover:bg-slate-600 hover:text-white" type="submit">{isLoading ? "Submitting..." : "Submit"}</button>
                        <button className="bg-slate-700 ml-20 text-white hover:bg-sky-300 pl-1 pr-1 rounded-xl" type="submit" onClick={() => setModalOn(false)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ProjectForm