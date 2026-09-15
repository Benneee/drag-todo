import { useDrag } from "react-dnd";
import { ToDo } from "../../types";
import "./ToDoCard.css";
import { ItemTypes } from "../../constants";
import { Ref } from "react";

interface ToDoCardProps {
  todo: ToDo;
}

export function ToDoCard({ todo }: ToDoCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TODO_ITEM,
    item: {
      todo,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <article
      className="todo-item-card"
      ref={drag as unknown as Ref<HTMLDivElement>}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
    >
      <p className="todo-item-card--name">{todo.name}</p>
      <span className="todo-item-card--date">Created {todo.createdAt}</span>
    </article>
  );
}
