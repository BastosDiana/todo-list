const fakeAPI = {
    auth: {

    },
    projects: {
        addProject: (name) => {
            return Promise.resolve({
                id: name + Math.ceil(Math.random() * 1000), // generate some random id for testing, for now
                name,
                tasks: [],
            });
        },
        deleteProject: (projectId) => Promise.resolve({ projectId }),
        updateProject: (projectId, newDetails) => { },

        addTask: (projectId, description) => {
            return Promise.resolve({
                id: 'task' + Math.ceil(Math.random() * 1000), // generate some random id for testing, for now
                description,
                finishDate: null,
            });
        },
        deleteTask: (projectId, taskId) => Promise.resolve({
            projectId,
            taskId,
        }),
        toggleTask: (projectId, taskId) => {
            // TODO: replace with fetch, accessing the API
            return Promise.resolve(Date.now()); // simulate task is now done
            //return (Promise.resolve(null)); // simulate task is pending
            //return (Promise.reject(new Error('Unexpected error')); // simulate error contacting API
        },
    },
};

export default fakeAPI;