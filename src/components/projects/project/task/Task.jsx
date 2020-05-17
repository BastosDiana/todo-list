import React from 'react';

const Task = ({ id, description, finishDate, onToggle }) => {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={!!finishDate}
                    onChange={() => onToggle()} />
                {description}
            </label>
        </div>
    )
};

export default Task;
