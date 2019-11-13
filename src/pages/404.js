/* @title: <<gatsby-001-layout>> program written with gatsby-js.
 * @desc: Creates a simple webapp starter with a layout.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from '../components/head'

const NotFoundPage = () => (
  <Layout>
    <Head title="Page Not Found" />
    <main role="main" className="inner cover">
      <h1 className="cover-heading">Oops !</h1>
      <p className="lead">We can't seem to find the page you're looking for.</p>
      <p className="lead">
        <Link className="btn btn-lg btn-secondary" to="/">
          Back to Home Page
        </Link>
      </p>
    </main>
  </Layout>
)

export default NotFoundPage
