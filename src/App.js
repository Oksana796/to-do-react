import { useState } from "react";

import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      name: newTask,
    };
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTaskDiv">
        <input onChange={handleChange} type="text" placeholder="add task" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="listDiv">
        {toDoList.map((task) => (
          <div>
            <h2>{task.name}</h2>
            <button>Complete</button>
            <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
