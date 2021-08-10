import * as React from 'react'
import Layout from "../../components/Layout"
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import ArrowReturn from "../../components/SvgComponents/icon_arrow-return_svg.js"
import ArrowUp from "../../components/SvgComponents/icon_arrow-up_svg.js"
import BgTwoColors from "../../components/SvgComponents/bg_two-colors_svg"

const ProjectPage = ({ data }) => {
  return (
    <Layout>
      <article>
        <div class="project-heading-section">
          <div class="button-container">
            <button className="btn btn-secondary text-with-icon return-btn">
              Return
              <ArrowReturn />
            </button>
            <button className="btn btn-secondary icon up-btn">
              <ArrowUp />
            </button>
          </div>
          <div className="heading-title">
            <h2 className="projectHeading">{data.mdx.frontmatter.title}</h2>
            <BgTwoColors id="heading-bg" />
          </div>
        </div>
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