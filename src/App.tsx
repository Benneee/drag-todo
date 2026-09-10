import "./App.css";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import { ToDo } from "./types";

function App() {
  const handleAddToDo = (todo: ToDo) => {
    console.log("todo: ", todo);
  };

  return (
    <main>
      <h1> ToDo List</h1>
      <div className="todo-card">
        <ToDoForm onSubmit={handleAddToDo} />
        <ToDoItem />
      </div>
    </main>
  );
}

export default App;
