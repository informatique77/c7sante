import React from "react"
import PropTypes from "prop-types"

import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
