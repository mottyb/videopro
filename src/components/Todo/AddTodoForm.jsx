export default function AddTodoForm({
    todo,
    onAddFormSubmit,
    onAddInputChange
  }) {
    return (
      <form onSubmit={onAddFormSubmit}>
        <h2>Todo Project</h2>
        <input
        className="todoit"
          name="todo"
          type="text"
          placeholder="Write todo and press enter to keep it "
          value={todo}
          onChange={onAddInputChange}
        />
      </form>
    );
  }
  