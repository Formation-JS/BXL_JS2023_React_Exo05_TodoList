import style from './task-list.module.scss';
import PropTypes from 'prop-types';
import { priorityEnum } from '../../enums/priority.enum.js';

const TaskListItem = ({name, description, priority, isCompleted}) => (
    <article className={style['task'] + ' ' +(isCompleted ? style['finish'] : '')}>
        <div className={style['info']}>
            <p>{name} {priority == priorityEnum.urgent && <span className={style['urgent']}></span>}</p>
            <p>{description}</p>
        </div>
        <div className={style['action']}>
            <button disabled={isCompleted}>Terminer</button>
            <button>Supprimer</button>
        </div>
    </article>
);

const TaskList = ({tasks}) => {

    const tasksJSX = tasks.map(
        task => <TaskListItem {...task} key={task.id} />
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
    }))
};

TaskList.defaultProps = {
    tasks: []
};

export default TaskList;