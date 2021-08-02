import * as React from 'react'
import Layout from "../../components/Layout"
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ProjectPage = ({ data }) => {
  return (
    <Layout>
      <article>
        <button className="btn btn-secondary return-btn">Return</button>
        <button className="btn btn-secondary up-btn">Up</button>
        <h1 className="projectHeading">{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default ProjectPage