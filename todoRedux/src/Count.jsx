import React from 'react'
import { useSelector } from 'react-redux'

const Count = () => {
    const count = useSelector((state) => state.counter.value)
    console.log(count)
  return (
    <div>
        <p>{count}</p>
    </div>
  )
}

export default Count