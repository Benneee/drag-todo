import "./ToDoForm.css";

export default function ToDoForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form value: ", e.currentTarget.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input placeholder="What would you like to do today?" />
      <button type="submit">Add</button>
    </form>
  );
}
