import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = {
    error: false,
    status: false,
    text: ''
}

// create Slice
const statusSlice = createSlice({
    // slice name
    name: 'status',
    // initial state
    initialState,
    // create reducers
    reducers: {
        // create updateStatus reducer
        updateStatus: (state, actions) => {
            state.status = true;
            state.error = actions.payload.error
            state.text = actions.payload.text;
        },
        // create clearStatus reducer
        clearStatus: (state) => {
            state.status = false;
            state.error = false;
            state.text = ''
        }
    }
})

// export reducer functions 
export const { updateStatus, clearStatus } = statusSlice.actions;

// export reducer functions for store
export default statusSlice.reducer;