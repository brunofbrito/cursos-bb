import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { usePageValue } from "../context/PageContext"

const TitleLink = styled.div`
  transition: all 0.1s linear;
  font-size: 1rem;
  margin-bottom: 2rem;
  a {
    color: #424f5b;
    transition: all 0.1s linear;
    &:hover {
      border-bottom: 4px solid #424f5b;
    }
  }
`
function ClassroomTitle() {
  const { currentCourse } = usePageValue()
  return (
    <TitleLink>
      Curso: <Link to={currentCourse.slug}>{currentCourse.title}</Link>
    </TitleLink>
  )
}

export default ClassroomTitle
