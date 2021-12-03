import { createSlice } from "@reduxjs/toolkit";

const SpaceXRocetsgqlSlice = createSlice({
    name: 'rockets',
    initialState: {
        rockets: [],
    },
    reducers: {
        addRockets(state, action) {
            //lazyQuery
            // state.rockets = action.payload.data?.rockets
            //Query
            state.rockets = action.payload.data.rockets
        }
    }
})

export const { addRockets } = SpaceXRocetsgqlSlice.actions
export default SpaceXRocetsgqlSlice.reducer