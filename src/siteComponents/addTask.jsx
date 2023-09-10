import React from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions";
import cuid from "cuid";
import { IoMdAdd } from "react-icons/io";

const AddTask = () => {
  const dispatch = useDispatch();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //Validate if input is empty
    if (e.target.userInput.value) {
      dispatch(addToDo({ id: cuid(), task: e.target.userInput.value }));
      e.target.userInput.value = "";
    }
  };
  return (
    <div>
      <form className="p-3 flex justify-around" onSubmit={handleFormSubmit}>
        <input
          className="p-3 focus:outline-none w-[90%] border border-slate-400"
          type="text"
          placeholder="Example: Wash Dishes"
          name="userInput"
        />

        <button
          className="cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center"
          type="submit"
        >
          <IoMdAdd/>
        </button>
      </form>
    </div>
  );
};

export default AddTask;
