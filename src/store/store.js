import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postSlice from "./postSlice";
import statusSlice from './statusSlice'
const store = configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice,
        status:statusSlice
    }
})

export default store;