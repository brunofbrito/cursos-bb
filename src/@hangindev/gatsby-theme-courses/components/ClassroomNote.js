import React from "react"
import styled from "styled-components"
import { usePageValue } from "../context/PageContext"
import findIndex from "lodash/findIndex"
import NowPlaying from "./NowPlaying"

const Wrapper = styled.div`
  padding-top: var(--medium);
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  h1,
  h2,
  h3,
  h4 {
    padding: 1rem 0;
  }
  h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: -2.5px;
  }
  h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: -2px;
  }
  h3 {
    font-size: 38px;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: -1.5px;
  }
  h4 {
    font-size: 30px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: -1px;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
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
    font-size: 18px;
    font-weight: 500;
    line-height: 2rem;
  }
  table {
    width: 100%;
    margin: 1rem 0 1.5rem;
    border-collapse: collapse;
    font-size: 18px;
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
  code {
    background-color: rgb(248, 248, 249);
    color: #525455;
    letter-spacing: 0;
    padding: 2px 5px;
    border-radius: 3px;
  }
  pre {
    white-space: pre-line;
    background: #f8f8f9;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 30px;
    overflow-x: auto;
    code {
      background: none;
      padding: 0;
    }
  }
  kbd {
    border: 1px solid gray;
    line-height: 2.5em;
    box-shadow: 1px 0 1px 0 #eee, 0 2px 0 2px #ccc, 0 2px 0 3px #444;
    border-radius: 3px;
    margin: 2px 6px;
    padding: 1px 5px;
  }
  figure {
    margin-bottom: 30px;
  }
  .aviso,
  .slideshare {
    background-color: #eee;
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    border-radius: 5px;
    border-style: dashed;
    border-color: #222222;
    margin-bottom: 30px;
    &:before {
      content: 'NOTA: ';
      color: red;
      font-weight: 900;
    }
  }
  html.dark-mode & {
    color: #ffffff;
    h1, h2, h3, h4, h5, h6, p, li {
      color: #ffffff;
    }
    code {
      background-color: #1e1e1e;
      color: #e0e0e0;
    }
    pre {
      background-color: #111111;
      code {
        color: #e0e0e0;
      }
    }
    th {
      background: #2a2a2a;
      color: #ffffff;
    }
    td {
      color: #ffffff;
    }
    tr:nth-child(even) td {
      background: #252525;
    }
    th, td {
      border-color: #3a3a3a;
    }
    .aviso,
    .slideshare {
      background-color: #2a2a2a;
      border-color: #555555;
    }
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
