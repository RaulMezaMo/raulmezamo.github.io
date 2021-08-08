import * as React from "react";
// import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Section from "../components/Section";
import FrontEnd from "../images/svgs/front-end_sm.svg";
import UXUIDesign from "../images/svgs/ux-ui-design_sm.svg";
import GraphicDesign from "../images/svgs/graphic-design_sm.svg";
import Blob from "../components/SvgComponents/blob_svg";

const IndexPage = ({ data }) => {
  // const eye1 = document.querySelector(".pupila-b");
  // const eye2 = document.querySelector(".pupila-a");
  // if (eye1 && eye2 !== undefined) {
  //   window.addEventListener('mousemove', (evt) => {
  //     const x = -(window.innerWidth / 2 - evt.pageX) / 160;
  //     const y = -(window.innerHeight / 2 - evt.pageY) / 160;
  //     // console.log(x, y);
  //     eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
  //     eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
  //   });
  // };

  return (
    <div className="index">
      <Layout>
        <div className="projectsGallery">
          <div className="headerBlob">
            <div id="indexBlob" className="blob top-50 start-50 translate-middle align-middle">
              <Blob id="blob_svg" />
            </div>
            <h1>¡Hola! Soy Raul Meza Montoya, diseñador gráfico y web.</h1>
          </div>
          {data.allFile.nodes.map((node) => {
            return (
              <Link key={"project-" + node.name} to={"projects/" + node.name.replace(/^\d_/g, "")}>
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
        {/* Section: About me */}
        <Section className="index-section" sectionTitle="Acerca de" id="acerca-de">
          <div className="section-content">
            <div className="introduction">
              <p>
                ¡Mucho gusto! Me llamo Raúl Meza Montoya soy diseñador gráfico de
                Puebla, México.
              </p>
              <p>
                Mi meta es combinar la funcionalidad con lo estético en el diseño
                con elementos narrativos que elevan cualquier concepto.
              </p>
              <button className="btn btn-secondary text-with-icon">Descargar CV
              </button>
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
                <UXUIDesign className="svg inline-svg svg-icon" />
                {/* <img
                className="specialtyIcon"
                src="#"
                alt="Ilustración de wireframe."
              /> */}
                Diseño UX/UI
              </li>
              <li>
                <FrontEnd className="svg inline-svg svg-icon" />
                Desarrollo Front End
              </li>
              <li>
                <GraphicDesign className="svg inline-svg svg-icon" />
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
          </div>

        </Section>
        <Section className="index-section" sectionTitle="Contacto" id="contacto">
          <div className="section-content">
            <p>¡Estaré contento de hablar contigo!</p>
          <a href="mailto:raulmezamontoya@gmail.com">
            Email: raulmezamontoya@gmail.com
          </a>
          <a href="tel:2212064081">Tel: 2212064081</a>
          </div>

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
