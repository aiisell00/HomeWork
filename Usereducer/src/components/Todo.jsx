import React, { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "SetInpVal":
      //   console.log(action.value);
      return { ...state, inpValue: action.value };
    case "AddTodo":
      let newTodo = { id: state.todos.length + 1, text: state.inpValue };
      return { ...state, todos: [...state.todos, newTodo] };
    case "DeleteTodo":
      let arr = state.todos.filter((el) => el.id !== action.id);
      return {
        ...state,
        todos: [...arr],
      };

    default:
      break;
  }
}
const Todo = () => {
  const [state, dispatch] = useReducer(reducer, {
    inpValue: "",
    todos: [],
  });
  return (
    <div>
      <form action="#">
        <input
          type="text"
          onChange={(e) => {
            dispatch({
              type: "SetInpVal",
              value: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            dispatch({
              type: "AddTodo",
            });
          }}
        >
          Add
        </button>
      </form>
      <ul>
        {state.todos.map((elem) => {
          return (
            <li key={elem.id}>
              {elem.text}
              <button
                onClick={() => {
                  dispatch({
                    type: "DeleteTodo",
                    id: elem.id,
                  });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
