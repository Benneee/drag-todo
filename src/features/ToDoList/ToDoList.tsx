import { EmptyState } from "../../components/EmptyState/EmptyState";
import ToDoForm from "../../components/ToDoForm/ToDoForm";
import ToDoItem from "../../components/ToDoItem/ToDoItem";
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
      <h2 className="text-center">Manage your todos below</h2>
      <div className="todo-card">
        <ToDoForm onSubmit={handleAddToDo} />
        {allToDos.length > 0 ? <div className="todo-list">{toDoList}</div> : <EmptyState />}
      </div>
    </main>
  );
}
