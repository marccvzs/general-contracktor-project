import React, { useState } from 'react';

function ProfileEdit({ onEdit }) {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: ''
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
        fetch('/client/me', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.email,
                name: formData.name,
                address: formData.address
            })
            .then(r => {
                if (r.ok) {
                    r.json()
                    .then(client => {
                        setIsLoading(false);
                    })
                }
            })
        })
    }

    function handleCancel() {
        onEdit(false);
    }
  return (
    <div className="bg-white/20 z-50 opacity-80 fixed inset-0">
        <div className="flex h-screen justify-center items-center">
            <div className="flex-col items-center justify-center bg-white py-12 px-24 border-4 border-[#7f884a] rounded-xl">
                <form 
                className="flex-col flex"
                onSubmit={handleSubmit}>
                    <label>Edit Name: </label>
                    <input
                    className="bg-transparent"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    <label>Edit Email: </label>
                    <input 
                    className="bg-transparent"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    />
                    <label>Edit Address: </label>
                    <input
                    className="bg-transparent"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange} />
                    <button 
                    className="hover:bg-[#7f884a] p-1 m-1 rounded-xl"
                    type="submit">{isLoading ? "Submitting..." : "Submit"}</button>
                </form>
                <button 
                className="justify-center hover:bg-red-500 rounded-xl p-1 m-1"
                onClick={handleCancel}>Cancel</button>
            </div>

        </div>
    </div>
  )
}

export default ProfileEdit