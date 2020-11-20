import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ReactGuidesPage = () => (
  <Layout>
    <h2>Working with React</h2>
    <ul>
      <li>
        <Link to="/react-setup">React Setup</Link>
      </li>
      <li>
        <Link to="/react-older-setup">Setting up older versions</Link>
      </li>
      <li>
        <Link to="/react-redux">React Redux</Link>
      </li>
      <li>
        <Link to="/react-routes">Creating Routes in React</Link>
      </li>
      <li>
        <Link to="/react-test">Setting up Testing for React</Link>
      </li>
    </ul>
    <br />
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ReactGuidesPage
