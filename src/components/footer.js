/* @title: <<gatsby-001-layout>> program written with gatsby-js.
 * @desc: Creates a simple webapp starter with a layout.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react"

const Footer = () => {
  return (
    <footer className="mastfoot mt-auto">
      <div className="inner">
        <p>
          Gatsby template from <a href="https://getbootstrap.com/">Bootstrap</a>
          , by Mustapha Benmbarek (
          <a
            href="https://github.com/mustapha-benmbarek/"
            target="_blank"
            alt="GitHub"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ).
          <br />
          Copyright © 2019. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
