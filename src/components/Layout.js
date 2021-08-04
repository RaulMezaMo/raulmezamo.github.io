import * as React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import '../styles/main.scss'
import '../../vendors/font-awesome/css/fontawesome.min.css'
import '../../vendors/font-awesome/css/brands.min.css'

const Layout = ({ children }) => {
  {/* Queries the thumbnails for the project image gallery and the site metadata*/ }
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
      <Helmet>
        {/* Site metadata */}
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      {/* Navbar component */}
      <Navbar />
      {/* Content placed through the children prop */}
      <div className="content">
        {children}
      </div>
      {/* Footer component */}
      <Footer />
    </main>

  )
};

// export const query = graphql`
//   query {
//     allFile(filter: { relativeDirectory: { eq: "thumbnails" } }) {
//       nodes {
//         name
//         id
//         childImageSharp {
//           gatsbyImageData
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

export default Layout