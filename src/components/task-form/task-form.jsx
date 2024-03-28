import { useId, useState } from 'react';
import PropTypes from 'prop-types';
import style from './task-form.module.scss';
import { priorityEnum } from '../../enums/priority.enum.js';

const TaskForm = ({ onTaskSubmit }) => {
    const formId = useId();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [prio, setPrio] = useState(priorityEnum.normal);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Objet data a envoyé
        const data = {
            name,
            description: desc,
            priority: prio
        };

        // Event avec les data vers le composant parent
        onTaskSubmit(data);

        // Cleanup du formulaire
        setName('');
        setDesc('');
        setPrio(priorityEnum.normal);
    };

    return (
        <form className={style['form-task']} onSubmit={handleSubmit}>

            <label htmlFor={formId + '-name'}>Nom</label>
            <input id={formId + '-name'} type="text" required
                value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor={formId + '-desc'}>Description</label>
            <textarea id={formId + '-desc'}
                value={desc} onChange={(e) => setDesc(e.target.value)} />

            <label htmlFor={formId + '-prio'}>Priorité</label>
            <select id={formId + '-prio'}
                value={prio} onChange={(e) => setPrio(e.target.value)}>
                <option value={priorityEnum.low}>Basse</option>
                <option value={priorityEnum.normal}>Normal</option>
                <option value={priorityEnum.urgent}>Urgent</option>
            </select>

            <button type="submit">Ajouter</button>
        </form>
    );
};

TaskForm.propTypes = {
    onTaskSubmit: PropTypes.func
};

TaskForm.defaultProps = {
    onTaskSubmit: () => { }  // Noop
}

export default TaskForm;