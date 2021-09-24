import * as React from 'react';
import Footer from './Footer';
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import '../styles/main.scss';
import '../../vendors/font-awesome/css/fontawesome.min.css';
import '../../vendors/font-awesome/css/brands.min.css';

const Layout = (props) => {
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
      {/* <Navbar /> */}
      {props.children}
      <Footer />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>{data.site.siteMetadata.title}</title>
        <script src="https://cdn.jsdelivr.net/npm/lightgallery@2.2.0/lightgallery.umd.min.js"></script>
        <script src="https://unpkg.com/smoothscroll-anchor-polyfill"></script>
      </Helmet>
    </main>

  )
};

export default Layout