import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    post:null,
    posts:[]
}

const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        setPosts:(state, action)=>{
            state.posts = action.payload
        },
        updatePosts:(state,action)=>{
            state.posts = state.posts.map(post=>{
                if(post.$id ===  action.payload.slug){
                    return {...action.payload.data}
                }else{
                    return post
                }
            })
        }
    }
})

export const {setPosts, updatePosts} = postSlice.actions

export default postSlice.reducer;