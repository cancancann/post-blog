import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name:"authSlice",
    initialState:{
        user:null
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        }
    }
})

export const {setUser}=AuthSlice.actions
export default AuthSlice.reducer