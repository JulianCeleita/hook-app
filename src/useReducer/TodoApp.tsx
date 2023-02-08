import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const initialState = [
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

    const handleNewTodo = ( todo ) => {
        console.log({ todo });
    } 

  return (
    <>
      <h1> TODO App: 10, <small> Pending: 2</small> </h1>
      <hr />

      <div className="row">
        <div className="col">
          {}
        </div>

        <div className="col">
          <h4>Add To Do</h4>
          <hr />
          {}
        </div>
      </div>
    </>
  );
};
