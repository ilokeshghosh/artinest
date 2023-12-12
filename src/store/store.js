// imports
import { configureStore } from "@reduxjs/toolkit";

// import authSlice 
import authSlice from "./authSlice";
// import postSlice 
import postSlice from "./postSlice";
// import statusSlice
import statusSlice from './statusSlice'

// configure store
const store = configureStore({
    reducer: {
        // providing authSlice to store
        auth: authSlice,
        // providing postSlice to store
        post: postSlice,
        // providing statusSlice to store
        status: statusSlice
    }
})

// export store
export default store;