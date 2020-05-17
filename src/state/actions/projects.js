import api from '../../utils/APIClient';

export function toggleTask(projectId, taskId) {
    return (async dispatch => {
        // contact API to do the toggle
        try {
            const finishDate = await api.projects.toggleTask(projectId, taskId);
            dispatch(toggleTaskSuccess(projectId, taskId, finishDate));
        } catch (e) {
            // TODO
            console.error('toggleTaskFailure', e);
        }
    });
};

export function toggleTaskSuccess(projectId, taskId, finishDate) {
    return {
        type: 'TOGGLE_TASK_SUCCESS',
        payload: {
            projectId,
            taskId,
            finishDate
        }
    };
}

export function addTask(projectId, description) {
    console.log('addTask', { projectId, description })
    return (async dispatch => {
        // contact API to do the toggle
        try {
            const task = await api.projects.addTask(projectId, description);
            dispatch(addTaskSuccess(projectId, task));
        } catch (e) {
            // TODO
            console.error('addTaskFailure', e);
        }
    });
};

export function addTaskSuccess(projectId, task) {
    console.log('addTaskSuccess', { projectId, task })
    return {
        type: 'ADD_TASK_SUCCESS',
        payload: {
            projectId,
            task,
        }
    };
}