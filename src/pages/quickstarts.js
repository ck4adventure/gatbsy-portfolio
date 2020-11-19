import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Quickstarts" />
    <h2>Quickstart Guides</h2>
    <ul>
      <li>
        <Link to="/rails-setup">Rails Setup</Link>
      </li>
      <li>React</li>
      <li>Redux Loop</li>
    </ul>
    <br />
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
