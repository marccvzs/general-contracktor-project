import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';

function TasksClient() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('clients/tasks')
    .then(r => r.json())
    .then(tasksArray => setTasks(tasksArray))
  }, [])

  const tasksList = tasks.map(task => {
    return(
      <TaskCard key={task.id} task={task} />
    )
  })
  return (
    <div>Tasks</div>
  )
}

export default TasksClient