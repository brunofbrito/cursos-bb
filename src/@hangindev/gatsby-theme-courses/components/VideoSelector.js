import React from "react"
import styled from "styled-components"
import VideoList from "./VideoList"
import AutoplaySwitch from "./AutoplaySwitch"

const Selector = styled.div`
  width: 100%;
  background: var(--light-grey);
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
`

function VideoSelector() {
  return (
    <Selector>
      <VideoList />
      <AutoplaySwitch />
    </Selector>
  )
}

export default VideoSelector
