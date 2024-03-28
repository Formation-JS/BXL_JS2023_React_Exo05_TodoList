import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from '../../components/task-form/task-form.jsx';
import TaskList from '../../components/task-list/task-list.jsx';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    const handleNewTask = (data) => {

        const task = {
            ...data,
            id: uuidv4(),
            isCompleted: false 
        }

        setTasks(tasks => [...tasks, task]);
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const handleCompleteTask = (id) => {
        setTasks(tasks => tasks.map(task => (task.id !== id) ? task : {...task, isCompleted: true}));

        // setTasks(tasks => {
        //     const task = tasks.find(t => t.id === id);
        //     task.isCompleted = true;
        //     return [...tasks];
        // });
    }

    return (
        <>
            <h1>Correction</h1>

            <h2>Ajouter une tache</h2>
            <TaskForm onTaskSubmit={handleNewTask} />

            <h2>Liste des taches</h2>
            <TaskList tasks={tasks}
                onTaskDelete={handleDeleteTask}
                onTaskComplete={handleCompleteTask}/>
        </>
    );
};

export default TodoList;