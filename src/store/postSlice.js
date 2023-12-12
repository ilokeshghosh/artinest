import { createSlice } from '@reduxjs/toolkit'

// create initial state
const initialState = {
    post: null,
    posts: []
}

// create Slice
const postSlice = createSlice({
    // slice name
    name: 'post',
    // initial state
    initialState,
    // create reducers
    reducers: {
        // create setPost reducer
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        // create updatePosts reducer
        updatePosts: (state, action) => {
            // update post when post id matches
            state.posts = state.posts.map(post => {
                if (post.$id === action.payload.slug) {
                    return { ...action.payload.data }
                } else {
                    return post
                }
            })
        }
    }
})

// export reducer functions 
export const { setPosts, updatePosts } = postSlice.actions

// export reducer functions for store
export default postSlice.reducer;