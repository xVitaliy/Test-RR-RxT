import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import counterSlice from "./counterSlice";
import todosSlice from "./todosSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: usersSlice,
        todosItem: todosSlice
    }
})
window.store = store
