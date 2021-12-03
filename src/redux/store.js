import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import counterSlice from "./counterSlice";
import todosSlice from "./todosSlice";
import todosAsyncSlice from "./todosAsyncSlice";
import SpaceXRocetsgqlSlice from "./SpaseX_Rocets_gql";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: usersSlice,
        todosItem: todosSlice,
        todosAsync: todosAsyncSlice,
        SpaceXRockets: SpaceXRocetsgqlSlice,
    }
})
window.store = store
