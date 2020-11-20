import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Dev Skills" />
    <h2>Web App Development Skills</h2>
    <div class="column-container">
      <div id="column-left" class="column">
        <h4>UX and Design</h4>
        <ul>
          <li>User Stories</li>
          <li>Wireframes and Basic Mockups</li>
          <li>Design Documents and Acceptance Criteria</li>
        </ul>
        <h4>JS</h4>
        <ul>
          <li>Javascript vs. Typescript</li>
          <li>Differences between ECMA5 and ECMA6</li>
          <li>Modules and obj oriented Best Practices</li>
        </ul>
        <h4>Component Systems</h4>
        <ul>
          <li>
            <Link to="/react">React</Link>
          </li>
          <li>Material-UI</li>
          <li>Pug Templates</li>
          <li>Rails Views with .erb</li>
        </ul>
        <h4>Static Site Generators</h4>
        <ul>
          <li>Metalsmith</li>
          <li>Gatsby</li>
          <li>NetlifyCMS</li>
        </ul>
        <h4>CSS Frameworks</h4>
        <ul>
          <li>SCSS</li>
          <li>Tailwind</li>
          <li>Material-UI Styling</li>
        </ul>
      </div>
      <div id="column-right" class="column">
        <h4>Backends</h4>
        <ul>
          <li>
            <Link to="/rails">Rails</Link>
          </li>
          <li>Node/Express</li>
          <li>GraphQL</li>
        </ul>
        <h4>Testing Frameworks</h4>
        <ul>
          <li>Jest</li>
          <li>React Testing Library</li>
          <li>Rspec and Capybara</li>
          <li>Shouldas, FactoryBot and Faker</li>
          <li>Cucumber</li>
        </ul>
        <h4>Compile and Deploy</h4>
        <ul>
          <li>Webpacker</li>
          <li>Babel</li>
          <li>Scripting for Server/VM Deploy</li>
          <li>Containerization and Automation</li>
        </ul>
        <h4>Business Features</h4>
        <ul>
          <li>Analytics</li>
          <li>OAuth</li>
          <li>Email Server</li>
          <li>Marketing Actions - Intercomm, Popups, Push</li>
        </ul>
        <h4>Going Mobile</h4>
        <ul>
          <li>Mobile First Design</li>
          <li>React Native</li>
          <li>XCode</li>
          <li>Android Studio</li>
        </ul>
      </div>
    </div>
    <br />
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
