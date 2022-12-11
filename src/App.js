import { useState } from "react";

import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [list, setList] = useState([]);

  const handleChangeTask = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: list === 0 ? 1 : [list.length - 1].id + 1,
      taskName: newTask,
    };
    setList(task.taskName !== "" ? [...list, task] : list);
  };

  return (
    <div className="App">
      <div className="addTaskDiv">
        <input
          type="text"
          placeholder="any task"
          className="typeTask"
          onChange={handleChangeTask}
          value={newTask}
        />
        <button className="addTaskBtn" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="listDiv">
        {list.map((task) => {
          return (
            <div className="task">
              <h2>{task.taskName}</h2>
              <button>Complete</button>
              <button>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
