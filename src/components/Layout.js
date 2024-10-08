import React from "react"
import ScrollToTop from "./ScrollToTop"

const Layout = ({ children }) => {
  return (
    <div className="section-wrapper">
      <div id="preLoader"></div>
      <ScrollToTop />
      {children}
    </div>
  )
}

export default Layout
