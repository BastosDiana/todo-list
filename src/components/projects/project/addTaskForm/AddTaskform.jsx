import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
    const [description, setDescription] = useState('');

    function handleAddBtnClick() {
        onAdd(description);
        setDescription('');
    }

    return (
        <div className='addTask__container'>
            <div className='addProject__content-line'></div>
            <div className='addProject__content'>
                <input
                    placeholder='Task'
                    name='description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} />
                <button onClick={() => handleAddBtnClick()}>Add</button>
            </div>
        </div>
    )
};

export default AddTaskForm;
