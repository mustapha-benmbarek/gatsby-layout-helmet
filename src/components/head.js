/* @title: <<gatsby-001-layout>> program written with gatsby-js.
 * @desc: Creates a simple webapp starter with a layout.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
  )
}

export default Head