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
        // first inside the todos array of objects copy all todo objects and
        // add new object with id, title and completed false state which u get from payload
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
            completed: action.payload.completed,
          },
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
