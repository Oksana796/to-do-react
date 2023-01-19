import { useState } from "react";
import Task from "./Task";

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
      completed: false,
    };
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTaskDiv">
        <input onChange={handleChange} type="text" placeholder="Add task" maxLength={30} />
        <button onClick={addTask}>Add </button>
      </div>
      <div className="listDiv">
        {toDoList.map((task) => {
          return (
            <Task
              name={task.name}
              id={task.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
              completed={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
