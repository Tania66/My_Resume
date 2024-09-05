import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [
      { id: 0, text: "Learn HTML and CSS", completed: false },
      { id: 1, text: "Get good at JavaScript", completed: false },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
  },
  reducers: {
    addTodos: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    deletedTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      state.tasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        }
        return task;
      });
    },
  },
});

export const { editTodo, toggleTodo, addTodos, deletedTodo } =
  todosSlice.actions;
export const todosReducer = todosSlice.reducer;
