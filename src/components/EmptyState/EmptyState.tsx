import "./EmptyState.css";

export function EmptyState() {
  return (
    <div className="empty-state">
      <h2>No ToDos Available</h2>
      <p>Add a todo with the form above to get a new todo!</p>
    </div>
  );
}
