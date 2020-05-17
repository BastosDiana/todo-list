import React from 'react';
import Project from './project/Project';
import AddProjectForm from './addProjectForm/AddProjectForm';
import AddTaskForm from './project/addTaskForm/AddTaskform';
import './Project.css';

const ProjectList = ({ projects, onProjectTaskToggle, onProjectAddTask }) => {
    return (
        <div className='projects__container'>
            {projects.map(project => (
                <div className='project__content' key={project.id}>
                    <Project
                        {...project}
                        onTaskToggle={(taskId) => onProjectTaskToggle(project.id, taskId)} />
                    <AddTaskForm onAdd={(description) => onProjectAddTask(project.id, description)} />
                </div>
            ))}
            <AddProjectForm />
        </div>
    );
};

export default ProjectList;
