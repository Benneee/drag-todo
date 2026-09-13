import { SubmitEvent, useState } from "react";
import { v7 as uuidv7 } from "uuid";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "./ToDoForm.css";
import { ToDo } from "../../types";

dayjs.extend(localizedFormat);

interface ToDoFormProps {
  onSubmit: (todo: ToDo) => void;
}

export default function ToDoForm({ onSubmit }: ToDoFormProps) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todoItem: ToDo = {
      id: uuidv7(),
      status: "pending",
      name: todo,
      createdAt: dayjs().format("LLL"),
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
