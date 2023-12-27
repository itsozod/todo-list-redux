import { todosData } from "../data/todosData";
import { TODO_ACTION } from "../actions/todoAction";
import { VALUE_ACTION } from "../actions/valueAction";
import { DELETE_ACTION } from "../actions/deleteAction";
import { COMPLETE_ACTION } from "../actions/completeAction";
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
    case DELETE_ACTION:
      return { ...state, todos: action.payload.todos };
    case COMPLETE_ACTION:
      return {
        ...state,
        todos: action.payload.todos,
      };
    default:
      return state;
  }
};
