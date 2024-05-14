import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <Todo/>

    </>
  )
}

export default App
