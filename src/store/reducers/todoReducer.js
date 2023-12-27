import { todosData } from "../data/todosData";
import { TODO_ACTION } from "../actions/todoAction";
import { VALUE_ACTION } from "../actions/valueAction";
export const todoReducer = (state = todosData, action) => {
  switch (action.type) {
    case TODO_ACTION:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: action.payload.id, title: action.payload.title },
        ],
      };
    case VALUE_ACTION:
      return { ...state, value: action.payload.value };
    default:
      return state;
  }
};
