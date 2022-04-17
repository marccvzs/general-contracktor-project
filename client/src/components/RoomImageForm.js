import React, { useState } from 'react';

function RoomImageForm() {
    const [formData, setFormData] = useState({
        img: '', 
        room_id: '',
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
        fetch("/room_imgs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                img: formData.img
            })
        })
        .then(r => r.json())
        .then(img => console.log(img))
    }

  return (
    <div className="mx-auto">
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                type="text"
                placeholder="Image url..."
                name="img"
                value={formData.img}
                onChange={handleChange}
                />
                <button className="ml-2 bg-blue-300 rounded h-10"type="submit">Upload</button>
            </div>
            <div>
            </div>
        </form>
    </div>
  )
}

export default RoomImageForm