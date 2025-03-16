import React, { useState } from 'react'
import './Style.css'

const TodoListObject = () => {
    const [task, setTask] = useState([
        {
            name: "Writing",
            status: "Complete"
        }
    ])

    const [newTask, setNewTask] = useState({
        name: '',
        status: "Complete"
    })

    const [change, setChange] = useState(null)

    const handleNameChage = (e) => {
        setNewTask({ ...newTask, name: e.target.value })
    }
    const handleStatusChange = (e) => {
        setNewTask({ ...newTask, status: e.target.value })
    }

    const AddTask = () => {
        if (newTask.name.trim() === '') return
        setTask([...task, newTask])
        setNewTask({ name: '', status: "Incomplete" })
    }

    const editTask = (index) => {
        setChange(index)
        setNewTask(task[index])
    }
    const deleteTask = (index) => {
        const deleted = task.filter((t, i) => i !== index)
        setTask(deleted)
    }

    const saveEdit = () => {
        const saved = task.map((t, i) =>
            i === change ? newTask : t
        )
        setTask(saved)
        setChange(null)
        setNewTask({ name: '', status: "Incomplete" })
    }
    return (
        <div>
            <input type="text" name="" id="" placeholder='Enter Task' value={newTask.name} onChange={handleNameChage} />

            <select name="" id="" value={newTask.status} onChange={handleStatusChange}>
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Complete</option>
            </select>
            <br/>
            
            {
                change === null ? (<button onClick={AddTask}>Add</button>
                ) : (
                    <button onClick={saveEdit}>Update</button>

                )
            }

            <ul>
                {
                    task.map((item, index) => (
                        <li key={index}>{item.name}-{item.status}
                            <button onClick={() => editTask(index)}>Edit</button>
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoListObject