/** @format */

import React from "react";

const Counter = ({ count, setCount }) => {
  return (
    <div>
      <button
        onClick={() => {
          setCount(--count);
        }}
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
