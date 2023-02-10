import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo }:{todos:any, onDeleteTodo:any}) => {
  

  
  return (
    <ul className="list-group">
      {todos.map((todo:any) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};
