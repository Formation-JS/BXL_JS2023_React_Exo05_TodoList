import { useState } from 'react';
import TaskForm from '../../components/task-form/task-form.jsx';

const TodoList = () => {
     const [tasks, setTasks] = useState([]);

    return (
        <>
            <h1>Correction</h1>
            
            <h2>Ajouter une tache</h2>
            <TaskForm />
        </>
    );
};

export default TodoList;