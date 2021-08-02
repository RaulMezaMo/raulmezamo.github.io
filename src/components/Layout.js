import * as React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <script src="https://kit.fontawesome.com/6a87f388b7.js" crossorigin="anonymous"></script>
      </Helmet>
      <Navbar />
      <div className="content">
        {children}
      </div>
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