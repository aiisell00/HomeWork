import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      const newTodo = { id: state.todos.length + 1, text: action.payload };
      state.todos = [...state.todos, newTodo]; // Use spread operator
      state.count += 1;
    },
    // Implement deleteTodo if needed
  },
});

export const { createTodo } = todoSlice.actions;

export default todoSlice.reducer;