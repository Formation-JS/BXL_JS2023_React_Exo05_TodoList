import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from '../../components/task-form/task-form.jsx';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    const handleNewTask = (data) => {

        const task = {
            ...data,
            id: uuidv4(),
            isCompleted: false 
        }

        setTasks(tasks => [...tasks, task]);
    }

    return (
        <>
            <h1>Correction</h1>

            <h2>Ajouter une tache</h2>
            <TaskForm onTaskSubmit={handleNewTask} />
        </>
    );
};

export default TodoList;