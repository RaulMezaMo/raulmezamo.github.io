import * as React from "react";
// import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Section from "../components/Section";

// markup
const IndexPage = ({ data }) => {
  return (
    <div className="index">
      <Layout>
        <div className="headerBlob">
          <h1>¡Hola! Soy Raul Meza Montoya, diseñador gráfico y web.</h1>
          <div className="blob"></div>
        </div>
        <div className="projectsGallery d-flex">
          {data.allFile.nodes.map((node) => {
            return (
              <Link to={"projects/" + node.name.replace(/^\d_/g, "")}>
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
    allFile(
      filter: { relativeDirectory: { eq: "thumbnails" } }
      sort: { fields: name }
    ) {
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
