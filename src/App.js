import AddTask from "./siteComponents/addTask";
import TaskList from "./siteComponents/taskList";

function App() {
  return (
    <div className="App">
      <div className="bg-black h-screen p-3">
        <p className="flex justify-center font-bold text-white text-xl mb-1">TASKS</p>
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
      <AddTask/>
      <TaskList/>
      </div>
      </div>
    </div>
  );
}

export default App;
