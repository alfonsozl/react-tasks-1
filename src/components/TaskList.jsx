
import React, {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import TaskCard from './TaskCard'

const TaskList = () => {

    const { tasks } = useContext(TaskContext)
    
    if(tasks.length === 0) {
        return <h1 className='text-white text-4xl font-bold text-center mt-28'>You ran out of tasks!</h1>
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList