import "./App.css";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";

function App() {
  return (
    <main>
      <h1> ToDo List</h1>
      <div className="todo-card">
        <ToDoForm />
        <ToDoItem />
      </div>
    </main>
  );
}

export default App;
