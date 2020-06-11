import React from "react"
import VideoSelectorHeader from "./VideoSelectorHeader"
import ClassroomTitle from "./ClassroomTitle"
import ClassroomMedia from "./ClassroomMedia"
import ClassroomNote from "./ClassroomNote"
import VideoSelector from "./VideoSelector"
import VideoNav from "./VideoNav"

function Classroom() {
  return (
    <>
      <ClassroomTitle />
      <div className="container">
        <ClassroomMedia />
        <VideoSelectorHeader />
        <VideoSelector />
        <ClassroomNote />
        <VideoNav />
      </div>
    </>
  )
}

export default Classroom
