import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, toggleTodo}) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
