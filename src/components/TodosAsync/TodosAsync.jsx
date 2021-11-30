import React from 'react';
import InputFieldAsync from "./InputFieldAsync";
import TodosAsyncList from "./TodosAsyncList";

const TodosAsync = () => {
    return (
        <div>
            <InputFieldAsync />
            <TodosAsyncList />
        </div>
    );
};

export default TodosAsync;