const Task = (props) => {
  return (
    <div
      className="task"
      style={{ background: props.completed ? "green" : "white" }}
    >
     
        <h3>{props.name}</h3>
        <button onClick={() => props.completeTask(props.id)}>Done</button>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
      
    </div>
  );
};

export default Task;
