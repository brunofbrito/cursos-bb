import React from "react"
import { graphql } from "gatsby"
import Courses from "../@hangindev/gatsby-theme-courses/components/Courses"
import { PageProvider } from "../@hangindev/gatsby-theme-courses/context/PageContext"

function CoursesPage({ location, data: { allCourse } }) {
  const courses = allCourse.edges.map(({ node }) => node)
  return (
    <PageProvider value={{ location, courses }}>
      <Courses />
    </PageProvider>
  )
}

export default CoursesPage

export function Head() {
  return (
    <>
      <title>Lista de Cursos | BrunoBrito.PT</title>
      <meta
        name="description"
        content="Cursos gratuitos de Marketing Digital e Programação Web em português, desenvolvidos por Bruno Brito."
      />
    </>
  )
}

export const pageQuery = graphql`
  query {
    allCourse(sort: [{ lastUpdated: DESC }, { title: DESC }], limit: 100) {
      edges {
        node {
          id
          excerpt
          slug
          title
          tags
          premium
          lastUpdated(formatString: "MMMM DD, YYYY")
          lessons {
            id
            duration
          }
          coverImage {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
      }
    }
  }
`
