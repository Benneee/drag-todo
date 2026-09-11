import { Trash2Icon } from "@animateicons/react/lucide";
import cx from "clsx";
import "./ToDoItem.css";
import { ToDo } from "../../types";

interface ToDoItemProps {
  onDeleteToDo: (todo: ToDo) => void;
  onMarkAsDone: (todo: ToDo) => void;
  todo: ToDo;
}

export default function ToDoItem({ onDeleteToDo, onMarkAsDone, todo }: ToDoItemProps) {
  const handleMarkAsDone = () => {
    onMarkAsDone(todo);
  };

  const handleDeleteTodo = () => {
    const hasConfirmedDeleteAction = window.confirm(
      `Are you sure you want to delete: ${todo.name}`,
    );
    if (hasConfirmedDeleteAction) {
      onDeleteToDo(todo);
    } else {
      return;
    }
  };

  return (
    <div className="todo-item">
      <div className="todo-item--box">
        <input
          className="todo-item--checkbox"
          type="checkbox"
          onChange={handleMarkAsDone}
          checked={todo.isDone}
        />
        <p className={cx("item-name", { strikethrough: todo.isDone })}>{todo.name}</p>
      </div>
      <div className="todo-item--trash">
        <Trash2Icon onClick={handleDeleteTodo} size={24} color="#17044a" className="trash-icon" />
      </div>
    </div>
  );
}
