const projects = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_TASK_SUCCESS':
            return toggleTaskSuccessReducer(state, action);
        case 'ADD_TASK_SUCCESS':
            return addTaskSuccessReducer(state, action);
        case 'DELETE_TASK_SUCCESS':
            return deleteTaskSuccessReducer(state, action);
        default:
            return state;
    }
};

function toggleTaskSuccessReducer(state, action) {
    const { projectId, taskId, finishDate } = action.payload;

    return state.map((project) => {
        // if this is the project that changed
        if (project.id === projectId) {
            return {
                ...project,
                tasks: project.tasks.map((task) => {
                    if (task.id === taskId) {
                        return {
                            ...task,
                            finishDate: finishDate,
                        };
                    }

                    return task;
                })
            };
        }

        // project was unchanged
        return project;
    });
}

function addTaskSuccessReducer(state, action) {
    const { projectId, task } = action.payload;

    return state.map((project) => {
        // if this is the project that changed
        if (project.id === projectId) {
            return {
                ...project,
                tasks: [task, ...project.tasks]
            };
        }

        // project was unchanged
        return project;
    });
}

function deleteTaskSuccessReducer(state, action) {

}

export default projects;