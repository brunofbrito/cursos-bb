import React from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { usePageValue } from "../context/PageContext"

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 1rem;
  h1,
  h2,
  h3 {
    padding: 1rem 0;
  }
  h1 {
    font-weight: 700;
    font-size: 2rem;
  }
  h2 {
    font-size: 1.7rem;
  }
  p {
    line-height: 1.5rem;
    padding-bottom: 0.5rem;
  }
  a {
    color: #ce6a85;
    transition: all 0.1s linear;
    font-weight: 700;
    &:hover {
      border-bottom: 4px solid #ce6a85;
    }
  }
  ul {
    list-style: square;
    list-style-position: inside;
    padding-bottom: 1rem;
  }
  li {
    line-height: 2rem;
  }
`

function ClassroomNote({ className }) {
  const { currentCourse, currentLesson } = usePageValue()
  const mdxBody =
    currentLesson && currentLesson.body
      ? currentLesson.body
      : currentCourse.body
  return (
    <Wrapper className={className}>
      {mdxBody && <MDXRenderer>{mdxBody}</MDXRenderer>}
    </Wrapper>
  )
}

export default ClassroomNote
