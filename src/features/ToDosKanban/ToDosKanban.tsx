import "./ToDosKanban.css";

export function ToDosKanban() {
  return (
    <main className="advanced-todos">
      <h2>Track all your todos here</h2>

      <div className="todos-board">
        <div className="todos-column">
          <h3 className="column-title">To Do</h3>
          <div className="container-card"></div>
        </div>

        <div className="todos-column">
          <h3 className="column-title">In Progress</h3>
          <div className="container-card"></div>
        </div>

        <div className="todos-column">
          <h3 className="column-title">Completed</h3>
          <div className="container-card"></div>
        </div>
      </div>
    </main>
  );
}
