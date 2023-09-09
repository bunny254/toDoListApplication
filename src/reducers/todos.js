import { ADD_TODO } from "../actions/types"

const initialState ={
    data:[],
}

const todos = (state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                data:[...state.data, action.taskObj],
            };
            default:
                return state;
    }
}

export default todos;