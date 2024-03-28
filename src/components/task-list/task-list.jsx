import style from './task-list.module.scss';
import PropTypes from 'prop-types';
import { priorityEnum } from '../../enums/priority.enum.js';

const TaskListItem = ({id, name, description, priority, isCompleted, onDelete, onCompete}) => (
    <article className={style['task'] + ' ' +(isCompleted ? style['finish'] : '')}>
        <div className={style['info']}>
            <p>{name} {priority == priorityEnum.urgent && <span className={style['urgent']}></span>}</p>
            <p>{description}</p>
        </div>
        <div className={style['action']}>
            <button onClick={() => onCompete(id)} disabled={isCompleted}>Terminer</button>
            <button onClick={() => onDelete(id)}>Supprimer</button>
        </div>
    </article>
);

const TaskList = ({tasks, onTaskDelete, onTaskComplete}) => {

    const tasksJSX = tasks.map(
        (task) => <TaskListItem {...task} 
                    key={task.id}
                    onDelete={onTaskDelete}
                    onCompete={onTaskComplete} />
    );

    return (
        <section className={style['task-list']}>
            {tasksJSX}
        </section>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired
    })),
    onTaskDelete: PropTypes.func,
    onTaskComplete: PropTypes.func
};

TaskList.defaultProps = {
    tasks: [],
    onTaskDelete: () => {},
    onTaskComplete: () => {}
};

export default TaskList;