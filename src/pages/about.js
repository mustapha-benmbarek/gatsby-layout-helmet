/* @title: <<gatsby-001-layout>> program written with gatsby-js.
 * @desc: Creates a simple webapp starter with a layout.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => (
  <Layout>
    <Head title="About" />
    <main role="main" className="inner cover">
      <h1 className="cover-heading">About.</h1>
      <p className="lead">
        Welcome to the page about the program developed with the framework
        Gatsby.
      </p>
      <p className="lead">
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-secondary"
          alt="Gatsby"
        >
          Learn more
        </a>
      </p>
    </main>
  </Layout>
)

export default AboutPage
