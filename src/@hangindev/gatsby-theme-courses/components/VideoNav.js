import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { usePageValue } from "../context/PageContext"

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--xl);
`

const Nav = styled.nav`
  font-size: 20px;
  padding: 24px 0;
  display: flex;
  align-items: center;
  a,
  svg {
    color: var(--grey);
  }
  a:hover {
    color: var(--accent);
  }
  svg {
    height: 20px;
    margin-right: 0.75rem;
  }
  svg:last-child {
    margin-left: 0.75rem;
    margin-right: 0;
  }
`

function VideoNav() {
  const { previousLesson, nextLesson } = usePageValue()
  return (
    <NavBar>
      {previousLesson ? (
        <Nav>
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
          <Link to={previousLesson.slug}>
            <span>anterior</span>
          </Link>
        </Nav>
      ) : (
        <Nav></Nav>
      )}
      {nextLesson && (
        <Nav>
          <Link to={nextLesson.slug}>
            <span>seguinte</span>
          </Link>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="long-arrow-alt-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M340.485 366l99.03-99.029c4.686-4.686 4.686-12.284 0-16.971l-99.03-99.029c-7.56-7.56-20.485-2.206-20.485 8.485v71.03H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h308v71.03c0 10.689 12.926 16.043 20.485 8.484z"
            ></path>
          </svg>
        </Nav>
      )}
    </NavBar>
  )
}

export default VideoNav
