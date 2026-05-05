import React from "react"
import { graphql } from "gatsby"
import Layout from "../@hangindev/gatsby-theme-courses/components/Layout"
import Classroom from "../@hangindev/gatsby-theme-courses/components/Classroom"
import { PageProvider } from "../@hangindev/gatsby-theme-courses/context/PageContext"

function CoursePage({ children, location, data: { currentCourse } }) {
  return (
    <PageProvider value={{ location, currentCourse, mdxChildren: children }}>
      <Layout>
        <Classroom />
      </Layout>
    </PageProvider>
  )
}

export default CoursePage

export function Head({ data: { currentCourse } }) {
  return (
    <>
      <title>{currentCourse.title} | BrunoBrito.PT</title>
      <meta name="description" content={currentCourse.excerpt} />
      <meta property="og:title" content={currentCourse.title} />
      <meta property="og:description" content={currentCourse.excerpt} />
      <meta property="og:type" content="website" />
      {currentCourse.tags && currentCourse.tags.length > 0 && (
        <meta name="keywords" content={currentCourse.tags.join(", ")} />
      )}
    </>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    currentCourse: course(id: { eq: $id }) {
      id
      tags
      excerpt
      title
      slug
      premium
      lastUpdated(formatString: "MMMM DD, YYYY")
      lessons {
        id
        slug
        title
        duration
      }
      coverImage {
        childImageSharp {
          gatsbyImageData(width: 1000)
        }
      }
    }
  }
`
