
import React, {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

const TaskForm = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({
      title,
      description
    })
    setTitle("")
    setDescription("")
  }

  return (
    <div className='max-w-md mx-auto'>
        <form
          className='bg-slate-800 p-10 mb-4 rounded-md'
          onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold text-white mb-5'>Add your task</h1>
            <input placeholder="Write your task"
              className='bg-slate-300 p-3 w-full mb-2 rounded-md'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus/>
            <textarea placeholder='Write your task description'
              className='bg-slate-300 p-3 w-full mb-2 rounded-md'
              onChange={(e) => setDescription(e.target.value)}
              value={description}></textarea>
            <button className='bg-green-600 px-3 py-1 text-white hover:bg-cyan-500 rounded-md'>Add</button>
        </form>
    </div>
  )
}

export default TaskForm