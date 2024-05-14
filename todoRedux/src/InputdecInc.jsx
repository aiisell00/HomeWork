import React from 'react'
import { incrementByAmount, incrementByAmount1 } from './redux/slice/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

const inputDecInc = ({input, setInput}) => {
    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() =>{ 
        dispatch(incrementByAmount(input))
            console.log(input);
        }
            
        }>dec </button>
      <button onClick={() => dispatch(incrementByAmount1())}>inc </button>
    </div>
  )
}

export default inputDecInc