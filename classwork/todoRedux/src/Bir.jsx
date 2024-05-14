import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slice/counterSlice'

const Bir = () => {
      const dispatch = useDispatch()
  return (
    <div>
        <button  onClick={() => dispatch(increment())}>dec 1</button>
        <button  onClick={() => dispatch(decrement())}>inc 1</button>
    </div>
  )
}

export default Bir