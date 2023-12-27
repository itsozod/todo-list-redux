import { todosData } from "../data/todosData";
import { TODO_ACTION } from "../actions/todoAction";
export const todoReducer = (state = todosData, action) => {
  switch (action.type) {
    case TODO_ACTION:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
