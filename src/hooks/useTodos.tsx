import { useEffect, useReducer } from "react";
import { todoReducer } from "../useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

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

  const handleDeleteTodo = (id: any) => {
    dispatch({
      type: "Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id: any) => {
    dispatch({
      type: "Toggle Todo",
      payload: id,
    });
  };

  return { 
    todos, 
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo:any)=>!todo.done).length,
    handleDeleteTodo, 
    handleNewTodo, 
    handleToggleTodo 
  };
};
