import React from "react";
import { decrement3, increment3 } from "./redux/slice/counterSlice";
import { useSelector, useDispatch } from 'react-redux'


const Uc = () => {
    const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment3())}>dec 3</button>
      <button onClick={() => dispatch(decrement3())}>inc 3</button>
    </div>
  );
};

export default Uc;
