export const TodoAdd = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="What is there to do?"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary mt-3">
        Add
      </button>
    </form>
  );
};
