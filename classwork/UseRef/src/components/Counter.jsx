import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SetInc":
      return { ...state, count: action.count+=1 };

    case "SetDec":
      return { ...state, count: action.count-=1 };
    default:
      break;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  console.log(state.count)
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "SetDec",
            count: state.count,
          });
        }}
      >
        Dec
      </button>
      <button
        onClick={() => {
            // console.log(state.count)
          dispatch({
            type: "SetInc",
            count: state.count,
          });
        }}
      >
        Inc
      </button>
    </div>
  );
};

export default Counter;
