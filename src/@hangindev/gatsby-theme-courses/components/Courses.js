import React from "react"
import styled from "styled-components"
import Layout from "./Layout"
import SEO from "./SEO"
import CoursesList from "./CoursesList"

const Wrapper = styled.div`
  padding: 1rem;
  h1,
  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 1rem 0;
  }
  h3 {
    font-size: 1.25rem;
  }
`

function Courses() {
  return (
    <Layout>
      <SEO title="Cursos - BrunoBrito.PT" />
      <Wrapper>
        <h1>Lista de Cursos</h1>
        <CoursesList />
      </Wrapper>
    </Layout>
  )
}
export default Courses
