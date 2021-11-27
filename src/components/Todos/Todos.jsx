import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/todosSlice";

const Todos = () => {
    console.log('render')
    const dispatch = useDispatch();
    const stateTodos = useSelector(state => state.todos.todos)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])


    let res = stateTodos.map(todo => <pre key={todo.id}>
        {JSON.stringify(todo)}
    </pre>)

    return (
        <div>
            {res}
        </div>
    );
};

export default Todos;