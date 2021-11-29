import React from 'react';

const TodoInputField = ({ text, addTodo, inputRedact, }) => {
    return (
        <div>
            <span><input value={text} onChange={inputRedact} /></span>
            <span><button onClick={addTodo}>addTodo</button></span>
        </div>
    );
};

export default TodoInputField;