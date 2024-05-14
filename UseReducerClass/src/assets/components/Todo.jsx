import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SetInpValue":
      return { ...state, value: action.value };
    case "AddTodo":
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: state.value }],
        value: "", 
      };
      case "DeleteTodo":
        {
            const delet= state.todos.filter((elem)=>{

            })
        };
    default:
      return state;
  }
}

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, {
    value: "",
    todos: [],
  });

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "AddTodo" });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch({ type: "DeleteTodo" });

  };
  return (
    <div>
      <h1>TodoApp</h1>
      <form>
        <input
          onChange={(e) => {
            dispatch({
              type: "SetInpValue",
              value: e.target.value,
            });
          }}
          type="text"
          value={state.value}
        />
        <button onClick={handleAddTodo}>Add</button>
      </form>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>{todo.text}  <button className="delete" onChange={()=>{handleDelete}}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
