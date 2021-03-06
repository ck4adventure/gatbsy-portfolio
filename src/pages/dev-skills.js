import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CategoryLinksList = ({ obj }) => {
  const { title, date, path } = obj
  return (
    <div>
      <h5>{obj.fieldValue.toUpperCase()}</h5>
      <ul>
        {obj.nodes.map((node, index) => {
          return (
            <li key={`cat${index}`}>
              <Link to={node.frontmatter.path}>
                {node.frontmatter.title} <small>{node.frontmatter.date}</small>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const AboutPage = ({ data }) => {
  const groups = data.allMarkdownRemark.group

  console.log(groups)

  return (
    <Layout>
      <SEO title="Dev Skills" />
      <h2>Computer Science and Coding Skills</h2>
      {groups.map((gr, index) => (
        <CategoryLinksList key={index} obj={gr} />
      ))}
      <br />
      <br />
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query catsQuery {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        totalCount
        fieldValue
        nodes {
          frontmatter {
            date(formatString: "MMM YYYY")
            title
            path
          }
        }
      }
    }
  }
`

export default AboutPage
