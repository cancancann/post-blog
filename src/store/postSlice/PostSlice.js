import { createSlice } from "@reduxjs/toolkit";


const PostSlice = createSlice({
    name:"postSlice",
    initialState:{
        posts:[]
    },
    reducers:{
        setPosts:(state,action)=>{
            state.posts=action.payload
        }
    }
})

export const {setPosts}=PostSlice.actions
export default PostSlice.reducer