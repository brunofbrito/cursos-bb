import React from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { usePageValue } from "../context/PageContext"
import findIndex from "lodash/findIndex"
import NowPlaying from "./NowPlaying"

const Wrapper = styled.div`
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
    color: var(--accent);
    transition: all 0.1s linear;
    font-weight: 700;
    &:hover {
      color: var(--accent-hover);
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
  const { location, currentCourse, currentLesson } = usePageValue()
  const { lessons } = currentCourse
  let nowPlaying
  const nowPlayingIndex = findIndex(lessons, ["slug", location.pathname])
  if (nowPlayingIndex !== -1) {
    nowPlaying = lessons[nowPlayingIndex]
  }
  const mdxBody =
    currentLesson && currentLesson.body
      ? currentLesson.body
      : currentCourse.body
  return (
    <Wrapper className={className}>
      {currentLesson && (
        <NowPlaying
          index={nowPlayingIndex + 1}
          lessons={lessons.length}
          title={currentCourse.title}
          duration={currentLesson.duration}
        />
      )}
      {mdxBody && <MDXRenderer>{mdxBody}</MDXRenderer>}
    </Wrapper>
  )
}

export default ClassroomNote
