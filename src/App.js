import "./App.css";
import Task from "./components/Task";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faCircleCheck);

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Task />

      <footer>
        Made with ⚛︎ at <b>Le Reacteur</b> by <b>Mathias</b>
      </footer>
    </div>
  );
};

export default App;
