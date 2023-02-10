interface TodoElement {
  id: any;
  description: string;
  done: boolean;
}

export const TodoItem = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
}: {
  todo: TodoElement;
  onDeleteTodo: any;
  onToggleTodo: any;
}) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between"
    >
      <span
        className={`align-self-center ${(todo.done) ? 'text-decoration-line-through': ''}`}
        onDoubleClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};
