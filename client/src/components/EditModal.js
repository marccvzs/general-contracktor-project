import React, { useState } from 'react';

function EditModal({ project, setEditModalOn, onEdit }) {
    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true);
        console.log(id)
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
                    onEdit(project)
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
    <div className="bg-[#7f884a] opacity-90 fixed inset-0 z-50" >
        <div className="flex h-screen justify-center items-center">
            <div className="flex-col justify-center bg-black/80 py-12 px-24 border-4 border-white rounded-xl">
                <form className="text-white border p-2"onSubmit={handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input
                        className="bg-transparent"
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder={formData.name}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Number of rooms: </label>
                        <select 
                        className="bg-transparent"
                        type="text"
                        name="num_rooms"
                        value={formData.num_rooms}
                        placeholder={formData.num_rooms}
                        onChange={handleChange}>
                            <option>1</option>
                        </select>
                    </div>
                    <div>
                        <label>Address: </label>
                        <input 
                        className="bg-transparent"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Budget: </label>
                        <input 
                        className="bg-transparent"
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
                        className="bg-transparent"
                        type="type"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        />
                    </div>
                    <button className="hover:bg-[#7f884a] bg-transparent m-1 p-1 rounded-full hover:text-white" type="submit">{isLoading ? "Submitting..." : "Submit"}</button>
                    <button 
                    className="m-20 p-1 hover:bg-red-500 rounded-full text-white bg-transparent hover:text-white"
                    onClick={() => setEditModalOn(false)}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditModal