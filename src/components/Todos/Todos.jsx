import React, { useState } from 'react';
import TodoInputField from "./TodoInputField";
import TodoList from "./TodoList";


const Todos = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const inputRedact = (e) => {
        setText(e.target.value)
    }
    const addTodo = () => {
        if (text.trim().length === 0) return
        setTodos([
            ...todos,
            {
                id: new Date().toISOString(),
                text,
                completed: false,
            }
        ])
        setText('')
    }
    window.todos = todos

    const toggleCompleted = (todoId) => {
        setTodos(todos.map(todo => {
            if (todoId !== todo.id) return todo
            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    return (
        <div>
            <TodoInputField text={text} inputRedact={inputRedact} addTodo={addTodo} />
            <TodoList removeTodo={removeTodo} toggleCompleted={toggleCompleted} todos={todos} />

        </div>
    );
};

export default Todos;