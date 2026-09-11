import { SubmitEvent, useState } from "react";
import { v7 as uuidv7 } from "uuid";
import "./ToDoForm.css";
import { ToDo } from "../../types";

interface ToDoFormProps {
  onSubmit: (todo: ToDo) => void;
}

export default function ToDoForm({ onSubmit }: ToDoFormProps) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todoItem: ToDo = {
      id: uuidv7(),
      isDone: false,
      name: todo,
    };

    onSubmit(todoItem);
    setTodo("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        placeholder="What would you like to do today?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
