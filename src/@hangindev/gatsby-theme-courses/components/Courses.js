import React from "react"
import Layout from "./Layout"
import CoursesList from "./CoursesList"

function Courses() {
  return (
    <Layout>
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
