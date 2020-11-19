import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h2>Skillsets</h2>
    <h4>Front End Development</h4>
    <ul>
      <li>Plain HTML/CSS/JS solutions</li>
      <li>Templating Systems like ERB, Pug</li>
      <li>Static Site Frameworks such as Metalsmith, Gatsby</li>
      <li>Dynamic Web Pages with React and Redux</li>
    </ul>
    <h4>Creative and Design Work</h4>
    <ul>
      <li>
        <a
          href="https://ck4adventure.github.io/snowscene/"
          target="_blank"
          rel="noreferrer"
        >
          Animated Snow using Canvas
        </a>
      </li>
    </ul>
    <h2>Education</h2>
    <p>
      Jan 2019: Graduate of{" "}
      <a href="https://www.appacademy.io/" target="_blank" rel="noreferrer">
        App Academy
      </a>{" "}
      in Full Stack Web Development
    </p>
    <p>2011-2013: Erasmus Mundus Scholarship - University of Bremen, Germany</p>
    <p>2011: MA German Literature, CSU Long Beach</p>
    <p>2008: BA German, CSU Fullerton</p>
    <br />
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
