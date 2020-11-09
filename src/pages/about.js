import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h2>About Me</h2>
    <p>
      Jan 2019: Graduate of{" "}
      <a href="https://www.appacademy.io/" target="_blank">
        App Academy
      </a>{" "}
      in Full Stack Web Development
    </p>
    <p>2011-2013: Erasmus Mundus Scholarship - University of Bremen, Germany</p>
    <p>2011: MA German Literature, CSU Long Beach</p>
    <p>2008: BA German, CSU Fullerton</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
