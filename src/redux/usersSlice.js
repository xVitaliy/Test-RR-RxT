import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        return await response.json()
    }
)

const initialState = {
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        removeUsers(state, action) {
            state.users = []
        }
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [fetchUsers.rejected]: (state, action) => {
        }
    }
})

export default usersSlice.reducer
export const { removeUsers } = usersSlice.actions