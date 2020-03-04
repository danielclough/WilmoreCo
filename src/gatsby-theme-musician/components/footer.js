/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"

export default ({ children }) => {

  return (
    <footer role="contentinfo" sx={{ variant: "layout.footer" }}>
      <hr sx={{ variant: "layout.footer.hr" }} />
      {children ? (
        <div sx={{ variant: "layout.footer.copyright" }}>{children}</div>
      ) : (
        <small sx={{ variant: "layout.footer.copyright" }}>
          Copyright © {new Date().getFullYear()} Wilmore & Company. 
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
