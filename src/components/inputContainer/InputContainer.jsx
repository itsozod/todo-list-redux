import { useDispatch, useSelector } from "react-redux";
import styles from "./InputContainer.module.css";
import { VALUE_ACTION } from "../../store/actions/valueAction";
import { TODO_ACTION } from "../../store/actions/todoAction";
import { v4 as uuidv4 } from "uuid";

export const InputContainer = () => {
  const value = useSelector((state) => state.todoReducer.value);
  const dispatch = useDispatch();

  const addTodo = (todo) => {
    if (todo.trim() === "") {
      return;
    }
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
    <div className={styles.input_container}>
      {" "}
      <form onSubmit={(e) => handleTodoSubmit(e)}>
        <input
          className={styles.add}
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
        <button type="submit" className={styles.submit_btn}>
          Add Todo
        </button>
      </form>
    </div>
  );
};
