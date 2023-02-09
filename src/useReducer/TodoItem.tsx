interface TodoElement {
    id: any,
    description: string,
    done: boolean,
}

export const TodoItem = ({ todo }: {todo:TodoElement}) => {
  return (
    <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between"
        >
          <span className="align-self-center"> {todo.description} </span>
          <button className="btn btn-danger">Delete</button>
    </li>
  )
}