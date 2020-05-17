import React from 'react';

const AddProjectForm = () => {
    return (
        <div className='addProject__container'>
            Create a new project
            <div>
                <input placeholder='Project name' />
            </div>
            <div>
                <button>Create Project</button>
            </div>
        </div>
    );
};

export default AddProjectForm;
