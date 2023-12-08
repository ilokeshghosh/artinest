import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: false,
    status: false,
    text: ''
}

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        updateStatus: (state, actions) => {
            state.status = true;
            state.error = actions.payload.error
            state.text = actions.payload.text;


            // state.status = false;
        },
        clearStatus: (state) => {
            state.status = false;
            state.error = false;
            state.text = ''
        }
    }
})

export const { updateStatus, clearStatus } = statusSlice.actions;
export default statusSlice.reducer;