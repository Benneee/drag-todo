import "./ClearAllToDos.css";

interface ClearAllToDosProps {
  allToDosCount: number;
  onClearAllToDos: () => void;
}

export function ClearAllToDos({ allToDosCount, onClearAllToDos }: ClearAllToDosProps) {
  return (
    <>
      {allToDosCount > 1 ? (
        <button className="clear-all-todos" onClick={onClearAllToDos}>
          Clear all
        </button>
      ) : null}
    </>
  );
}
