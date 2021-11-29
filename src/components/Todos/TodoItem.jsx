import React from 'react';
import classes from "./Todos.module.css";

const TodoItem = ({ id, completed, text, toggleCompleted, removeTodo }) => {
    return (
        <li className={classes.list} key={id}>
            <input type="checkbox" checked={completed} onChange={() => toggleCompleted(id)} />
            <span className={`${completed ? classes.completed : ''} ${classes.marg}`}>{text}</span>
            <span className={classes.delete}
                  onClick={() => removeTodo(id)}>&times;</span>
        </li>
    );
};

export default TodoItem;