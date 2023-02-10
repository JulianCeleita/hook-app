import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos = [],
  onDeleteTodo,
  onToggleTodo,
}: {
  todos: any;
  onDeleteTodo: any;
  onToggleTodo: any;
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo: any) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
