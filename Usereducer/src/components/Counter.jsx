import React, { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "SetIncrement":
      return { ...state, count: ++action.count };
    case "SetDecrement":
      if (action.count > 0) {
        return { ...state, count: --action.count };
      } else {
        return { ...state, count: action.count };
      }
    default:
      break;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "SetIncrement",
            count: state.count,
          });
        }}
      >
        inc
      </button>
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({
            type: "SetDecrement",
            count: state.count,
          });
        }}
      >
        dec
      </button>
    </div>
  );
};

export default Counter;
