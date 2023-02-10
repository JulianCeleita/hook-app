interface TodoElement {
  id: any;
  description: string;
  done: boolean;
}

export const TodoItem = ({
  todo,
  onDeleteTodo,
}: {
  todo: TodoElement;
  onDeleteTodo: any;
}) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between"
    >
      <span className="align-self-center"> {todo.description} </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};
