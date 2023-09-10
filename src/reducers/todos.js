import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/types"

const tasks = localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')):[];

//Declaring Item's initial state
const initialState ={
    data: tasks,
}

const todos = (state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                data:[...state.data, action.taskObj],
            };
        case DELETE_TODO:
            return{
                ...state,
                data:[...state.data.filter((todo)=>todo.id !== action.id)]
            }
        case UPDATE_TODO:
            return {
                ...state,
                data:[...state.data.filter((todo)=>todo.id !== action.id),({task:action.newTask, id:action.id})]
            }
            default:
                return state;
    }
}

export default todos;