import { useState } from "react";

const Task = () => {
  const OneTask = { toDisplay: "", deleted: false };
  const [task, setTask] = useState([OneTask]);

  const handleToDisplayChange = (event) => {
    const value = event.target.value;
    const newTab = [...task];
    newTab[newTab.length - 1].toDisplay = value;
    setTask(newTab);
  };
  const handleClick = (action, index) => {
    if (action === "Add-task") {
      const newTab = [...task];
      newTab.push(OneTask);
      setTask(newTab);
    } else if (action === "Delete-task") {
      const newTab = [...task];
      newTab[index].deleted = true;
    }
  };

  return (
    <main className="main">
      {task.map((elem, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="New task"
            value={task[index].toDisplay}
            onChange={handleToDisplayChange}
          ></input>
          <button
            type="submit"
            id="Add-task"
            onClick={() => {
              handleClick("Add-task", index);
            }}
          >
            Add task
          </button>
          <button
            id="Delete"
            onClick={() => {
              handleClick("Delete-task", index);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </main>
  );
};

export default Task;
