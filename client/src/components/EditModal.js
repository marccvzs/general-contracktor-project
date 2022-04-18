import React, { useState } from 'react';

function EditModal({ project, setEditModalOn }) {
    const { id, name, address, num_rooms, budget, description } = project;
    const [formData, setFormData] = useState({
        name: name,
        address: address, 
        num_rooms: num_rooms,
        budget: budget,
        description: description
    })

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/projects/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                address: formData.address,
                num_rooms: formData.num_rooms,
                description: formData.description,
                budget: formData.budget,
                client_id: project.client_id
            })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(project => {
                    setEditModalOn(false)
                })
            }
        })
    }
    
    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        setFormData({
            ...formData,
            [name]: value
        })
    }


  return (
    <div className="bg-lime-200 opacity-80 fixed inset-0 z-50" >
        <div className="flex h-screen justify-center items-center">
            <div className="flex-col justify-center bg-white py-12 px-24 border-4 borger-green-700 rounded-xl">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder={formData.name}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Number of rooms: </label>
                        <input 
                        type="text"
                        name="num_rooms"
                        value={formData.num_rooms}
                        placeholder={formData.num_rooms}
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Address: </label>
                        <input 
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Budget: </label>
                        <input 
                        type="text"
                        name="budget"
                        placeholder={formData.budget}
                        value={formData.budget}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <textarea 
                        type="type"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        />
                    </div>
                    <button className="bg-sky-300 hover:bg-slate-600 m-1 p-1 rounded-full hover:text-white" type="submit">Submit Change</button>
                    <button 
                    className="m-20 p-1 bg-slate-500 rounded-full text-white hover:bg-sky-400 hover:text-slate-700"
                    onClick={() => setEditModalOn(false)}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditModal