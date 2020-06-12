import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import findIndex from "lodash/findIndex"
import { usePageValue } from "../context/PageContext"

const ButtonText = styled.div`
  display: inline-block;
  margin: var(--medium) 0;
  background-color: var(--accent);
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 0.5rem 1rem;
  line-height: 2;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: all 300ms;
  &:hover {
    background-color: #cc4e43;
  }
  svg {
    height: 1rem;
  }
`

function VideoSelectorHeader({ className }) {
  const { location, currentCourse } = usePageValue()
  const { lessons } = currentCourse
  let nowPlaying
  const nowPlayingIndex = findIndex(lessons, ["slug", location.pathname])
  if (nowPlayingIndex !== -1) {
    nowPlaying = lessons[nowPlayingIndex]
  }
  return (
    <div className={className}>
      {nowPlayingIndex === -1 && (
        <Link to={lessons[0].slug}>
          <ButtonText>
            Começar Curso{" "}
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
          </ButtonText>
        </Link>
      )}
    </div>
  )
}

export default VideoSelectorHeader
