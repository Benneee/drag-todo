import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import App from "./App";
import { ToDoList } from "./features/ToDoList/ToDoList";
import { ToDosKanban } from "./features/ToDosKanban/ToDosKanban";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<ToDoList />} />
        <Route path="advanced" element={<ToDosKanban />} />
      </Route>
    </>,
  ),
);
