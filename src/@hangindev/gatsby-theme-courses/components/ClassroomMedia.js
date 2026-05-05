import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import YoutubePlayer from "./YoutubePlayer"
import { useAppValue } from "../context/AppContext"
import { usePageValue } from "../context/PageContext"

function ClassroomMedia() {
  const [{ autoplay }, dispatch] = useAppValue()
  const { currentCourse, currentLesson, nextLesson } = usePageValue()

  function handleVideoEnd() {
    dispatch({
      type: "addToWatched",
      id: currentLesson.id,
    })
    if (nextLesson && autoplay) {
      navigate(nextLesson.slug)
    }
  }

  if (currentLesson && currentLesson.youtubeId) {
    return (
      <YoutubePlayer
        autoplay={autoplay}
        id={currentLesson.youtubeId}
        onEnd={handleVideoEnd}
      />
    )
  }

  const image = currentCourse.coverImage ? getImage(currentCourse.coverImage) : null

  if (image) {
    return (
      <GatsbyImage
        image={image}
        alt={
          currentLesson && currentLesson.title
            ? currentLesson.title
            : currentCourse.title
        }
        style={{ width: "100%" }}
        objectFit="cover"
      />
    )
  }

  return <div />
}

export default ClassroomMedia
