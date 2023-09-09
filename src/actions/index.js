import { ADD_TODO } from "./types";

export const addToDo = (taskObj)=>({
    type:ADD_TODO,
    taskObj,
})