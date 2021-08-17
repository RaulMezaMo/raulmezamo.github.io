import React, { useState, useEffect } from 'react'
import Layout from "../../components/Layout"
import { graphql, Link } from 'gatsby'
import Navbar from "../../components/Navbar"
import Button from "../../components/Button"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import ArrowReturn from "../../components/SvgComponents/icon_arrow-return_svg.js"
import ArrowUp from "../../components/SvgComponents/icon_arrow-up_svg.js"
import { motion } from "framer-motion"

const ProjectPage = ({ data }) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const { scrollY } = useViewportScroll();

  // const variants = {
  //   visible: { opacity: 1 },
  //   hidden: { opacity: 0 },
  // }

  return (
    <div className="projects">
      <Layout>
        <Navbar />
        <div className="content container-md">
          <article className="project">
            {/* <motion.div layout className={`project-heading-section ${{ scrollY } > 0 ? "away-from-top" : ""}`}> */}
            <motion.div layout className={`project-heading-section ${scrollPosition >= 8 ? "away-from-top" : ""}`}
            >
              <motion.div layout className="button-container">
                <Button type="secondary" href="/" layout classes="text-with-icon return-btn">
                  <p>Return</p>
                  <ArrowReturn />
                </Button>
                <Button type="secondary" href="#" layout classes="icon up-btn">
                  <ArrowUp />
                </Button>
              </motion.div>
              <div className="heading-title">
                <h2 className="projectHeading">{data.mdx.frontmatter.title}</h2>
                <svg id="heading-bg" width="544" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <filter id="blurMe">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                  </filter>
                  <g opacity="0.8" filter="url(#blurMe)">
                    <ellipse cx="12" cy="-26.5" rx="140" ry="140" fill="#F572EF" />
                    <ellipse cx="480  " cy="140" rx="140" ry="140" fill="#FBF59B" />
                  </g>
                </svg>
              </div>
            </motion.div>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </article>
        </div>
      </Layout>
    </div >
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