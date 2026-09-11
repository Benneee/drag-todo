import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ToDo } from "../types";
import { TODOS_KEY } from "../constants";

interface TodosState {
  todos: ToDo[];
  addTodo: (todo: ToDo) => void;
  deleteTodo: (todo: ToDo) => void;
  deleteAllTodos: () => void;
  markToDoAsDone: (todo: ToDo) => void;
}

// create the todos store with local storage
export const useTodosStore = create<TodosState>()(
  persist(
    (set, get, store) => ({
      todos: [],
      addTodo: (todo: ToDo) => {
        // I don't want duplicate todos
        const existingToDos: ToDo[] = get().todos;
        const noDuplicates = [
          ...new Map([todo, ...existingToDos].map((item) => [item.id, item])).values(),
        ];
        set({ todos: noDuplicates });
        return noDuplicates;
      },
      deleteAllTodos: () => {
        useTodosStore.persist.clearStorage();
        set(store.getInitialState(), true);
      },
      deleteTodo: (todo: ToDo) => {
        const existingToDos: ToDo[] = get().todos;
        const updatedToDos = existingToDos.filter((item) => item.id !== todo.id);
        set({ todos: updatedToDos });
        return updatedToDos;
      },
      markToDoAsDone: (todo: ToDo) => {
        const existingToDos: ToDo[] = get().todos;
        const updatedToDos = existingToDos.map((item) =>
          item.id === todo.id ? { ...item, isDone: !item.isDone } : item,
        );
        set({ todos: updatedToDos });
        return updatedToDos;
      },
    }),
    {
      name: TODOS_KEY,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export function useAddTodo() {
  const addToToDos = useTodosStore((state) => state.addTodo);
  return (payload: ToDo) => addToToDos(payload);
}

export function useDeleteTodo() {
  const removeFromToDos = useTodosStore((state) => state.deleteTodo);
  return (payload: ToDo) => removeFromToDos(payload);
}

export function useMarkAsDone() {
  const markToDoAsDone = useTodosStore((state) => state.markToDoAsDone);
  return (payload: ToDo) => markToDoAsDone(payload);
}

export function useClearToDos() {
  const clearToDos = useTodosStore((state) => state.deleteAllTodos);
  return () => clearToDos();
}
