import React, { useState } from 'react'
import "./TodoList.css"

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTask = () => {
        if(inputValue.trim() !== ""){
            setTasks([...tasks, { text: inputValue, completedTasks: false}]);
            setInputValue("");
        }
    }

    const handleDelete = (index) => {
        setTasks(tasks.filter((i) => i !== tasks[index]));
    }

    const handleCheck = index => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completedTasks = !updatedTasks[index].completedTasks;
        setTasks(updatedTasks);
    }

  return (
    <div className='container'>
        <h1>Todo List</h1>
        <div className='input-box'>
            <input type="text" placeholder="Enter a task..." value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    
        <ul>
            {
                tasks && 
                tasks.map((task, index) => (
                    <li key={index}>
                        <span style={task.completedTasks ? styles.strike : styles.simple } onClick={() => handleCheck(index)}>{task.text}</span>
                        <button onClick={() => handleDelete(index)}>
                            delete
                        </button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

const styles = {
    strike: {
        textDecoration: "line-through",
    },
    simple: {
        textDecoration: "none",
    }
}

export default TodoList