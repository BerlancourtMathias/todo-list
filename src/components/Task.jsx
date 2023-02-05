import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    if (action === "Delete-task") {
      const newTab = [...task];
      newTab[index].deleted = true;
      setTask(newTab);
    } else if (action === "Add-task") {
      const newTab = [...task];
      newTab.push(OneTask);
      setTask(newTab);
    }
  };

  return (
    <main className="main">
      <button
        className="Add"
        type="submit"
        id="Add-task"
        onClick={() => {
          handleClick("Add-task");
        }}
      >
        Add task
      </button>
      {task.map((elem, index) => (
        <div className="body" key={index}>
          <button
            className="Delete"
            onClick={() => {
              handleClick("Delete-task", index);
            }}
            checked
          >
            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
          </button>
          <input
            className={task[index].deleted ? "crossed" : "notCrossed"}
            type="text"
            placeholder="New task"
            value={task[index].toDisplay}
            onChange={handleToDisplayChange}
          ></input>
        </div>
      ))}
    </main>
  );
};

export default Task;
