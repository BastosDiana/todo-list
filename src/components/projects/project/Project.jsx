import React from 'react';
import Task from './task/Task';

const Project = ({ id, name, tasks, onTaskToggle }) => {
    const unfinished = [];
    const finished = [];

    // classify the tasks according to their status, based on whether they have a finishDate, meaning they're done
    tasks.forEach((task) => {
        if (task.finishDate) {
            finished.push(task);
        } else {
            unfinished.push(task);
        }
    });

    return (
        <div>
            <div className='project__header'>{name}</div>
            <div className='project__todolist'>
                <div>To Do</div>
                <div className='task__label-unfinished'>
                    {unfinished.map(task => (
                        <Task
                            key={task.id}
                            {...task}
                            onToggle={() => onTaskToggle(task.id)} />
                    ))}
                </div>
                <div>Done</div>
                <div>
                    {finished.map(task => (
                        <Task
                            key={task.id}
                            {...task}
                            onToggle={() => onTaskToggle(task.id)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;
