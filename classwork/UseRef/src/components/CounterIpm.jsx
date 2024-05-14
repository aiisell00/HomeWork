import React, { useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SetNewValue":
      return { ...state, count: (action.count + 1) };

      break;
  }
}

const CounterIpm = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    newValue: "",
    value: "",
  });
  console.log(state.count);
  const decInput = useRef();
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
        
        }}
      >
        Dec
      </button>
      <button
        onClick={() => {
          // console.log(state.count)
          dispatch({
            type: "SetNewValue",
            count: decInput.current.value * 1,
          });
        }}
      >
        Inc
      </button>
      <input type="text" ref={decInput} />
    </div>
  );
};

export default CounterIpm;
