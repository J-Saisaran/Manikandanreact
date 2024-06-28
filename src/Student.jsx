import React from 'react'
import { useSchool } from './SchoolContext'

function Student() {
    const schoolName = useSchool();

  return (
    <div>Student is studing at {schoolName}</div>
  )
}

export default Student