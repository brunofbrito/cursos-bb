import React from "react"
import { Location } from "@reach/router"
import { usePageValue } from "../context/PageContext"

import VideoSelectorHeader from "./VideoSelectorHeader"
import ClassroomTitle from "./ClassroomTitle"
import ClassroomMedia from "./ClassroomMedia"
import ClassroomNote from "./ClassroomNote"
import VideoSelector from "./VideoSelector"
import VideoNav from "./VideoNav"
import findIndex from "lodash/findIndex"

function Classroom() {
  const { location, currentCourse } = usePageValue()
  const { lessons } = currentCourse
  let nowPlaying
  const nowPlayingIndex = findIndex(lessons, ["slug", location.pathname])
  if (nowPlayingIndex !== -1) {
    nowPlaying = lessons[nowPlayingIndex]
  }
  return (
    <>
      <ClassroomTitle />
      <Location>
        {locationProps => (
          <div className="container" style={{ marginBottom: "var(--xl)" }}>
            <ClassroomMedia />
            {locationProps.location.pathname !== currentCourse.slug ? (
              <VideoSelector />
            ) : null}
            <ClassroomNote />
            <VideoSelectorHeader />
            <VideoNav />
          </div>
        )}
      </Location>
    </>
  )
}

export default Classroom
