import "./ToDosSummary.css";

interface ToDosSummaryProps {
  allToDosCount: number;
  completedToDosCount: number;
}

export function ToDosSummary({ allToDosCount, completedToDosCount }: ToDosSummaryProps) {
  return (
    <>
      {allToDosCount > 0 ? (
        <p className="summary-text">
          {completedToDosCount} / {allToDosCount} completed
        </p>
      ) : null}
    </>
  );
}
