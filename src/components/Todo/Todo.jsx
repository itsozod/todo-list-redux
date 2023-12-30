import { useSelector, useDispatch } from "react-redux";
import styles from "./Todo.module.css";
import { FaTrash } from "react-icons/fa";
import { DELETE_ACTION } from "../../store/actions/deleteAction";
import { COMPLETE_ACTION } from "../../store/actions/completeAction";

export const Todo = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log(todos);
  const dispatch = useDispatch();

  // delete todo fn
  const deleteTodo = (id) => {
    // filter through todos and add only that todos which are not equal to the id of the passed todo
    // means todos that are equal to id of the passed todo id will be filtered out/removed
    const newTodos = todos.filter((todo) => todo.id !== id);
    dispatch({ type: DELETE_ACTION, payload: { todos: newTodos } });

    // const newTodos = [...todos];
    // newTodos.splice(id, 1);
    // dispatch({ type: DELETE_ACTION, payload: { todos: newTodos } });
    setTimeout(() => {
      alert("Todo is deleted successfully");
    }, 500);
  };

  // change complete to true or false fn
  const handleCompletedTodo = (id) => {
    //  map through todos and if the passed todo id  is equal to any id of the
    //  mapped todos change the completed state of that todo
    const completedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch({
      type: COMPLETE_ACTION,
      payload: { todos: completedTodo },
    });
    // fn to alert each todo by its name if they are completed or not completed
    const alertForCompleting = todos.map((todo) => {
      if (todo.id === id && todo.completed) {
        setTimeout(() => {
          alert(`${todo.title} is set to not completed`);
        }, 500);
      } else if (todo.id === id && !todo.completed) {
        setTimeout(() => {
          alert(`${todo.title} is set to completed`);
        }, 500);
      }
    });
    return alertForCompleting;
  };

  return (
    <>
      {todos.length === 0 ? (
        <p className={styles.empty}>Todo list is empty</p>
      ) : (
        todos.map((todo) => (
          <div className={styles.todo_card} key={todo.id}>
            <button
              style={{ background: todo.completed ? "green" : "red" }}
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
