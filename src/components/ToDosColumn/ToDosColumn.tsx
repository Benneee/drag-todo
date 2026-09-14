import { ToDo } from "../../types";
import { ToDoCard } from "../ToDoCard/ToDoCard";
import "./ToDosColumn.css";

interface ToDosColumnProps {
  columnTitle: string;
  todos: ToDo[];
}

export function ToDosColumn({ columnTitle, todos }: ToDosColumnProps) {
  return (
    <div className="todos-column">
      <h3 className="column-title">{columnTitle}</h3>
      <div className="container-card">
        {todos.map((todo) => (
          <ToDoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
