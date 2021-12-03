import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/todosAsyncSlice";
import TodoItem from "./TodoItem";


const TodosAsyncList = () => {
    const todos = useSelector(state => state.todosAsync.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id}
                                            id={todo.id}
                                            completed={todo.completed}
                                            title={todo.title} />)
            }
        </ul>
    );
};

export default TodosAsyncList;