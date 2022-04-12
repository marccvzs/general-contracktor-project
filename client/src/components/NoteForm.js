import React, { useState } from 'react';

function NoteForm() {
    const [formData, setFormData] = useState({
        priority: '',
        description: '',
    })

    function handleSubmit(e) {
        e.preventDefault();
        
    }

    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        setFormData({
            ...formData,
            [name]: value
        });
    }

  return (
    <div className="my-auto  border-2 rounded-md">
        <form onSubmit={handleSubmit}>
            <div className="mx-auto">
                <select 
                type="text" 
                placeholder="Priority" 
                name="priority"
                value={formData.priority} 
                onChange={handleChange}>
                    <option >Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>
            <textarea 
            placeholder="Enter note here..." 
            name="description"
            value={formData.description} 
            onChange={handleChange} 
            />
            <button 
            className="bg-blue-500 hover:bg-blue-600"
            type="submit">Submit</button>
        </form>
    </div>
  )
}

export default NoteForm