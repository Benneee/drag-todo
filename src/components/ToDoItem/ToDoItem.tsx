import { Trash2Icon } from "@animateicons/react/lucide";
import { ChangeEvent } from "react";
import "./ToDoItem.css";

export default function ToDoItem() {
  const handleMarkAsDone = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    console.log("event: ", e.target.checked);
  };

  return (
    <div className="todo-item">
      <div className="todo-item--box">
        <input className="todo-item--checkbox" type="checkbox" onChange={handleMarkAsDone} />
        <p>Task name</p>
      </div>
      <div className="todo-item--trash">
        <Trash2Icon size={24} color="#17044a" className="trash-icon" />
      </div>
    </div>
  );
}
