import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleCheck,
  faCircleDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCircleCheck, faCircle, faCircleDown);

const Task = () => {
  const task = { toDisplay: "", deleted: false };
  const [tasks, setTask] = useState([task]);

  const handleDelete = (index) => {
    const newTab = [...tasks];
    newTab[index].deleted = !newTab[index].deleted;
    setTask(newTab);
  };
  const handleAddTask = () => {
    const newTab = [...tasks];
    newTab.push(task);
    setTask(newTab);
  };
  const handleResetList = () => {
    setTask([task]);
  };

  return (
    <main className="main">
      <div className="resetAndAddButtons">
        <button
          id="reset"
          onClick={() => {
            handleResetList();
          }}
        >
          Reset the list
        </button>
        <button
          type="submit"
          id="add-task"
          onClick={() => {
            handleAddTask();
          }}
        >
          Add task
        </button>
      </div>
      {tasks.map((elem, index) => (
        <div className="body" key={index}>
          <button
            className="delete"
            onClick={() => {
              handleDelete(index);
            }}
            checked
          >
            <div className="icon">{elem.deleted ? "☑︎" : "◻︎"}</div>
          </button>
          <input
            className={elem.deleted ? "crossed" : "notCrossed"}
            type="text"
            placeholder="New task"
            value={elem.toDisplay}
            onChange={(evt) =>
              setTask((tasks) => {
                let newTab = [...tasks];
                newTab[index].toDisplay = evt.target.value;
                return newTab;
              })
            }
          />
        </div>
      ))}
    </main>
  );
};

export default Task;
