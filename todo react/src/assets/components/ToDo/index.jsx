import React, { useState } from 'react'
import AddToDo from '../AddToDo'
import SearchToDo from '../SearchToDo'
import ToDoList from '../ToDoList'
import ToDoItem from '../ToDoItem'

const ToDo = () => {
  const [todos, setTodos] = useState("")
  return (
    <>
    <AddToDo/>
    <SearchToDo/>
    <ToDoList/>
    <ToDoItem/>
    </>
  )
}

export default ToDo