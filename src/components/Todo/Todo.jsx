import { useSelector } from "react-redux";
import styles from "./Todo.module.css";

export const Todo = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  return (
    <>
      {todos.map((todo) => (
        <div className={styles.todo_card} key={todo.id}>
          <button>Completed</button>
          <p className={styles.title}>{todo.title}</p>
          <button>Delete</button>
        </div>
      ))}
    </>
  );
};
