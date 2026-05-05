import React from "react"
import { AppProvider } from "./src/@hangindev/gatsby-theme-courses/context/AppContext"

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)
