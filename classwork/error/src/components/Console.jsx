import React, { useReducer } from "react";
import Reducer from "../reducer/Reducer";

const Console = () => {
  const [state, dispatch] = useReducer(Reducer, {
    inpName: "",
    inpdesc: "",
    inpPrice: 0,
  });
  return (
    <div>
      <h2>Name</h2>
      <input
        type="text"
        placeholder="Title..."
        onChange={(e) => {
          dispatch({
            type: "SetInpValue",
            field: "inpName",
            inpName: e.target.value,
          });
        }}
      />
      <h2>Description</h2>
      <input
        type="text"
        placeholder="Desc"
        onChange={(e) => {
          dispatch({
            type: "SetInpValue",
            field: "inpdesc",
            inpdesc: e.target.value,
          });
        }}
      />
      <h2>Price</h2>
      <input
        type="text"
        placeholder="Price"
        onChange={(e) => {
          dispatch({
            type: "SetInpValue",
            field: "inpPrice",
            inpPrice: e.target.value,
          });
        }}
      />
      <h2>Category</h2>
      <select name="" id="">
        <option value="">T-Shirt</option>
        <option value="">Jeans</option>
        <option value="">Jacket</option>
      </select>
    </div>
  );
};

export default Console;
