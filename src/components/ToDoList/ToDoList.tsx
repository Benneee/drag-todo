import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoItem from "../ToDoItem/ToDoItem";
import { useAddTodo, useDeleteTodo, useMarkAsDone, useTodosStore } from "../../hooks/use-todos";
import { ToDo } from "../../types";
import "./ToDoList.css";

export function ToDoList() {
  const addToDo = useAddTodo();
  const handleAddToDo = (todo: ToDo) => {
    addToDo(todo);
  };

  const markToDoAsDone = useMarkAsDone();
  const handleMarkAsDone = (todo: ToDo) => {
    markToDoAsDone(todo);
  };

  const deleteToDo = useDeleteTodo();
  const handleDeleteTodo = (todo: ToDo) => {
    deleteToDo(todo);
  };

  const allToDos = useTodosStore((state) => state.todos);
  const toDoList = allToDos.map((todo) => (
    <ToDoItem
      key={todo.id}
      onDeleteToDo={handleDeleteTodo}
      onMarkAsDone={handleMarkAsDone}
      todo={todo}
    />
  ));

  return (
    <main>
      <h1> ToDo List</h1>
      <div className="todo-card">
        <ToDoForm onSubmit={handleAddToDo} />
        <div className="todo-list">{toDoList}</div>
      </div>
    </main>
  );
}
