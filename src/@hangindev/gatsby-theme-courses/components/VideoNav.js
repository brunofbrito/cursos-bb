import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { usePageValue } from "../context/PageContext"

const Nav = styled.nav`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  a {
    color: #424f5b;
    transition: all 0.1s linear;
    &:hover {
      font-weight: 700;
    }
  }
`

function VideoNav({ className }) {
  const { previousLesson, nextLesson } = usePageValue()
  return (
    <Nav className={className}>
      {previousLesson ? (
        <Link to={previousLesson.slug}>
          <span>← anterior</span>
        </Link>
      ) : (
        <div />
      )}
      {nextLesson && (
        <Link to={nextLesson.slug}>
          <span>seguinte →</span>
        </Link>
      )}
    </Nav>
  )
}

export default VideoNav
