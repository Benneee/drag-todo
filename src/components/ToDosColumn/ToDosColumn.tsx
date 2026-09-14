import { useDrop } from "react-dnd";
import cx from "clsx";
import { ToDo, ToDoColumn, ToDoStatus } from "../../types";
import { ToDoCard } from "../ToDoCard/ToDoCard";
import "./ToDosColumn.css";
import { ItemTypes } from "../../constants";
import { Ref } from "react";

interface Item {
  todo: ToDo;
}

interface ToDosColumnProps {
  columnTitle: ToDoColumn;
  todos: ToDo[];
  onMoveToDo: (newStatus: ToDoStatus, item: ToDo) => void;
}

export function ToDosColumn({ columnTitle, onMoveToDo, todos }: ToDosColumnProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TODO_ITEM,
    drop: (item: Item) => {
      moveToDo(item, columnTitle);
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
      isOver: !!monitor.isOver(),
    }),
  }));

  const moveToDo = (item: Item, columnTitle: ToDoColumn) => {
    switch (columnTitle) {
      case "To Do":
        onMoveToDo("pending", item.todo);
        break;
      case "In Progress":
        onMoveToDo("inProgress", item.todo);
        break;
      case "Completed":
        onMoveToDo("done", item.todo);
        break;
    }
  };

  return (
    <div className="todos-column" ref={drop as unknown as Ref<HTMLDivElement>}>
      <h3 className="column-title">{columnTitle}</h3>
      <div className={cx("container-card", { "container-card--over": isOver })}>
        {todos.map((todo) => (
          <ToDoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
