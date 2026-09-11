import { ClearAllToDos } from "../../components/ClearAllToDos/ClearAllToDos";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import ToDoForm from "../../components/ToDoForm/ToDoForm";
import ToDoItem from "../../components/ToDoItem/ToDoItem";
import { ToDosSummary } from "../../components/ToDosSummary/ToDosSummary";
import {
  useAddTodo,
  useClearToDos,
  useDeleteTodo,
  useMarkAsDone,
  useTodosStore,
} from "../../hooks/use-todos";
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

  const clearAllToDos = useClearToDos();
  const handleClearAllToDos = () => {
    const hasConfirmedClearAction = window.confirm(
      `Are you sure you want to clear all your todos?`,
    );
    if (hasConfirmedClearAction) {
      clearAllToDos();
    } else {
      return;
    }
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
  const completedToDos = allToDos.filter((todo) => todo.isDone === true);

  return (
    <main className="simple-todos">
      <h2 className="text-center">Manage your todos below</h2>
      <div className="todo-card">
        <ToDoForm onSubmit={handleAddToDo} />
        <div className="info-clear-row">
          <ToDosSummary
            allToDosCount={allToDos.length}
            completedToDosCount={completedToDos.length}
          />
          <ClearAllToDos allToDosCount={allToDos.length} onClearAllToDos={handleClearAllToDos} />
        </div>
        {allToDos.length > 0 ? <div className="todo-list">{toDoList}</div> : <EmptyState />}
      </div>
    </main>
  );
}
