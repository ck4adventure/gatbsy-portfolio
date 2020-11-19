import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Front End Engineer</h1>
    <p>Front end development, UX, mocks and wireframes.</p>
    <Link to="/about">About me.</Link>
  </Layout>
)

export default IndexPage
