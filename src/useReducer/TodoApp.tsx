import { useReducer, useEffect } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

export const initialState = [
  /*   {
    id: new Date().getTime(),
    description: "Ir a Pandala",
    done: false,
  },

  {
    id: new Date().getTime() * 3,
    description: "Ir a Fuegodala",
    done: false,
  }, */
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo: any) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id:any)=> {
    dispatch({
      type: "Remove Todo",
      payload: id
    });
  };

  const handleToggleTodo = (id:any)=> {
    dispatch({
      type: "Toggle Todo",
      payload: id
    })
  }

  return (
    <>
      <h1>
        {" "}
        TODO App: 10, <small> Pending: 2</small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
          todos={todos} 
          onDeleteTodo={ handleDeleteTodo } 
          onToggleTodo={ handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Add To Do</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
