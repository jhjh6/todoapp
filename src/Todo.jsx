import React from "react";

const Todo = ({todo, toggleTodo}) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          readOnly 
          onChange={handleTodoClick} 
        />
      </label>
      {todo.name}
    </li>
  );
};

export default Todo;
