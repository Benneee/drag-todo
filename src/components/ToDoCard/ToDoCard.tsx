import { ToDo } from "../../types";
import "./ToDoCard.css";

interface ToDoCardProps {
  todo: ToDo;
}

export function ToDoCard({ todo }: ToDoCardProps) {
  return (
    <article className="todo-item-card">
      <p className="todo-item-card--name">{todo.name}</p>
      <span className="todo-item-card--date">Created {todo.createdAt}</span>
    </article>
  );
}
