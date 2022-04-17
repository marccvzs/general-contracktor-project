import React, { useState } from 'react';

function TaskForm() {
    const [formData, setFormData] = useState({
        name: '', 
        completed: false,
        hours: 0,
        description: '',
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
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                type="text"
                placeholder="Task Name..."
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div>
                <checkbox />
            </div>
            <div>
                <input 
                type="text"
                placeholder="Estimated hour to complete"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                />
            </div>
            <div>
                <textarea 
                type="text"
                placeholder="Describe the task..."
                name="description"
                value={formData.description}
                onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default TaskForm