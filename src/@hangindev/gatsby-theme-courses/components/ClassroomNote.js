import React from "react"
import styled from "styled-components"
import { usePageValue } from "../context/PageContext"
import findIndex from "lodash/findIndex"
import NowPlaying from "./NowPlaying"

const Wrapper = styled.div`
  padding-top: var(--medium);
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
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
  h3 {
    font-weight: 700;
    font-size: 1.35rem;
  }
  p {
    font-size: 17px;
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
  ul,
  ol {
    list-style-position: inside;
    padding-bottom: 1rem;
  }
  ul {
    list-style: square;
    list-style-position: inside;
  }
  ol {
    list-style: decimal;
    list-style-position: inside;
  }
  li {
    line-height: 2rem;
  }
  table {
    width: 100%;
    margin: 1rem 0 1.5rem;
    border-collapse: collapse;
    font-size: 16px;
    line-height: 1.5;
  }
  th,
  td {
    border: 1px solid #e6e6e6;
    padding: 0.75rem;
    text-align: left;
    vertical-align: top;
  }
  th {
    background: var(--light-grey);
    font-weight: 700;
  }
  tr:nth-child(even) td {
    background: #fbfbfb;
  }
`

function ClassroomNote({ className }) {
  const { location, currentCourse, currentLesson, mdxChildren } = usePageValue()
  const { lessons } = currentCourse
  const nowPlayingIndex = findIndex(lessons, ["slug", location.pathname])

  return (
    <Wrapper className={className}>
      {currentLesson && nowPlayingIndex !== -1 && (
        <NowPlaying
          index={nowPlayingIndex + 1}
          lessons={lessons.length}
          title={currentLesson.title}
          duration={currentLesson.duration}
        />
      )}
      {mdxChildren}
    </Wrapper>
  )
}

export default ClassroomNote
