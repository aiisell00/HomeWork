import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "./redux/slice/todoSlice";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const addTodo = () => {
    if (inputValue.trim()) {
      dispatch(createTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </form>
      <ul>
        {todos.map((elem) => (
          <li key={elem.id}>{elem.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
