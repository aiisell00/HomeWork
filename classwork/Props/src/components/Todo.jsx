import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Todo = () => {
  const [imputValue, setImputValue] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos"))|| []);
  const [name,setName]=useState("")
  let obj = {
    id: uuidv4,
    todos: imputValue,
  };
  return (
    <div>
      <form action="#">
        <input
          type="text"
          onChange={(e) => {
            setImputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(imputValue);
            // setTodos([...todos, obj])
            setImputValue(" ");
          }}
        >
          Add
        </button>
      </form>
      <ul>
        {todos.todos}
          {todos.filter((elem) => {
        <li> elem.id != todo.id;
            setToDo(obj);
        </li>

          })}
      </ul>
    </div>
  );
};

export default Todo;
