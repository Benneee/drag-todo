import { NavLink } from "react-router";
import "./ToDosHeader.css";

export function ToDosHeader() {
  return (
    <>
      <header>
        <div className="header-content">
          <NavLink to="/">
            <h1 className="text-heading">DragToDo</h1>
          </NavLink>

          <nav className="header-links">
            <NavLink key="/" to="/" end={false}>
              <span>Simple Todos</span>
            </NavLink>
            <NavLink key="/advanced" to="/advanced" end={false}>
              <span>Advanced Todos</span>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
