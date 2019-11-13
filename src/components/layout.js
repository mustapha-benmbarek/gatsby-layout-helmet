/* @title: <<gatsby-001-layout>> program written with gatsby-js.
 * @desc: Creates a simple webapp starter with a layout.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/bootstrap.min.css"
import "../styles/index.css"

const Layout = props => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
