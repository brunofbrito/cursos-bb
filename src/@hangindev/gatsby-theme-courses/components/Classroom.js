import React from "react"
import { usePageValue } from "../context/PageContext"

import VideoSelectorHeader from "./VideoSelectorHeader"
import ClassroomTitle from "./ClassroomTitle"
import ClassroomMedia from "./ClassroomMedia"
import ClassroomNote from "./ClassroomNote"
import VideoSelector from "./VideoSelector"
import VideoNav from "./VideoNav"

function Classroom() {
  const { location, currentCourse } = usePageValue()

  return (
    <>
      <ClassroomTitle />
      <div className="container" style={{ marginBottom: "var(--xl)" }}>
        <ClassroomMedia />
        {location.pathname !== currentCourse.slug ? <VideoSelector /> : null}
        <ClassroomNote />
        <VideoSelectorHeader />
        <VideoNav />
      </div>
    </>
  )
}

export default Classroom
