export type ToDoStatus = "done" | "pending" | "inProgress";
export type ToDoColumn = "To Do" | "In Progress" | "Completed";

export interface ToDo {
  status: ToDoStatus;
  name: string;
  id: string; // use the uuid library
  createdAt?: string;
}
