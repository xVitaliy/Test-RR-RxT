import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleCompleted, removeTodo }) => {
    return (
        <ul>
            {todos.map(todo => <TodoItem key={todo.id}
                                         id={todo.id}
                                         completed={todo.completed}
                                         text={todo.text}
                                         toggleCompleted={toggleCompleted}
                                         removeTodo={removeTodo}
            />)}
        </ul>
    );
};

export default TodoList;