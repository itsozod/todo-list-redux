import "./App.css";
import { Header } from "./components/header/Header";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), title: "Cut my hair" },
    { id: uuidv4(), title: "Go Shopping" },
  ]);
  const [value, setValue] = useState("");

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), title: todo }]);
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    addTodo(value);
    setValue("");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <Header />
      <div className="input-container">
        <form onSubmit={(e) => handleTodoSubmit(e)}>
          <input
            className="add"
            type="text"
            placeholder="Enter your todo for today"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Add Todo
          </button>
        </form>
      </div>
      <div className="todos-container">
        {todos.map((todo) => (
          <p key={todo.id} onClick={() => deleteTodo(todo.id)}>
            {todo.title}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
