import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import authSlice from "./authSlice/AuthSlice";
import socketSlice from "./socketSlice/SocketSlice";
import postSlice from "./postSlice/PostSlice";

const rootReducer= combineReducers({
    auth:authSlice,
    post:postSlice,
    socketIO:socketSlice
})

const persistConfig={
    key:"root",
    version:1,
    storage,
    whiteList:['auth']
}

const persistedReducer=persistReducer(persistConfig,rootReducer)
const store=configureStore({
    reducer:persistedReducer,
})

const persistor=persistStore(store)

export default store
export {persistor}