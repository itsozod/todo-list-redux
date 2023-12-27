import { useSelector, useDispatch } from "react-redux";
import styles from "./Todo.module.css";
import { FaTrash } from "react-icons/fa";
import { DELETE_ACTION } from "../../store/actions/deleteAction";
import { COMPLETE_ACTION } from "../../store/actions/completeAction";

export const Todo = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    // const newTodos = todos.filter((todo) => todo.id !== id);
    // dispatch({ type: DELETE_ACTION, payload: { todos: newTodos } });

    const newTodos = [...todos];
    newTodos.splice(id, 1);
    dispatch({ type: DELETE_ACTION, payload: { todos: newTodos } });
    setTimeout(() => {
      alert("Todo is deleted successfully");
    }, 500);
  };

  const handleCompletedTodo = (id) => {
    const completedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch({
      type: COMPLETE_ACTION,
      payload: { todos: completedTodo },
    });
  };

  return (
    <>
      {todos.length === 0 ? (
        <p className={styles.empty}>Todo list is empty</p>
      ) : (
        todos.map((todo) => (
          <div className={styles.todo_card} key={todo.id}>
            <button
              className={styles.complete}
              onClick={() => handleCompletedTodo(todo.id)}
            >
              {todo.completed ? "Completed" : "Not Completed"}
            </button>
            <p
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
              className={styles.title}
            >
              {todo.title}
            </p>
            <FaTrash
              className={styles.delete_btn}
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        ))
      )}
    </>
  );
};
