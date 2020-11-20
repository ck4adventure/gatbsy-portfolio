import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#4F28A4`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `baseline`,
        maxWidth: 960,
        margin: `0 auto`,
      }}
    >
      <div
        style={{
          // margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h2 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h2>
      </div>
      <div
        style={{
          // margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
        }}
      >
        <h6 style={{ margin: 4 }}>
          <Link
            to="/dev-skills"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Dev Skills
          </Link>
        </h6>
        <h6 style={{ margin: 4 }}>
          <Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            About
          </Link>
        </h6>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
