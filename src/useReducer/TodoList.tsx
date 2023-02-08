import { initialState } from "./TodoApp";
import useState from "react";

interface TodoElement {
  id: string;
  description: string;
  done: boolean;
}

export const Todos = (initialState: TodoElement) => {
  const [todoItem, newTodoItem] = useState(initialState);

  return todoItem.map((todo: any) => (
    <ul className="list-group">
      <li
        key={todo.id}
        className="list-group-item d-flex justify-content-between"
      >
        <span className="align-self-center"> {newTodoItem} </span>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
  ));
};
