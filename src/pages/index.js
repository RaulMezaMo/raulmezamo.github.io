import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Section from "../components/Section";

// markup
const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <div className="index">
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
      </Helmet>
      <Layout>
        <div className="headerBlob">
          <h1>¡Hola! Soy Raul Meza Montoya, diseñador gráfico y web.</h1>
          <div className="blob"></div>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="projectsGallery d-flex">
          {data.allFile.nodes.map((node) => {
            return (
              <Link to="/">
                <GatsbyImage
                  image={node.childImageSharp.gatsbyImageData}
                  alt={node.name}
                  key={node.id}
                />
              </Link>
            );
          })}
        </div>
        <Section sectionTitle="Acerca de"></Section>
        <Section sectionTitle="Contacto"></Section>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "thumbnails" } }) {
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
  }
`;

export default IndexPage;
