import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { delToDo, updateTodo } from "../actions";

const ToDoItem = ({ task }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState();
  const [done, setDone] = useState(false);

  const handleTaskUpdate = (e) => {
    e.preventDefault();
    if (e.target.updatedTask.value) {
      dispatch(
        updateTodo({ id: task.id, newTask: e.target.updatedTask.value })
      );
    }
    setEdit(false);
  };

  if (!edit)
    return (
      <div>
        <div onClick={() => setDone(!done)} className='select-none cursor-pointer w-full border-b p-3 flex justify-between items-center'>
          <span className={`${done === true? 'line-through' : ''}`}>
          {task.task}            
            </span>    
          <div className="flex gap-8">
            <button type="submit" onClick={() => setEdit(true)}>
              Edit
            </button>
            <button onClick={() => dispatch(delToDo(task.id))}>Delete</button>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="flex justify-center items-center mt-8">
        <form onSubmit={handleTaskUpdate}>
          <input
            defaultValue={task.task}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4   appearance-none leading-normal"
            type="text"
            placeholder="Example: Wash Dishes"
            name="updatedTask"
          />

          <button type="submit">Confirm</button>
        </form>
      </div>
    );
};

export default ToDoItem;
