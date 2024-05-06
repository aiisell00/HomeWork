import React from 'react'

const StudentLists = ({students}) => {
  return (
    <ul>
      {
        students && students.map((students)=>{
          return <li>{students.id}{students.name}{students.gpa}</li>
        })
      }
    </ul>
  )
}

export default StudentLists