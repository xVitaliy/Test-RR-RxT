import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import usersSlice from "./usersSlice";
import todosSlice from "./todosSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: usersSlice,
        todos: todosSlice,
    }
})
window.store = store
