/** @format */

import React from "react";

const Todo = ({ todos, setTodos }) => {
  return (
    <div>
      <form action="#">
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodos;
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Todo;
