import { useState, useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid";
import './App.css'; // Import the CSS file

function App() {
  const [todos, setTodos] = useState([{id: "ioulrhfdg8iewu09`*PO#Q*ERI#)rje", name: "Add Todo!", completed: true}]);
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos(prevTodos => [...prevTodos, {id: uuidv4(), name: name, completed: false}]);
    todoNameRef.current.value = "";
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const handleClear = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  return (
    <div className="app-container">
      <h1>Todo - but an app that can't save</h1>
      <p className="description">
        Note: When reloaded, the todos you wrote will be deleted. Please use caution with this app.
      </p>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add Task</button>
      <button onClick={handleClear}>Delete Completed Tasks</button>
      <div className="remaining-tasks">
        Remaining tasks: {todos.filter(todo => !todo.completed).length}
      </div>
    </div>
  );
}

export default App;
