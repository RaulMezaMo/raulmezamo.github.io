import * as React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import '../styles/main.scss'
import '../../vendors/font-awesome/css/fontawesome.min.css'
import '../../vendors/font-awesome/css/brands.min.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query {
     allFile(filter: { relativeDirectory: { eq: "thumbnails" }},  sort: {fields: name}) {
      nodes {
        name
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }`);
  return (
    <main>
      <Navbar />
      <div className="content container-lg">
        {children}
      </div>
      <Footer />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
    </main>

  )
};

export default Layout