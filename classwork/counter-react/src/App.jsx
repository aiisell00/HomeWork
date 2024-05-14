import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([])
  return (
    <>
    <Counter count={count} setCount={setCount} />
    <Todo todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
