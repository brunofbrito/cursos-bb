import React from "react"
import styled from "styled-components"
import VideoList from "./VideoList"

const Selector = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  ${({ theme }) => `
    ${theme.media.desktop} {
      width: 380px;
    }
  `}
  p {
    margin: 0;
  }
`

function VideoSelector({ className }) {
  return (
    <Selector className={className}>
      <VideoList />
    </Selector>
  )
}

export default VideoSelector
