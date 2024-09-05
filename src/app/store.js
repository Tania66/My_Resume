import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../features/todos/todosSlice";
import { postReducer } from "../features/swapi/postSlice";

const combinedReducer = combineReducers({
  todos: todosReducer,
  swapi: postReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "post/reset") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
