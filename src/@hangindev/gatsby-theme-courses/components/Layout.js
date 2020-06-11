import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import globalStyle from "../styled/globalStyle"
import defaultTheme from "../styled/theme"
import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`

const Layout = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      {children}
      <Footer />
    </>
  </ThemeProvider>
)
Layout.propTypes = {
  theme: PropTypes.object,
}
Layout.defaultProps = {
  theme: defaultTheme,
}
export default Layout
