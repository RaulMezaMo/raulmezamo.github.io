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
        {/*------------------------------------------------------*/}
        {/* Section: Header introducción / proyectos */}
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
        {/*------------------------------------------------------*/}
        {/* Section: Acerca de */}
        <Section sectionTitle="Acerca de">
          <div className="introduction">
            <p>
              ¡Mucho gusto! Me llamo Raúl Meza Montoya soy diseñador gráfico de
              Puebla, México.
              <br />
              Mi meta es combinar la funcionalidad con lo estético en el diseño
              con elementos narrativos que elevan cualquier concepto.
            </p>
            <button className="btn secondary-btn">Descargar CV</button>
          </div>
          <h3 className="subtitleHeading">Educación y Experiencia</h3>
          <ul>
            <li>
              <p>Licenciatura en Diseño Gráfico.</p>
              <p>Benemérita Universidad Autónoma de Puebla.</p>
            </li>
            <li>
              <p>Intercambio Académico.</p>
              <p>Universidad Nacional de Colombia. Bogotá, Colombia.</p>
            </li>
            <li>
              <p>Becario de diseño gráfico y web.</p>
              <p>
                Dirección de Cómputo en la Benemérita Universidad Autónoma de
                Puebla.
              </p>
            </li>
          </ul>
          <h3 className="subtitleHeading">Especialidades</h3>
          <ul>
            <li>
              <img className="specialtyIcon" src="#" />
              Diseño UX/UI
            </li>
            <li>
              <img className="specialtyIcon" src="#" />
              Desarrollo Front End
            </li>
            <li>
              <img className="specialtyIcon" src="#" />
              Diseño Gráfico
            </li>
          </ul>
          <h3 className="subtitleHeading">Metas</h3>
          <ul>
            <li>
              Me interesa seguir refinando y aplicar mis habilidades en diseño
              UX/UI.
            </li>
            <li>
              Mis proyectos ideales son digitales en ejecución, con amplia
              comunicación con el cliente para dar en la clave del problema.
            </li>
          </ul>
          <h3 className="subtitleHeading">Hobbies y Habilidades</h3>
          <ul>
            <li>Videojuegos</li>
            <li>Música</li>
            <li>Costura y Confección</li>
            <li>Inglés (Nivel C1)</li>
            <li>Japonés (Básico)こんにちわ！</li>
          </ul>
        </Section>
        {/*------------------------------------------------------*/}
        {/* Section: Contacto */}
        <Section sectionTitle="Contacto">
          <p>¡Estaré contento de hablar contigo!</p>
          <a href="mailto:raulmezamontoya@gmail.com">
            Email: raulmezamontoya@gmail.com
          </a>
          <a href="tel:2212064081">Tel: 2212064081</a>
        </Section>
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
