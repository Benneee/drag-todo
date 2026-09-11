import { Outlet } from "react-router";
import "./App.css";
import { ToDosHeader } from "./components/ToDosHeader/ToDosHeader";

function App() {
  return (
    <>
      <ToDosHeader />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
