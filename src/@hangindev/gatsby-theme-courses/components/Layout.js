import React from "react"
import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <div className="container">
      <Header />
    </div>
    {children}
    <Footer />
  </>
)

export default Layout
