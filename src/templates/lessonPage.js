import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../@hangindev/gatsby-theme-courses/components/Layout"
import Classroom from "../@hangindev/gatsby-theme-courses/components/Classroom"
import { PageProvider } from "../@hangindev/gatsby-theme-courses/context/PageContext"

function LessonPage({
  children,
  location,
  pageContext: { currentCourse, previousLesson, nextLesson },
  data: { currentLesson },
}) {
  return (
    <PageProvider
      value={{
        location,
        currentCourse,
        currentLesson,
        previousLesson,
        nextLesson,
        mdxChildren: children,
      }}
    >
      <Layout>
        <Classroom />
      </Layout>
    </PageProvider>
  )
}

LessonPage.propTypes = {
  pageContext: PropTypes.shape({
    currentCourse: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
      premium: PropTypes.string,
      lessons: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          slug: PropTypes.string,
          duration: PropTypes.number,
        })
      ),
    }).isRequired,
    previousLesson: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
      duration: PropTypes.number,
    }),
    nextLesson: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
      duration: PropTypes.number,
    }),
  }),
  data: PropTypes.shape({
    currentLesson: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      duration: PropTypes.number,
      youtubeId: PropTypes.string,
      premium: PropTypes.string,
    }),
  }),
}

export default LessonPage

export function Head({ data: { currentLesson }, pageContext: { currentCourse } }) {
  const title = currentLesson ? currentLesson.title : currentCourse.title
  return (
    <>
      <title>{title} | BrunoBrito.PT</title>
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="description" content={`${title} - ${currentCourse.title}`} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
    </>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    currentLesson: lesson(id: { eq: $id }) {
      id
      title
      duration
      youtubeId
      premium
    }
  }
`
