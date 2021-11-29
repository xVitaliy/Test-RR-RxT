import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        newMessage: '',
    },
    reducers: {
        setText(state, action) {
            state.newMessage = action.payload
        },
        addTodos(state, action) {
            let obj = {
                id: new Date().toISOString(),
                text: state.newMessage,
                completed: false,
            }
            if (obj.text.length === 0) return
            state.todos.push(obj);
            state.newMessage = ''
        },
        removeTodos(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)

        },
        toggleTodosCompleted(state, action) {
            const targetObj = state.todos.find(todo => todo.id === action.payload.id)
            targetObj.completed = !targetObj.completed
        }
    }
})

export const { addTodos, removeTodos, toggleTodosCompleted, setText } = todosSlice.actions
export default todosSlice.reducer
