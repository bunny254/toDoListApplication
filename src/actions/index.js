import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./types";

export const addToDo = (taskObj)=>({
    type:ADD_TODO,
    taskObj,
})

export const delToDo = (id)=>({
    type:DELETE_TODO,
    id,
})

export const updateTodo = ({id, newTask})=>({
    type:UPDATE_TODO,
    id,
    newTask
})