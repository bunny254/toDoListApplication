import React from 'react'
import { useDispatch } from 'react-redux';
import { addToDo } from '../actions';
import cuid from 'cuid';

const AddTask = () => {
    const dispatch = useDispatch();
    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        //Validate if input is empty
        if(e.target.userInput.value){
          dispatch(addToDo({id:cuid(), task:e.target.userInput.value}))
          e.target.userInput.value= '';
        }
    }
  return (
    <div>
      <div className='flex justify-center items-center mt-8'>
      <form onSubmit={handleFormSubmit}>
      <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4   appearance-none leading-normal" type="text" placeholder="Example: Wash Dishes" name="userInput"/>
            
            <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  )
}

export default AddTask