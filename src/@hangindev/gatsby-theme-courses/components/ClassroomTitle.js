import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import { usePageValue } from "../context/PageContext"
import styled from "styled-components"
import findIndex from "lodash/findIndex"

const BackNav = styled.nav`
  color: var(--grey);
  font-size: 20px;
  padding: 24px 0;
  display: flex;
  align-items: center;
  line-height: 42px;
  a {
    color: var(--grey);
  }
  a:hover {
    color: var(--accent);
  }
  svg {
    height: 20px;
    margin-right: 0.75rem;
  }
`

function ClassroomTitle() {
  const { location, currentCourse } = usePageValue()
  const { lessons } = currentCourse
  let nowPlaying
  const nowPlayingIndex = findIndex(lessons, ["slug", location.pathname])
  if (nowPlayingIndex !== -1) {
    nowPlaying = lessons[nowPlayingIndex]
  }
  return (
    <>
      <div className="title-bar">
        <h1>{nowPlaying ? nowPlaying.title : currentCourse.title}</h1>
      </div>
      <div className="container">
        <Location>
          {locationProps => (
            <BackNav>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="long-arrow-alt-left"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M107.515 150.971L8.485 250c-4.686 4.686-4.686 12.284 0 16.971L107.515 366c7.56 7.56 20.485 2.206 20.485-8.485v-71.03h308c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H128v-71.03c0-10.69-12.926-16.044-20.485-8.484z"
                ></path>
              </svg>
              {locationProps.location.pathname === currentCourse.slug ? (
                <Link to="/">Lista de Cursos</Link>
              ) : (
                <Link to={currentCourse.slug}>
                  Curso: {currentCourse.title}
                </Link>
              )}
            </BackNav>
          )}
        </Location>
      </div>
    </>
  )
}

export default ClassroomTitle
