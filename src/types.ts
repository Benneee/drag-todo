type ToDoStatus = "done" | "pending" | "inProgress";

export interface ToDo {
  status: ToDoStatus;
  name: string;
  id: string; // use the uuid library
  createdAt?: string;
}
