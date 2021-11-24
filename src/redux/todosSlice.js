import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        return await response.json()
    }
)

const initialState = {
    todos: [],
    status: null,
    error: null
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
        },

        [fetchTodos.fulfilled]: (state, action) => {
            state.todos = action.payload
        },

        [fetchTodos.rejected]: (state, action) => {
        },

    }
})


// export const {} = todosSlice.actions
export default todosSlice.reducer