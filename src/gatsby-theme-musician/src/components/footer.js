/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"

import useSiteMetadata from "../use-site-metadata"
import Social from "./social"

export default ({ children }) => {
  const { title, social } = useSiteMetadata()

  let hasSocial = false
  if (social.length) {
    if (typeof social[0].name !== "undefined") {
      if (social[0].name.length) {
        hasSocial = true
      }
    }
  }

  return (
    <footer role="contentinfo" sx={{ variant: "layout.footer" }}>
      {hasSocial && (
        <>
          <strong
            className="GtmFooter__social-heading"
            sx={{ variant: "styles.caps" }}
          >
            Follow &amp; Subscribe
          </strong>
          <div className="GtmFooter__social-wrapper">
            <Social />
          </div>
        </>
      )}
      <hr sx={{ variant: "layout.footer.hr" }} />
      {children ? (
        <div sx={{ variant: "layout.footer.copyright" }}>{children}</div>
      ) : (
        <small sx={{ variant: "layout.footer.copyright" }}>
          Copyright © {new Date().getFullYear()} {title}. 
          <br />
          Built by{" "}
          <Styled.a href="https://danielc.us/copyright" rel="external nofollow">
            DanielC.US 
          </Styled.a>
           {" "} - All rights reserved.
        </small>
      )}
    </footer>
  )
}
