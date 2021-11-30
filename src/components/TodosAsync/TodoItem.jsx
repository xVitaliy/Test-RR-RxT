import React from 'react';
import classes from "./TodosAsync.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatus } from "../../redux/todosAsyncSlice";

const TodoItem = ({ title, completed, id }) => {
    const dispatch = useDispatch();


    return (
        <li className={classes.list}>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleStatus(id))} />
            <span className={`${completed && classes.completed} ${classes.text}`}>{title}</span>
            <span className={classes.delete} onClick={() => dispatch(deleteTodo(id))}>&times;</span>
        </li>
    );
};

export default TodoItem;