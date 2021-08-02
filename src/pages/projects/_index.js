import * as React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'

const projects = () => {
  return (
    <Layout>
      <p>Projects</p>
    </Layout>
  )
}

export const data = graphql`
query {
  allMdx {
    nodes {
      slug
      id
      headings {
        value
        depth
      }
      frontmatter {
        title
      }
    }
  }
}

`

export default projects