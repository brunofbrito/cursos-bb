import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import durationInText from "../utils/durationInText"

const VideoStatus = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  span {
    color: var(--grey);
    font-size: 1rem;
    margin-left: 1rem;
  }
`

function NowPlaying({ index, lessons, title, duration }) {
  return (
    <VideoStatus>
      {index}/{lessons}: {title}
      <span>{durationInText(duration)}</span>
    </VideoStatus>
  )
}
NowPlaying.propTypes = {
  index: PropTypes.number.isRequired,
  lessons: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
}
export default NowPlaying
