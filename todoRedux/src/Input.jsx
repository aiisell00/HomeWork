import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from './redux/slice/counterSlice'

const Input = ({input, setInput}) => {
    const dispatch = useDispatch()

  return (
    <div>
        <input type="text" placeholder='enter number' onChange={(e)=>{
            // dispatch(incrementByAmount(setInput(e.target.value)))
            setInput(e.target.value)
            // console.log(e.target.value);
        }}/>
    </div>
  )
}

export default Input