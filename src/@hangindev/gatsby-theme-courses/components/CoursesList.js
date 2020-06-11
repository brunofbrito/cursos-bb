import React from "react"
import styled from "styled-components"
import CoursePreview from "./CoursePreview"
import { usePageValue } from "../context/PageContext"

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

function CoursesList() {
  const { courses } = usePageValue()
  if (!courses || courses.length === 0) return <p>Sem cursos disponíveis.</p>
  console.log(courses)
  return (
    <List className="highlow">
      {courses.map(course => (
        <CoursePreview key={course.id} {...course} />
      ))}
    </List>
  )
}
export default CoursesList
