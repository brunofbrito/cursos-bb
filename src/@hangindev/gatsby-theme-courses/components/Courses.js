import React from "react"
import Layout from "./Layout"
import SEO from "./SEO"
import CoursesList from "./CoursesList"

function Courses() {
  return (
    <Layout>
      <SEO title="Cursos - BrunoBrito.PT" />
      <div className="title-bar">
        <h1>Lista de Cursos</h1>
      </div>
      <div className="container">
        <CoursesList />
      </div>
    </Layout>
  )
}
export default Courses
