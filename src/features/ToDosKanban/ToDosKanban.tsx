import { ToDosColumn } from "../../components/ToDosColumn/ToDosColumn";
import { useTodosStore } from "../../hooks/use-todos";
import { ToDo, ToDoStatus } from "../../types";
import { useUpdateToDoStatus } from "../../hooks/use-todos";
import "./ToDosKanban.css";

export function ToDosKanban() {
  const allToDos = useTodosStore((state) => state.todos);
  const pendingToDos = allToDos.filter((todo) => todo.status === "pending");
  const completedToDos = allToDos.filter((todo) => todo.status === "done");
  const inProgressToDos = allToDos.filter((todo) => todo.status === "inProgress");

  const updateToDoStatus = useUpdateToDoStatus();
  const handleMoveToDo = (newStatus: ToDoStatus, item: ToDo) => {
    updateToDoStatus(newStatus, item);
  };

  return (
    <main className="advanced-todos">
      <h2>Track all your todos here</h2>

      <div className="todos-board">
        {/*Pending*/}
        <ToDosColumn columnTitle="To Do" onMoveToDo={handleMoveToDo} todos={pendingToDos} />

        {/*In Progress*/}
        <ToDosColumn
          columnTitle="In Progress"
          onMoveToDo={handleMoveToDo}
          todos={inProgressToDos}
        />

        {/*Completed*/}
        <ToDosColumn columnTitle="Completed" onMoveToDo={handleMoveToDo} todos={completedToDos} />
      </div>
    </main>
  );
}
