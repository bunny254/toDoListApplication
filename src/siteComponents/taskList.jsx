import { useSelector } from "react-redux";
import ToDoItem from "./toDoItem";

const TaskList = () => {
  const taskObj = useSelector((state) => state.todos.data);
  const tasks = taskObj.map((task) => {
    return <ToDoItem task={task} key={task.id} />;
  });
  return (
    <div>
      <div>{tasks}</div>
    </div>
  );
};

export default TaskList;
