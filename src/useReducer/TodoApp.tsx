import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Ir a Pandala",
    done: false,
  },

  {
    id: new Date().getTime() * 3,
    description: "Ir a Pandala",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1> Todo App</h1>
      <hr />

      <div className="row">
        <div className="col">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between"> 
                <span className="align-self-center">Item 1 </span>
                <button className="btn btn-danger">Delete</button>
            </li>
          </ul>
        </div>

        <div className="col">
          <h4>Add To Do</h4>
          <hr />
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
        </div>
      </div>
    </>
  );
};
