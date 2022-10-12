import { createSlice } from "@reduxjs/toolkit";


const SocketSlice = createSlice({
    name:"socketSlice",
    initialState:{
        socketID:''
    },
    reducers:{
        setSocketID:(state,action)=>{
            state.socketID=action.payload
        }
    }
})

export const {setSocketID}=SocketSlice.actions
export default SocketSlice.reducer