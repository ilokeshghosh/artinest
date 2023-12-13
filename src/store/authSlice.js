import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = {
  status: false,
  userData: null,
};

// create Slice
const authSlice = createSlice({
  // slice name
  name: "auth",
  // initial state
  initialState,
  // create reducers
  reducers: {
    // create login reducer
    login: (state, action) => {
      state.status = true;
      // set userdata to state on login 
      // ! NOTE : always give object key as userData(when dispatching) like 'dispatch(login({userData:data}))' to avoid bugs or errors , because we are using 'payload.userData'
      state.userData = action.payload.userData;
    },
    // create logout reducer
    logout: (state) => {
      state.status = false;
      // set userdata to state to null on logout
      state.userData = null;
    }
  }
});


// export reducer functions 
export const { login, logout } = authSlice.actions;

// export reducer functions for store
export default authSlice.reducer;