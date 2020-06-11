import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import findIndex from "lodash/findIndex"
import { usePageValue } from "../context/PageContext"

const ButtonText = styled.h6`
  margin: 0;
  background-color: var(--accent);
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 0.2rem;
  line-height: 2;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: all 300ms;
  &:hover {
    background-color: #cc4e43;
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
          <ButtonText>Começar Curso</ButtonText>
        </Link>
      )}
    </div>
  )
}

export default VideoSelectorHeader
