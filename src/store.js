//Configuring our reducers to the store

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({reducer: rootReducer})

store.subscribe(()=>{
    const state = store.getState();
    localStorage.setItem('toDoApp', JSON.stringify(state))
})
export default store;
