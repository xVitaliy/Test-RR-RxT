import React from 'react';
import classes from "./TodosToolkit.module.css";
import { useDispatch } from "react-redux";
import { removeTodos, toggleTodosCompleted } from "../../redux/todosSlice";

const TodoItem = ({ text, completed, id }) => {
    const dispatch = useDispatch();

    return (
        <li className={classes.listItem}>
            <input onChange={() => dispatch(toggleTodosCompleted({ id }))}
                   checked={completed}
                   type="checkbox"
            />
            <span className={`${completed && classes.completed} ${classes.text}`}>{text}</span>
            <span className={classes.delete}
                  onClick={() => dispatch(removeTodos({ id }))}>&times;</span>

        </li>
    );
};

export default TodoItem;