import React from 'react'
import Contact from '../Contact'
import StudentLists from '../studentList'

const Main = ({students}) => {
  return (
    <div>Main
      <Contact/>
      <StudentLists students={students}/>
    </div>
  )
}

export default Main