import React from "react"
import { AppProvider } from "./src/@hangindev/gatsby-theme-courses/context/AppContext"

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="dark-mode-init"
      dangerouslySetInnerHTML={{
        __html: `(function(){try{if(localStorage.getItem('dark-mode')==='true'){document.documentElement.classList.add('dark-mode');}}catch(e){}})();`,
      }}
    />,
  ])
}
