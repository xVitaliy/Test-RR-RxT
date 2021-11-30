import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
            if (!response.ok) throw new Error('Sorry, Server error');
            return await response.json();

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (id, { rejectWithValue, dispatch, }) => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) throw new Error('Can\'t delete task. Server Error')
            dispatch(removeTodo(id))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async (id, { rejectWithValue, dispatch, getState }) => {
        const todo = getState().todosAsync.todos.find(todo => todo.id === id)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })
            if (!response.ok) throw new Error('Can\'t toggle task. Server Error')

            dispatch(toggleTodo({ id, todo }))

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async (text, { rejectWithValue, dispatch }) => {
        try {
            const todo = {
                userId: 1,
                title: text,
                completed: false
            }
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(todo)
            })
            if (!response.ok) throw new Error('Can\'t add new task. Server Error')

            const data = await response.json()
            dispatch(addTodo(data))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

export const todosAsyncSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        removeTodo(state, action) {
            console.log(action.payload)
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodo(state, action) {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            todo.completed = !todo.completed
        },
        addTodo(state, action) {
            console.log(action)
            state.todos.push(action.payload)
        },


    },

    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.todos = action.payload
        },
        [fetchTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
        [toggleStatus.rejected]: setError,
        // [deleteTodo.fulfilled]: (state, action) => {
        // console.log(action.meta.arg)
        // }
    }
})


const { removeTodo, toggleTodo, addTodo } = todosAsyncSlice.actions
export default todosAsyncSlice.reducer