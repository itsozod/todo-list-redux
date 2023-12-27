import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Header } from "./components/header/Header";
import { TODO_ACTION } from "./store/actions/todoAction";
import { VALUE_ACTION } from "./store/actions/valueAction";
import { v4 as uuidv4 } from "uuid";

function App() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const value = useSelector((state) => state.todoReducer.value);
  const dispatch = useDispatch();

  const addTodo = (todo) => {
    dispatch({
      type: TODO_ACTION,
      payload: { id: uuidv4(), title: todo },
    });
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    addTodo(value);
    dispatch({ type: VALUE_ACTION, payload: { value: "" } });
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
            onChange={(e) =>
              dispatch({
                type: VALUE_ACTION,
                payload: { value: e.target.value },
              })
            }
          />
          <button type="submit" className="submit-btn">
            Add Todo
          </button>
        </form>
      </div>
      <div className="todos-container">
        {todos.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    </>
  );
}

export default App;
