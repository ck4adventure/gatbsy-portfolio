import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const RailsGuidesPage = () => (
  <Layout>
    <h2>Working with Rails</h2>
    <ul>
      <li>
        <Link to="/rails-setup">Rails Setup</Link>
      </li>
      <li>
        <Link to="/rails-models">Creating Models</Link>
      </li>
      <li>
        <Link to="/rails-routes">Rails Routing</Link>
      </li>
      <li>
        <Link to="/rails-rspec">Testing with Rspec</Link>
      </li>
    </ul>
    <br />
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default RailsGuidesPage
